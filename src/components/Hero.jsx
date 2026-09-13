import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero.jpg';
import logoImg from '../assets/images/zero_hour_logo.jpg';

const SEQUENCE = [
  { step: '01', word: 'RESEARCH', desc: 'Deconstruct intelligence, historical precedent, and raw policy data.' },
  { step: '02', word: 'THINK', desc: 'Synthesize complex variables under time-compressed strategic scrutiny.' },
  { step: '03', word: 'SPEAK', desc: 'Articulate positions with forensic clarity and uncompromising rhetoric.' },
  { step: '04', word: 'NEGOTIATE', desc: 'Build multilateral coalitions and break entrenched deadlocks.' },
  { step: '05', word: 'DECIDE', desc: 'Commit to decisive executive actions despite incomplete certainty.' },
  { step: '06', word: 'LEAD', desc: 'Assume total responsibility for institutional outcomes.' },
];

export default function Hero({ onOpenJoin }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SEQUENCE.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 pb-14 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#0a0b0e] border-b border-white/[0.08] bg-grain">
      {/* Ambient Archival Background Image */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src={heroImg}
          alt="Zero Hour Assembly Hall"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/75 to-[#0a0b0e]/90" />
      </div>

      {/* Subtle Hairline Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top Editorial Index Meta */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 border-b border-white/[0.08] pb-3 sm:pb-4 font-mono text-[10px] sm:text-[11px] text-[#8b8882] uppercase tracking-[0.18em] sm:tracking-[0.2em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#f7f5f0] font-semibold">ZERO HOUR</span>
            <span className="text-white/20">/</span>
            <span className="truncate">FOUNDATIONAL TREATISE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#8b1528] font-bold truncate">DISCUSS. DEBATE. DISRUPT.</span>
            <span className="hidden sm:inline text-white/20">/</span>
            <span className="hidden sm:inline text-[#c9c5bd]">EST. 2026</span>
          </div>
        </div>
      </div>

      {/* Main Typographic Hero Core */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Monumental Headline */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#14161d] border border-white/10 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-200/90"
            >
              <span className="w-1.5 h-1.5 bg-[#8b1528] rounded-full"></span>
              The Experiential Platform
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.98] sm:leading-[0.95] tracking-tight text-[#f7f5f0] uppercase font-normal break-words">
                THE MOMENT <br />
                <span className="italic font-light text-[#e2ded6] block mt-1">
                  IDEAS BECOME
                </span>
                <span className="font-semibold text-white tracking-normal block mt-1 text-[#f7f5f0]">
                  ACTION<span className="text-[#8b1528]">.</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#c9c5bd] max-w-2xl font-sans font-light leading-relaxed pt-2 border-l-2 border-[#8b1528] pl-3 sm:pl-5"
            >
              A student-led platform for leadership, public affairs, and real-world decision making.
            </motion.p>
          </div>

          {/* Right Column: Official Insignia Showcase & Axiom Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 bg-[#111318]/95 border border-white/[0.1] p-5 sm:p-7 shadow-2xl relative flex flex-col justify-between"
          >
            {/* Official Logo Artwork Container */}
            <div className="relative border border-white/[0.08] bg-[#07080b] p-3 mb-5 sm:mb-6 group overflow-hidden">
              <img
                src={logoImg}
                alt="Zero Hour Official Logo — Discuss. Debate. Disrupt."
                className="w-full h-auto max-h-[240px] sm:max-h-[290px] object-contain mx-auto filter contrast-105"
              />
              <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#8b8882] uppercase tracking-wider">
                <span>OFFICIAL SEAL</span>
                <span className="text-[#8b1528] font-semibold">ZERO HOUR</span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <p className="font-serif italic text-base sm:text-lg text-[#f7f5f0] leading-snug">
                "Leadership cannot be developed by observation alone. It has to be practised."
              </p>
              <p className="font-mono text-[11px] sm:text-xs text-[#8b8882] uppercase tracking-wider">
                — Zero Hour Charter §1
              </p>
            </div>
            
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <button
                onClick={onOpenJoin}
                className="flex-1 py-3 bg-[#8b1528] hover:bg-[#a61c32] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 border border-red-500/30 shadow-lg"
              >
                <span>Enter The Crucible</span>
                <span className="text-white/70">→</span>
              </button>
              <a
                href="#experience"
                className="py-3 px-4 bg-white/[0.03] hover:bg-white/[0.07] text-[#c9c5bd] hover:text-white font-mono text-xs uppercase tracking-widest text-center border border-white/[0.08] transition-all"
              >
                Methodology
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Scroll Sequence: RESEARCH -> THINK -> SPEAK -> NEGOTIATE -> DECIDE -> LEAD */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="border-t border-white/[0.12] pt-4 sm:pt-5">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8b8882] flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#8b1528]"></span>
              The Hexagonal Progression Sequence
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8b8882] hidden sm:block">
              Stage {SEQUENCE[activeStep].step} of 06
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {SEQUENCE.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={item.word}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-2.5 sm:p-3.5 transition-all duration-300 border relative ${
                    isActive
                      ? 'bg-[#181b22] border-[#8b1528] shadow-lg ring-1 ring-[#8b1528]/50'
                      : 'bg-[#0f1116]/60 border-white/[0.06] hover:bg-[#14161d] hover:border-white/20'
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#8b1528]" />
                  )}
                  <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] mb-1">
                    <span className={isActive ? 'text-[#8b1528] font-bold' : 'text-[#8b8882]'}>
                      {item.step}
                    </span>
                    <span className="text-white/30 text-xs">
                      {idx < SEQUENCE.length - 1 ? '→' : '✦'}
                    </span>
                  </div>
                  <div
                    className={`font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight uppercase ${
                      isActive ? 'text-[#f7f5f0]' : 'text-[#8b8882]'
                    }`}
                  >
                    {item.word}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Real-time Descriptor */}
          <div className="mt-2.5 sm:mt-3 py-2 px-3 sm:px-4 bg-[#12141a]/80 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#c9c5bd]">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[#8b1528] font-bold">[{SEQUENCE[activeStep].word}]:</span>
              <span className="text-[#a8a49c]">{SEQUENCE[activeStep].desc}</span>
            </div>
            <a href="#experience" className="text-[#8b8882] hover:text-white underline underline-offset-4 shrink-0 hidden md:inline">
              Detail →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
