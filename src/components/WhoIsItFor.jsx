import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Scale, Briefcase, Feather, Landmark, Globe } from 'lucide-react';

const DISCIPLINES = [
  {
    discipline: 'ENGINEERING & COMPUTATIONAL SCIENCES',
    icon: Cpu,
    why: 'Engineers and computer scientists perceive systems through topology, edge cases, and algorithmic rigor. In Zero Hour, they translate technical precision into authoritative statutory governance.',
    crossover: 'Statutory governance of artificial intelligence, orbital satellite sovereignty, and cyber-warfare protocols.',
  },
  {
    discipline: 'JURISPRUDENCE & LEGAL ADVOCACY',
    icon: Scale,
    why: 'Legal scholars dissect statutory lacunae and treaty codicils with surgical detachment. Zero Hour stress-tests their capacity to sustain oral advocacy under adversarial judicial scrutiny.',
    crossover: 'Appellate moot courts, bilateral extradition conventions, and supranational treaty adjudication.',
  },
  {
    discipline: 'MACROECONOMICS & QUANTITATIVE FINANCE',
    icon: Briefcase,
    why: 'Classical economists model theoretical equilibria; Zero Hour confronts them with the raw political realpolitik and resource weaponization that econometric models often overlook.',
    crossover: 'Sanction regime calibration, sovereign debt restructuring, and central bank crisis liquidity.',
  },
  {
    discipline: 'PHILOSOPHY, HISTORY & HUMANITIES',
    icon: Feather,
    why: 'Historians and philosophers possess the deepest understanding of statecraft precedent, dialectical rhetoric, and civilizational dynamics. Zero Hour transforms prose into commanding parliamentary cadence.',
    crossover: 'Diplomatic discourse, ideological treaty framing, and geopolitical crisis narratology.',
  },
  {
    discipline: 'STRATEGIC MANAGEMENT & COMMERCE',
    icon: Landmark,
    why: 'Business strategists contribute operational discipline, multi-party coalition alignment, and capital allocation. Zero Hour thrusts them into non-linear geopolitical crisis cabinets.',
    crossover: 'Multilateral trade accords, strategic reserve logistics, and public-private emergency mobilization.',
  },
  {
    discipline: 'NATURAL SCIENCES & EMPIRICAL RESEARCH',
    icon: Globe,
    why: 'Pure scientists understand evidentiary falsifiability and rigorous hypothesis testing. Zero Hour trains them to defend empirical truth before skeptical, politically motivated assemblies.',
    crossover: 'Transnational biosecurity accords, environmental carrying-capacity treaties, and crisis telemetry.',
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8 font-mono text-[11px] text-[#64748b] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-[#751a22] font-bold">08</span>
            <span className="text-slate-300">/</span>
            <span>TARGET COHORT // DEMYSTIFYING THE STEREOTYPE</span>
          </div>
          <div className="text-[#751a22] font-semibold">
            INTERDISCIPLINARY COHORT
          </div>
        </div>

        {/* Editorial Anti-Stereotype Statement */}
        <div className="border-b border-slate-200 pb-12 mb-14">
          <div className="space-y-2 mb-8">
            <div className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest line-through">
              NOT JUST FOR MUN ENTHUSIASTS.
            </div>
            <div className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest line-through">
              NOT JUST FOR DEBATERS.
            </div>
            <div className="font-mono text-xs text-[#94a3b8] uppercase tracking-widest line-through">
              NOT JUST FOR UPSC ASPIRANTS.
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#0f172a] uppercase tracking-tight font-normal max-w-4xl leading-tight">
            FOR ANYONE WHO WANTS TO <br />
            <span className="text-[#751a22] font-semibold border-b-2 border-[#751a22] pb-1 inline-block">
              THINK BETTER.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#334155] mt-6 max-w-3xl leading-relaxed">
            Statecraft, debate, and policy are not exclusive to political science majors. The most formidable thinkers in our chambers are engineers who dissect logic, economists who calculate leverage, and writers who command the room.
          </p>
        </div>

        {/* Multi-disciplinary Academic Background Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.discipline}
                className="bg-slate-50/70 border border-slate-200 p-6 hover:border-[#751a22] hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md rounded-sm"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
                    <div className="w-8 h-8 bg-white border border-slate-200 flex items-center justify-center text-[#751a22] shrink-0 rounded-sm shadow-sm">
                      <IconComp className="w-4 h-4 text-[#751a22]" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#0f172a] uppercase tracking-tight">
                      {item.discipline}
                    </h3>
                  </div>

                  <p className="text-xs text-[#475569] font-sans leading-relaxed mb-4">
                    {item.why}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 font-mono text-[11px] text-[#64748b]">
                  <span className="text-[#751a22] font-bold block mb-1">Applied Crucible Value:</span>
                  <span className="text-[#334155] font-medium">{item.crossover}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
