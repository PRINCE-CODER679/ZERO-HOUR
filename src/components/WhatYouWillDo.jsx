import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACTIONS = [
  {
    id: '01',
    title: 'REPRESENT A NATION IN MUN',
    domain: 'DIPLOMACY & NEGOTIATION',
    context: 'Step into the shoes of an official delegate, research foreign policy, and negotiate real solutions with other countries.',
    scenario: 'Represent an assigned country in a simulated UN committee, negotiate international trade accords, and form voting alliances.',
  },
  {
    id: '02',
    title: 'DEBATE TIMELY ISSUES',
    domain: 'DEBATE & CRITICAL THINKING',
    context: 'Defend or challenge ideas using logic, facts, and clear arguments under timed conditions.',
    scenario: 'Deliver a structured 5-minute parliamentary speech defending your side of a motion while answering live questions from opponents.',
  },
  {
    id: '03',
    title: 'DRAFT PRACTICAL POLICIES',
    domain: 'PUBLIC POLICY & GOVERNANCE',
    context: 'Move from just discussing problems to creating workable, step-by-step policy solutions with real constraints.',
    scenario: 'Design a municipal traffic and safety policy, balancing budget limits, public demands, and implementation timelines.',
  },
  {
    id: '04',
    title: 'SOLVE A CRISIS OR MYSTERY',
    domain: 'PROBLEM-SOLVING & TEAMWORK',
    context: 'Work with your team to review clues, test hypotheses, and solve complex problems under time pressure.',
    scenario: 'Analyze clues and suspect statements in an interactive murder mystery case to uncover the truth before the deadline.',
  },
  {
    id: '05',
    title: 'MASTER GROUP DISCUSSIONS',
    domain: 'PLACEMENT & INTERVIEW PREP',
    context: 'Build core communication skills needed for campus placement drives, job interviews, and professional meetings.',
    scenario: 'Practice structured group discussions and receive immediate feedback on speaking confidence, listening, and argument structure.',
  },
  {
    id: '06',
    title: 'INTERACT WITH PROFESSIONALS',
    domain: 'COFFEE WITH ZERO HOUR',
    context: 'Engage directly with HR leaders, entrepreneurs, civil servants, and alumni through casual fireside conversations.',
    scenario: 'Host an interactive Q&A session with an industry professional to gain practical career insights and networking exposure.',
  },
  {
    id: '07',
    title: 'WRITE RESEARCH BRIEFS',
    domain: 'RESEARCH & KNOWLEDGE',
    context: 'Study current affairs, verify facts, and prepare clear, easy-to-read background briefs for club simulations.',
    scenario: 'Compile a 2-page background dossier on renewable energy policies to help participants prepare for an upcoming event.',
  },
  {
    id: '08',
    title: 'PLAN & MANAGE REAL EVENTS',
    domain: 'LEADERSHIP & OPERATIONS',
    context: 'Gain hands-on experience in planning timelines, leading volunteers, handling logistics, and executing major events.',
    scenario: 'Coordinate on-ground logistics, manage registrations, and guide volunteer teams during the annual college fest.',
  },
];

export default function WhatYouWillDo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeAction = ACTIONS[activeIdx];

  return (
    <section id="actions" className="py-24 bg-[#faf8f5] border-b border-[#e5dfd5] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5dfd5] pb-4 mb-10 font-mono text-[11px] text-[#7a8595] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#7b1824] font-bold">05</span>
            <span className="text-[#d8cfc2]">/</span>
            <span>PRACTICAL ACTIVITIES // WHAT WILL YOU ACTUALLY DO?</span>
          </div>
          <div className="text-[#7b1824] font-semibold">
            EIGHT CORE EXPERIENCES
          </div>
        </div>

        {/* Section Editorial Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0e141e] uppercase tracking-tight font-normal">
            Real Practice. <span className="italic text-[#7b1824]">Not Just Passive Listening.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5c6776] mt-2 max-w-2xl">
            Members participate in concrete, hands-on activities every month. Click any item to see what it looks like in practice.
          </p>
        </div>

        {/* Editorial Two-Column Ledger Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 divide-y divide-[#e5dfd5] border-y border-[#e5dfd5]">
            {ACTIONS.map((action, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={action.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`py-4 sm:py-5 px-3 cursor-pointer transition-all duration-200 flex items-center justify-between group rounded-sm ${
                    isActive ? 'bg-white shadow-sm border-l-2 border-[#7b1824] ring-1 ring-[#c29236]/20' : 'hover:bg-[#f4f0e8]/70'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`font-mono text-xs ${isActive ? 'text-[#7b1824] font-bold' : 'text-[#7a8595]'}`}>
                      {action.id}
                    </span>
                    <span
                      className={`font-serif text-lg sm:text-2xl uppercase tracking-tight transition-colors ${
                        isActive ? 'text-[#0e141e] font-bold' : 'text-[#5c6776] group-hover:text-[#0e141e]'
                      }`}
                    >
                      {action.title}
                    </span>
                  </div>

                  <span className={`font-mono text-[10px] uppercase tracking-wider hidden sm:inline ${
                    isActive ? 'text-[#7b1824] font-bold' : 'text-[#7a8595]'
                  }`}>
                    {action.domain}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAction.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#e5dfd5] p-6 sm:p-8 shadow-xl rounded-sm ring-1 ring-[#c29236]/15"
              >
                <div className="flex items-center justify-between border-b border-[#e5dfd5] pb-4 mb-6 font-mono text-[10px] text-[#7a8595] uppercase tracking-widest">
                  <span>ACTIVITY {activeAction.id}</span>
                  <span className="text-[#7b1824] font-bold">{activeAction.domain}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#0e141e] uppercase mb-3 font-bold">
                  {activeAction.title}
                </h3>

                <p className="text-sm text-[#3e4856] font-sans leading-relaxed mb-6">
                  {activeAction.context}
                </p>

                <div className="border-t border-[#e5dfd5] pt-4 space-y-2 bg-[#faf8f5] p-4 border border-[#e5dfd5] rounded-sm">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#7a8595] font-semibold">
                    Example Scenario:
                  </div>
                  <p className="font-mono text-xs text-[#7b1824] leading-relaxed font-medium">
                    "{activeAction.scenario}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
