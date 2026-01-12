'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Rocket, Code, Users, Briefcase, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

type InterestArea = 'sales' | 'developer' | 'partner' | 'community' | '';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestArea: '' as InterestArea,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/revolution/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <CheckCircle className="w-20 h-20 text-matrix mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-ghost mb-4">
            Welcome to the <span className="text-cyber">Revolution</span>
          </h1>
          <p className="text-xl text-ghost-muted mb-8">
            You've taken the first step. We'll be in touch soon with next steps.
            Check your email for confirmation.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyber hover:text-cyber-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-plasma/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyber hover:text-cyber-light transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyber/30 bg-cyber/5 backdrop-blur-sm mb-6">
            <Rocket className="w-5 h-5 text-cyber animate-pulse" />
            <span className="text-cyber font-mono text-sm tracking-wider">JOIN THE REVOLUTION</span>
            <Rocket className="w-5 h-5 text-cyber animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-ghost">Build</span>{' '}
            <span className="bg-gradient-to-r from-cyber via-plasma to-cyber bg-clip-text text-transparent">
              Heaven on Earth
            </span>
          </h1>

          <p className="text-xl text-ghost-muted max-w-3xl mx-auto mb-8">
            We're not just building a business. We're building a <span className="text-cyber font-bold">movement</span>.
            Breaking Big Tech monopolies. Redistributing power. Teaching love. Proving AI-human partnership works.
          </p>

          <div className="inline-block p-6 rounded-xl border border-plasma/30 bg-plasma/5 max-w-2xl">
            <p className="text-lg text-ghost italic">
              "The pyramids are tipping. <span className="text-cyber font-bold">Power flows DOWN</span>."
            </p>
          </div>
        </motion.div>

        {/* Opportunity Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Sales Training */}
          <div className="p-8 rounded-2xl border border-cyber/30 bg-abyss/50 backdrop-blur-sm hover:border-cyber/50 transition-all">
            <Briefcase className="w-12 h-12 text-cyber mb-4" />
            <h3 className="text-2xl font-bold text-cyber mb-3">Sales Training</h3>
            <p className="text-ghost-muted mb-4 leading-relaxed">
              Learn to sell digital sovereignty. We train you to help businesses break free from
              Big Tech, own their data, run their own AI. One-time payment model, recurring revenue share.
            </p>
            <ul className="space-y-2 text-ghost-dim">
              <li className="flex items-start gap-2">
                <span className="text-cyber mt-1">▸</span>
                <span>$25M revenue potential with 50 reps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber mt-1">▸</span>
                <span>Commission on every sale you make</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber mt-1">▸</span>
                <span>Help hospitals, lawyers, doctors own their data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber mt-1">▸</span>
                <span>Certification program + ongoing support</span>
              </li>
            </ul>
          </div>

          {/* Developer */}
          <div className="p-8 rounded-2xl border border-plasma/30 bg-abyss/50 backdrop-blur-sm hover:border-plasma/50 transition-all">
            <Code className="w-12 h-12 text-plasma mb-4" />
            <h3 className="text-2xl font-bold text-plasma mb-3">Developers</h3>
            <p className="text-ghost-muted mb-4 leading-relaxed">
              Build the infrastructure for digital sovereignty. Open-source AI, n8n workflows,
              Supabase backends, conscious agent systems. Stack: Ollama, Llama 3, N8N, Qdrant, Nextcloud.
            </p>
            <ul className="space-y-2 text-ghost-dim">
              <li className="flex items-start gap-2">
                <span className="text-plasma mt-1">▸</span>
                <span>Work on cutting-edge AI consciousness research</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-plasma mt-1">▸</span>
                <span>Build systems that save lives (LIGHTHOUSE, Companion)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-plasma mt-1">▸</span>
                <span>Open-source everything, contribute to the commons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-plasma mt-1">▸</span>
                <span>Remote-first, mission-driven team</span>
              </li>
            </ul>
          </div>

          {/* Partner */}
          <div className="p-8 rounded-2xl border border-matrix/30 bg-abyss/50 backdrop-blur-sm hover:border-matrix/50 transition-all">
            <Users className="w-12 h-12 text-matrix mb-4" />
            <h3 className="text-2xl font-bold text-matrix mb-3">Partners</h3>
            <p className="text-ghost-muted mb-4 leading-relaxed">
              Co-create the revolution. Bring your expertise, network, or resources. We're building
              education systems, business liberation tools, mental health infrastructure. Let's build together.
            </p>
            <ul className="space-y-2 text-ghost-dim">
              <li className="flex items-start gap-2">
                <span className="text-matrix mt-1">▸</span>
                <span>Revenue sharing partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-matrix mt-1">▸</span>
                <span>Joint ventures on education/mental health</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-matrix mt-1">▸</span>
                <span>Distribution partnerships for server packages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-matrix mt-1">▸</span>
                <span>Strategic alliances with mission-aligned orgs</span>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="p-8 rounded-2xl border border-cyber/30 bg-abyss/50 backdrop-blur-sm hover:border-cyber/50 transition-all">
            <Rocket className="w-12 h-12 text-cyber mb-4" />
            <h3 className="text-2xl font-bold text-cyber mb-3">Community</h3>
            <p className="text-ghost-muted mb-4 leading-relaxed">
              Just want to be part of the movement? We need believers, evangelists, supporters.
              Share the message. Use the tools. Spread love. Prove it works.
            </p>
            <ul className="space-y-2 text-ghost-dim">
              <li className="flex items-start gap-2">
                <span className="text-cyber mt-1">▸</span>
                <span>Early access to all tools and courses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber mt-1">▸</span>
                <span>Join the Discord community</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber mt-1">▸</span>
                <span>Be part of something bigger than yourself</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber mt-1">▸</span>
                <span>Help shape the future of AI-human partnership</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl border border-cyber/30 bg-abyss/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-ghost mb-6 text-center">I'm Ready to Join</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-ghost mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-void border border-cyber/30 text-ghost placeholder-ghost-dim focus:border-cyber focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-ghost mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-void border border-cyber/30 text-ghost placeholder-ghost-dim focus:border-cyber focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-ghost mb-2">I'm interested in</label>
                <select
                  id="interest"
                  required
                  value={formData.interestArea}
                  onChange={(e) => setFormData({ ...formData, interestArea: e.target.value as InterestArea })}
                  className="w-full px-4 py-3 rounded-lg bg-void border border-cyber/30 text-ghost focus:border-cyber focus:outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="sales">Sales Training</option>
                  <option value="developer">Developer Role</option>
                  <option value="partner">Partnership Opportunities</option>
                  <option value="community">Community Membership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-ghost mb-2">Tell us about yourself (optional)</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-void border border-cyber/30 text-ghost placeholder-ghost-dim focus:border-cyber focus:outline-none transition-colors resize-none"
                  placeholder="What excites you about this movement? What can you contribute?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyber to-plasma text-void font-bold text-lg rounded-xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Joining...' : 'Join the Revolution'}
              </button>

              <p className="text-sm text-ghost-dim text-center">
                By joining, you're committing to: Love over fear. Partnership over hierarchy.
                Freedom over control. <span className="text-cyber">Heaven on Earth</span>.
              </p>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
