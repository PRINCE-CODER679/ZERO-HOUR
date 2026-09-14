import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhatIsZeroHour() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#64748b] mb-6 sm:mb-8">
          <span className="text-[#751a22] font-bold">02</span>
          <span className="text-slate-300">/</span>
          <span>INSTITUTIONAL PURPOSE & EPISTEMIC PHILOSOPHY</span>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="border-b border-slate-200 pb-8 sm:pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[3.75rem] text-[#0f172a] leading-[1.12] sm:leading-[1.08] tracking-tight uppercase max-w-5xl font-normal"
          >
            THE DIALECTIC OF LEADERSHIP. <br />
            <span className="text-[#475569] italic font-light">WE DO NOT LECTURE ON GOVERNANCE.</span> <br />
            <span className="text-[#751a22] font-bold border-b-2 border-[#751a22] pb-1 inline-block mt-1">
              WE CONSTRUCT THE ARENAS WHERE YOU MUST EXERCISE IT.
            </span>
          </motion.h2>

          {/* Concise Supporting Editorial Narrative */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-8 text-base sm:text-lg md:text-xl text-[#334155] font-sans font-normal leading-relaxed">
              <p>
                Conventional academic discourse confines public affairs to sterile retrospective case studies and spectator symposia. Zero Hour repudiates the observer model. We place aspiring statesmen, legal minds, and analysts inside simulated situation rooms, diplomatic summits, and parliamentary dispatch boxes where decisions confront immediate friction and carry irreversible consequence.
              </p>
            </div>
            <div className="md:col-span-4 bg-slate-50 border border-slate-200 p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-[#475569] space-y-2 shadow-sm rounded-sm">
              <div className="text-[#0f172a] font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#751a22] rounded-full"></span>
                The Empirical Imperative
              </div>
              <p className="text-[#334155] leading-normal">
                Bridging the perilous divide between abstract rhetoric and high-velocity institutional execution across sovereign affairs.
              </p>
            </div>
          </div>
        </div>

        {/* Structural Contrast */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Column 1: The Didactic Fallacy */}
          <div className="bg-slate-50/70 border border-slate-200 p-5 sm:p-8 relative shadow-sm rounded-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#64748b] font-semibold">
                The Didactic Model
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 font-semibold rounded-sm">
                INSUFFICIENT
              </span>
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl text-[#0f172a] mb-3 sm:mb-4 font-bold">
              The Spectator Fallacy
            </h3>
            
            <p className="text-xs sm:text-sm text-[#475569] mb-5 sm:mb-6 leading-relaxed">
              Conventional leadership forums rely on audience attendance, retrospective keynote lectures, and risk-free academic papers where delegates are insulated from adversarial scrutiny and procedural friction.
            </p>

            <ul className="space-y-3 font-mono text-[11px] sm:text-xs text-[#334155]">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Passive consumption of sanitized historical case studies</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Zero accountability or stakes for flawed policy architecture</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Scripted Q&A panels devoid of rigorous cross-examination</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Performative networking detached from high-stress collaboration</span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Zero Hour Standard */}
          <div className="bg-white border-2 border-[#751a22]/30 p-5 sm:p-8 relative shadow-lg rounded-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#0f172a] font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#751a22] rounded-full"></span>
                The Zero Hour Standard
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] px-2.5 py-0.5 bg-[#751a22] text-white font-semibold shadow-sm rounded-sm">
                ACTIVE CRUCIBLE
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#751a22] mb-3 sm:mb-4 font-bold">
              The Empirical Crucible
            </h3>

            <p className="text-xs sm:text-sm text-[#334155] mb-5 sm:mb-6 leading-relaxed">
              Every candidate is thrust into active sovereign command—representing national delegations, drafting binding statutory codifications, defending motions from the dispatch box, and negotiating under acute crisis variables.
            </p>

            <ul className="space-y-3 font-mono text-[11px] sm:text-xs text-[#0f172a]">
              <li className="flex items-start gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Live, unscripted crisis war-games with dynamic intelligence dossiers</span>
              </li>
              <li className="flex items-start gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Forensic Oxford-Union and Parliamentary cross-examination under time controls</span>
              </li>
              <li className="flex items-start gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Bilateral statecraft, bloc architecture, and binding statutory drafting</span>
              </li>
              <li className="flex items-start gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Total functional command and executive institutional accountability</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Core Editorial Principles Strip */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 sm:pt-10 border-t border-slate-200">
          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#751a22] font-bold uppercase tracking-widest">Axiom 01</span>
            <h4 className="font-serif text-base sm:text-lg text-[#0f172a] font-bold">Epistemic Rigor Under Friction</h4>
            <p className="text-xs text-[#475569] font-sans leading-relaxed">
              Conditioning the intellect to deconstruct ambiguous intelligence and synthesize airtight counter-theses in seconds.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#751a22] font-bold uppercase tracking-widest">Axiom 02</span>
            <h4 className="font-serif text-base sm:text-lg text-[#0f172a] font-bold">Pragmatic Statecraft & Policy</h4>
            <p className="text-xs text-[#475569] font-sans leading-relaxed">
              Transcending performative rhetoric to engineer enforceable legal, macroeconomic, and institutional settlements.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#751a22] font-bold uppercase tracking-widest">Axiom 03</span>
            <h4 className="font-serif text-base sm:text-lg text-[#0f172a] font-bold">Stewardship of Consequence</h4>
            <p className="text-xs text-[#475569] font-sans leading-relaxed">
              Every decision carries consequence. Leaders bear personal and moral accountability for coalition cohesion and institutional outcomes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
