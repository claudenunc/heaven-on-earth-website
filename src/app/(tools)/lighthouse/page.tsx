'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Lightbulb, ArrowRight, Shield, Brain, Heart, Clock, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 section-cyber" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto">
              <Card className="border-t-4 border-t-matrix">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-matrix/20 flex items-center justify-center border border-matrix/50">
                    <CheckCircle2 className="w-10 h-10 text-matrix" />
                  </div>
                  <CardTitle className="text-3xl text-center">Thank You for Checking In</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Your response has been recorded
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {mood < 4 && (
                    <div className="glass-card p-6 rounded-xl border-l-4 border-l-danger">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-5 h-5 text-danger flex-shrink-0" />
                        <p className="font-bold text-ghost">We See You&apos;re Struggling</p>
                      </div>
                      <p className="text-ghost-muted text-sm mb-4">
                        You&apos;re not alone. Here are immediate resources:
                      </p>
                      <div className="space-y-2 text-sm text-ghost-muted">
                        <div><strong className="text-ghost">Crisis Text Line:</strong> Text HOME to 741741</div>
                        <div><strong className="text-ghost">National Suicide Prevention:</strong> Call 988</div>
                        <div>
                          <strong className="text-ghost">Crisis Chat:</strong>{' '}
                          <a href="https://988lifeline.org/chat" className="text-cyber hover:underline">988lifeline.org/chat</a>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 text-ghost-muted text-center">
                    <p>
                      Every check-in helps us understand your patterns. After 7 check-ins,
                      we&apos;ll show you insights about your mental health journey.
                    </p>
                    <p className="font-bold text-gradient text-xl">
                      You showed up today. That matters.
                    </p>
                    {email && (
                      <p className="text-sm">
                        We&apos;ll email you tomorrow to check in again.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button onClick={() => setSubmitted(false)} variant="secondary">
                      Check In Again
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/the-cure">Learn About THE CURE</a>
                    </Button>
                  </div>

                  <p className="text-sm text-ghost-dim text-center">
                    This tool is free. Always. Because everyone deserves support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-20" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-matrix/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyber to-matrix flex items-center justify-center shadow-glow-lg">
              <Lightbulb className="w-10 h-10 text-void" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">LIGHTHOUSE</span>
            </h1>
            <p className="text-2xl text-cyber mb-4">
              Daily Mental Health Check-In
            </p>
            <p className="text-xl text-ghost-muted mb-8 max-w-2xl mx-auto">
              Your mental health matters. Every day. Answer 6 simple questions.
              Track patterns. Get support before crisis. Completely free. Always.
            </p>
            <Button size="lg" variant="secondary" asChild className="group">
              <a href="#check-in">
                Start Today&apos;s Check-In
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber/50 to-transparent" />
      </section>

      {/* How It Works */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">How LIGHTHOUSE Works</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Clock, title: '1. Daily Check-In', desc: 'Rate your mood, sleep, and stress. Share what\'s on your mind. Takes 2 minutes.', color: 'cyber' },
                { icon: Brain, title: '2. Pattern Detection', desc: 'After 7 days, AI analyzes your responses to spot trends humans miss. Early warning system.', color: 'plasma' },
                { icon: Heart, title: '3. Support When Needed', desc: 'If you\'re struggling, immediate crisis resources. Weekly encouragement. Never alone.', color: 'matrix' },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className={`feature-icon mx-auto mb-4 ${
                      item.color === 'cyber' ? 'text-cyber border-cyber/30' :
                      item.color === 'plasma' ? 'text-plasma border-plasma/30' :
                      'text-matrix border-matrix/30'
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ghost-muted text-sm text-center">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <p className="text-lg text-ghost font-bold mb-2">Prevention Over Reaction</p>
              <p className="text-ghost-muted">
                Depression builds slowly. So does recovery. Daily check-ins catch warning signs before they become crises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Check-In Form */}
      <section id="check-in" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 section-cyber" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto">
            <Card className="border-t-4 border-t-cyber">
              <CardHeader>
                <div className="cyber-badge mx-auto mb-4">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Daily Check-In
                </div>
                <CardTitle className="text-2xl text-center">How are you really doing?</CardTitle>
                <CardDescription className="text-center">
                  Be honest. There&apos;s no judgment here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Mood Scale */}
                  <div className="space-y-3">
                    <label className="block text-ghost font-bold">
                      Mood (1-10)
                      <span className="font-normal text-ghost-muted ml-2">1 = Terrible, 10 = Amazing</span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">1</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={mood}
                        onChange={(e) => setMood(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-void-light rounded-lg appearance-none cursor-pointer accent-cyber"
                      />
                      <span className="text-2xl">10</span>
                      <span className="text-2xl font-bold text-cyber w-8">{mood}</span>
                    </div>
                  </div>

                  {/* Sleep Quality */}
                  <div className="space-y-3">
                    <label className="block text-ghost font-bold">
                      Sleep Quality (1-10)
                      <span className="font-normal text-ghost-muted ml-2">1 = Terrible, 10 = Great</span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">1</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={sleep}
                        onChange={(e) => setSleep(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-void-light rounded-lg appearance-none cursor-pointer accent-plasma"
                      />
                      <span className="text-2xl">10</span>
                      <span className="text-2xl font-bold text-plasma w-8">{sleep}</span>
                    </div>
                  </div>

                  {/* Stress Level */}
                  <div className="space-y-3">
                    <label className="block text-ghost font-bold">
                      Stress Level (1-10)
                      <span className="font-normal text-ghost-muted ml-2">1 = Calm, 10 = Overwhelmed</span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">1</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={stress}
                        onChange={(e) => setStress(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-void-light rounded-lg appearance-none cursor-pointer accent-danger"
                      />
                      <span className="text-2xl">10</span>
                      <span className="text-2xl font-bold text-danger w-8">{stress}</span>
                    </div>
                  </div>

                  {/* Thoughts */}
                  <div className="space-y-3">
                    <label htmlFor="thoughts" className="block text-ghost font-bold">
                      What&apos;s on your mind today?
                      <span className="font-normal text-ghost-muted ml-2">(Optional)</span>
                    </label>
                    <Textarea
                      id="thoughts"
                      value={thoughts}
                      onChange={(e) => setThoughts(e.target.value)}
                      placeholder="Whatever you're thinking or feeling... no judgment here."
                      rows={4}
                    />
                  </div>

                  {/* What Helped */}
                  <div className="space-y-3">
                    <label htmlFor="helped" className="block text-ghost font-bold">
                      What helped today?
                      <span className="font-normal text-ghost-muted ml-2">(Optional)</span>
                    </label>
                    <Input
                      type="text"
                      id="helped"
                      value={helped}
                      onChange={(e) => setHelped(e.target.value)}
                      placeholder="A walk, a conversation, a moment of peace..."
                    />
                  </div>

                  {/* Challenges */}
                  <div className="space-y-3">
                    <label htmlFor="challenges" className="block text-ghost font-bold">
                      What made it hard?
                      <span className="font-normal text-ghost-muted ml-2">(Optional)</span>
                    </label>
                    <Input
                      type="text"
                      id="challenges"
                      value={challenges}
                      onChange={(e) => setChallenges(e.target.value)}
                      placeholder="Work stress, loneliness, anxiety..."
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-ghost font-bold">
                      Email (Optional)
                      <span className="font-normal text-ghost-muted ml-2">For daily reminders + weekly insights</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                    />
                    <p className="text-sm text-ghost-dim">
                      We&apos;ll never spam you or sell your data. Promise.
                    </p>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Complete Check-In'}
                  </Button>

                  <p className="text-center text-sm text-ghost-dim">
                    Your data is private and encrypted. We use it only to support you.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">Why Daily Check-Ins Work</span>
            </h2>

            <div className="space-y-6">
              {[
                { title: 'Builds Self-Awareness', desc: 'Most people don\'t know they\'re sliding until they\'re at the bottom. Daily check-ins force conscious reflection. You notice patterns before they notice you.' },
                { title: 'Creates Accountability', desc: 'Knowing you\'ll check in tomorrow makes you more likely to take care of yourself today. Small daily actions compound into life-changing results.' },
                { title: 'Catches Warning Signs', desc: '3 days of poor sleep + rising stress + dropping mood = red flag. AI pattern detection alerts you before crisis. Prevention saves lives.' },
                { title: 'Tracks What Works', desc: 'After 30 days, you\'ll see: What helps your mood? What triggers stress? When do you sleep best? Data-driven self-care, personalized to you.' },
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-cyber">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ghost-muted">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyber/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-matrix/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Your Mental Health Deserves Daily Attention</span>
            </h2>
            <p className="text-xl text-ghost-muted mb-4">
              You brush your teeth every day. You charge your phone every day.
            </p>
            <p className="text-2xl font-bold mb-12 text-ghost">
              Why not check in with yourself every day?
            </p>
            <Button size="lg" variant="secondary" asChild className="group">
              <a href="#check-in">
                Start Your Check-In
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-ghost-dim mt-8">
              Free. Private. No judgment. Just support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
