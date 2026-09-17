import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, BadgeCheck, Phone, ShieldCheck, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    image: "/images/hero_slide_1.jpg",
    alt: "Exterior Painting & Trim Craftsmanship in Dallas",
    service: "Exterior Painting",
  },
  {
    image: "/images/hero_slide_2.jpg",
    alt: "Interior Renovation & Handyman Service in Dallas",
    service: "Interior Renovation",
  },
  {
    image: "/images/hero_slide_3.jpg",
    alt: "Custom Architectural Carpentry & Built-ins in Dallas",
    service: "Custom Carpentry",
  },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 lg:min-h-[820px] lg:pt-28 lg:pb-36"
    >
      {/* Background Image Slideshow with Parallax & Contrast Gradients */}
      <motion.div
        style={{ y: heroY }}
        className="pointer-events-none absolute -top-12 inset-x-0 h-[125%] w-full overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 size-full object-cover object-center"
            loading="eager"
          />
        </AnimatePresence>
      </motion.div>

      {/* Architectural Lighting Dark Gradients for flawless text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/40 pointer-events-none" />

      {/* Animated subtle glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content Column placed cleanly on the 12-column grid (Left 7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left text-white">
            {/* Eyebrow badge (5-star rating) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-md max-w-full flex-wrap">
              <span className="flex text-amber-400 gap-0.5 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current text-amber-400" />
                ))}
              </span>
              <span className="text-white/95 font-bold">Family Owned &amp; Operated • 25+ Years in Business • Dallas, TX</span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              className="font-display font-extrabold tracking-tight text-white text-[28px] sm:text-[38px] lg:text-[45px] leading-tight mt-3 mb-4"
            >
              Professional Handyman Services in{" "}
              <span className="block sm:inline">
                Dallas, <span className="text-[#38bdf8]">Texas</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200 font-normal">
              Your trusted home improvement specialist serving Dallas, Texas. We excel in professional house painting, expert drywall repair, and comprehensive handyman solutions.
            </p>

            {/* CTA Buttons — pill shaped, dual actions */}
            <div className="mt-5 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Button
                asChild
                className="h-11 px-6 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/25 group transition-all justify-center border-0"
              >
                <a href="#contact">
                  Get Free Inspection{" "}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-11 px-6 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all justify-center"
              >
                <a href="#services">View Our Services</a>
              </Button>
              <a
                href="tel:+12146064631"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white text-sm font-semibold backdrop-blur-md transition-all"
              >
                <Phone className="size-3.5 text-[#38bdf8]" /> (214) 606-4631
              </a>
            </div>

            {/* Trust badges — bottom trust row with clean spacing */}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/90 font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-[#38bdf8]" /> Licensed
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-[#38bdf8]" /> Insured
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-[#38bdf8]" /> Bonded
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="size-4 text-[#38bdf8]" /> 25+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-[#38bdf8]" /> Dallas Local
              </span>
            </div>

            {/* Modern Pixel-Perfect Auto-Slide Indicators */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.service}
                    onClick={() => setCurrentSlide(idx)}
                    className="group flex items-center gap-1.5 focus:outline-none cursor-pointer py-1"
                    aria-label={`Switch to slide ${idx + 1}: ${slide.service}`}
                  >
                    <span
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentSlide === idx
                          ? "w-7 bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]"
                          : "w-2 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                    {currentSlide === idx && (
                      <span className="text-[11px] font-extrabold text-white tracking-wide ml-0.5">
                        {slide.service}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
