import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhatIsZeroHour() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-[#e5dfd5] relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#7a8595] mb-6 sm:mb-8">
          <span className="text-[#7b1824] font-bold">02</span>
          <span className="text-[#d8cfc2]">/</span>
          <span>WHAT IS ZERO HOUR? // THE CONCEPT</span>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="border-b border-[#e5dfd5] pb-8 sm:pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[3.6rem] text-[#0e141e] leading-[1.15] sm:leading-[1.1] tracking-tight uppercase max-w-5xl font-normal"
          >
            A CLASSROOM CAN TEACH WHAT A PARLIAMENT DOES. <br />
            <span className="text-[#5c6776] italic font-light">A TEXTBOOK CAN EXPLAIN DIPLOMACY.</span> <br />
            <span className="text-[#7b1824] font-bold border-b-2 border-[#7b1824] pb-1 inline-block mt-1">
              BUT WHAT HAPPENS WHEN YOU ACTUALLY HAVE TO MAKE THE DECISION?
            </span>
          </motion.h2>

          {/* Supporting Narrative */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-8 text-base sm:text-lg md:text-xl text-[#3e4856] font-sans font-normal leading-relaxed space-y-4">
              <p>
                Zero Hour is a student-led club for communication, leadership, and real-world simulations. Instead of just learning about public speaking, diplomacy, debate, and policy in theory, you step in and practise them directly.
              </p>
              <p className="text-sm sm:text-base text-[#5c6776]">
                It is not about simply having opinions. It is about learning how to build, defend, and act upon those opinions responsibly.
              </p>
            </div>
            <div className="md:col-span-4 bg-white border border-[#e5dfd5] p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-[#5c6776] space-y-2 shadow-sm rounded-sm">
              <div className="text-[#0e141e] font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#7b1824] rounded-full"></span>
                Why the name "Zero Hour"?
              </div>
              <p className="text-[#3e4856] leading-normal font-sans">
                In parliamentary language, <strong>Zero Hour</strong> is the time when matters of urgent public importance can be raised. For us, it represents the moment where <strong>ideas become action</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Structural Contrast */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Column 1: The Passive Model */}
          <div className="bg-[#f4f0e8]/80 border border-[#e5dfd5] p-5 sm:p-8 relative shadow-sm rounded-sm">
            <div className="flex items-center justify-between border-b border-[#e5dfd5] pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#7a8595] font-semibold">
                Typical College Activity
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 bg-rose-50 text-rose-800 border border-rose-200 font-semibold rounded-sm">
                PASSIVE & ISOLATED
              </span>
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl text-[#0e141e] mb-3 sm:mb-4 font-bold">
              "Attend an Event → Get Certificate → Go Home"
            </h3>
            
            <p className="text-xs sm:text-sm text-[#5c6776] mb-5 sm:mb-6 leading-relaxed">
              Most student activities consist of sitting in an audience, listening to a one-time lecture, or participating once a year with no ongoing practice or feedback.
            </p>

            <ul className="space-y-3 font-mono text-[11px] sm:text-xs text-[#3e4856]">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Passive listening without hands-on practice</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Isolated events with no year-round skill development</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Limited to students who are already confident speakers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Zero real responsibility or decision-making</span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Zero Hour Model */}
          <div className="bg-white border-2 border-[#7b1824]/40 p-5 sm:p-8 relative shadow-lg rounded-sm ring-1 ring-[#c29236]/20">
            <div className="flex items-center justify-between border-b border-[#e5dfd5]/80 pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#0e141e] font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7b1824] rounded-full"></span>
                The Zero Hour Approach
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] px-2.5 py-0.5 bg-[#7b1824] text-white font-semibold shadow-sm rounded-sm">
                LEARN BY DOING
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#7b1824] mb-3 sm:mb-4 font-bold">
              Repeated Practice in Real Situations
            </h3>

            <p className="text-xs sm:text-sm text-[#3e4856] mb-5 sm:mb-6 leading-relaxed">
              Every member takes an active role—representing countries in MUNs, debating timely topics, drafting policy solutions, solving mystery crises, and managing real events.
            </p>

            <ul className="space-y-3 font-mono text-[11px] sm:text-xs text-[#0e141e]">
              <li className="flex items-start gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#7b1824] shrink-0 mt-0.5" />
                <span>Instead of just learning communication — <strong>Speak</strong></span>
              </li>
              <li className="flex items-start gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#7b1824] shrink-0 mt-0.5" />
                <span>Instead of just reading about diplomacy — <strong>Represent a nation</strong></span>
              </li>
              <li className="flex items-start gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#7b1824] shrink-0 mt-0.5" />
                <span>Instead of just studying policy — <strong>Draft and test one</strong></span>
              </li>
              <li className="flex items-start gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#7b1824] shrink-0 mt-0.5" />
                <span>Instead of just hearing about leadership — <strong>Take responsibility</strong></span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Core Principles Strip */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 sm:pt-10 border-t border-[#e5dfd5]">
          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#c29236] font-bold uppercase tracking-widest">Principle 01</span>
            <h4 className="font-serif text-base sm:text-lg text-[#0e141e] font-bold">Learn by Doing</h4>
            <p className="text-xs text-[#5c6776] font-sans leading-relaxed">
              Face realistic situations where you have to research, communicate, decide, negotiate, and execute.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#c29236] font-bold uppercase tracking-widest">Principle 02</span>
            <h4 className="font-serif text-base sm:text-lg text-[#0e141e] font-bold">Communication with Substance</h4>
            <p className="text-xs text-[#5c6776] font-sans leading-relaxed">
              Not just speaking loudly—learning to think before speaking, structure arguments, use facts, and listen actively.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#c29236] font-bold uppercase tracking-widest">Principle 03</span>
            <h4 className="font-serif text-base sm:text-lg text-[#0e141e] font-bold">Inclusive Development</h4>
            <p className="text-xs text-[#5c6776] font-sans leading-relaxed">
              Open to every student, whether you are a beginner looking to build confidence or an experienced speaker aiming to sharpen your edge.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
