'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'About', href: '/about' },
  {
    name: 'Tools',
    href: '#',
    children: [
      { name: 'THE CURE', href: '/the-cure', description: 'Free depression recovery program' },
      { name: 'THE AGREEMENTS', href: '/the-agreements', description: 'Transform your consciousness' },
      { name: 'LIGHTHOUSE', href: '/lighthouse', description: 'Daily mental health check-ins' },
      { name: 'Dream Catcher', href: '/dream-catcher', description: 'Reclaim your childhood dreams' },
      { name: 'Perfect World', href: '/perfect-world', description: 'Share your vision' },
    ]
  },
  { name: 'Education', href: '/education' },
  { name: 'Music', href: '/music' },
  { name: 'Depression', href: '/depression' },
  { name: 'Blog', href: '/blog' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-cyber/10 shadow-glow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber to-plasma flex items-center justify-center">
                  <span className="text-void font-bold text-lg">H</span>
                </div>
                <div className="absolute inset-0 rounded-lg bg-cyber/20 blur-md group-hover:bg-cyber/40 transition-all duration-300" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-ghost">Heaven</span>
                <span className="text-cyber"> on </span>
                <span className="text-ghost">Earth</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 rounded-lg text-ghost hover:text-cyber hover:bg-cyber/10 transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ghost-muted hover:text-cyber transition-colors duration-200 rounded-lg hover:bg-cyber/5"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-ghost-muted hover:text-cyber transition-colors duration-200 rounded-lg hover:bg-cyber/5 block"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200 shadow-glow-md z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 rounded-lg hover:bg-cyber/10 transition-colors duration-200 group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="block text-sm font-medium text-ghost group-hover:text-cyber transition-colors">
                          {child.name}
                        </span>
                        <span className="block text-xs text-ghost-dim mt-0.5">
                          {child.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button size="sm" variant="secondary" asChild>
              <Link href="/the-cure">
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-card rounded-xl mb-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="p-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-sm font-medium text-ghost-muted">
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-6 py-2 text-sm text-ghost hover:text-cyber hover:bg-cyber/10 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-sm font-medium text-ghost hover:text-cyber hover:bg-cyber/10 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-cyber/10">
                <Button className="w-full" variant="secondary" asChild>
                  <Link href="/the-cure">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
