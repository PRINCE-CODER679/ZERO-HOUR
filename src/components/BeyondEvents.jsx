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
    <section id="ecosystem" className="py-24 bg-white border-b border-slate-200 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#751a22] font-bold">06</span>
            <span className="text-slate-300">/</span>
            <span>THE CONTINUOUS ECOSYSTEM // BEYOND EVENTS</span>
          </div>
          <div className="text-[#751a22] font-semibold">
            AN ENDURING INSTITUTIONAL CADENCE
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0f172a] uppercase tracking-tight font-normal">
            More Than An Event Calendar. <br />
            <span className="italic text-[#751a22]">A Year-Round Development Engine.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#475569] mt-2 max-w-2xl">
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
                className="bg-slate-50/70 border border-slate-200 p-8 relative group hover:border-[#751a22] hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#751a22]">
                        ECO // {item.number}
                      </span>
                      <span className="text-slate-300">|</span>
                      <span className="font-mono text-[10px] text-[#64748b] tracking-widest uppercase">
                        {item.tagline}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-amber-900 bg-amber-50 px-2.5 py-0.5 border border-amber-200 font-semibold rounded-sm">
                      {item.frequency}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="w-5 h-5 text-[#751a22]" />
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0f172a] uppercase font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#64748b] text-[11px] font-medium">Primary Format:</span>
                  <span className="text-[#751a22] font-semibold">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
