import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F7F5] border-t border-[#DEDEDB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Dual Image Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none group">
              {/* Primary Large Image */}
              <div
                data-testid="about-image-primary"
                className="relative rounded-[32px] overflow-hidden border border-[#DEDEDB] shadow-xl bg-[#262626] aspect-[4/3] w-full sm:w-11/12 animate-float-slow transition-all duration-500 ease-out group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.28)] group-hover:border-[#C83A3A]/40"
              >
                <img
                  src={IMAGES.aboutMain.url}
                  alt={IMAGES.aboutMain.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero-tanks-v2.jpg';
                  }}
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/60 shadow-lg flex items-center justify-between transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-ping" />
                    <p className="font-technical text-[0.62rem] font-bold text-[#262626] tracking-wider uppercase">
                      HEAVY TANK FABRICATION & ASSEMBLY
                    </p>
                  </div>
                  <span className="font-technical text-[0.58rem] font-semibold text-[#6D6D6D] uppercase hidden sm:inline-block">
                    DONDAICHA FACILITY
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Detail Image */}
              <div
                data-testid="about-image-secondary"
                className="absolute -bottom-10 -right-4 sm:-right-6 w-3/5 sm:w-1/2 aspect-square rounded-[26px] overflow-hidden border-4 border-white shadow-2xl z-10 bg-[#262626] animate-float-reverse transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.35)] hover:border-[#C83A3A]/30 cursor-pointer"
              >
                <img
                  src={IMAGES.aboutDetail.url}
                  alt={IMAGES.aboutDetail.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/about-fabrication.jpg';
                  }}
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/60 shadow-md text-center transition-transform duration-300 hover:scale-102">
                  <p className="font-technical text-[0.56rem] font-bold text-[#262626] uppercase tracking-wider">
                    PRECISION ARC WELDING
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div
                data-testid="about-badge"
                className="absolute -top-5 left-4 sm:-left-6 bg-gradient-to-br from-[#D44040] to-[#B32E2E] text-white p-4 sm:p-5 rounded-[22px] shadow-2xl z-20 animate-badge-float transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_20px_35px_rgba(200,58,58,0.45)] cursor-default border border-white/20"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" />
                  <div className="font-technical font-bold text-xs tracking-widest text-white/90">
                    BE / 20+
                  </div>
                </div>
                <div className="font-heading font-extrabold text-sm sm:text-base leading-tight tracking-tight uppercase text-white">
                  YEARS IN BUSINESS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="eyebrow mb-4">ABOUT BHAGWAT ENTERPRISES</div>
            <h2 data-testid="about-heading" className="section-h2 uppercase mb-6 text-[#262626]">
              FROM ENGINEERING TO EXECUTION.
            </h2>
            <p className="font-body text-[#6D6D6D] text-lg leading-relaxed mb-6">
              The company combines engineering, design, procurement, fabrication, equipment erection, facility management, start-up and turnkey execution for industrial projects.
            </p>
            <p className="font-body text-[#202020] text-base leading-relaxed mb-8">
              Based in{' '}
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAEAEA] text-[#C83A3A] font-semibold text-sm">
                Dondaicha, Maharashtra
              </span>
              , Bhagwat Enterprises supports projects with an execution-minded perspective.
            </p>
            <div>
              <a
                href="#projects"
                data-testid="about-cta"
                className="btn-secondary group"
              >
                <span>VIEW OUR PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-[#C83A3A] group-hover:text-white transition-colors group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
