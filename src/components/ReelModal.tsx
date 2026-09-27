import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Film, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  const currentProject = projectsData[activeProjectIdx] || projectsData[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#080808]/95 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="relative z-10 w-full max-w-5xl rounded-3xl border border-[#F20D2F]/30 bg-[#080808] p-6 sm:p-8 shadow-2xl shadow-[#F20D2F]/10 overflow-hidden flex flex-col gap-6"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#262626] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F20D2F] flex items-center justify-center text-[#FFFFFF] shadow-md">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-extrabold text-[#FFFFFF] flex items-center gap-2">
                  <span>DHARANESH R — SHOWCASE REEL</span>
                  <span className="w-2 h-2 rounded-full bg-[#F20D2F] animate-ping inline-block" />
                </h3>
                <p className="text-xs font-mono-tech text-[#F20D2F] font-bold">
                  PROJECT REEL • ECE & AI DEMONSTRATIONS
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#171717] hover:bg-[#F20D2F] text-[#FFFFFF] border border-[#262626] hover:border-[#F20D2F] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Reel Display Player Screen */}
          <div className="relative aspect-video rounded-2xl bg-[#111111] border border-[#262626] overflow-hidden flex flex-col justify-between p-6 group">
            {/* Screen Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#F20D2F]/10 z-0 pointer-events-none" />

            {/* Top Reel Info Bar */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech font-bold text-[#FFFFFF]/80">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080808]/80 border border-[#F20D2F]/40 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F20D2F]" />
                <span>REEL REVEAL: 0{activeProjectIdx + 1} / 0{projectsData.length}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-lg bg-[#080808]/80 hover:bg-[#F20D2F] text-[#FFFFFF] border border-[#262626] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="px-2.5 py-1 rounded-md bg-[#F20D2F] text-[#FFFFFF] text-[10px] font-bold uppercase">
                  HD 1080P
                </span>
              </div>
            </div>

            {/* Center Content Display */}
            <div className="relative z-10 max-w-2xl space-y-3 my-auto">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono-tech font-bold uppercase bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40">
                {currentProject.category.join(' • ')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#FFFFFF] leading-tight">
                {currentProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed line-clamp-2">
                {currentProject.description}
              </p>
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-10 flex items-center justify-between border-t border-[#262626] pt-4 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F20D2F] hover:bg-[#A8061F] text-[#FFFFFF] text-xs font-bold transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  <span>{isPlaying ? 'PAUSE REEL' : 'PLAY REEL'}</span>
                </button>

                <span className="text-xs font-mono-tech text-[#525252]">
                  {currentProject.technologies.slice(0, 3).join(', ')}
                </span>
              </div>

              {/* Reel Selector Tabs */}
              <div className="flex items-center gap-2">
                {projectsData.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech font-bold transition-colors cursor-pointer ${
                      activeProjectIdx === idx
                        ? 'bg-[#FFFFFF] text-[#080808]'
                        : 'bg-[#171717] text-[#525252] hover:text-[#FFFFFF] border border-[#262626]'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
