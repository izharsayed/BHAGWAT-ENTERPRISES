import React, { useState } from 'react';
import { PROCESS_TIMELINE } from '../../data/companyData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section
      id="process"
      data-testid="process-section"
      className="py-20 md:py-28 lg:py-32 bg-[#EEEEEB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="eyebrow mb-3">FROM CONCEPT TO COMPLETION</div>
          <h2 className="section-h2 uppercase text-[#262626] mb-4">
            A CLEAR LINE FROM INTENT TO HANDOVER.
          </h2>
          <p className="font-body text-[#6D6D6D] text-base sm:text-lg">
            A systematic engineering and execution methodology designed to maintain control across multi-discipline industrial projects.
          </p>
        </div>

        {/* Timeline Desktop & Tablet */}
        <div data-testid="process-timeline" className="relative hidden md:block">
          {/* Connecting Line */}
          <div className="absolute top-7 left-[5%] right-[5%] h-[2px] bg-[#DEDEDB] -z-0" />

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-7 gap-3 relative z-10">
            {PROCESS_TIMELINE.map((item) => {
              const isActive = activeStep === item.step;
              return (
                <div
                  key={item.step}
                  data-testid={`process-node-${item.step}`}
                  onClick={() => setActiveStep(item.step)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Node Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-technical font-bold text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-[#C83A3A] text-white ring-4 ring-[#C83A3A]/20 scale-110 shadow-lg'
                        : 'bg-white text-[#262626] border-2 border-[#DEDEDB] group-hover:border-[#C83A3A] group-hover:text-[#C83A3A]'
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Step Name */}
                  <div className="mt-4 font-heading font-bold text-xs sm:text-sm text-[#262626] tracking-tight uppercase group-hover:text-[#C83A3A] transition-colors">
                    {item.name}
                  </div>

                  {/* Short Description */}
                  <p className="mt-2 text-xs font-body text-[#6D6D6D] leading-relaxed max-w-[150px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-4">
          {PROCESS_TIMELINE.map((item) => {
            const isActive = activeStep === item.step;
            return (
              <div
                key={item.step}
                data-testid={`mobile-process-node-${item.step}`}
                onClick={() => setActiveStep(item.step)}
                className={`p-5 rounded-[20px] transition-all border ${
                  isActive
                    ? 'bg-white border-[#C83A3A] shadow-md'
                    : 'bg-white/70 border-[#DEDEDB]'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-technical font-bold text-xs ${
                      isActive ? 'bg-[#C83A3A] text-white' : 'bg-[#EEEEEB] text-[#262626]'
                    }`}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#262626] uppercase">
                    {item.name}
                  </h3>
                </div>
                <p className="font-body text-sm text-[#6D6D6D] pl-12">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
