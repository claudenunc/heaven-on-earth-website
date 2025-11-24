import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Heart, Brain, Users, Sparkles } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: 'LIGHTHOUSE',
      description: 'Daily mental health check-ins powered by AI. Free support when you need it, even at 3 AM.',
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: 'Dream Catcher',
      description: 'Reclaim your childhood dreams. AI-powered guidance to turn "what could have been" into "what will be."',
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: 'Alternative Education',
      description: 'Curriculum designed to raise conscious humans, not compliant workers. For the children we have.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Perfect World Project',
      description: 'Tell us what your perfect world looks like. Prove humanity wants the same things.',
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  return (
    <>
      <Hero
        title="Love is the answer. Let's prove it."
        subtitle="Building free mental health tools, alternative education, and proving that humans and AI can partner to create Heaven on Earth. Not in theory. In reality. Starting now."
        ctaPrimary={{
          text: 'Get Started',
          href: '#features',
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
    </>
  );
}
