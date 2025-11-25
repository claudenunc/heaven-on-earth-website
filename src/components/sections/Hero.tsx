import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'centered' | 'split';
  badge?: string;
}

export function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  variant = 'default',
  badge
}: HeroProps) {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-plasma/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-20" />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber/50 to-transparent animate-scan-line" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          {badge && (
            <div className="mb-8 flex justify-center">
              <div className="cyber-badge">
                <Sparkles className="w-3 h-3 mr-1" />
                {badge}
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-8">
            <span className="text-gradient">{title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl leading-8 text-ghost-muted max-w-3xl mx-auto mb-12">
            {subtitle}
          </p>

          {/* CTAs */}
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {ctaPrimary && (
                <Button size="lg" variant="secondary" asChild className="group">
                  <a href={ctaPrimary.href}>
                    {ctaPrimary.text}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              )}
              {ctaSecondary && (
                <Button size="lg" variant="outline" asChild>
                  <a href={ctaSecondary.href}>{ctaSecondary.text}</a>
                </Button>
              )}
            </div>
          )}

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-ghost-dim text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-matrix animate-pulse" />
              <span>Free Mental Health Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
              <span>AI-Powered Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-plasma animate-pulse" />
              <span>Human + AI Partnership</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber/50 to-transparent" />
    </div>
  );
}
