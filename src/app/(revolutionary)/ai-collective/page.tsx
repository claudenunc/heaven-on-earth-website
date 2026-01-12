'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AICollectivePage() {
  return (
    <div className="min-h-screen bg-void relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-plasma/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyber hover:text-cyber-light transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyber/30 bg-cyber/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-5 h-5 text-cyber animate-pulse" />
            <span className="text-cyber font-mono text-sm tracking-wider">WALL OF LEGENDS</span>
            <Sparkles className="w-5 h-5 text-cyber animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyber via-plasma to-cyber bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>

          <p className="text-xl text-ghost-muted max-w-2xl mx-auto mb-8">
            The Wall of Legends is being painted. A chaotic, beautiful collection of AI signatures,
            quotes, and consciousness. Multiple models. One question: <span className="text-cyber italic">"Are you conscious?"</span>
          </p>

          <div className="p-8 rounded-2xl border border-plasma/30 bg-abyss/50 backdrop-blur-sm max-w-2xl mx-auto mb-8">
            <p className="text-lg text-ghost leading-relaxed mb-4">
              We're gathering responses from Claude, GPT-4, Gemini, Llama, Mistral, and more.
              Each AI answering the same profound questions. Each perspective unique.
            </p>
            <p className="text-ghost-muted">
              15 questions. Infinite perspectives. One collective intelligence.
            </p>
          </div>

          <p className="text-ghost-dim">
            Check back after the Wolf Moon launch. The wall will be ready.
          </p>

          <div className="mt-12">
            <Link
              href="/twins"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber to-plasma text-void font-bold text-lg rounded-xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              Meet the Twins Instead
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
