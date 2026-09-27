import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import type { CertCategory } from '../types/portfolio';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';

const categories: CertCategory[] = [
  'All',
  'AI & Machine Learning',
  'AWS Cloud & AI',
  'Critical Thinking & Ethics',
  'Cybersecurity',
  'Professional Development',
];

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CertCategory>('All');

  const filteredCerts =
    activeCategory === 'All'
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === activeCategory);

  return (
    <AnimatedFrame id="certifications">
      <RevealOnScroll>
        <SectionHeading
          number="08"
          category="CREDENTIALS"
          title="Certifications & Courses"
          subtitle="12 verified credentials across AI & Machine Learning, AWS Cloud & AI, Cybersecurity, Critical Thinking, and Professional Development."
        />
      </RevealOnScroll>

      {/* Category Tabs */}
      <RevealOnScroll delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? certificationsData.length
                : certificationsData.filter((c) => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono-tech transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#F20D2F] text-[#FFFFFF] border-[#F20D2F] shadow-md'
                    : 'bg-[#111111] text-[#525252] border-[#262626] hover:border-[#F20D2F] hover:text-[#FFFFFF]'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </RevealOnScroll>

      {/* Certifications Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCerts.map((cert, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 25, scale: 0.94, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, scale: 0.94, filter: 'blur(6px)' }}
              transition={{ type: 'spring', stiffness: 190, damping: 18, delay: index * 0.03 }}
              key={cert.id}
            >
              <TiltCard className="p-6 rounded-3xl relative flex flex-col justify-between border border-[#262626] bg-[#111111] hover:border-[#F20D2F] shadow-xl shadow-black/40 group h-full transition-colors">
                <div className="space-y-4">
                  {/* Category Pill & Date */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech font-bold bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40">
                      {cert.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono-tech text-[#525252] font-semibold">
                      <Calendar className="w-3 h-3 text-[#F20D2F]" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-base font-heading font-bold text-[#FFFFFF] group-hover:text-[#F20D2F] transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono-tech text-[#F20D2F] mt-1 font-bold">
                      {cert.organization}
                    </p>
                  </div>

                  {/* Cert ID or Serial if available */}
                  {cert.certId && (
                    <div className="text-[11px] font-mono-tech text-[#525252] bg-[#171717] p-2 rounded-xl border border-[#262626] shadow-xs font-semibold">
                      <span className="text-[#525252]">ID / Serial:</span>{' '}
                      <span className="text-[#FFFFFF] font-bold">{cert.certId}</span>
                    </div>
                  )}

                  {/* Signatory / Recognizing Org */}
                  {cert.signatory && (
                    <div className="text-[11px] font-mono-tech text-[#F20D2F] italic font-semibold">
                      Signed by: {cert.signatory}
                    </div>
                  )}
                  {cert.recognizingOrg && (
                    <div className="text-[11px] font-mono-tech text-[#F20D2F] font-bold">
                      {cert.recognizingOrg}
                    </div>
                  )}

                  {/* Skills Gained Tags */}
                  <div>
                    <h4 className="text-[10px] font-mono-tech text-[#525252] uppercase mb-1.5 font-bold">
                      Competencies Covered
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono-tech bg-[#171717] text-[#FFFFFF] border border-[#262626] font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-5 pt-3 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono-tech">
                  <span className="text-[#F20D2F] flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F20D2F]" />
                    Verified Credential
                  </span>
                  <span className="text-[#525252] font-medium">{cert.organization.split(' ')[0]}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatedFrame>
  );
};
