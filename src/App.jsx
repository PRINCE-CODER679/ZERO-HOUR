import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsZeroHour from './components/WhatIsZeroHour';
import FourDomains from './components/FourDomains';
import ExperienceSequence from './components/ExperienceSequence';
import WhatYouWillDo from './components/WhatYouWillDo';
import BeyondEvents from './components/BeyondEvents';
import DevelopmentPipeline from './components/DevelopmentPipeline';
import WhoIsItFor from './components/WhoIsItFor';
import LeadershipStructure from './components/LeadershipStructure';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const handleOpenJoin = () => setJoinModalOpen(true);
  const handleCloseJoin = () => setJoinModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-[#ece8e1] selection:bg-[#8b1528] selection:text-white font-sans overflow-x-hidden antialiased">
      {/* Editorial Navigation */}
      <Navbar onOpenJoin={handleOpenJoin} />

      {/* Main Content Sections */}
      <main>
        {/* SECTION 01 — HERO */}
        <Hero onOpenJoin={handleOpenJoin} />

        {/* SECTION 02 — WHAT IS ZERO HOUR? */}
        <WhatIsZeroHour />

        {/* SECTION 03 — FOUR DOMAINS (MAGAZINE SPREAD) */}
        <FourDomains />

        {/* SECTION 04 — THE ZERO HOUR EXPERIENCE (HEXAGONAL CRUCIBLE) */}
        <ExperienceSequence />

        {/* SECTION 05 — WHAT WILL YOU ACTUALLY DO? */}
        <WhatYouWillDo />

        {/* SECTION 06 — BEYOND EVENTS (CONTINUOUS ECOSYSTEM) */}
        <BeyondEvents />

        {/* SECTION 07 — DEVELOPMENT PIPELINE */}
        <DevelopmentPipeline />

        {/* SECTION 08 — WHO IS IT FOR? */}
        <WhoIsItFor />

        {/* SECTION 09 — LEADERSHIP & GOVERNANCE */}
        <LeadershipStructure />

        {/* SECTION 10 — FINAL CTA */}
        <FinalCTA onOpenJoin={handleOpenJoin} />
      </main>

      {/* Institutional Footer */}
      <Footer onOpenJoin={handleOpenJoin} />

      {/* Join Zero Hour Application Modal */}
      <JoinModal isOpen={joinModalOpen} onClose={handleCloseJoin} />
    </div>
  );
}
