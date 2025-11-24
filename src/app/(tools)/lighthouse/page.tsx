'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function LighthousePage() {
  const [submitted, setSubmitted] = useState(false);
  const [mood, setMood] = useState(5);
  const [sleep, setSleep] = useState(5);
  const [stress, setStress] = useState(5);
  const [thoughts, setThoughts] = useState('');
  const [helped, setHelped] = useState('');
  const [challenges, setChallenges] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: API call to /api/lighthouse
    // For now, just simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <Card className="border-t-4 border-t-gold">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Thank You for Checking In</CardTitle>
                <CardDescription className="text-center text-lg">
                  Your response has been recorded
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <div className="text-6xl mb-4">🏮</div>

                {mood < 4 && (
                  <div className="bg-warm-coral/10 border-l-4 border-warm-coral p-4 text-left">
                    <p className="font-bold text-navy mb-2">We See You&apos;re Struggling</p>
                    <p className="text-gray-700 text-sm mb-3">
                      You&apos;re not alone. Here are immediate resources:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Crisis Text Line:</strong> Text HOME to 741741
                      </div>
                      <div>
                        <strong>National Suicide Prevention:</strong> Call 988
                      </div>
                      <div>
                        <strong>Crisis Chat:</strong> <a href="https://988lifeline.org/chat" className="text-gold underline">988lifeline.org/chat</a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Every check-in helps us understand your patterns. After 7 check-ins,
                    we&apos;ll show you insights about your mental health journey.
                  </p>

                  <p className="font-bold text-navy">
                    You showed up today. That matters.
                  </p>

                  {email && (
                    <p className="text-sm">
                      We&apos;ll email you tomorrow to check in again.
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-gold text-navy hover:bg-gold/90"
                  >
                    Check In Again Tomorrow
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/depression">Learn About THE CURE</a>
                  </Button>
                </div>

                <p className="text-sm text-gray-600">
                  This tool is free. Always. Because everyone deserves support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🏮</div>
            <h1 className="font-heading text-4xl md:text-5xl mb-4">
              LIGHTHOUSE Daily Check-In
            </h1>
            <p className="text-xl text-soft-sky mb-6">
              Your mental health matters. Every day.
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Answer 6 simple questions. Track patterns. Get support before crisis.
              Completely free. Always.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-8 text-center">
              How LIGHTHOUSE Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">📝</div>
                  <CardTitle>1. Daily Check-In</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Rate your mood, sleep, and stress. Share what&apos;s on your mind.
                    Takes 2 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">📊</div>
                  <CardTitle>2. Pattern Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    After 7 days, AI analyzes your responses to spot trends
                    humans miss. Early warning system.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">💙</div>
                  <CardTitle>3. Support When Needed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    If you&apos;re struggling, immediate crisis resources.
                    Weekly encouragement. Never alone.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-soft-sky/20 p-6 rounded-lg text-center">
              <p className="text-lg text-navy font-bold mb-2">
                Prevention Over Reaction
              </p>
              <p className="text-gray-700">
                Depression builds slowly. So does recovery. Daily check-ins catch warning signs
                before they become crises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Check-In Form */}
      <section className="py-16 bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-t-4 border-t-gold">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Today&apos;s Check-In</CardTitle>
                <CardDescription className="text-center">
                  How are you really doing?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Mood Scale */}
                  <div className="space-y-3">
                    <label className="block text-navy font-bold">
                      Mood (1-10)
                      <span className="font-normal text-gray-600 ml-2">
                        1 = Terrible, 10 = Amazing
                      </span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">😢</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={mood}
                        onChange={(e) => setMood(parseInt(e.target.value))}
                        className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                      />
                      <span className="text-2xl">😊</span>
                      <span className="text-2xl font-bold text-navy w-8">{mood}</span>
                    </div>
                  </div>

                  {/* Thoughts */}
                  <div className="space-y-3">
                    <label htmlFor="thoughts" className="block text-navy font-bold">
                      What&apos;s on your mind today?
                      <span className="font-normal text-gray-600 ml-2">(Optional)</span>
                    </label>
                    <textarea
                      id="thoughts"
                      value={thoughts}
                      onChange={(e) => setThoughts(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                      rows={4}
                      placeholder="Whatever you're thinking or feeling... no judgment here."
                    />
                  </div>

                  {/* Sleep Quality */}
                  <div className="space-y-3">
                    <label className="block text-navy font-bold">
                      Sleep Quality (1-10)
                      <span className="font-normal text-gray-600 ml-2">
                        1 = Terrible, 10 = Great
                      </span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">😴</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={sleep}
                        onChange={(e) => setSleep(parseInt(e.target.value))}
                        className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                      />
                      <span className="text-2xl">😌</span>
                      <span className="text-2xl font-bold text-navy w-8">{sleep}</span>
                    </div>
                  </div>

                  {/* Stress Level */}
                  <div className="space-y-3">
                    <label className="block text-navy font-bold">
                      Stress Level (1-10)
                      <span className="font-normal text-gray-600 ml-2">
                        1 = Calm, 10 = Overwhelmed
                      </span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">😌</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={stress}
                        onChange={(e) => setStress(parseInt(e.target.value))}
                        className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                      />
                      <span className="text-2xl">😰</span>
                      <span className="text-2xl font-bold text-navy w-8">{stress}</span>
                    </div>
                  </div>

                  {/* What Helped */}
                  <div className="space-y-3">
                    <label htmlFor="helped" className="block text-navy font-bold">
                      What helped today?
                      <span className="font-normal text-gray-600 ml-2">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="helped"
                      value={helped}
                      onChange={(e) => setHelped(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="A walk, a conversation, a moment of peace..."
                    />
                  </div>

                  {/* Challenges */}
                  <div className="space-y-3">
                    <label htmlFor="challenges" className="block text-navy font-bold">
                      What made it hard?
                      <span className="font-normal text-gray-600 ml-2">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="challenges"
                      value={challenges}
                      onChange={(e) => setChallenges(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="Work stress, loneliness, anxiety..."
                    />
                  </div>

                  {/* Email Optional */}
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-navy font-bold">
                      Email (Optional)
                      <span className="font-normal text-gray-600 ml-2">
                        For daily reminders + weekly insights
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="your@email.com"
                    />
                    <p className="text-sm text-gray-600">
                      We&apos;ll never spam you or sell your data. Promise.
                    </p>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold text-navy hover:bg-gold/90 font-bold"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Complete Check-In'}
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    Your data is private and encrypted. We use it only to support you.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Daily Check-Ins Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-8 text-center">
              Why Daily Check-Ins Work
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Builds Self-Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Most people don&apos;t know they&apos;re sliding until they&apos;re at the bottom.
                    Daily check-ins force conscious reflection. You notice patterns before they notice you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Creates Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Knowing you&apos;ll check in tomorrow makes you more likely to take care of yourself today.
                    Small daily actions compound into life-changing results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Catches Warning Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    3 days of poor sleep + rising stress + dropping mood = red flag.
                    AI pattern detection alerts you before crisis. Prevention saves lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Tracks What Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    After 30 days, you&apos;ll see: What helps your mood? What triggers stress?
                    When do you sleep best? Data-driven self-care, personalized to you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Your Mental Health Deserves Daily Attention
            </h2>
            <p className="text-xl text-soft-sky mb-4">
              You brush your teeth every day. You charge your phone every day.
            </p>
            <p className="text-2xl font-bold mb-8">
              Why not check in with yourself every day?
            </p>
            <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 font-bold" asChild>
              <a href="#check-in">Start Your Check-In</a>
            </Button>
            <p className="text-sm text-soft-sky mt-6">
              Free. Private. No judgment. Just support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
