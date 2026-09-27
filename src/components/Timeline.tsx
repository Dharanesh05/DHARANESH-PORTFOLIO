import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Rocket, Code2 } from 'lucide-react';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionHeading } from './SectionHeading';

interface Stage {
  year: string;
  phase: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const stages: Stage[] = [
  {
    year: '2024',
    phase: 'FOUNDATION',
    subtitle: 'Core Electronics & Programming Principles',
    icon: Cpu,
    highlights: [
      'Mastered Circuit Analysis, Digital & Analog Electronics',
      'Engineered C/C++ embedded drivers & Microcontroller logic',
      'Built early software applications & algorithmic data structures',
    ],
  },
  {
    year: '2025',
    phase: 'EXPLORATION',
    subtitle: 'Machine Learning, Computer Vision & Cloud AI',
    icon: Code2,
    highlights: [
      'Built Semiconductor Microscopy Image Restoration pipeline (SSIM 0.92)',
      'Earned TCS iON & GUVI Generative AI & Prompt Engineering certifications',
      'Engineered JARVIS voice assistant with low-latency conversational AI',
    ],
  },
  {
    year: '2026',
    phase: 'BUILDING',
    subtitle: 'Autonomous AI Agents & Enterprise Systems',
    icon: Rocket,
    highlights: [
      'Engineered Intelligent IDP Career Recommender (Gemini API)',
      'Completed Embedded IoT Internship (Vaidsys) & Pegasystems BPM Automation',
      'Selected Competitor in QuizOff 2026 India AI Quiz (5.25L+ Students)',
    ],
  },
];

export const Timeline: React.FC = () => {
  return (
    <AnimatedFrame id="journey">
      <RevealOnScroll>
        <SectionHeading
          number="02"
          category="EVOLUTION"
          title="Engineering & AI Journey"
          subtitle="Progressive milestone timeline tracking academic growth, technical specialization, and real-world project deployments."
        />
      </RevealOnScroll>

      {/* Responsive Horizontal Desktop Timeline / Vertical Mobile Timeline */}
      <div className="max-w-6xl mx-auto mt-8">
        
        {/* Desktop Horizontal View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
          {/* Horizontal Connecting Laser Line */}
          <div className="absolute top-12 left-10 right-10 h-0.5 bg-[#F20D2F]/40 z-0" />

          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <RevealOnScroll key={stage.year} delay={index * 0.15}>
                <div className="relative z-10 space-y-4">
                  {/* Timeline Header Badge & Year */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#F20D2F]/20 border-2 border-[#F20D2F] flex items-center justify-center text-[#F20D2F] shadow-lg mb-3">
                      <Icon className="w-7 h-7 text-[#F20D2F]" />
                    </div>
                    <span className="text-2xl font-serif-editorial italic font-bold text-[#FFFFFF]">
                      {stage.year}
                    </span>
                    <span className="text-xs font-mono-tech font-bold text-[#F20D2F] uppercase tracking-widest">
                      {stage.phase}
                    </span>
                  </div>

                  {/* Stage Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="p-6 rounded-2xl border border-[#262626] bg-[#111111] hover:border-[#F20D2F] shadow-xl shadow-black/40 space-y-3 min-h-[220px] transition-colors cursor-pointer"
                  >
                    <p className="text-xs font-mono-tech text-[#F20D2F] font-bold border-b border-[#262626] pb-2">
                      {stage.subtitle}
                    </p>
                    <ul className="space-y-2 text-xs text-[#525252]">
                      {stage.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#F20D2F] font-bold">•</span>
                          <span className="text-[#FFFFFF]/90">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Mobile Vertical View */}
        <div className="md:hidden space-y-8 relative pl-6 border-l-2 border-[#F20D2F]/40">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <RevealOnScroll key={stage.year} delay={index * 0.15}>
                <div className="relative space-y-3">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-[#F20D2F]/20 border-2 border-[#F20D2F] flex items-center justify-center text-[#F20D2F]">
                    <Icon className="w-3 h-3 text-[#F20D2F]" />
                  </div>

                  <div>
                    <span className="text-xl font-serif-editorial italic font-bold text-[#FFFFFF] mr-2">
                      {stage.year}
                    </span>
                    <span className="text-xs font-mono-tech font-bold text-[#F20D2F] uppercase tracking-widest">
                      {stage.phase}
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl border border-[#262626] bg-[#111111] space-y-2 shadow-xs">
                    <p className="text-xs font-mono-tech text-[#F20D2F] font-bold border-b border-[#262626] pb-1.5">
                      {stage.subtitle}
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#525252]">
                      {stage.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#F20D2F] font-bold">•</span>
                          <span className="text-[#FFFFFF]/90">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </AnimatedFrame>
  );
};
