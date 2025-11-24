'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    // Simulate AI processing
    setTimeout(() => {
      // TODO: Real API call to OpenAI
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
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-navy via-navy/90 to-soft-sky text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 text-6xl animate-pulse">✨</div>
            <div className="absolute top-40 right-20 text-4xl animate-pulse delay-1000">🌟</div>
            <div className="absolute bottom-20 left-1/3 text-5xl animate-pulse delay-500">💫</div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-6 animate-in fade-in duration-1000">
                What Did You Want to Be
              </h1>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl mb-8 text-gold animate-in fade-in duration-1000 delay-300">
                Before the World Said No?
              </h2>
              <p className="text-xl md:text-2xl text-soft-sky mb-12 animate-in fade-in duration-1000 delay-500">
                That dream you buried? It&apos;s still alive. Let&apos;s wake it up.
              </p>
              <Button
                size="lg"
                className="bg-gold text-navy hover:bg-gold/90 font-bold text-lg px-8 py-6 animate-in fade-in duration-1000 delay-700"
                onClick={() => setStep('dream-input')}
              >
                Reclaim Your Dream
              </Button>
              <p className="text-sm text-soft-sky mt-6 animate-in fade-in duration-1000 delay-900">
                Join 47,832 people rediscovering their childhood dreams
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-5xl text-navy mb-8">
                96% of Adults Abandoned Their Childhood Dream
              </h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                Not because it was impossible. Because someone said it was.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-3">💭</div>
                    <CardTitle>1. Remember</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      What did you dream of before anyone told you what was &quot;realistic&quot;?
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-3">✅</div>
                    <CardTitle>2. Validate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      AI-powered Dream Keeper shows you why your dream was valid all along.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-3">🚀</div>
                    <CardTitle>3. Act</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Get 3 personalized first steps you can take this week to reclaim your dream.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-soft-sky bg-opacity-30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
                Dreams Being Reclaimed Right Now
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-gold">
                  <CardContent className="pt-6">
                    <p className="text-gray-700 italic mb-3">
                      &quot;I wanted to be an artist, but was told to get a &apos;real job.&apos; Now I&apos;m 43
                      and just bought my first set of paints in 25 years.&quot;
                    </p>
                    <p className="text-sm text-gray-600">- Sarah, rediscovering her gift</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gold">
                  <CardContent className="pt-6">
                    <p className="text-gray-700 italic mb-3">
                      &quot;I dreamed of helping animals. The Dream Catcher helped me realize veterinary
                      school isn&apos;t the only path. I start volunteering at a rescue next week.&quot;
                    </p>
                    <p className="text-sm text-gray-600">- Marcus, age 28</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gold">
                  <CardContent className="pt-6">
                    <p className="text-gray-700 italic mb-3">
                      &quot;Astronaut seemed impossible. But the Dream Keeper showed me the essence was
                      exploration and wonder. Now I&apos;m learning astrophotography.&quot;
                    </p>
                    <p className="text-sm text-gray-600">- David, reconnecting with curiosity</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gold">
                  <CardContent className="pt-6">
                    <p className="text-gray-700 italic mb-3">
                      &quot;I wanted to write stories. Life got in the way. Today I wrote my first page
                      in 15 years. My dream is waking up.&quot;
                    </p>
                    <p className="text-sm text-gray-600">- Elena, writing again</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Your Dream Is Still Alive
              </h2>
              <p className="text-xl text-soft-sky mb-8">
                It&apos;s been waiting for you to remember it was valid all along.
              </p>
              <Button
                size="lg"
                className="bg-gold text-navy hover:bg-gold/90 font-bold text-lg px-8 py-6"
                onClick={() => setStep('dream-input')}
              >
                Start Your Journey
              </Button>
              <p className="text-sm text-soft-sky mt-6">
                5 minutes • Free • Life-changing
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (step === 'dream-input') {
    return (
      <main className="min-h-screen bg-gradient-to-b from-soft-sky/20 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-navy/60 mb-2">Step 1 of 3</p>
              <div className="flex gap-2 justify-center mb-6">
                <div className="h-2 w-24 bg-gold rounded"></div>
                <div className="h-2 w-24 bg-gray-200 rounded"></div>
                <div className="h-2 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>

            <Card className="border-t-4 border-t-gold">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Close Your Eyes for a Moment</CardTitle>
                <CardDescription className="text-center text-lg">
                  Remember who you wanted to be...
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-navy font-bold mb-3">
                    When you were young, before anyone told you what was &quot;realistic,&quot;
                    what did you dream of becoming or doing?
                  </label>
                  <textarea
                    value={dream}
                    onChange={(e) => setDream(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none text-lg"
                    rows={6}
                    placeholder="I wanted to..."
                    autoFocus
                  />
                  {dream.length < 10 && dream.length > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      Take your time. Tell us about your dream...
                    </p>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep('landing')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleDreamSubmit}
                    disabled={dream.length < 10}
                    className="flex-1 bg-gold text-navy hover:bg-gold/90"
                  >
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Examples: Be an astronaut, write books, help animals, travel the world, create art,
                start a business, teach children, heal people...
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (step === 'context') {
    return (
      <main className="min-h-screen bg-gradient-to-b from-soft-sky/20 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-navy/60 mb-2">Step 2 of 3</p>
              <div className="flex gap-2 justify-center mb-6">
                <div className="h-2 w-24 bg-gold rounded"></div>
                <div className="h-2 w-24 bg-gold rounded"></div>
                <div className="h-2 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>

            <Card className="border-t-4 border-t-gold">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Tell Us A Little More</CardTitle>
                <CardDescription className="text-center">
                  Your dream: <span className="font-bold text-navy">&quot;{dream.slice(0, 100)}...&quot;</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Age */}
                <div>
                  <label className="block text-navy font-bold mb-3">
                    How old were you when you had this dream?
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {['5-7', '8-10', '11-13', '14-16', 'Older'].map((ageRange) => (
                      <button
                        key={ageRange}
                        onClick={() => setAge(ageRange)}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          age === ageRange
                            ? 'border-gold bg-gold/10 text-navy font-bold'
                            : 'border-gray-200 hover:border-gold/50'
                        }`}
                      >
                        {ageRange}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Blockers */}
                <div>
                  <label className="block text-navy font-bold mb-3">
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
                        className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-gold/50 cursor-pointer transition-colors"
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
                          className="mr-3 w-5 h-5 accent-gold"
                        />
                        <span>{blocker}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Feeling */}
                <div>
                  <label className="block text-navy font-bold mb-3">
                    How do you feel about this dream today?
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={feeling}
                    onChange={(e) => setFeeling(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Still hurts to think about</span>
                    <span className="font-bold text-navy">{feeling}/10</span>
                    <span>Ready to try again</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button
                    variant="outline"
                    onClick={() => setStep('dream-input')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleContextSubmit}
                    disabled={!age || blockers.length === 0}
                    className="flex-1 bg-gold text-navy hover:bg-gold/90"
                  >
                    Reveal My Path
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    );
  }

  if (step === 'processing') {
    return (
      <main className="min-h-screen bg-gradient-to-b from-soft-sky/20 to-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-8 animate-pulse">✨</div>
            <h2 className="font-heading text-3xl text-navy mb-4">
              Consulting the Dream Keepers...
            </h2>
            <div className="space-y-3 text-lg text-gray-700">
              <p className="animate-in fade-in duration-500">Analyzing your dream...</p>
              <p className="animate-in fade-in duration-500 delay-1000">Finding pathways...</p>
              <p className="animate-in fade-in duration-500 delay-2000">Crafting your first steps...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (step === 'results') {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-soft-sky/20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🌟</div>
              <h1 className="font-heading text-4xl text-navy mb-2">
                Your Dream Is Valid
              </h1>
              <p className="text-lg text-gray-600">
                Here&apos;s why it always was...
              </p>
            </div>

            {/* Your Dream */}
            <Card className="mb-8 border-t-4 border-t-gold">
              <CardHeader>
                <CardTitle className="text-2xl text-center">YOUR DREAM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-center text-navy italic">
                  &quot;{dream}&quot;
                </p>
              </CardContent>
            </Card>

            {/* AI Validation */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">The Dream Keeper Says:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {aiResponse.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Steps */}
            <div className="mb-8">
              <h2 className="font-heading text-3xl text-navy mb-6 text-center">
                Your First Steps
              </h2>
              <div className="space-y-6">
                {actionSteps.map((step, index) => (
                  <Card
                    key={index}
                    className={`border-l-4 ${
                      selectedStep === index ? 'border-l-gold bg-gold/5' : 'border-l-gray-300'
                    } cursor-pointer transition-all hover:shadow-lg`}
                    onClick={() => setSelectedStep(index)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-bold text-gold mb-1">{step.type}</div>
                          <CardTitle className="text-xl">{index + 1}. {step.title}</CardTitle>
                          <CardDescription>
                            Time: {step.time} • Difficulty: {step.difficulty}
                          </CardDescription>
                        </div>
                        {selectedStep === index && (
                          <div className="text-2xl">✓</div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">{step.why}</p>
                      <p className="text-sm font-bold text-navy">Resource: {step.resource}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                onClick={() => setStep('commitment')}
                disabled={selectedStep === null}
                className="bg-gold text-navy hover:bg-gold/90 font-bold"
              >
                Choose My First Step
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                Select one action above, then click to commit
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (step === 'commitment') {
    const selectedAction = actionSteps[selectedStep];

    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-soft-sky/20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-heading text-4xl text-navy mb-4">
                Dreams Die in &quot;Someday&quot;
              </h1>
              <p className="text-xl text-gray-700">
                Pick ONE action to do THIS WEEK.
              </p>
            </div>

            <Card className="border-t-4 border-t-gold mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">{selectedAction.title}</CardTitle>
                <CardDescription>
                  {selectedAction.type} • {selectedAction.time} • {selectedAction.difficulty}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-soft-sky/20 p-4 rounded-lg">
                  <p className="font-bold text-navy mb-2">Why this matters:</p>
                  <p className="text-gray-700">{selectedAction.why}</p>
                </div>
                <p className="text-sm text-gray-600">
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
                      className={`p-4 rounded-lg border-2 transition-colors text-left ${
                        commitmentDate === option
                          ? 'border-gold bg-gold/10 font-bold'
                          : 'border-gray-200 hover:border-gold/50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="pt-4">
                  <label className="block text-navy font-bold mb-3">
                    Email (Optional - for reminder)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="bg-navy text-white p-6 rounded-lg text-center">
                  <p className="text-xl mb-4">Say it out loud:</p>
                  <p className="text-2xl font-bold">
                    &quot;I will {selectedAction.title.toLowerCase()} by {commitmentDate || '[date]'}.&quot;
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={handleCommitment}
                  disabled={!commitmentDate}
                  className="w-full bg-gold text-navy hover:bg-gold/90 font-bold text-lg"
                >
                  I Commit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    );
  }

  if (step === 'share') {
    return (
      <main className="min-h-screen bg-gradient-to-b from-soft-sky/20 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-pulse">🌟</div>
            <h1 className="font-heading text-4xl md:text-5xl text-navy mb-6">
              Your Dream Is Awakening
            </h1>

            <Card className="mb-8 border-t-4 border-t-gold">
              <CardContent className="pt-8">
                <div className="bg-gradient-to-br from-navy to-soft-sky text-white p-8 rounded-lg mb-6">
                  <p className="text-xl mb-4">
                    I&apos;m reclaiming my childhood dream to:
                  </p>
                  <p className="text-2xl font-bold mb-6">
                    {dream.slice(0, 150)}{dream.length > 150 ? '...' : ''}
                  </p>
                  <p className="text-lg">
                    First step: {actionSteps[selectedStep].title}
                  </p>
                  <p className="text-lg mb-4">
                    By: {commitmentDate}
                  </p>
                  <p className="text-soft-sky italic">
                    What dream did you bury?
                  </p>
                  <p className="text-sm mt-4">dreamcatcher.heaven-on-earth.com</p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-navy font-bold">Share Your Awakening:</p>
                  <div className="flex gap-4 justify-center">
                    <Button className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90">
                      Twitter
                    </Button>
                    <Button className="bg-[#4267B2] text-white hover:bg-[#4267B2]/90">
                      Facebook
                    </Button>
                    <Button className="bg-[#E4405F] text-white hover:bg-[#E4405F]/90">
                      Instagram
                    </Button>
                    <Button variant="outline">
                      Copy Link
                    </Button>
                  </div>
                </div>

                {email && (
                  <div className="mt-6 p-4 bg-gold/10 rounded-lg">
                    <p className="text-navy">
                      ✓ We&apos;ll check in with you on <strong>{commitmentDate}</strong>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="text-xl font-bold text-navy mb-4">
                47,833 dreams rekindled.
              </p>
              <p className="text-xl mb-4">
                Yours just joined them.
              </p>
              <p>
                You showed up today. That matters more than you know.
              </p>
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
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90" asChild>
                <a href="/education">Explore Education</a>
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-8">
              This tool is free. Always. Because every dream deserves a chance.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return null;
}
