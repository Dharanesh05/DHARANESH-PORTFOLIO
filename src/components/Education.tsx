import React from 'react';
import { MapPin, CheckCircle2, FileCheck } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';

export const Education: React.FC = () => {
  return (
    <AnimatedFrame id="education">
      <RevealOnScroll>
        <SectionHeading
          number="05"
          category="ACADEMICS"
          title="Education & Qualifications"
          subtitle="Formal academic grounding in Electronics & Communication Engineering paired with continuous practical application."
        />
      </RevealOnScroll>

      {/* Main Editorial Academic Certificate/Document Card */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Featured Degree Document Card */}
        <RevealOnScroll delay={0.1}>
          <TiltCard className="p-8 sm:p-10 rounded-3xl border border-[#262626] bg-[#111111] shadow-xl shadow-black/40 relative overflow-hidden group hover:border-[#F20D2F] transition-colors">
            {/* Watermark Mark */}
            <div className="absolute -right-8 -bottom-8 opacity-10 text-[#F20D2F] font-serif-editorial text-9xl italic pointer-events-none select-none">
              ECE
            </div>

            <div className="relative z-10 space-y-6">
              {/* Header Badge & ID */}
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#262626] pb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech font-bold bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40">
                  <FileCheck className="w-3.5 h-3.5 text-[#F20D2F]" />
                  <span>OFFICIAL ACADEMIC RECORD</span>
                </div>
                <div className="text-xs font-mono-tech text-[#525252]">
                  BATCH: <span className="text-[#FFFFFF] font-bold">2022 – 2026</span>
                </div>
              </div>

              {/* Main Document Details */}
              <div className="space-y-3">
                <div className="text-xs font-mono-tech text-[#F20D2F] font-bold tracking-widest uppercase">
                  BACHELOR OF ENGINEERING
                </div>
                <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#FFFFFF] leading-tight">
                  B.E. ELECTRONICS AND COMMUNICATION ENGINEERING
                </h3>
                <div className="text-lg font-bold text-[#F20D2F]">
                  VSB ENGINEERING COLLEGE, KARUR
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#525252]">
                  <MapPin className="w-4 h-4 text-[#F20D2F]" />
                  <span className="text-[#FFFFFF]/80">Karur, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626] flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-mono-tech font-bold text-[#FFFFFF]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F20D2F] animate-pulse" />
                  <span>CURRENTLY: 3rd YEAR (ACTIVE PURSUIT)</span>
                </div>
                <span className="text-xs font-mono-tech text-[#F20D2F] font-bold">Specialization: Embedded, AI & Vision</span>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono-tech text-[#525252] uppercase tracking-widest font-bold">
                  Academic Focus & Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#FFFFFF]/90 font-medium">
                  {educationData[0].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#171717] p-3 rounded-xl border border-[#262626]">
                      <CheckCircle2 className="w-4 h-4 text-[#F20D2F] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </RevealOnScroll>

        {/* Secondary School Qualification */}
        <RevealOnScroll delay={0.2}>
          <div className="p-6 rounded-2xl border border-[#262626] bg-[#111111] flex items-center justify-between flex-wrap gap-4 shadow-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono-tech text-[#F20D2F] font-bold uppercase tracking-wider">
                HIGHER SECONDARY EDUCATION (HSC)
              </span>
              <h4 className="text-base font-heading font-bold text-[#FFFFFF]">
                Class XII — State Board Secondary Education
              </h4>
              <p className="text-xs text-[#525252]">Physics, Chemistry, Mathematics, Computer Science • Completed with Distinction</p>
            </div>
            <div className="text-xs font-mono-tech text-[#F20D2F] font-bold bg-[#F20D2F]/20 px-3.5 py-1.5 rounded-xl border border-[#F20D2F]/40">
              2020 – 2022
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </AnimatedFrame>
  );
};
