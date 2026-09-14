import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clock, ChevronRight } from 'lucide-react';
import logoImg from '../assets/images/zero_hour_logo.jpg';

export default function Navbar({ onOpenJoin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.toUTCString().slice(17, 22) + ' UTC';
      setTimeString(utc);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Crucible', href: '#experience' },
    { name: 'Actions', href: '#actions' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Pipeline', href: '#pipeline' },
    { name: 'Structure', href: '#leadership' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Editorial Top Archival Bar */}
      <div className="bg-[#f4f0e8] border-b border-[#e5dfd5] text-[#5c6776] text-[10px] sm:text-[11px] font-mono tracking-wider py-1.5 px-3 sm:px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 truncate">
          <span className="flex items-center gap-1.5 text-[#0e141e] shrink-0 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7b1824] animate-pulse"></span>
            ZERO HOUR
          </span>
          <span className="text-[#d8cfc2] hidden xs:inline">|</span>
          <span className="hidden sm:inline tracking-widest text-[#3e4856]">
            DISCUSS. <span className="text-[#7b1824] font-semibold">DEBATE.</span> IMPACT.
          </span>
          <span className="text-[#d8cfc2] hidden md:inline">|</span>
          <span className="hidden md:inline text-[#7a8595]">EST. 2026</span>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
          <span className="flex items-center gap-1 text-[#3e4856] font-medium">
            <Clock className="w-3 h-3 text-[#7b1824]" />
            {timeString}
          </span>
          <span className="text-[#d8cfc2] hidden sm:inline">|</span>
          <span className="text-[#c29236] text-[10px] font-bold tracking-wider hidden sm:inline flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c29236]"></span>
            CYCLE ACTIVE
          </span>
        </div>
      </div>

      {/* Main Masthead Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#faf8f5]/95 backdrop-blur-md border-[#e5dfd5] py-2.5 sm:py-3 shadow-sm'
            : 'bg-[#faf8f5]/90 backdrop-blur-sm border-[#e5dfd5]/80 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram & Official Crest */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#c29236]/40 bg-white p-0.5 overflow-hidden group-hover:border-[#7b1824] transition-colors shadow-sm shrink-0 rounded-sm">
              <img
                src={logoImg}
                alt="Zero Hour Official Insignia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col truncate">
              <span className="font-serif text-base sm:text-lg font-bold tracking-wide text-[#0e141e] uppercase group-hover:text-[#7b1824] transition-colors leading-none truncate">
                Zero Hour
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#7b1824] font-bold mt-1 truncate">
                DISCUSS • DEBATE • IMPACT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-[#4f5968] hover:text-[#7b1824] hover:border-b-2 border-[#7b1824] py-1 transition-all font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenJoin}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#7b1824] hover:bg-[#921d2c] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 border border-[#540e17] shadow-sm hover:shadow-md rounded-sm"
            >
              <span>Join Zero Hour</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenJoin}
              className="px-2.5 py-1.5 bg-[#7b1824] text-white font-mono text-[10px] uppercase tracking-wider font-semibold rounded-sm shadow-sm"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4f5968] hover:text-[#0e141e] border border-[#e5dfd5] bg-white rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-[#e5dfd5] px-4 sm:px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#7a8595] border-b border-[#e5dfd5] pb-2">
              Navigation Directory
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#0e141e] hover:text-[#7b1824] font-serif text-lg sm:text-xl tracking-tight py-2.5 border-b border-[#e5dfd5]/60"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#a3adb8]" />
              </a>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="w-full py-3.5 bg-[#7b1824] hover:bg-[#921d2c] text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md rounded-sm border border-[#540e17]"
              >
                <span>Enter The Crucible (Apply)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
