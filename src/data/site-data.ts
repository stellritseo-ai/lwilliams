import {
  Award,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  Hammer,
  HardHat,
  Layers,
  Lightbulb,
  MapPin,
  PaintRoller,
  Sparkles,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  text: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  neighborhood: string;
  image: string;
  description: string;
  tag: string;
  span: string;
}

export interface ReviewItem {
  quote: string;
  name: string;
  location: string;
  project: string;
}

export interface WhyChooseItem {
  num: string;
  title: string;
  text: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  icon: LucideIcon;
  text: string;
}

export const services: ServiceItem[] = [
  {
    id: "exterior-painting",
    name: "Exterior Painting",
    category: "Finishes & Protection",
    text: "Durable weather-resistant exterior painting, pressure washing, precision trim coatings, and surface preparation engineered to endure Texas elements.",
    icon: PaintRoller,
    image: "/images/service_exterior_painting.jpg",
    features: ["Pressure wash & scrape prep", "Premium elastomeric coatings", "Trim & soffit perfection"],
  },
  {
    id: "floor-installation",
    name: "Floor Installation",
    category: "Flooring & Surfaces",
    text: "Master installation of luxury hardwood, laminate, vinyl plank, and custom flooring with subfloor leveling and seamless baseboard transitions.",
    icon: Layers,
    image: "/images/service_floor_installation.jpg",
    features: ["Hardwood & luxury vinyl plank", "Laser subfloor leveling", "Seamless baseboard transitions"],
  },
  {
    id: "drywall-services",
    name: "Drywall Services",
    category: "Walls & Ceilings",
    text: "Seamless drywall repairs, acoustic texture matching, Level-5 skim coating, and structural crack restoration that leaves surfaces undetectable.",
    icon: Building2,
    image: "/images/service_drywall_services.jpg",
    features: ["Invisible patch repairs", "Water damage restoration", "Architectural skim coating"],
  },
  {
    id: "lighting-repair",
    name: "Lighting Repair",
    category: "Electrical Fixtures",
    text: "Designer chandelier and pendant fixture hanging, recessed LED upgrades, dimmer integrations, and safe electrical troubleshooting.",
    icon: Lightbulb,
    image: "/images/service_lighting_repair.jpg",
    features: ["High-ceiling chandelier hanging", "Recessed LED retrofitting", "Smart dimmer integration"],
  },
  {
    id: "handyman-service",
    name: "Handyman Service",
    category: "General Repairs",
    text: "One master craftsmanship team for architectural door tuning, bespoke finish carpentry, locksets, cabinet adjustments, and punch lists.",
    icon: Wrench,
    image: "/images/service_handyman_service.jpg",
    features: ["Solid wood door fitting", "Hardware & locksets", "Custom carpentry adjustments"],
  },
  {
    id: "electrical-service",
    name: "Electrical Service",
    category: "Power & Systems",
    text: "Safe residential electrical installations, GFCI outlet replacements, ceiling fan mounting, dedicated circuits, and code-compliant wiring.",
    icon: Zap,
    image: "/images/service_electrical_service.jpg",
    features: ["GFCI & switch upgrades", "Ceiling fan installation", "Safe circuit troubleshooting"],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Kitchen Tile Refresh",
    category: "Tile Installation",
    neighborhood: "Highland Park, Dallas",
    image: "/images/project_kitchen.jpg",
    description: "Full marble herringbone backsplash installation, quartz edge sealing, and brass pot-filler integration for a luxury residential kitchen.",
    tag: "Backsplash & Counters",
    span: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Exterior Restoration & Trim",
    category: "Exterior Painting",
    neighborhood: "Lakewood, Dallas",
    image: "/images/project_exterior.jpg",
    description: "Complete weather-proof coating, fascia restoration, column refinishing, and architectural black window frame trim for a classic Dallas estate.",
    tag: "Exterior Finishing",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 3,
    title: "Custom Built-ins & Fireplace",
    category: "Property Repair",
    neighborhood: "Preston Hollow, Dallas",
    image: "/images/project_builtins.jpg",
    description: "Precision white oak architectural built-in shelving, hidden soft-close cabinetry, and limestone fireplace mantle surround fitting.",
    tag: "Custom Carpentry",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 4,
    title: "Modern Lighting Upgrade",
    category: "Lighting Repair",
    neighborhood: "Uptown Dallas",
    image: "/images/service_lighting.jpg",
    description: "Vaulted ceiling electrical wiring, designer bronze glass pendant fixtures, and Lutron multi-zone smart dimming installation.",
    tag: "Architectural Lighting",
    span: "col-span-1",
  },
  {
    id: 5,
    title: "Drywall & Architectural Finish",
    category: "Drywall Services",
    neighborhood: "North Dallas",
    image: "/images/service_drywall.jpg",
    description: "Flawless Level-5 skim coat smoothing across an open floorplan, eliminating settlement cracks with reinforced fiberglass webbing.",
    tag: "Wall Restoration",
    span: "col-span-1",
  },
  {
    id: 6,
    title: "Bespoke Door & Hardware Fitting",
    category: "Property Repair",
    neighborhood: "Dallas, TX",
    image: "/images/service_repair.jpg",
    description: "Custom mortise lockset adjustments, solid oak interior double-door hinge alignment, and brushed brass architectural hardware tuning.",
    tag: "Finish Carpentry",
    span: "col-span-1 md:col-span-2",
  },
];

export const reviews: ReviewItem[] = [
  {
    quote:
      "The work was handled with real care and professionalism. Everything was communicated clearly, finished on time, and left spotless. Finding a craftsman of this caliber in Dallas is extraordinary.",
    name: "Angela R.",
    location: "Highland Park, Dallas, TX",
    project: "Kitchen Tile & Finish Carpentry",
  },
  {
    quote:
      "Reliable, detail-oriented, and easy to work with. The quality was excellent from the first repair through the final walkthrough. You can tell they take immense pride in their craft.",
    name: "Michael T.",
    location: "North Dallas, TX",
    project: "Drywall Restoration & Exterior Paint",
  },
  {
    quote:
      "We finally found a local service company we can trust for the whole property. Professional work, honest pricing, and a genuinely thoughtful team that treats your home with deep respect.",
    name: "Dana P.",
    location: "Lakewood, Dallas, TX",
    project: "Lighting Upgrades & Property Maintenance",
  },
  {
    quote:
      "L. Williams transformed our living room built-ins and fixed several chronic door alignment issues that two other contractors couldn't solve. Punctual, polite, and exceptionally skilled.",
    name: "Robert & Sarah K.",
    location: "Preston Hollow, Dallas, TX",
    project: "Custom Built-ins & Hardware Tuning",
  },
];

export const whyChooseUsItems: WhyChooseItem[] = [
  {
    num: "01",
    title: "25+ Years of Master Trade Experience",
    text: "Over 25 years of hands-on expertise spanning carpentry, painting, electrical fixtures, drywall, and plumbing across Dallas' premier properties.",
  },
  {
    num: "02",
    title: "Locally Owned & Dallas Operated",
    text: "Deeply rooted in the Dallas community. We respond promptly with dedicated local dispatch, familiar with local home architectures and climate demands.",
  },
  {
    num: "03",
    title: "Uncompromising Finish Quality",
    text: "We never take shortcuts. From laser-straight tile alignments to Level-5 smooth wall finishes, our standards exceed typical handyman work.",
  },
  {
    num: "04",
    title: "Comprehensive Full-Service Solutions",
    text: "Eliminate the headache of coordinating four different contractors. One call handles your punch lists, remodeling tasks, and urgent repairs.",
  },
  {
    num: "05",
    title: "Courteous & Uniformed Professionals",
    text: "Background-checked, respectful craftsmen who use shoe covers, protective floor runners, dust extraction, and leave your property immaculate.",
  },
  {
    num: "06",
    title: "100% Satisfaction Guarantee",
    text: "We stand firmly behind our labor. Transparent itemized estimates upfront, clear daily milestones, and final walkthrough sign-off before payment.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Planning & Consultation",
    icon: Compass,
    text: "We listen carefully to your goals, inspect the property requirements, and formulate a clear, efficient execution plan.",
  },
  {
    num: "02",
    title: "Transparent Estimating",
    icon: FileCheck2,
    text: "You receive an upfront, itemized proposal detailing labor, materials, and timeline with zero hidden fees or surprises.",
  },
  {
    num: "03",
    title: "Precision Execution",
    icon: HardHat,
    text: "Our master craftsmen arrive on schedule, protect your living areas, and execute the work using commercial-grade tools and techniques.",
  },
  {
    num: "04",
    title: "Walkthrough & Sign-off",
    icon: CheckCircle2,
    text: "We review every completed detail together, ensure the space is pristine, and deliver our craftsmanship satisfaction guarantee.",
  },
];

export const dallasNeighborhoods = [
  "Highland Park",
  "University Park",
  "Preston Hollow",
  "Lakewood",
  "Uptown Dallas",
  "Downtown Dallas",
  "North Dallas",
  "Lake Highlands",
  "Oak Lawn",
  "Kessler Park",
  "Plano",
  "Frisco",
  "Richardson",
  "Addison",
  "Southlake",
  "Coppell",
];

export const trustBarItems = [
  {
    icon: Award,
    title: "25+ Years Experience",
    desc: "Master craftsman trade skill",
  },
  {
    icon: Hammer,
    title: "2000+ Completed Projects",
    desc: "Residential & commercial excellence",
  },
  {
    icon: MapPin,
    title: "Dallas Local Service",
    desc: "Direct neighborhood dispatch",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Scheduled & urgent property repairs",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
];

export interface FAQItem {
  id: string;
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    q: "How quickly can you respond to urgent repairs or emergency property needs in Dallas?",
    a: "We provide direct dispatch across the Dallas Metroplex with 2-hour response coordination for urgent repairs and 24/7 service availability. Our licensed craftsmen arrive prepared with commercial-grade tools to secure and resolve issues immediately.",
  },
  {
    id: "faq-2",
    q: "Are L. Williams Co. & Service craftsmen licensed and fully insured?",
    a: "Yes. We carry comprehensive liability coverage and general insurance for all residential and commercial operations in Dallas, Texas. You can rest assured your home is fully protected.",
  },
  {
    id: "faq-3",
    q: "What areas and neighborhoods do you serve across North Texas?",
    a: "We proudly serve Dallas and surrounding communities within a 25+ mile radius, including Highland Park, University Park, Preston Hollow, Lakewood, Uptown, Plano, Frisco, Richardson, and Southlake.",
  },
  {
    id: "faq-4",
    q: "Do you provide upfront, written estimates before starting work?",
    a: "Yes, we provide 100% transparent, itemized proposals before any project begins. There are zero surprise fees, hidden markups, or hourly gouging.",
  },
  {
    id: "faq-5",
    q: "How do I book an inspection or consultation for my project?",
    a: "You can book directly through our online form or call our direct Dallas line at (214) 606-4631. We confirm your appointment time and arrival window promptly.",
  },
];


