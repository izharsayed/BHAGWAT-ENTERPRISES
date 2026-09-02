import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { QUICK_CAPABILITIES } from '../../data/companyData';

export const QuickCapabilitiesSection: React.FC = () => {
  return (
    <section
      id="capabilities"
      data-testid="quick-capabilities-section"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F7F5]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="eyebrow mb-3">WHAT WE DO</div>
            <h2 className="section-h2 uppercase text-[#262626]">
              CORE EXECUTION CAPABILITIES
            </h2>
          </div>
          <p className="font-body text-[#6D6D6D] max-w-md text-base">
            Engineered solutions shaped around the physical requirements of process plants and industrial fabrication.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_CAPABILITIES.map((cap) => (
            <a
              key={cap.number}
              href="#capabilities-detail"
              data-testid={`quick-capability-card-${cap.number}`}
              className="group relative bg-[#FFFFFF] p-8 rounded-[28px] border border-[#DEDEDB] hover:border-[#C83A3A] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between min-h-[300px] text-decoration-none"
            >
              {/* Top Row: Number & Arrow */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-technical text-2xl font-bold text-[#C83A3A]">
                    {cap.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F7F7F5] border border-[#DEDEDB] flex items-center justify-center text-[#262626] group-hover:text-[#C83A3A] group-hover:border-[#C83A3A] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-[#262626] tracking-tight mb-4 uppercase">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[#6D6D6D] text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Bottom Accent line that expands on hover */}
              <div className="pt-6">
                <div className="w-8 h-[2px] bg-[#DEDEDB] group-hover:w-full group-hover:bg-[#C83A3A] transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
