import React from 'react';
import { ArrowDown, MapPin, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface LocationFootprint {
  state: string;
  sites: string;
}

const FOOTPRINT: LocationFootprint[] = [
  { state: "Karnataka", sites: "Gokak & Athani" },
  { state: "Gujarat", sites: "Bhuj & Chotila" },
  { state: "Maharashtra", sites: "Shirpur & Chalisgaon" },
  { state: "Uttarakhand", sites: "Pantnagar" },
  { state: "West Bengal", sites: "Malda" },
  { state: "Bihar", sites: "Galgalia" },
  { state: "Madhya Pradesh", sites: "Chhindwara" },
];

export const BuiltExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      data-testid="experience-stats-section"
      className="py-20 md:py-28 lg:py-32 bg-[#FFFFFF] border-y border-[#DEDEDB] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Experience Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#161616] border border-[#2B2B2B] shadow-2xl p-6 sm:p-9 flex flex-col justify-between min-h-[440px] sm:min-h-[500px] group">
              {/* Authentic Background Site Photo Inset with Atmospheric Dark Industrial Overlay */}
              <img
                src="/images/experience-card-bg.jpg"
                alt="Bhagwat Enterprises Industrial Execution Facility"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/85 to-[#0E0E10]/50 pointer-events-none" />

              {/* Top Header Row */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/10 text-white font-technical text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#C83A3A]" />
                  <span>Industry Heritage</span>
                </div>
                <span className="font-technical text-[0.62rem] font-bold text-[#C83A3A] bg-[#C83A3A]/15 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Est. 20+ Yrs
                </span>
              </div>

              {/* Centerpiece Oversized Number & Title */}
              <div className="relative z-10 my-6 sm:my-8">
                <div
                  data-testid="experience-large-stat"
                  className="font-heading text-6xl sm:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-2"
                >
                  20<span className="text-[#C83A3A]">+</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-tight mb-2">
                  Years In Business
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#BDBDBD] leading-relaxed max-w-sm">
                  Two decades of high-integrity fabrication, heavy rigging, and process plant turnkey engineering across India.
                </p>
              </div>

              {/* Bottom Milestone Stats Grid */}
              <div className="relative z-10 pt-6 border-t border-white/15 grid grid-cols-3 gap-3">
                <div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-white">13+</div>
                  <div className="font-technical text-[0.62rem] text-[#9E9E9E] uppercase tracking-wider">Completed Plants</div>
                </div>
                <div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-[#C83A3A]">07</div>
                  <div className="font-technical text-[0.62rem] text-[#9E9E9E] uppercase tracking-wider">Indian States</div>
                </div>
                <div>
                  <div className="font-heading text-xl sm:text-2xl font-black text-emerald-400">04</div>
                  <div className="font-technical text-[0.62rem] text-[#9E9E9E] uppercase tracking-wider">Live Sites</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pan-India Execution Story & Location Footprint */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-pulse" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A]">
                BUILT THROUGH EXPERIENCE
              </span>
            </div>

            <h2 className="section-h2 uppercase mb-5 text-[#262626] leading-tight">
              A GROWING PROJECT STORY, GROUNDED IN REAL PLACES.
            </h2>

            <p className="font-body text-[#6D6D6D] text-base sm:text-lg leading-relaxed mb-8">
              From heavy grain and starch refining facilities to food processing and industrial chemical plants, Bhagwat Enterprises has delivered high-pressure storage batteries, rotary calciners, and precision pipe manifolds across India&apos;s leading industrial hubs.
            </p>

            {/* Pan-India Execution Footprint Grid */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#C83A3A]" />
                <span className="font-technical text-xs font-bold uppercase tracking-wider text-[#262626]">
                  Key Execution States & Industrial Clusters:
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {FOOTPRINT.map((loc) => (
                  <div
                    key={loc.state}
                    className="p-2.5 rounded-xl bg-[#F7F7F5] border border-[#DEDEDB] hover:border-[#C83A3A] transition-colors group"
                  >
                    <div className="font-technical text-xs font-bold text-[#262626] group-hover:text-[#C83A3A] transition-colors">
                      {loc.state}
                    </div>
                    <div className="font-body text-[0.65rem] text-[#6D6D6D] truncate">
                      {loc.sites}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credibility Note & CTA Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-[#DEDEDB]">
              <a
                href="#projects"
                data-testid="experience-cta"
                className="btn-primary group w-full sm:w-auto justify-center text-center"
              >
                <span>SEE PROJECT EXPERIENCE</span>
                <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-2 text-xs font-technical text-[#6D6D6D] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{COMPANY_INFO.experienceNote}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
