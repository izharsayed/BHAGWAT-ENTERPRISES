import React from 'react';
import { ArrowRight, Factory, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGES, COMPANY_INFO, MANUFACTURING_PRODUCTS } from '../../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F7F5] border-t border-[#DEDEDB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Top Story & Imagery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
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
                      S.S. PRESSURE VESSEL &amp; EXCHANGER FABRICATION
                    </p>
                  </div>
                  <span className="font-technical text-[0.58rem] font-semibold text-[#6D6D6D] uppercase hidden sm:inline-block">
                    NANDURBAR WORKS
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
                    e.currentTarget.src = '/images/precision-welding.jpg';
                  }}
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/60 shadow-md text-center transition-transform duration-300 hover:scale-102">
                  <p className="font-technical text-[0.56rem] font-bold text-[#262626] uppercase tracking-wider">
                    PRECISION S.S. WELDING
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
              Headquartered in{' '}
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#FAEAEA] text-[#C83A3A] font-bold text-sm">
                Nashik
              </span>{' '}
              with full-scale fabrication and equipment manufacturing works in{' '}
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#E8E8E6] text-[#262626] font-bold text-sm">
                Nandurbar, Maharashtra
              </span>
              , Bhagwat Enterprises supports capital projects with an execution-minded perspective.
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

        {/* Dedicated Factory Manufacturing Scope Section */}
        <div
          data-testid="factory-manufacturing-showcase"
          className="rounded-[32px] bg-white border border-[#DEDEDB] shadow-lg p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C83A3A]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#F0F0EE] relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 font-technical text-[0.65rem] font-bold text-[#C83A3A] bg-[#FAEAEA] border border-[#C83A3A]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <Factory className="w-3.5 h-3.5" />
                  Nandurbar Works Facility
                </span>
                <span className="inline-flex items-center gap-1 font-technical text-[0.62rem] text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" />
                  ASME &amp; IS Standards
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#262626] tracking-tight leading-tight">
                MANUFACTURER OF S.S. &amp; M.S. <span className="text-[#C83A3A]">PROCESS EQUIPMENT</span>
              </h3>
            </div>
            <div className="max-w-md text-xs sm:text-sm font-body text-[#6D6D6D] leading-relaxed">
              Full-scale in-house manufacturing of heavy process machinery, containment vessels, and structural components conforming to rigid ASME and Indian Standards.
            </div>
          </div>

          {/* 6 Equipment Manufacturing Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8 relative z-10">
            {MANUFACTURING_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group/card p-5 sm:p-6 rounded-2xl bg-[#F7F7F5] border border-[#DEDEDB] hover:border-[#C83A3A] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-technical text-[0.65rem] font-black text-[#C83A3A] bg-[#FAEAEA] px-2 py-0.5 rounded uppercase tracking-wider">
                      {prod.materials}
                    </span>
                    <span className="font-technical text-[0.62rem] font-semibold text-[#8C8C8C] uppercase">
                      {prod.standard}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-black uppercase text-[#262626] group-hover/card:text-[#C83A3A] transition-colors mb-2 tracking-tight">
                    {prod.title}
                  </h4>
                  <p className="font-body text-xs text-[#6D6D6D] leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAEAE8] flex items-center justify-between text-xs font-technical text-[#8C8C8C]">
                  <span className="flex items-center gap-1 text-[0.65rem]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Quality Inspected
                  </span>
                  <span className="font-bold text-[#262626] uppercase text-[0.62rem]">
                    In-House Fab
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note inside card */}
          <div className="mt-8 pt-6 border-t border-[#F0F0EE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-technical text-[#8C8C8C] relative z-10">
            <div>
              <strong className="text-[#262626]">Factory Works:</strong> {COMPANY_INFO.factory.fullAddress}
            </div>
            <a
              href="#contact"
              className="font-bold text-[#C83A3A] hover:underline uppercase text-[0.7rem] tracking-wider inline-flex items-center gap-1"
            >
              Request Equipment Specs &amp; Drawings <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
