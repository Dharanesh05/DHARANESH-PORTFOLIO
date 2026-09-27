import React from 'react';
import { Trophy, Medal, Flag, Calendar, Heart, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';

const categoryIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Hackathon: Trophy,
  Competition: Medal,
  Contest: Flag,
  'Real-World Impact': Heart,
};

export const Achievements: React.FC = () => {
  return (
    <AnimatedFrame id="achievements">
      <RevealOnScroll>
        <SectionHeading
          number="07"
          category="HONORS & IMPACT"
          title="Competitions & Real-World Impact"
          subtitle="Showcasing national AI quizzes, hackathon participation, electronic circuit contests, and voluntary blood donation."
        />
      </RevealOnScroll>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {achievementsData.map((item, index) => {
          const IconComponent = categoryIcon[item.category] || Trophy;
          const isImpact = item.category === 'Real-World Impact';

          return (
            <RevealOnScroll key={item.id} delay={index * 0.1}>
              <TiltCard className="h-full">
                <div
                  className={`p-6 rounded-3xl h-full flex flex-col justify-between border ${
                    isImpact
                      ? 'border-[#F20D2F]/60 hover:border-[#F20D2F] bg-[#111111]'
                      : 'border-[#262626] hover:border-[#F20D2F] bg-[#111111]'
                  } shadow-xl shadow-black/40 group transition-colors`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform border ${
                            isImpact
                              ? 'bg-[#F20D2F]/20 border-[#F20D2F]/40 text-[#F20D2F]'
                              : 'bg-[#F20D2F]/20 border-[#F20D2F]/40 text-[#F20D2F]'
                          }`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech font-bold uppercase tracking-wider ${
                              isImpact
                                ? 'bg-[#F20D2F]/30 text-[#FFFFFF] border border-[#F20D2F]'
                                : 'bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40'
                            }`}
                          >
                            {item.badgeText}
                          </span>
                          <h3 className="text-lg font-heading font-bold text-[#FFFFFF] mt-1 group-hover:text-[#F20D2F] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-mono-tech text-[#525252] font-semibold shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-[#F20D2F]" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#525252] leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {/* Scale or Motto details */}
                    {item.scale && (
                      <div
                        className={`p-3 rounded-xl border text-xs font-mono-tech font-bold ${
                          isImpact
                            ? 'bg-[#F20D2F]/20 text-[#FFFFFF] border-[#F20D2F]/40'
                            : 'bg-[#171717] text-[#FFFFFF] border-[#262626]'
                        }`}
                      >
                        {item.scale}
                      </div>
                    )}

                    {item.motto && (
                      <div className="text-xs font-mono-tech text-[#F20D2F] italic font-semibold">
                        Motto / Dept: "{item.motto}"
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-[#525252] font-medium">{item.organization}</span>
                    <span
                      className={`flex items-center gap-1 font-bold ${
                        isImpact ? 'text-[#F20D2F]' : 'text-[#F20D2F]'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {isImpact ? 'AB+ve Donor' : 'Verified Certificate'}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </AnimatedFrame>
  );
};

