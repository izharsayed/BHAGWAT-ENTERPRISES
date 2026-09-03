import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SPECIFICATIONS...');
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Quick progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const step = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(prev + step, 100);

        if (next < 28) {
          setStatusText('CALIBRATING METRIC TOLERANCES ±1.0mm...');
        } else if (next < 55) {
          setStatusText('ASME SEC VIII & IS 2825 PROTOCOLS...');
        } else if (next < 80) {
          setStatusText('SYNCHRONIZING 13+ INDUSTRIAL SITES...');
        } else if (next < 100) {
          setStatusText('PREPARING ENGINEERING SHOWCASE...');
        } else {
          setStatusText('QUALITY INSPECTED · READY');
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 220);

      const removeTimer = setTimeout(() => {
        setIsRemoved(true);
        if (onComplete) onComplete();
      }, 950);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress, onComplete]);

  if (isRemoved) return null;

  return (
    <aside
      id="preloader-screen"
      data-testid="page-preloader"
      aria-label="Loading Bhagwat Enterprises Engineering Portal"
      aria-hidden={isExiting}
      className={`fixed inset-0 z-[9999] bg-[#F7F7F5] text-[#202020] flex flex-col justify-between p-6 sm:p-10 pointer-events-auto transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? '-translate-y-full shadow-2xl' : 'translate-y-0'
      }`}
    >
      {/* Background Subtle Technical Grid & Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(#C83A3A_1.2px,transparent_1.2px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#C83A3A]/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Telemetry Row */}
      <div className="relative z-10 flex items-center justify-between font-technical text-xs text-[#6D6D6D]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C83A3A] animate-ping" />
          <span className="tracking-widest uppercase text-[#262626] font-bold text-[0.68rem]">
            SYS.STATUS // ONLINE
          </span>
        </div>
        <div className="tracking-wider uppercase text-[0.62rem] text-[#8C8C8C]">
          EST. 2004 · NASHIK / NANDURBAR WORKS
        </div>
      </div>

      {/* Center Branding & Telemetry Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
        {/* Big Clean Official Dark Logo with Specular Shimmer & Pulse Glow */}
        <div className="relative mb-8 sm:mb-10 flex items-center justify-center animate-logo-glow">
          <div className="relative overflow-hidden p-2 rounded-xl">
            <img
              src="/images/bhagwat-logo.png"
              alt="Bhagwat Enterprises Logo"
              className="w-auto h-16 sm:h-20 md:h-24 max-w-[320px] sm:max-w-[440px] object-contain"
            />
            {/* Shimmer Light Gleam Sweep */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-[#C83A3A]/20 to-transparent animate-logo-shimmer"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Digital Telemetry Percentage */}
        <div className="font-technical font-black text-5xl sm:text-6xl text-[#262626] tracking-tighter mb-4 tabular-nums">
          {String(progress).padStart(2, '0')}
          <span className="text-xl sm:text-2xl font-bold text-[#C83A3A] ml-1">%</span>
        </div>

        {/* Status Text Feed */}
        <div className="font-technical text-xs font-bold text-[#C83A3A] tracking-wider uppercase flex items-center gap-1.5 h-6">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C83A3A] animate-pulse" />
          <span>{statusText}</span>
        </div>
      </div>

      {/* Bottom Progress Line & Standard Tags */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Sleek Crimson Progress Line on Light Track */}
        <div className="w-full h-1.5 bg-[#E2E2DF] rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#C83A3A] to-[#E04545] transition-all duration-75 ease-out rounded-full shadow-[0_0_10px_rgba(200,58,58,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Footer Specification Row */}
        <div className="flex items-center justify-between text-[0.58rem] font-technical text-[#8C8C8C] font-semibold uppercase tracking-wider">
          <span>ASME SEC VIII · API 650</span>
          <span>SS304 / SS316L / MS FAB</span>
        </div>
      </div>
    </aside>
  );
};
