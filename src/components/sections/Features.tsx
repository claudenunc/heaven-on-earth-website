import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

export function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 section-cyber" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center mb-16">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
                <span className="text-gradient">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg leading-8 text-ghost-muted">
                {subtitle}
              </p>
            )}
            <div className="mt-6 mx-auto accent-line" />
          </div>
        )}

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative card-3d border-cyber/10 hover:border-cyber/30"
              >
                <CardHeader>
                  {feature.icon && (
                    <div className="feature-icon mb-4 group-hover:shadow-glow-sm transition-shadow duration-300">
                      {feature.icon}
                    </div>
                  )}
                  <CardTitle className="text-lg group-hover:text-cyber transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-ghost-muted">
                    {feature.description}
                  </CardDescription>
                  {feature.href && (
                    <a
                      href={feature.href}
                      className="inline-flex items-center text-cyber text-sm font-medium mt-4 group-hover:gap-2 transition-all duration-300"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  )}
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyber/5 to-plasma/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
