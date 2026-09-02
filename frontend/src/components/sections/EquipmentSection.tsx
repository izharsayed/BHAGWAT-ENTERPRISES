import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ENGINEERED_EQUIPMENT, COMPANY_INFO } from '../../data/companyData';

export const EquipmentSection: React.FC = () => {
  return (
    <section
      id="products"
      data-testid="equipment-section"
      className="py-20 md:py-28 lg:py-32 bg-[#FFFFFF] border-y border-[#DEDEDB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">ENGINEERED EQUIPMENT</div>
            <h2 className="section-h2 uppercase text-[#262626] mb-4">
              CATEGORIES SHAPED AROUND INDUSTRIAL NEED.
            </h2>
            <p className="font-body text-[#6D6D6D] text-base sm:text-lg">
              Product directions associated with the company’s public material. Specifications remain open for confirmation.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              data-testid="equipment-cta-discuss"
              className="btn-primary"
            >
              <span>DISCUSS YOUR REQUIREMENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENGINEERED_EQUIPMENT.map((item) => (
            <div
              key={item.id}
              data-testid={`product-card-${item.number}`}
              className="group bg-[#FFFFFF] rounded-[28px] border border-[#DEDEDB] hover:border-[#C83A3A] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F5]">
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#262626]/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-[0.65rem] font-technical uppercase tracking-wider">
                  {item.context}
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 px-2.5 py-1 rounded border border-[#DEDEDB] text-center">
                  <span className="font-technical text-[0.55rem] font-semibold text-[#6D6D6D] uppercase">
                    {COMPANY_INFO.disclaimer}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-technical text-sm font-bold text-[#C83A3A] tracking-wider">
                      {item.number}
                    </span>
                    <span className="font-technical text-xs text-[#6D6D6D] uppercase tracking-wider">
                      {item.context}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#262626] group-hover:text-[#C83A3A] transition-colors uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-[#6D6D6D] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#EEEEEB] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-technical text-xs font-bold text-[#262626] group-hover:text-[#C83A3A] uppercase tracking-wider transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
