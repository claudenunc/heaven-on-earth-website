-- RUN THIS IN SUPABASE SQL EDITOR BEFORE LAUNCHING
-- Creates table for revolution signups

CREATE TABLE IF NOT EXISTS revolution_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  interest_area TEXT NOT NULL, -- 'sales', 'developer', 'partner', 'community'
  message TEXT,
  subscribed_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_revolution_signups_email ON revolution_signups(email);

-- Add index for interest area filtering
CREATE INDEX IF NOT EXISTS idx_revolution_signups_interest ON revolution_signups(interest_area);

-- Optional: Prevent duplicate signups
CREATE UNIQUE INDEX IF NOT EXISTS idx_revolution_signups_email_unique ON revolution_signups(email);
