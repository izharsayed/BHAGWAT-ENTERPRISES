import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Home, Building2, Layers, Factory, PhoneCall, Menu, X } from 'lucide-react';
import { TubelightNavbar, type TubelightNavItem } from './ui/tubelight-navbar';
import { COMPANY_INFO } from '../data/companyData';

const tubelightNavItems: TubelightNavItem[] = [
  { name: 'Home', url: '#hero', icon: Home, testId: 'nav-link-home' },
  { name: 'About', url: '#about', icon: Building2, testId: 'nav-link-about' },
  { name: 'Projects', url: '#projects', icon: Layers, testId: 'nav-link-projects' },
  { name: 'Industries', url: '#industries', icon: Factory, testId: 'nav-link-industries' },
  { name: 'Contact', url: '#contact', icon: PhoneCall, testId: 'nav-link-contact' },
];

export const Navbar: React.FC = () => {
  const [activeHash, setActiveHash] = useState('#hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll spy for sections
      const sectionIds = ['hero', 'about', 'projects', 'industries', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveHash(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
  };

  const activeTabName = tubelightNavItems.find((it) => it.url === activeHash)?.name ?? 'Home';

  return (
    <>
      {/* Top Header Bar (Desktop & Mobile) */}
      <header
        data-testid="site-navigation"
        className="fixed top-0 left-0 right-0 z-40 py-3 sm:py-4 transition-all duration-300 pointer-events-none bg-transparent"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <a
            href="#hero"
            data-testid="nav-logo-link"
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-3 group text-decoration-none py-0.5"
            aria-label="Bhagwat Enterprises Home"
          >
            <img
              src="/images/bhagwat-logo.png?v=4"
              alt="Bhagwat Enterprises"
              className="w-[110px] sm:w-[130px] md:w-[150px] lg:w-[165px] xl:w-[180px] h-auto max-h-10 sm:max-h-11 object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Tubelight Navigation */}
          <div className="hidden lg:block">
            <TubelightNavbar
              items={tubelightNavItems}
              activeTab={activeTabName}
              onTabChange={(_name, url) => handleNavClick(url)}
            />
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              data-testid="nav-cta-quote"
              onClick={() => handleNavClick('#contact')}
              className="btn-primary"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions: Call Button + Smooth Hamburger Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              data-testid="mobile-quick-call"
              aria-label={`Call ${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C83A3A] hover:bg-[#B03333] text-white text-xs font-technical font-bold shadow-md active:scale-95 transition-all text-decoration-none"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#DEDEDB] shadow-md flex items-center justify-center text-[#262626] hover:text-[#C83A3A] active:scale-95 transition-all cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Floating Card Modal (Matching User Reference) */}
      <div
        id="mobile-menu-backdrop"
        data-testid="mobile-card-backdrop"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/65 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Floating Card Container at Top */}
        <div className="p-3.5 sm:p-5 w-full max-w-[440px] mx-auto">
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full rounded-[28px] sm:rounded-[32px] bg-[#141518]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 sm:p-5 text-white transition-all duration-300 ease-out transform ${
              mobileMenuOpen
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-4 scale-95'
            }`}
          >
            {/* Card Header Row (Close Button) */}
            <div className="flex items-center justify-end pb-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-card-close"
                aria-label="Close navigation menu"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C83A3A] border border-white/15 flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation List */}
            <div className="py-2.5 space-y-1">
              {tubelightNavItems.map((item) => {
                const isActive = activeHash === item.url;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    data-testid={`mobile-card-nav-${item.name.toLowerCase()}`}
                    onClick={() => {
                      handleNavClick(item.url);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full px-4 py-3 rounded-2xl font-heading text-base font-bold transition-all text-decoration-none ${
                      isActive
                        ? 'bg-[#0B1530]/90 border border-blue-500/30 text-white shadow-md'
                        : 'text-[#E0E0E0] hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#C83A3A]" />
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
