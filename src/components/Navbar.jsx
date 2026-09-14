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
      <div className="bg-[#f1f5f9] border-b border-slate-200 text-[#475569] text-[10px] sm:text-[11px] font-mono tracking-wider py-1.5 px-3 sm:px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 truncate">
          <span className="flex items-center gap-1.5 text-[#0f172a] shrink-0 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#751a22] animate-pulse"></span>
            ZERO HOUR
          </span>
          <span className="text-slate-300 hidden xs:inline">|</span>
          <span className="hidden sm:inline tracking-widest text-[#334155]">
            DISCUSS. <span className="text-[#751a22] font-semibold">DEBATE.</span> IMPACT.
          </span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span className="hidden md:inline text-[#64748b]">EST. 2026</span>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
          <span className="flex items-center gap-1 text-[#334155] font-medium">
            <Clock className="w-3 h-3 text-[#751a22]" />
            {timeString}
          </span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-[#c59b51] text-[10px] font-semibold tracking-wider hidden sm:inline">
            CYCLE ACTIVE
          </span>
        </div>
      </div>

      {/* Main Masthead Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200 py-2.5 sm:py-3 shadow-md'
            : 'bg-white/90 backdrop-blur-sm border-slate-200/80 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram & Official Crest */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#751a22]/30 bg-white p-0.5 overflow-hidden group-hover:border-[#751a22] transition-colors shadow-sm shrink-0 rounded-sm">
              <img
                src={logoImg}
                alt="Zero Hour Official Insignia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col truncate">
              <span className="font-serif text-base sm:text-lg font-bold tracking-wide text-[#0f172a] uppercase group-hover:text-[#751a22] transition-colors leading-none truncate">
                Zero Hour
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#751a22] font-semibold mt-1 truncate">
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
                className="font-mono text-xs uppercase tracking-widest text-[#475569] hover:text-[#751a22] hover:border-b-2 border-[#751a22] py-1 transition-all font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenJoin}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#751a22] hover:bg-[#8f202a] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 border border-[#581218]/40 shadow-sm hover:shadow-md rounded-sm"
            >
              <span>Join Zero Hour</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenJoin}
              className="px-2.5 py-1.5 bg-[#751a22] text-white font-mono text-[10px] uppercase tracking-wider font-semibold rounded-sm shadow-sm"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#475569] hover:text-[#0f172a] border border-slate-200 bg-slate-50 rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#64748b] border-b border-slate-100 pb-2">
              Navigation Directory
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#0f172a] hover:text-[#751a22] font-serif text-lg sm:text-xl tracking-tight py-2.5 border-b border-slate-100"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#94a3b8]" />
              </a>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="w-full py-3.5 bg-[#751a22] text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md rounded-sm"
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
