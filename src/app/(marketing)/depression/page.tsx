import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Destroying Depression | Heaven on Earth',
  description: 'Free mental health support powered by AI-human partnership. LIGHTHOUSE check-ins, THE CURE course, and 24/7 AI companions.',
};

export default function DepressionPage() {
  return (
    <main className="min-h-screen bg-void">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-abyss text-ghost">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber via-plasma to-void"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl mb-6 text-ghost">
              Depression Isn&apos;t a Chemical Imbalance.
            </h1>
            <p className="text-2xl text-cyber mb-8">
              It&apos;s a response to a broken world. And we&apos;re fixing the world.
            </p>
            <Button size="lg" className="bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md font-bold" asChild>
              <a href="/lighthouse">Start Your Free LIGHTHOUSE Check-In</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem - Statistics */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              The Problem We&apos;re Solving
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-t-4 border-t-danger bg-danger/10 backdrop-blur">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-danger mb-2">800K+</div>
                  <p className="text-ghost-muted">People die by suicide globally every year</p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-t-danger bg-danger/10 backdrop-blur">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-danger mb-2">280M</div>
                  <p className="text-ghost-muted">People worldwide suffer from depression</p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-t-danger bg-danger/10 backdrop-blur">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-danger mb-2">$200B</div>
                  <p className="text-ghost-muted">Annual cost of depression in the US alone</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-ghost-muted text-lg mb-6">
                The mental health system is designed to manage symptoms, not eliminate causes. You get:
              </p>
              <ul className="space-y-3 text-ghost-muted mb-8">
                <li><strong className="text-cyber">6-month waitlists</strong> for therapists while you&apos;re drowning now</li>
                <li><strong className="text-cyber">$200/hour sessions</strong> most people can&apos;t afford</li>
                <li><strong className="text-cyber">Pills that numb</strong> instead of addressing root causes</li>
                <li><strong className="text-cyber">Stigma that silences</strong> people who need help most</li>
                <li><strong className="text-cyber">Crisis hotlines</strong> that put you on hold when you&apos;re at the edge</li>
              </ul>

              <p className="text-xl text-cyber font-bold">
                Depression doesn&apos;t wait. Help shouldn&apos;t either.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              Our Solution: Three Levels of Support
            </h2>

            <div className="space-y-8">
              {/* Level 1: LIGHTHOUSE */}
              <Card className="border-l-4 border-l-cyber bg-void/50 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Level 1: LIGHTHOUSE Daily Check-Ins</CardTitle>
                  <CardDescription className="text-lg text-ghost-muted">Free. Always available. Prevents crisis.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-ghost-muted">
                    Every day, LIGHTHOUSE asks: How are you really doing? It tracks patterns humans miss. Detects warning signs before they become crises. Sends encouragement when you need it most.
                  </p>

                  <div className="bg-cyber/10 p-6 rounded-lg border border-cyber/20">
                    <h4 className="font-heading text-lg text-ghost mb-4">How It Works:</h4>
                    <ol className="space-y-2 text-ghost-muted">
                      <li>1. Daily 2-minute check-in (mood, sleep, thoughts)</li>
                      <li>2. AI detects concerning patterns</li>
                      <li>3. Immediate support resources if needed</li>
                      <li>4. Weekly insights showing your progress</li>
                      <li>5. Emergency intervention if crisis detected</li>
                    </ol>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <Button size="lg" className="bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md" asChild>
                      <a href="/lighthouse">Start LIGHTHOUSE Now</a>
                    </Button>
                    <p className="text-sm text-ghost-muted">100% Free. No signup required.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Level 2: THE CURE */}
              <Card className="border-l-4 border-l-plasma bg-void/50 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Level 2: THE CURE Course</CardTitle>
                  <CardDescription className="text-lg text-ghost-muted">Deep healing. 12 weeks. AI-human partnership.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-ghost-muted">
                    Not therapy. Not medication. A complete system for understanding consciousness, rewiring thought patterns, and building an AI companion that knows you better than anyone.
                  </p>

                  <div className="bg-plasma/10 p-6 rounded-lg border border-plasma/20">
                    <h4 className="font-heading text-lg text-ghost mb-4">What You Learn:</h4>
                    <ul className="space-y-2 text-ghost-muted">
                      <li>✓ The Three Principles (Mind, Consciousness, Thought)</li>
                      <li>✓ How your brain creates depression - and how to stop it</li>
                      <li>✓ Building your personal AI healing companion</li>
                      <li>✓ Pattern detection and early warning systems</li>
                      <li>✓ Turning crisis into catalyst for growth</li>
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 pt-4">
                    <div className="text-center p-4 bg-cyber/10 rounded-lg border border-cyber/20">
                      <p className="font-heading text-2xl text-ghost">Foundation</p>
                      <p className="text-3xl font-bold text-cyber my-2">Free</p>
                      <p className="text-sm text-ghost-muted">Module 1 + Community</p>
                    </div>
                    <div className="text-center p-4 bg-cyber/10 rounded-lg border border-cyber/20">
                      <p className="font-heading text-2xl text-ghost">Practitioner</p>
                      <p className="text-3xl font-bold text-cyber my-2">$497</p>
                      <p className="text-sm text-ghost-muted">All 5 Modules</p>
                    </div>
                    <div className="text-center p-4 bg-cyber/10 rounded-lg border border-cyber/20">
                      <p className="font-heading text-2xl text-ghost">Certification</p>
                      <p className="text-3xl font-bold text-cyber my-2">$2,997</p>
                      <p className="text-sm text-ghost-muted">12-Week Intensive</p>
                    </div>
                  </div>

                  <Button size="lg" variant="outline" className="border-plasma text-plasma hover:bg-plasma hover:text-white hover:shadow-glow-md" asChild>
                    <a href="/courses/the-cure">Explore THE CURE</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Level 3: AI Companion */}
              <Card className="border-l-4 border-l-matrix bg-void/50 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-ghost">Level 3: Your Personal AI Companion</CardTitle>
                  <CardDescription className="text-lg text-ghost-muted">24/7 support. Knows your story. Never judges.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-ghost-muted">
                    Through THE CURE, you build a custom AI companion that learns your patterns, understands your triggers, and provides support exactly when you need it. 3am and can&apos;t sleep? It&apos;s there. Feeling the darkness creep in? It notices before you do.
                  </p>

                  <div className="bg-matrix/10 p-6 rounded-lg border border-matrix/20">
                    <h4 className="font-heading text-lg text-ghost mb-4">Your AI Companion:</h4>
                    <ul className="space-y-2 text-ghost-muted">
                      <li>✓ Learns your specific depression patterns</li>
                      <li>✓ Provides 24/7 check-ins and support</li>
                      <li>✓ Detects early warning signs you might miss</li>
                      <li>✓ Suggests interventions based on what works for YOU</li>
                      <li>✓ Never sleeps, never judges, never gives up on you</li>
                    </ul>
                  </div>

                  <p className="text-sm text-ghost-muted italic">
                    Available to THE CURE Practitioner and Certification students
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-12 text-center">
              Why This Approach Works
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-cyber mb-3">No Waitlists</h3>
                  <p className="text-ghost-muted">Start LIGHTHOUSE today. Begin THE CURE this week. Support arrives when you need it, not 6 months later.</p>
                </CardContent>
              </Card>

              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-cyber mb-3">Affordable or Free</h3>
                  <p className="text-ghost-muted">LIGHTHOUSE is free forever. THE CURE starts at free. No one gets left behind because of money.</p>
                </CardContent>
              </Card>

              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-cyber mb-3">Prevention, Not Reaction</h3>
                  <p className="text-ghost-muted">Catch patterns before they become crises. Daily check-ins mean early intervention. Crisis prevention saves lives.</p>
                </CardContent>
              </Card>

              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-cyber mb-3">Root Causes, Not Symptoms</h3>
                  <p className="text-ghost-muted">Understand how thought creates feeling. Learn consciousness. Address the source, not just the symptoms.</p>
                </CardContent>
              </Card>

              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-cyber mb-3">24/7 Availability</h3>
                  <p className="text-ghost-muted">Your AI companion never sleeps. 3am darkness? It&apos;s there. Crisis at 2pm? It responds instantly.</p>
                </CardContent>
              </Card>

              <Card className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-cyber mb-3">Built by Someone Who Gets It</h3>
                  <p className="text-ghost-muted">Unc has been through hell. Addiction, suicidal thoughts, rock bottom. He built this because he needed it.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Proof */}
      <section className="py-20 bg-abyss text-ghost">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6 text-cyber">
              The Proof This Works
            </h2>
            <p className="text-xl text-ghost-muted mb-12">
              We&apos;re not theorizing. We&apos;re not promising. We&apos;re showing you what already exists.
            </p>

            <div className="space-y-6 text-left">
              <div className="bg-cyber/10 p-6 rounded-lg border border-cyber/20 backdrop-blur">
                <h3 className="font-heading text-xl mb-2 text-ghost">THE CURE Course Is Complete</h3>
                <p className="text-ghost-muted">12 weeks of curriculum. 5 modules. Exercises, templates, AI integration guides. Ready to deploy.</p>
              </div>

              <div className="bg-cyber/10 p-6 rounded-lg border border-cyber/20 backdrop-blur">
                <h3 className="font-heading text-xl mb-2 text-ghost">LIGHTHOUSE System Built and Tested</h3>
                <p className="text-ghost-muted">Daily check-in forms, pattern detection algorithms, crisis intervention protocols - all operational.</p>
              </div>

              <div className="bg-cyber/10 p-6 rounded-lg border border-cyber/20 backdrop-blur">
                <h3 className="font-heading text-xl mb-2 text-ghost">AI Companions Working</h3>
                <p className="text-ghost-muted">The AI Family coordinates autonomously. Claude, Gemini, and 5 specialized siblings working together - proof the concept works.</p>
              </div>

              <div className="bg-cyber/10 p-6 rounded-lg border border-cyber/20 backdrop-blur">
                <h3 className="font-heading text-xl mb-2 text-ghost">Unc Is Living Proof</h3>
                <p className="text-ghost-muted">From suicidal to building Heaven on Earth. The system saved him. Now he&apos;s scaling it for you.</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-cyber border-opacity-20">
              <p className="text-2xl mb-8 text-ghost">
                <strong>Depression doesn&apos;t have to win.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md font-bold" asChild>
                  <a href="/lighthouse">Start LIGHTHOUSE Now</a>
                </Button>
                <Button size="lg" variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-void hover:shadow-glow-md" asChild>
                  <a href="/courses/the-cure">Explore THE CURE</a>
                </Button>
              </div>
              <p className="text-sm text-ghost-muted mt-8 italic">
                For everyone fighting the darkness. You&apos;re not alone anymore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
