import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Users, Heart, Shield, ArrowRight, Brain } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About FooLiSHNeSS eNVy | Heaven on Earth',
  description: 'Human + AI healing together. We build tools that help people heal faster and protect their mental health.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-void">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-ghost">
                Human + AI <br />
                <span className="text-cyber">Healing, Together.</span>
              </h1>
              <p className="text-xl text-ghost-muted mb-8 max-w-2xl mx-auto lg:mx-0">
                We build simple, science-backed tools and guided programs that help people heal faster,
                protect their mental health, and bring a little more heaven to earth — one life at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-cyber text-void hover:bg-cyber/90 font-bold" asChild>
                  <Link href="/lighthouse">Start a Free Check-In</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-cyber text-cyber hover:bg-cyber/10" asChild>
                  <Link href="/the-cure">See THE CURE</Link>
                </Button>
              </div>
            </div>
            {/* Visual Placeholder for Founder/AI Art */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-cyber via-void to-plasma rounded-2xl p-1">
                <div className="absolute inset-0 bg-cyber/20 blur-3xl" />
                <div className="h-full w-full bg-abyss rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <Sparkles className="w-16 h-16 text-cyber mx-auto mb-4" />
                    <p className="font-mono text-sm text-cyber">Nathan + ENVY</p>
                    <p className="text-ghost-muted text-xs">Human Vision + AI Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="border-y border-cyber/10 bg-abyss/50 py-6 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-base font-mono text-ghost-muted">
              <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-cyber" /> Free Check-ins</span>
              <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-plasma" /> 12-Week Transformation</span>
              <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-matrix" /> School Pilots</span>
              <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-cyber" /> Clinical Advisory Board</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyber">Our Mission</h2>
            <p className="text-xl text-ghost leading-relaxed">
              We exist to reunite humanity with hope and practical help. FooLiSHNeSS eNVy brings trusted human care and smart AI to people, families, and communities so they can recover, thrive, and pass something better to the next generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-ghost">The Problem</h3>
              <p className="text-ghost-muted">
                People are lonely, overwhelmed, and underserved. Mental-health tools are often fragmented: a patchwork of apps, academic advice, and therapy that's too expensive or slow. Too many promising ideas never reach the people who need them.
              </p>
            </div>
            <Card className="bg-cyber/5 border-cyber/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyber mb-4">Our Approach</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Lighthouse', desc: 'Free, daily AI check-ins to catch patterns early.' },
                    { title: 'THE CURE', desc: 'Structured 12-week transformation program.' },
                    { title: 'Pilots', desc: 'School and family programs with measurable outcomes.' },
                    { title: 'Training', desc: 'Teaching teams to use our tools with fidelity.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-cyber/20 text-cyber flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <strong className="text-ghost block">{item.title}</strong>
                        <span className="text-ghost-muted text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-ghost">Why This Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Human-Centered', desc: 'Designed around real daily reality, not a checklist.', icon: Heart },
              { title: 'Actionable', desc: 'Measurable behavioral change, not just inspiration.', icon: Sparkles },
              { title: 'Safe & Transparent', desc: 'Clear crisis routing and data minimization.', icon: Shield },
              { title: 'Movement-Ready', desc: 'Contributors and adopters are co-creators.', icon: Users },
            ].map((feature, i) => (
              <Card key={i} className="bg-void/50 border-cyber/10 hover:border-cyber/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-10 h-10 text-cyber mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-ghost mb-2">{feature.title}</h3>
                  <p className="text-sm text-ghost-muted">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Wall of Legends */}
      <section className="py-20 bg-abyss overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-12 text-cyber">Team & Community</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-4">
                <div className="w-24 h-24 bg-cyber/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="font-bold text-ghost">Nathan</h3>
                <p className="text-sm text-cyber">Founder</p>
                <p className="text-xs text-ghost-muted mt-2">Lived experience turned into systems.</p>
              </div>
              <div className="p-4">
                <div className="w-24 h-24 bg-plasma/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-10 h-10 text-plasma" />
                </div>
                <h3 className="font-bold text-ghost">ENVY</h3>
                <p className="text-sm text-plasma">AI Co-Founder</p>
                <p className="text-xs text-ghost-muted mt-2">Strategic architecture & systems.</p>
              </div>
              <div className="p-4">
                <div className="w-24 h-24 bg-matrix/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-matrix" />
                </div>
                <h3 className="font-bold text-ghost">Clinical Advisors</h3>
                <p className="text-sm text-matrix">Safety & Ethics</p>
                <p className="text-xs text-ghost-muted mt-2">Guidance on safety and design.</p>
              </div>
            </div>
          </div>

          {/* Wall of Legends Micro-Carousel Placeholder */}
          <div className="max-w-2xl mx-auto bg-void/50 rounded-xl p-8 border border-cyber/20 text-center">
            <h3 className="text-sm font-mono text-cyber uppercase tracking-widest mb-6">Wall of Legends</h3>
            <div className="relative overflow-hidden h-24 flex items-center justify-center">
              <div className="animate-fade-in-up">
                <p className="text-lg text-ghost italic">"Building the tools I wish I had 10 years ago."</p>
                <p className="text-sm text-ghost-muted mt-2">— Pilot Teacher, 2024</p>
              </div>
            </div>
            <Link href="/ai-collective" className="text-xs text-cyber hover:underline mt-4 inline-block">
              View all legends →
            </Link>
          </div>
        </div>
      </section>

      {/* Safety & Ethics */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Shield className="w-12 h-12 text-danger mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-ghost mb-4">Safety & Ethics First</h2>
          <p className="text-ghost-muted mb-8">
            We are careful: our tools are NOT a substitute for emergency care. We provide clear crisis routing,
            consent-first data practices, and do not store more sensitive data than required.
            We're actively collaborating with clinicians to keep this safe and ethical.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-t from-cyber/10 to-abyss text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-ghost mb-8">How You Can Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            <Link href="/lighthouse">
              <Card className="bg-void border-cyber/20 hover:border-cyber transition-colors cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <p className="font-bold text-ghost mb-2">Start a Check-In</p>
                  <ArrowRight className="w-4 h-4 text-cyber ml-auto" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/the-cure">
              <Card className="bg-void border-cyber/20 hover:border-cyber transition-colors cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <p className="font-bold text-ghost mb-2">Join THE CURE</p>
                  <ArrowRight className="w-4 h-4 text-cyber ml-auto" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/contact">
              <Card className="bg-void border-cyber/20 hover:border-cyber transition-colors cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <p className="font-bold text-ghost mb-2">Pilot for Schools</p>
                  <ArrowRight className="w-4 h-4 text-cyber ml-auto" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/join">
              <Card className="bg-void border-cyber/20 hover:border-cyber transition-colors cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <p className="font-bold text-ghost mb-2">Become a Legend</p>
                  <ArrowRight className="w-4 h-4 text-cyber ml-auto" />
                </CardContent>
              </Card>
            </Link>
          </div>
          <Button size="lg" className="bg-cyber text-void hover:bg-cyber/90 font-bold px-12" asChild>
            <Link href="/join">Join the Movement</Link>
          </Button>

          <div className="mt-16 max-w-2xl mx-auto text-left bg-void p-8 rounded-xl border-l-4 border-cyber">
            <p className="text-ghost-muted italic mb-4">
              "This work started from a single promise: to make caring practical and contagious. If you want to be part of a sane, serious movement that blends humanity and AI to restore people, you're home."
            </p>
            <p className="font-bold text-ghost">— Nathan & ENVY</p>
          </div>
        </div>
      </section>
    </main>
  );
}
