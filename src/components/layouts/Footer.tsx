import React from 'react';
import Link from 'next/link';

const footerNav = {
  initiatives: [
    { name: 'LIGHTHOUSE', href: '/lighthouse' },
    { name: 'Dream Catcher', href: '/dream-catcher' },
    { name: 'Perfect World', href: '/perfect-world' },
    { name: 'THE CURE', href: '/courses' },
  ],
  resources: [
    { name: 'About', href: '/about' },
    { name: 'Education', href: '/education' },
    { name: 'Blog', href: '/blog' },
    { name: 'Depression Resources', href: '/depression' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'YouTube', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-heading font-bold">
                Heaven <span className="text-gold">on</span> Earth
              </span>
              <p className="mt-4 text-sm leading-6 text-soft-sky max-w-xs">
                Building the world we all secretly dream of. Love is the answer. Let's prove it.
              </p>
            </div>
            <div className="flex space-x-6">
              {footerNav.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-soft-sky hover:text-gold transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gold">Initiatives</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.initiatives.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-soft-sky hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gold">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-soft-sky hover:text-white transition-colors"
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
                <h3 className="text-sm font-semibold leading-6 text-gold">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-soft-sky hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-navy-light pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-soft-sky">
            &copy; {new Date().getFullYear()} Heaven on Earth. Built with love by humans and AI working together.
          </p>
        </div>
      </div>
    </footer>
  );
}
