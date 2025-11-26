import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy initialization to prevent build errors when env vars are missing
function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }
  return new Stripe(key, {
    apiVersion: '2024-11-20.acacia',
  });
}

function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Supabase environment variables are not configured');
  }
  return createClient(url, key);
}

async function buffer(readable: ReadableStream<Uint8Array>) {
  const chunks: Uint8Array[] = [];
  const reader = readable.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  return Buffer.concat(chunks);
}

export async function POST(request: NextRequest) {
  const body = await buffer(request.body!);
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  const stripe = getStripe();

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  // Handle different event types
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutCompleted(session);
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment succeeded:', paymentIntent.id);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error('Payment failed:', paymentIntent.id);
        // TODO: Send email notification about failed payment
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const { tier, course } = session.metadata || {};
  const customerEmail = session.customer_email || session.customer_details?.email;

  if (!tier || !customerEmail) {
    console.error('Missing required metadata in checkout session');
    return;
  }

  console.log(`Processing enrollment: ${customerEmail} - ${tier} tier`);

  const supabase = getSupabase();

  // Create or get user
  let userId: string;
  const { data: existingUser } = await supabase
    .from('users')
    .select('id')
    .eq('email', customerEmail)
    .single();

  if (existingUser) {
    userId = existingUser.id;
  } else {
    // Create new user
    const { data: newUser, error } = await supabase
      .from('users')
      .insert({
        email: customerEmail,
        name: session.customer_details?.name || null,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error || !newUser) {
      console.error('Failed to create user:', error);
      return;
    }

    userId = newUser.id;
  }

  // Create enrollment record
  const { error: enrollmentError } = await supabase
    .from('course_enrollments')
    .insert({
      user_id: userId,
      course_name: course || 'the-cure',
      tier,
      stripe_session_id: session.id,
      stripe_customer_id: session.customer as string,
      amount_paid: session.amount_total || 0,
      enrolled_at: new Date().toISOString(),
      status: 'active',
    });

  if (enrollmentError) {
    console.error('Failed to create enrollment:', enrollmentError);
    return;
  }

  console.log(`Successfully enrolled ${customerEmail} in ${tier} tier`);

  // TODO: Send welcome email with course access instructions
  // TODO: Trigger email notification via Resend
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const supabase = getSupabase();

  // Update enrollment status to inactive
  const { error } = await supabase
    .from('course_enrollments')
    .update({ status: 'inactive', ended_at: new Date().toISOString() })
    .eq('stripe_customer_id', customerId);

  if (error) {
    console.error('Failed to deactivate enrollment:', error);
    return;
  }

  console.log(`Deactivated enrollment for customer: ${customerId}`);
}
