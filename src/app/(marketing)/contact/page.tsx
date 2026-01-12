'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageSquare, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: 'general', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-soft-sky via-white to-soft-gold">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Questions about the mission? Need support? Want to partner? We're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-navy/10 shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy text-2xl">Send Us a Message</CardTitle>
                <CardDescription>We'll respond within 24-48 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="press">Press / Media</option>
                      <option value="education">Education Pilot</option>
                      <option value="course">THE CURE Course</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800 font-medium">
                        Message sent successfully! We'll respond within 24-48 hours.
                      </p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800 font-medium">
                        {errorMessage || 'Failed to send message. Please try again.'}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-6 text-lg"
                  >
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Alternative Contact Methods */}
          <div className="space-y-6">
            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">Email Us Directly</CardTitle>
                    <CardDescription>For any inquiries</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href="/signup"
                  className="text-lg text-gold hover:text-gold/80 font-medium"
                >
                  hello@heavenonearthmovement.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">Join Our Community</CardTitle>
                    <CardDescription>Real-time support and connection</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Get faster responses and connect with others in our Discord community.
                </p>
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white" asChild>
                  <a href="https://discord.gg/heavenonearthmovement" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-navy/10">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <CardTitle className="text-navy">Response Time</CardTitle>
                    <CardDescription>What to expect</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span><strong>General inquiries:</strong> 24-48 hours</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span><strong>Technical support:</strong> 24-48 hours</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span><strong>Partnership proposals:</strong> 3-5 days</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span><strong>Press inquiries:</strong> 24 hours</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">Mental Health Crisis?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-800">
                <p className="font-medium">
                  If you're in immediate crisis, please contact:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><strong>Call 988</strong> - Suicide & Crisis Lifeline (US)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><strong>Text "HELLO"</strong> to 741741 - Crisis Text Line</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><strong>Go to your nearest emergency room</strong></span>
                  </li>
                </ul>
                <p className="text-sm text-gray-700 pt-2">
                  Our tools are for prevention and education, not crisis intervention.
                </p>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="border-navy/10">
              <CardHeader>
                <CardTitle className="text-navy">Follow the Movement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://twitter.com/heavenonearthHQ" target="_blank" rel="noopener noreferrer">
                      Twitter/X
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://instagram.com/heavenonearthmovement" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://youtube.com/@heavenonearthmovement" target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://discord.gg/heavenonearthmovement" target="_blank" rel="noopener noreferrer">
                      Discord
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="px-6 py-16 bg-soft-sky">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
            Looking for Quick Answers?
          </h2>
          <p className="text-xl text-gray-700">
            Check our FAQ page - you might find what you need immediately.
          </p>
          <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white" asChild>
            <a href="/faq">View FAQ</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
