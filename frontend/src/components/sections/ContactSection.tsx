import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Clock, Send, Building2, PhoneCall, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F7F5] border-t border-[#DEDEDB] relative overflow-hidden"
    >
      {/* Subtle Background Accent Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-pulse" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#C83A3A]">
                START A CONVERSATION
              </span>
            </div>
            <h2
              data-testid="contact-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#262626] tracking-tight leading-tight mb-4"
            >
              READY TO DISCUSS YOUR NEXT <span className="text-[#C83A3A]">PLANT OR PROJECT?</span>
            </h2>
            <p className="font-body text-[#6D6D6D] text-base sm:text-lg leading-relaxed">
              Connect directly with Bhagwat Enterprises&apos; leadership for turnkey plant execution, industrial equipment fabrication, and technical bid discussions across India.
            </p>
          </div>

          {/* 3 Enhanced Architectural Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 1. Phone Card */}
            <div
              data-testid="contact-phone-card"
              className="group rounded-[28px] bg-white border border-[#DEDEDB] hover:border-[#C83A3A] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between min-h-[320px] shadow-sm"
            >
              {/* Top Row: Icon & Availability Tag */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-13 h-13 rounded-2xl bg-[#FAEAEA] group-hover:bg-[#C83A3A] flex items-center justify-center text-[#C83A3A] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 font-technical text-[0.62rem] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Lines Active
                </span>
              </div>

              {/* Middle: Content with both Director and GM */}
              <div className="mb-5 space-y-2.5">
                <div className="font-technical text-[0.65rem] font-bold text-[#6D6D6D] uppercase tracking-[0.16em]">
                  DIRECT MOBILE LINES
                </div>

                {/* Director Line */}
                <a
                  href={`tel:${COMPANY_INFO.directorPhone}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#F7F7F5] border border-[#DEDEDB] hover:border-[#C83A3A] hover:bg-[#FAEAEA]/20 transition-all text-decoration-none group/item"
                >
                  <div>
                    <div className="font-technical text-[0.6rem] font-bold text-[#C83A3A] uppercase tracking-wider">
                      DIRECTOR
                    </div>
                    <div className="font-heading text-base sm:text-lg font-black text-[#262626] group-hover/item:text-[#C83A3A] transition-colors tracking-tight">
                      +91 {COMPANY_INFO.directorPhone}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white group-hover/item:bg-[#C83A3A] group-hover/item:text-white text-[#262626] flex items-center justify-center transition-colors shadow-2xs shrink-0">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* General Manager Line */}
                <a
                  href={`tel:${COMPANY_INFO.gmPhone}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#F7F7F5] border border-[#DEDEDB] hover:border-[#C83A3A] hover:bg-[#FAEAEA]/20 transition-all text-decoration-none group/item"
                >
                  <div>
                    <div className="font-technical text-[0.6rem] font-bold text-[#6D6D6D] uppercase tracking-wider">
                      GENERAL MANAGER (GM)
                    </div>
                    <div className="font-heading text-base sm:text-lg font-black text-[#262626] group-hover/item:text-[#C83A3A] transition-colors tracking-tight">
                      +91 {COMPANY_INFO.gmPhone}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white group-hover/item:bg-[#C83A3A] group-hover/item:text-white text-[#262626] flex items-center justify-center transition-colors shadow-2xs shrink-0">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>

              {/* Bottom Row */}
              <div className="pt-3 border-t border-[#F0F0EE] flex items-center justify-between text-xs font-technical text-[#8C8C8C]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8C8C8C]" />
                  Mon–Sat 9AM–7PM
                </span>
                <span className="font-bold text-[#C83A3A] uppercase text-[0.65rem]">
                  Tap to Call
                </span>
              </div>
            </div>

            {/* 2. Email Card */}
            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              data-testid="contact-email-link"
              className="group rounded-[28px] bg-white border border-[#DEDEDB] hover:border-[#C83A3A] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between min-h-[320px] shadow-sm text-decoration-none"
            >
              {/* Top Row: Icon & RFQ Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-[#FAEAEA] group-hover:bg-[#C83A3A] flex items-center justify-center text-[#C83A3A] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 font-technical text-[0.62rem] font-bold text-[#C83A3A] bg-[#FAEAEA] border border-[#C83A3A]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <Send className="w-3 h-3" />
                  RFQ &amp; Tenders
                </span>
              </div>

              {/* Middle: Content */}
              <div className="mb-6">
                <div className="font-technical text-[0.65rem] font-bold text-[#6D6D6D] uppercase tracking-[0.16em] mb-1.5">
                  OFFICIAL EMAIL
                </div>
                <div className="font-heading text-base sm:text-lg font-black text-[#262626] group-hover:text-[#C83A3A] transition-colors mb-2 tracking-tight break-all">
                  {COMPANY_INFO.primaryEmail}
                </div>
                <p className="font-body text-xs text-[#6D6D6D] leading-relaxed">
                  Send technical drawings, BOQs, equipment specifications, and turnkey tender documents.
                </p>
              </div>

              {/* Bottom Row: CTA Button */}
              <div className="pt-4 border-t border-[#F0F0EE] flex items-center justify-between">
                <span className="font-technical text-xs font-bold text-[#262626] group-hover:text-[#C83A3A] uppercase tracking-wider transition-colors">
                  Send RFQ / Enquiry
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F7F7F5] group-hover:bg-[#C83A3A] group-hover:text-white text-[#262626] flex items-center justify-center transition-colors duration-300 shadow-2xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* 3. Location & Facilities Card */}
            <div className="group rounded-[28px] bg-white border border-[#DEDEDB] hover:border-[#262626] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between min-h-[320px] shadow-sm">
              {/* Top Row: Icon & Status */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-13 h-13 rounded-2xl bg-[#F7F7F5] group-hover:bg-[#262626] flex items-center justify-center text-[#262626] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 font-technical text-[0.62rem] font-bold text-[#6D6D6D] bg-[#F7F7F5] border border-[#DEDEDB] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <Building2 className="w-3 h-3" />
                  2 Facilities in MH
                </span>
              </div>

              {/* Middle: Content with Head Office & Factory Works */}
              <div className="mb-5 space-y-3">
                {/* 1. Head Office (Nashik) */}
                <div className="p-3 rounded-2xl bg-[#F7F7F5] border border-[#DEDEDB]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-technical text-[0.6rem] font-bold text-[#C83A3A] uppercase tracking-wider flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      HEAD OFFICE (NASHIK)
                    </span>
                    <span className="font-technical text-[0.55rem] font-bold bg-[#E8E8E6] text-[#4A4A4A] px-1.5 py-0.5 rounded">
                      PIN {COMPANY_INFO.headOffice.pin}
                    </span>
                  </div>
                  <div className="font-body text-xs text-[#262626] font-medium leading-snug">
                    {COMPANY_INFO.headOffice.complex}, {COMPANY_INFO.headOffice.area}, {COMPANY_INFO.headOffice.city}, Maharashtra
                  </div>
                </div>

                {/* 2. Factory Address (Nandurbar) */}
                <div className="p-3 rounded-2xl bg-[#F7F7F5] border border-[#DEDEDB]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-technical text-[0.6rem] font-bold text-[#262626] uppercase tracking-wider flex items-center gap-1">
                      <Factory className="w-3 h-3 text-[#6D6D6D]" />
                      FACTORY WORKS (NANDURBAR)
                    </span>
                    <span className="font-technical text-[0.55rem] font-bold bg-[#E8E8E6] text-[#4A4A4A] px-1.5 py-0.5 rounded">
                      PIN {COMPANY_INFO.factory.pin}
                    </span>
                  </div>
                  <div className="font-body text-xs text-[#262626] font-medium leading-snug mb-2">
                    {COMPANY_INFO.factory.survey}, {COMPANY_INFO.factory.road}, {COMPANY_INFO.factory.district}, Maharashtra
                  </div>
                  <div className="pt-1.5 border-t border-[#E5E5E2] font-technical text-[0.62rem] text-[#6D6D6D] leading-tight">
                    <strong className="text-[#C83A3A] uppercase font-bold">Scope:</strong> Mfr. of S.S. &amp; M.S. Pressure Vessels, Heat Exchangers, Storage Tanks, Chimneys, Trusses &amp; Columns, Manholes.
                  </div>
                </div>

                {/* GSTIN Row */}
                <div className="flex items-center justify-between px-1 pt-0.5 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="font-technical text-[0.62rem] text-[#6D6D6D] font-bold uppercase">
                      GSTIN:
                    </span>
                    <span className="font-technical text-xs font-bold text-[#262626]">
                      {COMPANY_INFO.gst}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-technical text-[0.6rem] text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold uppercase">
                    Verified GSTIN
                  </span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="pt-3 border-t border-[#F0F0EE] flex items-center justify-between text-xs font-technical text-[#8C8C8C]">
                <span>Maharashtra, India</span>
                <span className="text-[#262626] font-bold">Contact: {COMPANY_INFO.contactPerson}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
