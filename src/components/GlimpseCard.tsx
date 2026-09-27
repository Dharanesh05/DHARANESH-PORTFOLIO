import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Sparkles, Cpu } from 'lucide-react';

export const GlimpseCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Controlled, smooth spring config for subtle 3D tilt
  const springConfig = { stiffness: 200, damping: 22 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  useEffect(() => {
    springX.set(rotateX);
    springY.set(rotateY);
  }, [rotateX, rotateY, springX, springY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Controlled 3D tilt angles (max ~6 degrees)
    setRotateX(-mouseY * 8);
    setRotateY(mouseX * 8);

    // Spotlight cursor position percentage
    const spotX = ((e.clientX - rect.left) / width) * 100;
    const spotY = ((e.clientY - rect.top) / height) * 100;
    setSpotlightPos({ x: spotX, y: spotY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Floating tech tags around the profile card
  const chips = [
    { label: 'ECE', top: '5%', left: '-5%', delay: 0 },
    { label: 'AI & ML', top: '12%', right: '-4%', delay: 0.2 },
    { label: 'PYTHON', bottom: '30%', left: '-6%', delay: 0.4 },
    { label: 'SOFTWARE', bottom: '10%', right: '-4%', delay: 0.6 },
    { label: 'HARDWARE', top: '52%', right: '-6%', delay: 0.8 },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-[38rem] py-4 select-none">
      {/* Floating Tech Chips around image card */}
      {chips.map((chip) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 3.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: chip.delay,
            },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          style={{
            top: chip.top,
            left: chip.left,
            right: chip.right,
            bottom: chip.bottom,
          }}
          className="absolute z-30 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#E7E5E4] text-[#171717] text-[11px] font-mono-tech font-bold shadow-md shadow-black/5 hover:border-[#EA580C] hover:scale-105 transition-all cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
          <span>{chip.label}</span>
        </motion.div>
      ))}

      {/* Main Editorial Image Card with 3D Tilt */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1200,
          rotateX: springX,
          rotateY: springY,
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        className="relative z-10 rounded-3xl bg-[#FFFFFF] border border-[#E7E5E4] p-3 sm:p-4 shadow-2xl shadow-black/10 overflow-hidden cursor-pointer group"
      >
        {/* Soft Spotlight Background Glow */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-3xl"
          style={{
            background: `radial-gradient(450px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(255, 237, 213, 0.7) 0%, rgba(234, 88, 12, 0.08) 50%, transparent 80%)`,
            opacity: isHovered ? 1 : 0.3,
          }}
        />

        {/* Image Outer Frame & Crop Container */}
        <div className="relative rounded-2xl overflow-hidden bg-[#F5F3EF] border border-[#E7E5E4] aspect-[4/3] sm:aspect-[1.25/1] flex items-center justify-center">
          <img
            src="/assets/dharanesh-profile-hero.png"
            alt="Dharanesh R - ECE Student working in workspace"
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            onError={(e) => {
              // Fallback to root dharanesh-profile-hero.png if assets subfolder fails
              const target = e.target as HTMLImageElement;
              if (target.src !== `${window.location.origin}/dharanesh-profile-hero.png`) {
                target.src = '/dharanesh-profile-hero.png';
              }
            }}
          />

          {/* Subtle Bottom Gradient Overlay for Badge Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/40 via-transparent to-transparent pointer-events-none" />

          {/* Floating Information Badge (Top-Left corner - avoiding face) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#FFFFFF]/90 border border-[#E7E5E4] backdrop-blur-md shadow-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-[#FFEDD5] border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] shrink-0">
              <Cpu className="w-4 h-4 text-[#EA580C]" />
            </div>
            <div>
              <div className="text-xs font-heading font-extrabold text-[#171717] leading-tight">
                DHARANESH R
              </div>
              <div className="text-[10px] font-mono-tech font-bold text-[#EA580C] tracking-wide">
                ECE • AI • SOFTWARE
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Live Telemetry Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171717]/85 border border-white/10 backdrop-blur-md text-[#FFFFFF] text-[11px] font-mono-tech font-bold shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>3RD YEAR ECE • VSB ENGG COLLEGE</span>
          </motion.div>
        </div>

        {/* Card Footer Detail Strip */}
        <div className="mt-3 pt-2 px-1 flex items-center justify-between text-xs font-mono-tech text-[#525252]">
          <span className="font-bold text-[#171717]">INNOVATION & HARDWARE SOLUTIONS</span>
          <span className="text-[#EA580C] font-semibold">EST. 2026</span>
        </div>
      </motion.div>
    </div>
  );
};

