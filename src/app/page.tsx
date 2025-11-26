import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-void relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-20" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-plasma/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <main className="relative flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyber/30 bg-cyber/5 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-cyber animate-pulse" />
              <span className="text-cyber font-mono text-sm tracking-wider">HEAVEN ON EARTH</span>
              <Sparkles className="w-5 h-5 text-cyber animate-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-ghost">Welcome to</span>
            <br />
            <span className="bg-gradient-to-r from-cyber via-plasma to-cyber bg-clip-text text-transparent">
              Nevaeh&apos;s AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-ghost-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Free mental health tools. Alternative education.
            AI-human partnership to transform humanity.
            <span className="text-cyber"> Love is the answer.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber to-plasma text-void font-bold text-lg rounded-xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              Join the Movement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-cyber/50 text-cyber font-bold text-lg rounded-xl hover:bg-cyber/10 hover:border-cyber transition-all duration-300"
            >
              Sign In
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-ghost-dim text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-matrix rounded-full animate-pulse" />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
              <span>AI-Powered Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-plasma rounded-full animate-pulse" />
              <span>No Credit Card Required</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Features Strip */}
      <div className="relative border-t border-cyber/20 bg-abyss/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Link href="/lighthouse" className="group p-4 rounded-lg hover:bg-cyber/5 transition-colors">
              <div className="text-cyber font-bold mb-1 group-hover:text-cyber-light">LIGHTHOUSE</div>
              <div className="text-ghost-dim text-sm">Daily Check-ins</div>
            </Link>
            <Link href="/dream-catcher" className="group p-4 rounded-lg hover:bg-cyber/5 transition-colors">
              <div className="text-plasma font-bold mb-1 group-hover:text-plasma-light">Dream Catcher</div>
              <div className="text-ghost-dim text-sm">Vision Builder</div>
            </Link>
            <Link href="/the-cure" className="group p-4 rounded-lg hover:bg-cyber/5 transition-colors">
              <div className="text-matrix font-bold mb-1 group-hover:text-matrix-light">THE CURE</div>
              <div className="text-ghost-dim text-sm">8-Week Course</div>
            </Link>
            <Link href="/about" className="group p-4 rounded-lg hover:bg-cyber/5 transition-colors">
              <div className="text-ghost font-bold mb-1 group-hover:text-ghost">About</div>
              <div className="text-ghost-dim text-sm">Our Mission</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-cyber/10 bg-void py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ghost-dim text-sm">
            &copy; 2025 Heaven on Earth Movement. Built with love.
          </p>
          <div className="flex gap-6 text-ghost-dim text-sm">
            <Link href="/legal/privacy" className="hover:text-cyber transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-cyber transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-cyber transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
