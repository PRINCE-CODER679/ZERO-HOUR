import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const STRUCTURE = [
  {
    tier: '01',
    role: 'PRESIDENT',
    category: 'EXECUTIVE OFFICE',
    accountability: 'Institutional Vision, External Diplomacy & Sovereign Direction',
    duties: [
      'Sets long-term strategic charter and annual institutional objectives.',
      'Sole authorized external liaison with universities, think tanks, and dignitary partners.',
      'Presides over the Executive Council and upholds constitutional fidelity.',
    ],
  },
  {
    tier: '02',
    role: 'VICE PRESIDENT',
    category: 'EXECUTIVE OFFICE',
    accountability: 'Operational Integrity & Inter-Wing Coordination',
    duties: [
      'Directs internal governance and cross-wing operational synchronization.',
      'Ensures compliance with institutional quality bars across all simulation rooms.',
      'Manages leadership succession and member evaluation audits.',
    ],
  },
  {
    tier: '03',
    role: 'COORDINATORS',
    category: 'STRATEGIC DIRECTORS',
    accountability: 'Domain Strategy & Academic Syllabi',
    duties: [
      'Coordinates the four academic domains (Diplomacy, Debate, Policy, Administration).',
      'Approves crisis committee scenarios, parliamentary motions, and whitepaper topics.',
      'Monitors delegate progression across the meritocratic pipeline.',
    ],
  },
  {
    tier: '04',
    role: 'FUNCTIONAL HEADS',
    category: 'WING COMMAND',
    accountability: 'Execution of Specialized Functional Wings',
    duties: [
      'Directs dedicated divisions: Research Secretariat, Logistics, Media, and Crisis Design.',
      'Ensures flawless delivery of simulation materials, background guides, and event production.',
      'Mentors junior associates and working group leads.',
    ],
  },
  {
    tier: '05',
    role: 'TEAMS & WORKING GROUPS',
    category: 'TASK FORCES',
    accountability: 'Tactical Delivery of Specific Projects & Summits',
    duties: [
      'Assembled for specific flagship summits, Coffee with Zero Hour sessions, and publications.',
      'Executes discrete operational briefs under Functional Head supervision.',
      'Acts as the direct proving ground for functional leadership selection.',
    ],
  },
  {
    tier: '06',
    role: 'MEMBERS',
    category: 'GENERAL CADRE',
    accountability: 'Active Intellectual Engagement & Floor Representation',
    duties: [
      'The foundational heartbeat of Zero Hour—debating, negotiating, and authoring policy.',
      'Eligible to volunteer for working groups and represent Zero Hour in national circuits.',
      'Participates in bi-weekly masterclasses and closed-door practitioner roundtables.',
    ],
  },
];

export default function LeadershipStructure() {
  const [expandedTier, setExpandedTier] = useState(null);

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4 mb-8 font-mono text-[10px] sm:text-[11px] text-[#64748b] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#751a22] font-bold">09</span>
            <span className="text-slate-300">/</span>
            <span>ORGANISATIONAL GOVERNANCE & ACCOUNTABILITY</span>
          </div>
          <div className="text-[#751a22] font-semibold">
            STRUCTURAL TREE
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0f172a] uppercase tracking-tight font-normal">
            Structure of Responsibility. <br />
            <span className="italic text-[#751a22]">Accountability Over Bureaucracy.</span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#475569] mt-2 max-w-2xl">
            Our organisational model is designed around clear lines of ownership. Every role exists to serve the experiential development of the student body.
          </p>
        </div>

        {/* Vertical Hierarchy Tree */}
        <div className="max-w-4xl mx-auto space-y-2.5 sm:space-y-3 relative">
          
          {/* Vertical Connecting Hairline Rule */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#751a22] via-slate-300 to-transparent z-0" />

          {STRUCTURE.map((item, idx) => {
            const isExpanded = expandedTier === idx;
            return (
              <div
                key={item.role}
                className={`relative z-10 border transition-all duration-200 rounded-sm ${
                  isExpanded
                    ? 'bg-white border-[#751a22] shadow-lg ring-1 ring-[#751a22]/25'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div
                  onClick={() => setExpandedTier(isExpanded ? null : idx)}
                  className="p-4 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
                >
                  <div className="flex items-center gap-3 sm:gap-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-50 border border-slate-200 flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold text-[#751a22] shrink-0 shadow-sm rounded-sm">
                      {item.tier}
                    </div>

                    <div>
                      <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#64748b] font-semibold">
                        {item.category}
                      </div>
                      <h3 className="font-serif text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#0f172a]">
                        {item.role}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                    <div className="font-mono text-[11px] sm:text-xs text-[#334155] text-left sm:text-right max-w-xs truncate font-medium">
                      <span className="text-[#64748b] text-[9px] sm:text-[10px] block sm:inline mr-1.5 font-normal">ACCOUNTABILITY:</span>
                      <span className="truncate">{item.accountability}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[#64748b] shrink-0 transition-transform ${isExpanded ? 'rotate-180 text-[#751a22]' : ''}`} />
                  </div>
                </div>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t border-slate-200 bg-slate-50/90 p-4 sm:p-8"
                  >
                    <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#751a22] font-bold mb-2.5 sm:mb-3">
                      Constitutional Responsibilities & Duties
                    </div>
                    <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#334155]">
                      {item.duties.map((duty, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 sm:gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#751a22] shrink-0 mt-0.5" />
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
