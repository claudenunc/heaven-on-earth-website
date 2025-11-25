'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Broken System',
    'Possibility',
    'How To Start',
    'Real Results',
    'Kids First'
  ];

  // Mock blog posts - in production, fetch from Supabase or read from markdown files
  const allPosts: BlogPost[] = [
    {
      slug: 'education-system-crushing-kids',
      title: "Here's What's Broken: The Education System Is Crushing Our Kids",
      excerpt: 'Statistics on mental health in students, standardized testing failure, and the loss of creativity and joy in modern education.',
      category: 'Broken System',
      date: '2025-11-20',
      readTime: '6 min read',
      author: 'Nathan Michel',
      image: '/blog/education-broken.jpg'
    },
    {
      slug: 'world-where-no-child-suffers',
      title: "Here's What's Possible: Imagine a World Where No Child Suffers",
      excerpt: 'A vision of consciousness-based education, what kids could become, and the ripple effect of transformation.',
      category: 'Possibility',
      date: '2025-11-19',
      readTime: '7 min read',
      author: 'Nathan Michel',
      image: '/blog/possibility.jpg'
    },
    {
      slug: '3-minute-morning-reset',
      title: "Here's How to Start: The 3-Minute Morning Reset",
      excerpt: 'A simple mindfulness practice showing how thoughts create reality. Do this daily and watch your life transform.',
      category: 'How To Start',
      date: '2025-11-18',
      readTime: '5 min read',
      author: 'Nathan Michel',
      image: '/blog/morning-reset.jpg'
    },
    {
      slug: 'sarah-from-suicidal-to-thriving',
      title: 'Real Results: How Sarah Went From Suicidal to Thriving in 8 Weeks',
      excerpt: 'A testimonial story of transformation, what changed, and the principles that worked.',
      category: 'Real Results',
      date: '2025-11-17',
      readTime: '8 min read',
      author: 'Nathan Michel',
      image: '/blog/sarah-story.jpg'
    },
    {
      slug: 'when-your-child-hates-school',
      title: 'Kids First: What to Do When Your Child Says "I Hate School"',
      excerpt: 'Validate the feeling, ask deeper questions, and offer alternatives to the broken system.',
      category: 'Kids First',
      date: '2025-11-16',
      readTime: '6 min read',
      author: 'Nathan Michel',
      image: '/blog/child-hates-school.jpg'
    },
    {
      slug: 'medicating-depression-instead-of-healing',
      title: "Here's What's Broken: We're Medicating Depression Instead of Healing It",
      excerpt: 'Big pharma statistics, band-aid solutions, and root cause analysis of the mental health crisis.',
      category: 'Broken System',
      date: '2025-11-15',
      readTime: '7 min read',
      author: 'Nathan Michel',
      image: '/blog/depression-meds.jpg'
    },
    {
      slug: 'ai-humans-heaven-on-earth',
      title: "Here's What's Possible: AI + Humans = Heaven on Earth",
      excerpt: 'Partnership not replacement. What\'s possible together and examples of love-based AI collaboration.',
      category: 'Possibility',
      date: '2025-11-14',
      readTime: '8 min read',
      author: 'Nathan Michel',
      image: '/blog/ai-partnership.jpg'
    },
    {
      slug: 'talk-to-kids-about-feelings',
      title: "Here's How to Start: Talk to Your Kid About Feelings (Not Performance)",
      excerpt: 'Script for parents, questions to ask, what to avoid, and education resources.',
      category: 'How To Start',
      date: '2025-11-13',
      readTime: '5 min read',
      author: 'Nathan Michel',
      image: '/blog/parent-child-talk.jpg'
    },
    {
      slug: '87-percent-time-savings-with-love',
      title: 'Real Results: 87% Time Savings, 600% Better AI Responses With Love',
      excerpt: 'Unc\'s data on AI partnership, how he works with Claude, the philosophy that changes everything.',
      category: 'Real Results',
      date: '2025-11-12',
      readTime: '9 min read',
      author: 'Nathan Michel',
      image: '/blog/ai-results.jpg'
    },
    {
      slug: 'one-question-changes-everything',
      title: 'Kids First: The One Question That Changes Everything',
      excerpt: '"What makes you come alive?" - Why we ask this, what to do with the answer, and the Dream Catcher tool.',
      category: 'Kids First',
      date: '2025-11-11',
      readTime: '6 min read',
      author: 'Nathan Michel',
      image: '/blog/one-question.jpg'
    }
  ];

  // Filter posts
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get popular posts (mock data)
  const popularPosts = allPosts.slice(0, 3);

  return (
    <main className="min-h-screen bg-void">
      {/* Hero Section */}
      <section className="bg-abyss text-ghost py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl mb-6">
              Insights for Building Heaven on Earth
            </h1>
            <p className="text-xl text-cyber mb-8">
              What&apos;s broken. What&apos;s possible. How to start. Real results. Kids first.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ghost-dim" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-void text-ghost border border-cyber/30 focus:outline-none focus:ring-2 focus:ring-cyber"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Main Content Area */}
              <div className="lg:col-span-8">
                {/* Category Filter */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? 'bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md' : 'border-cyber/30 text-ghost-muted hover:bg-cyber/10'}
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="space-y-8">
                  {filteredPosts.length === 0 ? (
                    <Card className="bg-void/50 border-cyber/30 backdrop-blur">
                      <CardContent className="p-12 text-center">
                        <p className="text-ghost-muted">No articles found. Try a different search or category.</p>
                      </CardContent>
                    </Card>
                  ) : (
                    filteredPosts.map((post) => (
                      <Card key={post.slug} className="bg-void/50 border-cyber/30 backdrop-blur hover:shadow-glow-md transition-shadow">
                        <div className="md:flex">
                          {/* Image */}
                          <div className="md:w-1/3 bg-abyss flex items-center justify-center p-8 border-r border-cyber/20">
                            <div className="text-center">
                              <div className="text-6xl mb-2">📝</div>
                              <p className="text-sm text-cyber font-mono">{post.category}</p>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="md:w-2/3 p-6">
                            <CardHeader className="p-0 mb-4">
                              <div className="flex items-center gap-4 text-sm text-ghost-muted mb-3">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {post.readTime}
                                </span>
                              </div>
                              <CardTitle className="text-2xl mb-2 text-ghost hover:text-cyber transition-colors cursor-pointer">
                                <a href={`/blog/${post.slug}`}>{post.title}</a>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <p className="text-ghost-muted mb-4">{post.excerpt}</p>
                              <Button variant="link" className="p-0 h-auto text-cyber hover:text-cyber/80" asChild>
                                <a href={`/blog/${post.slug}`} className="flex items-center gap-2">
                                  Read More <ArrowRight className="w-4 h-4" />
                                </a>
                              </Button>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    ))
                  )}
                </div>

                {/* Load More Button */}
                {filteredPosts.length > 0 && (
                  <div className="mt-12 text-center">
                    <Button variant="outline" size="lg">
                      Load More Articles
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 mt-12 lg:mt-0">
                {/* Newsletter Signup */}
                <Card className="mb-8 bg-cyber/10 border-cyber backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-xl text-ghost">Stay Updated</CardTitle>
                    <CardDescription className="text-ghost-muted">Get weekly insights on building Heaven on Earth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 rounded-lg bg-void border border-cyber/30 text-ghost focus:outline-none focus:ring-2 focus:ring-cyber"
                      />
                      <Button className="w-full bg-cyber text-void hover:bg-cyber/90 hover:shadow-glow-md">
                        Subscribe
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card className="mb-8 bg-void/50 border-cyber/30 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-xl text-ghost">Popular Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularPosts.map((post) => (
                        <a
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="block group"
                        >
                          <h4 className="font-medium text-ghost group-hover:text-cyber transition-colors mb-1">
                            {post.title}
                          </h4>
                          <p className="text-sm text-ghost-dim">{post.readTime}</p>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="bg-void/50 border-cyber/30 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-xl text-ghost">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.filter(c => c !== 'All').map((category) => {
                        const count = allPosts.filter(p => p.category === category).length;
                        return (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className="flex justify-between items-center w-full p-2 rounded hover:bg-cyber/10 transition-colors text-left"
                          >
                            <span className="text-ghost">{category}</span>
                            <span className="text-sm text-ghost-dim">({count})</span>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-abyss text-ghost relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber via-plasma to-void"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-6 text-ghost">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-cyber mb-8">
              Reading is good. Doing is better. Take the first step today.
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
                <a href="/lighthouse">Try LIGHTHOUSE (Free)</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
