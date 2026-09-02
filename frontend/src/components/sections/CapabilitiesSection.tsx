import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CAPABILITIES_LIST } from '../../data/companyData';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section
      id="capabilities-detail"
      data-testid="capabilities-detail-section"
      className="py-20 md:py-28 lg:py-32 bg-[#FFFFFF] border-y border-[#DEDEDB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="eyebrow mb-3">OUR CAPABILITIES</div>
          <h2 className="section-h2 uppercase text-[#262626] mb-4">
            BUILT FOR THE PARTS OF A PROJECT THAT MATTER.
          </h2>
          <p className="font-body text-[#6D6D6D] text-lg">
            Eight connected capabilities, presented without inflated claims — just the work required to move an industrial project forward.
          </p>
        </div>

        {/* 8 Connected Rows */}
        <div className="border-t border-[#DEDEDB]">
          {CAPABILITIES_LIST.map((cap) => (
            <div
              key={cap.number}
              data-testid={`capability-row-${cap.number}`}
              className="group py-6 sm:py-8 border-b border-[#DEDEDB] hover:border-[#C83A3A] transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 cursor-pointer"
            >
              {/* Left: Number & Title */}
              <div className="flex items-center gap-6 sm:gap-10 md:w-5/12">
                <span className="font-technical text-xl sm:text-2xl font-bold text-[#C83A3A]">
                  {cap.number}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#262626] group-hover:text-[#C83A3A] transition-colors uppercase tracking-tight">
                  {cap.title}
                </h3>
              </div>

              {/* Middle: Details */}
              <div className="md:w-6/12 pl-12 md:pl-0">
                <p className="font-body text-sm sm:text-base text-[#6D6D6D] leading-relaxed group-hover:text-[#202020] transition-colors">
                  {cap.description}
                </p>
              </div>

              {/* Right: Arrow */}
              <div className="hidden md:flex md:w-1/12 justify-end">
                <div className="w-9 h-9 rounded-full bg-transparent group-hover:bg-[#F7F7F5] flex items-center justify-center text-[#6D6D6D] group-hover:text-[#C83A3A] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
