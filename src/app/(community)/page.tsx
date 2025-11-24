import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Join Our Community | Heaven on Earth',
  description: 'Connect with thousands building Heaven on Earth. Share your story, support others, and be part of the transformation.',
  openGraph: {
    title: 'Join the Heaven on Earth Community',
    description: 'A global movement of people choosing love over fear, unity over division.',
    images: ['/og-community.jpg'],
  },
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-soft-sky via-white to-soft-gold">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy">
            Join the Heaven on Earth Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            You're not alone in wanting a better world. Connect with thousands of people
            actively building Heaven on Earth together.
          </p>
          <div className="pt-6">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="https://discord.gg/heavenonearthmovement" target="_blank" rel="noopener noreferrer">
                Join Discord Community
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Discord Preview Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Live Community Activity
            </h2>
            <p className="text-lg text-gray-700">
              See what's happening right now in our Discord server
            </p>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://discord.com/widget?id=YOUR_DISCORD_SERVER_ID&theme=light"
              width="350"
              height="500"
              allowTransparency={true}
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="px-6 py-16 bg-soft-sky">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
            How We Show Up Together
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Be Impeccable With Your Word</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Speak with integrity. Say only what you mean. Use words to spread truth and love.
                </p>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Don't Take Anything Personally</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  What others say reflects their reality, not yours. Stay centered in your truth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Don't Make Assumptions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Ask questions. Communicate clearly. Seek to understand before judging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Always Do Your Best</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Your best changes moment to moment. Meet yourself where you are with compassion.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-gold">
            <p className="text-center text-gray-800 text-lg">
              <strong className="text-navy">Our Foundation:</strong> The 4 Agreements by Don Miguel Ruiz guide how we relate to each other.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Community Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Sarah, Teacher</CardTitle>
                <CardDescription>Member since Week 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "I've been in education for 15 years feeling broken by a system I couldn't change.
                  This community showed me I'm not crazy - we CAN transform how we raise children.
                  I'm starting the pilot program with 8 families next month."
                </p>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Marcus, Ex-Military</CardTitle>
                <CardDescription>LIGHTHOUSE User</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "After 3 deployments, I thought I was broken forever. LIGHTHOUSE helped me see
                  depression differently. The community gave me hope. Now I'm helping other veterans
                  find their way back."
                </p>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Priya, Parent</CardTitle>
                <CardDescription>Perfect World Advocate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "I filled out the Perfect World form thinking it wouldn't matter. Then I saw
                  10,000 other responses saying the exact same things I want. We're not divided -
                  we've been lied to. This movement proves it."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="px-6 py-16 bg-soft-gold">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Ways to Contribute
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-navy/10 bg-white">
              <CardHeader>
                <CardTitle className="text-navy">Share Your Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Your transformation matters. Share what's worked, what hasn't, what you're learning.
                </p>
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                  Submit Your Story
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10 bg-white">
              <CardHeader>
                <CardTitle className="text-navy">Help Others</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Answer questions. Share resources. Offer encouragement. Be the support you needed.
                </p>
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                  Join Support Channels
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10 bg-white">
              <CardHeader>
                <CardTitle className="text-navy">Spread the Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Share content. Tag friends. Invite family. The movement grows through real connections.
                </p>
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                  Get Shareable Content
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10 bg-white">
              <CardHeader>
                <CardTitle className="text-navy">Support the Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Join courses. Attend events. Contribute skills. Help us build faster and reach more people.
                </p>
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                  View Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
            Upcoming Community Events
          </h2>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-gold">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-navy">Weekly Community Call</CardTitle>
                    <CardDescription>Every Sunday at 7pm EST</CardDescription>
                  </div>
                  <span className="text-sm font-semibold text-gold bg-soft-gold px-3 py-1 rounded">
                    Recurring
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Open discussion, Q&A with Unc, sharing wins and challenges. All are welcome.
                </p>
                <Button size="sm" className="bg-navy hover:bg-navy/90 text-white">
                  Get Zoom Link
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gold">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-navy">LIGHTHOUSE Workshop</CardTitle>
                    <CardDescription>December 1, 2025 at 2pm EST</CardDescription>
                  </div>
                  <span className="text-sm font-semibold text-navy bg-soft-sky px-3 py-1 rounded">
                    Live
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Deep dive into using LIGHTHOUSE for depression prevention. Interactive session with AI support team.
                </p>
                <Button size="sm" className="bg-navy hover:bg-navy/90 text-white">
                  Register Free
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gold">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-navy">Parent Circle: Alternative Education</CardTitle>
                    <CardDescription>December 8, 2025 at 6pm EST</CardDescription>
                  </div>
                  <span className="text-sm font-semibold text-navy bg-soft-sky px-3 py-1 rounded">
                    Live
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For parents considering the education pilot. Ask questions, meet other families, see the curriculum.
                </p>
                <Button size="sm" className="bg-navy hover:bg-navy/90 text-white">
                  Register Free
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
            You're Not Building Alone
          </h2>
          <p className="text-xl md:text-2xl text-soft-sky">
            Thousands of people are choosing love over fear. Unity over division. Action over apathy.
          </p>
          <p className="text-lg text-white/90">
            Join us. Bring your gifts. Share your story. Help us build Heaven on Earth.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8"
              asChild
            >
              <a href="https://discord.gg/heavenonearthmovement" target="_blank" rel="noopener noreferrer">
                Join Discord Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy"
              asChild
            >
              <a href="/about">Read Our Story</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
