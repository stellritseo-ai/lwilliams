import { BadgeCheck, Quote, Star } from "lucide-react";
import { reviews } from "@/data/site-data";

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <span className="text-xs font-black text-slate-800 ml-1">5.0</span>
    </div>
  );
}

export function Reviews() {
  // Repeating reviews to guarantee a seamless infinite scroll across all display widths
  const marqueeReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="relative bg-white border-b border-slate-100 overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .reviews-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marquee-scroll 42s linear infinite;
          will-change: transform;
        }
        .reviews-marquee-container:hover .reviews-marquee-track,
        .reviews-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Background radial gradient dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #F59E0B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* ── Centered Section Header ────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/90 rounded-full px-5 py-2 text-xs font-bold text-slate-800 mb-4 shadow-sm">
            <GoogleIcon className="w-4 h-4" />
            <span className="text-slate-900 font-extrabold">5.0 Star Aggregate Rating</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">120+ Google Verified Reviews</span>
            <BadgeCheck className="w-4 h-4 text-[#1a73e8] fill-[#1a73e8]/10" />
          </div>

          <h2 className="text-slate-900 font-black text-[26px] sm:text-[34px] lg:text-[38px] tracking-tight leading-tight">
            Real Reviews.{" "}
            <span className="bg-gradient-to-r from-primary to-[#d97706] bg-clip-text text-transparent">
              Real Satisfaction.
            </span>
          </h2>

          <p
            className="text-slate-500 font-medium text-[14.5px] sm:text-base leading-relaxed max-w-xl mx-auto mt-2"
          >
            Hear firsthand from Dallas homeowners and property managers who trust L. Williams Co. &amp; Service for quality craftsmanship and honest communication.
          </p>
        </div>
      </div>

      {/* ── Infinite Marquee Carousel with Pause on Hover ───────────────── */}
      <div className="relative w-full overflow-hidden reviews-marquee-container group">
        {/* Left and Right Fade Gradient Overlays for smooth entry/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="reviews-marquee-track py-4 px-4">
          {marqueeReviews.map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className="w-[320px] sm:w-[390px] shrink-0 bg-white border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(245,158,11,0.12)] hover:border-primary/40 transition-all duration-300 text-left cursor-default select-none"
            >
              <div>
                {/* Top Row: Star Rating + Google Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <StarRating count={5} />
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.03)] shrink-0">
                    <GoogleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Google Verified</span>
                    <BadgeCheck className="w-3.5 h-3.5 text-[#1a73e8] fill-[#1a73e8]/10" />
                  </span>
                </div>

                {/* Quote with Ambient Quote Icon */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 w-7 h-7 text-primary/15 fill-primary/15 pointer-events-none" />
                  <p className="text-slate-700 text-[13.5px] leading-relaxed font-medium pl-6">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Project Tag */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {review.project}
                  </span>
                </div>
              </div>

              {/* Author Strip with Google verification attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#d97706] flex items-center justify-center text-white text-xs font-black shrink-0 shadow-sm">
                  {review.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-900 font-extrabold text-sm leading-tight truncate">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-medium mt-0.5 truncate">
                    <GoogleIcon className="w-3 h-3 shrink-0" />
                    <span className="text-slate-600 font-semibold">Google Review</span>
                    <span>•</span>
                    <span className="truncate">{review.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

