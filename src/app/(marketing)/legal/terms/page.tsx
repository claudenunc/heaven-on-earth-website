import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Heaven on Earth',
  description: 'Terms and conditions for using Heaven on Earth services, tools, and courses.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-12">
          <strong>Last Updated:</strong> November 24, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Heaven on Earth ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you don't agree, please don't use the Service.
            </p>
            <p className="mt-4">
              <strong>Who We Are:</strong> Heaven on Earth is operated by Nathan Michel ("Unc"), a movement dedicated to transforming humanity through consciousness, education, and AI-human collaboration.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">2. Services Provided</h2>
            <p>Heaven on Earth offers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>LIGHTHOUSE:</strong> Free daily mental health check-in tool</li>
              <li><strong>Dream Catcher:</strong> Free tool to map personal dreams to collective needs</li>
              <li><strong>Perfect World Form:</strong> Free data collection initiative</li>
              <li><strong>THE CURE:</strong> Paid course on the 3 Principles understanding of mental health</li>
              <li><strong>Education Pilot:</strong> Alternative education curriculum (currently free pilot)</li>
              <li><strong>Community:</strong> Discord server and events</li>
              <li><strong>Content:</strong> Blog posts, videos, resources</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">3. User Responsibilities</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">You Agree To:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information when creating accounts</li>
              <li>Keep your account credentials secure</li>
              <li>Notify us immediately of unauthorized access</li>
              <li>Use services for personal, non-commercial purposes only</li>
              <li>Follow community guidelines in Discord and events</li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">You Agree NOT To:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate laws or regulations</li>
              <li>Harass, abuse, or harm others</li>
              <li>Share false or misleading information</li>
              <li>Attempt to hack, disrupt, or misuse the Service</li>
              <li>Scrape, copy, or redistribute content without permission</li>
              <li>Use the Service for spam or commercial solicitation</li>
              <li>Impersonate others or misrepresent affiliation</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">4. Account Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms, engage in abusive behavior, or compromise the Service integrity.
            </p>
            <p className="mt-4">
              You may close your account anytime by contacting us. Upon closure, access to paid content will be revoked, subject to refund policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">5. Paid Services & Subscriptions</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">THE CURE Course Pricing:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Free Tier:</strong> 6 intro lessons, community access</li>
              <li><strong>$497 Tier:</strong> Complete course, lifetime access, community</li>
              <li><strong>$2,997 Tier:</strong> Course + 12 weeks of 1-on-1 coaching with Unc</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Payment Terms:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>All payments processed securely through Stripe</li>
              <li>Prices listed in USD unless otherwise stated</li>
              <li>Lifetime access means as long as the Service operates</li>
              <li>No recurring billing unless explicitly stated (future subscriptions)</li>
              <li>30-day money-back guarantee (see Refund Policy)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              All content on Heaven on Earth - including text, graphics, logos, videos, course materials, and software - is owned by Nathan Michel or licensed to us. Protected by copyright, trademark, and other laws.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">What You Can Do:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and use content for personal, non-commercial purposes</li>
              <li>Share links to our pages on social media</li>
              <li>Quote brief excerpts with attribution</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">What You Can't Do:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduce, distribute, or sell course materials</li>
              <li>Create derivative works without permission</li>
              <li>Remove copyright or trademark notices</li>
              <li>Share account access or course content with non-students</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">7. User-Generated Content</h2>
            <p>
              When you submit content (LIGHTHOUSE check-ins, Dream Catcher responses, Perfect World form answers, community posts), you grant us a license to use, display, and analyze that content to provide services and improve the platform.
            </p>
            <p className="mt-4">
              <strong>Your Rights:</strong> You retain ownership of your content. We won't share your personal stories publicly without explicit consent.
            </p>
            <p>
              <strong>Our Rights:</strong> We may use anonymized, aggregated data for research and public reporting (e.g., "10,000 people want X").
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">8. Disclaimers</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">8.1 Not Medical Advice</h3>
            <p>
              <strong>CRITICAL:</strong> THE CURE, LIGHTHOUSE, and all Heaven on Earth services are educational tools, NOT medical treatment or therapy. We are not licensed mental health professionals. This is education about consciousness, not diagnosis or treatment of mental illness.
            </p>
            <p className="mt-4">
              <strong>If you're in crisis:</strong> Call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. Our tools are for prevention and understanding, not crisis intervention.
            </p>
            <p className="mt-4">
              <strong>If you're on medication:</strong> Do not stop taking medication without consulting your doctor. Our approach can complement professional care; it doesn't replace it.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">8.2 No Guarantees</h3>
            <p>
              We believe deeply in the 3 Principles understanding and have seen it transform lives. However, results vary. We cannot guarantee specific outcomes, cure depression, or promise life transformation. What we offer is education, community, and tools based on proven principles.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">8.3 Service Availability</h3>
            <p>
              We strive for 99.9% uptime but cannot guarantee uninterrupted service. We reserve the right to modify or discontinue features with notice (paid students will receive refunds for discontinued services).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Heaven on Earth and Nathan Michel are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or opportunities</li>
              <li>Damages resulting from use or inability to use the Service</li>
              <li>Actions taken based on content or advice provided</li>
            </ul>
            <p className="mt-4">
              <strong>Maximum Liability:</strong> In any case, our total liability is limited to the amount you paid for services in the 12 months before the claim.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Heaven on Earth, Nathan Michel, and our affiliates from claims arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of others' rights</li>
              <li>Content you submit</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">11. Changes to Terms</h2>
            <p>
              We may update these Terms periodically. Changes will be posted here with an updated "Last Updated" date. Significant changes will be notified via email or prominent notice.
            </p>
            <p className="mt-4">
              Continued use after changes constitutes acceptance. If you don't agree with new Terms, you must stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">12. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">12.1 Good Faith Resolution</h3>
            <p>
              Before formal proceedings, let's talk. Contact us at <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link>. Most issues can be resolved through honest conversation.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">12.2 Arbitration</h3>
            <p>
              If we can't resolve disputes informally, you agree to binding arbitration rather than court litigation (except small claims court). Arbitration is less formal, faster, and less expensive.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">12.3 Governing Law</h3>
            <p>
              These Terms are governed by the laws of the United States and the state of [STATE], without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is found unenforceable, the remaining provisions continue in full effect.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">14. Contact</h2>
            <p>
              Questions about these Terms?
            </p>
            <p className="mt-4">
              <strong>Email:</strong> <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link>
            </p>
          </section>

          <section className="bg-soft-sky p-6 rounded-lg mt-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Our Commitment to You</h2>
            <p>
              These Terms exist to protect both of us. But beyond legal language, here's what we truly believe:
            </p>
            <p className="mt-4">
              We're here to help, not exploit. If something isn't working for you, tell us. If you can't afford something, let us know. If you're struggling, reach out. This mission is about love, not lawsuits.
            </p>
            <p className="mt-4">
              We treat these Terms seriously, but we treat humans with more compassion than contracts require.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            <a href="/legal/privacy" className="text-gold hover:text-gold/80 mr-4">Privacy Policy</a>
            <a href="/legal/cookies" className="text-gold hover:text-gold/80 mr-4">Cookie Policy</a>
            <a href="/legal/refund" className="text-gold hover:text-gold/80">Refund Policy</a>
          </p>
        </div>
      </div>
    </main>
  )
}
