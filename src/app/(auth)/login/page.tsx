'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Sparkles, UserPlus, Mail, User } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join the movement');
      }

      setSuccess(true);
      setEmail('');
      setName('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-void flex items-center justify-center relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-md opacity-20" />

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-plasma/10 rounded-full blur-3xl animate-glow-pulse-delay" />

      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-in fade-in duration-1000">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber to-plasma flex items-center justify-center">
                  <span className="text-void font-bold text-2xl">H</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-cyber/20 blur-xl animate-glow-pulse" />
              </div>
            </div>
            <h1 className="font-heading text-4xl mb-3 text-ghost">
              Join the <span className="text-cyber">Movement</span>
            </h1>
            <p className="text-ghost-muted text-lg">
              Be part of building Heaven on Earth
            </p>
          </div>

          {/* Main Card */}
          {!success ? (
            <Card className="border-cyber/30 bg-abyss/80 backdrop-blur-xl shadow-glow-lg animate-in fade-in duration-1000 delay-200">
              <CardHeader>
                <CardTitle className="text-cyber flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Sign Up / Login
                </CardTitle>
                <CardDescription className="text-ghost-dim">
                  Enter your details to join or access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field - REQUIRED */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-ghost flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyber" />
                      Email Address
                      <span className="text-cyber">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full p-4 bg-void border border-cyber/20 rounded-lg text-ghost placeholder:text-ghost-dim focus:border-cyber focus:ring-2 focus:ring-cyber/20 outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-ghost flex items-center gap-2">
                      <User className="w-4 h-4 text-cyber" />
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="What should we call you?"
                      className="w-full p-4 bg-void border border-cyber/20 rounded-lg text-ghost placeholder:text-ghost-dim focus:border-cyber focus:ring-2 focus:ring-cyber/20 outline-none transition-all duration-200"
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-danger/10 border border-danger/30 rounded-lg text-danger text-sm animate-in fade-in duration-300">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email.trim()}
                    className="w-full bg-cyber text-void hover:bg-cyber-light font-bold text-lg py-6 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Joining the Movement...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Join the Movement
                      </>
                    )}
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-ghost-dim text-center">
                    By joining, you agree to our{' '}
                    <Link href="/legal/terms" className="text-cyber hover:text-cyber-light underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/legal/privacy" className="text-cyber hover:text-cyber-light underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          ) : (
            // Success State
            <Card className="border-cyber/40 bg-abyss/90 backdrop-blur-xl shadow-glow-xl animate-in fade-in duration-500">
              <CardContent className="pt-8 text-center space-y-6">
                <div className="flex justify-center">
                  <Sparkles className="w-16 h-16 text-cyber animate-glow-pulse" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-ghost mb-3">
                    Welcome to the Movement
                  </h2>
                  <p className="text-ghost-muted text-lg mb-6">
                    You're now part of something historic. Together, we're building Heaven on Earth.
                  </p>
                </div>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-cyber text-void hover:bg-cyber-light transition-all duration-300"
                    asChild
                  >
                    <Link href="/the-cure">Start with THE CURE</Link>
                  </Button>
                  <Button
                    className="w-full bg-void border border-cyber/30 text-cyber hover:bg-cyber/10 transition-all duration-300"
                    asChild
                  >
                    <Link href="/">Explore the Mission</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-sm text-ghost-muted hover:text-cyber transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
