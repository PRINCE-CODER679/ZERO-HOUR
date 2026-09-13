import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACTIONS = [
  {
    id: '01',
    title: 'RESEARCH AN ISSUE',
    domain: 'INTELLIGENCE & PRECEDENT',
    context: 'Dissect primary treaties, statutory precedents, and economic indicators under strict preparation windows.',
    scenario: 'Analyze a conflicting 50-page intelligence briefing on disputed mineral rights to identify legal vulnerabilities and draft three enforceable operative clauses.',
  },
  {
    id: '02',
    title: 'REPRESENT A COUNTRY',
    domain: 'SOVEREIGN DIPLOMACY',
    context: 'Defend foreign policy doctrines and sovereign interests in adversarial multilateral chambers.',
    scenario: 'Embody a nation under international sanctions. Maintain state sovereignty while brokering humanitarian corridors under fierce questioning from opposing voting blocs.',
  },
  {
    id: '03',
    title: 'DEFEND AN ARGUMENT',
    domain: 'PARLIAMENTARY RHETORIC',
    context: 'Stand at the dispatch box under relentless cross-examination and immediate Points of Information.',
    scenario: 'Deliver a six-minute parliamentary defense of an emergency economic bill, answering unscripted floor interventions without losing cadence or factual precision.',
  },
  {
    id: '04',
    title: 'NEGOTIATE',
    domain: 'MULTILATERAL CONSENSUS',
    context: 'Broker concessions, bridge ideological impasses, and assemble majoritarian voting coalitions.',
    scenario: 'Navigate a deadlocked three-party caucus to draft a compromise clause that protects domestic energy security while meeting emission reduction targets.',
  },
  {
    id: '05',
    title: 'SOLVE A POLICY PROBLEM',
    domain: 'STATUTORY REFORM',
    context: 'Transform complex societal friction and resource constraints into durable regulatory legislation.',
    scenario: 'Draft a regulatory framework governing municipal water allocation during drought, balancing agricultural yield, urban demand, and ecological thresholds.',
  },
  {
    id: '06',
    title: 'MAKE A DECISION',
    domain: 'CRISIS COMMAND',
    context: 'Commit to irreversible executive action in high-ambiguity, time-sensitive situations.',
    scenario: 'Act as District Magistrate during an industrial infrastructure failure. Authorize an emergency evacuation protocol with incomplete telemetry within a ten-minute window.',
  },
  {
    id: '07',
    title: 'PRESENT YOUR CASE',
    domain: 'ORAL ADVOCACY',
    context: 'Deliver commanding, evidence-based advocacy before judicial panels and public commissions.',
    scenario: 'Present an oral brief before a mock constitutional bench, responding to direct judicial scrutiny on statutory proportionality and precedent.',
  },
  {
    id: '08',
    title: 'LEAD A TEAM',
    domain: 'INSTITUTIONAL RESPONSIBILITY',
    context: 'Direct functional task forces and take full accountability for institutional execution.',
    scenario: 'Lead a fifteen-member secretariat managing crisis injects, background verification, and dignitary liaison during a national simulation summit.',
  },
];

export default function WhatYouWillDo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeAction = ACTIONS[activeIdx];

  return (
    <section id="actions" className="py-24 bg-[#0c0d10] border-b border-white/[0.08] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 mb-10 font-mono text-[11px] text-[#8b8882] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#8b1528] font-bold">05</span>
            <span className="text-white/20">/</span>
            <span>APPLIED PRACTICE // WHAT WILL YOU ACTUALLY DO?</span>
          </div>
          <div className="text-[#8b8882]">
            EIGHT CORE DISCIPLINES
          </div>
        </div>

        {/* Section Editorial Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f7f5f0] uppercase tracking-tight font-normal">
            Direct Practice. <span className="italic text-[#8b8882]">No Passive Theory.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8b8882] mt-2 max-w-2xl">
            Members engage in concrete simulations every week. Select any discipline to review its institutional application.
          </p>
        </div>

        {/* Editorial Two-Column Ledger Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Typographic List */}
          <div className="lg:col-span-7 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {ACTIONS.map((action, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={action.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`py-4 sm:py-5 px-3 cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                    isActive ? 'bg-white/[0.03]' : 'hover:bg-white/[0.015]'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`font-mono text-xs ${isActive ? 'text-[#8b1528] font-bold' : 'text-[#8b8882]'}`}>
                      {action.id}
                    </span>
                    <span
                      className={`font-serif text-lg sm:text-2xl uppercase tracking-tight transition-colors ${
                        isActive ? 'text-[#f7f5f0]' : 'text-[#8b8882] group-hover:text-[#c9c5bd]'
                      }`}
                    >
                      {action.title}
                    </span>
                  </div>

                  <span className={`font-mono text-[10px] uppercase tracking-wider hidden sm:inline ${
                    isActive ? 'text-[#8b1528]' : 'text-[#8b8882]/60'
                  }`}>
                    {action.domain}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Dossier Note */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAction.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-[#111318] border border-white/[0.08] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 font-mono text-[10px] text-[#8b8882] uppercase tracking-widest">
                  <span>DISCIPLINE {activeAction.id}</span>
                  <span className="text-[#8b1528]">{activeAction.domain}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#f7f5f0] uppercase mb-3">
                  {activeAction.title}
                </h3>

                <p className="text-sm text-[#c9c5bd] font-sans leading-relaxed mb-6">
                  {activeAction.context}
                </p>

                <div className="border-t border-white/[0.06] pt-4 space-y-2">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8b8882]">
                    Realistic Simulation Context:
                  </div>
                  <p className="font-mono text-xs text-[#a8a49c] leading-relaxed">
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
