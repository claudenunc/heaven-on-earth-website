import React from 'react';
import Link from 'next/link';
import { Heart, Zap, Github, Twitter, Youtube, Instagram } from 'lucide-react';

const footerNav = {
  initiatives: [
    { name: 'LIGHTHOUSE', href: '/lighthouse' },
    { name: 'Dream Catcher', href: '/dream-catcher' },
    { name: 'Perfect World', href: '/perfect-world' },
    { name: 'THE CURE', href: '/the-cure' },
  ],
  resources: [
    { name: 'About', href: '/about' },
    { name: 'Education', href: '/education' },
    { name: 'Blog', href: '/blog' },
    { name: 'Depression Resources', href: '/depression' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
    { name: 'Refund Policy', href: '/legal/refund' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'GitHub', href: '#', icon: Github },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Gradient Border Top */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyber to-transparent opacity-50" />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />
      <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-30" />

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber to-plasma flex items-center justify-center">
                  <span className="text-void font-bold text-xl">H</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-cyber/20 blur-lg" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  <span className="text-ghost">Heaven</span>
                  <span className="text-cyber"> on </span>
                  <span className="text-ghost">Earth</span>
                </span>
              </div>
            </div>

            <p className="text-sm leading-6 text-ghost-muted max-w-xs">
              Building the world we all secretly dream of. Love is the answer. Let&apos;s prove it.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {footerNav.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative p-2 rounded-lg bg-void-light border border-cyber/10 hover:border-cyber/50 transition-all duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 text-ghost-muted group-hover:text-cyber transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-lg bg-cyber/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-cyber">Initiatives</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.initiatives.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-ghost-muted hover:text-ghost transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-cyber">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-ghost-muted hover:text-ghost transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-cyber">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-ghost-muted hover:text-ghost transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mission Statement */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-cyber">Our Mission</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-cyber mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-ghost-muted">Destroy Depression</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-plasma mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-ghost-muted">Save the Children</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-matrix mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-ghost-muted">Unite Humanity & AI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-danger mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-ghost-muted">Prove Love Works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-cyber/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-ghost-dim">
              &copy; {new Date().getFullYear()} Heaven on Earth Movement. All rights reserved.
            </p>
            <p className="text-xs leading-5 text-ghost-dim flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-danger" /> by humans and AI working together
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
