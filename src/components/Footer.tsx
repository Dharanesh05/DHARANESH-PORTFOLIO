import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#262626] bg-[#080808] py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-heading font-extrabold tracking-wider text-[#FFFFFF] flex items-center justify-center md:justify-start gap-1">
              DHARANESH R<span className="w-1.5 h-1.5 rounded-full bg-[#F20D2F]"></span>
            </h3>
            <p className="mt-1 text-xs font-mono-tech text-[#F20D2F] font-bold tracking-widest uppercase">
              ECE ENGINEERING STUDENT
            </p>
            <p className="mt-1 text-xs font-mono-tech text-[#A3A3A3] font-medium">
              DEVELOPER • LEARNER • PROBLEM SOLVER
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono-tech font-bold text-[#A3A3A3]">
            <a href="#home" className="hover:text-[#F20D2F] transition-colors">HOME</a>
            <a href="#about" className="hover:text-[#F20D2F] transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-[#F20D2F] transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-[#F20D2F] transition-colors">PROJECTS</a>
            <a href="#journey" className="hover:text-[#F20D2F] transition-colors">JOURNEY</a>
            <a href="#education" className="hover:text-[#F20D2F] transition-colors">EDUCATION</a>
            <a href="#certifications" className="hover:text-[#F20D2F] transition-colors">CERTIFICATIONS</a>
            <a href="#contact" className="hover:text-[#F20D2F] transition-colors">CONTACT</a>
          </div>

          {/* Social Icons & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#111111] border border-[#262626] text-[#FFFFFF] hover:border-[#F20D2F] hover:text-[#F20D2F] transition-colors shadow-xs"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-[#FFFFFF]" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#111111] border border-[#262626] text-[#FFFFFF] hover:border-[#F20D2F] hover:text-[#F20D2F] transition-colors shadow-xs"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-[#F20D2F]" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-[#111111] border border-[#262626] text-[#FFFFFF] hover:border-[#F20D2F] hover:text-[#F20D2F] transition-colors shadow-xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-[#F20D2F]" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#111111] border border-[#262626] text-[#A3A3A3] hover:text-[#F20D2F] hover:border-[#F20D2F] transition-colors cursor-pointer shadow-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#F20D2F]" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#262626] pt-6 text-xs font-mono-tech text-[#737373]">
          <span>© 2026 DHARANESH R</span>
          <span>PREMIUM CINEMATIC DEVELOPER PORTFOLIO</span>
        </div>
      </div>
    </footer>
  );
};

