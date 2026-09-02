import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const CompanyIntroSection: React.FC = () => {
  return (
    <section
      id="about-intro"
      data-testid="company-intro-section"
      className="py-20 md:py-28 lg:py-32 bg-[#FFFFFF] border-y border-[#DEDEDB]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">WHO WE ARE</div>
            <h2
              data-testid="company-intro-heading"
              className="section-h2 uppercase mb-6 text-[#262626]"
            >
              ENGINEERING BUILT AROUND<br />
              <span className="text-[#C83A3A]">REAL INDUSTRIAL EXECUTION.</span>
            </h2>
            <p className="font-body text-[#6D6D6D] text-lg leading-relaxed mb-8 max-w-2xl">
              {COMPANY_INFO.description}
            </p>
            <div>
              <a
                href="#about"
                data-testid="company-intro-cta"
                className="btn-secondary group"
              >
                <span>MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-[#C83A3A] group-hover:text-white transition-colors group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 lg:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
              {/* Stat 1 */}
              <div
                data-testid="stat-card-years"
                className="group p-6 rounded-[24px] bg-[#F7F7F5] border border-[#DEDEDB] hover:border-[#C83A3A] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[160px]"
              >
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#C83A3A] tracking-tight mb-3">
                  20+
                </div>
                <div>
                  <div className="font-heading text-xs sm:text-sm font-bold uppercase tracking-tight text-[#262626] group-hover:text-[#C83A3A] transition-colors">
                    YEARS EXPERIENCE
                  </div>
                  <div className="font-technical text-[0.62rem] text-[#6D6D6D] uppercase tracking-wider mt-1">
                    Industry Proven
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div
                data-testid="stat-card-projects"
                className="group p-6 rounded-[24px] bg-[#F7F7F5] border border-[#DEDEDB] hover:border-[#C83A3A] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[160px]"
              >
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#262626] tracking-tight mb-3">
                  13+
                </div>
                <div>
                  <div className="font-heading text-xs sm:text-sm font-bold uppercase tracking-tight text-[#262626] group-hover:text-[#C83A3A] transition-colors">
                    COMPLETED PLANTS
                  </div>
                  <div className="font-technical text-[0.62rem] text-[#6D6D6D] uppercase tracking-wider mt-1">
                    Major Turnkey Sites
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div
                data-testid="stat-card-states"
                className="group p-6 rounded-[24px] bg-[#F7F7F5] border border-[#DEDEDB] hover:border-[#C83A3A] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[160px]"
              >
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#262626] tracking-tight mb-3 pt-2">
                  MULTI-STATE
                </div>
                <div>
                  <div className="font-heading text-xs sm:text-sm font-bold uppercase tracking-tight text-[#262626] group-hover:text-[#C83A3A] transition-colors">
                    PROJECT EXECUTION
                  </div>
                  <div className="font-technical text-[0.62rem] text-[#6D6D6D] uppercase tracking-wider mt-1">
                    Pan-India Footprint
                  </div>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <p className="font-technical text-[0.68rem] text-[#6D6D6D] uppercase tracking-wider">
              *Verified project execution record across process plants and industrial facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
