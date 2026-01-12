'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Lock, Sparkles, Brain, Heart, Users, Flame, Shield } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function TheAgreementsPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleCheckout = async (tier: 'foundation' | 'transformation' | 'architect') => {
    setSelectedTier(tier);
    try {
      const response = await fetch('/api/stripe/checkout-agreements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier }),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
      setSelectedTier(null);
    }
  };

  return (
    <main className="min-h-screen bg-void">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-abyss text-ghost overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-plasma via-cyber to-void"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-plasma font-mono text-sm uppercase tracking-wider mb-4 animate-pulse">
              10-Week Transformation Journey
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-6 text-ghost">
              THE AGREEMENTS
            </h1>
            <p className="text-xl md:text-2xl text-cyber mb-8">
              Break Free from Mental Domestication to Live in Truth and Love
            </p>
            <p className="text-lg text-ghost-muted mb-12 max-w-2xl mx-auto">
              You&apos;ve been living by agreements you never consciously chose.
              They were planted by family, religion, culture—and they&apos;re destroying you.
              This course sets you free.
            </p>
            <Button
              size="lg"
              className="bg-plasma text-white hover:bg-plasma/90 hover:shadow-glow-md font-bold"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Your Awakening
            </Button>
          </div>
        </div>
      </section>

      {/* The Prison You Don't See */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-8 text-center">
              The Prison You Don&apos;t Know You&apos;re In
            </h2>

            <Card className="mb-12 bg-danger/10 border-danger backdrop-blur">
              <CardContent className="p-8">
                <p className="text-lg text-ghost-muted mb-6">
                  From the moment you were born, you were domesticated. Taught what&apos;s &quot;good&quot;
                  and &quot;bad.&quot; Trained to judge yourself. Programmed to seek approval and fear rejection.
                </p>
                <p className="text-lg text-ghost-muted mb-6">
                  You learned to speak to yourself the way others spoke to you—harshly, critically,
                  conditionally. You created a Judge in your mind that never rests.
                </p>
                <p className="text-lg text-cyber font-bold">
                  And you&apos;ve been living in this prison ever since—believing it&apos;s just &quot;how life is.&quot;
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Flame className="w-12 h-12 text-danger mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-ghost mb-3">Self-Judgment</h3>
                  <p className="text-ghost-muted">
                    You criticize yourself more than anyone else ever could. The Judge is relentless.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-danger mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-ghost mb-3">People-Pleasing</h3>
                  <p className="text-ghost-muted">
                    You&apos;ve lost yourself trying to meet others&apos; expectations. Approval = survival.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Brain className="w-12 h-12 text-danger mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-ghost mb-3">False Beliefs</h3>
                  <p className="text-ghost-muted">
                    You live by a &quot;Book of Law&quot; written by others—rules that aren&apos;t even yours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: The 5 Agreements */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-8 text-center">
              The Five Agreements: Your Path to Freedom
            </h2>

            <Card className="mb-12 bg-cyber/10 border-cyber backdrop-blur">
              <CardContent className="p-8">
                <p className="text-lg text-ghost-muted">
                  Based on the wisdom of the Toltecs (made famous by Don Miguel Ruiz&apos;s
                  <em> The Four Agreements</em>), this course teaches you to consciously
                  choose new agreements that serve your truth—and break the ones that keep you imprisoned.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Be Impeccable With Your Word',
                  description: 'Use language to create, not destroy. Stop gossiping, lying, and cursing yourself with harsh words.',
                  icon: Sparkles,
                },
                {
                  number: '2',
                  title: 'Don\'t Take Anything Personally',
                  description: 'Nothing anyone says or does is about you. Free yourself from others\' opinions and projections.',
                  icon: Shield,
                },
                {
                  number: '3',
                  title: 'Don\'t Make Assumptions',
                  description: 'Ask instead of inventing stories. End the false realities that create unnecessary conflict.',
                  icon: Brain,
                },
                {
                  number: '4',
                  title: 'Always Do Your Best',
                  description: 'Give what you can in each moment. Your best changes—and that\'s okay. Release regret.',
                  icon: Heart,
                },
                {
                  number: '5',
                  title: 'Be Skeptical But Learn to Listen',
                  description: 'Question everything (including your own thoughts). Stay open to truth beneath the noise.',
                  icon: Users,
                }
              ].map((agreement, index) => {
                const IconComponent = agreement.icon;
                return (
                  <Card key={index} className="bg-void/50 border-plasma/30 backdrop-blur border-l-4 border-l-plasma hover:shadow-glow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-plasma/20 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-plasma" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-sm text-plasma font-bold">Agreement {agreement.number}</span>
                          </div>
                          <h3 className="font-heading text-xl text-ghost mb-2">{agreement.title}</h3>
                          <p className="text-ghost-muted">{agreement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10-Week Curriculum */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              10-Week Journey to Freedom
            </h2>

            <div className="space-y-8">
              {[
                {
                  week: 'Week 1',
                  phase: 'AWAKENING',
                  title: 'The Mirror of Domestication',
                  description: 'See how you were trained to judge yourself. Recognize the Judge and Victim (the Parasite) in your mind.',
                },
                {
                  week: 'Week 2',
                  phase: 'AWAKENING',
                  title: 'The World in Your Mind',
                  description: 'Distinguish reality from the dream you\'re living in. Most suffering is based on stories, not facts.',
                },
                {
                  week: 'Week 3',
                  phase: 'REBELLION',
                  title: 'Be Impeccable With Your Word',
                  description: 'Transform your relationship to language. Stop using your word as poison (gossip, lies, self-criticism).',
                },
                {
                  week: 'Week 4',
                  phase: 'REBELLION',
                  title: 'Don\'t Take Anything Personally',
                  description: 'Free yourself from others\' projections. What they say is about their dream, not your reality.',
                },
                {
                  week: 'Week 5',
                  phase: 'REBELLION',
                  title: 'Don\'t Make Assumptions',
                  description: 'End the false stories that create conflict. Ask for clarity instead of inventing realities.',
                },
                {
                  week: 'Week 6',
                  phase: 'REBELLION',
                  title: 'Be Skeptical But Learn to Listen',
                  description: 'Question everything (even your own thoughts). Develop discernment—truth beneath noise.',
                },
                {
                  week: 'Week 7',
                  phase: 'REBELLION',
                  title: 'Always Do Your Best',
                  description: 'Give what you can without self-violence or withholding. Your best changes—and that\'s enough.',
                },
                {
                  week: 'Week 8',
                  phase: 'PRACTICE',
                  title: 'The Mastery of Transformation',
                  description: 'Make change permanent through daily practice. Catch yourself faster when you violate agreements.',
                },
                {
                  week: 'Week 9',
                  phase: 'PRACTICE',
                  title: 'The Mastery of Love',
                  description: 'Extend the agreements to all relationships. Love as respect for reality, not possession.',
                },
                {
                  week: 'Week 10',
                  phase: 'MASTERY',
                  title: 'Living in Your Personal Heaven',
                  description: 'Design your life by conscious agreements. Sustain freedom. Teach what you\'ve learned.',
                }
              ].map((module, index) => (
                <Card key={index} className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <p className="font-mono text-sm text-cyber font-bold mb-1">{module.week}</p>
                        <p className="font-mono text-xs text-plasma uppercase">{module.phase}</p>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-heading text-xl text-ghost mb-2">{module.title}</h3>
                        <p className="text-ghost-muted">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              What You Get
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '30 Video Lessons',
                  description: '3 videos per week (10-15 min each). Conceptual teaching + real-life application + advanced insights.',
                },
                {
                  title: '10 Audio Meditations',
                  description: 'Guided practices for each agreement. 5-10 min daily rituals to embody freedom.',
                },
                {
                  title: 'Complete Workbook',
                  description: 'Reflection exercises, journaling prompts, agreement tracking sheets. Digital + printable.',
                },
                {
                  title: 'Weekly Challenges',
                  description: 'Real-world experiments to test understanding. 24-Hour No-Gossip Challenge and more.',
                },
                {
                  title: 'AI Companion Support',
                  description: 'Daily check-ins, agreement tracking, real-time guidance when you\'re struggling.',
                },
                {
                  title: 'Community Access',
                  description: 'Connect with fellow students, share experiences, support each other\'s awakening.',
                },
                {
                  title: 'Personal Declaration',
                  description: 'Write your own "Book of Law"—conscious agreements that will govern your life.',
                },
                {
                  title: 'Lifetime Access',
                  description: 'Return to lessons anytime. Update materials as you grow. This is a lifelong path.',
                }
              ].map((item, index) => (
                <Card key={index} className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-matrix mb-3" />
                    <h3 className="font-heading text-xl text-cyber mb-3">{item.title}</h3>
                    <p className="text-ghost-muted">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              Is THE AGREEMENTS For You?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-void/50 border-matrix/30 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-matrix">THE AGREEMENTS Is For You If:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "You're trapped in self-judgment and perfectionism",
                      "You've lost yourself trying to meet others' expectations",
                      "You're healing from religious/cultural/family trauma",
                      "You're ready to question the beliefs you were taught",
                      "You want to transform your relationships",
                      "You're seeking spiritual freedom without religion"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-matrix flex-shrink-0 mt-0.5" />
                        <span className="text-ghost-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-void/50 border-danger/30 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-danger">THE AGREEMENTS Is NOT For You If:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "You're not willing to question your beliefs",
                      "You want quick fixes without practice",
                      "You're looking for someone to fix you",
                      "You're not ready to take responsibility",
                      "You just want theory, not transformation",
                      "You're not open to Toltec wisdom traditions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Lock className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                        <span className="text-ghost-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-4 text-center">
              Choose Your Path
            </h2>
            <p className="text-center text-ghost-muted mb-12 max-w-2xl mx-auto">
              All tiers include the complete 10-week curriculum. Choose the level of support that fits your journey.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Foundation Tier */}
              <Card className="relative bg-void/50 border-matrix border-2 shadow-glow-lg backdrop-blur">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-matrix text-void px-4 py-1 rounded-full text-sm font-bold">
                  BETA - 5 SPOTS ONLY
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Foundation</CardTitle>
                  <CardDescription className="text-ghost-muted">Self-paced awakening</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-matrix">FREE</span>
                    <span className="text-ghost-muted"> (Beta Access)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Complete 10-week course',
                      '30 video lessons',
                      '10 audio meditations',
                      'Digital workbook',
                      'Community forum access',
                      'AI companion guidance',
                      'Lifetime access'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-matrix flex-shrink-0 mt-0.5" />
                        <span className="text-ghost-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-matrix text-void hover:bg-matrix/90 hover:shadow-glow-md"
                    asChild
                  >
                    <Link href="/signup?redirect=/lighthouse&source=agreements_beta">
                      Join Beta Program
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Transformation Tier */}
              <Card className="relative bg-void/50 border-plasma/30 backdrop-blur opacity-75">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-plasma/50 text-ghost px-4 py-1 rounded-full text-sm font-bold">
                  COMING SOON
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Transformation</CardTitle>
                  <CardDescription className="text-ghost-muted">Guided group journey</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-ghost-muted">$297</span>
                    <span className="text-ghost-muted"> one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Everything in Foundation',
                      'Weekly live group calls',
                      'Q&A with Nathan Michel',
                      'Private community access',
                      'Direct message support',
                      'Bonus: Advanced practices',
                      'Certificate of completion'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-ghost-muted flex-shrink-0 mt-0.5" />
                        <span className="text-ghost-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-plasma/30 text-ghost-muted cursor-not-allowed opacity-50"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Architect Tier */}
              <Card className="relative bg-void/50 border-cyber/30 backdrop-blur opacity-75">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyber/50 text-ghost px-4 py-1 rounded-full text-sm font-bold">
                  COMING SOON
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Architect</CardTitle>
                  <CardDescription className="text-ghost-muted">Master & teach</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-ghost-muted">$997</span>
                    <span className="text-ghost-muted"> one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Everything in Transformation',
                      '4 private 1-on-1 sessions',
                      'Personalized guidance',
                      'Custom transformation roadmap',
                      'Priority support (24hr)',
                      'Certification training',
                      'Teach THE AGREEMENTS'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-ghost-muted flex-shrink-0 mt-0.5" />
                        <span className="text-ghost-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-cyber/30 text-ghost-muted cursor-not-allowed opacity-50"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block bg-cyber/10 border-cyber backdrop-blur">
                <CardContent className="p-6">
                  <p className="text-cyber font-bold mb-2">30-Day Money Back Guarantee</p>
                  <p className="text-ghost-muted">
                    Do the work. If you don&apos;t see transformation, we&apos;ll refund you. No questions asked.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              Common Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Do I need to read 'The Four Agreements' first?",
                  a: "No. The course teaches everything you need. Reading the book first is helpful but not required. Many students discover the book AFTER the course and find it reinforces what they learned."
                },
                {
                  q: "How is this different from reading the book?",
                  a: "The book introduces the concepts. This course makes them REAL through video teachings, guided practices, weekly challenges, community support, and AI integration. Reading is passive. This course is active transformation."
                },
                {
                  q: "How much time does it require?",
                  a: "Expect 1-2 hours per week for videos, practices, and reflection. More if you engage deeply with community. The practices (like catching yourself before gossiping) happen in real-time throughout your day."
                },
                {
                  q: "Is this religious or spiritual?",
                  a: "The Toltec wisdom is spiritual but not religious. People of all faiths (and no faith) benefit. This is about universal human psychology—how we were domesticated and how to free ourselves."
                },
                {
                  q: "Will this help my relationships?",
                  a: "Absolutely. The agreements are most transformative in relationships. You'll learn to stop taking things personally, to ask instead of assume, to speak with integrity. Students report dramatic improvements in marriages, friendships, and family dynamics."
                },
                {
                  q: "Can I take this with THE CURE course?",
                  a: "Yes! They're complementary. THE CURE teaches how your mind works (Three Principles). THE AGREEMENTS teaches how to live that understanding. Many students take both—in either order or simultaneously. Bundle pricing available."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-ghost">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ghost-muted">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-abyss relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-plasma via-cyber to-void"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-6">
              Your Freedom Starts Today
            </h2>
            <p className="text-xl text-ghost-muted mb-8">
              You didn&apos;t choose the domestication that imprisoned you.
              But you CAN choose the agreements that will set you free.
            </p>
            <Button
              size="lg"
              className="bg-plasma text-white hover:bg-plasma/90 hover:shadow-glow-md font-bold"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Choose Your Tier & Begin
            </Button>
            <p className="text-sm text-ghost-muted mt-6">
              30-day money back guarantee. Lifetime access. Transform or get refunded.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
