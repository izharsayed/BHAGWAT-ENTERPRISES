import React from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Settings,
  ShieldCheck,
  Users,
  Award,
  Factory,
  HardHat,
  Handshake,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-32 lg:pb-10 bg-[#F7F7F5] overflow-hidden flex flex-col justify-between"
    >
      {/* Giant Background Watermark "ENGINEERING" */}
      <div
        aria-hidden="true"
        className="absolute top-10 sm:top-14 left-0 right-0 pointer-events-none select-none overflow-hidden whitespace-nowrap opacity-[0.045] text-[16vw] font-heading font-black tracking-widest text-[#262626] z-0 leading-none text-center"
      >
        ENGINEERING
      </div>

      {/* Background Industrial Tanks Image */}
      <div className="absolute right-0 top-0 bottom-0 sm:bottom-20 w-full sm:w-3/5 lg:w-1/2 xl:w-7/12 pointer-events-none z-0 overflow-hidden">
        {/* Desktop smooth gradient mask */}
        <div
          className="w-full h-full relative"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.9) 35%, black 50%)',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.9) 35%, black 50%)',
          }}
        >
          <img
            src="/images/hero-tanks-v2.jpg"
            alt="Massive vertical stainless steel industrial storage tanks and process silos"
            className="w-full h-full object-cover object-right opacity-30 sm:opacity-100 scale-102 transition-opacity duration-300"
          />
        </div>

        {/* Mobile atmospheric gradient washes for 100% text readability */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-r from-[#F7F7F5] via-[#F7F7F5]/80 to-transparent pointer-events-none" />
        <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-[#F7F7F5] via-transparent to-[#F7F7F5]/50 pointer-events-none" />

        {/* Subtle edge softening at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F7F7F5] to-transparent opacity-60" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C83A3A]" />
              <span className="font-technical text-xs font-bold tracking-[0.2em] text-[#C83A3A] uppercase">
                {COMPANY_INFO.name}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              data-testid="hero-headline"
              className="font-heading text-4xl sm:text-5xl lg:text-[4.6rem] font-extrabold tracking-tight uppercase leading-[0.95] text-[#262626] mb-5"
            >
              ENGINEERING.<br />
              <span className="text-[#C83A3A]">FABRICATION.</span><br />
              EXECUTION.
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-[#3A3A3A] text-base sm:text-lg max-w-xl leading-relaxed mb-6 font-normal">
              {COMPANY_INFO.positioning}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 w-full sm:w-auto">
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="btn-primary justify-center text-center"
              >
                <span>REQUEST A PROJECT DISCUSSION</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                data-testid="hero-cta-secondary"
                className="btn-secondary justify-center text-center"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Glassmorphism Triple Feature Pill Badge */}
            <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#DEDEDB] shadow-sm max-w-fit">
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAEAEA] flex items-center justify-center text-[#C83A3A]">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-xs font-bold text-[#262626] uppercase leading-tight">
                    ENGINEERING
                  </div>
                  <div className="font-technical text-[0.6rem] text-[#6D6D6D] uppercase tracking-wider">
                    EXCELLENCE
                  </div>
                </div>
              </div>

              <div className="hidden sm:block h-7 w-[1px] bg-[#DEDEDB]" />

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAEAEA] flex items-center justify-center text-[#C83A3A]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-xs font-bold text-[#262626] uppercase leading-tight">
                    QUALITY
                  </div>
                  <div className="font-technical text-[0.6rem] text-[#6D6D6D] uppercase tracking-wider">
                    ASSURED
                  </div>
                </div>
              </div>

              <div className="hidden sm:block h-7 w-[1px] bg-[#DEDEDB]" />

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAEAEA] flex items-center justify-center text-[#C83A3A]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-xs font-bold text-[#262626] uppercase leading-tight">
                    ON TIME
                  </div>
                  <div className="font-technical text-[0.6rem] text-[#6D6D6D] uppercase tracking-wider">
                    DELIVERY
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Kept open to showcase the industrial tanks backdrop */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* Bottom Dark Docked Metrics Bar - Floatable with Animations */}
        <div className="mt-8 rounded-[24px] bg-[#161719]/95 backdrop-blur-xl border border-[#2A2B2E] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 sm:p-6 text-white relative z-10 animate-card-float hover:-translate-y-2.5 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hover:border-[#C83A3A]/50 transition-all duration-500 ease-out group cursor-default">
          {/* Subtle Top Red Accent Line */}
          <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#C83A3A] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 lg:divide-x divide-white/10">
            {/* Stat 1: 20+ Years Experience */}
            <div className="group/stat flex items-center gap-3.5 sm:gap-4 p-2 sm:p-3 lg:px-4 rounded-2xl hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#C83A3A]/15 border border-[#C83A3A]/30 flex items-center justify-center text-[#C83A3A] shrink-0 group-hover/stat:scale-110 group-hover/stat:bg-[#C83A3A]/25 group-hover/stat:border-[#C83A3A] group-hover/stat:shadow-[0_0_20px_rgba(200,58,58,0.4)] transition-all duration-300">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/stat:rotate-6" />
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mb-1 group-hover/stat:text-[#FAEAEA] transition-colors">
                  20+
                </div>
                <div className="font-technical text-[0.65rem] sm:text-xs font-bold text-[#BDBDBD] uppercase tracking-wider group-hover/stat:text-white transition-colors">
                  YEARS EXPERIENCE
                </div>
              </div>
            </div>

            {/* Stat 2: 13+ Completed Plants */}
            <div className="group/stat flex items-center gap-3.5 sm:gap-4 p-2 sm:p-3 lg:px-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#C83A3A]/15 border border-[#C83A3A]/30 flex items-center justify-center text-[#C83A3A] shrink-0 group-hover/stat:scale-110 group-hover/stat:bg-[#C83A3A]/25 group-hover/stat:border-[#C83A3A] group-hover/stat:shadow-[0_0_20px_rgba(200,58,58,0.4)] transition-all duration-300">
                <Factory className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/stat:-translate-y-0.5" />
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mb-1 group-hover/stat:text-[#FAEAEA] transition-colors">
                  13+
                </div>
                <div className="font-technical text-[0.65rem] sm:text-xs font-bold text-[#BDBDBD] uppercase tracking-wider group-hover/stat:text-white transition-colors">
                  COMPLETED PLANTS
                </div>
              </div>
            </div>

            {/* Stat 3: 100% Quality Commitment */}
            <div className="group/stat flex items-center gap-3.5 sm:gap-4 p-2 sm:p-3 lg:px-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#C83A3A]/15 border border-[#C83A3A]/30 flex items-center justify-center text-[#C83A3A] shrink-0 group-hover/stat:scale-110 group-hover/stat:bg-[#C83A3A]/25 group-hover/stat:border-[#C83A3A] group-hover/stat:shadow-[0_0_20px_rgba(200,58,58,0.4)] transition-all duration-300">
                <HardHat className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/stat:rotate-[-6deg]" />
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mb-1 group-hover/stat:text-[#FAEAEA] transition-colors">
                  100%
                </div>
                <div className="font-technical text-[0.65rem] sm:text-xs font-bold text-[#BDBDBD] uppercase tracking-wider group-hover/stat:text-white transition-colors">
                  QUALITY COMMITMENT
                </div>
              </div>
            </div>

            {/* Stat 4: Multi-State Project Execution */}
            <div className="group/stat flex items-center gap-3.5 sm:gap-4 p-2 sm:p-3 lg:px-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#C83A3A]/15 border border-[#C83A3A]/30 flex items-center justify-center text-[#C83A3A] shrink-0 group-hover/stat:scale-110 group-hover/stat:bg-[#C83A3A]/25 group-hover/stat:border-[#C83A3A] group-hover/stat:shadow-[0_0_20px_rgba(200,58,58,0.4)] transition-all duration-300">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/stat:scale-105" />
              </div>
              <div>
                <div className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none mb-1 group-hover/stat:text-[#FAEAEA] transition-colors">
                  MULTI-STATE
                </div>
                <div className="font-technical text-[0.62rem] sm:text-[0.68rem] font-bold text-[#BDBDBD] uppercase tracking-wider group-hover/stat:text-white transition-colors">
                  PROJECT EXECUTION ACROSS INDIA
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
