import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flag, Coffee, Sparkles, ArrowRight } from 'lucide-react';

const ECOSYSTEM = [
  {
    number: '01',
    title: 'SOFT SKILLS WORKSHOPS',
    tagline: 'FOUNDATIONAL COMMUNICATION & CONFIDENCE',
    icon: BookOpen,
    description:
      'Monthly, activity-based workshops focusing on public speaking, group discussions, storytelling, presentation skills, logical reasoning, and interview readiness.',
    deliverable: 'Interactive Workshops & Live Speaking Practice',
    frequency: 'Every Month',
  },
  {
    number: '02',
    title: 'INTERNAL FLAGSHIP EVENTS',
    tagline: 'REGULAR SIMULATIONS & COMPETITION',
    icon: Flag,
    description:
      'Two internal flagship events conducted every month, rotating between Model United Nations, Oxford Debates, Public Policy drafting, and Murder Mystery simulations.',
    deliverable: '2 Flagship Simulations per Month',
    frequency: 'Twice a Month',
  },
  {
    number: '03',
    title: 'COFFEE WITH ZERO HOUR',
    tagline: 'DIRECT INDUSTRY & GUEST EXPOSURE',
    icon: Coffee,
    description:
      'Informal fireside conversations connecting students directly with HR professionals, corporate leaders, entrepreneurs, civil servants, and alumni for career advice and networking.',
    deliverable: 'Fireside Chat & Open Student Q&A',
    frequency: 'Every 2 Months',
  },
  {
    number: '04',
    title: 'ZERO HOUR ANNUAL FEST',
    tagline: 'INTERCOLLEGIATE FESTIVAL OF LEADERSHIP',
    icon: Sparkles,
    description:
      'The big annual intercollegiate festival bringing all 4 flagship verticals together on a competitive stage with participants and judges from across different colleges.',
    deliverable: 'Intercollegiate Summit & Awards',
    frequency: 'Annual Flagship Fest',
  },
];

export default function BeyondEvents() {
  return (
    <section id="ecosystem" className="py-24 bg-[#faf8f5] border-b border-[#e5dfd5] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5dfd5] pb-4 mb-8 font-mono text-[11px] text-[#7a8595] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#7b1824] font-bold">06</span>
            <span className="text-[#d8cfc2]">/</span>
            <span>YEAR-ROUND PROGRAMMES // BEYOND ISOLATED EVENTS</span>
          </div>
          <div className="text-[#7b1824] font-semibold">
            CONTINUOUS ANNUAL RHYTHM
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0e141e] uppercase tracking-tight font-normal">
            More Than An Event Calendar. <br />
            <span className="italic text-[#7b1824]">A Year-Round Growth Ecosystem.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5c6776] mt-2 max-w-2xl">
            Zero Hour is not just a club that shows up once a semester. We maintain an active, year-round schedule of workshops, simulations, and guest sessions.
          </p>
        </div>

        {/* 4 Architectural Ecosystem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ECOSYSTEM.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white border border-[#e5dfd5] p-8 relative group hover:border-[#7b1824] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl rounded-sm ring-1 ring-[#c29236]/10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#e5dfd5] pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#7b1824]">
                        LAYER // {item.number}
                      </span>
                      <span className="text-[#d8cfc2]">|</span>
                      <span className="font-mono text-[10px] text-[#7a8595] tracking-widest uppercase truncate max-w-[170px] sm:max-w-none">
                        {item.tagline}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#997126] bg-[#fcf8f0] px-2.5 py-0.5 border border-[#c29236]/35 font-semibold rounded-sm shrink-0">
                      {item.frequency}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-5 h-5 text-[#7b1824]" />
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0e141e] uppercase font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#3e4856] leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e5dfd5] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#7a8595] text-[11px] font-medium">Core Format:</span>
                  <span className="text-[#7b1824] font-semibold">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
