/**
 * LIGHTHOUSE - Daily Mental Health Check-In Types
 * Based on the Three Principles: Mind, Consciousness, Thought
 */

export interface LighthouseCheckIn {
  id: string
  user_id?: string
  email?: string
  mood_score: number // 1-10
  feelings: string[]
  thoughts?: string
  ai_response: string
  ai_analysis: AIAnalysis
  crisis_detected: boolean
  created_at: string
  metadata?: {
    energy?: number
    timestamp?: string
    [key: string]: any
  }
}

export interface AIAnalysis {
  principleObserved: 'Mind' | 'Consciousness' | 'Thought' | string
  supportiveInsight: string
  groundingThought: string
  nextSteps: string[]
  crisisDetected: boolean
}

export interface CheckInRequest {
  email?: string
  userId?: string
  moodScore: number
  feelings: string[]
  thoughts?: string
  energy?: number
}

export interface CheckInResponse {
  success: boolean
  checkInId: string
  response: string
  analysis: {
    principleObserved: string
    supportiveInsight: string
    groundingThought: string
    nextSteps: string[]
  }
  crisisDetected: boolean
  crisisResources?: CrisisResources
}

export interface CrisisResources {
  hotline: string
  text: string
  international: string
}

export interface CheckInHistory {
  success: boolean
  checkIns: LighthouseCheckIn[]
  insights: {
    totalCheckIns: number
    averageMood: number
    crisisDetected: number
    streak: number
  }
}

export interface MoodInsights {
  averageMood: number
  moodTrend: 'improving' | 'stable' | 'declining'
  mostCommonFeelings: string[]
  checkInFrequency: number // days per week
  longestStreak: number
  currentStreak: number
}

// Common feeling categories for UI
export const FEELING_CATEGORIES = {
  positive: [
    'Hopeful',
    'Grateful',
    'Peaceful',
    'Energized',
    'Confident',
    'Joyful',
    'Content',
    'Inspired',
    'Loved',
    'Proud'
  ],
  neutral: [
    'Calm',
    'Tired',
    'Thoughtful',
    'Curious',
    'Reflective',
    'Quiet',
    'Uncertain',
    'Restless'
  ],
  challenging: [
    'Anxious',
    'Sad',
    'Frustrated',
    'Overwhelmed',
    'Lonely',
    'Confused',
    'Stressed',
    'Numb',
    'Irritated',
    'Worried'
  ],
  crisis: [
    'Hopeless',
    'Desperate',
    'Worthless',
    'Empty',
    'Trapped',
    'Suicidal'
  ]
} as const

export type FeelingCategory = keyof typeof FEELING_CATEGORIES
export type Feeling = typeof FEELING_CATEGORIES[FeelingCategory][number]

// Three Principles wisdom for reference
export const THREE_PRINCIPLES = {
  MIND: {
    name: 'Mind',
    description: 'Universal intelligence, the source of all consciousness and life',
    wisdom: 'You are connected to infinite intelligence and creative potential'
  },
  CONSCIOUSNESS: {
    name: 'Consciousness',
    description: 'Awareness of existence, the ability to experience life',
    wisdom: 'You have the gift of awareness - the ability to notice your experience'
  },
  THOUGHT: {
    name: 'Thought',
    description: 'The creative agent that directs our experience moment to moment',
    wisdom: 'Your feelings come from your thinking, not your circumstances'
  }
} as const

// Crisis resources
export const CRISIS_RESOURCES = {
  US: {
    name: 'National Suicide Prevention Lifeline',
    phone: '988',
    description: 'Call or text 988 for 24/7 crisis support'
  },
  TEXT: {
    name: 'Crisis Text Line',
    text: 'HOME to 741741',
    description: 'Text support available 24/7'
  },
  INTERNATIONAL: {
    name: 'Find A Helpline',
    url: 'https://findahelpline.com',
    description: 'Crisis resources worldwide'
  },
  EMERGENCY: {
    name: 'Emergency Services',
    phone: '911',
    description: 'Call 911 if you are in immediate danger'
  }
} as const
