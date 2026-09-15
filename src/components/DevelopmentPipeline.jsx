import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TIERS = [
  {
    step: '01',
    title: 'FIRST WORKSHOP & EXPOSURE',
    stage: 'STEP 1 — DISCOVERY',
    focus: 'Attend Your First Session',
    mandate: 'Attend a soft-skills workshop or an open club event. See how simulations work, meet active members, and discover where your interests lie.',
    keyMilestone: 'Participating in your first group activity or workshop exercise.',
    responsibilityLevel: 'New Participant',
  },
  {
    step: '02',
    title: 'ACTIVE PARTICIPATION',
    stage: 'STEP 2 — PRACTICE',
    focus: 'Regular Skill Practice',
    mandate: 'Take part in internal MUNs, debates, policy simulations, and mystery problem-solving. Practice speaking, asking questions, and collaborating in teams.',
    keyMilestone: 'Delivering your first speech or drafting a policy clause in a simulation.',
    responsibilityLevel: 'Regular Participant',
  },
  {
    step: '03',
    title: 'CLUB MEMBERSHIP',
    stage: 'STEP 3 — CORE TEAM',
    focus: 'Joining the Active Ranks',
    mandate: 'Formally join the club team through the recruitment process. Help with event research, background dossiers, and internal coordination.',
    keyMilestone: 'Selected as an active Zero Hour member and assigned to a functional team.',
    responsibilityLevel: 'Core Member',
  },
  {
    step: '04',
    title: 'PROJECT & EVENT MANAGEMENT',
    stage: 'STEP 4 — RESPONSIBILITY',
    focus: 'Running Flagship Activities',
    mandate: 'Take ownership of specific events—coordinating logistics, managing participant registrations, or designing simulation agendas.',
    keyMilestone: 'Successfully planning and running an internal flagship event.',
    responsibilityLevel: 'Event Coordinator',
  },
  {
    step: '05',
    title: 'WING LEADERSHIP',
    stage: 'STEP 5 — TEAM LEADERSHIP',
    focus: 'Leading a Functional Area',
    mandate: 'Lead one of the functional wings (Research, Events, Media, Documentation, or Outreach). Guide your team, maintain quality, and ensure smooth execution.',
    keyMilestone: 'Managing a functional team and delivering high-quality event outcomes.',
    responsibilityLevel: 'Wing Head',
  },
  {
    step: '06',
    title: 'EXECUTIVE ADVISORY & SUCCESSION',
    stage: 'STEP 6 — CONTINUITY',
    focus: 'Mentorship & Long-Term Vision',
    mandate: 'Help set the overarching vision for the club, coordinate between all wings, support major college partnerships, and train the next generation of student leaders.',
    keyMilestone: 'Guiding club strategy and preparing handover documentation for new leaders.',
    responsibilityLevel: 'Senior Leadership & Advisory',
  },
];

export default function DevelopmentPipeline() {
  const [activeTier, setActiveTier] = useState(1);

  return (
    <section id="pipeline" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-[#e5dfd5] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5dfd5] pb-3 sm:pb-4 mb-8 font-mono text-[10px] sm:text-[11px] text-[#7a8595] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#7b1824] font-bold">07</span>
            <span className="text-[#d8cfc2]">/</span>
            <span>DEVELOPMENT PIPELINE // HOW MEMBERS GROW</span>
          </div>
          <div className="text-[#7b1824] font-semibold">
            6-STAGE PROGRESSION
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0e141e] uppercase tracking-tight font-normal">
            How You Grow in <span className="italic text-[#7b1824]">Zero Hour</span>.
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#5c6776] mt-2 max-w-2xl">
            From your very first workshop to managing major college events and mentoring newer students—here is how members develop over time.
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
                className={`border transition-all duration-200 cursor-pointer rounded-sm ${
                  isSelected
                    ? 'bg-white border-[#7b1824] shadow-md ring-1 ring-[#c29236]/30'
                    : 'bg-white border-[#e5dfd5] hover:bg-[#faf8f5] hover:border-[#c29236]/50'
                }`}
              >
                <div className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                  {/* Left */}
                  <div className="flex items-start sm:items-center gap-3 sm:gap-6">
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 border rounded-sm ${
                      isSelected ? 'bg-[#7b1824] text-white border-[#540e17]' : 'bg-[#f4f0e8] text-[#7b1824] border-[#e5dfd5]'
                    }`}>
                      {tier.step}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] sm:text-[10px] text-[#7b1824] uppercase tracking-widest font-bold">
                          {tier.stage}
                        </span>
                        <span className="text-[#d8cfc2] hidden xs:inline">|</span>
                        <span className="font-mono text-[9px] sm:text-[10px] text-[#7a8595] uppercase tracking-wider hidden sm:inline">
                          {tier.focus}
                        </span>
                      </div>
                      <h3 className={`font-serif text-lg sm:text-2xl uppercase tracking-tight font-bold mt-0.5 ${
                        isSelected ? 'text-[#0e141e]' : 'text-[#3e4856]'
                      }`}>
                        {tier.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 border-t md:border-t-0 pt-2.5 md:pt-0 border-[#e5dfd5]/60">
                    <span className="font-mono text-[10px] sm:text-xs text-[#5c6776] bg-[#f4f0e8] px-2.5 py-1 border border-[#e5dfd5] font-medium rounded-sm">
                      {tier.responsibilityLevel}
                    </span>
                    <span className={`font-mono text-[11px] sm:text-xs ${isSelected ? 'text-[#7b1824] font-bold' : 'text-[#a3adb8]'}`}>
                      {isSelected ? 'SELECTED' : 'VIEW'}
                    </span>
                  </div>
                </div>

                {/* Expanded Detail Tray */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-[#e5dfd5] bg-[#faf8f5] p-4 sm:p-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
                      <div className="md:col-span-8 space-y-2">
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#7b1824] font-bold">
                          What You Do at this Stage
                        </span>
                        <p className="text-xs sm:text-base text-[#3e4856] leading-relaxed font-sans">
                          {tier.mandate}
                        </p>
                      </div>

                      <div className="md:col-span-4 p-3.5 sm:p-4 bg-white border border-[#e5dfd5] space-y-1.5 shadow-sm rounded-sm">
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#c29236] block font-bold">
                          Key Milestone
                        </span>
                        <p className="font-mono text-[11px] sm:text-xs text-[#7b1824] font-bold">
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
