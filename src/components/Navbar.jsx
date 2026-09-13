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
      {/* Editorial Top Archival Bar (Adaptive for Mobile & Desktop) */}
      <div className="bg-[#08090b] border-b border-white/[0.06] text-[#8b8882] text-[10px] sm:text-[11px] font-mono tracking-wider py-1.5 px-3 sm:px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4 truncate">
          <span className="flex items-center gap-1.5 text-[#ece8e1] shrink-0 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b1528] animate-pulse"></span>
            ZERO HOUR
          </span>
          <span className="text-white/20 hidden xs:inline">|</span>
          <span className="hidden sm:inline">DISCUSS. DEBATE. DISRUPT.</span>
          <span className="text-white/20 hidden md:inline">|</span>
          <span className="hidden md:inline">EST. 2026</span>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
          <span className="flex items-center gap-1 text-[#c9c5bd]">
            <Clock className="w-3 h-3 text-[#8b8882]" />
            {timeString}
          </span>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="text-amber-200/90 text-[10px] font-medium hidden sm:inline">CYCLE ACTIVE</span>
        </div>
      </div>

      {/* Main Masthead Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#0c0d10]/98 backdrop-blur-md border-white/10 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-[#0c0d10]/90 backdrop-blur-sm border-white/[0.07] py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram & Official Crest */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#8b1528]/80 bg-[#0c0d10] p-0.5 overflow-hidden group-hover:border-[#b81e36] transition-colors shadow-lg shrink-0">
              <img
                src={logoImg}
                alt="Zero Hour Official Insignia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col truncate">
              <span className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#f7f5f0] uppercase group-hover:text-[#b81e36] transition-colors leading-none truncate">
                Zero Hour
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#8b8882] mt-1 truncate">
                DISCUSS • DEBATE • DISRUPT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-[#c9c5bd] hover:text-[#f7f5f0] hover:border-b border-[#8b1528] py-1 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenJoin}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#8b1528] hover:bg-[#a61c32] text-[#f7f5f0] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 border border-[#b81e36]/40 shadow-lg hover:shadow-red-950/50"
            >
              <span>Join Zero Hour</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions: Compact Join + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenJoin}
              className="px-2.5 py-1.5 bg-[#8b1528] text-white font-mono text-[10px] uppercase tracking-wider font-semibold border border-red-500/40"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#c9c5bd] hover:text-white border border-white/10 bg-[#14161c]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b0e] border-b border-white/15 px-4 sm:px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8b8882] border-b border-white/10 pb-2">
              Navigation Directory
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#ece8e1] hover:text-[#b81e36] font-serif text-lg sm:text-xl tracking-tight py-2.5 border-b border-white/[0.05]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#8b8882]" />
              </a>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="w-full py-3.5 bg-[#8b1528] text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 border border-red-500/30"
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
