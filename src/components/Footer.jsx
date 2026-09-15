import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/images/zero_hour_logo.jpg';
import footerBg from '../assets/images/footer_parliament.jpg';

export default function Footer({ onOpenJoin }) {
  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 sm:pt-20 pb-10 sm:pb-12 font-sans overflow-hidden">
      {/* Background Image of Parliament */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={footerBg}
          alt="Parliament House at Night"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-110"
        />
        {/* Balanced Atmospheric Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/55" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid with Frosted Glass Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 sm:pb-16 border border-white/10 bg-slate-950/65 backdrop-blur-md p-6 sm:p-10 rounded-sm shadow-2xl">
          
          {/* Brand & Philosophy */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 border border-white/20 bg-white p-0.5 overflow-hidden shadow-lg shrink-0 rounded-sm">
                <img
                  src={logoImg}
                  alt="Zero Hour Seal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white uppercase drop-shadow-sm">
                  ZERO HOUR
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#ff4d6d] font-bold">
                  DISCUSS • DEBATE • IMPACT
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base sm:text-lg text-slate-200 leading-snug max-w-sm drop-shadow">
              "Leadership cannot be developed by observation alone. It has to be practised."
            </p>

            <div className="font-mono text-[10px] sm:text-xs text-slate-300 pt-1 sm:pt-2">
              <span className="text-[#ff4d6d] font-bold block mb-1">LEARNING PROGRESSION:</span>
              <span className="text-white font-medium tracking-wider text-[10px] sm:text-xs block break-words">
                RESEARCH → THINK → SPEAK → NEGOTIATE → DECIDE → LEAD
              </span>
            </div>
          </div>

          {/* Flagship Verticals Column */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-white font-bold border-b border-white/15 pb-2">
              Flagship Verticals
            </div>
            <ul className="space-y-2.5 sm:space-y-3 font-mono text-[11px] sm:text-xs">
              <li>
                <a href="#domains" className="hover:text-white transition-colors flex items-center justify-between text-slate-200 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">01 — Model United Nations</span>
                  <span className="text-slate-400 group-hover:text-white">→</span>
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-white transition-colors flex items-center justify-between text-slate-200 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">02 — Oxford & Parliamentary Debate</span>
                  <span className="text-slate-400 group-hover:text-white">→</span>
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-white transition-colors flex items-center justify-between text-slate-200 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">03 — Public Policy Simulation</span>
                  <span className="text-slate-400 group-hover:text-white">→</span>
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-white transition-colors flex items-center justify-between text-slate-200 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">04 — Problem-Solving & Mystery</span>
                  <span className="text-slate-400 group-hover:text-white">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Site Navigation Column */}
          <div className="md:col-span-4 space-y-3 sm:space-y-4">
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-white font-bold border-b border-white/15 pb-2">
              Quick Links
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-[11px] sm:text-xs">
              <a href="#about" className="hover:text-white transition-colors py-0.5 text-slate-200">
                About
              </a>
              <a href="#domains" className="hover:text-white transition-colors py-0.5 text-slate-200">
                Flagships
              </a>
              <a href="#experience" className="hover:text-white transition-colors py-0.5 text-slate-200">
                Experience
              </a>
              <a href="#actions" className="hover:text-white transition-colors py-0.5 text-slate-200">
                Activities
              </a>
              <a href="#ecosystem" className="hover:text-white transition-colors py-0.5 text-slate-200">
                Year-Round
              </a>
              <a href="#pipeline" className="hover:text-white transition-colors py-0.5 text-slate-200">
                Growth
              </a>
            </div>

            <div className="pt-2 sm:pt-3">
              <button
                onClick={onOpenJoin}
                className="w-full py-3 bg-[#751a22] hover:bg-[#8f202a] text-white font-mono text-[11px] sm:text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 rounded-sm transition-all shadow-lg border border-red-500/30"
              >
                <span>Register for Zero Hour</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] text-slate-300 text-center sm:text-left">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4">
            <span className="font-semibold text-white">© 2026–27 ZERO HOUR PLATFORM.</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span>STUDENT DEVELOPMENT & LEADERSHIP</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-slate-200 font-semibold">EST. 2026</span>
            <span className="text-white/20">|</span>
            <span className="text-white hover:text-rose-400 cursor-pointer transition-colors font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              BACK TO TOP ↑
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
