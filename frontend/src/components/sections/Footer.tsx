import React from 'react';
import { ArrowUp, Phone, Mail, CheckCircle2, ShieldCheck, ChevronRight, Building2, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerNav = [
    { name: 'Home', href: '#hero' },
    { name: 'Company Profile', href: '#about' },
    { name: 'Turnkey Projects', href: '#projects' },
    { name: 'Industries Served', href: '#industries' },
    { name: 'Technical Capabilities', href: '#technical' },
    { name: 'Execution Principles', href: '#why-us' },
    { name: 'Direct Enquiries', href: '#contact' },
  ];

  const capabilities = [
    'Turnkey Starch & Process Plants',
    'Heavy Equipment & Crane Rigging',
    'SS304/SS316 Storage Silos & Tanks',
    'Industrial Piping & Heat Exchangers',
    'ASME IX Coded Welding & NDT Testing',
  ];

  return (
    <footer
      data-testid="site-footer"
      className="bg-[#111111] text-white pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pb-12 border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#C83A3A]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand & Corporate Statement */}
          <div className="lg:col-span-5">
            <a
              href="#hero"
              className="inline-block mb-6 group"
              aria-label="Bhagwat Enterprises Home"
            >
              <img
                src="/images/bhagwat-logo-silver.png?v=2"
                alt="Bhagwat Enterprises"
                className="w-[220px] sm:w-[260px] md:w-[300px] h-auto object-contain transition-transform duration-300 group-hover:scale-102 drop-shadow-[0_4px_16px_rgba(255,255,255,0.08)]"
              />
            </a>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-technical text-[#C83A3A] font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>20+ Years Industrial Engineering Heritage</span>
            </div>

            <p className="font-body text-[#A0A0A0] text-sm sm:text-base leading-relaxed max-w-md mb-6">
              Leading fabrication and erection engineering company specializing in turnkey process plants, heavy rotary equipment erection, and stainless steel storage silos across India.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-technical text-[#D4D4D4]">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                13+ Verified Plants
              </span>
              <span className="text-white/20">•</span>
              <span>7 Indian States</span>
              <span className="text-white/20">•</span>
              <span>ISO &amp; ASME Standards</span>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="lg:col-span-3">
            <div className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A] mb-5">
              CORE CAPABILITIES
            </div>
            <ul className="space-y-2.5 font-body text-xs sm:text-sm text-[#B0B0B0]">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C83A3A] shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A] mb-5">
              NAVIGATION
            </div>
            <ul data-testid="footer-nav-links" className="space-y-2.5 font-body text-xs sm:text-sm">
              {footerNav.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#B0B0B0] hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C83A3A] group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <div className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A] mb-5">
              DIRECT CONTACT
            </div>
            <div className="space-y-4 font-body text-xs sm:text-sm text-[#B0B0B0]">
              <div>
                <div className="font-technical text-[0.65rem] text-[#7A7A7A] uppercase tracking-wider mb-1.5">
                  CALL DIRECT
                </div>
                <div className="space-y-1.5">
                  <a
                    href={`tel:${COMPANY_INFO.directorPhone}`}
                    className="font-heading font-bold text-white hover:text-[#C83A3A] transition-colors flex items-center justify-between group/line text-decoration-none"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C83A3A] shrink-0" />
                      <span>+91 {COMPANY_INFO.directorPhone}</span>
                    </div>
                    <span className="font-technical text-[0.55rem] text-[#A8A8A8] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded group-hover/line:border-[#C83A3A] group-hover/line:text-white">
                      DIRECTOR
                    </span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.gmPhone}`}
                    className="font-heading font-bold text-white hover:text-[#C83A3A] transition-colors flex items-center justify-between group/line text-decoration-none"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C83A3A] shrink-0" />
                      <span>+91 {COMPANY_INFO.gmPhone}</span>
                    </div>
                    <span className="font-technical text-[0.55rem] text-[#A8A8A8] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded group-hover/line:border-[#C83A3A] group-hover/line:text-white">
                      GM
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <div className="font-technical text-[0.65rem] text-[#7A7A7A] uppercase tracking-wider mb-1">
                  EMAIL RFQ
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.primaryEmail}`}
                  className="text-white hover:text-[#C83A3A] transition-colors break-all inline-flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C83A3A] shrink-0" />
                  <span className="text-xs">{COMPANY_INFO.primaryEmail}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2.5">
                {/* Head Office (Nashik) */}
                <div>
                  <div className="font-technical text-[0.62rem] text-[#C83A3A] font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    HEAD OFFICE (NASHIK)
                  </div>
                  <div className="text-xs text-[#9E9E9E] leading-relaxed">
                    {COMPANY_INFO.headOffice.complex}, {COMPANY_INFO.headOffice.area}, Nashik — PIN {COMPANY_INFO.headOffice.pin}
                  </div>
                </div>

                {/* Factory Works (Nandurbar) */}
                <div>
                  <div className="font-technical text-[0.62rem] text-[#A8A8A8] font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                    <Factory className="w-3 h-3 text-[#C83A3A]" />
                    FACTORY WORKS (NANDURBAR)
                  </div>
                  <div className="text-xs text-[#9E9E9E] leading-relaxed mb-1">
                    {COMPANY_INFO.factory.survey}, {COMPANY_INFO.factory.road}, {COMPANY_INFO.factory.district} — PIN {COMPANY_INFO.factory.pin}
                  </div>
                  <div className="font-technical text-[0.58rem] text-[#808080] leading-tight">
                    Mfr. of S.S. &amp; M.S. Pressure Vessels, Heat Exchangers, Storage Tanks, Chimneys, Trusses &amp; Columns, Manholes
                  </div>
                </div>

                {/* GSTIN Details */}
                <div className="font-technical text-[0.68rem] text-white/90 pt-1">
                  <span className="text-[#7A7A7A]">GSTIN: </span>
                  <span className="font-bold tracking-wider">{COMPANY_INFO.gst}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-technical text-[#8A8A8A]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Bhagwat Enterprises. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/80 font-semibold">GSTIN: {COMPANY_INFO.gst}</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Registered in Maharashtra, India.</span>
          </div>
          <button
            type="button"
            data-testid="footer-back-to-top"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#C83A3A] hover:text-white hover:border-[#C83A3A] transition-all uppercase tracking-wider cursor-pointer shadow-2xs"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
