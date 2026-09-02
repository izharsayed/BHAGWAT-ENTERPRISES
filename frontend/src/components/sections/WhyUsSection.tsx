import React from 'react';
import { Compass, Wrench, HardHat, Workflow, CheckCircle2 } from 'lucide-react';
import { WHY_US_CARDS, COMPANY_INFO } from '../../data/companyData';

const ICONS = [Compass, Wrench, HardHat, Workflow];

export const WhyUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F7F5] border-t border-[#DEDEDB] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-pulse" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A]">
                WHY BHAGWAT ENTERPRISES
              </span>
            </div>
            <h2 className="section-h2 uppercase text-[#262626] tracking-tight leading-tight mb-4">
              BUILT ON REAL EXECUTION PRINCIPLES.
            </h2>
            <p className="font-body text-[#6D6D6D] text-base sm:text-lg leading-relaxed max-w-2xl">
              Engineering competence, fabrication rigor, and field erection discipline tested and proven across two decades of critical industrial plant execution.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DEDEDB] shadow-2xs shrink-0 self-start lg:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-technical text-xs font-bold uppercase tracking-wider text-[#262626]">
              {COMPANY_INFO.experienceYears} Years Proven Track Record
            </span>
          </div>
        </div>

        {/* 4 Enhanced Architectural Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {WHY_US_CARDS.map((card, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={card.number}
                data-testid={`why-us-card-${card.number}`}
                className="group relative rounded-[28px] overflow-hidden bg-[#181818] border border-[#2D2D2D] hover:border-[#C83A3A]/70 p-7 sm:p-8 flex flex-col justify-between min-h-[440px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Subtle Ambient Radial Glow on Hover */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 bg-[#C83A3A]/5 group-hover:bg-[#C83A3A]/15 rounded-full blur-3xl transition-colors duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Row: Number & Icon */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <span className="font-technical text-3xl font-extrabold text-[#C83A3A] group-hover:scale-105 transition-transform duration-300">
                    {card.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-[#C83A3A] border border-white/10 flex items-center justify-center text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {card.subtitle && (
                    <span className="font-technical text-[0.65rem] font-bold text-[#C83A3A] uppercase tracking-wider mb-2">
                      {card.subtitle}
                    </span>
                  )}
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-white tracking-tight uppercase mb-3 group-hover:text-[#FAEAEA] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {card.highlights && (
                    <div className="space-y-2 mt-auto mb-6">
                      {card.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs font-body text-[#D4D4D4]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C83A3A] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row: Verified Metric & Animated Accent Line */}
                <div className="relative z-10 pt-5 border-t border-[#2C2C2C] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-technical text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{card.metric}</span>
                  </div>
                  <div className="w-8 h-[2px] bg-[#C83A3A] group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
