import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, Zap } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';

const currentFocus = [
  'AI DEVELOPMENT',
  'WEB DEVELOPMENT',
  'ENGINEERING',
  'UI/UX DESIGN',
  'PROBLEM SOLVING',
];

export const About: React.FC = () => {
  return (
    <AnimatedFrame id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: Editorial Number & Section Title */}
        <div className="lg:col-span-4 space-y-4 text-left">
          <RevealOnScroll>
            <SectionHeading
              number="01"
              category="ABOUT"
              title="WHO I AM"
              subtitle="B.E. Electronics & Communication Engineering"
              align="left"
            />
            <p className="text-xs font-mono-tech text-[#525252] -mt-8 font-semibold">
              VSB Engineering College, Karur (2022 – 2026 Batch)
            </p>
          </RevealOnScroll>

          {/* CURRENT FOCUS Panel */}
          <RevealOnScroll delay={0.15}>
            <div className="pt-6 border-t border-[#262626] space-y-3">
              <h4 className="text-xs font-mono-tech text-[#525252] uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#F20D2F]" />
                <span>CURRENT FOCUS</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentFocus.map((focus) => (
                  <motion.span
                    key={focus}
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="px-3 py-1 rounded-lg text-xs font-mono-tech font-bold bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40 cursor-pointer inline-block"
                  >
                    {focus}
                  </motion.span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* RIGHT COLUMN: Professional Bio & Stats */}
        <div className="lg:col-span-8 space-y-8">
          <RevealOnScroll delay={0.1}>
            <div className="p-6 sm:p-10 rounded-3xl border border-[#262626] bg-[#111111] space-y-6 shadow-xl shadow-black/40">
              <div className="flex items-center gap-3 border-b border-[#262626] pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F20D2F]/20 border border-[#F20D2F]/40 flex items-center justify-center text-[#F20D2F]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#FFFFFF]">Engineering & Development Profile</h3>
                  <p className="text-xs font-mono-tech text-[#F20D2F] font-semibold">VSB Engineering College, Karur</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#525252] leading-relaxed font-normal">
                "{personalInfo.bio}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#FFFFFF]/90 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20D2F] shrink-0" />
                  <span>3rd-Year B.E. ECE Undergrad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20D2F] shrink-0" />
                  <span>Hardware-Software Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20D2F] shrink-0" />
                  <span>Generative AI & Agent Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F20D2F] shrink-0" />
                  <span>Computer Vision & Signal Processing</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {statsData.map((stat, index) => (
              <RevealOnScroll key={index} delay={0.2 + index * 0.08}>
                <TiltCard className="p-5 rounded-2xl border border-[#262626] bg-[#111111] hover:border-[#F20D2F] text-center flex flex-col justify-between h-full shadow-xs transition-colors">
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F20D2F]">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-[#FFFFFF] mt-1">{stat.label}</div>
                  </div>
                  <div className="text-[10px] text-[#525252] mt-2 font-mono-tech">{stat.description}</div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>

        </div>

      </div>
    </AnimatedFrame>
  );
};
