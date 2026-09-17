import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/site-data";

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary border border-primary/30 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-black uppercase tracking-wider text-amber-300/80">
          {label}
        </p>
        <p className="text-sm font-bold text-white mt-0.5 leading-snug group-hover:text-amber-200 transition-colors break-all">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

export function Contact({
  selectedService = "Exterior Painting",
  onServiceChange,
}: {
  selectedService?: string;
  onServiceChange?: (val: string) => void;
}) {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: selectedService,
    timeframe: "Flexible / Soon",
    message: "",
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative py-[60px] bg-white border-b border-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* ── Centered Header (Brown Style) ─────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Request an Inspection
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="text-[24px] sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight">
            Get Your Free,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d97706]">
              No-Obligation Quote
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg mx-auto mt-2">
            Tell us about your project — painting, drywall repair, tile, lighting, plumbing, or finish carpentry — and we&apos;ll provide an honest, competitive proposal promptly.
          </p>
        </div>

        {/* ── 2-Column Grid (Brown Style) ─────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Luxury Dark Contact Info Card (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A101D] text-white p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between border border-primary/40 text-left"
          >
            <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/15 text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Dallas Office &amp; DFW Dispatch
              </span>

              <h3 className="text-2xl font-display font-black uppercase tracking-wider text-amber-300">
                Contact Info
              </h3>

              <p className="mt-3 text-sm text-slate-300 font-medium leading-relaxed">
                L. Williams Co. &amp; Service — Master Handyman &amp; Craftsmanship Services (25+ Years Experience).
              </p>

              <div className="mt-8 space-y-6">
                <ContactItem
                  icon={Phone}
                  label="Phone Number"
                  value="(214) 606-4631"
                  href="tel:+12146064631"
                />
                <ContactItem
                  icon={Mail}
                  label="Email Address"
                  value="lwilliamsservices28@gmail.com"
                  href="mailto:lwilliamsservices28@gmail.com"
                />
                <ContactItem
                  icon={MapPin}
                  label="Address"
                  value="Dallas, TX"
                />
                <ContactItem
                  icon={Clock}
                  label="Working Hours"
                  value="8:00am - 4:00pm (Mon - Fri) • 24/7 Emergency Service Available"
                />
              </div>
            </div>

            <div className="relative mt-10 pt-6 border-t border-white/15 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-amber-300 shrink-0" />
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-200">
                Licensed · Insured · 100% Guaranteed
              </span>
            </div>
          </motion.div>

          {/* Right: Clean White Inspection Request Form (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-center text-left"
          >
            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="grid place-items-center text-center py-16"
                >
                  <div className="grid place-items-center h-16 w-16 rounded-full bg-emerald-500/15 text-emerald-600 mb-5 shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-wider">
                    Inspection Request Received
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 font-semibold max-w-sm">
                    Thank you! Our Dallas dispatch team will review your project details and contact you promptly. For urgent repairs, call (214) 606-4631.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(214) 606-4631"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Dallas Address / Area *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Highland Park, Dallas, TX"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Handyman Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          onServiceChange?.(e.target.value);
                        }}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all cursor-pointer"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Preferred Timeframe
                      </label>
                      <select
                        value={formData.timeframe}
                        onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Emergency / Urgent">Urgent / Emergency Dispatch</option>
                        <option value="This Week">Within This Week</option>
                        <option value="Next Week">Next 1–2 Weeks</option>
                        <option value="Flexible / Planning">Flexible / Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Project Details / Punch List
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe the repairs or improvements you need handled..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full rounded-2xl bg-gradient-to-r from-primary to-[#d97706] text-white py-4 text-xs font-black uppercase tracking-widest shadow-lg hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{formStatus === "submitting" ? "Sending Request..." : "Request Free Inspection"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
