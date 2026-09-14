import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import chamberImg from '../assets/images/hero_parliament.jpg';
import logoImg from '../assets/images/zero_hour_logo.jpg';

const SEQUENCE = [
  { step: '01', word: 'INVESTIGATE', desc: 'Deconstruct statutory precedents, primary treaties, and baseline intelligence dossiers.' },
  { step: '02', word: 'SYNTHESIZE', desc: 'Isolate structural leverage points and stress-test strategic hypotheses under clock compression.' },
  { step: '03', word: 'ADVOCATE', desc: 'Articulate uncompromising positions with rhetorical cadence, dialectical poise, and forensic precision.' },
  { step: '04', word: 'NEGOTIATE', desc: 'Reconcile competing sovereign imperatives into durable, multilateral treaty covenants.' },
  { step: '05', word: 'DECIDE', desc: 'Commit irreversible institutional capital amidst ambiguity, incomplete data, and acute friction.' },
  { step: '06', word: 'GOVERN', desc: 'Assume total stewardship for systemic outcomes, coalition cohesion, and moral accountability.' },
];

export default function Hero({ onOpenJoin }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SEQUENCE.length);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 pb-14 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#faf8f5] border-b border-[#e5dfd5] bg-grain">
      {/* Grand Parliamentary Chamber Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={chamberImg}
          alt="Parliamentary Assembly Hall Chamber"
          className="w-full h-full object-cover object-center filter contrast-110 brightness-95 opacity-[0.16]"
        />
        {/* Dual Soft Overlays for Typographic Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/80 to-[#faf8f5]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/85 to-transparent" />
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(194, 146, 54, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(194, 146, 54, 0.12) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top Editorial Index Meta */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 border-b border-[#e5dfd5] pb-3 sm:pb-4 font-mono text-[10px] sm:text-[11px] text-[#5c6776] uppercase tracking-[0.18em] sm:tracking-[0.2em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#0e141e] font-bold">ZERO HOUR</span>
            <span className="text-[#d8cfc2]">/</span>
            <span className="truncate">FOUNDATIONAL TREATISE & DISPATCH</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#7b1824] font-bold tracking-widest truncate">
              DISCUSS. <span className="underline underline-offset-4 decoration-[#c29236]/60">DEBATE.</span> IMPACT.
            </span>
            <span className="hidden sm:inline text-[#d8cfc2]">/</span>
            <span className="hidden sm:inline text-[#7a8595]">EST. 2026</span>
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
              className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#c29236]/35 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#7b1824] shadow-sm font-semibold rounded-full"
            >
              <span className="w-1.5 h-1.5 bg-[#7b1824] rounded-full animate-pulse"></span>
              The Collegiate Crucible of Statecraft
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.98] sm:leading-[0.95] tracking-tight text-[#0e141e] uppercase font-normal break-words">
                THE CRUCIBLE <br />
                <span className="italic font-light text-[#5c6776] block mt-1">
                  WHERE DISCOURSE
                </span>
                <span className="font-semibold text-[#7b1824] tracking-normal block mt-1">
                  BECOMES CONVECTIVE<span className="text-[#c29236]">.</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#3e4856] max-w-2xl font-sans font-normal leading-relaxed pt-2 border-l-2 border-[#7b1824] pl-3 sm:pl-5"
            >
              An autonomous collegiate academy for multilateral statecraft, dialectical debate, and executive governance. Forging analytical mastery through adversarial cross-examination and time-compressed decision architecture.
            </motion.p>
          </div>

          {/* Right Column: Official Insignia Showcase & Axiom Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 bg-white/95 backdrop-blur-sm border border-[#e5dfd5] p-5 sm:p-7 shadow-xl rounded-md relative flex flex-col justify-between ring-1 ring-[#c29236]/15"
          >
            {/* Official Logo Artwork Container */}
            <div className="relative border border-[#e5dfd5] bg-[#faf8f5] p-4 mb-5 sm:mb-6 group overflow-hidden rounded-sm shadow-inner">
              <img
                src={logoImg}
                alt="Zero Hour Official Logo — Discuss. Debate. Impact."
                className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="mt-3 pt-2.5 border-t border-[#e5dfd5] flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#7a8595] uppercase tracking-wider">
                <span className="font-semibold">INSTITUTIONAL CREST</span>
                <span className="text-[#7b1824] font-bold">ZERO HOUR ACADEMY</span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <p className="font-serif italic text-base sm:text-lg text-[#0e141e] leading-snug">
                "Statecraft is neither inherited nor acquired by passive observation. It is tempered exclusively in the crucible of adversarial consequence."
              </p>
              <p className="font-mono text-[11px] sm:text-xs text-[#7a8595] uppercase tracking-wider">
                — Zero Hour Institutional Charter §1
              </p>
            </div>
            
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#e5dfd5]/80 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <button
                onClick={onOpenJoin}
                className="flex-1 py-3 bg-[#7b1824] hover:bg-[#921d2c] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 shadow-md rounded-sm border border-[#540e17]"
              >
                <span>Enter The Crucible</span>
                <span className="text-white/80">→</span>
              </button>
              <a
                href="#experience"
                className="py-3 px-4 bg-[#f4f0e8] hover:bg-white text-[#0e141e] font-mono text-xs uppercase tracking-widest text-center border border-[#e5dfd5] transition-all font-semibold rounded-sm shadow-sm"
              >
                Methodology
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Scroll Sequence */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="border-t border-[#e5dfd5] pt-4 sm:pt-5">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#5c6776] flex items-center gap-2 font-medium">
              <span className="w-2 h-0.5 bg-[#7b1824]"></span>
              The Hexagonal Dialectic Progression
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#7a8595] hidden sm:block">
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
                      ? 'bg-white border-[#7b1824] shadow-md ring-1 ring-[#7b1824]/30'
                      : 'bg-white/85 backdrop-blur-sm border-[#e5dfd5] hover:bg-white hover:border-[#c29236]/60'
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#7b1824]" />
                  )}
                  <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] mb-1">
                    <span className={isActive ? 'text-[#7b1824] font-bold' : 'text-[#7a8595]'}>
                      {item.step}
                    </span>
                    <span className="text-[#d8cfc2] text-xs">
                      {idx < SEQUENCE.length - 1 ? '→' : '✦'}
                    </span>
                  </div>
                  <div
                    className={`font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight uppercase ${
                      isActive ? 'text-[#7b1824]' : 'text-[#5c6776]'
                    }`}
                  >
                    {item.word}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Real-time Descriptor */}
          <div className="mt-2.5 sm:mt-3 py-2.5 px-3 sm:px-4 bg-white/90 backdrop-blur-sm border border-[#e5dfd5] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#3e4856] shadow-sm rounded-sm">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[#7b1824] font-bold">[{SEQUENCE[activeStep].word}]:</span>
              <span className="text-[#5c6776]">{SEQUENCE[activeStep].desc}</span>
            </div>
            <a href="#experience" className="text-[#7b1824] hover:underline underline-offset-4 shrink-0 hidden md:inline font-semibold">
              Dialectic Detail →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
