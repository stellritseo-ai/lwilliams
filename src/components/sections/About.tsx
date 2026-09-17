import {
  ArrowRight,
  Award,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import aboutImg from "@/assets/about.webp";

export function About() {
  return (
    <section
      id="about"
      className="relative py-[60px] overflow-hidden bg-white border-b border-slate-100"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      {/* Subtle Ambient Glows (Brown style) */}
      <div className="pointer-events-none absolute top-0 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Premium 2-Column Grid matching Brown: Copy Left (7 cols), Visual Right (5 cols) */}
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Column: Copy, Narrative & Feature Checklist (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <Reveal>
              {/* Eyebrow Badge with Sparkles */}
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/25 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary shadow-xs">
                <Sparkles className="size-3.5 text-primary" />
                <span>About L. Williams Co. &amp; Service</span>
                <Sparkles className="size-3.5 text-primary" />
              </div>

              {/* Main Headline */}
              <h2
                className="font-display text-[22px] sm:text-[28px] lg:text-[31px] mt-3 mb-2 font-extrabold leading-tight text-slate-900 tracking-tight"
              >
                Professional Craftsmanship{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d97706]">
                  You Can Count On
                </span>
              </h2>

              {/* Narrative Paragraph */}
              <p
                className="mt-4 text-sm sm:text-base leading-relaxed text-black font-normal"
              >
                Founded on old-school integrity and modern architectural standards,{" "}
                <strong className="font-semibold text-black">L. Williams Co. &amp; Service</strong> delivers
                meticulous residential and commercial handyman solutions throughout Dallas, Texas. Every repair is executed with craftsman-grade precision and white-glove respect for your home.
              </p>

              {/* Editorial Quote / Dallas Guarantee Banner */}
              <div className="mt-5 w-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary p-4 sm:p-5 rounded-r-2xl">
                <p className="text-sm sm:text-base italic text-slate-800 font-semibold leading-relaxed">
                  &ldquo;We don&apos;t do quick cosmetic patches that fail in six months. We build lasting repairs and flawless finishes tailored to withstand Texas seasons.&rdquo;
                </p>
              </div>

              {/* 4 Feature Micro-Cards / Promises Grid */}
              <div className="mt-6 grid gap-3.5 sm:grid-cols-2 w-full">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all hover:border-primary/40 hover:bg-white hover:shadow-md">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Licensed &amp; Fully Insured</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">
                      Complete liability coverage and true peace of mind on every job.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all hover:border-primary/40 hover:bg-white hover:shadow-md">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Award className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">25+ Years Trade Mastery</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">
                      Decades of fine carpentry, custom drywall, and precision repair.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all hover:border-primary/40 hover:bg-white hover:shadow-md">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Punctual &amp; Responsive</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">
                      On-time arrival windows, upfront estimates, and clear communication.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all hover:border-primary/40 hover:bg-white hover:shadow-md">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Spotless &amp; Clean Spaces</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">
                      Floor coverings, dust barriers, and thoroughly vacuumed workspaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-extrabold text-sm shadow-lg shadow-primary/25 group transition-all"
                >
                  <a href="#contact">
                    Book an Appointment{" "}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>

                <a
                  href="tel:2146064631"
                  className="h-12 px-7 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all flex items-center gap-2.5 shadow-sm"
                >
                  <Phone className="size-4 text-primary" />
                  <span>Call (214) 606-4631</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Premium Visual Container with Floating Badges (lg:col-span-5) */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            <Reveal>
              {/* Soft Ambient Glow backdrop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse" />

              <div className="relative w-full max-w-[380px] sm:max-w-[460px] aspect-[4/5] rounded-[24px] sm:rounded-[32px] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-2 sm:p-3 lg:p-3.5 shadow-2xl overflow-hidden group">
                {/* Image Element */}
                <img
                  src={aboutImg}
                  alt="Master craftsman in Dallas, Texas performing precision architectural carpentry"
                  className="w-full h-full object-cover rounded-[20px] sm:rounded-[26px] select-none transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Multi-stage gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-[24px] sm:rounded-[32px]" />

                {/* Top Floating Glass Badge (Brown Style) */}
                <div className="absolute top-5 left-5 z-20 flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg select-none">
                  <ShieldCheck className="size-4 text-primary" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase text-slate-900 leading-none">
                      Licensed &amp; Insured
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 leading-none mt-1">
                      100% Bonded Protection
                    </span>
                  </div>
                </div>

                {/* Bottom Floating Dark Glass Badge (Brown Style) */}
                <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2.5 bg-[#0F172A]/95 backdrop-blur-md border border-white/20 text-white px-4 py-2.5 rounded-2xl shadow-xl select-none">
                  <div className="flex text-amber-400">
                    <Star className="size-3.5 fill-current" />
                    <Star className="size-3.5 fill-current" />
                    <Star className="size-3.5 fill-current" />
                    <Star className="size-3.5 fill-current" />
                    <Star className="size-3.5 fill-current" />
                  </div>
                  <span className="text-xs font-black text-amber-400">25+ Years Open</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

