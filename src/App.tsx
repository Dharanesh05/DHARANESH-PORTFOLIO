import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Education } from './components/Education';
import { Internships } from './components/Internships';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PortfolioIntro } from './components/PortfolioIntro';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717] font-sans relative selection:bg-[#EA580C] selection:text-[#FFFFFF]">
      {/* Cinematic Intro Sequence */}
      {!isIntroComplete && (
        <PortfolioIntro onComplete={() => setIsIntroComplete(true)} />
      )}

      {/* Top Navigation Bar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 space-y-4">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />          {/* 01 */}
        <Timeline />       {/* 02 */}
        <Skills />         {/* 03 */}
        <Projects />       {/* 04 */}
        <Education />      {/* 05 */}
        <Internships />    {/* 06 */}
        <Achievements />   {/* 07 */}
        <Certifications /> {/* 08 */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact />        {/* 09 */}
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};


export default App;
