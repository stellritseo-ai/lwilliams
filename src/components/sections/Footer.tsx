import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import { services } from "@/data/site-data";

function MobileCollapsibleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-1 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "How We Work", href: "#process" },
    { label: "Our Gallery", href: "#gallery" },
    { label: "Client Reviews", href: "#reviews" },
    { label: "Service Area", href: "#service-area" },
    { label: "Contact Us", href: "#contact" },
  ];

  const coverageAreas = [
    "Highland Park",
    "University Park",
    "Preston Hollow",
    "Lakewood",
    "Uptown Dallas",
    "North Dallas",
    "Plano & Frisco",
    "Richardson",
  ];

  return (
    <footer className="relative bg-[#0A101D] border-t border-white/10 text-white overflow-hidden">
      {/* Subtle background gradient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div
        className="relative mx-auto w-[90%] max-w-7xl z-10 text-left"
        style={{ paddingTop: "60px", paddingBottom: "20px" }}
      >
        {/* ── MOBILE VERSION (Brown Collapsible Structure) ────────────────── */}
        <div className="block lg:hidden">
          <div className="mb-6">
            <a href="#home" className="inline-block mb-4">
              <img src={logoImg} alt="L. Williams Co." className="h-14 w-auto object-contain" />
            </a>

            <p className="text-[13px] text-slate-300 leading-relaxed font-medium mb-4">
              Dallas&apos; trusted professional handyman and property repair service. Built on dependable craftsmanship, transparent pricing, and master trade skill across North Texas.
            </p>

            {/* Phone CTA */}
            <a
              href="tel:+12146064631"
              className="flex items-center gap-3 w-full bg-gradient-to-r from-primary to-[#d97706] border border-amber-300/40 rounded-2xl px-4 py-3 mb-4 shadow-lg"
            >
              <div className="h-9 w-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-white animate-bounce" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-amber-100 font-bold">
                  Emergency Dispatch Line
                </span>
                <span className="font-black text-white text-[15px] tracking-tight leading-tight">
                  (214) 606-4631
                </span>
              </div>
            </a>

            {/* Trust Badges 2x2 */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["Licensed", "Insured", "Bonded", "25+ Yrs Exp."].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[10px] font-bold text-amber-300 uppercase tracking-wide"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                  ✓ {badge}
                </div>
              ))}
            </div>
          </div>

          <MobileCollapsibleSection title="Quick Links">
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-slate-300 hover:text-amber-300 font-semibold block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title="Our Services">
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-xs text-slate-300 hover:text-amber-300 font-semibold block">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title="Dallas Coverage">
            <ul className="space-y-2.5">
              {coverageAreas.map((area) => (
                <li key={area}>
                  <a href="#service-area" className="text-xs text-slate-300 hover:text-amber-300 font-semibold block">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title="Contact & Dispatch">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-slate-300 leading-relaxed font-semibold space-y-2">
              <span className="text-amber-300 font-black uppercase tracking-wider block text-[10px]">
                🚨 24/7 Emergency Service Available
              </span>
              <p>Phone: (214) 606-4631</p>
              <p>Email: lwilliamsservices28@gmail.com</p>
              <p>Hours: 8:00am - 4:00pm (Mon - Fri)</p>
              <p className="text-slate-400">Address: Dallas, TX</p>
            </div>
          </MobileCollapsibleSection>
        </div>

        {/* ── DESKTOP VERSION (Brown Multi-Column Grid) ───────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="inline-block">
              <img src={logoImg} alt="L. Williams Co." className="h-16 w-auto object-contain" />
            </a>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              Dallas&apos; premier professional handyman and property maintenance company. Over 25 years of trusted craftsmanship specializing in fine residential finishes and architectural repairs.
            </p>

            {/* Direct Phone Dispatch Pill */}
            <a
              href="tel:+12146064631"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-[#d97706] border border-amber-300/40 rounded-2xl px-5 py-3 shadow-lg hover:brightness-105 transition-all"
            >
              <div className="size-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Phone className="size-4 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-amber-100 font-bold">
                  Direct Dispatch
                </span>
                <span className="font-black text-white text-base tracking-tight leading-tight">
                  (214) 606-4631
                </span>
              </div>
            </a>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Licensed", "Insured", "Bonded", "25+ Years Exp."].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-[10px] font-bold text-amber-300 uppercase tracking-wider"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  ✓ {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-amber-300 font-extrabold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              {quickLinks.slice(0, 6).map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-amber-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-amber-300 font-extrabold mb-6">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-amber-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dispatch Hours & Info (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-amber-300 font-extrabold mb-6">
              Working Hours &amp; Info
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed font-semibold space-y-2">
              <span className="text-amber-300 font-black uppercase tracking-wider block mb-1 text-[10px]">
                🚨 24/7 Emergency Service Available
              </span>
              <p>Hours: 8:00am - 4:00pm (Mon - Fri)</p>
              <p>Emergency: 24/7 Service Available</p>
              <p>Email: lwilliamsservices28@gmail.com</p>
              <div className="pt-2 border-t border-white/10 text-slate-400 font-normal">
                Address: Dallas, TX • Direct Dispatch Across North Texas
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Strip ────────────────────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 L. Williams Co. &amp; Service. All rights reserved. Professional Craftsman in Dallas, TX.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://stellrit.com" className="hover:text-white transition-colors">
              Design By StellR IT LLC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
