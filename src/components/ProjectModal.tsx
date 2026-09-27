import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Sparkles,
  Zap,
  Activity,
} from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('overview');
  const [simState, setSimState] = useState({
    running: false,
    status: 'Idle',
    output: '',
  });

  if (!project) return null;

  const runSimulation = () => {
    setSimState({ running: true, status: 'Executing Simulation...', output: '' });

    setTimeout(() => {
      if (project.id === 'personalized-idp') {
        setSimState({
          running: false,
          status: 'IDP Generated',
          output: 'Student Target: Embedded AI Engineer | Recommended Path: [1] Advanced DSP on ARM -> [2] TinyML Inference Engine -> [3] Real-time Sensor Fusion Project -> [4] Certificate: Edge AI Basics.',
        });
      } else if (project.id === 'semiconductor-image-restoration') {
        setSimState({
          running: false,
          status: 'Restoration Complete',
          output: 'Processed Wafer_Die_089.png | Gaussian Noise Suppressed | PSNR: +8.4dB | Edge SSIM: 0.92 | Defects Isolated: Micro-fracture detected at coordinate (x:410, y:822).',
        });
      } else if (project.id === 'jarvis-voice-assistant') {
        setSimState({
          running: false,
          status: 'Jarvis Voice Stream Active',
          output: 'Voice Buffer Synchronized (LiveKit WebRTC) | Prompt: "Analyze satellite modem noise budget" | Latency: 320ms | Response Generated.',
        });
      } else {
        setSimState({
          running: false,
          status: 'Simulation Ready',
          output: `Interactive execution sandbox initialized for ${project.title}. All background services operational.`,
        });
      }
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#111111] border border-[#262626] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-[#FFFFFF]"
        >
          {/* Top Bar */}
          <div className="p-6 border-b border-[#262626] flex items-center justify-between bg-[#181818]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F20D2F]/10 border border-[#F20D2F]/30 flex items-center justify-center text-[#F20D2F]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-[#FFFFFF] leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono-tech font-bold bg-[#F20D2F]/10 text-[#F20D2F] border border-[#F20D2F]/30"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#A3A3A3] hover:text-[#FFFFFF] bg-[#262626] hover:bg-[#333333] rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Tab Switcher */}
          <div className="px-6 py-3 border-b border-[#262626] bg-[#141414] flex items-center gap-4 text-xs font-mono-tech font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#F20D2F] text-white border border-[#F20D2F]'
                  : 'text-[#A3A3A3] hover:text-[#FFFFFF]'
              }`}
            >
              System Overview & Architecture
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'simulation'
                  ? 'bg-[#F20D2F] text-white border border-[#F20D2F]'
                  : 'text-[#A3A3A3] hover:text-[#FFFFFF]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Demo Simulation
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#FFFFFF]">
            {activeTab === 'overview' ? (
              <>
                {/* Description & Problem Solved */}
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-[#262626]">
                    <h4 className="text-xs font-mono-tech text-[#F20D2F] uppercase tracking-wider mb-2 font-bold">
                      Problem Solved
                    </h4>
                    <p className="text-sm text-[#A3A3A3] leading-relaxed font-medium">
                      {project.problemSolved}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-[#262626]">
                    <h4 className="text-xs font-mono-tech text-[#F20D2F] uppercase tracking-wider mb-2 font-bold">
                      Architecture & Implementation Breakdown
                    </h4>
                    <p className="text-sm text-[#A3A3A3] leading-relaxed font-medium">
                      {project.architectureDetails}
                    </p>
                  </div>
                </div>

                {/* Key Features Checklist */}
                <div>
                  <h4 className="text-sm font-heading font-bold text-[#FFFFFF] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F20D2F]" />
                    Key Capabilities & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-[#FFFFFF] font-semibold shadow-xs"
                      >
                        <Zap className="w-3.5 h-3.5 text-[#F20D2F] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono-tech text-[#737373] uppercase tracking-wider mb-2 font-semibold">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl text-xs font-mono-tech bg-[#1C1C1C] text-[#FFFFFF] border border-[#262626] font-semibold shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics if available */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-4 rounded-2xl bg-[#1C1C1C] border border-[#262626] text-center shadow-xs"
                      >
                        <div className="text-xl font-heading font-bold text-[#F20D2F]">{m.value}</div>
                        <div className="text-xs text-[#A3A3A3] font-mono-tech mt-0.5 font-semibold">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* Simulation Tab */
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#262626] space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-heading font-bold text-[#FFFFFF] flex items-center gap-2">
                      <Activity className="w-5 h-5 text-[#F20D2F]" />
                      Live Project Execution Sandbox
                    </h4>
                    <span className="text-xs font-mono-tech text-[#A3A3A3] font-semibold">
                      Status: <span className="text-[#F20D2F]">{simState.status}</span>
                    </span>
                  </div>

                  <p className="text-xs text-[#A3A3A3] font-medium">
                    Test the underlying algorithmic pipeline of <strong className="text-[#FFFFFF]">{project.title}</strong> with simulated inputs.
                  </p>

                  <button
                    onClick={runSimulation}
                    disabled={simState.running}
                    className="px-5 py-2.5 text-xs font-bold font-mono-tech text-white bg-[#F20D2F] hover:bg-[#A8061F] rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {simState.running ? 'Running ML Pipeline...' : 'Run Simulated Execution'}
                  </button>
                </div>

                {/* Terminal Output */}
                <div className="bg-[#080808] p-5 rounded-2xl border border-[#262626] font-mono-tech text-xs space-y-2 text-[#F20D2F] min-h-[140px] shadow-inner">
                  <div className="text-[#F20D2F] border-b border-[#262626] pb-2 flex items-center justify-between">
                    <span>$ system_log --project={project.id}</span>
                    <span className="w-2 h-2 rounded-full bg-[#F20D2F] animate-ping" />
                  </div>
                  {simState.output ? (
                    <p className="text-[#FFFFFF] leading-relaxed pt-2 font-semibold">
                      {simState.output}
                    </p>
                  ) : (
                    <p className="text-[#737373] italic pt-2">
                      Press "Run Simulated Execution" to trigger real-time AI/ECE telemetry output.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[#262626] bg-[#181818] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#FFFFFF] bg-[#1C1C1C] hover:bg-[#262626] border border-[#262626] transition-colors shadow-xs"
              >
                <GithubIcon className="w-4 h-4 text-[#F20D2F]" />
                <span>View Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#F20D2F] hover:bg-[#A8061F] transition-colors shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

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
