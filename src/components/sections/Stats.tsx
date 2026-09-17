import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CounterStat({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative border-l border-white/15 pl-6 sm:pl-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {value}
        </div>
        <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">
          {label}
        </div>
        {sublabel && <p className="mt-1 text-xs text-slate-400">{sublabel}</p>}
      </motion.div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="section-shell relative z-10">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <CounterStat
            value="25+"
            label="Years Experience"
            sublabel="Serving Dallas & North Texas"
          />
          <CounterStat
            value="2000+"
            label="Projects Completed"
            sublabel="From minor repairs to upgrades"
          />
          <CounterStat
            value="24/7"
            label="Service Availability"
            sublabel="Reliable dispatch anytime"
          />
          <CounterStat
            value="100%"
            label="Customer Focus"
            sublabel="Dedicated satisfaction guarantee"
          />
        </div>
      </div>
    </section>
  );
}
