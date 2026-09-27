import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, Cpu, Code2, Award } from 'lucide-react';
import { internshipsData } from '../data/portfolioData';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';

export const Internships: React.FC = () => {
  return (
    <AnimatedFrame id="experience">
      <RevealOnScroll>
        <SectionHeading
          number="06"
          category="EXPERIENCE"
          title="Completed Internships"
          subtitle="Industry-integrated training spanning embedded microcontrollers, IoT telemetry, low-code enterprise automation, and BPM architectures."
        />
      </RevealOnScroll>

      {/* Internships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {internshipsData.map((intern, index) => (
          <RevealOnScroll key={intern.id} delay={index * 0.15}>
            <TiltCard className="p-8 rounded-3xl relative flex flex-col justify-between border border-[#262626] bg-[#111111] hover:border-[#F20D2F] shadow-xl shadow-black/40 group h-full transition-colors">
              <div className="space-y-6">
                {/* Company Header */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-[#F20D2F]/20 border border-[#F20D2F]/40 flex items-center justify-center text-[#F20D2F] group-hover:scale-105 transition-transform shadow-xs">
                      {index === 0 ? <Cpu className="w-7 h-7 text-[#F20D2F]" /> : <Code2 className="w-7 h-7 text-[#F20D2F]" />}
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech font-bold bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40">
                        {intern.type}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mt-1 group-hover:text-[#F20D2F] transition-colors">
                        {intern.title}
                      </h3>
                      <p className="text-xs font-bold text-[#F20D2F] font-mono-tech mt-0.5">
                        {intern.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#525252] font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#F20D2F]" />
                    <span>{intern.duration}</span>
                  </div>
                </div>

                {/* Period & Certificate ID */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-xl bg-[#171717] border border-[#262626] text-xs font-mono-tech text-[#525252] shadow-xs">
                  <div>
                    <span className="text-[#525252]">Timeline:</span> <span className="text-[#FFFFFF] font-bold">{intern.period}</span>
                  </div>
                  {intern.certId && (
                    <div>
                      <span className="text-[#F20D2F] font-bold">Cert ID:</span> <span className="text-[#FFFFFF] font-bold">{intern.certId}</span>
                    </div>
                  )}
                </div>

                {/* Recognized By Badge if present */}
                {intern.recognizedBy && (
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#F20D2F] font-bold bg-[#F20D2F]/20 p-2.5 rounded-xl border border-[#F20D2F]/40">
                    <Award className="w-4 h-4 text-[#F20D2F] shrink-0" />
                    <span>{intern.recognizedBy}</span>
                  </div>
                )}

                {/* Key Highlights */}
                {intern.highlights && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono-tech text-[#525252] uppercase tracking-wider font-bold">
                      Work Highlights & Scope
                    </h4>
                    <ul className="space-y-1.5">
                      {intern.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#FFFFFF]/90 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#F20D2F] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills Acquired */}
                <div>
                  <h4 className="text-[11px] font-mono-tech text-[#525252] uppercase mb-2 font-bold">
                    Key Skills Acquired
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {intern.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono-tech bg-[#171717] text-[#FFFFFF] border border-[#262626] font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#F20D2F] flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#F20D2F]" />
                  Verified Completion Certificate
                </span>
                <span className="text-[#525252] font-medium">{intern.duration}</span>
              </div>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </AnimatedFrame>
  );
};
