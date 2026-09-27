import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-[#111111] border border-[#262626] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-[#FFFFFF]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#262626] bg-[#181818] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F20D2F]/10 border border-[#F20D2F]/30 flex items-center justify-center text-[#F20D2F]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-[#FFFFFF]">
                  Resume Preview • {personalInfo.name}
                </h3>
                <p className="text-xs font-mono-tech text-[#F20D2F] font-bold">
                  Electronics & Communication Engineering Undergrad
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#A3A3A3] hover:text-[#FFFFFF] bg-[#262626] hover:bg-[#333333] rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Resume Summary Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-xs sm:text-sm">
            
            {/* Header info card */}
            <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#262626] space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl font-heading font-extrabold text-[#FFFFFF]">{personalInfo.name}</h2>
                <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-bold bg-[#F20D2F]/10 text-[#F20D2F] border border-[#F20D2F]/30">
                  {personalInfo.year} ECE
                </span>
              </div>
              <p className="text-[#F20D2F] font-bold">{personalInfo.college}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-[#A3A3A3] pt-1 font-semibold">
                <span>Email: {personalInfo.email}</span>
                <span>Phone: {personalInfo.phone}</span>
                <span>Location: {personalInfo.location}</span>
              </div>
            </div>

            {/* Objective */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-[#FFFFFF] text-base border-b border-[#262626] pb-1">
                Career Objective
              </h4>
              <p className="text-[#A3A3A3] leading-relaxed font-medium">
                Motivated 3rd-Year ECE student aspiring to build cutting-edge hardware-software systems, machine learning applications, and autonomous AI agents for placement and engineering internship opportunities.
              </p>
            </div>

            {/* Core Skills Overview */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-[#FFFFFF] text-base border-b border-[#262626] pb-1">
                Technical Skill Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A3A3A3] font-medium">
                <div>
                  <strong className="text-[#FFFFFF]">ECE Core:</strong> Circuit Analysis, EDC, Digital Electronics, DSP, Satellite Comm, Microcontrollers.
                </div>
                <div>
                  <strong className="text-[#FFFFFF]">Programming:</strong> Python, Java, C, C++, SQL, FastAPI, React.
                </div>
                <div>
                  <strong className="text-[#FFFFFF]">AI & ML:</strong> Generative AI, AI Agents, Machine Learning, OpenCV Vision, Prompt Engineering.
                </div>
                <div>
                  <strong className="text-[#FFFFFF]">Developer Tools:</strong> Git, GitHub, VS Code, Google AI Studio, Antigravity, Firebase, Vercel.
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-[#FFFFFF] text-base border-b border-[#262626] pb-1">
                Featured Engineering Projects
              </h4>
              <ul className="space-y-2">
                <li className="space-y-0.5">
                  <div className="font-bold text-[#FFFFFF]">Intelligent Recommendation System for Personalized IDPs</div>
                  <div className="text-xs text-[#737373] font-medium">React, Next.js, FastAPI, Gemini API, SQLite — AI student skill gap analyzer & learning roadmap generator.</div>
                </li>
                <li className="space-y-0.5">
                  <div className="font-bold text-[#FFFFFF]">JARVIS Voice Assistant</div>
                  <div className="text-xs text-[#737373] font-medium">Python, Gemini API, LiveKit, WebRTC — Low-latency voice conversational AI agent.</div>
                </li>
                <li className="space-y-0.5">
                  <div className="font-bold text-[#FFFFFF]">Semiconductor Image Restoration AI</div>
                  <div className="text-xs text-[#737373] font-medium">Python, OpenCV, Computer Vision — AI deblurring & noise reduction for wafer microscopy inspection.</div>
                </li>
              </ul>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[#262626] bg-[#181818] flex items-center justify-between gap-4">
            <a
              href={personalInfo.resumeUrl}
              download="Dharanesh_R_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#FFFFFF] bg-[#F20D2F] hover:bg-[#A8061F] transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-[#A3A3A3] hover:text-[#FFFFFF] bg-[#1C1C1C] hover:bg-[#262626] rounded-xl border border-[#262626] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
