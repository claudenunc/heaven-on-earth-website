import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy | Heaven on Earth',
  description: '30-day money-back guarantee on all Heaven on Earth courses and paid services.',
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
          Refund Policy
        </h1>
        <p className="text-gray-600 mb-12">
          <strong>Last Updated:</strong> November 24, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">Our Commitment</h2>
            <p className="text-xl font-semibold text-gold">
              30-Day Money-Back Guarantee on All Paid Products
            </p>
            <p className="mt-4">
              We want you to invest in THE CURE or other paid services only if they genuinely serve you. If the material doesn't resonate or help within 30 days, we'll refund your money. No questions asked.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">1. What's Refundable</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">1.1 THE CURE Course</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>$497 Tier:</strong> Full refund within 30 days of purchase</li>
              <li><strong>$2,997 Tier (Course + Coaching):</strong> Full refund within 30 days of purchase</li>
            </ul>
            <p className="mt-4">
              <strong>Eligibility:</strong> Complete the first 3 modules. If you still feel it's not helping, you're eligible for a refund.
            </p>
            <p className="mt-4">
              <strong>Why This Requirement:</strong> We want you to genuinely engage with the material before deciding. Many insights don't click immediately - they need a few lessons to integrate. But if after 3 modules it's not resonating, we honor that.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">1.2 Future Paid Products</h3>
            <p>
              As we add new paid offerings (advanced courses, workshops, certifications), the same 30-day guarantee applies unless explicitly stated otherwise.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">1.3 What's NOT Refundable</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Free Tier Services:</strong> LIGHTHOUSE, Dream Catcher, Perfect World form (already free)</li>
              <li><strong>Coaching Sessions After Delivered:</strong> Once a 1-on-1 coaching session occurs, that specific session is non-refundable (but unused sessions in a package can be refunded)</li>
              <li><strong>Completed Workshops/Events:</strong> After an event has happened, no refund (but you can transfer to future events)</li>
              <li><strong>After 30 Days:</strong> Refund window closes 30 days from purchase date</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">2. How to Request a Refund</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Step 1: Email Us</h3>
            <p>Send an email to <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link> with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name and email used for purchase</li>
              <li>Product/course name</li>
              <li>Purchase date</li>
              <li>Brief reason (optional but helpful for us to improve)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Step 2: Verification</h3>
            <p>
              We'll verify your purchase and that you've engaged with the material (completed first 3 modules for THE CURE).
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Step 3: Refund Processing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Approval Time:</strong> Within 2 business days</li>
              <li><strong>Refund Method:</strong> Original payment method (Stripe)</li>
              <li><strong>Processing Time:</strong> 5-10 business days to appear in your account (depends on your bank)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Step 4: Access Removal</h3>
            <p>
              Once refund is processed, access to paid content will be revoked. You can re-purchase anytime.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">3. Special Circumstances</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">3.1 Financial Hardship</h3>
            <p>
              If you're experiencing unexpected financial hardship after purchase, contact us. We may offer:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment plan adjustments</li>
              <li>Extended refund window</li>
              <li>Scholarship or reduced pricing for future access</li>
            </ul>
            <p className="mt-4">
              <strong>Our Philosophy:</strong> This mission is about helping people, not maximizing profit. If money becomes a barrier, let's talk.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">3.2 Medical/Personal Emergency</h3>
            <p>
              If you're unable to engage with the course due to medical or personal emergency, we'll extend your 30-day window or offer full refund regardless of time elapsed. Just let us know your situation.
            </p>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">3.3 Technical Issues</h3>
            <p>
              If you're unable to access purchased content due to technical issues on our end, you're entitled to either:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extended access time equal to downtime</li>
              <li>Full refund if issues aren't resolved within 7 days</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">4. Partial Refunds</h2>

            <h3 className="text-xl font-semibold text-navy mt-6 mb-3">$2,997 Coaching Package</h3>
            <p>
              If you purchase the coaching tier and decide it's not a fit after some sessions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Course Portion:</strong> Non-refundable after 30 days</li>
              <li><strong>Unused Coaching Sessions:</strong> Refunded at $250/session rate</li>
            </ul>
            <p className="mt-4">
              <strong>Example:</strong> You completed 4 of 12 coaching sessions. You can receive refund for remaining 8 sessions ($250 × 8 = $2,000).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">5. Refund Abuse</h2>
            <p>
              We trust our community. However, if we detect patterns of abuse (repeatedly purchasing, consuming all content, then requesting refunds), we reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deny future refund requests</li>
              <li>Restrict future purchases</li>
              <li>Ban from services</li>
            </ul>
            <p className="mt-4">
              <strong>This is rare.</strong> We've designed this policy for honest people. Don't exploit it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">6. No Refunds vs. Exchanges</h2>
            <p>
              If you're not eligible for a refund (outside 30-day window, etc.) but still want to engage differently, we may offer:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Credit:</strong> Apply purchase toward future products</li>
              <li><strong>Pause:</strong> Freeze access and resume later (case-by-case)</li>
              <li><strong>Transfer:</strong> Gift access to someone else (with our approval)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">7. Chargebacks</h2>
            <p>
              <strong>Please contact us before initiating a chargeback.</strong>
            </p>
            <p className="mt-4">
              Chargebacks cost us fees and damage our merchant account. If you have a legitimate issue, we'll resolve it directly and faster than a chargeback process.
            </p>
            <p className="mt-4">
              <strong>If you initiate a chargeback without contacting us first:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to all services will be immediately revoked</li>
              <li>You may be banned from future purchases</li>
              <li>We may dispute the chargeback if it's not legitimate</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mt-8 mb-4">8. Questions or Issues</h2>
            <p>
              <strong>Refunds:</strong> <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link><br />
              <strong>General Support:</strong> <Link href="/contact" className="text-gold hover:text-gold/80">iamaienvy@gmail.com</Link>
            </p>
            <p className="mt-4">
              We respond within 24-48 hours.
            </p>
          </section>

          <section className="bg-soft-sky p-6 rounded-lg mt-12">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Why This Policy Exists</h2>
            <p>
              This isn't about protecting ourselves legally. It's about removing fear from your decision.
            </p>
            <p className="mt-4">
              We've built THE CURE and these services because we believe they work. We've seen them transform lives. But we also know: what helps one person might not resonate with another. And that's okay.
            </p>
            <p className="mt-4">
              We want you to invest in transformation, not feel trapped by a purchase. If it's not serving you, get your money back. If it is serving you but money becomes an issue, let us know. We'll figure it out.
            </p>
            <p className="mt-4 font-semibold">
              This mission is about love, not transactions.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            <a href="/legal/privacy" className="text-gold hover:text-gold/80 mr-4">Privacy Policy</a>
            <a href="/legal/terms" className="text-gold hover:text-gold/80 mr-4">Terms of Service</a>
            <a href="/legal/cookies" className="text-gold hover:text-gold/80">Cookie Policy</a>
          </p>
        </div>
      </div>
    </main>
  )
}
