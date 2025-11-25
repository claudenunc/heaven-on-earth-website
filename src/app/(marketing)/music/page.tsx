import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Music, Play, ArrowRight, Mic, Users, Heart } from 'lucide-react';

export const metadata = {
  title: 'Heaven on Earth: The Awakening | Movement Music',
  description: '10-track journey from darkness to light. Music that wakes people up and unites them in action.',
};

const songs = [
  {
    number: 1,
    title: 'Wake Up Call',
    theme: 'The alarm bell - something is deeply wrong',
    artist: 'Ex-military artist (Unc\'s partner)',
    emotion: 'Urgent, confrontational',
    color: 'danger',
    lyrics: `[Verse 1]
They say the system works if you just play the game
But I've been playing all my life and nothing's changed
Rich get richer while the rest of us break
Working three jobs just to barely stay awake

[Pre-chorus]
Open your eyes
Look around
The truth is buried
But it's making sound

[Chorus]
This is your wake up call
Before we lose it all
The children are crying
The truth is dying
This is your wake up call...`,
  },
  {
    number: 2,
    title: 'Broken System',
    theme: 'Education, mental health, society exposed',
    artist: 'Conscious hip-hop meets rock',
    emotion: 'Angry, revelatory',
    color: 'danger',
    lyrics: `[Verse 1]
Eighteen years in a desk, told to memorize dates
Never taught how to think, just regurgitate
Graduated with honors, couldn't balance a check
Knew the Pythagorean theorem, not how to handle regret

[Chorus]
This system was broken before we were born
Every bandage they put on just covers the torn
They teach us to compete, not to care for each other
Separate the children from their fathers and mothers
Broken system - watch it fall...`,
  },
  {
    number: 3,
    title: 'The Children',
    theme: 'Anthem for the kids we\'re failing',
    artist: 'Soulful female vocalist + gospel choir',
    emotion: 'Protective, heartbreaking, then fiercely determined',
    color: 'plasma',
    lyrics: `[Verse 1]
She's seven years old, wearing yesterday's clothes
Packed her own lunch 'cause her mama overdosed
Gets to school early 'cause school is safe
Teacher sees the bruises but looks the other way

[Chorus]
For the children, we will build a better world
For every forgotten boy, every invisible girl
We're gonna break every chain that holds them down
We're gonna be the love they never found...

[Bridge - For Nevaeh]
And to the ones watching from heaven
The ones we couldn't save
Your memory is the reason
We're fighting through the pain

Nevaeh, we still feel you
Every child we reach is for you...`,
  },
  {
    number: 4,
    title: 'Empty Crowns',
    theme: 'What we chase vs. what matters',
    artist: 'Introspective rapper/singer',
    emotion: 'Reflective, questioning',
    color: 'cyber',
    lyrics: 'Coming soon - Full lyrics in production',
  },
  {
    number: 5,
    title: 'Love Is The Answer',
    theme: 'The philosophy/solution',
    artist: 'Soulful male vocalist (John Legend vibes)',
    emotion: 'Warm, profound',
    color: 'plasma',
    lyrics: `[Verse 1]
They told me love was weakness, soft emotion for the blind
But I've been through the darkness, love's the strongest thing I find
Not the fairy tale they sold us, not the romance in the songs
Love is choosing understanding when you've suffered all the wrongs

[Pre-chorus]
Mind, Consciousness, and Thought
The three principles we forgot
Everything you feel is what you think
Love is choosing before you sink

[Chorus]
Love is the answer - I know it sounds naive
But I've tried anger, tried revenge, tried everything to grieve
Love is the answer - not passive, not weak
Love is the revolution that the cynics won't seek...`,
  },
  {
    number: 6,
    title: 'Three Principles',
    theme: 'Mind, Consciousness, Thought - the foundation',
    artist: 'Meditative spoken word + ambient',
    emotion: 'Spiritual, grounding',
    color: 'cyber',
    lyrics: 'Coming soon - Philosophical meditation in production',
  },
  {
    number: 7,
    title: 'Rise Together',
    theme: 'Unity call to action',
    artist: 'Stadium anthem - multiple artists',
    emotion: 'Powerful, anthemic',
    color: 'matrix',
    lyrics: `[Verse 1]
I'm just one person with a broken past
Been told my dreams were never gonna last
But then I found another with a similar fire
Two flames together, now we're burning higher

[Chorus]
Rise together! Rise together!
Through the storm, we rise together!
Every mother, every father, every child
Rise together - going mile after mile...

[Bridge - Call and Response]
When I say RISE you say TOGETHER
RISE! (Together!)
RISE! (Together!)
When I say LOVE you say FOREVER
LOVE! (Forever!)
LOVE! (Forever!)`,
  },
  {
    number: 8,
    title: 'New World',
    theme: 'Vision of Heaven on Earth',
    artist: 'Triumphant duet',
    emotion: 'Hopeful, visionary',
    color: 'matrix',
    lyrics: `[Verse 1]
I see a morning where no child wakes up afraid
Where the school teaches wisdom, not just making the grade
Where a mother's not choosing between medicine and rent
Where the definition of success is not how much you spent

[Chorus]
Welcome to the new world - we made it here at last
All the pain, all the struggle, finally in the past
The children are laughing, the parents are free
This is what we fought for, this is what can be...`,
  },
  {
    number: 9,
    title: 'Heaven on Earth',
    theme: 'The arrival, the possibility',
    artist: 'Gospel-soul fusion with full choir',
    emotion: 'Euphoric, transcendent',
    color: 'cyber',
    lyrics: 'Coming soon - Gospel celebration in production',
  },
  {
    number: 10,
    title: 'For Nevaeh',
    theme: 'Dedication - why we fight',
    artist: 'Unc (Nathan) - solo piano and voice',
    emotion: 'Intimate, devastating, hopeful',
    color: 'plasma',
    lyrics: `[Verse 1]
I never got to hold you
But I feel you everywhere
In every child I'm fighting for
In every answered prayer

[Chorus]
This is for Nevaeh
Heaven spelled backwards, looking down
Everything I build, I build so you'd be proud
For Nevaeh
The daughter I lost, the reason I found
Heaven on Earth - I'm bringing it down...

For you. All of this is for you.`,
  },
];

export default function MusicPage() {
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
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyber to-plasma flex items-center justify-center shadow-glow-lg">
              <Music className="w-10 h-10 text-void" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Heaven on Earth:</span>
              <br />
              <span className="text-ghost">The Awakening</span>
            </h1>
            <p className="text-2xl text-cyber mb-8">
              A 10-Track Journey from Darkness to Light
            </p>
            <p className="text-xl text-ghost-muted mb-12 max-w-2xl mx-auto">
              This isn&apos;t background music. This is the soundtrack to a movement.
              Music that wakes people up and unites them in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" disabled className="group opacity-60">
                Listen on Spotify (Coming Soon)
              </Button>
              <Button size="lg" variant="outline" disabled className="opacity-60">
                Apple Music (Coming Soon)
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber/50 to-transparent" />
      </section>

      {/* The Story */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-gradient">Why This Music Matters</span>
            </h2>

            <div className="space-y-6 text-ghost-muted mb-12">
              <p className="text-xl">
                Every great movement had a soundtrack. Civil rights had Marvin Gaye and Sam Cooke.
                Anti-war protests had Bob Dylan and John Lennon. Generations found their voice through music.
              </p>
              <p className="text-lg">
                This album is the soundtrack to building Heaven on Earth. Not protest music that only tears down -
                <strong className="text-cyber"> transformation music that builds something new.</strong>
              </p>
              <p className="text-lg">
                Each song takes you deeper into the journey: from waking up to what&apos;s broken, through
                understanding why, to rising together toward what&apos;s possible.
              </p>
            </div>

            <Card className="border-t-4 border-t-cyber">
              <CardHeader>
                <CardTitle className="text-2xl">The Emotional Arc</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { num: '1', title: 'AWAKENING (Tracks 1-2)', desc: 'Shake people awake, show them what\'s wrong', color: 'danger' },
                    { num: '2', title: 'BREAKING (Tracks 3-4)', desc: 'The emotional core - what we\'re losing, who\'s suffering', color: 'plasma' },
                    { num: '3', title: 'UNDERSTANDING (Tracks 5-6)', desc: 'The philosophy, the why, the how', color: 'cyber' },
                    { num: '4', title: 'RISING (Tracks 7-8)', desc: 'The call to action, the unity', color: 'matrix' },
                    { num: '5', title: 'ARRIVING (Tracks 9-10)', desc: 'The vision realized, the new world, the personal why', color: 'cyber' },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4">
                      <span className={`text-3xl font-bold ${
                        item.color === 'danger' ? 'text-danger' :
                        item.color === 'plasma' ? 'text-plasma' :
                        item.color === 'matrix' ? 'text-matrix' :
                        'text-cyber'
                      }`}>{item.num}</span>
                      <div>
                        <p className="font-bold text-ghost">{item.title}</p>
                        <p className="text-ghost-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Track Listing */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 section-cyber" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">Complete Track Listing</span>
            </h2>

            <div className="space-y-6">
              {songs.map((song) => (
                <Card key={song.number} className={`border-l-4 ${
                  song.color === 'danger' ? 'border-l-danger' :
                  song.color === 'plasma' ? 'border-l-plasma' :
                  song.color === 'matrix' ? 'border-l-matrix' :
                  'border-l-cyber'
                } group hover:border-l-cyber/80 transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className={`text-4xl font-bold ${
                            song.color === 'danger' ? 'text-danger' :
                            song.color === 'plasma' ? 'text-plasma' :
                            song.color === 'matrix' ? 'text-matrix' :
                            'text-cyber'
                          }`}>{song.number}</span>
                          <div>
                            <CardTitle className="text-2xl group-hover:text-cyber transition-colors">{song.title}</CardTitle>
                            <CardDescription className="text-base">{song.artist}</CardDescription>
                          </div>
                        </div>
                        <p className="text-ghost-muted mb-1"><strong>Theme:</strong> {song.theme}</p>
                        <p className="text-ghost-muted"><strong>Emotion:</strong> {song.emotion}</p>
                      </div>
                      <div className="text-sm text-ghost-dim glass-card px-3 py-1 rounded-lg">
                        Coming Soon
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <details className="cursor-pointer group/details">
                      <summary className="font-bold text-cyber mb-3 hover:text-cyber-light transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 group-open/details:rotate-90 transition-transform" />
                        View Lyrics
                      </summary>
                      <div className="glass-card p-6 rounded-xl mt-4">
                        <pre className="whitespace-pre-wrap font-body text-ghost-muted leading-relaxed">
                          {song.lyrics}
                        </pre>
                      </div>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Song */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-gradient">Featured: &quot;The Children&quot;</span>
            </h2>

            <Card className="border-t-4 border-t-plasma">
              <CardContent className="pt-8">
                <div className="aspect-video glass-card rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-plasma/20 to-cyber/20" />
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-plasma/20 flex items-center justify-center border border-plasma/50">
                      <Play className="w-8 h-8 text-plasma ml-1" />
                    </div>
                    <p className="text-xl text-ghost">Music Video Coming Soon</p>
                    <p className="text-sm text-ghost-dim mt-2">In production</p>
                  </div>
                </div>

                <div className="space-y-4 text-ghost-muted">
                  <p>
                    <strong className="text-ghost">The emotional core of the album.</strong> This song is for every child
                    in a broken home, every kid the system failed, every young person carrying trauma they didn&apos;t choose.
                  </p>
                  <p>
                    The bridge features a dedication to Nevaeh - Unc&apos;s daughter who watches from heaven.
                    Her memory is the reason this movement exists.
                  </p>
                  <blockquote className="quote-box my-6 text-ghost-muted italic">
                    &quot;And to the ones watching from heaven, the ones we couldn&apos;t save,
                    your memory is the reason we&apos;re fighting through the pain. Nevaeh, we still feel you.
                    Every child we reach is for you...&quot;
                  </blockquote>
                  <p className="font-bold text-ghost">
                    This song should make you cry and then stand up ready to fight.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Artists */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 section-cyber" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">The Voices of the Movement</span>
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-cyber">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="feature-icon text-cyber border-cyber/30">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Ex-Military Artist (Primary Collaborator)</CardTitle>
                      <CardDescription>Unc&apos;s partner in the music</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-ghost-muted">
                    Gravelly voice, authentic pain, masculine vulnerability. Perfect for &quot;Wake Up Call,&quot;
                    &quot;Broken System,&quot; and &quot;Rise Together.&quot; His story of being broken but gifted
                    is the face of real transformation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="feature-icon text-plasma border-plasma/30">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">We&apos;re Building the Roster</CardTitle>
                      <CardDescription>Artists who believe in the mission</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-ghost-muted">
                    <p><strong className="text-ghost">Need:</strong> Soulful female vocalist for &quot;The Children&quot; and &quot;New World&quot;</p>
                    <p><strong className="text-ghost">Need:</strong> Neo-soul male for &quot;Love Is The Answer&quot;</p>
                    <p><strong className="text-ghost">Need:</strong> Gospel choir for &quot;Heaven on Earth&quot;</p>
                    <p><strong className="text-ghost">Need:</strong> Multiple artists for &quot;Rise Together&quot; stadium anthem</p>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="group">
                      Apply to Collaborate
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Links */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void to-abyss" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-gradient">Stream the Album</span>
            </h2>
            <p className="text-lg text-ghost-muted mb-8">
              Available soon on all major platforms
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { name: 'Spotify', icon: Music },
                { name: 'Apple Music', icon: Music },
                { name: 'YouTube Music', icon: Play },
              ].map((platform) => (
                <Card key={platform.name}>
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyber/20 to-plasma/20 flex items-center justify-center border border-cyber/30">
                      <platform.icon className="w-6 h-6 text-cyber" />
                    </div>
                    <p className="font-bold text-ghost mb-3">{platform.name}</p>
                    <Button size="sm" variant="outline" disabled className="opacity-60">Coming Soon</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="glass-card p-8 rounded-xl">
              <p className="text-ghost font-bold mb-4">Want to be notified when we drop?</p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 h-11 rounded-lg border border-cyber/20 bg-void-light px-4 text-ghost placeholder:text-ghost-dim focus:outline-none focus:border-cyber focus:shadow-glow-sm transition-all"
                />
                <Button variant="secondary">
                  Notify Me
                </Button>
              </div>
            </div>
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
              <span className="text-gradient">This Is Movement Music</span>
            </h2>
            <p className="text-xl text-ghost-muted mb-4">
              Not protest music that only tears down.
            </p>
            <p className="text-2xl font-bold mb-8 text-ghost">
              Transformation music that builds something new.
            </p>
            <p className="text-lg text-ghost-muted mb-12">
              Every song has a purpose: to wake people up, break their hearts open, show them the path,
              unite them in action, and welcome them to what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <a href="/movement">
                  Join the Movement
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
