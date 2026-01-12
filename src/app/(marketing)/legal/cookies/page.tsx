import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy | Heaven on Earth',
  description: 'How Heaven on Earth uses cookies and similar technologies.',
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
          Cookie Policy
        </h1>
        <p className="text-gray-600 mb-12">
          <strong>Last Updated:</strong> November 24, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit websites. They help websites remember information about your visit, like preferences and login status.
            </p>
            <p className="mt-4">
              <strong>The Simple Version:</strong> Cookies help us provide a better experience. We use them minimally and responsibly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">2. Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.1 Essential Cookies (Required)</h3>
            <p>These cookies are necessary for the website to function. You cannot opt out.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Authentication:</strong> Keep you logged into your account</li>
              <li><strong>Security:</strong> Protect against unauthorized access and fraud</li>
              <li><strong>Session Management:</strong> Remember your actions during a visit</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.2 Functional Cookies (Optional but Recommended)</h3>
            <p>These enhance your experience but aren't strictly necessary.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Preferences:</strong> Remember your settings (theme, language)</li>
              <li><strong>Progress Tracking:</strong> Save course progress and LIGHTHOUSE check-in data</li>
              <li><strong>Form Data:</strong> Preserve form inputs if you navigate away</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.3 Analytics Cookies (Optional)</h3>
            <p>Help us understand how people use the site so we can improve it.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plausible Analytics:</strong> Privacy-friendly, no personal data collected</li>
              <li><strong>Vercel Analytics:</strong> Performance metrics (page load speed, etc.)</li>
            </ul>
            <p className="mt-4">
              <strong>Our Commitment:</strong> We use Plausible instead of Google Analytics because it respects privacy. No cookies. No tracking across sites. No personal data collection.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.4 Cookies We DON'T Use</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No advertising cookies:</strong> We don't serve ads</li>
              <li><strong>No third-party tracking:</strong> No Facebook Pixel, Google Ads, etc.</li>
              <li><strong>No cross-site tracking:</strong> We don't follow you around the internet</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">3. Third-Party Cookies</h2>
            <p>Some features use third-party services that may set their own cookies:</p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Services That May Set Cookies:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stripe:</strong> Payment processing (when you purchase courses)</li>
              <li><strong>Discord:</strong> Community widget (if you interact with Discord embed)</li>
              <li><strong>YouTube:</strong> Embedded videos (privacy-enhanced mode enabled)</li>
            </ul>

            <p className="mt-4">
              Each service has its own cookie policy. We choose partners with strong privacy practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">4. How Long Cookies Last</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Stay for a set period (typically 30-365 days)</li>
              <li><strong>Authentication Cookies:</strong> Last 30 days or until you log out</li>
              <li><strong>Analytics Cookies:</strong> Last 24 hours (Plausible)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">5. How to Control Cookies</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">5.1 Browser Settings</h3>
            <p>Most browsers let you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies after each session</li>
              <li>Manage cookies on a per-site basis</li>
            </ul>

            <p className="mt-4"><strong>How to Access Cookie Settings:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">5.2 What Happens If You Block Cookies?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Block All:</strong> Website may not function properly (can't stay logged in, lose preferences)</li>
              <li><strong>Block Analytics:</strong> No impact on functionality</li>
              <li><strong>Block Third-Party:</strong> Some embeds (YouTube, Discord) may not work</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">5.3 Do Not Track (DNT)</h3>
            <p>
              We respect Do Not Track signals. When DNT is enabled, we disable optional analytics cookies automatically.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">6. Local Storage</h2>
            <p>
              In addition to cookies, we may use browser local storage to save data like:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>LIGHTHOUSE check-in drafts</li>
              <li>Course video progress</li>
              <li>User preferences</li>
            </ul>
            <p className="mt-4">
              Local storage works similarly to cookies but stores more data and doesn't expire automatically. You can clear it through browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy as we add features or change services. Changes will be posted with a new "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">8. Contact Us</h2>
            <p>Questions about cookies?</p>
            <p className="mt-4">
              <strong>Email:</strong> <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link>
            </p>
          </section>

          <section className="bg-soft-sky p-6 rounded-lg mt-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Our Cookie Philosophy</h2>
            <p>
              We use cookies because they genuinely improve your experience - not to track, manipulate, or sell your data.
            </p>
            <p className="mt-4">
              When faced with a choice between "better analytics" and "better privacy," we choose privacy. That's why we use Plausible instead of Google Analytics. That's why we don't run ads. That's why we minimize third-party cookies.
            </p>
            <p className="mt-4">
              This isn't just compliance. It's respect.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            <a href="/legal/privacy" className="text-gold hover:text-gold/80 mr-4">Privacy Policy</a>
            <a href="/legal/terms" className="text-gold hover:text-gold/80 mr-4">Terms of Service</a>
            <a href="/legal/refund" className="text-gold hover:text-gold/80">Refund Policy</a>
          </p>
        </div>
      </div>
    </main>
  )
}
