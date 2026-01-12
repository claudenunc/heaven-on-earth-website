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

export async function POST(request: NextRequest) {
  try {
    const { name, email, interestArea, message } = await request.json();

    // Validate required fields
    if (!email || !name || !interestArea) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into revolution_signups table
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('revolution_signups')
      .insert([
        {
          email,
          name,
          interest_area: interestArea,
          message: message || null,
          subscribed_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save signup' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
