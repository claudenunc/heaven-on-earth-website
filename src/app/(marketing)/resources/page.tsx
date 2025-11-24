import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, BookOpen, FileText, Target, Heart, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Resources | Heaven on Earth',
  description: 'Download free guides, worksheets, and tools for depression support, conscious education, and personal transformation.',
  openGraph: {
    title: 'Free Resources for Transformation',
    description: 'PDFs, guides, and tools to support your journey to Heaven on Earth.',
    images: ['/og-resources.jpg'],
  },
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-soft-sky via-white to-soft-gold">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy">
            Free Resources for Your Transformation
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to start building Heaven on Earth - guides, worksheets, templates, and tools.
            All free. Always.
          </p>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Featured Downloads
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gold border-2 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg">
                    <Heart className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-2xl">THE CURE Preview</CardTitle>
                    <CardDescription className="text-base">45-page course overview</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  See inside the course that's transforming how people understand depression. Includes:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><span className="text-gold">•</span> The 3 Principles framework</li>
                  <li className="flex gap-2"><span className="text-gold">•</span> Why traditional therapy often fails</li>
                  <li className="flex gap-2"><span className="text-gold">•</span> How thought creates experience</li>
                  <li className="flex gap-2"><span className="text-gold">•</span> Real transformation stories</li>
                </ul>
                <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold">
                  <Download className="w-4 h-4 mr-2" />
                  Download Preview PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-navy/10 rounded-lg">
                    <Brain className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-navy text-2xl">Education Curriculum Overview</CardTitle>
                    <CardDescription className="text-base">Complete pilot program guide</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Understand the alternative education model. Designed for conscious parenting:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><span className="text-navy">•</span> Age-appropriate curriculum (5-18)</li>
                  <li className="flex gap-2"><span className="text-navy">•</span> Integral Theory framework</li>
                  <li className="flex gap-2"><span className="text-navy">•</span> Weekly lesson plans</li>
                  <li className="flex gap-2"><span className="text-navy">•</span> Parent implementation guide</li>
                </ul>
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Curriculum PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Worksheets */}
      <section className="px-6 py-16 bg-soft-sky">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Tools & Worksheets
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">LIGHTHOUSE Mood Tracker</CardTitle>
                    <CardDescription>Printable daily check-in</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Track your mood patterns. See what's working. Prevent depression before it starts.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">Dream Catcher Worksheet</CardTitle>
                    <CardDescription>Map your perfect world</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Get clarity on what you truly want. See how your dreams align with collective needs.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">Parenting Conversation Starters</CardTitle>
                    <CardDescription>50 questions for conscious kids</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Open meaningful dialogues with children. Develop critical thinking and emotional intelligence.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">The 3 Principles Guide</CardTitle>
                    <CardDescription>Core philosophy explained</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Understand Mind, Consciousness, and Thought - the foundation of all transformation.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">The 4 Agreements Summary</CardTitle>
                    <CardDescription>Practical wisdom for relationships</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  How to show up in integrity. Transform communication. Build authentic connections.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">Perfect World Data Insights</CardTitle>
                    <CardDescription>What humanity actually wants</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  See the data proving we're not divided. Real responses from real people worldwide.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Recommended Reading
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy text-lg">The 3 Principles</CardTitle>
                <CardDescription>Sydney Banks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  The foundational text on Mind, Consciousness, and Thought.
                </p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href="https://www.amazon.com/dp/1551523000" target="_blank" rel="noopener noreferrer">
                    View on Amazon
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy text-lg">The Four Agreements</CardTitle>
                <CardDescription>Don Miguel Ruiz</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Ancient Toltec wisdom for personal freedom and integrity.
                </p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href="https://www.amazon.com/dp/1878424319" target="_blank" rel="noopener noreferrer">
                    View on Amazon
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy text-lg">Integral Theory</CardTitle>
                <CardDescription>Ken Wilber</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Comprehensive framework for understanding human development.
                </p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href="https://integrallife.com/" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy text-lg">Spiral Dynamics</CardTitle>
                <CardDescription>Don Beck & Chris Cowan</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Understand value systems and cultural evolution.
                </p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href="https://www.amazon.com/dp/1405133562" target="_blank" rel="noopener noreferrer">
                    View on Amazon
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* External Links & Partners */}
      <section className="px-6 py-16 bg-soft-gold">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
            Partner Organizations
          </h2>

          <div className="space-y-4">
            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Three Principles Global Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Worldwide network of practitioners, teachers, and learners exploring Sydney Banks' principles.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://www.3principlesglobalcommunity.org/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Alliance for Self-Directed Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Supporting families and communities in providing self-directed education opportunities.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://www.self-directed.org/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Integral Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Resources, courses, and community for integral theory and practice.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://integrallife.com/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-r from-navy to-deep-navy text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            Need Something Specific?
          </h2>
          <p className="text-xl md:text-2xl text-soft-sky">
            Can't find what you're looking for? Let us know what would help your journey.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8"
              asChild
            >
              <a href="/contact">Request a Resource</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy"
              asChild
            >
              <a href="/community">Join Community</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
