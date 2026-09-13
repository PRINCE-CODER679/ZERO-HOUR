import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STAGES = [
  {
    step: '01',
    word: 'RESEARCH',
    mandate: 'Forensic Investigation of Primary Sources',
    summary:
      'Before stepping onto any floor, rigorous investigation begins. You deconstruct statutory precedents, geopolitical whitepapers, macroeconomic indicators, and historical treaties. You do not rely on summaries—you evaluate primary materials to uncover structural leverage.',
    quote: 'He who controls the evidentiary baseline defines the perimeter of debate.',
  },
  {
    step: '02',
    word: 'THINK',
    mandate: 'Strategic Synthesis Under Scrutiny',
    summary:
      'Information without architecture collapses under adversarial pressure. In this stage, you synthesize variables, map out decision branches, identify non-negotiable thresholds, and anticipate opposing strategies before speaking.',
    quote: 'Rhetoric without structured reasoning is merely noise.',
  },
  {
    step: '03',
    word: 'SPEAK',
    mandate: 'Forensic Oratory & Persuasive Cadence',
    summary:
      'You step to the podium. In front of an adversarial chamber, you deliver precise, authoritative arguments under strict time limits, mastering cadence and composure while withstanding immediate cross-examination.',
    quote: 'Clarity of thought produces authority of speech.',
  },
  {
    step: '04',
    word: 'NEGOTIATE',
    mandate: 'Multilateral Coalition & Consensus Building',
    summary:
      'Public speeches define intent, but negotiations determine outcome. You navigate competing sovereign interests, balance concessions against non-negotiable boundaries, and draft operative clauses that reconcile divided factions.',
    quote: 'Diplomacy is the art of aligning divergent sovereign interests.',
  },
  {
    step: '05',
    word: 'DECIDE',
    mandate: 'Executive Commitment in Ambiguity',
    summary:
      'When time expires and complete certainty is impossible, analysis must convert into action. You cast decisive votes, sign emergency resolutions, and accept full operational responsibility for the outcome.',
    quote: 'In moments of crisis, the refusal to decide is itself a decision.',
  },
  {
    step: '06',
    word: 'LEAD',
    mandate: 'Institutional Stewardship & Responsibility',
    summary:
      'Leadership is the culmination of the crucible. You coordinate teams under operational pressure, maintain institutional integrity, and take personal accountability for collective outcomes.',
    quote: 'True leadership is measured by the responsibility one assumes when the outcome is uncertain.',
  },
];

export default function ExperienceSequence() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = STAGES[activeIdx];

  return (
    <section id="experience" className="py-24 bg-[#08090c] border-b border-white/[0.08] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 mb-10 font-mono text-[11px] text-[#8b8882] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#8b1528] font-bold">04</span>
            <span className="text-white/20">/</span>
            <span>THE CORE METHODOLOGY</span>
          </div>
          <div className="text-[#8b8882]">
            SEQUENCE {current.step} / 06
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f7f5f0] uppercase tracking-tight font-normal">
            The Experiential <span className="italic text-[#8b8882]">Sequence</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8b8882] mt-2 max-w-2xl">
            Every simulation, debate chamber, and crisis cabinet follows this six-stage intellectual progression.
          </p>
        </div>

        {/* Sequence Selector Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 border-b border-white/[0.08] pb-4">
          {STAGES.map((stg, i) => {
            const isActive = activeIdx === i;
            return (
              <button
                key={stg.word}
                onClick={() => setActiveIdx(i)}
                className={`p-4 text-left transition-all duration-200 border-l-2 ${
                  isActive
                    ? 'bg-[#12141a] border-[#8b1528] text-white'
                    : 'bg-transparent border-transparent text-[#8b8882] hover:text-[#c9c5bd] hover:bg-white/[0.015]'
                }`}
              >
                <div className="font-mono text-[10px] text-[#8b1528] mb-1">
                  PHASE // {stg.step}
                </div>
                <div className="font-serif text-base sm:text-lg uppercase tracking-tight font-semibold">
                  {stg.word}
                </div>
              </button>
            );
          })}
        </div>

        {/* Editorial Feature Spread */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.word}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0e1015] border border-white/[0.08] p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left: Phase Title & Narrative */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8b8882] mb-1">
                    PHASE {current.step} DISCIPLINE
                  </div>
                  <h3 className="font-serif text-4xl sm:text-5xl text-[#f7f5f0] uppercase font-normal tracking-tight">
                    {current.word}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#8b1528] mt-2">
                    {current.mandate}
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#c9c5bd] font-sans leading-relaxed">
                  {current.summary}
                </p>
              </div>

              {/* Right: Axiom */}
              <div className="lg:col-span-4 border-l border-white/[0.08] pl-6 lg:pl-8 py-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b8882] block mb-3">
                  Foundational Maxim
                </span>
                <blockquote className="font-serif italic text-xl text-[#f7f5f0] leading-snug">
                  "{current.quote}"
                </blockquote>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
