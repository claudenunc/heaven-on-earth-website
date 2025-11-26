import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

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

const TIER_PRICES = {
  foundation: 9700, // $97.00 in cents
  transformation: 29700, // $297.00 in cents
  architect: 99700, // $997.00 in cents
};

const TIER_NAMES = {
  foundation: 'Foundation',
  transformation: 'Transformation',
  architect: 'Architect',
};

export async function POST(request: NextRequest) {
  try {
    const { tier } = await request.json();

    // Validate tier
    if (!tier || !TIER_PRICES[tier as keyof typeof TIER_PRICES]) {
      return NextResponse.json(
        { error: 'Invalid tier specified' },
        { status: 400 }
      );
    }

    const price = TIER_PRICES[tier as keyof typeof TIER_PRICES];
    const tierName = TIER_NAMES[tier as keyof typeof TIER_NAMES];

    // Get the base URL for success/cancel redirects
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // Create Stripe Checkout Session
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `THE CURE - ${tierName} Tier`,
              description: `12-week transformation program - ${tierName} level support`,
              images: [`${baseUrl}/images/the-cure-logo.png`],
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/the-cure/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/the-cure`,
      metadata: {
        tier,
        course: 'the-cure',
      },
      customer_email: undefined, // User can enter their email
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
