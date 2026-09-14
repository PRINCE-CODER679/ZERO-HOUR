import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, QrCode, CheckCircle2, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/images/zero_hour_logo.jpg';
import qrImg from '../assets/images/registration_qr.png';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSecQG1bBEJ8Azmg51KRRbZ9ZEv1xmRu_sX37W1IMLRmRHsIBg/viewform";

export default function JoinModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white border border-slate-200 p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto shadow-2xl rounded-md"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-sm"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="border-b border-slate-100 pb-5 mb-6 flex items-start gap-4">
            <div className="w-12 h-12 border border-slate-200 bg-white p-0.5 shrink-0 overflow-hidden shadow-sm rounded-sm">
              <img
                src={logoImg}
                alt="Zero Hour Seal"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#751a22] font-bold mb-0.5">
                ZERO HOUR // DISCUSS • DEBATE • IMPACT
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0f172a] uppercase font-bold">
                Cohort 2026 Registration
              </h2>
              <p className="font-sans text-xs text-slate-500 mt-1">
                Official registration is managed exclusively through the Zero Hour Google Form.
              </p>
            </div>
          </div>

          {/* Main QR Code & Google Form Pass Card */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-50 border border-slate-200 rounded-md">
              {/* QR Code Container with Scanner Corners */}
              <div className="relative p-3 bg-white border border-slate-200 shadow-md rounded-md shrink-0">
                <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#751a22]"></div>
                <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#751a22]"></div>
                <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#751a22]"></div>
                <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#751a22]"></div>

                <img
                  src={qrImg}
                  alt="Zero Hour Registration QR"
                  className="w-44 h-44 object-contain rounded"
                />
              </div>

              {/* Instructions & Details */}
              <div className="space-y-3 text-center sm:text-left flex-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#751a22] font-bold uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded-sm">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Scan with phone camera</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#0f172a]">
                  Scan or Open Form
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Point your camera at the QR code to open the form directly on your mobile device, or click below to open in a new tab.
                </p>

                <div className="pt-1">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-[#751a22] hover:bg-[#8f202a] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-md rounded-sm transition-all group"
                  >
                    <span>Open Google Form</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Verification & Trust Notes */}
            <div className="border-t border-slate-100 pt-4 space-y-2 font-mono text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Official Google Form for Cohort 2026 Candidates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#751a22] shrink-0" />
                <span>Open to all colleges, universities, and disciplines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#751a22] shrink-0" />
                <span>Candidates notified via institutional email following review</span>
              </div>
            </div>

            {/* Footer Close */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-mono text-slate-400 hover:text-slate-700 underline underline-offset-4"
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
