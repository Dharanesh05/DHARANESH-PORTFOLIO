import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioIntroProps {
  onComplete: () => void;
}

export const PortfolioIntro: React.FC<PortfolioIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'red' | 'black-wipe' | 'done'>('red');

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setPhase('done');
      onComplete();
      return;
    }

    // Cinematic Intro Timeline
    // 0.0s - 1.4s: Vivid Red Screen with Wordmark & Progress Bar
    // 1.4s - 1.9s: Black Wipe Reveal
    // 1.9s: Finish Intro
    const timer1 = setTimeout(() => {
      setPhase('black-wipe');
    }, 1400);

    const timer2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none">
        {/* Phase 1: Vivid Red Intro Screen */}
        {phase === 'red' && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="absolute inset-0 bg-[#F20D2F] flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Ambient Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A8061F] rounded-full blur-[140px] opacity-60" />

            {/* Centered Bold Geometric Wordmark */}
            <div className="relative z-10 flex flex-col items-center space-y-5 px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="flex items-baseline justify-center font-heading text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#FFFFFF] leading-none uppercase"
              >
                <span>DHARANESH R</span>
                <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#080808] ml-2 sm:ml-3 inline-block" />
              </motion.div>

              {/* Thin Progress Loading Line */}
              <div className="w-48 sm:w-64 h-[2px] bg-[#080808]/20 rounded-full overflow-hidden relative mt-4">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="h-full bg-[#FFFFFF]"
                />
              </div>

              {/* Subtitle tag */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[11px] sm:text-xs font-mono-tech uppercase tracking-[0.25em] text-[#FFFFFF] font-bold pt-2"
              >
                FULL STACK PORTFOLIO • '26
              </motion.span>
            </div>
          </motion.div>
        )}

        {/* Phase 2: Cinematic Black Wipe Transition */}
        {phase === 'black-wipe' && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-[#080808] pointer-events-auto flex items-center justify-center"
          >
            <div className="w-16 h-[2px] bg-[#F20D2F] rounded-full animate-pulse" />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
