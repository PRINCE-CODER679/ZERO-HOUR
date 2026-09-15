import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

import diplomacyImg from '../assets/images/diplomacy.jpg';
import debateImg from '../assets/images/debate.jpg';
import policyImg from '../assets/images/policy.jpg';
import adminImg from '../assets/images/admin.jpg';

const DOMAINS = [
  {
    id: 'diplomacy',
    number: '01',
    category: 'DIPLOMACY & GLOBAL AFFAIRS',
    title: 'MODEL UNITED NATIONS',
    subtitle: 'DIPLOMATIC SIMULATIONS & NEGOTIATION',
    question: 'Can you negotiate when everyone in the room wants something different?',
    description:
      'Students step into the world of international relations. You don’t merely learn about countries and global organisations—you represent them. You research national positions, negotiate with other delegates, form alliances, and draft real solutions.',
    skills: [
      'Research & Fact Verification',
      'Diplomatic Negotiation',
      'Public Speaking & Confidence',
      'Alliance & Coalition Building',
      'Formal Communication',
      'Teamwork Under Pressure',
    ],
    simulation: 'Simulated UN committees, Security Council crisis cabinets, and bilateral treaty rounds.',
    image: diplomacyImg,
    imageCaption: 'Plate 1.1 — Model United Nations & Diplomatic Negotiation Chamber.',
    archivalCode: 'ZH-MUN-01',
  },
  {
    id: 'debate',
    number: '02',
    category: 'DEBATE & CRITICAL THINKING',
    title: 'PARLIAMENTARY DEBATE',
    subtitle: 'OXFORD & PARLIAMENTARY FORMATS',
    question: 'Can you defend your position when someone is actively trying to dismantle it?',
    description:
      'Zero Hour creates structured spaces to argue ideas rather than personalities. Through Oxford-style and Parliamentary debates, participants learn how to construct clear arguments, spot logical fallacies, think on their feet, and listen actively.',
    skills: [
      'Argument Construction',
      'Critical Thinking',
      'Fast Rebuttal Speed',
      'Public Speaking Delivery',
      'Logical Reasoning',
      'Active Listening',
    ],
    simulation: 'Oxford-Union and Parliamentary debates with 15-minute preparation times and live cross-examination.',
    image: debateImg,
    imageCaption: 'Plate 2.1 — Oxford-Union Style Parliamentary Debate Floor.',
    archivalCode: 'ZH-DEB-02',
  },
  {
    id: 'policy',
    number: '03',
    category: 'GOVERNANCE & PUBLIC POLICY',
    title: 'PUBLIC POLICY',
    subtitle: 'POLICY ANALYSIS & REAL-WORLD PROBLEM SOLVING',
    question: 'If you were responsible for solving the problem, what would you actually do?',
    description:
      'This is where ideas move from discussion to governance. Students act as policymakers and examine the entire process: Problem → Evidence → Stakeholders → Alternatives → Policy → Implementation → Impact. Good intentions alone do not produce good policy.',
    skills: [
      'Problem Identification',
      'Policy Analysis & Drafting',
      'Stakeholder Mapping',
      'Resource Allocation',
      'Evidence-Based Thinking',
      'Implementation Planning',
    ],
    simulation: 'Policy briefing rounds, simulated standing committees, and legislative draft reviews.',
    image: policyImg,
    imageCaption: 'Plate 3.1 — Policy Task Force Reviewing Practical Solutions.',
    archivalCode: 'ZH-POL-03',
  },
  {
    id: 'problem-solving',
    number: '04',
    category: 'PROBLEM SOLVING & CRISIS MANAGEMENT',
    title: 'PROBLEM-SOLVING & CRISIS',
    subtitle: 'MURDER MYSTERY & SIMULATION CHALLENGES',
    question: 'What does leadership look like when you have to solve a crisis under incomplete information?',
    description:
      'A hands-on, engaging problem-solving experience. Participants work through clues, competing hypotheses, and urgent timelines. You learn how to connect pieces of information, work closely with a team, and make practical decisions under pressure.',
    skills: [
      'Observation & Attention to Detail',
      'Logical Reasoning',
      'Team Collaboration',
      'Information Analysis',
      'Quick Decision-Making',
      'Crisis Management',
    ],
    simulation: 'Interactive murder mystery cases, situation room challenges, and crisis problem-solving.',
    image: adminImg,
    imageCaption: 'Plate 4.1 — Problem-Solving & Crisis Simulation Room.',
    archivalCode: 'ZH-SIM-04',
  },
];

export default function FourDomains() {
  const [activeTab, setActiveTab] = useState(0);
  const activeDomain = DOMAINS[activeTab];

  return (
    <section id="domains" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-[#e5dfd5] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5dfd5] pb-3 sm:pb-4 mb-8 font-mono text-[10px] sm:text-[11px] text-[#7a8595] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#7b1824] font-bold">03</span>
            <span className="text-[#d8cfc2]">/</span>
            <span>FOUR FLAGSHIP EXPERIENCES // CORE VERTICALS</span>
          </div>
          <div className="text-[#7b1824] font-semibold">
            VERTICAL {activeDomain.number} OF 04
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0e141e] uppercase tracking-tight font-normal">
            Four Core <span className="italic text-[#7b1824]">Flagship Verticals</span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#5c6776] mt-2 max-w-2xl">
            Each vertical is designed to help you practice essential professional skills: research, public speaking, negotiation, and teamwork.
          </p>
        </div>

        {/* Chapter Index Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 sm:mb-12 border-b border-[#e5dfd5] pb-3">
          {DOMAINS.map((domain, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(index)}
                className={`text-left p-3 sm:p-4 transition-all duration-200 border-l-2 rounded-sm ${
                  isSelected
                    ? 'border-[#7b1824] bg-white text-[#0e141e] shadow-sm ring-1 ring-[#c29236]/20'
                    : 'border-transparent bg-transparent text-[#7a8595] hover:text-[#0e141e] hover:bg-[#f4f0e8]'
                }`}
              >
                <div className="font-mono text-[9px] sm:text-[10px] text-[#7b1824] font-bold tracking-widest mb-0.5 sm:mb-1">
                  DOM // {domain.number}
                </div>
                <div className="font-serif text-base sm:text-lg font-bold tracking-wide uppercase truncate">
                  {domain.title}
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] text-[#7a8595] uppercase tracking-wider truncate mt-0.5 hidden xs:block">
                  {domain.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Magazine Spread Feature */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white border border-[#e5dfd5] p-5 sm:p-8 lg:p-12 shadow-xl relative rounded-sm ring-1 ring-[#c29236]/15"
          >
            {/* Editorial Archival Tag Top Right */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5dfd5] pb-4 sm:pb-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2.5 py-0.5 bg-[#7b1824] text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold shadow-sm rounded-sm">
                  VERTICAL {activeDomain.number}
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-[#5c6776] tracking-wider uppercase truncate font-medium">
                  {activeDomain.category}
                </span>
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-[#7a8595] tracking-widest uppercase">
                CODE: <span className="text-[#0e141e] font-semibold">{activeDomain.archivalCode}</span>
              </div>
            </div>

            {/* Editorial Two-Column Magazine Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-8">
                <div>
                  <h3 className="font-serif text-3xl sm:text-5xl text-[#0e141e] uppercase tracking-tight font-bold">
                    {activeDomain.title}
                  </h3>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#7b1824] mt-1 font-bold">
                    {activeDomain.subtitle}
                  </div>
                </div>

                {/* Central Question */}
                <div className="p-4 sm:p-6 bg-[#faf8f5] border-l-4 border-[#7b1824] border-y border-r border-[#e5dfd5] rounded-r-sm">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#7a8595] block mb-2 font-semibold">
                    Core Question
                  </span>
                  <blockquote className="font-serif italic text-lg sm:text-2xl text-[#0e141e] leading-snug">
                    "{activeDomain.question}"
                  </blockquote>
                </div>

                {/* Narrative Description */}
                <div className="space-y-3 text-[#3e4856] font-sans text-sm sm:text-base leading-relaxed">
                  <p>{activeDomain.description}</p>
                </div>

                {/* Simulation Format Note */}
                <div className="p-3.5 sm:p-4 bg-[#faf8f5] border border-[#e5dfd5] font-mono text-[11px] sm:text-xs text-[#5c6776] rounded-sm">
                  <span className="text-[#0e141e] font-bold uppercase block mb-1">
                    Simulation Format:
                  </span>
                  <span className="text-[#3e4856]">{activeDomain.simulation}</span>
                </div>

                {/* Key Skills */}
                <div>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#7a8595] mb-3 flex items-center gap-2 font-semibold">
                    <span className="w-1.5 h-1.5 bg-[#7b1824]"></span>
                    Key Skills You Will Develop
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeDomain.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 p-2.5 bg-[#faf8f5] border border-[#e5dfd5] text-[11px] sm:text-xs font-mono text-[#0e141e] font-medium rounded-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-[#7b1824] shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Photograph */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative group overflow-hidden border border-slate-200 bg-slate-900 shadow-md rounded-sm">
                  <img
                    src={activeDomain.image}
                    alt={activeDomain.title}
                    className="w-full h-[260px] sm:h-[380px] lg:h-[480px] object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Photo Stamp Overlay */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-2.5 sm:p-3 bg-white/95 backdrop-blur-sm border border-slate-200 flex items-center justify-between text-[10px] sm:text-[11px] font-mono shadow-md rounded-sm">
                    <span className="text-[#0f172a] font-medium truncate">{activeDomain.imageCaption}</span>
                    <span className="text-[#751a22] font-bold shrink-0 ml-2">VERIFIED</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#64748b] px-1">
                  <span>PLATE // {activeDomain.number}</span>
                  <div className="flex items-center gap-2">
                    <span>NEXT:</span>
                    <button
                      onClick={() => setActiveTab((prev) => (prev + 1) % DOMAINS.length)}
                      className="text-[#751a22] hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>{DOMAINS[(activeTab + 1) % DOMAINS.length].title}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
