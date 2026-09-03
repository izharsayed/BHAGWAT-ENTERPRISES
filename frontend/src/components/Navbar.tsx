import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Home, Building2, Layers, Factory, PhoneCall, Menu, X } from 'lucide-react';
import { TubelightNavbar, type TubelightNavItem } from './ui/tubelight-navbar';

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

          {/* Mobile Actions: Smooth Hamburger Toggle */}
          <div className="flex items-center lg:hidden">
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

      {/* Mobile Floating Card Modal (Matching Website Light Theme) */}
      <div
        id="mobile-menu-backdrop"
        data-testid="mobile-card-backdrop"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/45 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
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
            className={`w-full rounded-[28px] sm:rounded-[32px] bg-white/95 backdrop-blur-2xl border border-[#DEDEDB] shadow-[0_25px_60px_rgba(0,0,0,0.22)] p-4 sm:p-5 text-[#262626] ${
              mobileMenuOpen
                ? 'animate-spring-drop'
                : 'opacity-0 -translate-y-6 scale-95 transition-all duration-200 ease-in pointer-events-none'
            }`}
          >
            {/* Card Header Row (Close Button) */}
            <div className="flex items-center justify-between pb-2 border-b border-[#F0F0EE]">
              <span className="font-technical text-[0.68rem] font-bold text-[#8C8C8C] uppercase tracking-wider pl-1">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-card-close"
                aria-label="Close navigation menu"
                className="w-9 h-9 rounded-full bg-[#F2F2F0] hover:bg-[#C83A3A] hover:text-white border border-[#E2E2DF] flex items-center justify-center text-[#262626] active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation List with Staggered Cascading Animation */}
            <div className="py-2.5 space-y-1">
              {tubelightNavItems.map((item, index) => {
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
                    style={
                      mobileMenuOpen
                        ? { animationDelay: `${100 + index * 50}ms` }
                        : undefined
                    }
                    className={`block w-full px-4 py-3 rounded-2xl font-heading text-base font-bold transition-all text-decoration-none ${
                      mobileMenuOpen ? 'animate-link-stagger' : ''
                    } ${
                      isActive
                        ? 'bg-[#FAEAEA] border border-[#C83A3A]/25 text-[#C83A3A] shadow-xs'
                        : 'text-[#262626] hover:text-[#C83A3A] hover:bg-[#F7F7F5]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-pulse" />
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
