import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TIERS = [
  {
    step: '01',
    title: 'FELLOW-IN-TRAINING',
    stage: 'INITIATION & EVIDENTIARY IMMERSION',
    focus: 'The Experiential Proving Ground',
    mandate: 'Enter simulation chambers as an active delegate, oral advocate, or policy drafter. Internalize codified rules of order, caucus psychology, and forensic argumentation under the tutelage of senior fellows.',
    keyMilestone: 'Authoring an operative resolution clause & defending floor interpellation under scrutiny.',
    responsibilityLevel: 'Individual Competence',
  },
  {
    step: '02',
    title: 'SECRETARIAT ATTACHÉ',
    stage: 'OPERATIONAL & RESEARCH CRAFT',
    focus: 'Chamber Secretariat & Intelligence Operations',
    mandate: 'Assume logistical, research, and rapporteur duties within high-intensity simulation chambers. Master background dossier drafting, crisis inject architecture, and procedural transcript governance.',
    keyMilestone: 'Flawless operational facilitation of an interconnected multi-committee crisis conclave.',
    responsibilityLevel: 'Operational Command',
  },
  {
    step: '03',
    title: 'INDUCTED CADRE MEMBER',
    stage: 'THE SOVEREIGN CADRE',
    focus: 'Core Deliberative Body',
    mandate: 'Formally inducted into the permanent collegiate fellowship. Author policy monographs, engage in advanced closed-door crisis rooms, and represent the institution across national and international circuits.',
    keyMilestone: 'Authoring an institutional policy brief & securing competitive distinction in national chambers.',
    responsibilityLevel: 'Fellowship Cadre Contributor',
  },
  {
    step: '04',
    title: 'PROGRAMMATIC COMMISSIONER',
    stage: 'EXECUTIVE MANDATE',
    focus: 'Project & Summit Command',
    mandate: 'Assume sovereign accountability over a specific institutional portfolio—such as directing an emergency crisis cabinet, convening a Chatham House colloquium, or orchestrating a masterclass series.',
    keyMilestone: 'End-to-end design, academic curatorship, and execution of a flagship summit track.',
    responsibilityLevel: 'Directorate Command',
  },
  {
    step: '05',
    title: 'COLLEGIATE DEAN / DOMAIN DIRECTOR',
    stage: 'CONSTITUTIONAL FACULTY COMMAND',
    focus: 'Academic Facets & Secretariat Directorates',
    mandate: 'Preside over one of the four foundational faculties (Diplomacy, Debate, Policy, Administration) or operational secretariats. Curate annual curricula, mentor cohorts, and preserve uncompromised academic rigor.',
    keyMilestone: 'Formulating the comprehensive annual intellectual syllabus and crisis architecture for a faculty.',
    responsibilityLevel: 'Faculty Dean Authority',
  },
  {
    step: '06',
    title: 'THE EXECUTIVE COUNCIL',
    stage: 'SOVEREIGN INSTITUTIONAL CUSTODIANSHIP',
    focus: 'President & Executive Council',
    mandate: 'Ultimate fiduciary, strategic, and constitutional custodianship. Formulate institutional doctrine, forge inter-university diplomatic pacts, and maintain the philosophical fidelity of Zero Hour.',
    keyMilestone: 'Institutional expansion, constitutional succession, and sovereign representation.',
    responsibilityLevel: 'Supreme Executive Ownership',
  },
];

export default function DevelopmentPipeline() {
  const [activeTier, setActiveTier] = useState(2);

  return (
    <section id="pipeline" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-[#e5dfd5] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5dfd5] pb-3 sm:pb-4 mb-8 font-mono text-[10px] sm:text-[11px] text-[#7a8595] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#7b1824] font-bold">07</span>
            <span className="text-[#d8cfc2]">/</span>
            <span>DEVELOPMENT PIPELINE // MERITOCRATIC PROGRESSION</span>
          </div>
          <div className="text-[#7b1824] font-semibold">
            SIX-TIER LADDER
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0e141e] uppercase tracking-tight font-normal">
            Meritocratic Progression. <br />
            <span className="italic text-[#7b1824]">From Participant to Executive Command.</span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#5c6776] mt-2 max-w-2xl">
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
                    className="border-t border-[#e5dfd5] bg-[#faf8f5] p-4 sm:p-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
                      <div className="md:col-span-8 space-y-2">
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#7b1824] font-bold">
                          Operational Mandate
                        </span>
                        <p className="text-xs sm:text-base text-[#3e4856] leading-relaxed font-sans">
                          {tier.mandate}
                        </p>
                      </div>

                      <div className="md:col-span-4 p-3.5 sm:p-4 bg-white border border-[#e5dfd5] space-y-1.5 shadow-sm rounded-sm">
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#c29236] block font-bold">
                          Advancement Milestone
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
