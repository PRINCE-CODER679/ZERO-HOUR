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
    category: 'STATECRAFT & GEOPOLITICS',
    title: 'DIPLOMACY',
    subtitle: 'MODEL UNITED NATIONS & CRISIS COMMITTEES',
    question: 'When sovereign national interests collide in an escalating international emergency, how do you forge a legally binding resolution without conceding non-negotiable red lines?',
    description:
      'Immersive multilateral diplomacy, bilateral negotiations, and emergency crisis committees. Delegates represent sovereign nation-states, navigate complex geopolitical intelligence dossiers, author operative clauses, and form strategic voting blocs under extreme clock constraints.',
    skills: [
      'Multilateral Statecraft',
      'Bilateral Treaty Negotiation',
      'Crisis Cabinet Command',
      'Geopolitical Intelligence Analysis',
      'Coalition Bloc Architecture',
      'Consensus Building',
    ],
    simulation: 'Simulated UN Security Council & Historical Crisis Cabinets with dynamic intelligence updates.',
    image: diplomacyImg,
    imageCaption: 'Fig 1.1 — Multilateral Summit & Security Council Deliberation Chamber.',
    archivalCode: 'ZH-DIP-MUN-01',
  },
  {
    id: 'debate',
    number: '02',
    category: 'RHETORIC & INTELLECTUAL COMBAT',
    title: 'DEBATE',
    subtitle: 'DEBATE & DISCOURSE',
    question: 'How do you dismantle a formidable adversary’s core premise in real time under rigorous scrutiny without sacrificing intellectual composure or philosophical depth?',
    description:
      'Oxford-style, British Parliamentary, and Asian Parliamentary formats designed to sharpen cognitive agility. Members engage in high-speed argument deconstruction, rebuttal synthesis, points of information, and persuasive public advocacy on the most contentious issues of modern civilization.',
    skills: [
      'Forensic Cross-Examination',
      'Rhetorical Precision & Cadence',
      'Cognitive Refutation Speed',
      'First-Principles Argumentation',
      'Parliamentary Procedure Mastery',
      'Adversarial Poise',
    ],
    simulation: 'Live Parliamentary chambers with 15-minute preparation motions and unscripted POI challenges.',
    image: debateImg,
    imageCaption: 'Fig 2.1 — Oxford-Union Style Parliamentary Floor with Tiered Benches.',
    archivalCode: 'ZH-DEB-DIS-02',
  },
  {
    id: 'policy',
    number: '03',
    category: 'GOVERNANCE & SOCIO-ECONOMIC ARCHITECTURE',
    title: 'POLICY',
    subtitle: 'PUBLIC POLICY & REGULATORY REFORM',
    question: 'How do you translate volatile societal friction, economic resource constraints, and legal boundaries into enforceable, pragmatic public legislation?',
    description:
      'Demystifying governance through forensic policy analysis. Students deconstruct macroeconomic data, evaluate statutory frameworks, author comprehensive policy briefs, and subject regulatory drafts to rigorous peer review and stakeholder impact assessments.',
    skills: [
      'Policy Brief & White Paper Drafting',
      'Macroeconomic Impact Modeling',
      'Regulatory & Statutory Analysis',
      'Stakeholder Conflict Resolution',
      'Evidence-Based Governance',
      'Implementation Roadmapping',
    ],
    simulation: 'Think Tank Policy Briefing Rounds and Parliamentary Standing Committee Simulations.',
    image: policyImg,
    imageCaption: 'Fig 3.1 — Policy Task Force Reviewing Annotated Legislative Frameworks.',
    archivalCode: 'ZH-POL-PBL-03',
  },
  {
    id: 'administration',
    number: '04',
    category: 'EXECUTIVE COMMAND & STATE MACHINERY',
    title: 'ADMINISTRATION',
    subtitle: 'CIVIL SERVICES & GOVERNANCE',
    question: 'When systemic disruption, civic breakdown, and emergency logistics overwhelm public infrastructure, how do you exercise decisive, ethical administrative command?',
    description:
      'Grounded in the operational realities of civil administration and public services. Participants simulate district magistrate interventions, inter-agency disaster logistics, regulatory enforcement, and ethical dilemmas where textbook solutions crumble.',
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
    imageCaption: 'Fig 4.1 — Emergency Administration & Tactical Inter-Agency Operations Desk.',
    archivalCode: 'ZH-ADM-GOV-04',
  },
];

export default function FourDomains() {
  const [activeTab, setActiveTab] = useState(0);
  const activeDomain = DOMAINS[activeTab];

  return (
    <section id="domains" className="py-16 sm:py-24 bg-[#0a0b0e] border-b border-white/[0.08] relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3 sm:pb-4 mb-8 font-mono text-[10px] sm:text-[11px] text-[#8b8882] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#8b1528] font-bold">03</span>
            <span className="text-white/20">/</span>
            <span>FOUR CORE DOMAINS // MAGAZINE SPREAD</span>
          </div>
          <div className="text-[#c9c5bd]">
            CHAPTER {activeDomain.number} OF 04
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f7f5f0] uppercase tracking-tight font-normal">
            Four Arenas of <span className="italic text-[#c9c5bd]">Experiential Rigor</span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#8b8882] mt-2 max-w-2xl">
            Each domain is structured as an institutional proving ground designed to build practical mastery.
          </p>
        </div>

        {/* Chapter Index Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 sm:mb-12 border-b border-white/[0.1] pb-3">
          {DOMAINS.map((domain, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(index)}
                className={`text-left p-3 sm:p-4 transition-all duration-200 border-l-2 ${
                  isSelected
                    ? 'border-[#8b1528] bg-[#14161f] text-white'
                    : 'border-transparent bg-transparent text-[#8b8882] hover:text-[#c9c5bd] hover:bg-white/[0.02]'
                }`}
              >
                <div className="font-mono text-[9px] sm:text-[10px] text-[#8b1528] font-bold tracking-widest mb-0.5 sm:mb-1">
                  DOM // {domain.number}
                </div>
                <div className="font-serif text-base sm:text-lg font-semibold tracking-wide uppercase truncate">
                  {domain.title}
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] text-[#8b8882] uppercase tracking-wider truncate mt-0.5 hidden xs:block">
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
            className="bg-[#0f1116] border border-white/[0.09] p-5 sm:p-8 lg:p-12 shadow-2xl relative"
          >
            {/* Editorial Archival Tag Top Right */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 sm:pb-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-2.5 py-0.5 bg-[#8b1528] text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold">
                  DOMAIN {activeDomain.number}
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-[#8b8882] tracking-wider uppercase truncate">
                  {activeDomain.category}
                </span>
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-[#8b8882] tracking-widest uppercase">
                REF: <span className="text-[#f7f5f0]">{activeDomain.archivalCode}</span>
              </div>
            </div>

            {/* Editorial Two-Column Magazine Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Provocative Question, Narrative & Skills */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-8">
                <div>
                  <h3 className="font-serif text-3xl sm:text-5xl text-[#f7f5f0] uppercase tracking-tight font-normal">
                    {activeDomain.title}
                  </h3>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#8b1528] mt-1 font-semibold">
                    {activeDomain.subtitle}
                  </div>
                </div>

                {/* Central Provocative Question in Large Editorial Serif */}
                <div className="p-4 sm:p-6 bg-[#151720] border-l-4 border-[#8b1528] border-y border-r border-white/[0.05]">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8b8882] block mb-2">
                    The Central Inquiry
                  </span>
                  <blockquote className="font-serif italic text-lg sm:text-2xl text-[#f7f5f0] leading-snug">
                    "{activeDomain.question}"
                  </blockquote>
                </div>

                {/* Narrative Description */}
                <div className="space-y-3 text-[#c9c5bd] font-sans text-sm sm:text-base leading-relaxed">
                  <p>{activeDomain.description}</p>
                </div>

                {/* Simulation Crucible Note */}
                <div className="p-3.5 sm:p-4 bg-white/[0.02] border border-white/[0.07] font-mono text-[11px] sm:text-xs text-[#8b8882]">
                  <span className="text-white font-semibold uppercase block mb-1">
                    Crucible Environment:
                  </span>
                  <span className="text-[#a8a49c]">{activeDomain.simulation}</span>
                </div>

                {/* Core Applied Competencies */}
                <div>
                  <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#8b8882] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#8b1528]"></span>
                    Core Applied Competencies
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeDomain.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 p-2 bg-[#12141c] border border-white/[0.05] text-[11px] sm:text-xs font-mono text-[#e2ded6]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#8b1528] shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Large Editorial Photograph Spread */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative group overflow-hidden border border-white/[0.12] bg-[#000]">
                  <img
                    src={activeDomain.image}
                    alt={activeDomain.title}
                    className="w-full h-[260px] sm:h-[380px] lg:h-[480px] object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Photo Stamp Overlay */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-2.5 sm:p-3 bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                    <span className="text-white/90 truncate">{activeDomain.imageCaption}</span>
                    <span className="text-[#8b1528] font-bold shrink-0 ml-2">VERIFIED</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#8b8882] px-1">
                  <span>PLATE // {activeDomain.number}</span>
                  <div className="flex items-center gap-2">
                    <span>NEXT:</span>
                    <button
                      onClick={() => setActiveTab((prev) => (prev + 1) % DOMAINS.length)}
                      className="text-[#f7f5f0] hover:text-[#8b1528] flex items-center gap-1 font-semibold"
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
