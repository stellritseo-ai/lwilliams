import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
} from "lucide-react";

const areasData = [
  { name: "Dallas Downtown", x: "50%", y: "50%", primary: true },
  { name: "Highland Park", x: "48%", y: "42%" },
  { name: "University Park", x: "49%", y: "37%" },
  { name: "Preston Hollow", x: "47%", y: "30%" },
  { name: "Lakewood", x: "58%", y: "46%" },
  { name: "Uptown Dallas", x: "48%", y: "46%" },
  { name: "North Dallas", x: "48%", y: "24%" },
  { name: "Plano", x: "52%", y: "15%" },
  { name: "Frisco", x: "50%", y: "8%" },
  { name: "Richardson", x: "56%", y: "22%" },
  { name: "Lake Highlands", x: "57%", y: "38%" },
  { name: "Oak Lawn", x: "46%", y: "48%" },
  { name: "Kessler Park", x: "44%", y: "58%" },
];

const statCards = [
  { value: "25mi+", label: "Coverage Radius" },
  { value: "15+", label: "Neighborhoods" },
  { value: "Fast", label: "Emergency Dispatch" },
  { value: "100%", label: "Licensed & Insured" },
];

export function ServiceArea() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section
      id="service-area"
      className="relative bg-white border-b border-slate-100 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Background decorations (Brown Style) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:26px_26px] opacity-60" />
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/6 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* ── LEFT COLUMN (Brown Style) ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest shadow-sm">
              <Navigation className="w-3.5 h-3.5" />
              Service Area
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-slate-900 leading-tight tracking-tight font-black text-[26px] sm:text-[34px] mb-3">
                Proudly Serving Dallas &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d97706]">
                  Surrounding Communities
                </span>
                .
              </h2>
              <p className="text-[14.5px] text-slate-500 font-medium leading-relaxed max-w-md">
                Based in Dallas, TX — we deliver high-end handyman, property repair, and maintenance services across North Texas with dedicated local dispatch.
              </p>
            </div>

            {/* Stats row (Brown 4-card metric strip) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {statCards.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center p-3 rounded-2xl bg-primary/5 border border-primary/15 text-center"
                >
                  <span className="text-primary font-black text-[18px] leading-tight">
                    {s.value}
                  </span>
                  <span className="text-slate-500 text-[9px] font-bold uppercase tracking-wide mt-0.5 leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Area chips (Brown Style) */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2.5">
                Primary Neighborhood Coverage
              </span>
              <div className="flex flex-wrap gap-2">
                {areasData.map((a) => {
                  const isActive = hoveredArea === a.name;
                  return (
                    <motion.div
                      key={a.name}
                      onMouseEnter={() => setHoveredArea(a.name)}
                      onMouseLeave={() => setHoveredArea(null)}
                      whileHover={{ scale: 1.04, y: -1 }}
                      transition={{ duration: 0.15 }}
                      className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider rounded-xl py-1.5 px-3 cursor-pointer border transition-all duration-200 ${
                        isActive || a.primary
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-primary/40 hover:bg-white"
                      }`}
                    >
                      <MapPin className="w-3 h-3" />
                      <span>{a.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>


          </motion.div>

          {/* ── RIGHT COLUMN: Google Map Service Area ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative w-full h-[450px] sm:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-slate-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220181.2410876761!2d-96.89690567632424!3d32.81839608638014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e1!3m2!1sen!2snp!4v1789675819911!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Dallas, TX Service Area Map"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
