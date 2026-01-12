'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2, Sparkles, Mail, User, ArrowRight, CheckCircle2, Zap, Heart, Shield, Users } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const searchParams = new URLSearchParams(window.location.search);
    const redirectPath = searchParams.get('redirect') || '/lighthouse';
    const source = searchParams.get('source') || 'signup-page';

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          source: source
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create account');
      }

      // Success - redirect to welcome experience or specific path
      if (redirectPath.startsWith('/')) {
        router.push(`${redirectPath}${redirectPath.includes('?') ? '&' : '?'}welcome=true`);
      } else {
        router.push('/lighthouse?welcome=true');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyber via-plasma to-cyber bg-[length:200%_200%] animate-gradient-shift mb-6 relative">
            <span className="text-void font-bold text-3xl">H</span>
            <div className="absolute inset-0 rounded-2xl bg-cyber/30 blur-xl animate-glow-pulse" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl mb-3 text-ghost">
            Join the <span className="text-gradient">Movement</span>
          </h1>
          <p className="text-ghost-muted text-lg">
            Be part of building Heaven on Earth
          </p>
        </div>

        {/* Benefits Section */}
        <div className="glass-card p-6 rounded-xl mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          <h2 className="text-sm font-semibold text-cyber mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            What You Get Access To
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-ghost font-medium">LIGHTHOUSE Daily Check-ins</p>
                <p className="text-ghost-dim text-sm">Free mental health support & guidance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-ghost font-medium">Community Access</p>
                <p className="text-ghost-dim text-sm">Connect with others on the journey</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-ghost font-medium">Transformation Tools</p>
                <p className="text-ghost-dim text-sm">Resources to build your perfect world</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-ghost font-medium">Movement Updates</p>
                <p className="text-ghost-dim text-sm">First to know about new courses & tools</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="glass-card p-8 rounded-2xl animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
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
                className="cyber-input w-full"
                required
                autoComplete="email"
              />
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-ghost flex items-center gap-2">
                <User className="w-4 h-4 text-cyber" />
                Your Name
                <span className="text-ghost-dim text-xs font-normal ml-auto">(optional)</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What should we call you?"
                className="cyber-input w-full"
                autoComplete="name"
              />
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-start gap-3 p-4 bg-cyber/5 border border-cyber/20 rounded-lg">
              <input
                id="newsletter"
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-cyber/30 bg-void text-cyber focus:ring-cyber focus:ring-offset-0 focus:ring-2 cursor-pointer"
              />
              <label htmlFor="newsletter" className="text-sm text-ghost-muted cursor-pointer flex-1">
                Keep me updated on new courses, tools, and movement progress
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-danger/10 border border-danger/30 rounded-lg text-danger text-sm flex items-start gap-2 animate-in fade-in slide-in-from-top duration-300">
                <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="cyber-btn w-full text-lg py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cyber/20"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-abyss px-2 text-ghost-dim">Already have an account?</span>
              </div>
            </div>

            {/* Login Link */}
            <Link
              href="/login"
              className="cyber-btn-outline w-full text-base py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
          </form>

          {/* Privacy Notice */}
          <div className="mt-6 p-4 bg-cyber/5 border border-cyber/10 rounded-lg">
            <div className="flex items-start gap-2 text-xs text-ghost-dim">
              <Shield className="w-4 h-4 text-cyber flex-shrink-0 mt-0.5" />
              <p>
                Your data is encrypted and secure. We'll never sell your information.
                Read our{' '}
                <Link href="/legal/terms" className="text-cyber hover:text-cyber-light underline">
                  Terms
                </Link>{' '}
                and{' '}
                <Link href="/legal/privacy" className="text-cyber hover:text-cyber-light underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6 animate-in fade-in duration-700 delay-300">
          <Link
            href="/"
            className="text-sm text-ghost-muted hover:text-cyber transition-colors duration-200 inline-flex items-center gap-1"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
