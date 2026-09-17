import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks, services } from "@/data/site-data";
import logoImg from "@/assets/logo.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Top Architectural Utility / Trust Strip (Brown Style Dark Strip) */}
      <div className="hidden border-b border-white/10 bg-[#0F172A] text-xs font-medium text-slate-300 lg:block">
        <div className="section-shell flex h-10 items-center justify-between">
          {/* Left: Dallas credentials & Live status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                Emergency Dispatch Available
              </span>
            </div>

            <div className="h-3.5 w-px bg-white/15" />

            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
              <ShieldCheck className="size-3.5 text-primary" />
              <span>Licensed · Insured · Bonded · 25+ Years Exp.</span>
            </div>
          </div>

          {/* Right: Client Ratings & Hours */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold text-[11px]">
              <Clock className="size-3.5 text-primary" />
              <span>8:00am – 4:00pm (Mon–Fri) • 24/7 Emergency Service Available</span>
            </div>

            <div className="h-3.5 w-px bg-white/15" />

            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-200">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Star Rated</span>
              <span className="text-slate-400">(2000+ DFW Projects)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 h-20 sm:h-24 border-b border-slate-200/80 bg-white/95 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06)] backdrop-blur-md">
        <div className="section-shell flex h-full items-center justify-between gap-4 sm:gap-6">
          {/* Brand Logo - Prominent on Left */}
          <a
            href="#home"
            className="group flex items-center shrink-0 focus:outline-none py-1"
            aria-label="L. Williams Co. & Services Homepage"
          >
            <img
              src={logoImg}
              alt="L. Williams Co. Services"
              className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Right Side Stack: Nav Items Pill + Phone Button + CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0 ml-auto">
            {/* Nav Items Pill (Brown Layout) */}
            <nav
              className="rounded-full bg-white border border-slate-200/90 px-3 xl:px-4 py-1.5 flex items-center gap-1 shadow-sm relative"
              aria-label="Primary site navigation"
            >
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href={link.href}
                        className={`rounded-full px-3.5 py-1 text-[13px] font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap inline-flex items-center gap-1.5 ${
                          servicesOpen
                            ? "bg-primary/10 text-primary"
                            : "text-slate-800 hover:bg-slate-100 hover:text-primary"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`size-3.5 transition-transform duration-200 ${
                            servicesOpen ? "rotate-180 text-primary" : "text-slate-400"
                          }`}
                        />
                      </a>

                      {/* ── Premium Pixel-Perfect Services Dropdown Menu ── */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-[42%] pt-2.5 w-[560px] z-50 pointer-events-auto"
                          >
                            <div className="rounded-3xl bg-white/98 backdrop-blur-2xl border border-slate-200/90 shadow-[0_24px_70px_-10px_rgba(15,23,42,0.18)] p-4 ring-1 ring-slate-900/5">
                              {/* Header row */}
                              <div className="flex items-center justify-between px-3 pb-2.5 mb-2 border-b border-slate-100">
                                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900">
                                  <Sparkles className="size-3.5 text-primary" />
                                  <span>Our Handyman &amp; Craftsmanship Services</span>
                                </div>
                                <span className="text-[10px] font-extrabold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  Dallas, TX
                                </span>
                              </div>

                              {/* 2-column Grid of All 6 Services */}
                              <div className="grid grid-cols-2 gap-2">
                                {services.map((service) => {
                                  const Icon = service.icon;
                                  return (
                                    <a
                                      key={service.id}
                                      href="#services"
                                      onClick={() => setServicesOpen(false)}
                                      className="group/item flex items-start gap-3 p-2.5 rounded-2xl transition-all duration-200 hover:bg-slate-50 border border-transparent hover:border-slate-200/90 text-left"
                                    >
                                      <div className="size-10 rounded-xl bg-gradient-to-br from-primary/10 to-amber-500/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 group-hover/item:scale-105 group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-[#d97706] group-hover/item:text-white transition-all shadow-xs">
                                        <Icon className="size-5" />
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between">
                                          <span className="font-extrabold text-[13.5px] text-slate-900 group-hover/item:text-primary transition-colors leading-tight">
                                            {service.name}
                                          </span>
                                          <ChevronRight className="size-3.5 text-slate-300 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-primary transition-all duration-200" />
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5 leading-snug">
                                          {service.category}
                                        </p>
                                      </div>
                                    </a>
                                  );
                                })}
                              </div>

                              {/* Footer Strip in dropdown */}
                              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-3 text-xs bg-slate-50/80 -mx-4 -mb-4 p-3 rounded-b-3xl">
                                <div className="flex items-center gap-2 text-slate-600 font-semibold text-[11.5px]">
                                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                                  <span>24/7 Emergency Dispatch Available</span>
                                </div>
                                <a
                                  href="tel:+12146064631"
                                  className="inline-flex items-center gap-1.5 text-primary font-black text-[11.5px] hover:underline"
                                >
                                  <Phone className="size-3" />
                                  <span>(214) 606-4631</span>
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full px-3 py-1 text-[13px] font-bold uppercase tracking-wider text-slate-800 transition-colors hover:bg-slate-100 hover:text-primary whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Direct Call / Phone Dispatch Pill */}
            <a
              href="tel:+12146064631"
              className="flex items-center gap-2.5 rounded-full border border-primary/40 bg-gradient-to-r from-primary to-[#d97706] px-4 py-2 text-white shadow-md shadow-primary/20 transition-all duration-300 hover:brightness-105 active:scale-95 shrink-0"
            >
              <div className="flex size-7 items-center justify-center rounded-full bg-white/20 text-white shrink-0">
                <Phone className="size-3.5 fill-current animate-pulse" />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] font-black uppercase tracking-wider text-amber-100">
                  Call Direct
                </span>
                <span className="text-xs xl:text-sm font-black text-white mt-0.5 tracking-tight">
                  (214) 606-4631
                </span>
              </div>
            </a>

            {/* Primary "Book an Appointment" CTA */}
            <Button
              asChild
              className="h-11 px-5 xl:px-6 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <a href="#contact">
                <span>Book Appointment</span>
              </a>
            </Button>
          </div>

          {/* Mobile Right Bar: Call button + Menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+12146064631"
              className="flex items-center gap-1.5 bg-primary text-white text-[11px] font-extrabold rounded-full px-3.5 py-1.5 shadow-sm active:scale-95 transition-transform"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>(214) 606-4631</span>
            </a>
            <button
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:border-primary active:scale-95"
            >
              <Menu className="h-5 w-5 text-slate-800" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Architectural Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-navy/98 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src={logoImg}
                    alt="L. Williams Co. Services"
                    className="h-13 sm:h-14 w-auto object-contain"
                  />
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMenuOpen(false)}
                  className="size-10 rounded-xl text-white hover:bg-white/10 border border-white/15"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </Button>
              </div>

              {/* Navigation Menu List */}
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  if (link.label === "Services") {
                    return (
                      <div key={link.label} className="flex flex-col">
                        <button
                          onClick={() => setMobileServicesOpen((prev) => !prev)}
                          className="group flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-xl font-bold tracking-tight text-white/90 transition-all hover:bg-white/10 hover:text-white w-full text-left cursor-pointer"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`size-5 text-primary transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pl-3 pr-1 py-1 flex flex-col gap-1.5"
                            >
                              {services.map((s) => {
                                const Icon = s.icon;
                                return (
                                  <a
                                    key={s.id}
                                    href="#services"
                                    onClick={() => {
                                      setMobileServicesOpen(false);
                                      setMenuOpen(false);
                                    }}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all text-left"
                                  >
                                    <div className="size-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                      <Icon className="size-4" />
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-sm font-extrabold text-white leading-tight">
                                        {s.name}
                                      </span>
                                      <span className="text-[10px] text-slate-400">
                                        {s.category}
                                      </span>
                                    </div>
                                  </a>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="group flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-xl font-bold tracking-tight text-white/90 transition-all hover:bg-white/10 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="size-5 text-primary opacity-60 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Contact & Action Strip */}
            <div className="border-t border-white/10 pt-6 space-y-3.5">
              <div className="flex items-center gap-2 text-xs text-slate-400 px-1">
                <CheckCircle2 className="size-4 text-primary" />
                <span>Serving Dallas, Highland Park & North Texas</span>
              </div>

              <a
                href="tel:+12146064631"
                className="flex items-center gap-3.5 rounded-xl border border-white/15 bg-white/5 p-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Call / Dispatch
                  </div>
                  <div className="text-base font-bold text-white">(214) 606-4631</div>
                </div>
              </a>

              <Button
                asChild
                className="w-full h-14 rounded-full bg-gradient-to-r from-primary to-[#1652e0] text-white font-bold text-base shadow-xl shadow-primary/30"
                onClick={() => setMenuOpen(false)}
              >
                <a href="#contact">
                  Book an Appointment
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
