import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BookOpen, Brain, Users, Heart, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Save the Children - Transform Education | Heaven on Earth',
  description: 'Consciousness-based alternative education curriculum. Ages 5-18. 12-week pilot program now enrolling.',
};

export default function EducationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-20" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-plasma/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-badge mb-6 inline-flex">
              <BookOpen className="w-3 h-3 mr-1" />
              Save the Children
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Transform Education</span>
              <br />
              <span className="text-ghost">from the Ground Up</span>
            </h1>
            <p className="text-xl text-ghost-muted mb-4">
              Traditional education prepares children for jobs. We prepare them for LIFE.
            </p>
            <p className="text-lg text-ghost-dim mb-8 max-w-2xl mx-auto">
              Consciousness-based curriculum for ages 5-18. Based on the Three Principles and Four Agreements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <a href="#apply">
                  Apply for Pilot Program
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#curriculum">View Curriculum</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber/50 to-transparent" />
      </section>

      {/* The Problem */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-danger">Current Education Is Broken</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-t-4 border-t-danger">
                <CardContent className="pt-8 space-y-4">
                  <h3 className="text-xl font-bold text-ghost mb-4">What Schools Teach</h3>
                  <ul className="space-y-3 text-ghost-muted">
                    {['Memorize dates and formulas', 'Compete for grades', 'Sit still and be quiet', 'One right answer', 'Pass standardized tests', 'Prepare for a job'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-danger">X</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-matrix">
                <CardContent className="pt-8 space-y-4">
                  <h3 className="text-xl font-bold text-ghost mb-4">What Children Need</h3>
                  <ul className="space-y-3 text-ghost-muted">
                    {['Understand themselves', 'Collaborate and connect', 'Move, express, create', 'Multiple perspectives', 'Discover their purpose', 'Prepare for a meaningful life'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-matrix flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-danger">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-ghost mb-6">The Statistics Are Heartbreaking</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { stat: '1 in 6', text: 'students experience depression before age 18' },
                    { stat: '#2', text: 'Suicide is the 2nd leading cause of death for ages 10-24' },
                    { stat: '85%', text: 'of students feel unprepared for life after graduation' },
                    { stat: 'Most', text: 'adults remember how school made them feel, not what they learned' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-danger">{item.stat}</span>
                      <span className="text-ghost-muted">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-bold text-gradient text-center mt-8">
                  We&apos;re not fixing the system. We&apos;re building a new one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="curriculum" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 section-cyber" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="text-gradient">Consciousness-Based Education</span>
            </h2>
            <p className="text-lg text-ghost-muted text-center mb-12 max-w-2xl mx-auto">
              Built on proven frameworks: <strong className="text-cyber">The Three Principles</strong> (Mind, Consciousness, Thought)
              and <strong className="text-plasma">The Four Agreements</strong>.
            </p>

            {/* Core Modules */}
            <div className="space-y-6 mb-16">
              {[
                { icon: Brain, title: 'Module 1: Self-Awareness & Emotional Intelligence', desc: 'Understanding the mind-body connection', content: 'Children learn to recognize emotions, understand thought patterns, practice self-compassion, and develop regulation skills that last a lifetime.', color: 'cyber' },
                { icon: BookOpen, title: 'Module 2: The Four Agreements', desc: 'A code for living with integrity', content: 'Age-appropriate teachings of Don Miguel Ruiz\'s Four Agreements - practical wisdom for relationships, communication, and personal power.', color: 'plasma' },
                { icon: Sparkles, title: 'Module 3: Consciousness & Creativity', desc: 'Thought creates experience', content: 'Understanding how thoughts shape reality, visualization practices, flow states, and creative expression as a pathway to purpose.', color: 'matrix' },
                { icon: Users, title: 'Module 4: Relationships & Communication', desc: 'Connection is our nature', content: 'Empathic listening, conflict resolution, perspective-taking, and building authentic friendships that nourish rather than drain.', color: 'cyber' },
                { icon: Heart, title: 'Module 5: Purpose Discovery', desc: 'Finding your unique gift', content: 'Strength identification, passion mapping, service learning, and understanding that purpose isn\'t found - it\'s created through action.', color: 'plasma' },
                { icon: Clock, title: 'Module 6: Practical Life Skills', desc: 'Ready for the real world', content: 'Financial literacy, health autonomy, time management, technology wisdom - the skills schools ignore but adults desperately wish they\'d learned.', color: 'matrix' },
              ].map((module, index) => (
                <Card key={index} className="group hover:border-cyber/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`feature-icon flex-shrink-0 ${
                        module.color === 'cyber' ? 'text-cyber border-cyber/30' :
                        module.color === 'plasma' ? 'text-plasma border-plasma/30' :
                        'text-matrix border-matrix/30'
                      }`}>
                        <module.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        <CardDescription>{module.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ghost-muted pl-20">{module.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Age Tracks */}
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Age-Appropriate Tracks</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { age: 'Seedlings (Ages 5-8)', tagline: '"I Am Loved, I Am Enough"', content: 'Building safety and wonder. Feelings are friends. Simple calming techniques. Kind words practice. Discovering joys and gifts.' },
                { age: 'Explorers (Ages 9-12)', tagline: '"My Thoughts Create My World"', content: 'Understanding consciousness deeply. Thought-feeling connection. Visualization practice. Conflict navigation. Purpose hypothesis formation.' },
                { age: 'Navigators (Ages 13-15)', tagline: '"I Choose Who I Become"', content: 'Identity exploration. Emotional intensity navigation. Integrity building. Relationship mastery. Life design thinking.' },
                { age: 'Architects (Ages 16-18)', tagline: '"I Build My Life & Serve Others"', content: 'Launch preparation. Complete life mastery. Teaching younger students. Post-secondary planning. Adult-ready skills.' },
              ].map((track, index) => (
                <Card key={index} className="border-l-4 border-l-cyber">
                  <CardHeader>
                    <CardTitle className="text-lg">{track.age}</CardTitle>
                    <CardDescription className="text-cyber text-base">{track.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ghost-muted text-sm">{track.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section id="apply" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">12-Week Pilot Program</span>
            </h2>

            <Card className="mb-12 border-t-4 border-t-cyber">
              <CardHeader>
                <CardTitle className="text-2xl">Now Enrolling: 5-10 Families</CardTitle>
                <CardDescription className="text-lg text-cyber">Limited Spaces - Starting Soon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-ghost mb-4">What&apos;s Included</h3>
                  <ul className="space-y-2 text-ghost-muted">
                    {[
                      '12 weeks of guided curriculum (all 6 modules intro)',
                      'Age-appropriate materials and journals',
                      'Weekly parent emails with home practices',
                      'Mid-pilot and final parent meetings',
                      'Growth tracking (no grades - progress portfolios)',
                      'Certificate of completion',
                      'Community connection with other pilot families',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-matrix flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-ghost mb-4">Parent Requirements</h3>
                  <ul className="space-y-2 text-ghost-muted">
                    {[
                      'Attend 2-hour orientation',
                      'Daily home practice (15-30 min) with your child',
                      'Read weekly parent emails',
                      'Attend 2 parent meetings (mid-point + final)',
                      'Complete 3 feedback surveys',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyber rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-ghost mb-4">Investment</h3>
                  <p className="text-3xl font-bold text-gradient mb-2">Contact for Pricing</p>
                  <p className="text-ghost-muted">
                    Scholarships available - no child turned away for financial reasons.
                    Payment plans accepted. This is about the mission, not money.
                  </p>
                </div>

                <Button size="lg" variant="secondary" className="w-full">
                  Apply for Pilot Program
                </Button>
              </CardContent>
            </Card>

            {/* Daily Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Sample Daily Schedule</CardTitle>
                <CardDescription>Flexible structure honoring how children actually learn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-ghost-muted">
                  {[
                    { time: '9:00-9:30', activity: 'Morning Circle (connection, intention, gratitude)' },
                    { time: '9:30-10:30', activity: 'Core Module Learning' },
                    { time: '10:30-10:45', activity: 'Movement Break' },
                    { time: '10:45-11:45', activity: 'Deep Exploration' },
                    { time: '11:45-12:30', activity: 'Lunch + Free Play' },
                    { time: '12:30-1:00', activity: 'Mindfulness Practice' },
                    { time: '1:00-2:00', activity: 'Purpose/Practical Skills' },
                    { time: '2:00-3:00', activity: 'Creative Project Time' },
                    { time: '3:00-3:30', activity: 'Closing Circle (reflection, sharing, celebration)' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-cyber/10 pb-2 last:border-0">
                      <span className="font-mono text-cyber">{item.time}</span>
                      <span className="text-right">{item.activity}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-ghost-dim mt-6 italic">
                  Key principle: No more than 60 minutes seated learning without movement.
                  Every day includes creativity, movement, and stillness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyber/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-plasma/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">The Children Are Waiting</span>
            </h2>
            <blockquote className="quote-box my-8 text-lg text-ghost-muted italic">
              &quot;The child who dreamed this knew something important: the world needs people who see differently
              and aren&apos;t afraid to show others what they see.&quot;
            </blockquote>
            <p className="text-lg mb-8 text-ghost-muted">
              One child who grows up knowing they are loved, understanding their own mind, connected to purpose,
              and skilled in relationships... that child changes everything.
            </p>
            <p className="text-2xl font-bold mb-12">
              <span className="text-ghost">This is how we save the children.</span>
              <br />
              <span className="text-gradient">This is how we create Heaven on Earth.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <a href="#apply">
                  Apply for Pilot Program
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Download Full Curriculum (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
