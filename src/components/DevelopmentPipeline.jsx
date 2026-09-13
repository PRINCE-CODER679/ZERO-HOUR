import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TIERS = [
  {
    step: '01',
    title: 'PARTICIPANT',
    stage: 'ENTRY & EXPOSURE',
    focus: 'Experiencing the Crucible',
    mandate: 'Enter simulation chambers as an active delegate, debater, or policy analyst. Learn parliamentary rules of order, caucus dynamics, and forensic argument structure under live guidance.',
    keyMilestone: 'First completed crisis resolution & parliamentary floor rebuttal.',
    responsibilityLevel: 'Individual Competency',
  },
  {
    step: '02',
    title: 'VOLUNTEER',
    stage: 'OPERATIONAL IMMERSION',
    focus: 'Secretariat & Research Support',
    mandate: 'Support the execution of flagship conferences, workshop coordination, and dossier dissemination. Gain first-hand insight into the operational architecture of large-scale institutions.',
    keyMilestone: 'Successful floor management of a multi-committee simulation.',
    responsibilityLevel: 'Operational Support',
  },
  {
    step: '03',
    title: 'MEMBER',
    stage: 'CORE ANALYTICAL BODY',
    focus: 'Institutional Cadre',
    mandate: 'Formally inducted into the Zero Hour active roster. Participate in closed-door policy working groups, advanced crisis rooms, and represent the institution in national-level inter-university competitions.',
    keyMilestone: 'Authoring a policy briefing paper & representing Zero Hour nationally.',
    responsibilityLevel: 'Core Cadre Contributor',
  },
  {
    step: '04',
    title: 'PROJECT / EVENT RESPONSIBILITY',
    stage: 'DIRECT OWNERSHIP',
    focus: 'Execution Oversight',
    mandate: 'Assume full operational mandate for a specific initiative—such as directing a specialized crisis cabinet, leading a workshop track, or curating a Coffee with Zero Hour session.',
    keyMilestone: 'End-to-end design and execution of an institutional project.',
    responsibilityLevel: 'Project Command',
  },
  {
    step: '05',
    title: 'FUNCTIONAL LEADERSHIP',
    stage: 'DOMAIN COMMAND',
    focus: 'Wing Directors & Secretariat Heads',
    mandate: 'Appointed as Domain Directors (Diplomacy, Debate, Policy, Administration) or Operational Wings. Mentor junior cohorts, set academic syllabi for workshops, and maintain domain excellence.',
    keyMilestone: 'Curating the full annual curriculum for a domain.',
    responsibilityLevel: 'Functional Command',
  },
  {
    step: '06',
    title: 'EXECUTIVE LEADERSHIP',
    stage: 'INSTITUTIONAL STEWARDSHIP',
    focus: 'President & Executive Council',
    mandate: 'Ultimate institutional accountability. Direct strategic long-term vision, institutional partnerships, constitutional governance, and sovereign representation of Zero Hour.',
    keyMilestone: 'Institutional expansion, constitution stewardship, and external liaison.',
    responsibilityLevel: 'Executive Ownership',
  },
];

export default function DevelopmentPipeline() {
  const [activeTier, setActiveTier] = useState(2);

  return (
    <section id="pipeline" className="py-16 sm:py-24 bg-[#0d0e13] border-b border-white/[0.08] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3 sm:pb-4 mb-8 font-mono text-[10px] sm:text-[11px] text-[#8b8882] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#8b1528] font-bold">07</span>
            <span className="text-white/20">/</span>
            <span>DEVELOPMENT PIPELINE // MERITOCRATIC PROGRESSION</span>
          </div>
          <div className="text-[#c9c5bd]">
            SIX-TIER LADDER
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f7f5f0] uppercase tracking-tight font-normal">
            Meritocratic Progression. <br />
            <span className="italic text-[#c9c5bd]">From Participant to Executive Command.</span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#8b8882] mt-2 max-w-2xl">
            Zero Hour does not appoint figureheads. Every leader rises through demonstrated competence, rigorous execution, and proven responsibility.
          </p>
        </div>

        {/* Progressive Visual Staircase */}
        <div className="space-y-2.5 sm:space-y-3">
          {TIERS.map((tier, idx) => {
            const isSelected = activeTier === idx;
            return (
              <div
                key={tier.step}
                onClick={() => setActiveTier(idx)}
                className={`border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#151822] border-[#8b1528] shadow-xl'
                    : 'bg-[#0f1015]/80 border-white/[0.06] hover:bg-[#12141c] hover:border-white/20'
                }`}
              >
                <div className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                  {/* Left: Step indicator & Title */}
                  <div className="flex items-start sm:items-center gap-3 sm:gap-6">
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 border ${
                      isSelected ? 'bg-[#8b1528] text-white border-red-500/50' : 'bg-white/[0.03] text-[#8b8882] border-white/10'
                    }`}>
                      {tier.step}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] sm:text-[10px] text-[#8b1528] uppercase tracking-widest font-semibold">
                          {tier.stage}
                        </span>
                        <span className="text-white/20 hidden xs:inline">|</span>
                        <span className="font-mono text-[9px] sm:text-[10px] text-[#8b8882] uppercase tracking-wider hidden sm:inline">
                          {tier.focus}
                        </span>
                      </div>
                      <h3 className={`font-serif text-lg sm:text-2xl uppercase tracking-tight font-semibold mt-0.5 ${
                        isSelected ? 'text-[#f7f5f0]' : 'text-[#c9c5bd]'
                      }`}>
                        {tier.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Responsibility badge & toggle */}
                  <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 border-t md:border-t-0 pt-2.5 md:pt-0 border-white/[0.06]">
                    <span className="font-mono text-[10px] sm:text-xs text-[#8b8882] bg-white/[0.03] px-2.5 py-1 border border-white/[0.06]">
                      {tier.responsibilityLevel}
                    </span>
                    <span className={`font-mono text-[11px] sm:text-xs ${isSelected ? 'text-[#8b1528] font-bold' : 'text-white/30'}`}>
                      {isSelected ? 'ACTIVE' : 'INSPECT'}
                    </span>
                  </div>
                </div>

                {/* Expanded Detail Tray */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-white/[0.08] bg-[#0a0c10] p-4 sm:p-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
                      <div className="md:col-span-8 space-y-2">
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8b1528] font-bold">
                          Operational Mandate
                        </span>
                        <p className="text-xs sm:text-base text-[#c9c5bd] leading-relaxed font-sans">
                          {tier.mandate}
                        </p>
                      </div>

                      <div className="md:col-span-4 p-3.5 sm:p-4 bg-[#12141c] border border-white/[0.06] space-y-1.5">
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8b8882] block">
                          Advancement Milestone
                        </span>
                        <p className="font-mono text-[11px] sm:text-xs text-amber-200/90 font-medium">
                          {tier.keyMilestone}
                        </p>
                      </div>
                    </div>
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
