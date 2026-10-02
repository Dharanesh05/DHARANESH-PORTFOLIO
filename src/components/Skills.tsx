import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Cpu,
  Binary,
  Activity,
  Radio,
  RadioReceiver,
  Globe,
  Microchip,
  Layers,
  FileCode,
  Code,
  Terminal,
  Database,
  Sparkles,
  Bot,
  LineChart,
  Eye,
  MessageSquareCode,
  Server,
  Layout,
  GitBranch,
  Code2,
  Wand2,
  Sparkle,
  Flame,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import type { SkillCategory } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Cpu,
  Binary,
  Activity,
  Waveform: Activity,
  Radio,
  RadioReceiver,
  Globe,
  Microchip,
  Layers,
  FileCode,
  Code,
  Terminal,
  Database,
  Sparkles,
  Bot,
  LineChart,
  Eye,
  MessageSquareCode,
  Server,
  Layout,
  GitBranch,
  Github: GithubIcon,
  Code2,
  Wand2,
  Sparkle,
  Flame,
};

const categories: SkillCategory[] = ['PROGRAMMING'];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'ALL'>('ALL');

  const filteredSkills =
    activeCategory === 'ALL'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40 font-bold';
      case 'Proficient':
        return 'bg-[#171717] text-[#FFFFFF] border border-[#262626] font-semibold';
      case 'Intermediate':
        return 'bg-[#111111] text-[#525252] border border-[#262626]';
      default:
        return 'bg-[#111111] text-[#525252] border border-[#262626]';
    }
  };

  return (
    <AnimatedFrame id="skills">
      <RevealOnScroll>
        <SectionHeading
          number="03"
          category="TECHNICAL SKILLS"
          title="Skills & Competencies"
          subtitle="Core Hardware & Software stack spanning ECE Microcontrollers, Generative AI, Full-Stack Web Development, and Enterprise Tools."
        />
      </RevealOnScroll>

      <RevealOnScroll delay={0.08}>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer ${activeCategory === 'ALL'
                ? 'bg-[#F20D2F] text-[#FFFFFF] shadow-md'
                : 'bg-[#111111] text-[#525252] border border-[#262626] hover:text-[#FFFFFF] hover:border-[#F20D2F]'
              }`}
          >
            ALL SKILLS ({skillsData.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer ${activeCategory === cat
                  ? 'bg-[#F20D2F] text-[#FFFFFF] shadow-md'
                  : 'bg-[#111111] text-[#525252] border border-[#262626] hover:text-[#FFFFFF] hover:border-[#F20D2F]'
                }`}
            >
              {cat} ({skillsData.filter((s) => s.category === cat).length})
            </button>
          ))}
        </div>
      </RevealOnScroll>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence>
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Cpu;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20, scale: 0.94, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, scale: 0.94, filter: 'blur(4px)' }}
                transition={{ type: 'spring', stiffness: 200, damping: 18, delay: index * 0.02 }}
                key={skill.name}
              >
                <TiltCard className="rounded-[1.5rem] border border-[#262626] bg-[#111111] hover:border-[#F20D2F] p-5 shadow-xl shadow-black/40 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#F20D2F]/20 border border-[#F20D2F]/40 flex items-center justify-center text-[#F20D2F]">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech ${getLevelBadge(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-heading font-bold text-[#FFFFFF]">{skill.name}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#525252]">{skill.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono-tech uppercase tracking-wider text-[#525252]">
                    <span>{skill.category}</span>
                    <span className="text-[#F20D2F] font-bold">ACTIVE</span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </AnimatedFrame>
  );
};
