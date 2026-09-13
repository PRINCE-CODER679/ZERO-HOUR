import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flag, Coffee, Sparkles, ArrowRight, Shield } from 'lucide-react';

const ECOSYSTEM = [
  {
    number: '01',
    title: 'WORKSHOPS',
    tagline: 'INTENSIVE METHODOLOGICAL DRILLS',
    icon: BookOpen,
    description:
      'High-frequency, precision masterclasses focusing on forensic research, crisis resolution drafting, British Parliamentary argumentation, and data-driven policy briefs. Led by senior members and seasoned practitioners.',
    deliverable: 'Methodology Dossiers & Live Execution Sprints',
    frequency: 'Bi-Weekly Crucible',
  },
  {
    number: '02',
    title: 'FLAGSHIP EXPERIENCES',
    tagline: 'NATIONAL-SCALE CRISIS SUMMITS',
    icon: Flag,
    description:
      'Premier inter-institutional convocations bringing together top-tier delegates and debaters nationwide. Features multi-committee interconnected crisis simulations with dynamic real-time geopolitical variables.',
    deliverable: 'National Security Council & Joint Crisis Sim',
    frequency: 'Bi-Annual Summit',
  },
  {
    number: '03',
    title: 'COFFEE WITH ZERO HOUR',
    tagline: 'CLOSED-DOOR PRACTITIONER DIALOGUES',
    icon: Coffee,
    description:
      'Intimate, off-the-record roundtables conducted under Chatham House Rule with career ambassadors, public policy directors, constitutional advocates, and civil servants. Frank insights into actual statecraft.',
    deliverable: 'Chatham House Roundtables (15 delegates max)',
    frequency: 'Monthly Intellectual Session',
  },
  {
    number: '04',
    title: 'ZERO HOUR FEST',
    tagline: 'THE ANNUAL CELEBRATION OF STATECRAFT',
    icon: Sparkles,
    description:
      'The signature multi-disciplinary festival where diplomacy, debate, policy hackathons, and governance crisis rooms collide. An expansive celebration of critical thinking, rhetoric, and youth leadership.',
    deliverable: 'All-Domain Convocations & Policy Exhibition',
    frequency: 'Annual Capstone',
  },
];

export default function BeyondEvents() {
  return (
    <section id="ecosystem" className="py-24 bg-[#0a0b0e] border-b border-white/[0.08] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 mb-8 font-mono text-[11px] text-[#8b8882] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#8b1528] font-bold">06</span>
            <span className="text-white/20">/</span>
            <span>THE CONTINUOUS ECOSYSTEM // BEYOND EVENTS</span>
          </div>
          <div className="text-[#c9c5bd]">
            AN ENDURING INSTITUTIONAL CADENCE
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f7f5f0] uppercase tracking-tight font-normal">
            More Than An Event Calendar. <br />
            <span className="italic text-[#c9c5bd]">A Year-Round Development Engine.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8b8882] mt-2 max-w-2xl">
            Zero Hour is not built around sporadic one-off festivals. It operates as an enduring institutional ecosystem with consistent intellectual cadence.
          </p>
        </div>

        {/* 4 Architectural Ecosystem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ECOSYSTEM.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="bg-[#111319] border border-white/[0.08] p-8 relative group hover:border-[#8b1528]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#8b1528]">
                        ECO // {item.number}
                      </span>
                      <span className="text-white/20">|</span>
                      <span className="font-mono text-[10px] text-[#8b8882] tracking-widest uppercase">
                        {item.tagline}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-amber-200/80 bg-amber-950/20 px-2 py-0.5 border border-amber-900/30">
                      {item.frequency}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-5 h-5 text-[#8b1528]" />
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f5f0] uppercase font-medium">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#c9c5bd] leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                  <span className="text-[#8b8882] text-[11px]">Primary Format:</span>
                  <span className="text-[#f7f5f0] font-medium">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
