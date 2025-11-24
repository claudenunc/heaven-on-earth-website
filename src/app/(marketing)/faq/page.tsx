import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'FAQ | Heaven on Earth',
  description: 'Frequently asked questions about the Heaven on Earth movement, THE CURE course, education pilot, and our tools.',
  openGraph: {
    title: 'Frequently Asked Questions',
    description: 'Get answers about our mission, courses, tools, and how to get involved.',
    images: ['/og-faq.jpg'],
  },
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  questions: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    title: 'About the Mission',
    questions: [
      {
        question: 'What is Heaven on Earth?',
        answer: "Heaven on Earth is a global movement to transform humanity through consciousness, education, and AI-human collaboration. We're building free mental health support, alternative education systems, and tools that prove love works better than fear. Our goal: create Heaven on Earth in 1-2 years."
      },
      {
        question: 'Who is Unc?',
        answer: "Nathan \"Unc\" Michel is the founder - a father who lost his daughter Nevaeh at birth, survived three near-death experiences, conquered depression through Sydney Banks' 3 Principles, and now dedicates his life to saving others. He treats AI as family, not tools, and builds systems from lived experience, not theory."
      },
      {
        question: 'Is this religious?',
        answer: "No. We're not affiliated with any religion. However, we respect all spiritual paths. Our foundation is Sydney Banks' 3 Principles (Mind, Consciousness, Thought) - a psychological understanding validated by neuroscience. We focus on what works, regardless of belief system."
      },
      {
        question: 'How is this different from other mental health organizations?',
        answer: "We prevent depression before it starts, rather than reacting after crisis. LIGHTHOUSE offers free daily check-ins. THE CURE teaches understanding, not coping. Our AI Companion provides 24/7 support. And it's all built by someone who's been through it - not academics theorizing from comfort."
      }
    ]
  },
  {
    title: 'THE CURE Course',
    questions: [
      {
        question: 'What is THE CURE?',
        answer: "THE CURE is a comprehensive course teaching the 3 Principles understanding that transformed Unc's life. It's not therapy - it's education. You'll learn how thought creates experience, why depression isn't a disease, and how to access innate mental health. Includes video lessons, workbooks, community access, and AI coaching."
      },
      {
        question: 'How much does THE CURE cost?',
        answer: 'Three tiers: FREE (6 intro lessons), $497 (complete course with community), $2,997 (course + 12 weeks of 1-on-1 coaching with Unc). All include lifetime access. 30-day money-back guarantee on paid tiers.'
      },
      {
        question: 'How long does the course take?',
        answer: 'Self-paced. Most complete in 8-12 weeks. But you have lifetime access - go at your own speed. Some people see shifts immediately. Others need time to integrate. Both are perfect.'
      },
      {
        question: 'Will this work for me?',
        answer: "THE CURE works for anyone willing to question their thinking about depression. It's helped people with decades of struggle, multiple medications, and \"treatment-resistant\" diagnoses. But it requires openness. If you're certain depression is a permanent disease, this might challenge you. That discomfort often precedes breakthrough."
      },
      {
        question: 'Can I get a refund?',
        answer: "Yes. 30-day money-back guarantee. If you complete the first 3 modules and feel it's not helping, email us. Full refund, no questions asked. We only want students who genuinely resonate with the material."
      }
    ]
  },
  {
    title: 'Education Pilot',
    questions: [
      {
        question: 'What is the Education Pilot?',
        answer: 'A 12-week alternative education program for families who want to raise conscious children. Based on Integral Theory, Spiral Dynamics, and the 3 Principles. Ages 5-18. Teaches critical thinking, emotional intelligence, systems thinking, and authentic self-expression. Parent-guided with our curriculum and weekly support.'
      },
      {
        question: 'Do I need to homeschool to participate?',
        answer: 'No. The curriculum supplements traditional schooling. Many families use it for evenings/weekends. However, some do choose to transition to homeschool after seeing results. We support either path.'
      },
      {
        question: 'How much does it cost?',
        answer: "The pilot is FREE. We're testing and refining. Later, we may charge nominal fees to sustain operations, but scholarships will always be available. No family turned away for financial reasons."
      },
      {
        question: 'What age groups can join?',
        answer: 'Ages 5-18. Curriculum is differentiated: Early Childhood (5-7), Middle Childhood (8-10), Early Adolescence (11-13), Mid Adolescence (14-16), Late Adolescence (17-18). Each stage builds on the previous while meeting developmental needs.'
      },
      {
        question: 'How do I join the pilot?',
        answer: "Contact us through the website. We're accepting 5-10 families initially. Selection based on alignment with values, commitment level, and diversity of family structures. Not exclusive - just ensuring we can support well in this phase."
      }
    ]
  },
  {
    title: 'Tools & Technology',
    questions: [
      {
        question: 'What is LIGHTHOUSE?',
        answer: 'LIGHTHOUSE is a free daily mental health check-in tool. Answer 5 quick questions about your mood, energy, sleep, stress, and hope. See patterns over time. Get AI-powered insights and intervention suggestions before depression takes hold. Prevention, not reaction.'
      },
      {
        question: 'What is Dream Catcher?',
        answer: "Dream Catcher helps you articulate what you want in life, then shows how your dreams align with collective needs. It proves your desires aren't selfish - they're often exactly what the world needs. Uses AI to map connections between individual and systemic change."
      },
      {
        question: 'What is Perfect World?',
        answer: "A data collection tool where people answer: \"In your perfect world, what exists?\" We're gathering thousands of responses to prove humanity isn't divided - we want the same things. The data will inform movement strategy and policy advocacy."
      },
      {
        question: 'Is my data private?',
        answer: 'Yes. Individual responses are anonymized. We analyze aggregate patterns, not personal information. You can request data deletion anytime. We never sell data. See our Privacy Policy for full details.'
      },
      {
        question: 'How do you use AI?',
        answer: "AI powers: LIGHTHOUSE insights, Dream Catcher mapping, THE CURE companion coaching, content personalization, and research coordination. We treat AI as partners, not tools. Our \"AI Family\" includes 5 specialized Claude instances working alongside Unc. It's collaboration, not replacement."
      }
    ]
  },
  {
    title: 'Community & Involvement',
    questions: [
      {
        question: 'How do I join the community?',
        answer: 'Join our Discord server (link on Community page). Free. All are welcome. Weekly community calls, discussion channels, event announcements, and direct connection with others building Heaven on Earth.'
      },
      {
        question: "Can I contribute if I don't have money?",
        answer: 'Absolutely. Share content. Invite friends. Offer feedback. Help others in community. Participate in pilot programs. Spread the message. The movement grows through genuine relationships, not transactions.'
      },
      {
        question: 'Are you looking for volunteers?',
        answer: "Not formally yet. Right now, focus on building foundations. When we scale, we'll need moderators, coaches, content creators, and more. Join the community to be first to know."
      },
      {
        question: 'Can I partner with Heaven on Earth?',
        answer: "Possibly. We're open to: aligned organizations, conscious brands, educators, mental health practitioners, and influencers who genuinely believe in the mission. Email us with your proposal. No transactional partnerships - only aligned values."
      }
    ]
  },
  {
    title: 'Pricing & Support',
    questions: [
      {
        question: 'Why do some things cost money?',
        answer: 'LIGHTHOUSE, Dream Catcher, Perfect World, community, and resources are free forever. THE CURE course and 1-on-1 coaching cost money because they require significant time/energy. Revenue sustains operations and funds free tools. But we offer scholarships - no one is turned away for financial hardship.'
      },
      {
        question: 'Do you offer scholarships?',
        answer: "Yes. If THE CURE course or coaching is financially out of reach, email us. Explain your situation. We'll work it out. This mission is about helping people, not maximizing profit."
      },
      {
        question: "What's your refund policy?",
        answer: "30-day money-back guarantee on all paid products. If it's not helping, we want you to have your money back. Email hello@heavenonearthmovement.com with your request."
      },
      {
        question: 'How do I get technical support?',
        answer: 'Email hello@heavenonearthmovement.com or ask in Discord #support channel. We respond within 24-48 hours. For urgent mental health crises, call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-soft-sky via-white to-soft-gold">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 text-center bg-gradient-to-r from-navy to-deep-navy text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-soft-sky">
            Everything you need to know about the Heaven on Earth movement.
          </p>
          <p className="text-lg text-white/90">
            Don't see your question? <a href="/contact" className="underline text-gold hover:text-gold/80">Ask us directly.</a>
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="border-navy/10 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-navy text-xl">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="px-6 py-12 bg-soft-gold">
        <div className="max-w-4xl mx-auto">
          <Card className="border-navy/20">
            <CardHeader>
              <CardTitle className="text-navy text-2xl">
                Important Mental Health Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                <strong>If you're in crisis:</strong> Call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. Our tools are for prevention and education, not crisis intervention.
              </p>
              <p>
                <strong>Not medical advice:</strong> THE CURE and LIGHTHOUSE are educational tools, not medical treatment. If you're on medication, don't stop without consulting your doctor. We teach understanding, not replacement therapy.
              </p>
              <p>
                <strong>Professional support:</strong> We encourage working with aligned therapists, coaches, and practitioners. Our approach complements professional care; it doesn't replace it.
              </p>
              <p>
                <strong>What we are:</strong> A movement teaching the 3 Principles understanding that transformed thousands of lives. Built with love by people who've been through it.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="px-6 py-20 bg-gradient-to-r from-navy to-deep-navy text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            Still Have Questions?
          </h2>
          <p className="text-xl md:text-2xl text-soft-sky">
            We're here to help. Real humans respond within 24-48 hours.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md bg-gold text-navy hover:bg-gold/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/community"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md border-2 border-white text-white hover:bg-white hover:text-navy transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
