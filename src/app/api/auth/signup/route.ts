import { NextRequest, NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy initialization to prevent build errors when env vars are missing
function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Supabase environment variables are not configured');
  }
  return createClient(url, key);
}

// Request body type
interface SignupRequest {
  email: string;
  name?: string;
}

// Main POST handler
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: SignupRequest = await request.json();

    // Validate email is required
    if (!body.email || typeof body.email !== 'string' || body.email.trim().length === 0) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();
    const name = body.name?.trim() || null;
    const source = (body as any).source?.trim() || 'login-page';

    const supabase = getSupabase();

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('email_subscribers')
      .select('email, created_at')
      .eq('email', email)
      .single();

    if (existingUser) {
      // User exists - this is a login
      return NextResponse.json({
        success: true,
        message: 'Welcome back to the movement',
        isNewUser: false,
        user: {
          email: existingUser.email,
        }
      }, { status: 200 });
    }

    // New user - create subscriber record
    const { data: newUser, error: insertError } = await supabase
      .from('email_subscribers')
      .insert({
        email,
        name,
        source: source,
        status: 'active',
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database error:', insertError);
      return NextResponse.json({
        error: 'Database error: ' + insertError.message,
        code: insertError.code
      }, { status: 500 });
    }

    // Return successful response
    return NextResponse.json({
      success: true,
      message: 'Welcome to the movement',
      isNewUser: true,
      user: {
        email: newUser.email,
        name: newUser.name,
      }
    }, { status: 201 });

  } catch (error: any) {
    console.error('Signup API Error:', error);

    // Generic error response
    return NextResponse.json(
      {
        error: 'Failed to process signup. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: Support GET for health check
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'operational',
    service: 'Authentication Service',
    message: 'Ready to welcome new members to the movement',
  });
}
