import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhatIsZeroHour() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0d0e12] border-b border-white/[0.08] relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8b8882] mb-6 sm:mb-8">
          <span className="text-[#8b1528] font-bold">02</span>
          <span className="text-white/20">/</span>
          <span>INSTITUTIONAL PURPOSE & PHILOSOPHY</span>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="border-b border-white/[0.1] pb-8 sm:pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[3.75rem] text-[#f7f5f0] leading-[1.12] sm:leading-[1.08] tracking-tight uppercase max-w-5xl"
          >
            WE DON’T JUST TEACH LEADERSHIP. <br />
            <span className="text-[#8b8882] italic font-light">WE CREATE SITUATIONS WHERE YOU</span> <br />
            <span className="text-[#f7f5f0] font-semibold border-b-2 border-[#8b1528] pb-1 inline-block mt-1">
              HAVE TO PRACTISE IT.
            </span>
          </motion.h2>

          {/* Concise Supporting Editorial Narrative */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-8 text-base sm:text-lg md:text-xl text-[#c9c5bd] font-sans font-light leading-relaxed">
              <p>
                Leadership cannot be developed by observation alone. It has to be practised. Zero Hour places students inside active crucibles—diplomatic summits, parliamentary floors, crisis cabinets, and policy task forces—where theory confronts ambiguity, and decision has consequences.
              </p>
            </div>
            <div className="md:col-span-4 bg-[#14161d] border border-white/[0.08] p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-[#8b8882] space-y-2">
              <div className="text-white font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#8b1528] rounded-full"></span>
                The Experiential Imperative
              </div>
              <p className="text-[#a8a49c] leading-normal">
                Zero Hour bridges the critical divide between theoretical discourse and high-pressure execution across public affairs.
              </p>
            </div>
          </div>
        </div>

        {/* Structural Contrast: The Observation Fallacy vs The Experiential Crucible */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Column 1: The Observer Trap */}
          <div className="bg-[#101217] border border-white/[0.07] p-5 sm:p-8 relative">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#8b8882]">
                Traditional Model
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 bg-red-950/40 text-red-400 border border-red-900/30">
                INSUFFICIENT
              </span>
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl text-[#f7f5f0] mb-3 sm:mb-4">
              The Observation Fallacy
            </h3>
            
            <p className="text-xs sm:text-sm text-[#8b8882] mb-5 sm:mb-6 leading-relaxed">
              Conventional leadership forums rely on audience attendance, retrospective guest lectures, and risk-free academic papers where students never face real adversarial friction.
            </p>

            <ul className="space-y-3 font-mono text-[11px] sm:text-xs text-[#c9c5bd]">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                <span>Passive consumption of canned case studies</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                <span>Zero real stakes or consequences for flawed decisions</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                <span>Scripted Q&A sessions with zero adversarial cross-examination</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                <span>Superficial networking devoid of collaborative stress-testing</span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Zero Hour Crucible */}
          <div className="bg-[#141720] border border-[#8b1528]/40 p-5 sm:p-8 relative shadow-xl">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#e2ded6] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#8b1528] rounded-full"></span>
                The Zero Hour Standard
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 bg-[#8b1528]/20 text-[#f7f5f0] border border-[#8b1528]/50">
                ACTIVE CRUCIBLE
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#f7f5f0] mb-3 sm:mb-4">
              The Experiential Crucible
            </h3>

            <p className="text-xs sm:text-sm text-[#c9c5bd] mb-5 sm:mb-6 leading-relaxed">
              Every participant is thrust into active roles—representing sovereign states, authoring binding legislative policies, defending parliamentary motions, and resolving crisis scenarios.
            </p>

            <ul className="space-y-3 font-mono text-[11px] sm:text-xs text-[#ece8e1]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Live unscripted crises with real-time geopolitical variables</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rigorous Oxford & Parliamentary cross-examination</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Bilateral and multilateral treaty negotiation under clock pressure</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Full functional command and executive institutional accountability</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Core Editorial Principles Strip */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 sm:pt-10 border-t border-white/[0.08]">
          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#8b1528] font-bold uppercase tracking-widest">Axiom 01</span>
            <h4 className="font-serif text-base sm:text-lg text-white font-medium">Cognitive Agility Under Pressure</h4>
            <p className="text-xs text-[#8b8882] font-sans leading-relaxed">
              Conditioning the mind to deconstruct ambiguous intelligence and construct airtight counter-arguments in seconds.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#8b1528] font-bold uppercase tracking-widest">Axiom 02</span>
            <h4 className="font-serif text-base sm:text-lg text-white font-medium">Pragmatic Statecraft & Policy</h4>
            <p className="text-xs text-[#8b8882] font-sans leading-relaxed">
              Moving beyond idealism to engineer enforceable legal, economic, and institutional compromises.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#8b1528] font-bold uppercase tracking-widest">Axiom 03</span>
            <h4 className="font-serif text-base sm:text-lg text-white font-medium">Responsibility for Execution</h4>
            <p className="text-xs text-[#8b8882] font-sans leading-relaxed">
              Every decision carries consequence. Leaders own their strategy, coalition integrity, and collective outcomes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
