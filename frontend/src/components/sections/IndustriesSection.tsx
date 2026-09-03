import React, { useState, useRef } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES_LIST, COMPANY_INFO } from '../../data/companyData';

export const IndustriesSection: React.FC = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const industryScrollRef = useRef<HTMLDivElement>(null);

  const handleIndustryScroll = () => {
    if (!industryScrollRef.current) return;
    const { scrollLeft, clientWidth } = industryScrollRef.current;
    if (clientWidth > 0) {
      const cardStep = clientWidth * 0.84;
      const index = Math.round(scrollLeft / cardStep);
      setActiveIndustryIndex(Math.min(Math.max(index, 0), INDUSTRIES_LIST.length - 1));
    }
  };

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="py-20 md:py-28 lg:py-32 bg-[#FFFFFF] border-y border-[#DEDEDB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-pulse" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A]">
                INDUSTRIES WE SERVE
              </span>
            </div>
            <h2 className="section-h2 uppercase text-[#262626] tracking-tight leading-tight mb-4">
              WHERE PROCESS, EQUIPMENT AND EXECUTION MEET.
            </h2>
            <p className="font-body text-[#6D6D6D] text-base sm:text-lg leading-relaxed max-w-2xl">
              Supporting critical industrial manufacturing with certified fabrication, sanitary stainless steel execution, and turnkey site installation across India.
            </p>
          </div>

          {/* Quick Credibility Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#F7F7F5] border border-[#DEDEDB] shadow-2xs shrink-0 self-start lg:self-auto">
            <CheckCircle2 className="w-4 h-4 text-[#C83A3A]" />
            <span className="font-technical text-xs font-bold uppercase tracking-wider text-[#262626]">
              {COMPANY_INFO.experienceYears} Years Specialized Industry Engineering
            </span>
          </div>
        </div>

        {/* Mobile Swipe Track + Tablet/Desktop Grid */}
        <div
          ref={industryScrollRef}
          onScroll={handleIndustryScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 pt-1 -mx-5 px-5 md:mx-0 md:px-0 no-scrollbar"
        >
          {INDUSTRIES_LIST.map((ind) => (
            <a
              key={ind.id}
              href="#projects"
              data-testid={`industry-card-${ind.number}`}
              className="w-[84vw] max-w-[330px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink group relative rounded-[28px] overflow-hidden border border-[#DEDEDB] hover:border-[#C83A3A]/60 bg-[#141414] min-h-[470px] sm:min-h-[490px] flex flex-col justify-between p-6 sm:p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 text-decoration-none"
            >
              {/* Background Authentic Image (Crystal Clear Top with Soft Fade Bottom) */}
              <img
                src={ind.image.url}
                alt={ind.image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Dynamic Bottom Gradient for Text Legibility (Keeps Top 50% Clean & Bright) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 via-50% to-black/20 group-hover:via-[#0F0F0F]/70 transition-colors duration-500" />

              {/* Top Row: Sector Number & Authentic Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-technical text-sm font-bold text-[#C83A3A] bg-white px-3.5 py-1 rounded-full shadow-md">
                  {ind.number}
                </span>
                <span className="inline-flex items-center gap-1.5 font-technical text-[0.58rem] font-bold text-white/90 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/15 uppercase tracking-wider shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C83A3A]" />
                  Site Execution
                </span>
              </div>

              {/* Bottom Content: Subtitle, Title, Description, Pills & CTA */}
              <div className="relative z-10 pt-16">
                {ind.subtitle && (
                  <div className="font-technical text-[0.65rem] font-bold text-[#C83A3A] uppercase tracking-wider mb-1.5">
                    {ind.subtitle}
                  </div>
                )}
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase mb-2.5 group-hover:text-[#FAEAEA] transition-colors leading-snug">
                  {ind.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#DEDEDB] leading-relaxed mb-4 line-clamp-3">
                  {ind.description}
                </p>

                {/* Technical Capabilities Badges */}
                {ind.capabilities && ind.capabilities.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {ind.capabilities.slice(0, 3).map((cap) => (
                      <span
                        key={cap}
                        className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-xs border border-white/10 font-technical text-[0.58rem] text-white/90 font-medium tracking-tight uppercase"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom Action Line */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="font-technical text-[0.65rem] font-bold uppercase tracking-wider text-[#DEDEDB] group-hover:text-white transition-colors">
                    Explore Executions
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-[#C83A3A] flex items-center justify-center text-white transition-all duration-300 shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Swipe Pagination & Status Dots */}
        <div className="md:hidden flex items-center justify-between pt-3 px-1">
          <span className="font-technical text-[0.65rem] font-bold text-[#8C8C8C] uppercase tracking-wider">
            SWIPE SECTORS ({activeIndustryIndex + 1}/{INDUSTRIES_LIST.length})
          </span>
          <div className="flex items-center gap-1.5">
            {INDUSTRIES_LIST.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => {
                  if (industryScrollRef.current) {
                    const cardStep = industryScrollRef.current.clientWidth * 0.84;
                    industryScrollRef.current.scrollTo({
                      left: dotIdx * cardStep,
                      behavior: 'smooth',
                    });
                  }
                }}
                aria-label={`View Sector ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndustryIndex === dotIdx
                    ? 'w-6 bg-[#C83A3A]'
                    : 'w-1.5 bg-[#DEDEDB]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
