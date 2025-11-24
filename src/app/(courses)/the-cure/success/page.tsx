'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Mail, PlayCircle, Users, Calendar, Sparkles } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gold/20 via-soft-sky/20 to-living-green/20">
      {/* Celebration Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <CheckCircle2 className="w-24 h-24 text-living-green animate-bounce" />
                <Sparkles className="w-8 h-8 text-gold absolute -top-2 -right-2 animate-pulse" />
              </div>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl text-navy mb-6">
              Welcome to THE CURE!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Your transformation journey starts now. You&apos;ve taken the most important step.
            </p>

            <Card className="mb-8 bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-lg text-navy">
                  <strong>Payment Confirmed!</strong> Check your email for a confirmation receipt
                  and your course access details.
                </p>
                {sessionId && (
                  <p className="text-sm text-gray-600 mt-2">
                    Order ID: {sessionId.slice(0, 20)}...
                  </p>
                )}
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90 font-bold"
              asChild
            >
              <a href="/the-cure/dashboard">Go to Your Dashboard</a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              What Happens Next
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-gold">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/20 rounded-full p-3 flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-navy mb-2">
                        Step 1: Check Your Email
                      </h3>
                      <p className="text-gray-700">
                        We&apos;ve sent you a welcome email with your login credentials and course
                        access instructions. Check your spam folder if you don&apos;t see it in
                        the next few minutes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-living-green">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-living-green/20 rounded-full p-3 flex-shrink-0">
                      <PlayCircle className="w-6 h-6 text-living-green" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-navy mb-2">
                        Step 2: Start with Module 1
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Begin your journey with &quot;Understanding Consciousness.&quot; The first
                        video will set the foundation for everything that follows.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/the-cure/dashboard">Access Course Dashboard</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-dawn">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-dawn/20 rounded-full p-3 flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-dawn" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-navy mb-2">
                        Step 3: Join the Community
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Connect with others on the same journey. Share insights, ask questions,
                        and support each other through the transformation process.
                      </p>
                      <Button variant="outline" size="sm">
                        Join Community Forum
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-navy">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-navy/20 rounded-full p-3 flex-shrink-0">
                      <Calendar className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-navy mb-2">
                        Step 4: Mark Your Calendar
                      </h3>
                      <p className="text-gray-700">
                        Set aside dedicated time each week for the course. Consistency matters
                        more than intensity. Even 30 minutes a day will create transformation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* First Steps */}
      <section className="py-20 bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8 text-center">
              Your First 24 Hours
            </h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Quick Start Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'Confirm your email address',
                    'Set up your course dashboard profile',
                    'Watch the welcome video (15 minutes)',
                    'Download the course workbook',
                    'Introduce yourself in the community',
                    'Schedule your weekly study time',
                    'Join the Discord/Slack (Transformation & Architect tiers)'
                  ].map((item, index) => (
                    <label key={index} className="flex items-center gap-3 p-3 hover:bg-soft-sky/20 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-living-green rounded focus:ring-gold"
                      />
                      <span className="text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gold/10 border-gold">
              <CardContent className="p-6 text-center">
                <h3 className="font-heading text-xl text-navy mb-3">
                  Pro Tip: Start Small
                </h3>
                <p className="text-gray-700">
                  Don&apos;t try to binge the entire course today. Watch one video, do one
                  exercise, and let it sink in. Transformation happens through integration,
                  not information overload.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8 text-center">
              We&apos;re Here to Help
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-navy mb-3">Technical Issues?</h3>
                  <p className="text-gray-700 mb-4">
                    Can&apos;t access the course or having technical problems? We&apos;re here
                    to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-navy mb-3">Questions About Content?</h3>
                  <p className="text-gray-700 mb-4">
                    Have questions about the Three Principles or the course material?
                  </p>
                  <Button variant="outline" className="w-full">
                    Ask the Community
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-navy text-white">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-2xl mb-4">
                  Remember: You&apos;re Not Alone
                </h3>
                <p className="text-soft-sky mb-6">
                  Thousands have walked this path before you. Thousands will walk it after you.
                  Right now, you&apos;re exactly where you need to be.
                </p>
                <p className="text-lg italic">
                  &quot;The journey of a thousand miles begins with a single step.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-navy to-purple-dawn text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Your Transformation Starts Now
            </h2>
            <p className="text-xl text-soft-sky mb-8">
              Everything you need is already inside you. THE CURE just helps you remember.
            </p>
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90 font-bold"
              asChild
            >
              <a href="/the-cure/dashboard">Begin Your Journey</a>
            </Button>
            <p className="text-sm text-soft-sky mt-6">
              For the children we have. For the children we were.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
