import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { PROJECTS_LIST, CURRENT_PROJECTS, COMPANY_INFO } from '../../data/companyData';
import { CardStack } from '../ui/card-stack';

export const ProjectsSection: React.FC = () => {
  const stackItems = React.useMemo(() => {
    return PROJECTS_LIST.map((proj) => ({
      ...proj,
      title: proj.client,
      description: proj.category,
      imageSrc: proj.image.url,
    }));
  }, []);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F7F5] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">PROJECT EXPERIENCE</div>
            <h2 className="section-h2 uppercase text-[#262626] mb-3">
              13+ PROVEN INDUSTRIAL EXECUTIONS.
            </h2>
            <p className="font-body text-[#6D6D6D] text-base sm:text-lg">
              Authentic site installations and equipment erection across starch manufacturing, food industries, and capital process plants.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C83A3A]/10 border border-[#C83A3A]/20 text-[#C83A3A] font-technical text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-pulse" />
              13 Completed • 4 Active Sites
            </span>
          </div>
        </div>

        {/* 3D Fanned Card Stack Showcase */}
        <div className="w-full flex justify-center py-4">
          <CardStack
            items={stackItems}
            initialIndex={0}
            autoAdvance
            intervalMs={3000}
            pauseOnHover={true}
            showDots
            showControls
            cardWidth={560}
            cardHeight={370}
            overlap={0.52}
            spreadDeg={34}
            renderCard={(proj) => (
              <div
                data-testid={`project-card-${proj.number}`}
                className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#262626] flex flex-col justify-between p-6 sm:p-8 shadow-2xl border border-white/10 group"
              >
                {/* Authentic Full-Color Clear Photo (No dark tint overlay) */}
                <img
                  src={proj.image.url}
                  alt={proj.image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  draggable={false}
                  loading="eager"
                />

                {/* Soft bottom-only gradient strictly behind text */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

                {/* Top Row: Project Number & Arrow */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-technical text-base font-bold text-[#C83A3A] bg-white px-3.5 py-1 rounded-full shadow-md">
                    {proj.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-[#C83A3A] transition-colors duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Row: Client, Location & Category */}
                <div className="relative z-10 pt-8">
                  <div className="inline-block px-3 py-1 rounded-md bg-white/15 backdrop-blur-xs text-[0.68rem] font-technical uppercase tracking-wider text-white mb-2.5 border border-white/10">
                    {proj.category}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2">
                    {proj.client}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#DEDEDB] font-body mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#C83A3A] shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                  <p className="font-technical text-[0.55rem] text-[#BDBDBD]/80 uppercase tracking-tight">
                    {COMPANY_INFO.disclaimer}
                  </p>
                </div>
              </div>
            )}
          />
        </div>

        {/* Current / Ongoing Projects Bar */}
        <div className="mt-20 pt-12 border-t border-[#DEDEDB]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A]">
                  CURRENT SITE EXECUTIONS (IN PROGRESS)
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[#262626] tracking-tight">
                ACTIVE TURNKEY & ERECTION CONTRACTS.
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm text-[#6D6D6D] max-w-md">
              On-site fabrication, heavy rigging, and process equipment erection currently progressing across our client facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURRENT_PROJECTS.map((curr) => (
              <div
                key={curr.id}
                className="group rounded-[24px] overflow-hidden bg-white border border-[#DEDEDB] shadow-sm hover:shadow-xl hover:border-[#C83A3A]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header with Live Pill Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-[#262626]">
                  <img
                    src={curr.image}
                    alt={curr.client}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="font-technical text-xs font-bold text-[#262626] bg-white/95 px-2.5 py-0.5 rounded-full shadow-xs">
                      SITE #{curr.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-technical text-[0.62rem] font-bold text-white bg-emerald-600/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Live Site
                    </span>
                  </div>

                  {/* Bottom Scope Pill on Image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="inline-block font-technical text-[0.62rem] font-bold text-white/95 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider line-clamp-1">
                      {curr.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-heading text-base font-bold text-[#262626] tracking-tight group-hover:text-[#C83A3A] transition-colors leading-snug line-clamp-2 mb-2">
                      {curr.client}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-[#6D6D6D] font-body mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#C83A3A] shrink-0" />
                      <span>{curr.location}</span>
                    </div>
                  </div>

                  {/* Bottom Action / Status Line */}
                  <div className="pt-3 border-t border-[#F0F0EE] flex items-center justify-between">
                    <span className="font-technical text-[0.62rem] font-bold text-[#8C8C8C] uppercase tracking-wider">
                      Turnkey Erection
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#F7F7F5] flex items-center justify-center text-[#262626] group-hover:bg-[#C83A3A] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
