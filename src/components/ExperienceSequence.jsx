import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STAGES = [
  {
    step: '01',
    word: 'RESEARCH',
    mandate: 'Understand the Issue Before You Speak',
    summary:
      'Good speaking starts with solid facts. Before stepping into any debate or simulation, members research the topic, study credible background briefs, and understand multiple perspectives instead of relying on guesswork.',
    quote: 'Know your facts before you enter the room — preparation builds genuine confidence.',
  },
  {
    step: '02',
    word: 'THINK',
    mandate: 'Structure Your Arguments & Test Your Logic',
    summary:
      'Having facts is not enough; you need to organize them. In this step, you learn to build logical arguments, identify hidden assumptions, and prepare for tough counter-arguments.',
    quote: 'Clear thinking is the foundation of clear and persuasive communication.',
  },
  {
    step: '03',
    word: 'SPEAK',
    mandate: 'Public Speaking with Confidence & Clarity',
    summary:
      'Step up to the floor. Facing an active audience under time limits, you learn to express your ideas clearly, hold attention, and respond calmly to questions on the spot.',
    quote: 'Public speaking is a skill anyone can master with consistent practice.',
  },
  {
    step: '04',
    word: 'NEGOTIATE',
    mandate: 'Find Common Ground Across Differing Views',
    summary:
      'Speeches make your position known, but negotiation gets things done. You learn how to listen to opposing viewpoints, find shared interests, and build practical agreements.',
    quote: 'Negotiation is the art of finding solutions when everyone wants something different.',
  },
  {
    step: '05',
    word: 'DECIDE',
    mandate: 'Make Smart Choices Under Time Constraints',
    summary:
      'In real life, you rarely have unlimited time or perfect information. You learn how to evaluate trade-offs, make a clear decision under pressure, and take ownership of the results.',
    quote: 'Good decision-making means weighing consequences and taking action.',
  },
  {
    step: '06',
    word: 'LEAD',
    mandate: 'Take Responsibility & Support Your Team',
    summary:
      'The highest level of student development. You manage real events, mentor newer members, coordinate teams, and build an environment where everyone can improve.',
    quote: 'Leadership is not about a title — it is about taking responsibility for outcomes.',
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
            <span>THE ZERO HOUR EXPERIENCE // 6-STEP LEARNING CYCLE</span>
          </div>
          <div className="text-[#7b1824] font-semibold">
            STEP {current.step} / 06
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0e141e] uppercase tracking-tight font-normal">
            The Zero Hour <span className="italic text-[#7b1824]">Experience</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5c6776] mt-2 max-w-2xl">
            Every simulation, workshop, and club activity follows this practical 6-step progression to help you develop real skills.
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
                  STEP // {stg.step}
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
                    STEP {current.step} PRACTICE
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
                  Guiding Philosophy
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
