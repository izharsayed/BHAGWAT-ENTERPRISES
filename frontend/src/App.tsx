import React from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { FloatingActions } from './components/FloatingActions';
import { HeroSection } from './components/sections/HeroSection';
import { CompanyIntroSection } from './components/sections/CompanyIntroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { TechnicalDetailSection } from './components/sections/TechnicalDetailSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { BuiltExperienceSection } from './components/sections/BuiltExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#202020] selection:bg-[#C83A3A] selection:text-white">
      {/* Initial Page Loading Telemetry Screen */}
      <Preloader />

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Single Page Editorial Content */}
      <main id="main-content" className="flex-1 w-full overflow-x-hidden">
        {/* 01. Hero */}
        <HeroSection />

        {/* 02. Company introduction */}
        <CompanyIntroSection />

        {/* 03. About Bhagwat Enterprises */}
        <AboutSection />

        {/* 05. Project experience */}
        <ProjectsSection />

        {/* 09. Industries we serve */}
        <IndustriesSection />

        {/* 10. Technical detail */}
        <TechnicalDetailSection />

        {/* 11. Why Bhagwat Enterprises */}
        <WhyUsSection />

        {/* 12. Built through experience */}
        <BuiltExperienceSection />

        {/* 13. Contact CTA and form */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Floating Action Cluster: Call, Disabled WhatsApp, Back To Top */}
      <FloatingActions />
    </div>
  );
};

export default App;
