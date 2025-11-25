'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Sparkles, ArrowRight, Star, Clock, CheckCircle2, Loader2, Share2 } from 'lucide-react';

type Step = 'landing' | 'dream-input' | 'context' | 'processing' | 'results' | 'commitment' | 'share';

export default function DreamCatcherPage() {
  const [step, setStep] = useState<Step>('landing');
  const [dream, setDream] = useState('');
  const [age, setAge] = useState('');
  const [blockers, setBlockers] = useState<string[]>([]);
  const [feeling, setFeeling] = useState(5);
  const [aiResponse, setAiResponse] = useState('');
  const [selectedStep, setSelectedStep] = useState(0);
  const [commitmentDate, setCommitmentDate] = useState('');
  const [email, setEmail] = useState('');

  const handleDreamSubmit = () => {
    if (dream.trim()) {
      setStep('context');
    }
  };

  const handleContextSubmit = () => {
    setStep('processing');
    setTimeout(() => {
      setAiResponse(getMockAIResponse());
      setStep('results');
    }, 3000);
  };

  const handleCommitment = () => {
    setStep('share');
  };

  const getMockAIResponse = () => {
    return `The child who wanted to become a marine biologist knew something important: the world needs people who feel called to protect what others take for granted. Your fascination with ocean life wasn't just childhood wonder - it was an early recognition of your purpose.

Today, with oceans facing unprecedented challenges, people like you - who feel that pull toward the sea - are exactly who we need. The curiosity that made you dream of exploring tide pools at 8 years old? That's the same instinct scientists use to make discoveries that change conservation efforts.

What stopped you wasn't a lack of ability. It was a system that made following your calling feel impossible. But here's what that system didn't tell you: there are more pathways to ocean work than ever before. And they don't all require traditional marine biology degrees.

Your dream isn't dead. It's been waiting for you to remember it was valid all along.`;
  };

  const actionSteps = [
    {
      title: 'Watch "My Octopus Teacher"',
      type: 'EXPLORE',
      time: '1.5 hours',
      difficulty: 'Easy',
      why: 'This film reignites wonder for the ocean. It reminds you why you cared in the first place.',
      resource: 'Available on Netflix'
    },
    {
      title: 'Take "Introduction to Marine Biology" (free)',
      type: 'LEARN',
      time: '4 weeks',
      difficulty: 'Medium',
      why: 'Test if the science still fascinates you like it did when you were young.',
      resource: 'Coursera - audit for free'
    },
    {
      title: 'Volunteer at Local Aquarium',
      type: 'CONNECT',
      time: 'Ongoing',
      difficulty: 'Medium',
      why: 'Connect with people living your dream. Ask them how they got there.',
      resource: 'Search "aquarium volunteer" + your city'
    }
  ];

  if (step === 'landing') {
    return (
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-20" />

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-plasma/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-plasma to-cyber flex items-center justify-center shadow-glow-purple">
                <Sparkles className="w-10 h-10 text-void" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-ghost">What Did You Want to Be</span>
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-gradient">Before the World Said No?</span>
              </h2>
              <p className="text-xl md:text-2xl text-ghost-muted mb-12 max-w-2xl mx-auto">
                That dream you buried? It&apos;s still alive. Let&apos;s wake it up.
              </p>
              <Button
                size="xl"
                variant="secondary"
                onClick={() => setStep('dream-input')}
                className="group"
              >
                Reclaim Your Dream
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-ghost-dim mt-6">
                Join 47,832 people rediscovering their childhood dreams
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber/50 to-transparent" />
        </section>

        {/* The Problem */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                <span className="text-danger">96% of Adults</span>{' '}
                <span className="text-ghost">Abandoned Their Childhood Dream</span>
              </h2>
              <p className="text-xl text-ghost-muted mb-12 max-w-2xl mx-auto">
                Not because it was impossible. Because someone said it was.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '1', title: 'Remember', desc: 'What did you dream of before anyone told you what was "realistic"?' },
                  { icon: '2', title: 'Validate', desc: 'AI-powered Dream Keeper shows you why your dream was valid all along.' },
                  { icon: '3', title: 'Act', desc: 'Get 3 personalized first steps you can take this week to reclaim your dream.' },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="feature-icon mx-auto mb-4 text-cyber border-cyber/30">
                        <span className="font-bold">{item.icon}</span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
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

        {/* Social Proof */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 section-cyber" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Dreams Being Reclaimed Right Now</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { quote: 'I wanted to be an artist, but was told to get a "real job." Now I\'m 43 and just bought my first set of paints in 25 years.', author: 'Sarah, rediscovering her gift' },
                  { quote: 'I dreamed of helping animals. The Dream Catcher helped me realize veterinary school isn\'t the only path. I start volunteering at a rescue next week.', author: 'Marcus, age 28' },
                  { quote: 'Astronaut seemed impossible. But the Dream Keeper showed me the essence was exploration and wonder. Now I\'m learning astrophotography.', author: 'David, reconnecting with curiosity' },
                  { quote: 'I wanted to write stories. Life got in the way. Today I wrote my first page in 15 years. My dream is waking up.', author: 'Elena, writing again' },
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-plasma">
                    <CardContent className="pt-6">
                      <p className="text-ghost-muted italic mb-3">&quot;{item.quote}&quot;</p>
                      <p className="text-sm text-ghost-dim">- {item.author}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-plasma/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyber/20 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Your Dream Is Still Alive</span>
              </h2>
              <p className="text-xl text-ghost-muted mb-8">
                It&apos;s been waiting for you to remember it was valid all along.
              </p>
              <Button
                size="xl"
                variant="secondary"
                onClick={() => setStep('dream-input')}
                className="group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-ghost-dim mt-6">
                5 minutes - Free - Life-changing
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (step === 'dream-input') {
    return (
      <main className="min-h-screen">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 section-cyber" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-ghost-dim mb-2">Step 1 of 3</p>
                <div className="flex gap-2 justify-center mb-6">
                  <div className="h-2 w-24 bg-cyber rounded" />
                  <div className="h-2 w-24 bg-void-light rounded" />
                  <div className="h-2 w-24 bg-void-light rounded" />
                </div>
              </div>

              <Card className="border-t-4 border-t-cyber">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Close Your Eyes for a Moment</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Remember who you wanted to be...
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-ghost font-bold mb-3">
                      When you were young, before anyone told you what was &quot;realistic,&quot;
                      what did you dream of becoming or doing?
                    </label>
                    <Textarea
                      value={dream}
                      onChange={(e) => setDream(e.target.value)}
                      placeholder="I wanted to..."
                      rows={6}
                      autoFocus
                    />
                    {dream.length < 10 && dream.length > 0 && (
                      <p className="text-sm text-ghost-dim mt-2">
                        Take your time. Tell us about your dream...
                      </p>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep('landing')} className="flex-1">
                      Back
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={handleDreamSubmit}
                      disabled={dream.length < 10}
                      className="flex-1"
                    >
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-sm text-ghost-dim">
                  Examples: Be an astronaut, write books, help animals, travel the world, create art,
                  start a business, teach children, heal people...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (step === 'context') {
    return (
      <main className="min-h-screen">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 section-cyber" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-ghost-dim mb-2">Step 2 of 3</p>
                <div className="flex gap-2 justify-center mb-6">
                  <div className="h-2 w-24 bg-cyber rounded" />
                  <div className="h-2 w-24 bg-cyber rounded" />
                  <div className="h-2 w-24 bg-void-light rounded" />
                </div>
              </div>

              <Card className="border-t-4 border-t-cyber">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Tell Us A Little More</CardTitle>
                  <CardDescription className="text-center">
                    Your dream: <span className="font-bold text-cyber">&quot;{dream.slice(0, 100)}...&quot;</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Age */}
                  <div>
                    <label className="block text-ghost font-bold mb-3">
                      How old were you when you had this dream?
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {['5-7', '8-10', '11-13', '14-16', 'Older'].map((ageRange) => (
                        <button
                          key={ageRange}
                          onClick={() => setAge(ageRange)}
                          className={`p-3 rounded-lg border transition-all ${
                            age === ageRange
                              ? 'border-cyber bg-cyber/20 text-ghost font-bold shadow-glow-sm'
                              : 'border-cyber/20 bg-void-light hover:border-cyber/50'
                          }`}
                        >
                          {ageRange}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Blockers */}
                  <div>
                    <label className="block text-ghost font-bold mb-3">
                      What stopped you from pursuing it? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        'Money concerns',
                        'Family expectations',
                        'Fear of failure',
                        'Life happened',
                        'Told it wasn\'t realistic',
                        'Other'
                      ].map((blocker) => (
                        <label
                          key={blocker}
                          className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                            blockers.includes(blocker)
                              ? 'border-cyber bg-cyber/10'
                              : 'border-cyber/20 bg-void-light hover:border-cyber/50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={blockers.includes(blocker)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setBlockers([...blockers, blocker]);
                              } else {
                                setBlockers(blockers.filter(b => b !== blocker));
                              }
                            }}
                            className="mr-3 w-5 h-5 accent-cyber"
                          />
                          <span className="text-ghost-muted">{blocker}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Feeling */}
                  <div>
                    <label className="block text-ghost font-bold mb-3">
                      How do you feel about this dream today?
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={feeling}
                      onChange={(e) => setFeeling(parseInt(e.target.value))}
                      className="w-full h-2 bg-void-light rounded-lg appearance-none cursor-pointer accent-cyber mb-2"
                    />
                    <div className="flex justify-between text-sm text-ghost-muted">
                      <span>Still hurts to think about</span>
                      <span className="font-bold text-cyber">{feeling}/10</span>
                      <span>Ready to try again</span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button variant="outline" onClick={() => setStep('dream-input')} className="flex-1">
                      Back
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={handleContextSubmit}
                      disabled={!age || blockers.length === 0}
                      className="flex-1"
                    >
                      Reveal My Path
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (step === 'processing') {
    return (
      <main className="min-h-screen">
        <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-screen">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-20" />

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-plasma/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-plasma/20 flex items-center justify-center border border-plasma/50 animate-pulse">
                <Loader2 className="w-10 h-10 text-plasma animate-spin" />
              </div>
              <h2 className="text-3xl font-bold text-ghost mb-4">
                Consulting the Dream Keepers...
              </h2>
              <div className="space-y-3 text-lg text-ghost-muted">
                <p className="animate-in fade-in duration-500">Analyzing your dream...</p>
                <p className="animate-in fade-in duration-500 delay-1000">Finding pathways...</p>
                <p className="animate-in fade-in duration-500 delay-2000">Crafting your first steps...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (step === 'results') {
    return (
      <main className="min-h-screen">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 section-cyber" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyber/20 flex items-center justify-center border border-cyber/50">
                  <Star className="w-10 h-10 text-cyber" />
                </div>
                <h1 className="text-4xl font-bold mb-2">
                  <span className="text-gradient">Your Dream Is Valid</span>
                </h1>
                <p className="text-lg text-ghost-muted">Here&apos;s why it always was...</p>
              </div>

              {/* Your Dream */}
              <Card className="mb-8 border-t-4 border-t-cyber">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">YOUR DREAM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-center text-cyber italic">&quot;{dream}&quot;</p>
                </CardContent>
              </Card>

              {/* AI Validation */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">The Dream Keeper Says:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-ghost-muted">
                    {aiResponse.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Steps */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  <span className="text-gradient">Your First Steps</span>
                </h2>
                <div className="space-y-6">
                  {actionSteps.map((actionStep, index) => (
                    <Card
                      key={index}
                      className={`border-l-4 cursor-pointer transition-all hover:shadow-glow-sm ${
                        selectedStep === index ? 'border-l-cyber bg-cyber/5 shadow-glow-sm' : 'border-l-void-light'
                      }`}
                      onClick={() => setSelectedStep(index)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="cyber-badge mb-2">{actionStep.type}</div>
                            <CardTitle className="text-xl">{index + 1}. {actionStep.title}</CardTitle>
                            <CardDescription>
                              <Clock className="w-4 h-4 inline mr-1" />
                              {actionStep.time} - {actionStep.difficulty}
                            </CardDescription>
                          </div>
                          {selectedStep === index && (
                            <CheckCircle2 className="w-6 h-6 text-cyber" />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-ghost-muted mb-3">{actionStep.why}</p>
                        <p className="text-sm font-bold text-ghost">Resource: {actionStep.resource}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setStep('commitment')}
                  className="group"
                >
                  Choose My First Step
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-ghost-dim mt-4">
                  Select one action above, then click to commit
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (step === 'commitment') {
    const selectedAction = actionSteps[selectedStep];

    return (
      <main className="min-h-screen">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 section-cyber" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  <span className="text-danger">Dreams Die in &quot;Someday&quot;</span>
                </h1>
                <p className="text-xl text-ghost-muted">
                  Pick ONE action to do THIS WEEK.
                </p>
              </div>

              <Card className="border-t-4 border-t-cyber mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">{selectedAction.title}</CardTitle>
                  <CardDescription>
                    {selectedAction.type} - {selectedAction.time} - {selectedAction.difficulty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <p className="font-bold text-ghost mb-2">Why this matters:</p>
                    <p className="text-ghost-muted">{selectedAction.why}</p>
                  </div>
                  <p className="text-sm text-ghost-dim">
                    <strong>Resource:</strong> {selectedAction.resource}
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>When Will You Do This?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {['Tonight', 'This Weekend', 'By End of Week'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setCommitmentDate(option)}
                        className={`p-4 rounded-lg border transition-all text-left ${
                          commitmentDate === option
                            ? 'border-cyber bg-cyber/20 font-bold shadow-glow-sm'
                            : 'border-cyber/20 bg-void-light hover:border-cyber/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4">
                    <label className="block text-ghost font-bold mb-3">
                      Email (Optional - for reminder)
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="glass-card p-6 rounded-xl text-center">
                    <p className="text-xl mb-4 text-ghost">Say it out loud:</p>
                    <p className="text-2xl font-bold text-gradient">
                      &quot;I will {selectedAction.title.toLowerCase()} by {commitmentDate || '[date]'}.&quot;
                    </p>
                  </div>

                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={handleCommitment}
                    disabled={!commitmentDate}
                    className="w-full"
                  >
                    I Commit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (step === 'share') {
    return (
      <main className="min-h-screen">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-20" />

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-plasma/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-matrix/20 flex items-center justify-center border border-matrix/50 animate-pulse">
                <Star className="w-10 h-10 text-matrix" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Your Dream Is Awakening</span>
              </h1>

              <Card className="mb-8 border-t-4 border-t-cyber">
                <CardContent className="pt-8">
                  <div className="glass-card p-8 rounded-xl mb-6">
                    <p className="text-xl mb-4 text-ghost-muted">I&apos;m reclaiming my childhood dream to:</p>
                    <p className="text-2xl font-bold mb-6 text-gradient">
                      {dream.slice(0, 150)}{dream.length > 150 ? '...' : ''}
                    </p>
                    <p className="text-lg text-ghost-muted">First step: {actionSteps[selectedStep].title}</p>
                    <p className="text-lg mb-4 text-ghost-muted">By: {commitmentDate}</p>
                    <p className="text-ghost-dim italic">What dream did you bury?</p>
                    <p className="text-sm mt-4 text-cyber">dreamcatcher.heaven-on-earth.com</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg text-ghost font-bold">Share Your Awakening:</p>
                    <div className="flex gap-4 justify-center">
                      <Button variant="outline" className="group">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline">Copy Link</Button>
                    </div>
                  </div>

                  {email && (
                    <div className="mt-6 p-4 glass-card rounded-lg">
                      <p className="text-ghost">
                        <CheckCircle2 className="w-4 h-4 inline mr-2 text-matrix" />
                        We&apos;ll check in with you on <strong className="text-cyber">{commitmentDate}</strong>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-4 text-ghost-muted mb-8">
                <p className="text-xl font-bold text-gradient">47,833 dreams rekindled.</p>
                <p className="text-xl">Yours just joined them.</p>
                <p>You showed up today. That matters more than you know.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    setStep('landing');
                    setDream('');
                    setAge('');
                    setBlockers([]);
                    setFeeling(5);
                    setSelectedStep(0);
                    setCommitmentDate('');
                    setEmail('');
                  }}
                  variant="outline"
                >
                  Reclaim Another Dream
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="/education">Explore Education</a>
                </Button>
              </div>

              <p className="text-sm text-ghost-dim mt-8">
                This tool is free. Always. Because every dream deserves a chance.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return null;
}
