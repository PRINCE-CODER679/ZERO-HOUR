import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTA({ onOpenJoin }) {
  return (
    <section className="py-20 sm:py-28 bg-[#090a0d] border-b border-white/[0.08] relative overflow-hidden bg-grain">
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[radial-gradient(#8b1528_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header Meta */}
        <div className="inline-flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8b8882] mb-6 sm:mb-8 border border-white/10 px-3 sm:px-4 py-1.5 bg-[#12141c]">
          <span className="w-1.5 h-1.5 bg-[#8b1528] rounded-full animate-pulse"></span>
          <span>SECTION 10 // CONVOCATION</span>
        </div>

        {/* Monumental Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 max-w-5xl mx-auto"
        >
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-[#f7f5f0] uppercase tracking-tighter leading-[0.92] font-normal break-words">
            YOUR TURN<span className="text-[#8b8882]">.</span>
          </h2>

          <div className="py-4 sm:py-6 flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-2 font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#c9c5bd] uppercase tracking-tight">
            <span>RESEARCH.</span>
            <span className="text-[#8b1528] font-mono text-base sm:text-2xl">/</span>
            <span>SPEAK.</span>
            <span className="text-[#8b1528] font-mono text-base sm:text-2xl">/</span>
            <span>CHALLENGE.</span>
            <span className="text-[#8b1528] font-mono text-base sm:text-2xl">/</span>
            <span>DECIDE.</span>
            <span className="text-[#8b1528] font-mono text-base sm:text-2xl">/</span>
            <span className="text-white font-semibold">LEAD.</span>
          </div>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#8b8882] max-w-2xl mx-auto leading-relaxed px-2">
            The next cohort is being assembled. If you are prepared to trade passive observation for active responsibility, your seat at the table awaits.
          </p>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button
              onClick={onOpenJoin}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#8b1528] hover:bg-[#a61c32] text-white font-mono text-xs sm:text-sm uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 border border-red-500/40 shadow-2xl shadow-red-950/60 group"
            >
              <span>JOIN ZERO HOUR</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <a
              href="#about"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-white/[0.03] hover:bg-white/[0.08] text-[#c9c5bd] hover:text-white font-mono text-xs sm:text-sm uppercase tracking-widest transition-all border border-white/10 text-center"
            >
              Re-read The Charter
            </a>
          </div>
        </motion.div>

        {/* Archival Footnote */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-xs font-mono text-[#8b8882] max-w-4xl mx-auto">
          <span>COHORT 2026 // OPEN APPLICANT EVALUATION</span>
          <span className="text-[#c9c5bd]">MERITOCRATIC SELECTION MANDATE</span>
        </div>

      </div>
    </section>
  );
}
