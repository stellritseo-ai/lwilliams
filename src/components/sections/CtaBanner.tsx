import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section
      className="relative w-full overflow-hidden py-[60px] text-white bg-[#0A101D] border-y border-primary/30"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      {/* Background Image with Cinematic Multi-Layered Gradients */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <img
          src="/images/cta_banner.jpg"
          alt="Dallas residential craftsmanship project background"
          className="h-full w-full object-cover scale-105 filter brightness-75"
          loading="lazy"
        />

        {/* Layered Gradient Overlays for High Contrast & Visual Luxury (Brown Style) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1222]/98 via-[#0B1222]/88 to-[#0B1222]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222] via-transparent to-[#0B1222]/70" />

        {/* Ambient Glowing Blobs */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Live Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-primary/50 px-4 py-2 text-xs font-black uppercase tracking-widest text-amber-300 shadow-lg"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-primary text-primary" />
                Emergency Dispatch Available
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[26px] sm:text-[34px] lg:text-[40px] font-black tracking-tight leading-tight text-white max-w-2xl"
            >
              <span className="block">Need Help With a Project?</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-primary text-[22px] sm:text-[28px] lg:text-[33px] leading-tight">
                Immediate Response Across Dallas, Texas.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-medium"
            >
              Tell us what you need. From emergency household repairs and drywall restoration to complete custom finish carpentry, we deliver transparent upfront pricing, guaranteed arrival windows, and master craftsman execution.
            </motion.p>

            {/* Feature Cards Grid (Brown 4-Card Composition) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 w-full max-w-xl"
            >
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/30 text-amber-300 shrink-0 border border-primary/40">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-white">24/7 Dispatch Line</span>
                  <span className="text-[11px] text-slate-400 font-medium">Direct Dallas Response</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/30 text-amber-300 shrink-0 border border-primary/40">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-white">Rapid Dispatch</span>
                  <span className="text-[11px] text-slate-400 font-medium">Fast Equipment Deployment</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/30 text-amber-300 shrink-0 border border-primary/40">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-white">Licensed &amp; Insured</span>
                  <span className="text-[11px] text-slate-400 font-medium">100% Bonded Protection</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/30 text-amber-300 shrink-0 border border-primary/40">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-white">25+ Years Experience</span>
                  <span className="text-[11px] text-slate-400 font-medium">Master Craftsman Crew</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Action Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center gap-5 w-full"
          >
            {/* Primary Phone Action Card with Glowing Aura (Brown Style) */}
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-amber-400 to-[#d97706] rounded-[28px] blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />

              <a
                href="tel:+12146064631"
                className="relative flex flex-col items-center justify-between gap-4 rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#111A2E] via-[#0F172A] to-[#0A101D] border border-primary/60 p-5 sm:p-6 lg:p-7 shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full text-center sm:text-left sm:flex-row cursor-pointer"
              >
                <div className="flex items-center gap-4 justify-center sm:justify-start text-left w-full sm:w-auto">
                  <span className="relative grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-[#d97706] border border-amber-300/50 shrink-0 shadow-lg">
                    <Phone className="h-6 w-6 text-white animate-bounce" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-amber-300 font-black flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                      Direct Dispatch Line
                    </span>
                    <span className="text-[22px] sm:text-[24px] font-display font-black leading-tight tracking-tight mt-1 text-white">
                      (214) 606-4631
                    </span>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex justify-end">
                  <span className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-wider shadow-md group-hover:bg-white group-hover:text-slate-900 transition-colors">
                    Call Now
                  </span>
                </div>
              </a>
            </div>

            {/* Secondary Request Online CTA */}
            <div className="w-full max-w-md">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 font-extrabold text-sm py-6 shadow-lg"
              >
                <a href="#contact" className="flex items-center justify-center">
                  Request Free Inspection Online
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Micro-trust glass badge */}
            <div className="flex items-center gap-2.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 px-5 py-3 text-xs text-slate-300 w-full max-w-md justify-center shadow-md">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="font-semibold">
                Serving Dallas, Highland Park, University Park &amp; North Texas
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
