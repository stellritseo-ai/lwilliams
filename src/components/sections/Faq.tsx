import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { faqs } from "@/data/site-data";
import logoImg from "@/assets/logo.png";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const servicesList = [
    "Painting",
    "Tile Work",
    "Drywall",
    "Carpentry",
  ];

  return (
    <section
      id="faq"
      className="relative bg-white border-b border-slate-100 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* ── Background Decorations (Brown Style) ──────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] opacity-60" />
        <div className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full bg-amber-500/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16 items-start">
          {/* ── LEFT COLUMN: FAQ Accordion (lg:col-span-7) ───── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest text-primary shadow-sm"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="font-display font-black text-slate-900 tracking-tight leading-tight text-[24px] sm:text-[32px] lg:text-[36px]">
                Got Questions?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d97706]">
                  We Have Clear Answers.
                </span>
              </h2>
              <p className="text-slate-500 font-medium text-[14.5px] leading-relaxed max-w-xl">
                Everything you need to know about our craftsman-grade painting, drywall restoration, tile installation, plumbing, and property maintenance in Dallas.
              </p>
            </motion.div>

            {/* Accordion list */}
            <div className="space-y-3 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-primary/[0.04] border-primary/40 shadow-md"
                        : "bg-white border-slate-200 hover:border-primary/25 hover:shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-extrabold text-[15px] sm:text-[16px] text-slate-900 leading-snug flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-300 ${
                            isOpen ? "bg-primary" : "bg-slate-300"
                          }`}
                        />
                        {faq.q}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-white rotate-180 shadow-xs"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pt-0 text-slate-600 font-medium text-[13.5px] leading-relaxed border-t border-primary/10 mt-1 pt-3.5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Direct call bottom line */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-[#d97706] text-white text-[11px] font-black uppercase tracking-widest rounded-full px-7 py-3.5 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto cursor-pointer"
              >
                <span>Ask a Question</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:2146064631"
                className="inline-flex items-center gap-2 text-slate-800 text-[13px] font-extrabold hover:text-primary transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>Call (214) 606-4631</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Section Image Showcase (lg:col-span-5) — hidden on mobile ─ */}
          <div className="hidden lg:block lg:col-span-5 relative w-full lg:sticky lg:top-[120px] self-start">
            {/* Outer ambient glow */}
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-primary/15 via-transparent to-amber-500/15 blur-xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 85, damping: 16, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_70px_-12px_rgba(0,0,0,0.22)] border-2 border-white group"
            >
              {/* Main Image */}
              <img
                src="/images/faq_craftsman.jpg"
                alt="L. Williams Co. Handyman & Craftsmanship Services in Dallas"
                className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 pointer-events-none" />

              {/* Floating Top Header Bar: Logo + Business Name & Phone */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-2.5 bg-slate-950/80 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-2xl shadow-lg">
                  <img src={logoImg} alt="L. Williams Logo" className="h-6 w-auto object-contain" />
                  <div className="text-left">
                    <p className="text-[11px] font-black text-white leading-none tracking-tight">
                      L. Williams Co.
                    </p>
                    <p className="text-[9px] font-bold text-amber-300 leading-none mt-0.5">
                      &amp; Service Dallas
                    </p>
                  </div>
                </div>

                <a
                  href="tel:2146064631"
                  className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                >
                  <Phone className="w-3 h-3 fill-current" />
                  <span>(214) 606-4631</span>
                </a>
              </div>

              {/* Floating Bottom Card: Service Pills & Action */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-2xl text-left z-20">
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {servicesList.map((srv) => (
                    <span
                      key={srv}
                      className="inline-flex items-center gap-1 bg-primary/10 border border-primary/25 text-primary text-[9.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-primary" />
                      {srv}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-primary font-black block">
                      Master Craftsman • Dallas, TX
                    </span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">
                      Call (214) 606-4631 for Free Inspection
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="shrink-0 w-9 h-9 rounded-full bg-[#0F172A] text-amber-300 flex items-center justify-center border border-white/20 shadow-md hover:bg-primary hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
