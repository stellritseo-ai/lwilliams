import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  About,
  Contact,
  CtaBanner,
  Faq,
  Footer,
  Header,
  Hero,
  MobileBottomBar,
  Process,
  Projects,
  Reviews,
  ServiceArea,
  Services,
  TrustBar,
  WhyChooseUs,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L. Williams Co. & Service | Dallas Handyman, Painting & Home Repairs" },
      {
        name: "description",
        content:
          "Dallas' premier handyman & home repair service. 25+ years of experience & 2,000+ completed projects. Specialized in house painting, drywall repair, tile installation, plumbing, electrical repairs, and 24/7 emergency service. Call (214) 606-4631.",
      },
      {
        name: "keywords",
        content:
          "Dallas handyman, home repair Dallas TX, house painting Dallas, drywall repair Dallas, tile installation Dallas, plumbing repairs, electrical repair, 24/7 emergency handyman, L Williams Services",
      },
      { property: "og:site_name", content: "L. Williams Co. & Service" },
      { property: "og:title", content: "L. Williams Co. & Service | Dallas Handyman, Painting & Home Repairs" },
      {
        property: "og:description",
        content:
          "High-end residential and commercial handyman craftsmanship in Dallas, Texas. 25+ years experience, 2000+ completed projects, 24/7 emergency service available.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lwilliamsservice.com/" },
      { property: "og:image", content: "https://lwilliamsservice.com/images/hero_slide_1.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "L. Williams Co. & Service | Dallas Handyman & Repairs" },
      {
        name: "twitter:description",
        content: "Professional craftsmanship, house painting, drywall, tile, and home repairs in Dallas, TX. 25+ years experience.",
      },
      { name: "twitter:image", content: "https://lwilliamsservice.com/images/hero_slide_1.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://lwilliamsservice.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://lwilliamsservice.com/#organization",
          url: "https://lwilliamsservice.com",
          name: "L. Williams Co. & Service",
          alternateName: "L Williams Services",
          image: "https://lwilliamsservice.com/images/hero_slide_1.jpg",
          telephone: "(214) 606-4631",
          email: "lwilliamsservices28@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dallas",
            addressRegion: "TX",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "32.7767",
            longitude: "-96.7970",
          },
          areaServed: [
            { "@type": "City", name: "Dallas" },
            { "@type": "City", name: "Highland Park" },
            { "@type": "City", name: "University Park" },
            { "@type": "City", name: "Preston Hollow" },
            { "@type": "City", name: "Lakewood" },
            { "@type": "City", name: "Uptown Dallas" },
            { "@type": "City", name: "Plano" },
            { "@type": "City", name: "Frisco" },
            { "@type": "City", name: "Richardson" },
          ],
          description:
            "Professional residential and commercial handyman services in Dallas, Texas. 25+ years experience, 2,000+ completed projects. Expert house painting, drywall, tile, plumbing, electrical, and 24/7 emergency service.",
          priceRange: "$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "16:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "148",
            bestRating: "5",
            worstRating: "1",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Handyman and Property Repair Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Handyman Service" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Services & Restoration" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tile Installation & Repair" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting & Electrical Repair" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Repairs" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Floor Installation" } },
            ],
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [selectedService, setSelectedService] = useState<string>("Exterior Painting");

  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      {/* 1. Sticky Minimalist Header */}
      <Header />

      {/* Main Content Sections (Aligned with  Layout Sequence) */}
      <main>
        {/* 1. Hero / Banner Section */}
        <Hero />

        {/* 2. Floating Trust Bar */}
        <TrustBar />

        {/* 3. Welcome / About Section ( Style 2-Col) */}
        <About />

        {/* 4. Complete Services Grid ( Style 4-card banner & tabs) */}
        <Services onSelectService={setSelectedService} />

        {/* 5. Emergency / Featured CTA Banner ( EmergencyCTA Style) */}
        <CtaBanner />

        {/* 6. 4-Step Process Section ( Conduit Layout) */}
        <Process />

        {/* 7. Why Choose Us with Integrated Stats ( Style) */}
        <WhyChooseUs />

        {/* 8. Portfolio Projects & Interactive Lightbox ( Style) */}
        <Projects onRequestService={setSelectedService} />

        {/* 9. Client Reviews / Testimonials ( Style) */}
        <Reviews />

        {/* 10. Frequently Asked Questions & Showcase ( FAQ Style) */}
        <Faq />

        {/* 11. Dallas Service Area & Radar ( Style) */}
        <ServiceArea />

        {/* 12. Free Inspection & Lead Generation Form ( Style) */}
        <Contact
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>

      {/* 13. Dark Architectural Footer ( Style) */}
      <Footer />

      {/* 14. Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
}