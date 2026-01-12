import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Heaven on Earth',
  description: 'How Heaven on Earth collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">
          <strong>Last Updated:</strong> November 24, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">1. Introduction</h2>
            <p>
              Heaven on Earth ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, tools, and services.
            </p>
            <p>
              <strong>Our Commitment:</strong> We treat your data with respect. We never sell your information. We only collect what's necessary to provide services and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Name, email address when you sign up for THE CURE or create an account</li>
              <li><strong>LIGHTHOUSE Check-ins:</strong> Mood ratings, energy levels, sleep quality, stress levels, hope ratings</li>
              <li><strong>Dream Catcher Responses:</strong> Your visions for a perfect world, dreams, and aspirations</li>
              <li><strong>Perfect World Form:</strong> Your answers about what you want to see in the world</li>
              <li><strong>Contact Forms:</strong> Name, email, message content when you contact us</li>
              <li><strong>Payment Information:</strong> Processed by Stripe (we don't store credit card details)</li>
              <li><strong>Course Progress:</strong> Lessons completed, quiz results, notes (for THE CURE students)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent, features used</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
              <li><strong>Cookies:</strong> See our Cookie Policy for details</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use collected information for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Delivery:</strong> Provide LIGHTHOUSE insights, Dream Catcher mapping, course access</li>
              <li><strong>Personalization:</strong> Tailor content and recommendations to your needs</li>
              <li><strong>Communication:</strong> Send course updates, check-in reminders, newsletter (if subscribed)</li>
              <li><strong>Improvement:</strong> Analyze usage patterns to enhance tools and features</li>
              <li><strong>Research:</strong> Aggregate anonymized data to understand collective patterns (e.g., Perfect World analysis)</li>
              <li><strong>Support:</strong> Respond to inquiries and provide customer service</li>
              <li><strong>Security:</strong> Detect and prevent fraud, abuse, or technical issues</li>
              <li><strong>Legal Compliance:</strong> Meet legal obligations and enforce terms</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">4. How We Share Your Information</h2>
            <p><strong>We DO NOT sell your personal information. Ever.</strong></p>

            <p className="mt-4">We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Supabase (database), Vercel (hosting), Stripe (payments), Resend (email), OpenAI (AI features) - all under strict contracts</li>
              <li><strong>Aggregated Data:</strong> Anonymous, aggregated insights publicly (e.g., "10,000 people said they want X")</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect rights/safety</li>
              <li><strong>Business Transfers:</strong> In event of merger or acquisition (with notice to you)</li>
              <li><strong>With Your Consent:</strong> Any other sharing requires explicit permission</li>
            </ul>

            <p className="mt-4 font-semibold">
              Individual LIGHTHOUSE check-ins, Dream Catcher responses, and personal stories are NEVER shared without explicit consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">5. Data Security</h2>
            <p>We implement industry-standard security measures:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Encrypted storage for sensitive information</li>
              <li>Regular security audits and updates</li>
              <li>Limited employee access to personal data</li>
              <li>Secure authentication for accounts</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">6. Your Privacy Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (with some exceptions)</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails anytime</li>
              <li><strong>Restrict Processing:</strong> Limit how we use your data in certain situations</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, email <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">7. Data Retention</h2>
            <p>We retain your information for as long as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your account is active</li>
              <li>Needed to provide services (e.g., course access)</li>
              <li>Required by law or legitimate business purposes</li>
            </ul>
            <p className="mt-4">
              <strong>LIGHTHOUSE data:</strong> Retained for pattern analysis while account is active. Deleted within 90 days of account closure unless you request immediate deletion.
            </p>
            <p>
              <strong>Course data:</strong> Retained indefinitely for lifetime access, unless you request deletion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have, please contact us immediately.
            </p>
            <p className="mt-4">
              <strong>Education Pilot:</strong> For families with children, parents/guardians provide consent and control all data related to minors.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">9. Third-Party Services</h2>
            <p>We use these third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase:</strong> Database hosting - <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80">Privacy Policy</a></li>
              <li><strong>Vercel:</strong> Website hosting - <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80">Privacy Policy</a></li>
              <li><strong>Stripe:</strong> Payment processing - <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80">Privacy Policy</a></li>
              <li><strong>OpenAI:</strong> AI features - <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80">Privacy Policy</a></li>
              <li><strong>Resend:</strong> Email delivery - <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80">Privacy Policy</a></li>
            </ul>
            <p className="mt-4">
              Each service has its own privacy practices. We choose partners with strong privacy commitments.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">10. International Users</h2>
            <p>
              Heaven on Earth operates from the United States. If you're accessing from outside the US, your information will be transferred to and processed in the US. By using our services, you consent to this transfer.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Significant changes will be notified via email or prominent website notice.
            </p>
            <p className="mt-4">
              Continued use after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">12. Contact Us</h2>
            <p>Questions or concerns about privacy?</p>
            <p className="mt-4">
              <strong>Email:</strong> <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link><br />
              <strong>General Contact:</strong> <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link>
            </p>
          </section>

          <section className="bg-soft-sky p-6 rounded-lg mt-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Our Privacy Philosophy</h2>
            <p>
              We're building Heaven on Earth through love, not exploitation. Your privacy isn't a legal obligation - it's a moral one. We collect only what serves you. We protect what we collect. We respect your autonomy always.
            </p>
            <p className="mt-4">
              This isn't about compliance. It's about integrity.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            <a href="/legal/terms" className="text-gold hover:text-gold/80 mr-4">Terms of Service</a>
            <a href="/legal/cookies" className="text-gold hover:text-gold/80 mr-4">Cookie Policy</a>
            <a href="/legal/refund" className="text-gold hover:text-gold/80">Refund Policy</a>
          </p>
        </div>
      </div>
    </main>
  )
}
