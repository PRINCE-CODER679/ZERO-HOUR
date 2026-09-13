import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Scale, TrendingUp, BookOpen, HeartPulse, Briefcase, Check } from 'lucide-react';

const DISCIPLINES = [
  {
    icon: Code2,
    discipline: 'ENGINEERING & TECHNOLOGY',
    why: 'Master tech policy, AI governance, cyber warfare doctrines, and system-level crisis coordination.',
    crossover: 'Translating technical complexity into actionable national policy and strategic regulation.',
  },
  {
    icon: Scale,
    discipline: 'LAW & JURISPRUDENCE',
    why: 'Refine statutory cross-examination, constitutional interpretation, and high-pressure oral jurisprudence.',
    crossover: 'Drafting bulletproof multilateral treaties and withstanding fierce parliamentary scrutiny.',
  },
  {
    icon: TrendingUp,
    discipline: 'ECONOMICS & COMMERCE',
    why: 'Deconstruct macroeconomic trade disputes, fiscal sanctions, and public expenditure models.',
    crossover: 'Bridging financial viability with geopolitical leverage in high-stakes negotiations.',
  },
  {
    icon: BookOpen,
    discipline: 'HUMANITIES & SOCIAL SCIENCES',
    why: 'Apply historical precedent, sociological analysis, and philosophical inquiry to modern statecraft.',
    crossover: 'Synthesizing conflicting cultural and diplomatic narratives into unified policy frameworks.',
  },
  {
    icon: HeartPulse,
    discipline: 'MEDICINE & BIOETHICS',
    why: 'Navigate emergency healthcare logistics, pandemic response protocols, and biomedical governance.',
    crossover: 'Advising executive crisis war-rooms on public health mandates and ethical resource rationing.',
  },
  {
    icon: Briefcase,
    discipline: 'MANAGEMENT & COMMERCE',
    why: 'Sharpen executive negotiation, organizational logistics, high-stress coalition leadership, and strategy.',
    crossover: 'Commanding interdisciplinary teams under rigid deadlines and real consequence.',
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-24 bg-[#0a0b0e] border-b border-white/[0.08] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 mb-8 font-mono text-[11px] text-[#8b8882] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#8b1528] font-bold">08</span>
            <span className="text-white/20">/</span>
            <span>TARGET COHORT // DEMYSTIFYING THE STEREOTYPE</span>
          </div>
          <div className="text-[#c9c5bd]">
            INTERDISCIPLINARY COHORT
          </div>
        </div>

        {/* Editorial Anti-Stereotype Statement */}
        <div className="border-b border-white/[0.1] pb-12 mb-14">
          <div className="space-y-2 mb-8">
            <div className="font-mono text-xs text-[#8b8882] uppercase tracking-widest line-through">
              NOT JUST FOR MUN ENTHUSIASTS.
            </div>
            <div className="font-mono text-xs text-[#8b8882] uppercase tracking-widest line-through">
              NOT JUST FOR DEBATERS.
            </div>
            <div className="font-mono text-xs text-[#8b8882] uppercase tracking-widest line-through">
              NOT JUST FOR UPSC ASPIRANTS.
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f7f5f0] uppercase tracking-tight font-normal max-w-4xl leading-tight">
            FOR ANYONE WHO WANTS TO <br />
            <span className="text-white font-semibold border-b-2 border-[#8b1528] pb-1 inline-block">
              THINK BETTER.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#c9c5bd] mt-6 max-w-3xl leading-relaxed">
            Statecraft, debate, and policy are not exclusive to political science majors. The most formidable thinkers in our chambers are engineers who dissect logic, economists who calculate leverage, and writers who command the room.
          </p>
        </div>

        {/* Multi-disciplinary Academic Background Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.discipline}
                className="bg-[#101217] border border-white/[0.07] p-6 hover:border-[#8b1528]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4 mb-4">
                    <div className="w-8 h-8 bg-[#8b1528]/15 border border-[#8b1528]/40 flex items-center justify-center text-[#f7f5f0]">
                      <IconComp className="w-4 h-4 text-[#8b1528]" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-white uppercase tracking-tight">
                      {item.discipline}
                    </h3>
                  </div>

                  <p className="text-xs text-[#c9c5bd] font-sans leading-relaxed mb-4">
                    {item.why}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.05] font-mono text-[11px] text-[#8b8882]">
                  <span className="text-[#8b1528] font-bold block mb-1">Applied Crucible Value:</span>
                  <span className="text-[#a8a49c]">{item.crossover}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
