import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      data-testid="floating-action-cluster"
      className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-center gap-3"
      role="region"
      aria-label="Quick Actions"
    >
      {/* Back to Top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          data-testid="floating-back-to-top"
          aria-label="Back to top"
          className="w-12 h-12 rounded-full bg-[#262626] text-white flex items-center justify-center shadow-lg hover:bg-[#333333] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#C83A3A] cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Disabled WhatsApp button */}
      <div className="relative group">
        <button
          type="button"
          disabled
          data-testid="floating-whatsapp-disabled"
          aria-label="WhatsApp not enabled"
          className="w-12 h-12 rounded-full bg-white border border-[#DEDEDB] text-[#BDBDBD] flex items-center justify-center shadow-md cursor-not-allowed opacity-80"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
        <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#262626] text-[#FFFFFF] text-[0.7rem] px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          WhatsApp Not Enabled (Configurable Later)
        </span>
      </div>

      {/* Direct Call button */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        data-testid="floating-call-button"
        aria-label={`Call Bhagwat Enterprises at ${COMPANY_INFO.phone}`}
        className="w-12 h-12 rounded-full bg-[#C83A3A] text-white flex items-center justify-center shadow-xl hover:bg-[#A92F2F] hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
