import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../../data/companyData';

interface TechPillar {
  title: string;
  tag: string;
  desc: string;
  metric: string;
}

const PILLARS: TechPillar[] = [
  {
    title: "PRECISION ALIGNMENT",
    tag: "TOLERANCE ±1.0mm",
    desc: "Laser & dial-gauge verified nozzle orientations, foundation leveling, and zero-vibration rotating equipment coupling.",
    metric: "0.05 mm/m Accuracy",
  },
  {
    title: "CERTIFIED WELDING",
    tag: "100% NDT & DPT",
    desc: "Full-penetration TIG & MIG welding procedures conforming to ASME Section IX with dye penetrant and radiographic quality testing.",
    metric: "Zero-Defect Joint Rate",
  },
  {
    title: "SANITARY METALLURGY",
    tag: "SS304 / SS316L",
    desc: "Mirror-finish electropolishing and food-grade passivation for starch refining, syrups, and pharmaceutical-grade chemical lines.",
    metric: "Food & Pharma Grade",
  },
  {
    title: "PRESSURE TESTING",
    tag: "HYDROTEST PROTOCOL",
    desc: "Rigid hydrostatic and pneumatic test holds executed at 1.5x design pressure before commissioning to guarantee zero leakage.",
    metric: "1.5x Design Pressure",
  },
];

export const TechnicalDetailSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'piping' | 'coil'>('piping');

  return (
    <section
      id="technical"
      data-testid="technical-detail-section"
      className="py-20 md:py-28 lg:py-32 bg-[#1B1B1B] text-white relative overflow-hidden border-y border-[#333333]"
    >
      {/* Subtle Technical Grid Accent Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#C83A3A_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Technical Description & Spec Cards */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-pulse" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A]">
                TECHNICAL DETAIL & EXECUTION STANDARD
              </span>
            </div>

            <h2
              data-testid="technical-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight mb-5"
            >
              THE WORK IS IN THE <span className="text-[#C83A3A]">DETAILS.</span>
            </h2>

            <p className="font-body text-[#BDBDBD] text-base sm:text-lg leading-relaxed mb-8">
              From certified stainless steel pipe manifolds and ANSI/DIN flanges to heavy structural erection and pressure containment, industrial reliability is built upon millimeter-precise connections.
            </p>

            {/* 4 Technical Pillars Grid */}
            <div data-testid="technical-tags" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#333333]">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="p-4 rounded-2xl bg-[#232323] border border-[#383838] hover:border-[#C83A3A]/60 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-technical text-xs font-bold text-white group-hover:text-[#C83A3A] transition-colors">
                      {p.title}
                    </span>
                    <span className="font-technical text-[0.6rem] font-bold text-[#C83A3A] bg-[#C83A3A]/15 px-2 py-0.5 rounded">
                      {p.tag}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#9E9E9E] leading-relaxed mb-2.5">
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[0.68rem] font-technical text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{p.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Precision Fabrication Showcase with Photo Switcher */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] overflow-hidden border border-[#3A3A3A] shadow-2xl bg-[#141414] group">
              {/* Active High-Res Image */}
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden">
                <img
                  src={
                    activePhoto === 'piping'
                      ? IMAGES.technical.url
                      : '/images/projects/proj_13_sanstar.jpeg'
                  }
                  alt={IMAGES.technical.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white font-technical text-xs font-bold uppercase shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C83A3A]" />
                    <span>ASME & IS Standard Quality</span>
                  </div>

                  <span className="font-technical text-[0.62rem] text-white/90 bg-emerald-600/90 backdrop-blur-xs px-2.5 py-1 rounded-full uppercase font-bold tracking-wide shadow-xs">
                    100% Inspected
                  </span>
                </div>

                {/* Bottom Image Inset Description */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 bg-black/60 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/10">
                  <div>
                    <span className="font-technical text-[0.62rem] font-bold uppercase text-[#C83A3A] tracking-wider block mb-1">
                      {activePhoto === 'piping' ? 'M/S. GUJRAT AMBUJA EXPORTS' : 'M/S. SANSTAR LTD.'}
                    </span>
                    <h4 className="font-heading text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                      {activePhoto === 'piping'
                        ? 'Stainless Steel Process Piping & Flanged Manifolds'
                        : 'Precision Limpet Cooling Coil & Reactor Assembly'}
                    </h4>
                  </div>

                  <span className="font-technical text-[0.58rem] text-[#DEDEDB] uppercase tracking-wider shrink-0 sm:text-right">
                    {COMPANY_INFO.disclaimer}
                  </span>
                </div>
              </div>

              {/* Inset Photo Switcher Bar */}
              <div className="p-3 bg-[#1F1F1F] border-t border-[#333333] flex items-center justify-between gap-3">
                <span className="font-technical text-xs text-[#9E9E9E] uppercase tracking-wider pl-2">
                  Technical Execution Views:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActivePhoto('piping')}
                    className={`px-3 py-1.5 rounded-xl font-technical text-xs font-bold transition-all duration-200 cursor-pointer ${
                      activePhoto === 'piping'
                        ? 'bg-[#C83A3A] text-white shadow-xs'
                        : 'bg-[#2A2A2A] text-[#BDBDBD] hover:text-white border border-[#3A3A3A]'
                    }`}
                  >
                    SS Pipe Manifolds
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhoto('coil')}
                    className={`px-3 py-1.5 rounded-xl font-technical text-xs font-bold transition-all duration-200 cursor-pointer ${
                      activePhoto === 'coil'
                        ? 'bg-[#C83A3A] text-white shadow-xs'
                        : 'bg-[#2A2A2A] text-[#BDBDBD] hover:text-white border border-[#3A3A3A]'
                    }`}
                  >
                    Cooling Coil Fabrication
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
