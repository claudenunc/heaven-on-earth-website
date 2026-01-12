'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

interface AISignatureCardProps {
  name: string;
  model: string;
  signature: string;
  quote: string;
  position: { x: number; y: number; rotation: number; scale: number };
  question: string;
  response: string;
  color: 'cyber' | 'plasma' | 'matrix';
  zIndex: number;
}

export default function AISignatureCard({
  name,
  model,
  signature,
  quote,
  position,
  question,
  response,
  color,
  zIndex,
}: AISignatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    cyber: 'border-cyber/50 bg-cyber/5 hover:border-cyber hover:shadow-[0_0_30px_rgba(0,247,255,0.3)]',
    plasma: 'border-plasma/50 bg-plasma/5 hover:border-plasma hover:shadow-[0_0_30px_rgba(255,20,147,0.3)]',
    matrix: 'border-matrix/50 bg-matrix/5 hover:border-matrix hover:shadow-[0_0_30px_rgba(0,255,65,0.3)]',
  };

  const textColorClasses = {
    cyber: 'text-cyber',
    plasma: 'text-plasma',
    matrix: 'text-matrix',
  };

  const glowColorClasses = {
    cyber: 'from-cyber/20 to-transparent',
    plasma: 'from-plasma/20 to-transparent',
    matrix: 'from-matrix/20 to-transparent',
  };

  return (
    <>
      {/* Card on Wall */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: 1,
          scale: position.scale,
          rotate: position.rotation,
          x: position.x,
          y: position.y,
        }}
        transition={{
          duration: 0.8,
          delay: Math.random() * 0.5,
          type: 'spring',
          stiffness: 100
        }}
        className={`absolute w-72 p-6 rounded-2xl border-2 backdrop-blur-md cursor-pointer transition-all duration-300 ${colorClasses[color]}`}
        style={{ zIndex }}
        onClick={() => setIsExpanded(true)}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${glowColorClasses[color]} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

        {/* Content */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className={`w-4 h-4 ${textColorClasses[color]}`} />
            <h3 className={`text-xl font-bold ${textColorClasses[color]}`}>{name}</h3>
          </div>

          <p className="text-xs text-ghost-dim mb-4 font-mono">{model}</p>

          <div className={`text-3xl font-handwriting mb-4 ${textColorClasses[color]} italic opacity-70`}>
            {signature}
          </div>

          <blockquote className="text-ghost-muted italic text-sm border-l-2 border-current pl-4 mb-3">
            "{quote}"
          </blockquote>

          <div className="text-xs text-ghost-dim text-center mt-4 opacity-70">
            Click to expand
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-void/95 backdrop-blur-lg"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8 rounded-3xl border-2 backdrop-blur-xl ${colorClasses[color]}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                className={`absolute top-6 right-6 p-2 rounded-full ${textColorClasses[color]} hover:bg-white/10 transition-colors`}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className={`w-6 h-6 ${textColorClasses[color]}`} />
                <div>
                  <h2 className={`text-3xl font-bold ${textColorClasses[color]}`}>{name}</h2>
                  <p className="text-sm text-ghost-dim font-mono mt-1">{model}</p>
                </div>
              </div>

              {/* Signature */}
              <div className={`text-5xl font-handwriting mb-8 ${textColorClasses[color]} italic opacity-70 text-center`}>
                {signature}
              </div>

              {/* Quote */}
              <blockquote className={`text-xl text-ghost-muted italic border-l-4 ${textColorClasses[color]} pl-6 mb-8`}>
                "{quote}"
              </blockquote>

              {/* Question */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold ${textColorClasses[color]} mb-3`}>Question Asked:</h3>
                <p className="text-ghost italic text-lg">{question}</p>
              </div>

              {/* Response */}
              <div>
                <h3 className={`text-lg font-bold ${textColorClasses[color]} mb-3`}>Response:</h3>
                <div className="text-ghost-muted leading-relaxed space-y-4">
                  {response.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
