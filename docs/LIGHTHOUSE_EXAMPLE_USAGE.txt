/**
 * LIGHTHOUSE Check-In Component Example
 *
 * This is a reference implementation showing how to use the LIGHTHOUSE API.
 * Copy and adapt this for your actual implementation.
 */

'use client'

import { useState } from 'react'
import { CheckInRequest, CheckInResponse, FEELING_CATEGORIES } from '@/types/lighthouse'

export default function LighthouseCheckInExample() {
  const [step, setStep] = useState<'mood' | 'feelings' | 'thoughts' | 'response'>('mood')
  const [moodScore, setMoodScore] = useState(5)
  const [energy, setEnergy] = useState(5)
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([])
  const [thoughts, setThoughts] = useState('')
  const [response, setResponse] = useState<CheckInResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const toggleFeeling = (feeling: string) => {
    setSelectedFeelings(prev =>
      prev.includes(feeling)
        ? prev.filter(f => f !== feeling)
        : [...prev, feeling]
    )
  }

  const submitCheckIn = async () => {
    setLoading(true)

    try {
      const payload: CheckInRequest = {
        email: email || undefined,
        moodScore,
        energy,
        feelings: selectedFeelings,
        thoughts: thoughts || undefined
      }

      const res = await fetch('/api/lighthouse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data: CheckInResponse = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit check-in')
      }

      setResponse(data)
      setStep('response')

      // If crisis detected, you might want to show a modal immediately
      if (data.crisisDetected) {
        // Show crisis modal
        console.log('CRISIS DETECTED - Show crisis resources')
      }

    } catch (error) {
      console.error('Check-in error:', error)
      alert('Failed to submit check-in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">LIGHTHOUSE Check-In</h1>
      <p className="text-gray-600 mb-8">Your daily mental health companion</p>

      {/* Step 1: Mood & Energy */}
      {step === 'mood' && (
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-3">
              How are you feeling today? (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={moodScore}
              onChange={(e) => setMoodScore(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Very Low</span>
              <span className="text-2xl font-bold">{moodScore}</span>
              <span>Excellent</span>
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-3">
              Energy Level (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={energy}
              onChange={(e) => setEnergy(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Exhausted</span>
              <span className="text-2xl font-bold">{energy}</span>
              <span>Energized</span>
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-3">
              Email (optional - for tracking your progress)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <button
            onClick={() => setStep('feelings')}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2: Feelings */}
      {step === 'feelings' && (
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-3">
              What feelings are present? (Select all that apply)
            </label>

            {Object.entries(FEELING_CATEGORIES).map(([category, feelings]) => (
              <div key={category} className="mb-4">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {feelings.map((feeling) => (
                    <button
                      key={feeling}
                      onClick={() => toggleFeeling(feeling)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedFeelings.includes(feeling)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {feeling}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep('mood')}
              className="flex-1 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={() => setStep('thoughts')}
              disabled={selectedFeelings.length === 0}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Thoughts */}
      {step === 'thoughts' && (
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-3">
              What's on your mind? (Optional)
            </label>
            <textarea
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
              placeholder="Share whatever feels right... This is a safe space."
              rows={6}
              className="w-full px-4 py-3 border rounded-lg resize-none"
            />
            <p className="text-sm text-gray-500 mt-2">
              Your thoughts are private and will help generate a more personalized response.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep('feelings')}
              className="flex-1 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={submitCheckIn}
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating Response...' : 'Complete Check-In'}
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Response */}
      {step === 'response' && response && (
        <div className="space-y-6">
          {response.crisisDetected && (
            <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6 mb-6">
              <h3 className="text-red-900 font-bold text-xl mb-3">
                Immediate Support Available
              </h3>
              <p className="text-red-800 mb-4">
                If you're having thoughts of suicide or self-harm, please reach out now:
              </p>
              <div className="space-y-2 text-red-900 font-semibold">
                <p>📞 Call or text 988 (Suicide & Crisis Lifeline)</p>
                <p>💬 Text HOME to 741741 (Crisis Text Line)</p>
                <p>🚨 Call 911 if you're in immediate danger</p>
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="prose prose-blue max-w-none">
              <div className="whitespace-pre-line">{response.response}</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Principle Observed</h4>
              <p className="text-gray-700">{response.analysis.principleObserved}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Insight</h4>
              <p className="text-gray-700">{response.analysis.supportiveInsight}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Ground Yourself In This</h4>
              <p className="text-gray-700">{response.analysis.groundingThought}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                {response.analysis.nextSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <button
            onClick={() => {
              setStep('mood')
              setMoodScore(5)
              setEnergy(5)
              setSelectedFeelings([])
              setThoughts('')
              setResponse(null)
            }}
            className="w-full border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50"
          >
            Done
          </button>
        </div>
      )}

      {/* Three Principles Footer */}
      <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
        <p>Guided by the Three Principles</p>
        <p className="mt-1">Mind • Consciousness • Thought</p>
      </div>
    </div>
  )
}

/**
 * USAGE IN YOUR APP:
 *
 * 1. Import the component:
 *    import LighthouseCheckIn from '@/components/LighthouseCheckIn'
 *
 * 2. Use it in your page:
 *    <LighthouseCheckIn />
 *
 * 3. To retrieve history:
 */

export async function getLighthouseHistory(email: string) {
  const response = await fetch(
    `/api/lighthouse?email=${encodeURIComponent(email)}&limit=30`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch check-in history')
  }

  const data = await response.json()
  return data
}

/**
 * EXAMPLE: Display user's streak and average mood
 */

export function LighthouseInsightsExample({ email }: { email: string }) {
  const [insights, setInsights] = useState<any>(null)

  const loadInsights = async () => {
    try {
      const data = await getLighthouseHistory(email)
      setInsights(data.insights)
    } catch (error) {
      console.error('Failed to load insights:', error)
    }
  }

  // Call loadInsights() on mount or when email changes

  if (!insights) return null

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white rounded-lg p-4 shadow">
        <div className="text-3xl font-bold text-blue-600">{insights.streak}</div>
        <div className="text-sm text-gray-600">Day Streak</div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <div className="text-3xl font-bold text-green-600">{insights.averageMood}</div>
        <div className="text-sm text-gray-600">Avg Mood</div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <div className="text-3xl font-bold text-purple-600">{insights.totalCheckIns}</div>
        <div className="text-sm text-gray-600">Check-Ins</div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <div className="text-3xl font-bold text-yellow-600">
          {insights.crisisDetected === 0 ? '✓' : insights.crisisDetected}
        </div>
        <div className="text-sm text-gray-600">
          {insights.crisisDetected === 0 ? 'Stable' : 'Alerts'}
        </div>
      </div>
    </div>
  )
}
