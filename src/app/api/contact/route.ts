import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY!)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Save to database
    const { data: contactData, error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          subject,
          message,
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      )
    }

    // Send notification email to Unc
    const subjectLines: Record<string, string> = {
      general: 'General Inquiry',
      support: 'Technical Support Request',
      partnership: 'Partnership Opportunity',
      press: 'Press / Media Inquiry',
      education: 'Education Pilot Inquiry',
      course: 'THE CURE Course Question',
      other: 'Other Inquiry'
    }

    try {
      await resend.emails.send({
        from: 'Heaven on Earth <noreply@heavenonearthmovement.com>',
        to: 'hello@heavenonearthmovement.com',
        subject: `New Contact: ${subjectLines[subject] || subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subjectLines[subject] || subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
        `
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails - message is already saved
    }

    // Send confirmation email to sender
    try {
      await resend.emails.send({
        from: 'Heaven on Earth <noreply@heavenonearthmovement.com>',
        to: email,
        subject: 'We received your message - Heaven on Earth',
        html: `
          <h2>Thank you for reaching out, ${name}!</h2>

          <p>We've received your message and will respond within 24-48 hours.</p>

          <p><strong>Your message:</strong></p>
          <blockquote style="border-left: 3px solid #D4AF37; padding-left: 1rem; margin: 1rem 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>

          <p>In the meantime:</p>
          <ul>
            <li>Join our <a href="https://discord.gg/heavenonearthmovement">Discord community</a> for faster support</li>
            <li>Check out our <a href="https://heavenonearthmovement.com/faq">FAQ page</a></li>
            <li>Try <a href="https://heavenonearthmovement.com/lighthouse">LIGHTHOUSE</a> for free daily check-ins</li>
          </ul>

          <p>Thank you for being part of building Heaven on Earth.</p>

          <p style="margin-top: 2rem; color: #666; font-size: 14px;">
            If you need immediate crisis support, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
          </p>

          <hr style="margin: 2rem 0; border: none; border-top: 1px solid #ddd;">

          <p style="color: #666; font-size: 12px;">
            Heaven on Earth<br>
            <a href="https://heavenonearthmovement.com">heavenonearthmovement.com</a>
          </p>
        `
      })
    } catch (confirmEmailError) {
      console.error('Confirmation email error:', confirmEmailError)
      // Don't fail the request
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
