"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Clock,
  UserX,
  CheckCircle2,
  ArrowRight,
  Truck,
  Factory,
  HardHat,
  Thermometer,
  Utensils,
  Building,
  Tractor,
  Wrench,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Star,
  Menu,
  X
} from 'lucide-react';

// Design Constants
const COLORS = {
  bgDark: '#0a0a0f',
  bgPurple: '#1a1a2e',
  textWhite: '#ffffff',
  textGray: '#b8b8d1',
  neonPurple: '#9d4edd',
  cyan: '#00ffff',
  deepPurple: '#7209b7',
};

const CTA_LINK = "https://calendly.com/nathan-heavenonearth/30min"; // Update with actual link

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardHover = {
  hover: {
    y: -5,
    boxShadow: `0 10px 30px -10px ${COLORS.deepPurple}`,
    borderColor: COLORS.neonPurple,
    transition: { duration: 0.3 }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#9d4edd] selection:text-white overflow-x-hidden" style={{ backgroundColor: COLORS.bgDark, color: COLORS.textWhite }}>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0a0a0f]/90 backdrop-blur-md z-50 md:hidden border-t border-[#1a1a2e]">
        <a
          href={CTA_LINK}
          className="flex items-center justify-center w-full py-3 rounded-lg font-bold text-lg text-white shadow-[0_0_15px_rgba(157,78,221,0.5)] transition-all"
          style={{ background: `linear-gradient(135deg, ${COLORS.deepPurple}, ${COLORS.neonPurple})` }}
        >
          Book Free Consultation
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#7209b7] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            I've Done Your Job.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#00ffff]">
              Now Let Me Save You Time.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            20+ years in the trenches. Railroad, concrete, carpentry, manufacturing, construction management. I know what it's like to be short-handed and overwhelmed. Now I build AI systems that give you your life back.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href={CTA_LINK}
              className="group relative px-8 py-4 rounded-lg font-bold text-lg text-white overflow-hidden transition-all w-full sm:w-auto"
              style={{ background: `linear-gradient(135deg, ${COLORS.deepPurple}, ${COLORS.neonPurple})` }}
            >
              <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(0,255,255,0.6)]" />
              <span className="relative flex items-center justify-center gap-2">
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </span>
            </a>

            <button
              onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-lg font-bold text-lg text-white border border-[#1a1a2e] hover:border-[#9d4edd] transition-colors w-full sm:w-auto bg-[#1a1a2e]/50 backdrop-blur-sm"
            >
              See What's Possible ↓
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Credibility Bar */}
      <div className="border-y border-[#1a1a2e] bg-[#0a0a0f]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center font-medium text-[#b8b8d1] text-sm md:text-base tracking-wide uppercase">
            Former Railroad Worker • Construction GM • Heavy Equipment Operator
          </p>
          <p className="text-center font-bold text-[#00ffff] mt-2">
            Now Building AI That Actually Works for Working People
          </p>
        </div>
      </div>

      {/* The Problem */}
      <section id="problem" className="py-24 px-4 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              You're Not Short on Work.<br />
              <span className="text-[#9d4edd]">You're Short on Time.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard
              icon={<Phone className="w-10 h-10 text-[#00ffff]" />}
              title="The Phone Won't Stop"
              description="Missing calls = missing money. Every unanswered ring is a customer going to your competitor."
            />
            <ProblemCard
              icon={<Clock className="w-10 h-10 text-[#9d4edd]" />}
              title="The Day Isn't Long Enough"
              description="Questions, paperwork, scheduling. You spend more time managing than doing the actual work."
            />
            <ProblemCard
              icon={<UserX className="w-10 h-10 text-[#ff0055]" />}
              title="You Can't Find Good Help"
              description="Can't afford a full-time receptionist? Tired of reliability issues? You need a solution that shows up every day."
            />
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9d4edd] opacity-5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What If Someone Handled All of That...<br />
              <span className="text-[#00ffff]">24/7... And Never Called In Sick?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SolutionItem text="Answers Every Call (Even 2 AM)" />
            <SolutionItem text="Books Appointments (Calendar, reminders)" />
            <SolutionItem text="Qualifies Leads (Serious customers only)" />
            <SolutionItem text="Follows Up Automatically (Quotes, reminders)" />
            <SolutionItem text="Manages Schedules (Crew, subs, availability)" />
            <SolutionItem text="Handles The Boring Stuff (Updates, paperwork)" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 rounded-2xl bg-[#1a1a2e] border border-[#9d4edd]/30 max-w-2xl mx-auto"
          >
            <p className="text-2xl font-bold text-[#00ffff]">
              "And it costs less than hiring a part-time receptionist."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-[#0d0d14] border-y border-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Skella"
              role="Event Venue"
              quote="87% time savings, 600% venue response improvement. It completely changed how we handle inquiries."
            />
            <TestimonialCard
              name="Contractor"
              role="General Construction"
              quote="Went from 0% to 100% call answer rate. I don't miss leads anymore while I'm on the job site."
            />
            <TestimonialCard
              name="HVAC Owner"
              role="Residential Services"
              quote="Paid for itself in the first month just by catching calls I would have missed after hours."
            />
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-24 px-4 bg-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
               <div className="w-full aspect-[4/5] bg-[#1a1a2e] rounded-2xl border-2 border-[#9d4edd] relative overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#9d4edd]/20 to-[#00ffff]/20" />
                 <HardHat className="w-32 h-32 text-[#b8b8d1] opacity-50" />
                 <p className="absolute bottom-4 left-4 font-bold text-xl">Nathan "Unc"</p>
               </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Trust Me?</h2>
              <div className="space-y-4 text-[#b8b8d1] text-lg leading-relaxed">
                <p>
                  I'm not some tech guy from Silicon Valley. I spent 20+ years in blue-collar work. I've laid concrete, managed construction sites, and worked the railroad.
                </p>
                <p>
                  I lost custody, hit rock bottom, and asked God for a way forward. That path led me to technology. I spent 3 years obsessively learning how to build these systems.
                </p>
                <p className="text-white font-medium border-l-4 border-[#9d4edd] pl-4">
                  Now, I build AI that gives you your time back. Because I know exactly how valuable that time is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="We Talk"
              desc="30 min free consultation. We figure out exactly what's eating your time."
            />
            <StepCard
              number="2"
              title="I Build It"
              desc="Custom built for your business in 2-4 weeks. No generic templates."
            />
            <StepCard
              number="3"
              title="You Launch"
              desc="Full training and support. We turn it on, and you get your life back."
            />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 relative">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9d4edd] to-transparent" />
         <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Specific Solutions</h2>
           <p className="text-center text-[#b8b8d1] mb-16">Custom-tailored for your industry</p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <SolutionCard icon={<Truck />} industry="Trucking" name="Silent Dispatcher" />
             <SolutionCard icon={<Factory />} industry="Manufacturing" name="Shift Filler" />
             <SolutionCard icon={<HardHat />} industry="Contractors" name="Compliance Bulldog" />
             <SolutionCard icon={<Thermometer />} industry="HVAC" name="Night Watchman" />
             <SolutionCard icon={<Utensils />} industry="Restaurants" name="Reputation Manager" />
             <SolutionCard icon={<Building />} industry="Property Managers" name="Maintenance Triage" />
             <SolutionCard icon={<Tractor />} industry="Farms" name="Shop Log" />
             <SolutionCard icon={<Wrench />} industry="Farm Equipment" name="Parts Counter AI" />
             <SolutionCard icon={<Utensils />} industry="Meat Processors" name="Venison Tracker" />
             <div className="md:col-span-2 lg:col-span-3 flex justify-center">
               <div className="w-full md:w-1/2 lg:w-1/3">
                 <SolutionCard icon={<Stethoscope />} industry="Healthcare" name="Gentle Reminder" />
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-[#0d0d14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Common Questions</h2>
          <div className="space-y-4">
            <FAQItem
              q="How much does it cost?"
              a="Less than a part-time employee. We build a custom quote based on your needs during our free consultation."
            />
            <FAQItem
              q="Does this replace my employees?"
              a="No. It handles the repetitive tasks so your employees can focus on the high-value work they're actually paid to do."
            />
            <FAQItem
              q="Do I need to be tech-savvy?"
              a="Not at all. If you can use text messages, you can use this system. We handle all the technical setup."
            />
            <FAQItem
              q="How long does setup take?"
              a="Typically 2-4 weeks from our first call to launch."
            />
            <FAQItem
              q="Does it take breaks?"
              a="Never. It works 24/7/365. No sick days, no holidays, no attitude."
            />
            <FAQItem
              q="Do I need special equipment?"
              a="No. It works with your existing phone and computer systems."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Get Your Life Back?
          </h2>
          <p className="text-xl md:text-2xl text-[#00ffff] mb-12 font-medium">
            I'll be in Perryville, Missouri this Thursday & Friday (January 16-17).
          </p>
          <a
            href={CTA_LINK}
            className="inline-flex items-center justify-center gap-2 px-12 py-6 rounded-full font-bold text-xl text-white shadow-[0_0_30px_rgba(157,78,221,0.6)] hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] transition-all transform hover:-translate-y-1"
            style={{ background: `linear-gradient(135deg, ${COLORS.deepPurple}, ${COLORS.neonPurple})` }}
          >
            Book Free Consultation <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}

// Sub-components

function ProblemCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="p-8 rounded-2xl bg-[#1a1a2e] border border-[#2d2d42] relative group"
    >
      <div className="mb-6 p-4 rounded-xl bg-[#0a0a0f] inline-block border border-[#2d2d42] group-hover:border-[#9d4edd] transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-[#b8b8d1] leading-relaxed">{description}</p>
    </motion.div>
  );
}

function SolutionItem({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1a2e]/50 border border-[#2d2d42]"
    >
      <div className="flex-shrink-0">
        <CheckCircle2 className="w-6 h-6 text-[#00ffff]" />
      </div>
      <span className="font-medium text-lg">{text}</span>
    </motion.div>
  );
}

function TestimonialCard({ name, role, quote }: { name: string, role: string, quote: string }) {
  return (
    <div className="p-8 rounded-2xl bg-[#1a1a2e] border border-[#2d2d42] flex flex-col h-full">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#9d4edd] text-[#9d4edd]" />
        ))}
      </div>
      <p className="text-lg italic text-[#b8b8d1] mb-6 flex-grow">"{quote}"</p>
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-[#00ffff]">{role}</p>
      </div>
    </div>
  );
}

function StepCard({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="relative p-8 rounded-2xl bg-[#1a1a2e] border border-[#2d2d42] overflow-hidden group hover:border-[#9d4edd] transition-colors">
      <div className="absolute -right-4 -top-4 text-9xl font-bold text-[#0a0a0f] opacity-50 select-none group-hover:text-[#2d2d42] transition-colors">
        {number}
      </div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-[#b8b8d1] text-lg">{desc}</p>
      </div>
    </div>
  );
}

function SolutionCard({ icon, industry, name }: { icon: React.ReactNode, industry: string, name: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-[#1a1a2e] border border-[#2d2d42] hover:border-[#00ffff] transition-colors group cursor-default"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="text-[#9d4edd] group-hover:text-[#00ffff] transition-colors">
          {icon}
        </div>
        <h4 className="font-bold text-[#b8b8d1] uppercase tracking-wider text-sm">{industry}</h4>
      </div>
      <p className="text-xl font-bold text-white">{name}</p>
    </motion.div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2d2d42] rounded-xl bg-[#1a1a2e] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#2d2d42] transition-colors"
      >
        <span className="font-bold text-lg">{q}</span>
        {isOpen ? <ChevronUp className="text-[#9d4edd]" /> : <ChevronDown className="text-[#b8b8d1]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-[#b8b8d1] leading-relaxed border-t border-[#2d2d42]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
