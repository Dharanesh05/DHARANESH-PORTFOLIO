import React from 'react';
import { motion } from 'framer-motion';

export const HeroImage: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-[38rem]">
      {/* Background Soft Glow Motion */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute -inset-2 bg-gradient-to-r from-[#EA580C]/20 via-[#FFEDD5] to-[#EA580C]/10 rounded-[2.5rem] blur-xl z-0 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.95, filter: 'blur(8px)' }}
        animate={{
          opacity: 1,
          y: [0, -6, 0],
          scale: 1,
          filter: 'blur(0px)',
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
          opacity: { duration: 0.8, delay: 0.15 },
          scale: { duration: 0.8, delay: 0.15 },
          filter: { duration: 0.8, delay: 0.15 },
        }}
        whileHover={{
          scale: 1.02,
          transition: { type: 'spring', stiffness: 300, damping: 18 },
        }}
        className="relative z-10 rounded-3xl p-4 bg-[#FFFFFF] border border-[#E7E5E4] shadow-xl shadow-black/5 flex flex-col gap-3 group hover:border-[#EA580C] transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between px-2 text-xs font-mono-tech font-bold text-[#EA580C]">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFEDD5] border border-[#EA580C]/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]"></span>
            </span>
            <span>AVAILABLE FOR PROJECTS</span>
          </motion.div>
          <span className="text-[#525252] text-[10px]">ECE / AI / WEB</span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#E7E5E4] bg-[#F5F3EF]">
          <img
            src="/images/hero_bg.jpg"
            alt="Dharanesh R wearing headset while working on a MacBook"
            className="w-full h-auto object-contain max-h-[500px] block rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <div className="flex items-center justify-between px-2 pt-1 text-[11px] font-mono-tech font-bold text-[#525252] border-t border-[#E7E5E4]">
          <span>DHARANESH R</span>
          <span className="text-[#EA580C]">UI / AI / ENGINEERING</span>
        </div>
      </motion.div>
    </div>
  );
};
