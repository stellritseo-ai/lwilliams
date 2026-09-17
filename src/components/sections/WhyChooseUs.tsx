import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Hammer,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { whyChooseUsItems } from "@/data/site-data";
import whyChooseImg from "@/assets/why_choose_williams.png";

const benefitIcons = [
  Award, // 01: 25+ Years Experience
  Building2, // 02: Locally Owned & Dallas Operated
  Sparkles, // 03: Uncompromising Finish Quality
  Hammer, // 04: Comprehensive Full-Service Solutions
  Users, // 05: Courteous & Uniformed Professionals
  CheckCircle2, // 06: 100% Satisfaction Guarantee
];

const trustStats = [
  { value: "25+", label: "Years Exp." },
  { value: "2000+", label: "Projects" },
  { value: "24/7", label: "Dispatch" },
  { value: "100%", label: "Guaranteed" },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-[60px] bg-white border-b border-slate-100 overflow-hidden"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      {/* Subtle background ambient blobs (Brown style) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/[0.04] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-amber-500/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16 items-center">
          {/* ── LEFT: Content & Feature Grid (Brown Style: order-2 lg:order-1, lg:col-span-7) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col order-2 lg:order-1 lg:col-span-7 text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Why Choose Us
            </div>

            {/* Headline */}
            <h2
              className="text-slate-900 font-black tracking-tight leading-tight text-[22px] sm:text-[26px] lg:text-[29px] max-w-xl"
            >
              Why Dallas Trusts{" "}
              <span className="bg-gradient-to-r from-primary via-amber-500 to-[#d97706] bg-clip-text text-transparent">
                L. Williams Co. &amp; Service
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-6 font-medium max-w-[540px]">
              Over 25 years of dedicated craftsmanship across Dallas, Texas — trusted by thousands of homeowners and residential properties.
            </p>

            {/* Feature Grid (Brown 2-col micro-card style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {whyChooseUsItems.map((f, i) => {
                const Icon = benefitIcons[i % benefitIcons.length]!;
                return (
                  <motion.div
                    key={f.num}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    <span className="mt-0.5 shrink-0 p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-extrabold text-slate-900 leading-tight mb-1 group-hover:text-primary transition-colors">
                        {f.title}
                      </p>
                      <p className="text-[11.5px] text-slate-500 leading-relaxed font-medium">
                        {f.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons (Brown Style) */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3.5 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:2146064631"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#d97706] text-white text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3.5 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call (214) 606-4631</span>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Media Card with Glow & Stats Overlay (Brown Style: order-1 lg:order-2, lg:col-span-5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-[120px]"
          >
            {/* Decorative glow rings */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-primary/15 via-transparent to-amber-500/15 blur-xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-primary/20 to-amber-500/20 blur-md pointer-events-none"
            />

            {/* Media container */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-12px_rgba(0,0,0,0.2)] border-2 border-white/90 group">
              <img
                src={whyChooseImg}
                alt="L. Williams Co. & Service owner with service truck"
                className="w-full h-[340px] sm:h-[440px] lg:h-[580px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

              {/* Top-left badge (Brown Style) */}
              <div className="absolute top-4 left-4 z-20 bg-primary text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-white text-white" />
                Dallas&apos; #1 Handyman Choice
              </div>

              {/* Top-right trade verification chip */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md text-slate-900 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-white/50">
                <ShieldCheck className="w-3 h-3 text-primary" />
                Licensed &amp; Insured
              </div>

              {/* Trust Stats Bar at bottom (Brown Style) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-2 py-3 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/20">
                  {trustStats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center px-1">
                      <span className="text-amber-300 font-black text-[15px] sm:text-[17px] leading-tight">
                        {s.value}
                      </span>
                      <span className="text-white/80 text-[8px] sm:text-[9px] font-bold uppercase tracking-wide text-center leading-tight mt-0.5">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
