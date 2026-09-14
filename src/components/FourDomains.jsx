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
    category: 'STATECRAFT & GEOPOLITICAL DIPLOMACY',
    title: 'DIPLOMACY',
    subtitle: 'MULTILATERAL STATECRAFT & CRISIS CONCLAVES',
    question: 'When sovereign national imperatives collide in an escalating international emergency, how do you forge a legally binding treaty without conceding existential red lines?',
    description:
      'Immersive multilateral statecraft, bilateral conclaves, and emergency crisis committees. Delegates represent sovereign nation-states, navigate complex geopolitical intelligence dossiers, author operative clauses, and assemble decisive voting coalitions under extreme clock compression.',
    skills: [
      'Multilateral Statecraft',
      'Bilateral Treaty Negotiation',
      'Crisis Cabinet Command',
      'Geopolitical Dossier Analysis',
      'Coalition Bloc Architecture',
      'Consensus Building',
    ],
    simulation: 'Simulated UN Security Council & Historical Crisis Cabinets with dynamic intelligence injects.',
    image: diplomacyImg,
    imageCaption: 'Plate 1.1 — Multilateral Summit & Security Council Deliberation Chamber.',
    archivalCode: 'ZH-DIP-MUN-01',
  },
  {
    id: 'debate',
    number: '02',
    category: 'DIALECTICAL COMBAT & RHETORICAL DISCOURSE',
    title: 'DEBATE',
    subtitle: 'PARLIAMENTARY RHETORIC & ORAL ADVOCACY',
    question: 'How do you dismantle a formidable adversary’s foundational premise in real time under strict procedural scrutiny while maintaining intellectual composure and commanding authority?',
    description:
      'Oxford-Union, British Parliamentary, and Asian Parliamentary formats engineered to sharpen cognitive velocity. Members engage in real-time argument deconstruction, rebuttal synthesis, points of information, and persuasive public advocacy on the most contentious constitutional and moral questions of our era.',
    skills: [
      'Forensic Cross-Examination',
      'Rhetorical Precision & Cadence',
      'Cognitive Refutation Speed',
      'First-Principles Argumentation',
      'Parliamentary Procedure Mastery',
      'Adversarial Poise',
    ],
    simulation: 'Live Parliamentary chambers operating under 15-minute motion advisories and unscripted POI challenges.',
    image: debateImg,
    imageCaption: 'Plate 2.1 — Oxford-Union Style Parliamentary Floor with Tiered Benches.',
    archivalCode: 'ZH-DEB-DIS-02',
  },
  {
    id: 'policy',
    number: '03',
    category: 'GOVERNANCE & SOCIO-ECONOMIC ARCHITECTURE',
    title: 'POLICY',
    subtitle: 'STATUTORY ANALYSIS & REGULATORY REFORM',
    question: 'How do you translate volatile societal friction, macroeconomic constraints, and constitutional boundaries into durable, enforceable public legislation?',
    description:
      'Demystifying the mechanics of governance through forensic policy analysis. Candidates deconstruct macroeconomic data, evaluate statutory frameworks, author comprehensive policy white papers, and defend regulatory drafts before simulated parliamentary standing committees and expert witness panels.',
    skills: [
      'White Paper & Statutory Drafting',
      'Macroeconomic Impact Modeling',
      'Regulatory & Jurisprudential Analysis',
      'Stakeholder Conflict Mediation',
      'Evidence-Based Governance',
      'Implementation Roadmapping',
    ],
    simulation: 'Think Tank Policy Briefing Rounds and Parliamentary Standing Committee Simulations.',
    image: policyImg,
    imageCaption: 'Plate 3.1 — Policy Task Force Reviewing Annotated Legislative Frameworks.',
    archivalCode: 'ZH-POL-PBL-03',
  },
  {
    id: 'administration',
    number: '04',
    category: 'EXECUTIVE COMMAND & STATE MACHINERY',
    title: 'ADMINISTRATION',
    subtitle: 'CIVIL SERVICES & EMERGENCY GOVERNANCE',
    question: 'When systemic breakdown, civic unrest, and logistical bottlenecks overwhelm public infrastructure, how do you exercise decisive, constitutional administrative command?',
    description:
      'Grounded in the operational realities of civil administration and public machinery. Participants simulate district magistrate interventions, inter-agency disaster logistics, regulatory enforcement, and high-stakes ethical dilemmas where textbook solutions crumble under friction.',
    skills: [
      'Situation Room Decision-Making',
      'Inter-Agency Disaster Logistics',
      'Administrative Protocol Execution',
      'Ethical Public Governance',
      'High-Stakes Resource Allocation',
      'Crisis Communication & Calamity Response',
    ],
    simulation: 'District Administration Crisis War-Rooms & Civil Service Scenario Exercises.',
    image: adminImg,
    imageCaption: 'Plate 4.1 — Emergency Administration & Tactical Inter-Agency Operations Desk.',
    archivalCode: 'ZH-ADM-GOV-04',
  },
];

export default function FourDomains() {
  const [activeTab, setActiveTab] = useState(0);
  const activeDomain = DOMAINS[activeTab];

  return (
    <section id="domains" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4 mb-8 font-mono text-[10px] sm:text-[11px] text-[#64748b] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#751a22] font-bold">03</span>
            <span className="text-slate-300">/</span>
            <span>FOUR CORE DISCIPLINES // MAGAZINE SPREAD</span>
          </div>
          <div className="text-[#751a22] font-semibold">
            DISCIPLINE {activeDomain.number} OF 04
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0f172a] uppercase tracking-tight font-normal">
            Four Arenas of <span className="italic text-[#751a22]">Sovereign Statecraft</span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#475569] mt-2 max-w-2xl">
            Each discipline is structured as an institutional proving ground designed to cultivate analytical mastery, forensic advocacy, and executive resolve.
          </p>
        </div>

        {/* Chapter Index Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 sm:mb-12 border-b border-slate-200 pb-3">
          {DOMAINS.map((domain, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(index)}
                className={`text-left p-3 sm:p-4 transition-all duration-200 border-l-2 rounded-sm ${
                  isSelected
                    ? 'border-[#751a22] bg-white text-[#0f172a] shadow-sm'
                    : 'border-transparent bg-transparent text-[#64748b] hover:text-[#0f172a] hover:bg-slate-100/70'
                }`}
              >
                <div className="font-mono text-[9px] sm:text-[10px] text-[#751a22] font-bold tracking-widest mb-0.5 sm:mb-1">
                  DOM // {domain.number}
                </div>
                <div className="font-serif text-base sm:text-lg font-bold tracking-wide uppercase truncate">
                  {domain.title}
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] text-[#64748b] uppercase tracking-wider truncate mt-0.5 hidden xs:block">
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
            className="bg-white border border-slate-200 p-5 sm:p-8 lg:p-12 shadow-xl relative rounded-sm"
          >
            {/* Editorial Archival Tag Top Right */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 sm:pb-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2.5 py-0.5 bg-[#751a22] text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold shadow-sm rounded-sm">
                  DISCIPLINE {activeDomain.number}
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-[#475569] tracking-wider uppercase truncate font-medium">
                  {activeDomain.category}
                </span>
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-[#64748b] tracking-widest uppercase">
                REF: <span className="text-[#0f172a] font-semibold">{activeDomain.archivalCode}</span>
              </div>
            </div>

            {/* Editorial Two-Column Magazine Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-8">
                <div>
                  <h3 className="font-serif text-3xl sm:text-5xl text-[#0f172a] uppercase tracking-tight font-bold">
                    {activeDomain.title}
                  </h3>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#751a22] mt-1 font-bold">
                    {activeDomain.subtitle}
                  </div>
                </div>

                {/* Central Provocative Question */}
                <div className="p-4 sm:p-6 bg-slate-50 border-l-4 border-[#751a22] border-y border-r border-slate-200 rounded-r-sm">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#64748b] block mb-2 font-semibold">
                    The Central Inquiry
                  </span>
                  <blockquote className="font-serif italic text-lg sm:text-2xl text-[#0f172a] leading-snug">
                    "{activeDomain.question}"
                  </blockquote>
                </div>

                {/* Narrative Description */}
                <div className="space-y-3 text-[#334155] font-sans text-sm sm:text-base leading-relaxed">
                  <p>{activeDomain.description}</p>
                </div>

                {/* Simulation Crucible Note */}
                <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 font-mono text-[11px] sm:text-xs text-[#475569] rounded-sm">
                  <span className="text-[#0f172a] font-bold uppercase block mb-1">
                    Crucible Arena:
                  </span>
                  <span className="text-[#334155]">{activeDomain.simulation}</span>
                </div>

                {/* Core Applied Competencies */}
                <div>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#64748b] mb-3 flex items-center gap-2 font-semibold">
                    <span className="w-1.5 h-1.5 bg-[#751a22]"></span>
                    Core Applied Competencies
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeDomain.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-mono text-[#0f172a] font-medium rounded-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-[#751a22] shrink-0" />
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
