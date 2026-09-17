import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, type ServiceItem } from "@/data/site-data";

/* ── Service Card Component Matching Brown's Composition ────────── */
function ServiceCard({
  service,
  onSelectService,
}: {
  service: ServiceItem;
  onSelectService?: (serviceName: string) => void;
}) {
  const Icon = service.icon;

  return (
    <div
      onClick={() => onSelectService?.(service.name)}
      className="group relative w-full min-h-[440px] sm:min-h-[470px] rounded-[32px] overflow-hidden bg-slate-950 border border-slate-200/80 hover:border-primary shadow-xl hover:shadow-[0_22px_60px_rgba(245,158,11,0.22)] transition-all duration-500 cursor-pointer flex flex-col justify-end select-none"
    >
      {/* Background Image */}
      <img
        src={service.image}
        alt={service.name}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Multi-stage Gradient Overlays (Brown Style) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/98 via-[#0F172A]/65 to-black/20 group-hover:from-[#0F172A]/98 group-hover:via-[#0F172A]/75 group-hover:to-black/35 transition-all duration-500" />

      {/* Amber/Primary Accent Border Highlight on Hover */}
      <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-primary/80 transition-colors duration-500 pointer-events-none" />

      {/* Top Glass Header Badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        {/* Icon Badge */}
        <div className="w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon className="h-5 w-5" />
        </div>

        {/* Category Label */}
        <span className="bg-black/75 backdrop-blur-md border border-white/20 text-amber-300 text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
          {service.category}
        </span>
      </div>

      {/* Card Body Content */}
      <div className="relative z-20 p-6 sm:p-7 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-1">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight group-hover:text-amber-300 transition-colors duration-300">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5 font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {service.text}
        </p>

        {/* Feature Checkmarks list */}
        <div className="mt-4 pt-3 border-t border-white/15 space-y-2">
          {service.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs font-bold text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Link Footer — Revealed on hover */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <div className="overflow-hidden">
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-amber-300 text-xs font-black uppercase tracking-widest">
              <a href="#contact" className="inline-flex items-center gap-1.5 hover:underline">
                Get Free Inspection
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </a>
              <span className="text-[10px] text-slate-400 font-semibold lowercase">dallas metroplex</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services({
  onSelectService,
}: {
  onSelectService?: (serviceName: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Services", count: services.length },
    {
      id: "walls",
      label: "Painting & Drywall",
      count: services.filter((s) => s.id === "exterior-painting" || s.id === "drywall-services").length,
    },
    {
      id: "floors",
      label: "Floors & Handyman",
      count: services.filter((s) => s.id === "floor-installation" || s.id === "handyman-service").length,
    },
    {
      id: "electrical",
      label: "Lighting & Electrical",
      count: services.filter((s) => s.id === "lighting-repair" || s.id === "electrical-service").length,
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => {
          if (activeFilter === "walls") return s.id === "exterior-painting" || s.id === "drywall-services";
          if (activeFilter === "floors") return s.id === "floor-installation" || s.id === "handyman-service";
          if (activeFilter === "electrical") return s.id === "lighting-repair" || s.id === "electrical-service";
          return true;
        });

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-24 overflow-hidden border-y border-slate-200/60 relative"
    >
      {/* Background Decor Ambient Blobs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* ── Section Header (Brown Style) ─────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl text-left space-y-3">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/25 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Our Core Services</span>
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-[22px] sm:text-[28px] lg:text-[33px] font-black text-slate-900 tracking-tight leading-tight">
              Professional Handyman &amp; Craftsmanship Services
            </h2>

            <p className="text-slate-600 text-[13.5px] sm:text-base leading-relaxed font-medium">
              From precision repairs and custom finish carpentry to electrical fixtures and tile, our licensed team delivers dependable trade excellence throughout the Dallas Metroplex.
            </p>
          </div>

          {/* Quick Action Button */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
            <Button
              asChild
              className="font-extrabold rounded-full px-7 bg-gradient-to-r from-primary to-[#d97706] text-white shadow-md w-full md:w-auto justify-center h-12"
            >
              <a href="#contact">
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* ── Trust & Quality Guarantee Banner (Brown 4-Card Grid) ─────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-md mb-10">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">Licensed &amp; Insured</span>
              <span className="text-[11px] font-bold text-slate-500">100% Bonded Protection</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">Punctual &amp; Reliable</span>
              <span className="text-[11px] font-bold text-slate-500">On-Time Job Guarantee</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">Dallas Metroplex</span>
              <span className="text-[11px] font-bold text-slate-500">Highland Park &amp; North TX</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black text-slate-900 uppercase tracking-tight">24/7 Dispatch</span>
              <span className="text-[11px] font-bold text-slate-500">(214) 606-4631</span>
            </div>
          </div>
        </div>

        {/* ── Category Filter Tabs (Brown Style) ─────────────────────────────── */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 whitespace-nowrap shadow-xs cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                    isActive ? "bg-white/25 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Main Filtered Services Grid ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ServiceCard service={service} onSelectService={onSelectService} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
