import React from 'react';
import { Button } from '@/components/ui/button';

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
}

export function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  variant = 'default'
}: HeroProps) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-6xl font-heading">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-navy-light max-w-2xl mx-auto">
            {subtitle}
          </p>
          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {ctaPrimary && (
                <Button size="lg" variant="secondary" asChild>
                  <a href={ctaPrimary.href}>{ctaPrimary.text}</a>
                </Button>
              )}
              {ctaSecondary && (
                <Button size="lg" variant="outline" asChild>
                  <a href={ctaSecondary.href}>{ctaSecondary.text}</a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
