import React from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  duration = 0.65,
  className = '',
  direction = 'up',
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Respect reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialOffset = () => {
    switch (direction) {
      case 'down':
        return { y: -35, x: 0 };
      case 'left':
        return { x: 35, y: 0 };
      case 'right':
        return { x: -35, y: 0 };
      case 'up':
      default:
        return { y: 35, x: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)', ...offset }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, filter: 'blur(0px)', x: 0, y: 0 }
          : { opacity: 0, scale: 0.96, filter: 'blur(6px)', ...offset }
      }
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
