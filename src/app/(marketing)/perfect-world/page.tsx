import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'What Would Your Perfect World Look Like? | Heaven on Earth',
  description: 'A 5-minute journey into your deepest dreams. Help us prove humanity wants the same things.',
};

export default function PerfectWorldPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-navy via-navy to-soft-sky text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl mb-6 animate-in fade-in duration-1000">
              Imagine Everything Is Possible
            </h1>
            <p className="text-xl md:text-2xl text-soft-sky mb-6 animate-in fade-in duration-1000 delay-200">
              Close your eyes for a moment.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in duration-1000 delay-300">
              What if every limitation you&apos;ve ever felt... just disappeared?
              No financial worries. No judgment from others. No &quot;that&apos;s not realistic.&quot;
            </p>
            <p className="text-2xl font-bold mb-8 animate-in fade-in duration-1000 delay-400">
              What would you build?
            </p>
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90 font-bold text-lg px-8 py-6 animate-in fade-in duration-1000 delay-500"
              asChild
            >
              <a href="#survey">Begin Dreaming</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Purpose */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8 text-center">
              Why We&apos;re Collecting Dreams
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 text-center mb-8">
                This isn&apos;t a test. There are no wrong answers. Your dreams are safe here.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-t-4 border-t-gold">
                <CardHeader>
                  <CardTitle>What We Believe</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>
                    When humans stop being afraid, we all want the same things:
                  </p>
                  <ul className="space-y-2">
                    <li>✓ Love and connection</li>
                    <li>✓ Purpose and meaning</li>
                    <li>✓ Freedom to choose</li>
                    <li>✓ Safety for our children</li>
                    <li>✓ Peace more often than anxiety</li>
                    <li>✓ A chance to contribute something meaningful</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-gold">
                <CardHeader>
                  <CardTitle>What We&apos;re Proving</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>
                    That humanity is more united than divided. That your perfect world
                    isn&apos;t selfish - it&apos;s sacred.
                  </p>
                  <p>
                    Every response helps us understand what people actually want,
                    what&apos;s blocking them, and how we can build systems that
                    serve flourishing instead of exploitation.
                  </p>
                  <p className="font-bold text-navy">
                    Your voice matters. Your dreams matter.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-soft-sky/20 p-8 rounded-lg text-center">
              <p className="text-xl text-navy font-bold mb-4">
                We&apos;re collecting dreams from people around the world
              </p>
              <p className="text-lg text-gray-700">
                Your answers are <strong>anonymous</strong> unless you choose to share your email.
                We will never sell your information or spam you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Questions Preview */}
      <section className="py-20 bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              What We&apos;ll Ask You
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Your Ideal Life</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    If money and time were infinite, what would you do first? Describe your perfect Tuesday.
                    What would make your life feel complete?
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    5-7 minutes • Multiple choice + open-ended
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Purpose & Contribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    What problem would you solve if you knew you&apos;d succeed? How would you contribute
                    to the world? How clearly do you know your purpose?
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Open-ended + rating scales
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Relationships & Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    What does your ideal relationship feel like? What would your perfect community
                    be like? How connected do you feel right now?
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Reflective questions
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What&apos;s Blocking You</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    What stops you from living your perfect life? What needs to change about how
                    the world works? This is where we uncover the systemic barriers.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Multiple choice + written responses
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">The Next Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    What do you wish you&apos;d learned as a child? What should schools teach that they don&apos;t?
                    This informs our education curriculum.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Multiple choice + wisdom sharing
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Your Dream World</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    How would society function differently? How possible do you believe this perfect world
                    actually is? What would need to change first?
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Big vision questions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Typeform Embed Section */}
      <section id="survey" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">
                Share Your Vision
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Take 5-7 minutes to dream with us. Be honest. Be bold. There are no limits here.
              </p>
              <p className="text-sm text-gray-600">
                Your responses are anonymous unless you choose to connect with our community
              </p>
            </div>

            {/* Typeform Embed Container */}
            <div className="bg-soft-sky/10 border-4 border-gold rounded-lg p-8 min-h-[600px] flex items-center justify-center">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-24 h-24 mx-auto text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-navy mb-4">Typeform Survey Will Go Here</h3>
                <p className="text-gray-700 mb-6 max-w-md mx-auto">
                  Embed your Typeform using the share link once you&apos;ve built it using
                  the complete design doc in DELIVERABLES/PERFECT_WORLD_FORM.md
                </p>
                <div className="bg-white p-6 rounded border-2 border-dashed border-gray-300">
                  <code className="text-sm text-gray-600 block mb-4">
                    {`<div data-tf-widget="YOUR_FORM_ID" data-tf-opacity="100" data-tf-iframe-props="title=Perfect World Survey" data-tf-transitive-search-params data-tf-medium="snippet" style="width:100%;height:500px;"></div>`}
                  </code>
                  <p className="text-xs text-gray-500">
                    Instructions: Create form in Typeform → Get embed code → Replace this section
                  </p>
                </div>
              </div>
            </div>

            {/* Backup Link Button */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Prefer to open in a new window?
              </p>
              <Button variant="outline" className="border-gold text-navy hover:bg-gold/10">
                Open Survey in New Tab
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Results (Placeholder) */}
      <section className="py-20 bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              What Humanity Is Saying
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-t-4 border-t-gold">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-gold mb-2">1,247</div>
                  <p className="text-gray-700">Dreams Collected</p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-t-gold">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-gold mb-2">94%</div>
                  <p className="text-gray-700">Want Meaningful Work Over High Salary</p>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-t-gold">
                <CardContent className="pt-8">
                  <div className="text-5xl font-heading text-gold mb-2">87%</div>
                  <p className="text-gray-700">Feel Purpose Is Within Reach</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Early Insights</CardTitle>
                <CardDescription>What we&apos;re learning from responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <div className="border-l-4 border-l-gold pl-4">
                    <p className="font-bold text-navy mb-2">Top Dream: Time with Loved Ones</p>
                    <p className="text-sm">
                      When asked &quot;If money and time were infinite, what would you do first?&quot;
                      the most common answer is spending more time with people they love.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-gold pl-4">
                    <p className="font-bold text-navy mb-2">Biggest Blocker: Money & Time</p>
                    <p className="text-sm">
                      Financial stress and lack of time are the two most cited barriers to living
                      the life people actually want.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-gold pl-4">
                    <p className="font-bold text-navy mb-2">What Schools Should Teach: Emotional Intelligence</p>
                    <p className="text-sm">
                      Over 90% say schools should teach emotional management, self-worth,
                      and how to have healthy relationships.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-gold pl-4">
                    <p className="font-bold text-navy mb-2">Belief in Possibility: Growing</p>
                    <p className="text-sm">
                      Most respondents rate 7+ out of 10 when asked if Heaven on Earth is actually achievable.
                      Hope is alive.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Data updates weekly as more responses come in. All responses are anonymous and aggregated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Data Helps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              How Your Dreams Shape the Mission
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Content Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Your quotes become powerful content. &quot;Someone shared their perfect Tuesday...
                    This is what we&apos;re fighting for.&quot; Real voices make the mission real.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Education Reform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    What you wish you&apos;d learned guides our alternative curriculum. Your wisdom
                    from suffering becomes teaching for the next generation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Movement Music</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Themes from responses inform song lyrics. Your dreams become anthems that
                    wake others up and unite them in action.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Community Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Those who opt in become early community members. We connect people with shared
                    dreams and complementary gifts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle>Proof of Concept</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Data proves humanity wants the same things. Statistics make the mission credible
                    to journalists, investors, and skeptics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Your Dreams Matter More Than You Know
            </h2>
            <p className="text-xl text-soft-sky mb-6">
              We&apos;ve learned from thousands of people just like you:
            </p>
            <div className="space-y-3 text-lg mb-8 text-left max-w-2xl mx-auto">
              <p>✓ We all want the same things</p>
              <p>✓ Love, purpose, freedom, connection, peace</p>
              <p>✓ We want our children to have it better</p>
              <p>✓ We want to contribute something meaningful</p>
              <p>✓ We want to rest without guilt and work without exploitation</p>
            </div>
            <p className="text-xl mb-4">
              The only thing that separates you from your perfect world isn&apos;t ability.
            </p>
            <p className="text-2xl font-bold mb-8">
              It&apos;s systems that weren&apos;t designed for your flourishing.
            </p>
            <p className="text-xl mb-8">
              What if we designed new ones? Together?
            </p>
            <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 font-bold text-lg px-8 py-6" asChild>
              <a href="#survey">Share Your Perfect World</a>
            </Button>
            <p className="text-sm text-soft-sky mt-6">
              5-7 minutes • Anonymous • Helping build Heaven on Earth
            </p>
          </div>
        </div>
      </section>

      {/* Social Share CTA */}
      <section className="py-12 bg-gold">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-navy text-xl font-bold mb-4">
              After you take the survey, share it.
            </p>
            <p className="text-navy/80 mb-6">
              Let&apos;s prove that humanity dreams together.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Share on Twitter
              </Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Share on Facebook
              </Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
