import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FAFAF8]/90 backdrop-blur-2xl border-b border-[#E7E5E4] shadow-sm py-3.5' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo / Wordmark */}
        <a href="#home" className="flex items-center gap-1.5 group">
          <span className="text-xl font-heading font-black tracking-wider text-[#171717] group-hover:text-[#EA580C] transition-colors uppercase">
            DHARANESH R
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] inline-block" />
        </a>

        {/* Desktop Navigation Pills */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#E7E5E4] bg-[#FFFFFF]/90 px-3 py-1.5 backdrop-blur-xl text-xs font-mono-tech font-bold tracking-wider shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full transition-colors ${
                  isActive ? 'text-[#FFFFFF]' : 'text-[#525252] hover:text-[#171717]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-[#EA580C] shadow-xs"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Status Badge */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#EA580C]/30 bg-[#FFEDD5] text-[11px] font-mono-tech font-bold text-[#EA580C] backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]"></span>
            </span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-xl border border-[#E7E5E4] bg-[#FFFFFF] text-[#171717] lg:hidden cursor-pointer shadow-xs"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#EA580C]" /> : <Menu className="w-5 h-5 text-[#171717]" />}
        </button>
      </div>

      {/* Mobile Slide-Down Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-[#E7E5E4] bg-[#FAFAF8]/98 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl border border-[#E7E5E4] bg-[#FFFFFF] text-sm font-mono-tech font-bold text-[#171717] hover:text-[#EA580C] hover:border-[#EA580C] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#E7E5E4]">
                <a
                  href="https://github.com/Dharanesh05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E7E5E4] text-[#171717]"
                >
                  <GithubIcon className="w-4 h-4 text-[#171717]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dharanesh-r-72952a371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E7E5E4] text-[#EA580C]"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#EA580C]" />
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="px-4 py-2.5 text-xs font-mono-tech font-bold text-[#FFFFFF] bg-[#EA580C] hover:bg-[#C2410C] rounded-xl cursor-pointer"
                >
                  RESUME
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
