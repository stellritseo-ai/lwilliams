import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { processSteps } from "@/data/site-data";

/* ── Custom Animated Business SVG Icons for Start & Finish (Brown Style) ────── */

/** Left (Start) Icon: Dallas Property & Craftsmanship Assessment */
const AnimatedStartIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="54" height="54" rx="18" fill="url(#startBg)" />
    <rect x="1" y="1" width="52" height="52" rx="17" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.7" />

    <g className="animate-spin-slow origin-center" style={{ transformOrigin: "38px 14px" }}>
      <circle cx="38" cy="14" r="5" fill="#F59E0B" opacity="0.9" />
      <path
        d="M38 6V8M38 20V22M30 14H32M44 14H46M32.3 8.3L33.7 9.7M42.3 18.3L43.7 19.7M32.3 19.7L33.7 18.3M42.3 9.7L43.7 8.3"
        stroke="#F59E0B"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </g>

    {/* House Silhouette */}
    <path d="M13 26L25 15L37 26" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 25V36C17 37.1 17.9 38 19 38H31C32.1 38 33 37.1 33 36V25" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

    <defs>
      <linearGradient id="startBg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0F172A" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
    </defs>
  </svg>
);

/** Right (Finish) Icon: Quality Shield Guarantee with Checkmark */
const AnimatedFinishIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="54" height="54" rx="18" fill="url(#finishBg)" />
    <rect x="1" y="1" width="52" height="52" rx="17" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.8" />

    {/* Shield Outline */}
    <path d="M27 10L41 15V26C41 34.5 34.5 42 27 45C19.5 42 13 34.5 13 26V15L27 10Z" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />

    {/* Checkmark */}
    <path d="M20 26.5L25 31.5L34 21.5" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

    <defs>
      <linearGradient id="finishBg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0A101D" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
    </defs>
  </svg>
);

export function Process() {
  const desktopPositions = [
    { left: "18%", top: "50px" },
    { left: "40%", top: "50px" },
    { left: "62%", top: "50px" },
    { left: "84%", top: "50px" },
  ];

  return (
    <section
      id="process"
      className="relative pt-[60px] pb-[20px] overflow-hidden bg-white border-y border-slate-100"
      style={{
        paddingTop: "60px",
        paddingBottom: "5px",
      }}
    >
      {/* Background grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #F59E0B 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Custom CSS Animations (Brown Style) */}
      <style>{`
        @keyframes sparkFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 45; }
        }
        @keyframes verticalElectricFlow {
          0%   { background-position: 0 0; }
          100% { background-position: 0 -40px; }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spark-flow { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
        .animate-spin-slow { animation: spinSlow 12s linear infinite; }
        .mobile-electric-flow {
          background: linear-gradient(to bottom, #0F172A 0%, #0F172A 30%, #F59E0B 50%, #0F172A 70%, #0F172A 100%);
          background-size: 100% 40px;
          animation: verticalElectricFlow 1.2s infinite linear;
        }
      `}</style>

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* ── Section Header (Brown Style) ──────────────────────────────── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary rounded-full px-5 py-1.5 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            HOW WE WORK
            <Sparkles className="w-3.5 h-3.5 text-primary" />
          </span>

          <h2 className="text-slate-900 tracking-tight leading-[1.15] font-black text-[24px] sm:text-[32px] lg:text-[36px] mt-1 mb-3">
            We Complete Every{" "}
            <span className="bg-gradient-to-r from-primary via-amber-500 to-[#d97706] bg-clip-text text-transparent">
              Step Carefully.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed mt-3">
            From the initial phone call to the final sign-off, our transparent process ensures flawless results with no surprises.
          </p>
        </motion.div>

        {/* ── 1. DESKTOP: Conduit Layout ──────────────── */}
        <div className="hidden lg:block relative w-full h-[320px] select-none">
          {/* Left Animated Start Icon */}
          <div className="absolute left-[60px] top-[50px] z-20 -translate-x-1/2 -translate-y-1/2 group">
            <div className="relative p-1.5 rounded-[22px] bg-white shadow-[0_12px_36px_rgba(245,158,11,0.22)] border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-1.5 rounded-[24px] bg-primary/20 blur-md -z-10 group-hover:bg-primary/40 transition-colors animate-pulse" />
              <AnimatedStartIcon />
            </div>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider text-primary whitespace-nowrap bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 shadow-sm">
              Service Start
            </div>
          </div>

          {/* Right Animated Finish Icon */}
          <div className="absolute right-[10px] top-[50px] z-20 translate-x-1/2 -translate-y-1/2 group">
            <div className="relative p-1.5 rounded-[22px] bg-white shadow-[0_12px_36px_rgba(245,158,11,0.28)] border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-1.5 rounded-[24px] bg-primary/25 blur-md -z-10 group-hover:bg-primary/50 transition-colors animate-pulse" />
              <AnimatedFinishIcon />
            </div>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider text-slate-900 whitespace-nowrap bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-primary/40 shadow-sm">
              100% Guaranteed
            </div>
          </div>

          {/* Conduit Connecting Line */}
          <svg
            viewBox="0 0 1200 100"
            className="absolute top-0 left-0 w-full h-[100px] pointer-events-none z-0"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Conduit Outer */}
            <path
              d="M 60 50 L 1140 50"
              stroke="#0F172A"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Animated primary core */}
            <motion.path
              d="M 60 50 L 1140 50"
              stroke="#F59E0B"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            {/* Gold spark flow */}
            <path
              d="M 60 50 L 1140 50"
              stroke="#FDE68A"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.9"
              className="spark-flow"
            />
          </svg>

          {/* Step nodes */}
          {processSteps.map((s, i) => {
            const pos = desktopPositions[i];
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="absolute group cursor-default"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Circle node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[82px] h-[82px] rounded-full bg-white shadow-[0_12px_36px_rgba(15,23,42,0.12)] border-2 border-slate-200 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(245,158,11,0.3)] group-hover:border-primary">
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-[#d97706] text-white flex items-center justify-center shadow-md border-2 border-white">
                    <span className="text-[11px] font-black leading-none">{i + 1}</span>
                  </div>
                  {/* Icon */}
                  <Icon className="h-7 w-7 text-slate-600 group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Text block below node */}
                <div className="absolute top-[52px] -translate-x-1/2 text-center w-[230px] flex flex-col items-center pt-2">
                  <h3 className="font-extrabold text-[15px] text-slate-900 leading-tight mt-1 mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-medium px-1">
                    {s.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── 2. MOBILE: Vertical Timeline (Brown Style) ────────────────── */}
        <div className="relative grid gap-8 pl-14 lg:hidden pt-10 pb-4">
          {/* Mobile Top Start Icon */}
          <div className="absolute left-[14px] -top-6 z-20 p-1 rounded-2xl bg-white shadow-md border-2 border-primary flex items-center justify-center">
            <AnimatedStartIcon />
          </div>

          {/* Animated vertical conduit */}
          <div className="absolute left-[39px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
            <div className="absolute inset-0 bg-slate-900/10 rounded-full blur-[2px]" />
            <div className="absolute inset-0 bg-[#0F172A] rounded-full" />
            <div className="absolute inset-[2px] rounded-full mobile-electric-flow" />
          </div>

          {/* Mobile Bottom Finish Icon */}
          <div className="absolute left-[14px] -bottom-6 z-20 p-1 rounded-2xl bg-white shadow-md border-2 border-primary flex items-center justify-center">
            <AnimatedFinishIcon />
          </div>

          {processSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col group text-left"
              >
                {/* Circle node */}
                <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-primary">
                  <div className="absolute -top-1.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-primary text-white flex items-center justify-center border border-white">
                    <span className="text-[9px] font-black">{i + 1}</span>
                  </div>
                  <Icon className="h-5 w-5 text-slate-600 group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="pl-4 py-0.5">
                  <h3 className="font-extrabold text-base text-slate-900 leading-tight mt-0 mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-sm">
                    {s.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
