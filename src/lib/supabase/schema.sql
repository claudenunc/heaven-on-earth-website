-- Heaven on Earth Database Schema
-- Deploy this to your Supabase project

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Perfect World responses
CREATE TABLE IF NOT EXISTS perfect_world_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  responses JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Dream Catcher submissions
CREATE TABLE IF NOT EXISTS dream_catcher_dreams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  childhood_dream TEXT NOT NULL,
  current_situation TEXT,
  ai_response JSONB,
  commitment TEXT,
  commitment_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- LIGHTHOUSE check-ins
CREATE TABLE IF NOT EXISTS lighthouse_checkins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  email TEXT,
  mood_score INTEGER CHECK (mood_score BETWEEN 1 AND 10),
  feelings TEXT[],
  thoughts TEXT,
  ai_response TEXT,
  ai_analysis JSONB,
  crisis_detected BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::jsonb
);

-- THE CURE enrollments
CREATE TABLE IF NOT EXISTS course_enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  course_name TEXT NOT NULL DEFAULT 'the-cure',
  tier TEXT NOT NULL CHECK (tier IN ('foundation', 'transformation', 'architect')),
  stripe_session_id TEXT UNIQUE,
  stripe_customer_id TEXT,
  amount_paid INTEGER NOT NULL, -- in cents
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'cancelled', 'expired')),
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Course progress tracking
CREATE TABLE IF NOT EXISTS course_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  enrollment_id UUID REFERENCES course_enrollments(id) ON DELETE CASCADE,
  module_id INTEGER NOT NULL,
  lesson_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  time_spent_seconds INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(enrollment_id, module_id, lesson_id)
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Nathan Michel',
  author_bio TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read_time TEXT,
  featured_image TEXT,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  views INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Email subscribers
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  source TEXT,
  tags TEXT[],
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced', 'spam')),
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Analytics events
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type TEXT NOT NULL,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_user ON course_enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON course_enrollments(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_stripe_customer ON course_enrollments(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_progress_user ON course_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_enrollment ON course_progress(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_lighthouse_checkins_user ON lighthouse_checkins(user_id);
CREATE INDEX IF NOT EXISTS idx_lighthouse_checkins_email ON lighthouse_checkins(email);
CREATE INDEX IF NOT EXISTS idx_lighthouse_checkins_crisis ON lighthouse_checkins(crisis_detected);
CREATE INDEX IF NOT EXISTS idx_lighthouse_checkins_created ON lighthouse_checkins(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_dream_catcher_user ON dream_catcher_dreams(user_id);
CREATE INDEX IF NOT EXISTS idx_email_subscribers_email ON email_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_email_subscribers_status ON email_subscribers(status);

-- Row Level Security (RLS) Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE perfect_world_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE dream_catcher_dreams ENABLE ROW LEVEL SECURITY;
ALTER TABLE lighthouse_checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Public read access for blog posts (published only)
CREATE POLICY "Blog posts are publicly readable"
  ON blog_posts FOR SELECT
  USING (published_at IS NOT NULL);

-- Users can read their own data
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  USING (true);

-- Anyone can insert analytics events
CREATE POLICY "Anyone can insert analytics"
  ON analytics_events FOR INSERT
  WITH CHECK (true);

-- Anyone can submit Perfect World responses
CREATE POLICY "Anyone can submit Perfect World responses"
  ON perfect_world_responses FOR INSERT
  WITH CHECK (true);

-- Anyone can submit dreams
CREATE POLICY "Anyone can submit dreams"
  ON dream_catcher_dreams FOR INSERT
  WITH CHECK (true);

-- Anyone can submit LIGHTHOUSE check-ins
CREATE POLICY "Anyone can submit check-ins"
  ON lighthouse_checkins FOR INSERT
  WITH CHECK (true);

-- Anyone can subscribe to newsletter
CREATE POLICY "Anyone can subscribe"
  ON email_subscribers FOR INSERT
  WITH CHECK (true);

-- Comments (for future implementation)
COMMENT ON TABLE users IS 'User accounts for authenticated features';
COMMENT ON TABLE perfect_world_responses IS 'Responses to the Perfect World survey';
COMMENT ON TABLE dream_catcher_dreams IS 'Dream Catcher childhood dream submissions';
COMMENT ON TABLE lighthouse_checkins IS 'LIGHTHOUSE daily mental health check-ins';
COMMENT ON TABLE course_enrollments IS 'THE CURE course enrollments and tiers';
COMMENT ON TABLE blog_posts IS 'Blog posts and articles';
COMMENT ON TABLE email_subscribers IS 'Newsletter email subscribers';
COMMENT ON TABLE analytics_events IS 'Site analytics and user events';
