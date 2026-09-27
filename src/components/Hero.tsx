import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { GlimpseCard } from './GlimpseCard';

interface HeroProps {
  onOpenResumeModal: () => void;
}

// Framer Motion Entrance Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="home" className="relative min-h-[88vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#FAFAF8] text-[#171717]">
      {/* Subtle Engineering Decorative Background (Circuit Lines & Circuit Nodes) */}
      <div className="absolute inset-0 bg-[#FAFAF8] z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#FFEDD5]/60 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#EA580C]/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-grid-animated opacity-20" />

        {/* Subtle Decorative Circuit Background Traces */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800" fill="none">
          <path d="M 100 100 L 400 100 L 500 200 L 900 200" stroke="#E7E5E4" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M 200 650 L 600 650 L 700 550 L 1100 550" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="400" cy="100" r="4" fill="#EA580C" />
          <circle cx="500" cy="200" r="4" fill="#171717" />
          <circle cx="600" cy="650" r="4" fill="#EA580C" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* 2-Column Responsive Desktop Grid / Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Content (45% Width on Desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Small Eyebrow Tag */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFEDD5] border border-[#EA580C]/30 text-xs font-mono-tech text-[#EA580C] font-bold shadow-xs uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]"></span>
                </span>
                <GraduationCap className="w-4 h-4 text-[#EA580C]" />
                <span>3RD YEAR ECE ENGINEERING STUDENT</span>
              </div>
            </motion.div>

            {/* Large Name Heading & Highlighted Tagline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#171717] leading-[1.05] uppercase">
                DHARANESH R
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#171717] leading-snug">
                Turning ideas into{' '}
                <span className="text-[#EA580C]">intelligent engineering solutions.</span>
              </div>

              <p className="text-sm sm:text-base font-mono-tech font-bold text-[#525252] flex items-center gap-2 pt-1">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span>Developer • Learner • Problem Solver</span>
              </p>
            </motion.div>

            {/* Short Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#525252] leading-relaxed font-normal max-w-xl">
              Electronics & Communication Engineering student passionate about Artificial Intelligence, software development, electronics and building practical technology solutions.
            </motion.p>

            {/* Location & Institution Meta */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono-tech text-[#525252] pt-1">
              <span className="flex items-center gap-1.5 text-[#171717] font-semibold">
                <MapPin className="w-4 h-4 text-[#EA580C]" />
                VSB Engineering College, Karur
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#EA580C] font-bold hover:underline">
                <Mail className="w-4 h-4 text-[#EA580C]" />
                <a href="mailto:rdharanesh5@gmail.com">rdharanesh5@gmail.com</a>
              </span>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-3.5">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-extrabold font-mono-tech text-[#FFFFFF] bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-md shadow-[#EA580C]/20 cursor-pointer transition-all"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-extrabold font-mono-tech text-[#171717] bg-[#FFFFFF] hover:bg-[#F5F3EF] rounded-xl border border-[#E7E5E4] cursor-pointer shadow-xs transition-colors"
              >
                <Download className="w-4 h-4 text-[#EA580C]" />
                <span>DOWNLOAD RESUME</span>
              </motion.button>
            </motion.div>

            {/* Social Links Row */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center gap-5 text-[#525252] text-xs font-mono-tech font-semibold">
              <span className="text-[#171717] uppercase tracking-wider text-[11px] font-bold">Connect:</span>
              <motion.a
                whileHover={{ scale: 1.08, color: '#EA580C' }}
                href="https://github.com/Dharanesh05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#525252] hover:text-[#EA580C] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-current" />
                <span>GitHub</span>
              </motion.a>
              <span>•</span>
              <motion.a
                whileHover={{ scale: 1.08, color: '#EA580C' }}
                href="https://www.linkedin.com/in/dharanesh-r-72952a371"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#525252] hover:text-[#EA580C] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-current" />
                <span>LinkedIn</span>
              </motion.a>
              <span>•</span>
              <motion.a
                whileHover={{ scale: 1.08, color: '#EA580C' }}
                href="mailto:rdharanesh5@gmail.com"
                className="flex items-center gap-1.5 text-[#525252] hover:text-[#EA580C] transition-colors"
              >
                <Mail className="w-4 h-4 text-current" />
                <span>Email</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Floating 3D Profile Card around Uploaded Image (55% Width on Desktop) */}
          <div className="lg:col-span-6 w-full flex justify-center items-center relative">
            <GlimpseCard />
          </div>

        </div>
      </div>
    </section>
  );
};


