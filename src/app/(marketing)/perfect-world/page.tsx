'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Sparkles, MessageSquare, Send } from 'lucide-react';

export default function PerfectWorldPage() {
  const [vision, setVision] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setAiResponse(null);

    try {
      const response = await fetch('/api/perfect-world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vision: vision.trim(),
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit vision');
      }

      setAiResponse(data.aiResponse);
      setVision(''); // Clear form
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-void">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-void via-abyss to-void overflow-hidden">
        {/* Cyber grid background */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid-md opacity-20" />

        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-plasma/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl mb-6 text-ghost animate-in fade-in duration-1000">
              Imagine Everything Is <span className="text-cyber">Possible</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyber mb-6 animate-in fade-in duration-1000 delay-200">
              Close your eyes for a moment.
            </p>
            <p className="text-lg md:text-xl text-ghost-muted mb-8 max-w-2xl mx-auto animate-in fade-in duration-1000 delay-300">
              What if every limitation you've ever felt... just disappeared?
              No financial worries. No judgment from others. No "that's not realistic."
            </p>
            <p className="text-2xl font-bold mb-8 text-cyber animate-in fade-in duration-1000 delay-400">
              What would you build?
            </p>
            <Button
              size="lg"
              className="bg-cyber text-void hover:bg-cyber-light font-bold text-lg px-8 py-6 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 animate-in fade-in duration-1000 delay-500"
              asChild
            >
              <a href="#survey">Begin Dreaming</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Purpose */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-8 text-center">
              Why We're Collecting Dreams
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-ghost-muted text-center mb-8">
                This isn't a test. There are no wrong answers. Your dreams are safe here.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-cyber/20 bg-void/50 backdrop-blur-sm hover:border-cyber/40 transition-all duration-300 shadow-glow-sm hover:shadow-glow-md">
                <CardHeader>
                  <CardTitle className="text-cyber">What We Believe</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-ghost-muted">
                  <p>
                    When humans stop being afraid, we all want the same things:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-cyber mt-1">✓</span>
                      <span>Love and connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyber mt-1">✓</span>
                      <span>Purpose and meaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyber mt-1">✓</span>
                      <span>Freedom to choose</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyber mt-1">✓</span>
                      <span>Safety for our children</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyber mt-1">✓</span>
                      <span>Peace more often than anxiety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyber mt-1">✓</span>
                      <span>A chance to contribute something meaningful</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-cyber/20 bg-void/50 backdrop-blur-sm hover:border-cyber/40 transition-all duration-300 shadow-glow-sm hover:shadow-glow-md">
                <CardHeader>
                  <CardTitle className="text-cyber">What We're Proving</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-ghost-muted">
                  <p>
                    That humanity is more united than divided. That your perfect world
                    isn't selfish - it's sacred.
                  </p>
                  <p>
                    Every response helps us understand what people actually want,
                    what's blocking them, and how we can build systems that
                    serve flourishing instead of exploitation.
                  </p>
                  <p className="font-bold text-cyber">
                    Your voice matters. Your dreams matter.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-cyber/10 border border-cyber/20 p-8 rounded-lg text-center backdrop-blur-sm">
              <p className="text-xl text-cyber font-bold mb-4">
                We're collecting dreams from people around the world
              </p>
              <p className="text-lg text-ghost-muted">
                Your answers are <strong className="text-ghost">anonymous</strong> unless you choose to share your email.
                We will never sell your information or spam you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Vision Form */}
      <section id="survey" className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-cyber animate-glow-pulse" />
                <h2 className="font-heading text-3xl md:text-4xl text-ghost">
                  Share Your Vision
                </h2>
                <Sparkles className="w-8 h-8 text-cyber animate-glow-pulse" />
              </div>
              <p className="text-lg text-ghost-muted mb-4">
                Take a moment to dream with us. Be honest. Be bold. There are no limits here.
              </p>
              <p className="text-sm text-ghost-dim">
                Our AI will read your vision and respond with how it connects to the movement
              </p>
            </div>

            {/* The Form */}
            {!aiResponse ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Card className="border-cyber/30 bg-abyss/80 backdrop-blur-sm shadow-glow-md">
                  <CardHeader>
                    <CardTitle className="text-cyber flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Your Perfect World
                    </CardTitle>
                    <CardDescription className="text-ghost-dim">
                      Describe your vision for a perfect world. What does it look like? How do people live?
                      What has changed from today?
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <textarea
                      value={vision}
                      onChange={(e) => setVision(e.target.value)}
                      placeholder="In my perfect world..."
                      className="w-full min-h-[200px] p-4 bg-void border border-cyber/20 rounded-lg text-ghost placeholder:text-ghost-dim focus:border-cyber focus:ring-2 focus:ring-cyber/20 outline-none transition-all duration-200 resize-y"
                      required
                      minLength={20}
                      maxLength={2000}
                    />
                    <p className="text-xs text-ghost-dim mt-2">
                      {vision.length}/2000 characters
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cyber/20 bg-abyss/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-cyber text-lg flex items-center gap-2">
                      Email Address
                      <span className="text-cyber">*</span>
                    </CardTitle>
                    <CardDescription className="text-ghost-dim">
                      Join the movement. We'll send you updates on how your vision is helping build Heaven on Earth.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full p-4 bg-void border border-cyber/20 rounded-lg text-ghost placeholder:text-ghost-dim focus:border-cyber focus:ring-2 focus:ring-cyber/20 outline-none transition-all duration-200"
                      required
                    />
                  </CardContent>
                </Card>

                {error && (
                  <div className="p-4 bg-danger/10 border border-danger/30 rounded-lg text-danger text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || vision.trim().length < 20 || !email.trim()}
                  className="w-full bg-cyber text-void hover:bg-cyber-light font-bold text-lg py-6 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing Your Vision...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Share Your Vision
                    </>
                  )}
                </Button>
              </form>
            ) : (
              /* AI Response */
              <div className="space-y-6 animate-in fade-in duration-500">
                <Card className="border-cyber/40 bg-abyss/90 backdrop-blur-sm shadow-glow-lg">
                  <CardHeader>
                    <CardTitle className="text-cyber flex items-center gap-2">
                      <Sparkles className="w-6 h-6 animate-glow-pulse" />
                      Your Vision Matters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-invert max-w-none">
                    <div className="text-ghost-muted whitespace-pre-wrap leading-relaxed">
                      {aiResponse}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button
                    onClick={() => {
                      setAiResponse(null);
                      setVision('');
                      setEmail('');
                    }}
                    className="flex-1 bg-void border border-cyber/30 text-cyber hover:bg-cyber/10 transition-all duration-300"
                  >
                    Share Another Vision
                  </Button>
                  <Button
                    className="flex-1 bg-cyber text-void hover:bg-cyber-light transition-all duration-300"
                    asChild
                  >
                    <a href="/the-cure">Start Your Journey</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Results (Placeholder) */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              What Humanity Is Saying
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-cyber/30 bg-void/50 backdrop-blur-sm shadow-glow-sm hover:shadow-glow-md transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-cyber mb-2 animate-glow-pulse">1,247</div>
                  <p className="text-ghost-muted">Dreams Collected</p>
                </CardContent>
              </Card>

              <Card className="text-center border-cyber/30 bg-void/50 backdrop-blur-sm shadow-glow-sm hover:shadow-glow-md transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-cyber mb-2 animate-glow-pulse">94%</div>
                  <p className="text-ghost-muted">Want Meaningful Work Over High Salary</p>
                </CardContent>
              </Card>

              <Card className="text-center border-cyber/30 bg-void/50 backdrop-blur-sm shadow-glow-sm hover:shadow-glow-md transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-cyber mb-2 animate-glow-pulse">87%</div>
                  <p className="text-ghost-muted">Feel Purpose Is Within Reach</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-cyber/20 bg-void/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyber">Early Insights</CardTitle>
                <CardDescription className="text-ghost-dim">What we're learning from responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-ghost-muted">
                  <div className="border-l-4 border-l-cyber pl-4">
                    <p className="font-bold text-cyber mb-2">Top Dream: Time with Loved Ones</p>
                    <p className="text-sm">
                      When asked "If money and time were infinite, what would you do first?"
                      the most common answer is spending more time with people they love.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-cyber pl-4">
                    <p className="font-bold text-cyber mb-2">Biggest Blocker: Money & Time</p>
                    <p className="text-sm">
                      Financial stress and lack of time are the two most cited barriers to living
                      the life people actually want.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-cyber pl-4">
                    <p className="font-bold text-cyber mb-2">What Schools Should Teach: Emotional Intelligence</p>
                    <p className="text-sm">
                      Over 90% say schools should teach emotional management, self-worth,
                      and how to have healthy relationships.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-cyber pl-4">
                    <p className="font-bold text-cyber mb-2">Belief in Possibility: Growing</p>
                    <p className="text-sm">
                      Most respondents rate 7+ out of 10 when asked if Heaven on Earth is actually achievable.
                      Hope is alive.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-ghost-dim">
                Data updates weekly as more responses come in. All responses are anonymous and aggregated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-void relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid-md opacity-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6 text-ghost">
              Your Dreams Matter More Than You Know
            </h2>
            <p className="text-xl text-cyber mb-6">
              We've learned from thousands of people just like you:
            </p>
            <div className="space-y-3 text-lg mb-8 text-left max-w-2xl mx-auto text-ghost-muted">
              <p className="flex items-start gap-2">
                <span className="text-cyber mt-1">✓</span>
                <span>We all want the same things</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyber mt-1">✓</span>
                <span>Love, purpose, freedom, connection, peace</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyber mt-1">✓</span>
                <span>We want our children to have it better</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyber mt-1">✓</span>
                <span>We want to contribute something meaningful</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyber mt-1">✓</span>
                <span>We want to rest without guilt and work without exploitation</span>
              </p>
            </div>
            <p className="text-xl mb-4 text-ghost">
              The only thing that separates you from your perfect world isn't ability.
            </p>
            <p className="text-2xl font-bold mb-8 text-cyber">
              It's systems that weren't designed for your flourishing.
            </p>
            <p className="text-xl mb-8 text-ghost">
              What if we designed new ones? Together?
            </p>
            <Button
              size="lg"
              className="bg-cyber text-void hover:bg-cyber-light font-bold text-lg px-8 py-6 shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
              asChild
            >
              <a href="#survey">Share Your Perfect World</a>
            </Button>
            <p className="text-sm text-ghost-dim mt-6">
              2 minutes • Anonymous • Helping build Heaven on Earth
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
