import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedFrameProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  glowColor?: 'emerald' | 'cyan' | 'teal';
}

export const AnimatedFrame: React.FC<AnimatedFrameProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`py-12 sm:py-20 relative z-10 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-1 overflow-hidden bg-[#111111] border border-[#262626] shadow-2xl shadow-black/50">
          {/* Moving Red laser beam */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F20D2F] to-transparent opacity-90 pointer-events-none"
          />

          <div className="relative rounded-[22px] p-6 sm:p-10 lg:p-12 bg-[#080808]/90 overflow-hidden">
            {/* Corner Accent Symbols */}
            <div className="absolute top-4 left-4 text-[#F20D2F]/50 text-xs font-mono-tech select-none pointer-events-none">✦</div>
            <div className="absolute top-4 right-4 text-[#F20D2F]/50 text-xs font-mono-tech select-none pointer-events-none">✦</div>
            <div className="absolute bottom-4 left-4 text-[#F20D2F]/50 text-xs font-mono-tech select-none pointer-events-none">✦</div>
            <div className="absolute bottom-4 right-4 text-[#F20D2F]/50 text-xs font-mono-tech select-none pointer-events-none">✦</div>

            <div className="relative z-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

