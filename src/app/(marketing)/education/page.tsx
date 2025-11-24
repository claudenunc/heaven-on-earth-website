import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Save the Children - Transform Education | Heaven on Earth',
  description: 'Consciousness-based alternative education curriculum. Ages 5-18. 12-week pilot program now enrolling.',
};

export default function EducationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl mb-6">
              Save the Children
            </h1>
            <p className="text-2xl text-soft-sky mb-4">
              Transform Education from the Ground Up
            </p>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Traditional education prepares children for jobs. We prepare them for LIFE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 font-bold" asChild>
                <a href="#apply">Apply for Pilot Program</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy" asChild>
                <a href="#curriculum">View Curriculum</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              Current Education Is Broken
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-t-4 border-t-warm-coral">
                <CardContent className="pt-8 space-y-4">
                  <h3 className="font-heading text-xl text-navy mb-4">What Schools Teach</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✗ Memorize dates and formulas</li>
                    <li>✗ Compete for grades</li>
                    <li>✗ Sit still and be quiet</li>
                    <li>✗ One right answer</li>
                    <li>✗ Pass standardized tests</li>
                    <li>✗ Prepare for a job</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-gold">
                <CardContent className="pt-8 space-y-4">
                  <h3 className="font-heading text-xl text-navy mb-4">What Children Need</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Understand themselves</li>
                    <li>✓ Collaborate and connect</li>
                    <li>✓ Move, express, create</li>
                    <li>✓ Multiple perspectives</li>
                    <li>✓ Discover their purpose</li>
                    <li>✓ Prepare for a meaningful life</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-soft-sky/20 p-6 rounded-lg mb-8">
                <h3 className="font-heading text-2xl text-navy mb-4">The Statistics Are Heartbreaking</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong className="text-navy">1 in 6 students</strong> experience depression before age 18</li>
                  <li><strong className="text-navy">Suicide is the 2nd leading cause</strong> of death for ages 10-24</li>
                  <li><strong className="text-navy">85% of students</strong> feel unprepared for life after graduation</li>
                  <li><strong className="text-navy">Most adults</strong> can&apos;t remember what they learned in school, but they remember how school made them feel</li>
                </ul>
              </div>

              <p className="text-xl text-navy font-bold text-center">
                We&apos;re not fixing the system. We&apos;re building a new one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="curriculum" className="py-20 bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              Consciousness-Based Education
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 text-center mb-8">
                Built on proven frameworks: <strong>The Three Principles</strong> (Mind, Consciousness, Thought)
                and <strong>The Four Agreements</strong> (Impeccability, Don&apos;t Take Things Personally, Don&apos;t Assume, Always Do Your Best).
              </p>
            </div>

            {/* Core Modules */}
            <div className="space-y-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Module 1: Self-Awareness & Emotional Intelligence</CardTitle>
                  <CardDescription>Understanding the mind-body connection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Children learn to recognize emotions, understand thought patterns, practice self-compassion,
                    and develop regulation skills that last a lifetime.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Module 2: The Four Agreements</CardTitle>
                  <CardDescription>A code for living with integrity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Age-appropriate teachings of Don Miguel Ruiz&apos;s Four Agreements - practical wisdom
                    for relationships, communication, and personal power.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Module 3: Consciousness & Creativity</CardTitle>
                  <CardDescription>Thought creates experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Understanding how thoughts shape reality, visualization practices, flow states,
                    and creative expression as a pathway to purpose.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Module 4: Relationships & Communication</CardTitle>
                  <CardDescription>Connection is our nature</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Empathic listening, conflict resolution, perspective-taking, and building authentic
                    friendships that nourish rather than drain.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Module 5: Purpose Discovery</CardTitle>
                  <CardDescription>Finding your unique gift</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Strength identification, passion mapping, service learning, and understanding
                    that purpose isn&apos;t found - it&apos;s created through action.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Module 6: Practical Life Skills</CardTitle>
                  <CardDescription>Ready for the real world</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Financial literacy, health autonomy, time management, technology wisdom -
                    the skills schools ignore but adults desperately wish they&apos;d learned.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Age Tracks */}
            <div className="mb-12">
              <h3 className="font-heading text-2xl text-navy mb-6 text-center">Age-Appropriate Tracks</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-gold">
                  <CardHeader>
                    <CardTitle>Seedlings (Ages 5-8)</CardTitle>
                    <CardDescription className="text-lg">&quot;I Am Loved, I Am Enough&quot;</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Building safety and wonder. Feelings are friends. Simple calming techniques.
                      Kind words practice. Discovering joys and gifts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gold">
                  <CardHeader>
                    <CardTitle>Explorers (Ages 9-12)</CardTitle>
                    <CardDescription className="text-lg">&quot;My Thoughts Create My World&quot;</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Understanding consciousness deeply. Thought-feeling connection. Visualization practice.
                      Conflict navigation. Purpose hypothesis formation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gold">
                  <CardHeader>
                    <CardTitle>Navigators (Ages 13-15)</CardTitle>
                    <CardDescription className="text-lg">&quot;I Choose Who I Become&quot;</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Identity exploration. Emotional intensity navigation. Integrity building.
                      Relationship mastery. Life design thinking.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gold">
                  <CardHeader>
                    <CardTitle>Architects (Ages 16-18)</CardTitle>
                    <CardDescription className="text-lg">&quot;I Build My Life & Serve Others&quot;</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Launch preparation. Complete life mastery. Teaching younger students.
                      Post-secondary planning. Adult-ready skills.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              12-Week Pilot Program
            </h2>

            <Card className="mb-12 border-t-4 border-t-gold">
              <CardHeader>
                <CardTitle className="text-2xl">Now Enrolling: 5-10 Families</CardTitle>
                <CardDescription className="text-lg">Starting [Date TBD] - Limited Spaces</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">What&apos;s Included</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 12 weeks of guided curriculum (all 6 modules intro)</li>
                    <li>✓ Age-appropriate materials and journals</li>
                    <li>✓ Weekly parent emails with home practices</li>
                    <li>✓ Mid-pilot and final parent meetings</li>
                    <li>✓ Growth tracking (no grades - progress portfolios)</li>
                    <li>✓ Certificate of completion</li>
                    <li>✓ Community connection with other pilot families</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">Parent Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Attend 2-hour orientation</li>
                    <li>• Daily home practice (15-30 min) with your child</li>
                    <li>• Read weekly parent emails</li>
                    <li>• Attend 2 parent meetings (mid-point + final)</li>
                    <li>• Complete 3 feedback surveys</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">Investment</h3>
                  <p className="text-2xl font-bold text-gold mb-2">$[TBD] for 12-week pilot</p>
                  <p className="text-gray-700">
                    Scholarships available - no child turned away for financial reasons.
                    Payment plans accepted. This is about the mission, not money.
                  </p>
                </div>

                <div className="pt-6">
                  <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold/90 font-bold">
                    Apply for Pilot Program
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Daily Schedule Example */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Sample Daily Schedule</CardTitle>
                <CardDescription>Flexible structure honoring how children actually learn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">9:00-9:30</span>
                    <span>Morning Circle (connection, intention, gratitude)</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">9:30-10:30</span>
                    <span>Core Module Learning</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">10:30-10:45</span>
                    <span>Movement Break</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">10:45-11:45</span>
                    <span>Deep Exploration</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">11:45-12:30</span>
                    <span>Lunch + Free Play</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">12:30-1:00</span>
                    <span>Mindfulness Practice</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">1:00-2:00</span>
                    <span>Purpose/Practical Skills</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold">2:00-3:00</span>
                    <span>Creative Project Time</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-bold">3:00-3:30</span>
                    <span>Closing Circle (reflection, sharing, celebration)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Key principle: No more than 60 minutes seated learning without movement.
                  Every day includes creativity, movement, and stillness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              Proven Models Working Now
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Montessori Schools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Self-directed learning, mixed-age classrooms, hands-on materials.
                    Graduates show higher creativity and executive function.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Waldorf Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Holistic development, imagination-first, delayed academics.
                    Students excel in emotional intelligence and creative fields.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Democratic Schools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Student governance, self-directed curriculum, real responsibility.
                    Graduates show strong intrinsic motivation and life satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading text-2xl text-navy mb-4 text-center">The Neuroscience</h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  <strong className="text-navy">Ages 0-6 are CRITICAL.</strong> This is when beliefs form,
                  when neural pathways solidify, when children decide who they are and what the world is like.
                </p>
                <p className="mb-4">
                  Traditional education misses this window entirely. By the time kids enter school,
                  many have already internalized limiting beliefs about their worth and capabilities.
                </p>
                <p className="font-bold text-navy">
                  We&apos;re catching them early. Teaching them consciousness principles before the world
                  teaches them fear. Raising a generation that will transform everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              The Children Are Waiting
            </h2>
            <p className="text-xl text-soft-sky mb-4">
              &quot;The child who dreamed this knew something important: the world needs people who see differently
              and aren&apos;t afraid to show others what they see.&quot;
            </p>
            <p className="text-lg mb-8">
              One child who grows up knowing they are loved, understanding their own mind, connected to purpose,
              and skilled in relationships... that child changes everything.
            </p>
            <p className="text-2xl font-bold mb-8">
              This is how we save the children.<br />
              This is how we create Heaven on Earth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 font-bold">
                Apply for Pilot Program
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                Download Full Curriculum (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
