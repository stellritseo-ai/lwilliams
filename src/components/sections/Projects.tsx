import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Star, X, ZoomIn } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

// Automatically extract all project photos from the assets/gallery folder
const galleryModules = import.meta.glob<{ default: string }>(
  "@/assets/gallery/*.{jpg,png,jpeg,webp,JPG,PNG}",
  { eager: true }
);
const galleryImages = Object.values(galleryModules).map((mod) => mod.default);

export function Projects({
  onRequestService,
}: {
  onRequestService?: (serviceName: string) => void;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 8);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [lightboxIndex]);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  }, [lightboxIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") prevPhoto();
        if (e.key === "ArrowRight") nextPhoto();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox, prevPhoto, nextPhoto, lightboxIndex]);

  return (
    <section
      id="gallery"
      className="relative bg-[#F8FAFC] py-[60px] overflow-hidden border-b border-slate-100"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <span id="projects" className="sr-only" />

      {/* Background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #F59E0B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* ── Section Header ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-primary/25 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-primary mb-4 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              Our Work Gallery
            </div>
            <h2 className="text-slate-900 font-black text-[26px] sm:text-[34px] leading-tight tracking-tight">
              Real Results, Real Dallas Properties.
            </h2>
            <p className="text-slate-500 text-[14.5px] leading-relaxed font-medium mt-2 max-w-xl">
              Browse our completed residential projects across the Dallas Metroplex. Click any photo to view in full resolution.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3.5 transition-all duration-200 shadow-md hover:scale-[1.02] shrink-0 self-start sm:self-auto cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* ── 4 Images per Row Gallery Grid (2 rows initially = 8 images, no text on images) ───────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {visibleImages.map((imgSrc, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.3) }}
              onClick={() => {
                setLightboxIndex(idx);
                document.body.style.overflow = "hidden";
              }}
              className="group relative overflow-hidden rounded-[10px] bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in aspect-[4/3] flex items-center justify-center"
              style={{ borderRadius: "10px" }}
            >
              {/* Clean Image with zero text in front */}
              <img
                src={imgSrc}
                alt={`L. Williams Co. Project ${idx + 1}`}
                className="w-full h-full object-cover rounded-[10px] transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ borderRadius: "10px" }}
                loading="lazy"
              />

              {/* Subtle hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/95 text-primary shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Show More / Show Less Button ──────────────── */}
        {galleryImages.length > 8 && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Button
              onClick={() => setShowAll((prev) => !prev)}
              className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-primary/25 cursor-pointer flex items-center gap-2 hover:scale-[1.02] transition-all"
            >
              <span>{showAll ? "Show Less" : `Show More Images (${galleryImages.length - 8} More)`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </div>

      {/* ── Full-Screen Lightbox Modal ──────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition cursor-pointer"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <motion.div
              className="relative z-10 max-w-5xl max-h-[85vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex]}
                alt={`L. Williams Co. Project ${lightboxIndex + 1}`}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl"
              />

              {/* Bottom pill counter & action */}
              <div className="mt-4 flex items-center gap-3">
                <span className="bg-white/15 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/20">
                  {lightboxIndex + 1} / {galleryImages.length}
                </span>
                <Button
                  asChild
                  className="h-9 px-5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider"
                >
                  <a
                    href="#contact"
                    onClick={() => {
                      onRequestService?.(`Project #${lightboxIndex + 1}`);
                      closeLightbox();
                    }}
                  >
                    Request Similar Work
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
