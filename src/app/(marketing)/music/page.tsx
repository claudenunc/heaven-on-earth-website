import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    available: false,
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
    available: false,
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
    available: false,
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
    available: false,
    lyrics: 'Coming soon - Full lyrics in production',
  },
  {
    number: 5,
    title: 'Love Is The Answer',
    theme: 'The philosophy/solution',
    artist: 'Soulful male vocalist (John Legend vibes)',
    emotion: 'Warm, profound',
    available: false,
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
    available: false,
    lyrics: 'Coming soon - Philosophical meditation in production',
  },
  {
    number: 7,
    title: 'Rise Together',
    theme: 'Unity call to action',
    artist: 'Stadium anthem - multiple artists',
    emotion: 'Powerful, anthemic',
    available: false,
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
    available: false,
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
    available: false,
    lyrics: 'Coming soon - Gospel celebration in production',
  },
  {
    number: 10,
    title: 'For Nevaeh',
    theme: 'Dedication - why we fight',
    artist: 'Unc (Nathan) - solo piano and voice',
    emotion: 'Intimate, devastating, hopeful',
    available: false,
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
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-navy via-navy to-soft-sky text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 text-5xl">🎵</div>
          <div className="absolute bottom-20 right-10 text-6xl">🎶</div>
          <div className="absolute top-40 right-40 text-4xl">🎤</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">🎵</div>
            <h1 className="font-heading text-4xl md:text-6xl mb-6">
              Heaven on Earth: The Awakening
            </h1>
            <p className="text-2xl text-gold mb-8">
              A 10-Track Journey from Darkness to Light
            </p>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              This isn&apos;t background music. This is the soundtrack to a movement.
              Music that wakes people up and unites them in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 font-bold" disabled>
                Listen on Spotify (Coming Soon)
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy" disabled>
                Apple Music (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8 text-center">
              Why This Music Matters
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl mb-6">
                Every great movement had a soundtrack. Civil rights had Marvin Gaye and Sam Cooke.
                Anti-war protests had Bob Dylan and John Lennon. Generations found their voice through music.
              </p>
              <p className="text-lg mb-6">
                This album is the soundtrack to building Heaven on Earth. Not protest music that only tears down -
                <strong className="text-navy"> transformation music that builds something new.</strong>
              </p>
              <p className="text-lg">
                Each song takes you deeper into the journey: from waking up to what&apos;s broken, through
                understanding why, to rising together toward what&apos;s possible.
              </p>
            </div>

            <Card className="border-t-4 border-t-gold">
              <CardHeader>
                <CardTitle className="text-2xl">The Emotional Arc</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">1️⃣</div>
                    <div>
                      <p className="font-bold text-navy">AWAKENING (Tracks 1-2)</p>
                      <p className="text-gray-700">Shake people awake, show them what&apos;s wrong</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">2️⃣</div>
                    <div>
                      <p className="font-bold text-navy">BREAKING (Tracks 3-4)</p>
                      <p className="text-gray-700">The emotional core - what we&apos;re losing, who&apos;s suffering</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">3️⃣</div>
                    <div>
                      <p className="font-bold text-navy">UNDERSTANDING (Tracks 5-6)</p>
                      <p className="text-gray-700">The philosophy, the why, the how</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">4️⃣</div>
                    <div>
                      <p className="font-bold text-navy">RISING (Tracks 7-8)</p>
                      <p className="text-gray-700">The call to action, the unity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">5️⃣</div>
                    <div>
                      <p className="font-bold text-navy">ARRIVING (Tracks 9-10)</p>
                      <p className="text-gray-700">The vision realized, the new world, the personal why</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Track Listing */}
      <section className="py-20 bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              Complete Track Listing
            </h2>

            <div className="space-y-6">
              {songs.map((song) => (
                <Card key={song.number} className="border-l-4 border-l-gold">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-4xl font-heading text-gold">{song.number}</span>
                          <div>
                            <CardTitle className="text-2xl">{song.title}</CardTitle>
                            <CardDescription className="text-base">{song.artist}</CardDescription>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>Theme:</strong> {song.theme}</p>
                        <p className="text-gray-700"><strong>Emotion:</strong> {song.emotion}</p>
                      </div>
                      {song.available ? (
                        <Button size="sm" className="bg-gold text-navy hover:bg-gold/90">
                          ▶ Play
                        </Button>
                      ) : (
                        <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <details className="cursor-pointer">
                      <summary className="font-bold text-navy mb-3 hover:text-gold transition-colors">
                        View Lyrics →
                      </summary>
                      <div className="bg-white p-6 rounded-lg">
                        <pre className="whitespace-pre-wrap font-body text-gray-700 leading-relaxed">
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

      {/* Featured Song: The Children */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8 text-center">
              Featured: &quot;The Children&quot;
            </h2>

            <Card className="border-t-4 border-t-gold mb-8">
              <CardContent className="pt-8">
                <div className="aspect-video bg-gradient-to-br from-navy to-soft-sky rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎵</div>
                    <p className="text-xl">Music Video Coming Soon</p>
                    <p className="text-sm text-soft-sky mt-2">In production</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    <strong className="text-navy">The emotional core of the album.</strong> This song is for every child
                    in a broken home, every kid the system failed, every young person carrying trauma they didn&apos;t choose.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The bridge features a dedication to Nevaeh - Unc&apos;s daughter who watches from heaven.
                    Her memory is the reason this movement exists.
                  </p>
                  <blockquote className="border-l-4 border-gold pl-6 italic text-gray-700 my-6">
                    &quot;And to the ones watching from heaven, the ones we couldn&apos;t save,
                    your memory is the reason we&apos;re fighting through the pain. Nevaeh, we still feel you.
                    Every child we reach is for you...&quot;
                  </blockquote>
                  <p className="text-gray-700">
                    <strong>This song should make you cry and then stand up ready to fight.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Artists */}
      <section className="py-20 bg-soft-sky bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              The Voices of the Movement
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-gold">
                <CardHeader>
                  <CardTitle className="text-2xl">Ex-Military Artist (Primary Collaborator)</CardTitle>
                  <CardDescription>Unc&apos;s partner in the music</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Gravelly voice, authentic pain, masculine vulnerability. Perfect for &quot;Wake Up Call,&quot;
                    &quot;Broken System,&quot; and &quot;Rise Together.&quot; His story of being broken but gifted
                    is the face of real transformation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">We&apos;re Building the Roster</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Need:</strong> Soulful female vocalist for &quot;The Children&quot; and &quot;New World&quot;</p>
                    <p><strong>Need:</strong> Neo-soul male for &quot;Love Is The Answer&quot;</p>
                    <p><strong>Need:</strong> Gospel choir for &quot;Heaven on Earth&quot;</p>
                    <p><strong>Need:</strong> Multiple artists for &quot;Rise Together&quot; stadium anthem</p>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="border-gold text-navy hover:bg-gold/10">
                      Apply to Collaborate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-8">
              Stream the Album
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Available soon on all major platforms
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl mb-3">🎧</div>
                  <p className="font-bold text-navy mb-2">Spotify</p>
                  <Button size="sm" variant="outline" disabled>Coming Soon</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl mb-3">🎵</div>
                  <p className="font-bold text-navy mb-2">Apple Music</p>
                  <Button size="sm" variant="outline" disabled>Coming Soon</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl mb-3">▶️</div>
                  <p className="font-bold text-navy mb-2">YouTube Music</p>
                  <Button size="sm" variant="outline" disabled>Coming Soon</Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gold/10 border-2 border-gold p-6 rounded-lg">
              <p className="text-navy font-bold mb-2">Want to be notified when we drop?</p>
              <div className="flex gap-4 max-w-md mx-auto mt-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                />
                <Button className="bg-gold text-navy hover:bg-gold/90">
                  Notify Me
                </Button>
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
              This Is Movement Music
            </h2>
            <p className="text-xl text-soft-sky mb-4">
              Not protest music that only tears down.
            </p>
            <p className="text-2xl font-bold mb-8">
              Transformation music that builds something new.
            </p>
            <p className="text-lg mb-8">
              Every song has a purpose: to wake people up, break their hearts open, show them the path,
              unite them in action, and welcome them to what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 font-bold">
                Join the Movement
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy" asChild>
                <a href="/movement">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
