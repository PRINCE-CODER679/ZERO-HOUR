import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import logoImg from '../assets/images/zero_hour_logo.jpg';

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: '',
    discipline: 'Engineering & Technology',
    yearOfStudy: '2nd Year',
    primaryDomain: '01 — Diplomacy & MUN',
    statement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#0c0d10] border border-white/[0.12] p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#8b8882] hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="border-b border-white/[0.08] pb-6 mb-8 flex items-start gap-4">
                <div className="w-12 h-12 border border-[#8b1528]/80 bg-[#14161f] p-0.5 shrink-0 overflow-hidden shadow-lg">
                  <img
                    src={logoImg}
                    alt="Zero Hour Seal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8b8882] mb-1">
                    ZERO HOUR // DISCUSS • DEBATE • DISRUPT
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#f7f5f0] uppercase font-normal">
                    Enter The Crucible
                  </h2>
                  <p className="font-sans text-xs text-[#8b8882] mt-1">
                    Membership selection is meritocratic, evaluated on analytical clarity and intellectual intent.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8b8882] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-4 py-2.5 bg-[#121419] border border-white/[0.1] text-white font-sans text-sm focus:border-[#8b1528] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8b8882] mb-2">
                      Institutional Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="institutional@domain.edu"
                      className="w-full px-4 py-2.5 bg-[#121419] border border-white/[0.1] text-white font-sans text-sm focus:border-[#8b1528] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8b8882] mb-2">
                      Institution
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="University / College"
                      className="w-full px-4 py-2.5 bg-[#121419] border border-white/[0.1] text-white font-sans text-sm focus:border-[#8b1528] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8b8882] mb-2">
                      Academic Field
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121419] border border-white/[0.1] text-white font-sans text-sm focus:border-[#8b1528] focus:outline-none transition-colors"
                    >
                      <option>Engineering & Technology</option>
                      <option>Law & Jurisprudence</option>
                      <option>Economics & Commerce</option>
                      <option>Humanities & Social Sciences</option>
                      <option>Medicine & Bioethics</option>
                      <option>Public Policy & Governance</option>
                      <option>Other Field</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8b8882] mb-2">
                      Year of Study
                    </label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#121419] border border-white/[0.1] text-white font-sans text-sm focus:border-[#8b1528] focus:outline-none transition-colors"
                    >
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th / Final Year</option>
                      <option>Postgraduate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8b8882] mb-2">
                    Primary Domain Alignment
                  </label>
                  <select
                    value={formData.primaryDomain}
                    onChange={(e) => setFormData({ ...formData, primaryDomain: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#121419] border border-white/[0.1] text-white font-sans text-sm focus:border-[#8b1528] focus:outline-none transition-colors"
                  >
                    <option>01 — Diplomacy & Model United Nations</option>
                    <option>02 — Debate & Discourse</option>
                    <option>03 — Public Policy</option>
                    <option>04 — Civil Services & Administration</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8b8882] mb-2">
                    Statement of Intent
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    placeholder="Briefly state why you seek experiential public-affairs training and the intellectual questions that interest you."
                    className="w-full px-4 py-2.5 bg-[#121419] border border-white/[0.1] text-white font-sans text-sm focus:border-[#8b1528] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#8b8882] uppercase tracking-wider">
                    Blind Evaluation Standard
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 bg-[#8b1528] hover:bg-[#a61c32] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all border border-[#8b1528]"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8b1528]">
                CONFIRMATION OF RECEIPT
              </div>
              
              <h3 className="font-serif text-3xl sm:text-4xl text-[#f7f5f0] uppercase font-normal">
                Application Received.
              </h3>

              <p className="font-sans text-sm text-[#8b8882] max-w-md mx-auto leading-relaxed">
                Your dossier has been registered with the Zero Hour Secretariat. Candidates selected for initial interviews will be contacted via their institutional email address.
              </p>

              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] text-white font-mono text-xs uppercase tracking-wider border border-white/15 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
