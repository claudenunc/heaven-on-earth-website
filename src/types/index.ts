// Database Types
export interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
}

export interface PerfectWorldResponse {
  id: string;
  user_id?: string;
  responses: Record<string, any>;
  created_at: string;
}

export interface DreamCatcherDream {
  id: string;
  user_id?: string;
  childhood_dream: string;
  current_situation?: string;
  ai_response?: Record<string, any>;
  commitment?: string;
  commitment_date?: string;
  created_at: string;
}

export interface LighthouseCheckin {
  id: string;
  user_id?: string;
  mood_score: number;
  thoughts?: string;
  patterns?: Record<string, any>;
  created_at: string;
}

export interface CourseEnrollment {
  id: string;
  user_id: string;
  tier: 'foundation' | 'transformation' | 'architect';
  stripe_session_id?: string;
  status: 'active' | 'cancelled' | 'paused';
  enrolled_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  published_at?: string;
  created_at: string;
}

export interface EmailSubscriber {
  id: string;
  email: string;
  source?: string;
  tags?: string[];
  subscribed_at: string;
}

export interface AnalyticsEvent {
  id: string;
  event_type: string;
  user_id?: string;
  metadata?: Record<string, any>;
  created_at: string;
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export interface CardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
  source?: string;
}

export interface PerfectWorldFormData {
  [key: string]: string | number | boolean | string[];
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}
