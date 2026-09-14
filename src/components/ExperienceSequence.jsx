import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STAGES = [
  {
    step: '01',
    word: 'INQUIRY',
    mandate: 'Forensic Exegesis of Primary Doctrine',
    summary:
      'Before entering any chamber, rigorous evidentiary interrogation begins. Delegates deconstruct statutory statutes, unredacted treaties, macroeconomic balance sheets, and diplomatic cables. In Zero Hour, secondary commentary is discarded in favor of unvarnished primary evidence.',
    quote: 'Scientia potentia est — He who establishes the evidentiary baseline commands the perimeter of debate.',
  },
  {
    step: '02',
    word: 'SYNTHESIS',
    mandate: 'Dialectical Architecture Under Adversarial Pressure',
    summary:
      'Raw intelligence without conceptual structure collapses in contested arenas. In this phase, delegates construct logical syllogisms, stress-test vulnerability vectors, and preempt opposing counter-arguments through rigorous dialectical synthesis.',
    quote: 'Rhetoric stripped of structural validity is merely ornamental noise.',
  },
  {
    step: '03',
    word: 'DISCOURSE',
    mandate: 'Parliamentary Oratory & Forensic Cadence',
    summary:
      'Stepping to the dispatch box or podium. Facing a skeptical, adversarial floor under stringent temporal constraints, delegates command cadence, deliver substantiated arguments, and withstand unscripted cross-examination without deflection.',
    quote: 'Clarity of intellect produces undeniable sovereignty of speech.',
  },
  {
    step: '04',
    word: 'CONCILIATION',
    mandate: 'Multilateral Diplomacy & Coalition Architecture',
    summary:
      'While public speeches delineate national posture, bilateral diplomacy dictates treaty survival. Delegates navigate zero-sum incentives, engineer operative compromise without ideological surrender, and assemble durable majoritarian voting coalitions.',
    quote: 'Diplomacy is the calculated alignment of divergent sovereign imperatives.',
  },
  {
    step: '05',
    word: 'ARBITRATION',
    mandate: 'Executive Prerogative in Radical Ambiguity',
    summary:
      'When the countdown expires and perfect information remains unattainable, analysis yields to irreversible commitment. Delegates cast defining votes, authorize emergency directives, and shoulder personal culpability for systemic outcomes.',
    quote: 'In moments of institutional crisis, abdication of choice is itself the gravest verdict.',
  },
  {
    step: '06',
    word: 'STEWARDSHIP',
    mandate: 'Institutional Custodianship & Moral Accountability',
    summary:
      'The apex of civic leadership. Delegates transcend factional allegiance to maintain procedural integrity, guide interdisciplinary working bodies through operational strain, and preserve institutional continuity for successor cohorts.',
    quote: 'Authority is not measured by office, but by the magnitude of consequence one is willing to endure.',
  },
];

export default function ExperienceSequence() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = STAGES[activeIdx];

  return (
    <section id="experience" className="py-24 bg-[#faf8f5] border-b border-[#e5dfd5] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5dfd5] pb-4 mb-10 font-mono text-[11px] text-[#7a8595] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#7b1824] font-bold">04</span>
            <span className="text-[#d8cfc2]">/</span>
            <span>THE CORE METHODOLOGY</span>
          </div>
          <div className="text-[#7b1824] font-semibold">
            SEQUENCE {current.step} / 06
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0e141e] uppercase tracking-tight font-normal">
            The Dialectical <span className="italic text-[#7b1824]">Sequence</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5c6776] mt-2 max-w-2xl">
            Every simulation chamber, parliamentary caucus, and executive crisis room conforms to this six-stage intellectual progression.
          </p>
        </div>

        {/* Sequence Selector Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 border-b border-[#e5dfd5] pb-4">
          {STAGES.map((stg, i) => {
            const isActive = activeIdx === i;
            return (
              <button
                key={stg.word}
                onClick={() => setActiveIdx(i)}
                className={`p-4 text-left transition-all duration-200 border-l-2 rounded-sm ${
                  isActive
                    ? 'bg-white border-[#7b1824] text-[#0e141e] shadow-sm ring-1 ring-[#c29236]/20'
                    : 'bg-transparent border-transparent text-[#7a8595] hover:text-[#0e141e] hover:bg-[#f4f0e8]'
                }`}
              >
                <div className="font-mono text-[10px] text-[#7b1824] font-bold mb-1">
                  PHASE // {stg.step}
                </div>
                <div className="font-serif text-base sm:text-lg uppercase tracking-tight font-bold">
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
            className="bg-white border border-[#e5dfd5] p-8 sm:p-12 shadow-xl rounded-sm ring-1 ring-[#c29236]/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left: Phase Title & Narrative */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#7a8595] mb-1 font-medium">
                    PHASE {current.step} DISCIPLINE
                  </div>
                  <h3 className="font-serif text-4xl sm:text-5xl text-[#0e141e] uppercase font-bold tracking-tight">
                    {current.word}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#7b1824] mt-2 font-bold">
                    {current.mandate}
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#3e4856] font-sans leading-relaxed">
                  {current.summary}
                </p>
              </div>

              {/* Right: Axiom */}
              <div className="lg:col-span-4 border-l border-[#e5dfd5] pl-6 lg:pl-8 py-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#c29236] block mb-3 font-semibold">
                  Foundational Maxim
                </span>
                <blockquote className="font-serif italic text-xl text-[#7b1824] leading-snug">
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
