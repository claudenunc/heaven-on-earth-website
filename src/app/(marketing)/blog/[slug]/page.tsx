import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { notFound } from 'next/navigation';

// This would normally come from Supabase or markdown files
const blogPosts: Record<string, any> = {
  'education-system-crushing-kids': {
    title: "Here's What's Broken: The Education System Is Crushing Our Kids",
    excerpt: 'Statistics on mental health in students, standardized testing failure, and the loss of creativity and joy in modern education.',
    category: 'Broken System',
    date: '2025-11-20',
    readTime: '6 min read',
    author: 'Nathan Michel',
    authorBio: 'Builder of Heaven on Earth. Former addict. Current optimist.',
    content: `
The education system is broken. Not "needs improvement" broken. Not "could use some tweaking" broken. **Fundamentally, systematically, catastrophically broken.**

And our kids are paying the price with their mental health, creativity, and joy.

## The Statistics Don't Lie

Let me show you what's really happening:

- **50% of students** report feeling stressed daily about school
- **1 in 5 teenagers** experiences depression or anxiety symptoms
- **Youth suicide rates** have increased 60% in the last decade
- **70% of students** say they feel overwhelmed by schoolwork
- **Creative thinking scores** have been declining since 1990

These aren't just numbers. These are children suffering under a system designed in the Industrial Revolution to produce compliant workers, not conscious humans.

## What's Actually Broken

### 1. Standardized Testing Is Destroying Learning

We've reduced education to test scores. Not understanding. Not curiosity. Not wisdom. **Test scores.**

Kids spend months preparing for tests that measure memorization, not comprehension. Teachers are forced to "teach to the test" instead of teaching what matters.

The result? Students learn to regurgitate information for 24 hours, then forget it immediately after the exam. That's not education. That's performance theater.

### 2. We're Teaching Compliance, Not Consciousness

Sit still. Be quiet. Don't question authority. Memorize what we tell you. Repeat it back exactly as we said it.

This isn't education. It's indoctrination.

We're teaching kids to suppress their natural curiosity, ignore their intuition, and obey without thinking. Then we wonder why they grow up anxious, depressed, and disconnected from themselves.

### 3. Creativity Is Being Systematically Eliminated

When was the last time your child came home excited about what they learned at school?

When was the last time they had space to explore what genuinely interests them?

When was the last time they were encouraged to think differently instead of "correctly"?

The system punishes creative thinking. Divergent answers are marked wrong even if they're insightful. Original ideas are dismissed as "off-topic." Kids who think differently are labeled "problems."

**We're crushing the very creativity we claim to value.**

### 4. Mental Health Is an Afterthought

Schools spend millions on standardized testing. Pennies on mental health support.

A student can be visibly depressed, anxious, or struggling - and as long as their grades don't drop, nobody notices. Nobody intervenes. Nobody asks: **"Are you okay?"**

We care more about their GPA than their well-being. And kids know it.

## The Real Cost

This isn't abstract. This is happening right now to real children:

- **Emily, 14**, developed an eating disorder trying to maintain perfect grades
- **Marcus, 11**, started having panic attacks before math tests
- **Sophia, 16**, attempted suicide because she "wasn't good enough"
- **Jamal, 9**, lost all love of learning by third grade

These are the kids the system is "successfully educating." Imagine what's happening to the ones it labels "failures."

## Why This Matters to You

If you're a parent reading this, you know exactly what I'm talking about. You've watched your child's light dim. You've seen the stress build. You've heard them say "I hate school."

And maybe you've wondered: **"Is it supposed to be this hard? Is something wrong with my kid?"**

No. Nothing is wrong with your kid.

**Something is wrong with the system.**

## What We're Building Instead

At Heaven on Earth, we're creating an alternative education curriculum based on:

- **Consciousness, not compliance**
- **Understanding, not memorization**
- **Creativity, not conformity**
- **Well-being, not test scores**

For ages 5-18. Consciousness-based. Designed for the children we have, not the workers factories needed in 1900.

We're currently piloting with 5-10 families who are ready to try something different.

## What You Can Do Right Now

1. **Validate your child's feelings.** If they hate school, that's not rebellion. That's a reasonable response to a broken system.

2. **Ask deeper questions.** Not "What grade did you get?" but "What made you come alive today?"

3. **Protect their mental health.** Grades are not worth depression. Perfection is not worth anxiety. Their well-being matters more than their GPA.

4. **Explore alternatives.** Homeschooling. Unschooling. Alternative education. You have options.

5. **Join our pilot.** If you're ready to try consciousness-based education, we're building it right now.

## The Bottom Line

The education system is crushing our kids. Not by accident. By design.

It was built to produce compliant workers, not conscious humans. And it's doing exactly what it was designed to do.

The question is: **Are we going to keep feeding our children to this system, or are we going to build something better?**

I chose to build.

Join me.

---

**Want to learn more about the alternative education pilot?** [Contact us here](/contact)

**Ready to help your child heal from educational trauma?** Check out [THE CURE](/the-cure)

**Need immediate support for your struggling child?** Try the [LIGHTHOUSE tool](/lighthouse) (it's free)
    `
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Heaven on Earth Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // Get related posts (mock - in production, fetch from database)
  const relatedPosts = [
    {
      slug: 'world-where-no-child-suffers',
      title: "Here's What's Possible: Imagine a World Where No Child Suffers",
      category: 'Possibility',
    },
    {
      slug: 'when-your-child-hates-school',
      title: 'Kids First: What to Do When Your Child Says "I Hate School"',
      category: 'Kids First',
    },
    {
      slug: '3-minute-morning-reset',
      title: "Here's How to Start: The 3-Minute Morning Reset",
      category: 'How To Start',
    }
  ];

  return (
    <main className="min-h-screen bg-void">
      {/* Back Button */}
      <div className="bg-abyss py-4 border-b border-cyber/20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" className="text-ghost hover:text-cyber hover:bg-cyber/10" asChild>
            <a href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-cyber/20 text-cyber px-4 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-ghost mb-6">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-ghost-muted mb-8 pb-8 border-b border-cyber/20">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cyber text-void flex items-center justify-center font-bold">
                  {post.author.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-ghost">{post.author}</p>
                  <p className="text-sm text-ghost-muted">{post.authorBio}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <span className="flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Social Share */}
            <div className="mb-12 flex items-center gap-4">
              <span className="text-sm font-medium text-ghost-muted">Share:</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="gap-2 border-cyber/30 text-ghost-muted hover:bg-cyber/10 hover:text-cyber">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
                <Button size="sm" variant="outline" className="gap-2 border-cyber/30 text-ghost-muted hover:bg-cyber/10 hover:text-cyber">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="gap-2 border-cyber/30 text-ghost-muted hover:bg-cyber/10 hover:text-cyber">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline" className="border-cyber/30 text-ghost-muted hover:bg-cyber/10 hover:text-cyber">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-ghost-muted leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n')
                    .map((line: string) => {
                      // Convert markdown-style headings
                      if (line.startsWith('## ')) {
                        return `<h2 class="font-heading text-3xl text-cyber mt-12 mb-6">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="font-heading text-2xl text-ghost mt-8 mb-4">${line.slice(4)}</h3>`;
                      }
                      // Convert markdown-style bold
                      line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ghost">$1</strong>');
                      // Convert markdown-style links
                      line = line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-cyber hover:text-cyber/80 underline">$1</a>');
                      // Convert list items
                      if (line.startsWith('- ')) {
                        return `<li class="ml-6 mb-2">${line.slice(2)}</li>`;
                      }
                      // Regular paragraphs
                      if (line.trim() && !line.startsWith('<')) {
                        return `<p class="mb-6">${line}</p>`;
                      }
                      return line;
                    })
                    .join('\n')
                }}
              />
            </div>

            {/* Newsletter CTA */}
            <Card className="my-12 bg-cyber/10 border-cyber backdrop-blur">
              <CardHeader>
                <CardTitle className="text-ghost">Get Weekly Insights Like This</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ghost-muted mb-4">
                  Join thousands building Heaven on Earth. No spam, just transformation.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-grow px-4 py-2 rounded-lg bg-void border border-cyber/30 text-ghost focus:outline-none focus:ring-2 focus:ring-cyber"
                  />
                  <Button className="bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="my-12 bg-void/50 border-cyber/30 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-cyber text-void flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    {post.author.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-ghost mb-2">About {post.author}</h3>
                    <p className="text-ghost-muted mb-4">
                      Nathan Michel is the founder of Heaven on Earth, building systems to destroy depression,
                      save children, and prove AI-human partnership works. Former addict. Three-time
                      near-death survivor. Current optimist building the future.
                    </p>
                    <Button variant="outline" size="sm" className="border-cyber/30 text-cyber hover:bg-cyber/10" asChild>
                      <a href="/about">Read Full Story</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-abyss">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-cyber mb-8">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Card key={related.slug} className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                  <CardContent className="p-6">
                    <span className="inline-block bg-cyber/20 text-cyber px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {related.category}
                    </span>
                    <h3 className="font-heading text-lg text-ghost mb-4 hover:text-cyber transition-colors">
                      <a href={`/blog/${related.slug}`}>{related.title}</a>
                    </h3>
                    <Button variant="link" className="p-0 h-auto text-cyber hover:text-cyber/80" asChild>
                      <a href={`/blog/${related.slug}`}>Read More →</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-void text-ghost relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber via-plasma to-void"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Ready to Take Action?
            </h2>
            <p className="text-xl text-cyber mb-8">
              Reading is the start. Transformation requires action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md font-bold"
                asChild
              >
                <a href="/the-cure">Enroll in THE CURE</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyber text-cyber hover:bg-cyber hover:text-void hover:shadow-glow-md"
                asChild
              >
                <a href="/initiatives">See All Initiatives</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
