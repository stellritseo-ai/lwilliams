import React from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  copy,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
          light
            ? "border border-primary/40 bg-primary/10 text-primary"
            : "border border-primary/20 bg-primary/5 text-primary"
        }`}
      >
        <span className="size-1.5 rounded-full bg-primary" />
        {eyebrow}
      </div>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-slate-300" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}
