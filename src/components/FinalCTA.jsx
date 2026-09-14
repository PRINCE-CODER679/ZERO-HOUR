import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ExternalLink, CheckCircle2 } from 'lucide-react';
import qrImg from '../assets/images/registration_qr.png';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSecQG1bBEJ8Azmg51KRRbZ9ZEv1xmRu_sX37W1IMLRmRHsIBg/viewform";

export default function FinalCTA() {
  return (
    <section id="registration" className="py-20 sm:py-28 bg-[#faf8f5] border-b border-[#e5dfd5] relative overflow-hidden bg-grain">
      {/* Subtle Grid Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#c29236_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header Meta */}
        <div className="inline-flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#5c6776] mb-6 sm:mb-8 border border-[#e5dfd5] px-3 sm:px-4 py-1.5 bg-white shadow-sm font-semibold rounded-full">
          <span className="w-1.5 h-1.5 bg-[#7b1824] rounded-full animate-pulse"></span>
          <span>SECTION 10 // OFFICIAL REGISTRATION</span>
        </div>

        {/* Monumental Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 max-w-5xl mx-auto"
        >
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] text-[#0e141e] uppercase tracking-tighter leading-[0.92] font-normal break-words">
            YOUR TURN<span className="text-[#7b1824]">.</span>
          </h2>

          <div className="py-3 sm:py-5 flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-2 font-serif text-lg sm:text-2xl md:text-3xl text-[#5c6776] uppercase tracking-tight">
            <span>INQUIRY.</span>
            <span className="text-[#7b1824] font-mono text-base sm:text-2xl">/</span>
            <span>SYNTHESIS.</span>
            <span className="text-[#7b1824] font-mono text-base sm:text-2xl">/</span>
            <span>DISCOURSE.</span>
            <span className="text-[#7b1824] font-mono text-base sm:text-2xl">/</span>
            <span>CONCILIATION.</span>
            <span className="text-[#7b1824] font-mono text-base sm:text-2xl">/</span>
            <span>ARBITRATION.</span>
            <span className="text-[#7b1824] font-mono text-base sm:text-2xl">/</span>
            <span className="text-[#7b1824] font-bold">STEWARDSHIP.</span>
          </div>

          <p className="font-sans text-sm sm:text-base md:text-lg text-[#5c6776] max-w-2xl mx-auto leading-relaxed px-2">
            The next cohort is being assembled. Scan the official registration QR code below or open the Google Form directly to submit your application.
          </p>
        </motion.div>

        {/* Dedicated QR Code Registration Pass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 sm:mt-16 max-w-3xl mx-auto bg-white border-2 border-[#e5dfd5] p-6 sm:p-10 shadow-2xl rounded-md text-left relative overflow-hidden ring-1 ring-[#c29236]/20"
        >
          {/* Top Decorative Header Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7b1824] via-[#9e2333] to-[#c29236]" />

          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left: Registration QR Code with Scanner Brackets */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative p-3 bg-[#faf8f5] border border-[#e5dfd5] shadow-md rounded-md group">
                {/* Corner Scanner Bracket Accents */}
                <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#7b1824]"></div>
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#7b1824]"></div>
                <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#7b1824]"></div>
                <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#7b1824]"></div>
                
                <img
                  src={qrImg}
                  alt="Zero Hour Official Registration QR Code"
                  className="w-44 h-44 sm:w-52 sm:h-52 object-contain rounded"
                />
              </div>

              <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-[#5c6776] uppercase tracking-wider font-semibold">
                <QrCode className="w-3.5 h-3.5 text-[#7b1824]" />
                <span>Scan with phone camera</span>
              </div>
            </div>

            {/* Right: Registration Information & Direct Action Button */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#7b1824]/10 text-[#7b1824] font-mono text-[10px] uppercase tracking-widest font-bold rounded-sm mb-2 border border-[#7b1824]/20">
                  <span>COHORT 2026</span>
                  <span>•</span>
                  <span>OFFICIAL APPLICATION PASS</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0e141e] font-bold uppercase tracking-tight">
                  Scan To Register Instantly
                </h3>
                <p className="text-xs sm:text-sm text-[#5c6776] font-sans leading-relaxed mt-1">
                  Point your smartphone camera at the QR code to open the official Zero Hour Registration Form, or click the direct button below.
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 font-mono text-xs text-[#3e4856] border-t border-b border-[#e5dfd5] py-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7b1824] shrink-0" />
                  <span>Meritocratic evaluation for all academic disciplines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7b1824] shrink-0" />
                  <span>Direct submission to the Zero Hour Secretariat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7b1824] shrink-0" />
                  <span>Immediate confirmation upon application receipt</span>
                </li>
              </ul>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 bg-[#7b1824] hover:bg-[#921d2c] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2 rounded-sm group text-center border border-[#540e17]"
                >
                  <span>Open Official Google Registration Form</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Archival Footnote */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#e5dfd5] flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-xs font-mono text-[#7a8595] max-w-4xl mx-auto">
          <span>COHORT 2026 // OPEN APPLICANT EVALUATION</span>
          <span className="text-[#7b1824] font-semibold">MERITOCRATIC SELECTION MANDATE</span>
        </div>

      </div>
    </section>
  );
}
