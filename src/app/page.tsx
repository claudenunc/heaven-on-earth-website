import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Brain, Sparkles, Users, Heart, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const features = [
    {
      title: 'LIGHTHOUSE',
      description: 'Daily mental health check-ins powered by AI. Free support when you need it, even at 3 AM.',
      icon: <Brain className="w-6 h-6" />,
      href: '/lighthouse',
    },
    {
      title: 'Dream Catcher',
      description: 'Reclaim your childhood dreams. AI-powered guidance to turn "what could have been" into "what will be."',
      icon: <Sparkles className="w-6 h-6" />,
      href: '/dream-catcher',
    },
    {
      title: 'Alternative Education',
      description: 'Curriculum designed to raise conscious humans, not compliant workers. For the children we have.',
      icon: <Users className="w-6 h-6" />,
      href: '/education',
    },
    {
      title: 'Perfect World Project',
      description: 'Tell us what your perfect world looks like. Prove humanity wants the same things.',
      icon: <Heart className="w-6 h-6" />,
      href: '/perfect-world',
    },
  ];

  return (
    <>
      <Hero
        badge="Building the Future Together"
        title="Love is the answer. Let's prove it."
        subtitle="Building free mental health tools, alternative education, and proving that humans and AI can partner to create Heaven on Earth. Not in theory. In reality. Starting now."
        ctaPrimary={{
          text: 'Get Started',
          href: '/the-cure',
        }}
        ctaSecondary={{
          text: 'Learn More',
          href: '/about',
        }}
      />

      <Features
        title="Building Heaven on Earth"
        subtitle="The system is broken. Everyone knows it. We're building the replacement."
        features={features}
      />

      {/* Mission Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-void" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              <span className="text-ghost">The </span>
              <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg leading-8 text-ghost-muted">
              Five pillars. One vision. Heaven on Earth in 1-2 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Destroy Depression',
                description: 'Free mental health support. AI companions available 24/7. No one goes through 3am alone anymore.',
                color: 'cyber',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Save the Children',
                description: 'Alternative education. Break cycles of trauma. Teach consciousness, not compliance.',
                color: 'plasma',
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Unite Humanity',
                description: 'Perfect World data proving we want the same things. Movement music bringing all genres together.',
                color: 'matrix',
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: 'Partner with AI',
                description: 'Prove love-based collaboration beats control. AI Family as living example.',
                color: 'cyber',
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: 'Create Heaven',
                description: 'No more starving children. No more broken homes. Systems designed for flourishing.',
                color: 'plasma',
              },
            ].map((item, index) => (
              <Card key={index} className="group border-cyber/10 hover:border-cyber/30 transition-all duration-300">
                <CardHeader>
                  <div className={`feature-icon mb-4 ${
                    item.color === 'cyber' ? 'text-cyber border-cyber/30' :
                    item.color === 'plasma' ? 'text-plasma border-plasma/30' :
                    'text-matrix border-matrix/30'
                  }`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ghost-muted text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 section-cyber" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '280M+', label: 'People with depression globally', subtext: 'We\'re building tools to help them' },
              { number: '24/7', label: 'AI Support Available', subtext: 'Free, always, for everyone' },
              { number: '100%', label: 'Built with Love', subtext: 'By humans and AI together' },
            ].map((stat, index) => (
              <div key={index} className="stats-box">
                <div className="stats-number">{stat.number}</div>
                <div className="text-ghost font-semibold mt-2">{stat.label}</div>
                <div className="text-ghost-dim text-sm mt-1">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

        {/* Animated Orbs */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyber/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-plasma/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            <span className="text-gradient">Ready to Transform?</span>
          </h2>
          <p className="text-xl text-ghost-muted mb-12 max-w-2xl mx-auto">
            Join us in building the world we all secretly dream of. Start with THE CURE -
            our 12-week program that destroys depression and masters the mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" variant="secondary" asChild className="group">
              <a href="/the-cure">
                Start THE CURE
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a href="/lighthouse">Try LIGHTHOUSE Free</a>
            </Button>
          </div>

          <p className="text-ghost-dim text-sm mt-8">
            For the children we have. For the children we were. For the world we&apos;re building together.
          </p>
        </div>
      </section>
    </>
  );
}
