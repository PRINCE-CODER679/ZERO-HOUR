import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flag, Coffee, Sparkles, ArrowRight, Shield } from 'lucide-react';

const ECOSYSTEM = [
  {
    number: '01',
    title: 'THE FORENSIC MASTERCLASSES',
    tagline: 'METHODOLOGICAL SPRINTS & ANALYTICAL RIGOR',
    icon: BookOpen,
    description:
      'High-frequency, precision laboratories dedicated to deconstructing treaty syntax, British Parliamentary adjudications, statutory drafting, and empirical policy evaluation. Led by seasoned adjudicators and senior fellows.',
    deliverable: 'Methodology Whitepapers & Live Adversarial Sprints',
    frequency: 'Fortnightly Laboratory',
  },
  {
    number: '02',
    title: 'CONVOCATIONS OF STATECRAFT',
    tagline: 'FLAGSHIP NATIONAL CRISIS CONCLAVES',
    icon: Flag,
    description:
      'Premier inter-collegiate symposia convening top-tier delegates and parliamentary orators nationwide. Features interconnected multi-cabinet joint crisis environments with dynamic, real-time geopolitical and macroeconomic perturbations.',
    deliverable: 'Joint Crisis Cabinets & National Security Assemblies',
    frequency: 'Biannual Plenary',
  },
  {
    number: '03',
    title: 'CHATHAM HOUSE COLLOQUIUMS',
    tagline: 'OFF-THE-RECORD PRACTITIONER ENCLAVES',
    icon: Coffee,
    description:
      'Intimate, strictly confidential roundtables convened under the Chatham House Rule with career ambassadors, constitutional jurists, senior civil servants, and think-tank directors. Unvarnished exposure to actual statecraft.',
    deliverable: 'Confidential Roundtables (Strict Limit: 15 Fellows)',
    frequency: 'Monthly Enclave',
  },
  {
    number: '04',
    title: 'THE ANNUAL CAPSTONE SYMPOSIUM',
    tagline: 'THE PAN-COLLEGIATE FESTIVAL OF GOVERNANCE',
    icon: Sparkles,
    description:
      'The signature multidisciplinary congregation where diplomatic councils, parliamentary chambers, policy hackathons, and administrative crisis rooms converge in an exhaustive celebration of public leadership.',
    deliverable: 'Plenary Chambers, Policy Exhibitions & Laureates',
    frequency: 'Annual Capstone Conclave',
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
