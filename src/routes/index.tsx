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
      { title: "L. Williams Co. & Service | Premium Handyman Services in Dallas, Texas" },
      {
        name: "description",
        content:
          "Dallas' premier professional handyman service. Over 25 years of trusted craftsmanship specializing in exterior painting, tile installation, drywall restoration, lighting repair, plumbing, and architectural property maintenance.",
      },
      { property: "og:title", content: "L. Williams Co. & Service | Dallas Handyman & Repair" },
      {
        property: "og:description",
        content:
          "High-end residential and commercial handyman craftsmanship in Dallas, Texas. 25+ years experience, 2000+ completed projects, 24/7 service availability.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/images/hero_handyman.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "L. Williams Co. & Service | Dallas Handyman" },
      {
        name: "twitter:description",
        content: "Professional craftsmanship and home repairs in Dallas, Texas.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "L. Williams Co. & Service",
          image: "https://lwilliamsservice.com/images/hero_handyman.jpg",
          telephone: "+1-214-606-4631",
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
            "Dallas, Texas",
            "Highland Park",
            "University Park",
            "Preston Hollow",
            "Lakewood",
            "Uptown Dallas",
            "North Dallas",
            "Plano",
            "Frisco",
            "Richardson",
          ],
          description:
            "Professional residential and commercial handyman services in Dallas, Texas. Expert painting, tilework, drywall, electrical lighting, plumbing, and property maintenance.",
          priceRange: "$$",
          openingHours: "Mo-Fr 08:00-16:00",
          serviceType: [
            "Exterior Painting",
            "Tile Installation",
            "Drywall Services",
            "Lighting Repair",
            "Plumbing Services",
            "Property Repair",
            "Custom Carpentry",
          ],
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