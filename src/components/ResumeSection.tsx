import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Sparkles, ArrowRight } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-12 sm:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl border border-[#262626] bg-[#111111] relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl shadow-black/50"
        >
          {/* Background Soft Accent Glow */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#F20D2F]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#A8061F]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F20D2F]/20 border border-[#F20D2F]/40 text-xs font-mono-tech text-[#F20D2F] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#F20D2F]" />
              <span>CAREER & COLLABORATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              Let's build something <span className="text-[#F20D2F]">impactful.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#525252] max-w-2xl mx-auto leading-relaxed font-medium">
              Interested in working together, collaborating on a project, or discussing an engineering opportunity?
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-[#FFFFFF] bg-[#F20D2F] hover:bg-[#A8061F] rounded-full shadow-md cursor-pointer transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-[#FFFFFF] hover:text-[#F20D2F] bg-[#171717] rounded-full border border-[#262626] hover:border-[#F20D2F] transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-[#F20D2F]" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-[#F20D2F]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
