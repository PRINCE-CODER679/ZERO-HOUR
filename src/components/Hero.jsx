import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import chamberImg from '../assets/images/hero_parliament.jpg';
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
    <section className="relative min-h-screen pt-24 sm:pt-28 pb-14 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#f8fafc] border-b border-slate-200 bg-grain">
      {/* Grand Parliamentary Chamber Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={chamberImg}
          alt="Parliamentary Assembly Hall Chamber"
          className="w-full h-full object-cover object-center filter contrast-110 brightness-95 opacity-[0.16]"
        />
        {/* Dual Soft Overlays for Maximum Typographic Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-[#f8fafc]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/85 to-transparent" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top Editorial Index Meta */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 border-b border-slate-200 pb-3 sm:pb-4 font-mono text-[10px] sm:text-[11px] text-[#475569] uppercase tracking-[0.18em] sm:tracking-[0.2em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#0f172a] font-bold">ZERO HOUR</span>
            <span className="text-slate-300">/</span>
            <span className="truncate">FOUNDATIONAL TREATISE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#751a22] font-bold tracking-widest truncate">
              DISCUSS. <span className="underline underline-offset-4 decoration-[#751a22]/40">DEBATE.</span> IMPACT.
            </span>
            <span className="hidden sm:inline text-slate-300">/</span>
            <span className="hidden sm:inline text-[#64748b]">EST. 2026</span>
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
              className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-slate-200 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#751a22] shadow-sm font-semibold rounded-full"
            >
              <span className="w-1.5 h-1.5 bg-[#751a22] rounded-full animate-pulse"></span>
              The Experiential Leadership Platform
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.98] sm:leading-[0.95] tracking-tight text-[#0f172a] uppercase font-normal break-words">
                THE MOMENT <br />
                <span className="italic font-light text-[#475569] block mt-1">
                  IDEAS BECOME
                </span>
                <span className="font-semibold text-[#751a22] tracking-normal block mt-1">
                  ACTION<span className="text-[#9e232b]">.</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#334155] max-w-2xl font-sans font-normal leading-relaxed pt-2 border-l-2 border-[#751a22] pl-3 sm:pl-5"
            >
              A student-led platform for leadership, public affairs, and real-world decision making. Reconciling theoretical statecraft with high-pressure institutional execution.
            </motion.p>
          </div>

          {/* Right Column: Official Insignia Showcase & Axiom Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 bg-white/95 backdrop-blur-sm border border-slate-200/90 p-5 sm:p-7 shadow-2xl rounded-md relative flex flex-col justify-between"
          >
            {/* Official Logo Artwork Container */}
            <div className="relative border border-slate-100 bg-[#fafafa] p-4 mb-5 sm:mb-6 group overflow-hidden rounded-sm shadow-inner">
              <img
                src={logoImg}
                alt="Zero Hour Official Logo — Discuss. Debate. Impact."
                className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#64748b] uppercase tracking-wider">
                <span className="font-semibold">OFFICIAL SEAL</span>
                <span className="text-[#751a22] font-bold">ZERO HOUR</span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <p className="font-serif italic text-base sm:text-lg text-[#0f172a] leading-snug">
                "Leadership cannot be developed by observation alone. It has to be practised."
              </p>
              <p className="font-mono text-[11px] sm:text-xs text-[#64748b] uppercase tracking-wider">
                — Zero Hour Charter §1
              </p>
            </div>
            
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <button
                onClick={onOpenJoin}
                className="flex-1 py-3 bg-[#751a22] hover:bg-[#8f202a] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 shadow-md rounded-sm"
              >
                <span>Enter The Crucible</span>
                <span className="text-white/80">→</span>
              </button>
              <a
                href="#experience"
                className="py-3 px-4 bg-slate-50 hover:bg-slate-100 text-[#0f172a] font-mono text-xs uppercase tracking-widest text-center border border-slate-200 transition-all font-semibold rounded-sm"
              >
                Methodology
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Scroll Sequence */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="border-t border-slate-200 pt-4 sm:pt-5">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#475569] flex items-center gap-2 font-medium">
              <span className="w-2 h-0.5 bg-[#751a22]"></span>
              The Hexagonal Progression Sequence
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#64748b] hidden sm:block">
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
                  className={`text-left p-2.5 sm:p-3.5 transition-all duration-300 border relative rounded-sm ${
                    isActive
                      ? 'bg-white border-[#751a22] shadow-md ring-1 ring-[#751a22]/30'
                      : 'bg-white/85 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#751a22]" />
                  )}
                  <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] mb-1">
                    <span className={isActive ? 'text-[#751a22] font-bold' : 'text-[#64748b]'}>
                      {item.step}
                    </span>
                    <span className="text-slate-300 text-xs">
                      {idx < SEQUENCE.length - 1 ? '→' : '✦'}
                    </span>
                  </div>
                  <div
                    className={`font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight uppercase ${
                      isActive ? 'text-[#751a22]' : 'text-[#475569]'
                    }`}
                  >
                    {item.word}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Real-time Descriptor */}
          <div className="mt-2.5 sm:mt-3 py-2.5 px-3 sm:px-4 bg-white/90 backdrop-blur-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#334155] shadow-sm rounded-sm">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[#751a22] font-bold">[{SEQUENCE[activeStep].word}]:</span>
              <span className="text-[#475569]">{SEQUENCE[activeStep].desc}</span>
            </div>
            <a href="#experience" className="text-[#751a22] hover:underline underline-offset-4 shrink-0 hidden md:inline font-semibold">
              Detail →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
