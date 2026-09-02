import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
  [key: string]: any;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];

  /** Selected index on mount */
  initialIndex?: number;

  /** How many cards are visible around the active (odd recommended) */
  maxVisible?: number;

  /** Card sizing */
  cardWidth?: number;
  cardHeight?: number;

  /** How much cards overlap each other (0..0.8). Higher = more overlap */
  overlap?: number;

  /** Total fan angle (deg). Higher = wider arc */
  spreadDeg?: number;

  /** 3D / depth feel */
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;

  /** Active emphasis */
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;

  /** Motion */
  springStiffness?: number;
  springDamping?: number;

  /** Behavior */
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;

  /** UI */
  showDots?: boolean;
  showControls?: boolean;
  className?: string;

  /** Hooks */
  onChangeIndex?: (index: number, item: T) => void;

  /** Custom renderer (optional) */
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

/** Minimal signed offset from active index to i, with wrapping (for loop behavior). */
function signedOffset(i: number, active: number, len: number, loop: boolean) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;

  // consider wrapped alternative
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 5,

  cardWidth = 560,
  cardHeight = 360,

  overlap = 0.52,
  spreadDeg = 34,

  perspectivePx = 1200,
  depthPx = 120,
  tiltXDeg = 10,

  activeLiftPx = 22,
  activeScale = 1.04,
  inactiveScale = 0.92,

  springStiffness = 240,
  springDamping = 26,

  loop = true,
  autoAdvance = true,
  intervalMs = 3200,
  pauseOnHover = false,

  showDots = true,
  showControls = true,
  className,

  onChangeIndex,
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const len = items.length;

  const [active, setActive] = React.useState(() => wrapIndex(initialIndex, len));
  const isDraggingRef = React.useRef(false);
  const isHoveredRef = React.useRef(false);

  // Responsive card size tracking
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveCardWidth = React.useMemo(() => {
    if (windowWidth < 480) return Math.min(cardWidth, windowWidth - 40);
    if (windowWidth < 768) return Math.min(cardWidth, windowWidth - 64);
    if (windowWidth < 1024) return Math.min(cardWidth, 480);
    return cardWidth;
  }, [windowWidth, cardWidth]);

  const responsiveCardHeight = React.useMemo(() => {
    if (windowWidth < 480) return Math.round(responsiveCardWidth * 0.88);
    if (windowWidth < 768) return Math.round(responsiveCardWidth * 0.75);
    return cardHeight;
  }, [windowWidth, responsiveCardWidth, cardHeight]);

  // Keep active in bounds if items change
  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  React.useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]!);
  }, [active, len, items, onChangeIndex]);

  const effectiveMaxVisible = windowWidth < 640 ? Math.min(3, maxVisible) : maxVisible;
  const maxOffset = Math.max(0, Math.floor(effectiveMaxVisible / 2));

  const cardSpacing = Math.max(12, Math.round(responsiveCardWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = React.useCallback(() => {
    if (!len) return;
    if (!canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = React.useCallback(() => {
    if (!len) return;
    if (!canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  // Robust, reliable auto-advance timer
  React.useEffect(() => {
    if (!autoAdvance || len <= 1 || reduceMotion) return;

    const intervalId = window.setInterval(() => {
      // Pause if actively dragging, or if user is pointing cursor to card
      if (isDraggingRef.current) return;
      if (pauseOnHover && isHoveredRef.current) return;

      setActive((current) => {
        if (!loop && current >= len - 1) return current;
        return wrapIndex(current + 1, len);
      });
    }, Math.max(1000, intervalMs));

    return () => window.clearInterval(intervalId);
  }, [autoAdvance, intervalMs, pauseOnHover, reduceMotion, len, loop]);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  if (!len) return null;

  return (
    <div className={cn("w-full select-none", className)}>
      {/* Stage */}
      <div
        className="relative w-full flex items-center justify-center overflow-visible"
        style={{ height: Math.max(380, responsiveCardHeight + 90) }}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        aria-label="3D Project Card Stack"
      >


        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: `${perspectivePx}px`,
          }}
        >
          {items.map((item, i) => {
            const off = signedOffset(i, active, len, loop);
            const abs = Math.abs(off);

            // Render visible cards plus 1 card buffer on each side for butter-smooth entry & exit
            const isBuffered = abs <= maxOffset + 1;
            if (!isBuffered) return null;

            const isOffscreen = abs > maxOffset;

            // Geometry calculations
            const rotateZ = off * stepDeg;
            const x = off * cardSpacing;
            const y = abs * 14;
            const z = -abs * depthPx;

            const isActive = off === 0;
            const scale = isActive
              ? activeScale
              : Math.max(0.72, inactiveScale - (abs - 1) * 0.05);
            const lift = isActive ? -activeLiftPx : 0;
            const rotateX = isActive ? 0 : tiltXDeg;
            const zIndex = 100 - abs;

            // Smooth opacity for cards at the very outer edge
            const opacity = isOffscreen ? 0 : 1;

            // Drag only on active card
            const dragProps = isActive
              ? {
                  drag: "x" as const,
                  dragConstraints: { left: 0, right: 0 },
                  dragElastic: 0.22,
                  onDragStart: () => {
                    isDraggingRef.current = true;
                  },
                  onDragEnd: (
                    _e: any,
                    info: { offset: { x: number }; velocity: { x: number } }
                  ) => {
                    setTimeout(() => {
                      isDraggingRef.current = false;
                    }, 400);

                    if (reduceMotion) return;
                    const travel = info.offset.x;
                    const v = info.velocity.x;
                    const threshold = Math.min(120, responsiveCardWidth * 0.18);

                    if (travel > threshold || v > 400) prev();
                    else if (travel < -threshold || v < -400) next();
                  },
                }
              : {};

            return (
              <motion.div
                key={item.id}
                className={cn(
                  "absolute rounded-[28px] border border-black/5 overflow-hidden shadow-lg",
                  "will-change-transform select-none transition-shadow duration-300",
                  isActive
                    ? "cursor-grab active:cursor-grabbing ring-2 ring-[#C83A3A]/40 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.22)]"
                    : isOffscreen
                    ? "pointer-events-none"
                    : "cursor-pointer hover:border-black/15 shadow-md"
                )}
                style={{
                  width: responsiveCardWidth,
                  height: responsiveCardHeight,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
                initial={false}
                animate={{
                  opacity,
                  x,
                  y: y + lift,
                  rotateZ,
                  rotateX,
                  scale,
                  pointerEvents: isOffscreen ? "none" : "auto",
                }}
                transition={{
                  type: "spring",
                  stiffness: springStiffness,
                  damping: springDamping,
                  mass: 0.8,
                }}
                onClick={() => {
                  if (!isActive && !isOffscreen) {
                    setActive(i);
                  }
                }}
                onMouseEnter={() => {
                  isHoveredRef.current = true;
                }}
                onMouseLeave={() => {
                  isHoveredRef.current = false;
                }}
                {...dragProps}
              >
                <div
                  className="h-full w-full"
                  style={{
                    transform: `translateZ(${z}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {renderCard ? (
                    renderCard(item, { active: isActive })
                  ) : (
                    <DefaultFanCard item={item} />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls and Pagination */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto px-4">
        {/* Previous Button */}
        {showControls ? (
          <button
            type="button"
            onClick={prev}
            className="hidden sm:flex w-10 h-10 rounded-full border border-[#DEDEDB] bg-white text-[#262626] items-center justify-center hover:bg-[#262626] hover:text-white hover:border-[#262626] transition-all duration-200 shadow-sm cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        ) : <div className="hidden sm:block w-10" />}

        {/* Center Dots and Counter */}
        <div className="flex items-center gap-3">
          {showDots ? (
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-black/5 border border-black/10 backdrop-blur-xs">
              {items.map((it, idx) => {
                const on = idx === active;
                return (
                  <button
                    key={it.id}
                    onClick={() => setActive(idx)}
                    className={cn(
                      "rounded-full transition-all duration-300 cursor-pointer",
                      on
                        ? "w-6 h-2 bg-[#C83A3A]"
                        : "w-2 h-2 bg-[#262626]/25 hover:bg-[#262626]/60"
                    )}
                    aria-label={`Go to ${it.title}`}
                  />
                );
              })}
            </div>
          ) : null}

          {/* Active Counter */}
          <span className="font-technical text-xs font-bold text-[#6D6D6D] tracking-wider ml-1">
            {String(active + 1).padStart(2, "0")} / {String(len).padStart(2, "0")}
          </span>
        </div>

        {/* Next Button */}
        {showControls ? (
          <button
            type="button"
            onClick={next}
            className="hidden sm:flex w-10 h-10 rounded-full border border-[#DEDEDB] bg-white text-[#262626] items-center justify-center hover:bg-[#262626] hover:text-white hover:border-[#262626] transition-all duration-200 shadow-sm cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : <div className="hidden sm:block w-10" />}
      </div>

      {/* Swipe helper on mobile */}
      <div className="sm:hidden text-center mt-3">
        <span className="font-technical text-[0.65rem] text-[#6D6D6D] uppercase tracking-wider">
          Swipe left / right or tap card to view
        </span>
      </div>
    </div>
  );
}

function DefaultFanCard({ item }: { item: CardStackItem }) {
  return (
    <div className="relative h-full w-full bg-[#262626]">
      {/* image */}
      <div className="absolute inset-0">
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-full w-full object-cover"
            draggable={false}
            loading="eager"
          />
        ) : null}
      </div>

      {/* subtle gradient overlay at bottom for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/75 to-[#262626]/40" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div className="truncate text-lg font-bold text-white font-heading">
          {item.title}
        </div>
        {item.description ? (
          <div className="mt-1 line-clamp-2 text-sm text-white/80 font-body">
            {item.description}
          </div>
        ) : null}
      </div>
    </div>
  );
}
