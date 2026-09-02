import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Home, Building2, Layers, Factory, PhoneCall } from 'lucide-react';
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

  const handleNavClick = (href: string) => {
    setActiveHash(href);
  };

  const activeTabName = tubelightNavItems.find((it) => it.url === activeHash)?.name ?? 'Home';

  return (
    <>
      {/* Top Header Bar (Desktop & Mobile) */}
      <header
        data-testid="site-navigation"
        className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-300 pointer-events-none bg-transparent"
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

          {/* Mobile Direct Action Button (Top Right) */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              data-testid="mobile-quick-call"
              aria-label={`Call ${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C83A3A] hover:bg-[#B03333] text-white text-xs font-technical font-bold shadow-md active:scale-95 transition-all text-decoration-none"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Tubelight Navigation Dock (Fixed Bottom) */}
      <nav
        data-testid="mobile-tubelight-dock"
        aria-label="Mobile Navigation"
        className="fixed bottom-3 inset-x-3 sm:inset-x-6 z-50 pointer-events-auto flex justify-center lg:hidden pb-[env(safe-area-inset-bottom)]"
      >
        <div className="bg-[#141414]/95 backdrop-blur-md border border-white/15 rounded-full px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-around w-full max-w-[420px]">
          {tubelightNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeHash === item.url;
            return (
              <a
                key={item.name}
                href={item.url}
                data-testid={`mobile-${item.testId}`}
                onClick={() => handleNavClick(item.url)}
                className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all duration-300 text-decoration-none ${
                  isActive ? 'text-white' : 'text-[#8E8E8E] hover:text-white'
                }`}
              >
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full bg-[#C83A3A] -z-10 shadow-[0_0_14px_rgba(200,58,58,0.55)] animate-in fade-in zoom-in-95 duration-200"
                  />
                )}
                <Icon className="w-4 h-4 mb-0.5" />
                <span className="text-[0.6rem] font-technical font-bold tracking-tight">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};
