import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';
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
      className="bg-[#111111] text-white pt-16 sm:pt-20 pb-28 lg:pb-12 border-t border-white/10 relative overflow-hidden"
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
                <div className="font-technical text-[0.65rem] text-[#7A7A7A] uppercase tracking-wider mb-1">
                  CALL DIRECT
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-heading font-bold text-white hover:text-[#C83A3A] transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C83A3A] shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
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

              <div className="pt-2 border-t border-white/10">
                <div className="font-technical text-[0.65rem] text-[#7A7A7A] uppercase tracking-wider mb-1">
                  HEAD OFFICE
                </div>
                <div className="flex items-start gap-2 text-xs text-[#9E9E9E]">
                  <MapPin className="w-3.5 h-3.5 text-[#C83A3A] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.location} — PIN {COMPANY_INFO.pin}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-technical text-[#8A8A8A]">
          <div>
            © {new Date().getFullYear()} Bhagwat Enterprises. All rights reserved. Registered in Maharashtra, India.
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
