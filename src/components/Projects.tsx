import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { ProjectCategory, Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';

const categories: ProjectCategory[] = ['All', 'AI', 'ECE', 'Software', 'Computer Vision'];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category.includes(activeCategory));

  return (
    <AnimatedFrame id="projects">
      <RevealOnScroll>
        <SectionHeading
          number="04"
          category="SELECTED WORK"
          title="Featured Projects"
          subtitle="Architected engineering and AI applications built across Computer Vision, Autonomous Agents, and Systems."
        />
      </RevealOnScroll>

      <RevealOnScroll delay={0.08}>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#F20D2F] text-[#FFFFFF] shadow-md'
                  : 'bg-[#111111] text-[#525252] border border-[#262626] hover:text-[#FFFFFF] hover:border-[#F20D2F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      <motion.div layout className="grid gap-7 lg:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(6px)' }}
              transition={{ type: 'spring', stiffness: 180, damping: 18, delay: idx * 0.05 }}
              key={project.id}
            >
              <TiltCard className="rounded-[1.7rem] border border-[#262626] bg-[#111111] hover:border-[#F20D2F] p-6 text-left shadow-xl shadow-black/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between text-[11px] font-mono-tech font-bold uppercase tracking-wider text-[#525252]">
                    <span>PROJECT 0{idx + 1}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40">
                      {project.category[0]}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-extrabold leading-tight text-[#FFFFFF]">{project.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#525252]">{project.description}</p>

                  <div className="mt-4 space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#FFFFFF]/90 font-medium">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F20D2F]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-[#262626] pt-4 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg text-[10px] font-mono-tech font-bold bg-[#171717] text-[#FFFFFF] border border-[#262626]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-1">
                    <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider text-[#525252]">STATUS: DEPLOYED</span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F20D2F]/20 hover:bg-[#F20D2F] text-[#F20D2F] hover:text-[#FFFFFF] text-xs font-mono-tech font-bold transition-colors cursor-pointer border border-[#F20D2F]/40"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </AnimatedFrame>
  );
};
