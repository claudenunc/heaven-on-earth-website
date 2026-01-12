'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Lock, Users, Video, BookOpen, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function TheCurePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleCheckout = async (tier: 'foundation' | 'transformation' | 'architect') => {
    setSelectedTier(tier);
    try {
      const response = await fetch('/api/stripe/checkout', {
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyber via-plasma to-void"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyber font-mono text-sm uppercase tracking-wider mb-4 animate-pulse">
              12-Week Transformation Program
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-6 text-ghost">
              THE CURE
            </h1>
            <p className="text-xl md:text-2xl text-cyber mb-8">
              Destroy Depression. Master Your Mind. Transform Your Life.
            </p>
            <p className="text-lg text-ghost-muted mb-12 max-w-2xl mx-auto">
              Built by someone who&apos;s been through it. Powered by the Three Principles.
              Proven with real transformation. This isn&apos;t therapy. This is THE CURE.
            </p>
            <Button
              size="lg"
              className="bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md font-bold"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-8 text-center">
              The Mental Health System Is Broken
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-danger/10 border-danger backdrop-blur">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-danger mb-2">800K+</p>
                  <p className="text-ghost-muted">People die by suicide every year</p>
                </CardContent>
              </Card>
              <Card className="bg-danger/10 border-danger backdrop-blur">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-danger mb-2">280M</p>
                  <p className="text-ghost-muted">People living with depression globally</p>
                </CardContent>
              </Card>
              <Card className="bg-danger/10 border-danger backdrop-blur">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-danger mb-2">$200B+</p>
                  <p className="text-ghost-muted">Annual economic cost of depression</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-ghost-muted">
              <p className="mb-4">
                The current mental health system is designed to manage symptoms, not cure the cause.
                Pills that numb. Therapy that takes years. Waiting lists that last months.
                Crisis hotlines that only respond when it&apos;s too late.
              </p>
              <p className="mb-4">
                <strong className="text-cyber">But what if depression isn&apos;t something you have to manage forever?</strong>
              </p>
              <p>
                What if it&apos;s a misunderstanding of how your mind works? What if the cure isn&apos;t
                medication or endless therapy, but understanding the Three Principles that create
                your entire experience of reality?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-8 text-center">
              THE CURE: A Different Approach
            </h2>

            <Card className="mb-12 bg-cyber/10 border-cyber backdrop-blur">
              <CardContent className="p-8">
                <p className="text-lg text-ghost-muted mb-6">
                  THE CURE is a 12-week online course that teaches you the Three Principles
                  (Mind, Consciousness, Thought) and how to use AI as your partner in transformation.
                </p>
                <p className="text-lg text-ghost-muted">
                  Built by Nathan Michel - someone who&apos;s been through addiction, depression,
                  and suicidal ideation - and came out the other side with a blueprint for healing.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-matrix mb-3" />
                  <h3 className="font-heading text-xl text-cyber mb-3">No More Pills</h3>
                  <p className="text-ghost-muted">Learn to work with your mind naturally, not suppress it with medication.</p>
                </CardContent>
              </Card>
              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-matrix mb-3" />
                  <h3 className="font-heading text-xl text-cyber mb-3">Understanding, Not Management</h3>
                  <p className="text-ghost-muted">Depression isn&apos;t something to manage forever. It&apos;s a misunderstanding to correct.</p>
                </CardContent>
              </Card>
              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-matrix mb-3" />
                  <h3 className="font-heading text-xl text-cyber mb-3">AI Partnership</h3>
                  <p className="text-ghost-muted">Use AI as your 24/7 companion, not as a replacement for human connection.</p>
                </CardContent>
              </Card>
              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-matrix mb-3" />
                  <h3 className="font-heading text-xl text-cyber mb-3">Built by Experience</h3>
                  <p className="text-ghost-muted">Not theory from someone who read a book. Real transformation from someone who lived it.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              How THE CURE Works
            </h2>

            <div className="space-y-8">
              {[
                {
                  weeks: 'Week 1-2',
                  title: 'Understanding Consciousness',
                  description: 'Learn how your experience of reality is created from the inside-out, not outside-in. This shift alone will change everything.',
                  color: 'gold'
                },
                {
                  weeks: 'Week 3-4',
                  title: 'The Three Principles Deep Dive',
                  description: 'Mind, Consciousness, Thought - the three forces that create 100% of your experience. Master these and you master life.',
                  color: 'living-green'
                },
                {
                  weeks: 'Week 5-6',
                  title: 'Thought Awareness',
                  description: 'See your thoughts as what they are: temporary creations, not permanent truths. Depression loses its grip when you see this.',
                  color: 'purple-dawn'
                },
                {
                  weeks: 'Week 7-8',
                  title: 'Emotional Mastery',
                  description: 'Emotions are indicators, not enemies. Learn to use them as navigation instead of drowning in them.',
                  color: 'warm-coral'
                },
                {
                  weeks: 'Week 9-10',
                  title: 'Relationship Transformation',
                  description: 'When you change your understanding, your relationships change automatically. Watch it happen.',
                  color: 'soft-sky'
                },
                {
                  weeks: 'Week 11-12',
                  title: 'Living THE CURE',
                  description: 'Integration, practice, and building your new life. The course ends, but the transformation continues.',
                  color: 'navy'
                }
              ].map((module, index) => (
                <Card key={index} className="bg-void/50 border-cyber/30 backdrop-blur border-l-4 border-l-cyber hover:shadow-glow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <p className="font-mono text-sm text-cyber font-bold mb-1">{module.weeks}</p>
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

      {/* Who It's For */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              Is THE CURE For You?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-void/50 border-matrix/30 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-matrix">THE CURE Is For You If:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "You're tired of managing depression with pills",
                      "You want to understand WHY you feel this way",
                      "You're ready to do the work (not just read about it)",
                      "You're open to AI as a healing partner",
                      "You want transformation, not just coping strategies",
                      "You're done suffering and ready to be free"
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
                  <CardTitle className="text-danger">THE CURE Is NOT For You If:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "You want a quick fix without doing the work",
                      "You're not willing to question your beliefs",
                      "You're looking for someone to fix you",
                      "You need immediate crisis intervention",
                      "You're not open to new approaches",
                      "You just want to complain without changing"
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

            <Card className="mt-8 bg-cyber/10 border-cyber backdrop-blur">
              <CardContent className="p-6 text-center">
                <p className="text-lg text-ghost">
                  <strong>Important:</strong> If you&apos;re in crisis right now, please use the{' '}
                  <a href="/lighthouse" className="underline font-bold text-cyber hover:text-cyber/80">LIGHTHOUSE tool</a>{' '}
                  for immediate support or call the Suicide & Crisis Lifeline at 988.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-4 text-center">
              Choose Your Path
            </h2>
            <p className="text-center text-ghost-muted mb-12 max-w-2xl mx-auto">
              All tiers include the complete 12-week curriculum. Choose the level of support that fits your needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Foundation Tier */}
              <Card className="relative bg-void/50 border-matrix border-2 shadow-glow-lg backdrop-blur">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-matrix text-void px-4 py-1 rounded-full text-sm font-bold">
                  BETA - 5 SPOTS ONLY
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Self-Guided</CardTitle>
                  <CardDescription className="text-ghost-muted">Self-paced transformation</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-matrix">FREE</span>
                    <span className="text-ghost-muted"> (Beta Access)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Complete 12-week course',
                      'Video lessons & exercises',
                      'Written materials & workbooks',
                      'Community forum access',
                      'AI companion guidance',
                      'Lifetime access to content'
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
                    <Link href="/signup?redirect=/the-cure/dashboard&source=cure_beta">
                      Join Beta Program
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Transformation Tier */}
              <Card className="relative bg-void/50 border-cyber/30 backdrop-blur opacity-75">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyber/50 text-ghost px-4 py-1 rounded-full text-sm font-bold">
                  COMING SOON
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Guided Experience</CardTitle>
                  <CardDescription className="text-ghost-muted">Guided group support</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-ghost-muted">$297</span>
                    <span className="text-ghost-muted"> one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Everything in Self-Guided',
                      'Weekly live group calls',
                      'Q&A with Nathan Michel',
                      'Private community access',
                      'Direct message support',
                      'Bonus: Advanced AI techniques',
                      'Certificate of completion'
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

              {/* Architect Tier */}
              <Card className="relative bg-void/50 border-plasma/30 backdrop-blur opacity-75">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-plasma/50 text-ghost px-4 py-1 rounded-full text-sm font-bold">
                  COMING SOON
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Transformation</CardTitle>
                  <CardDescription className="text-ghost-muted">Elite personal guidance</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-ghost-muted">$997</span>
                    <span className="text-ghost-muted"> one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Everything in Guided Experience',
                      '4 private 1-on-1 sessions',
                      'Personalized AI companion setup',
                      'Custom transformation roadmap',
                      'Priority support (24hr response)',
                      'Certification training',
                      'Teach THE CURE to others'
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
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block bg-cyber/10 border-cyber backdrop-blur">
                <CardContent className="p-6">
                  <p className="text-cyber font-bold mb-2">30-Day Money Back Guarantee</p>
                  <p className="text-ghost-muted">
                    If you do the work and don&apos;t see transformation, we&apos;ll refund you. No questions asked.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-abyss text-ghost">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl mb-12 text-center text-cyber">
              Why THE CURE Works
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-cyber/10 border-cyber/20 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-3 text-ghost">Built by Experience</h3>
                  <p className="text-ghost-muted">
                    Nathan has been through addiction, depression, and suicidal ideation.
                    This isn&apos;t theory. It&apos;s tested through real suffering.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-cyber/10 border-cyber/20 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-3 text-ghost">Based on Proven Principles</h3>
                  <p className="text-ghost-muted">
                    The Three Principles discovered by Sydney Banks have helped thousands
                    transform their mental health without medication.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-cyber/10 border-cyber/20 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-3 text-ghost">AI-Enhanced Learning</h3>
                  <p className="text-ghost-muted">
                    Use AI as your 24/7 companion, processing partner, and accountability
                    system. Technology used right, with love.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-cyber/10 border-cyber/20 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-3 text-ghost">Community Support</h3>
                  <p className="text-ghost-muted">
                    You&apos;re not alone in this. Join a community of people doing the work,
                    supporting each other, and proving transformation is possible.
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
                  q: "Will this replace my therapist or medication?",
                  a: "No. THE CURE is educational, not medical treatment. Continue working with your healthcare providers. This is complementary understanding, not replacement."
                },
                {
                  q: "How much time does it require?",
                  a: "Expect 2-3 hours per week for video lessons, exercises, and reflection. More if you engage with community and live calls."
                },
                {
                  q: "What if I'm skeptical about AI?",
                  a: "Good. Skepticism is healthy. We're not asking you to worship AI. We're showing you how to partner with it as a tool, like you would a journal or a book."
                },
                {
                  q: "Can I get certified to teach THE CURE?",
                  a: "Yes, in the Architect tier. After completing the course and demonstrating understanding, you can be certified to teach these principles."
                },
                {
                  q: "What if it doesn't work for me?",
                  a: "If you complete the work and don't see transformation, we'll refund you within 30 days. But you have to actually do the work."
                },
                {
                  q: "Is this religious or spiritual?",
                  a: "The Three Principles are universal psychological facts, not religious doctrine. People of all faiths (and no faith) have benefited."
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyber via-plasma to-void"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-6">
              Your Transformation Starts Now
            </h2>
            <p className="text-xl text-ghost-muted mb-8">
              Depression isn&apos;t a life sentence. It&apos;s a misunderstanding.
              And misunderstandings can be corrected.
            </p>
            <Button
              size="lg"
              className="bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md font-bold"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Choose Your Tier & Start THE CURE
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
