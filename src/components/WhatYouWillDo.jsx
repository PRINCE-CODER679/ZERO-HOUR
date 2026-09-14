import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACTIONS = [
  {
    id: '01',
    title: 'DECONSTRUCT PRIMARY DOCTRINE',
    domain: 'INTELLIGENCE & PRECEDENT',
    context: 'Subject statutory conventions, unredacted communiqués, and macroeconomic balance sheets to rigorous forensic cross-examination within condensed temporal windows.',
    scenario: 'Dissect conflicting multi-lateral intelligence briefings regarding disputed maritime transit corridors to formulate enforceable legal codicils resistant to ICJ challenge.',
  },
  {
    id: '02',
    title: 'EMBODY SOVEREIGN STATEHOOD',
    domain: 'SOVEREIGN DIPLOMACY',
    context: 'Assume the geopolitical calculus of sovereign nation-states within adversarial chambers, defending national interest under multilateral sanctions.',
    scenario: 'Represent an energy-dependent sovereign state under embargo; structure bilateral swap conventions and humanitarian safe passages amidst hostile voting blocs.',
  },
  {
    id: '03',
    title: 'DEFEND UNDER PARLIAMENTARY FIRE',
    domain: 'PARLIAMENTARY RHETORIC',
    context: 'Occupy the dispatch box under relentless cross-examination, navigating unsolicited Points of Information and adversarial floor motions with composure.',
    scenario: 'Deliver an unscripted six-minute defense of an emergency fiscal appropriations bill while neutralizing hostile floor interventions from the shadow opposition.',
  },
  {
    id: '04',
    title: 'FORGE ADVERSARIAL CONSENSUS',
    domain: 'MULTILATERAL CONSENSUS',
    context: 'Bridge ideological fissures and reconcile irreconcilable interests to draft majoritarian treaty texts without conceding foundational sovereignty.',
    scenario: 'Reconcile three diametrically opposed regional caucuses to ratify an operative protocol on transnational river basin stewardship under drought conditions.',
  },
  {
    id: '05',
    title: 'ARCHITECT STATUTORY POLICY',
    domain: 'STATUTORY REFORM',
    context: 'Translate complex societal frictions, fiscal bottlenecks, and legal boundaries into durable regulatory frameworks and administrative statutes.',
    scenario: 'Draft a municipal framework governing autonomous critical infrastructure during power grid failure, arbitrating between public safety and commercial continuity.',
  },
  {
    id: '06',
    title: 'EXERCISE CRISIS PREROGATIVE',
    domain: 'CRISIS COMMAND',
    context: 'Commit to irreversible administrative actions under radical temporal scarcity, incomplete situational awareness, and severe consequence.',
    scenario: 'As District Magistrate during a hazardous chemical containment failure, execute an emergency metropolitan evacuation protocol with only four minutes of telemetry.',
  },
  {
    id: '07',
    title: 'DELIVER ORAL ADVOCACY',
    domain: 'APPELLATE JURISPRUDENCE',
    context: 'Argue complex constitutional doctrines and statutory interpretations directly before judicial benches and high-level commissions.',
    scenario: 'Advance constitutional arguments before an appellate tribunal regarding legislative overreach, defending proportional rights against national security mandates.',
  },
  {
    id: '08',
    title: 'GOVERN A CRISIS DIRECTORATE',
    domain: 'INSTITUTIONAL STEWARDSHIP',
    context: 'Command functional secretariats, orchestrate crisis inject architectures, and maintain absolute procedural equilibrium under live public scrutiny.',
    scenario: 'Direct a forty-delegate crisis cabinet managing simulated international contagion spread, coordinating diplomatic press briefings and emergency logistics.',
  },
];

export default function WhatYouWillDo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeAction = ACTIONS[activeIdx];

  return (
    <section id="actions" className="py-24 bg-[#f8fafc] border-b border-slate-200 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-10 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#751a22] font-bold">05</span>
            <span className="text-slate-300">/</span>
            <span>APPLIED PRACTICE // WHAT WILL YOU ACTUALLY DO?</span>
          </div>
          <div className="text-[#751a22] font-semibold">
            EIGHT CORE DISCIPLINES
          </div>
        </div>

        {/* Section Editorial Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0f172a] uppercase tracking-tight font-normal">
            Direct Practice. <span className="italic text-[#751a22]">No Passive Theory.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#475569] mt-2 max-w-2xl">
            Members engage in concrete simulations every week. Select any discipline to review its institutional application.
          </p>
        </div>

        {/* Editorial Two-Column Ledger Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {ACTIONS.map((action, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={action.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`py-4 sm:py-5 px-3 cursor-pointer transition-all duration-200 flex items-center justify-between group rounded-sm ${
                    isActive ? 'bg-white shadow-sm border-l-2 border-[#751a22]' : 'hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`font-mono text-xs ${isActive ? 'text-[#751a22] font-bold' : 'text-[#64748b]'}`}>
                      {action.id}
                    </span>
                    <span
                      className={`font-serif text-lg sm:text-2xl uppercase tracking-tight transition-colors ${
                        isActive ? 'text-[#0f172a] font-bold' : 'text-[#475569] group-hover:text-[#0f172a]'
                      }`}
                    >
                      {action.title}
                    </span>
                  </div>

                  <span className={`font-mono text-[10px] uppercase tracking-wider hidden sm:inline ${
                    isActive ? 'text-[#751a22] font-bold' : 'text-[#64748b]'
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
                className="bg-white border border-slate-200 p-6 sm:p-8 shadow-xl rounded-sm"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 font-mono text-[10px] text-[#64748b] uppercase tracking-widest">
                  <span>DISCIPLINE {activeAction.id}</span>
                  <span className="text-[#751a22] font-bold">{activeAction.domain}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#0f172a] uppercase mb-3 font-bold">
                  {activeAction.title}
                </h3>

                <p className="text-sm text-[#334155] font-sans leading-relaxed mb-6">
                  {activeAction.context}
                </p>

                <div className="border-t border-slate-100 pt-4 space-y-2 bg-slate-50 p-4 border border-slate-200/80 rounded-sm">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#64748b] font-semibold">
                    Realistic Simulation Context:
                  </div>
                  <p className="font-mono text-xs text-[#751a22] leading-relaxed font-medium">
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
