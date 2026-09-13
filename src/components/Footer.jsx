import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/images/zero_hour_logo.jpg';

export default function Footer({ onOpenJoin }) {
  return (
    <footer className="bg-[#07080a] text-[#8b8882] border-t border-white/[0.1] pt-12 sm:pt-16 pb-10 sm:pb-12 font-sans relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 sm:pb-16 border-b border-white/[0.08]">
          
          {/* Brand & Axiom */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#8b1528]/80 bg-[#12141a] p-0.5 overflow-hidden shadow-lg shrink-0">
                <img
                  src={logoImg}
                  alt="Zero Hour Seal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#f7f5f0] uppercase">
                  ZERO HOUR
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8b1528] font-semibold">
                  DISCUSS • DEBATE • DISRUPT
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base sm:text-lg text-[#c9c5bd] leading-snug max-w-sm">
              "Leadership cannot be developed by observation alone. It has to be practised."
            </p>

            <div className="font-mono text-[10px] sm:text-xs text-[#8b8882] pt-1 sm:pt-2">
              <span className="text-[#8b1528] font-bold block mb-1">FOUNDATIONAL SEQUENCE:</span>
              <span className="text-[#ece8e1] tracking-wider text-[10px] sm:text-xs block break-words">
                RESEARCH → THINK → SPEAK → NEGOTIATE → DECIDE → LEAD
              </span>
            </div>
          </div>

          {/* Core Domains Column */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#f7f5f0] font-semibold border-b border-white/10 pb-2">
              Academic Domains
            </div>
            <ul className="space-y-2 sm:space-y-2.5 font-mono text-[11px] sm:text-xs">
              <li>
                <a href="#domains" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>01 — Diplomacy & MUN</span>
                  <span className="text-white/20">→</span>
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>02 — Debate & Discourse</span>
                  <span className="text-white/20">→</span>
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>03 — Public Policy</span>
                  <span className="text-white/20">→</span>
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>04 — Civil Services & Admin</span>
                  <span className="text-white/20">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Ecosystem Column */}
          <div className="md:col-span-4 space-y-3 sm:space-y-4">
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#f7f5f0] font-semibold border-b border-white/10 pb-2">
              Institutional Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono text-[11px] sm:text-xs">
              <a href="#about" className="hover:text-white transition-colors py-0.5">
                About
              </a>
              <a href="#experience" className="hover:text-white transition-colors py-0.5">
                The Crucible
              </a>
              <a href="#actions" className="hover:text-white transition-colors py-0.5">
                Practices
              </a>
              <a href="#ecosystem" className="hover:text-white transition-colors py-0.5">
                Ecosystem
              </a>
              <a href="#pipeline" className="hover:text-white transition-colors py-0.5">
                Pipeline
              </a>
              <a href="#leadership" className="hover:text-white transition-colors py-0.5">
                Governance
              </a>
            </div>

            <div className="pt-2 sm:pt-3">
              <button
                onClick={onOpenJoin}
                className="w-full py-2.5 bg-[#8b1528] hover:bg-[#a61c32] text-white font-mono text-[11px] sm:text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 border border-red-500/30 transition-all"
              >
                <span>Apply for Membership</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] text-[#8b8882] text-center sm:text-left">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4">
            <span>© 2026 ZERO HOUR PLATFORM.</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span>EXPERIENTIAL LEADERSHIP INITIATIVE</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[#c9c5bd]">EST. 2026</span>
            <span className="text-white/20">|</span>
            <span className="text-white hover:underline cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              TOP ↑
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
