export const site = {
  name: "Pixel Pro Multimedia",
  shortName: "PixelPro",
  tagline: "Industry-level training in Design, Video & Generative AI.",
  description:
    "Pixel Pro Multimedia in Karnal, Haryana builds job-ready creative skill through structured, project-based training in graphic design, video editing, and generative AI — not just software tutorials.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pixelpromultimedia.com",
  locale: "en_IN",
  location: {
    city: "Karnal",
    region: "Haryana",
    country: "India",
    countryCode: "IN",
    label: "Karnal, Haryana",
    office: "Head office Pixel Pro Multimedia",
    street: "Beside SCO. 154, Mugal Canal Road",
    walkins: "Walk-ins welcome",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "Pixel Pro Multimedia Beside SCO. 154 Mugal Canal Road Karnal Haryana"
      ),
  },
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@pixelpromultimedia.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "07404426359",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL || "+917404426359",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "",
} as const;

export const seoKeywords = [
  "Pixel Pro Multimedia",
  "Pixel Pro Multimedia Karnal",
  "graphic design course Karnal",
  "video editing course Karnal",
  "generative AI course Karnal",
  "multimedia institute Karnal",
  "Photoshop training Karnal",
  "Illustrator course Karnal",
  "Canva course Karnal",
  "Premiere Pro course Karnal",
  "After Effects training Karnal",
  "motion graphics course Haryana",
  "AI image generation course India",
  "prompt engineering course Karnal",
  "job ready graphic design training",
  "creative career courses Karnal",
  "design institute Haryana",
  "video editing institute Karnal",
  "branding and logo design course",
  "best multimedia course in Karnal",
  "Pixel Pro Multimedia Mugal Canal Road",
  "SCO 154 Mugal Canal Karnal",
];

export const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/#journey", label: "Learning Path" },
  { href: "/#modules", label: "Modules" },
  { href: "/about", label: "About" },
] as const;

export const pillars = [
  {
    index: "01",
    slug: "graphic-design",
    title: "Graphic Design",
    summary:
      "Typography, color theory, branding, and layout — trained on Photoshop, Illustrator, and Canva with real client-style briefs.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    outcomes: [
      "Brand identity systems and logo design",
      "Print and digital layout with grids and type",
      "Client-style briefs with revision cycles",
    ],
  },
  {
    index: "02",
    slug: "video-editing",
    title: "Video Editing",
    summary:
      "Cutting, color grading, sound design, and motion graphics using Premiere Pro and After Effects — built for social and broadcast formats.",
    tools: ["Premiere Pro", "After Effects"],
    outcomes: [
      "Narrative cutting, pacing, and sound sync",
      "Color grading for social and broadcast",
      "Motion graphics and kinetic type",
    ],
  },
  {
    index: "03",
    slug: "generative-ai",
    title: "Generative AI",
    summary:
      "Prompt engineering, AI image and video tools, and workflow integration — for designers who want to move faster without losing craft.",
    tools: ["AI Image Tools", "Prompt Engineering"],
    outcomes: [
      "Prompt-driven image and video generation",
      "Integration into real design pipelines",
      "Faster production without dropping craft",
    ],
  },
] as const;

export const journey = [
  {
    node: "01",
    title: "Foundation",
    body: "Design fundamentals, software basics, and the visual vocabulary every discipline builds on — color, grid, type, timing.",
    tag: "Weeks 1–3",
  },
  {
    node: "02",
    title: "Core Skill Track",
    body: "Focused, discipline-specific training in Graphic Design, Video Editing, or Generative AI — chosen based on the learner's direction.",
    tag: "Weeks 4–8",
  },
  {
    node: "03",
    title: "Applied Briefs",
    body: "Real, client-style projects — the kind of ambiguous, revision-heavy work that actually shows up on the job.",
    tag: "Weeks 9–11",
  },
  {
    node: "04",
    title: "Portfolio Build",
    body: "Structuring finished work into a portfolio that reads clearly to employers and clients — not just a folder of files.",
    tag: "Week 12",
  },
  {
    node: "05",
    title: "Industry Readiness",
    body: "Interview preparation, freelance-platform setup, and direct guidance toward internships and entry-level roles.",
    tag: "Ongoing",
  },
] as const;

export const modules = [
  {
    tag: "Graphic Design",
    title: "Photoshop",
    body: "Retouching, compositing, layer-based design workflows for print and digital.",
  },
  {
    tag: "Graphic Design",
    title: "Illustrator & Branding",
    body: "Vector logo design, brand systems, and scalable identity assets.",
  },
  {
    tag: "Video Editing",
    title: "Premiere Pro",
    body: "Narrative cutting, pacing, sound sync, and export formats for every platform.",
  },
  {
    tag: "Video Editing",
    title: "After Effects",
    body: "Motion graphics, kinetic typography, and visual effects for social and broadcast.",
  },
  {
    tag: "Generative AI",
    title: "AI Image Tools",
    body: "Prompt-driven image generation and editing, integrated into real design pipelines.",
  },
  {
    tag: "Generative AI",
    title: "Prompt Engineering",
    body: "Structuring prompts for consistent, usable creative output across tools.",
  },
] as const;

export const faqs = [
  {
    q: "What courses does Pixel Pro Multimedia offer in Karnal?",
    a: "We train in three connected disciplines: Graphic Design, Video Editing, and Generative AI. The programmes cover Photoshop, Illustrator, Canva, Premiere Pro, After Effects, AI image tools, and prompt engineering.",
  },
  {
    q: "Is this just software tutorials or job-ready training?",
    a: "Training is project-based. You move from foundations into client-style briefs, portfolio structure, and industry readiness — not a playlist of disconnected tool demos.",
  },
  {
    q: "How long is the learning path?",
    a: "The structured path runs about 12 weeks: foundation (weeks 1–3), a core skill track (weeks 4–8), applied briefs (weeks 9–11), and a portfolio build in week 12, with ongoing industry-readiness support.",
  },
  {
    q: "Can I visit the Karnal centre without an appointment?",
    a: "Yes. Walk-ins are welcome at our head office — Beside SCO. 154, Mugal Canal Road, Karnal, Haryana. You can also send an enquiry online and we will share batch timings and enrollment details.",
  },
  {
    q: "Do I need prior design experience?",
    a: "No. Foundation weeks cover the visual vocabulary — color, grid, type, and timing — before you specialise in graphic design, video, or generative AI.",
  },
] as const;

export function jsonLdGraph() {
  const courses = pillars.map((pillar) => ({
    "@type": "Course",
    name: `${pillar.title} Course — Pixel Pro Multimedia`,
    description: pillar.summary,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      url: site.url,
    },
    educationalLevel: "Beginner to career-ready",
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${site.url}/courses#${pillar.slug}`,
      areaServed: {
        "@type": "City",
        name: site.location.city,
      },
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        description: site.description,
        email: site.email,
        ...(site.phone ? { telephone: site.phoneTel } : {}),
        address: {
          "@type": "PostalAddress",
          name: site.location.office,
          streetAddress: site.location.street,
          addressLocality: site.location.city,
          addressRegion: site.location.region,
          addressCountry: site.location.countryCode,
        },
        areaServed: {
          "@type": "City",
          name: site.location.city,
        },
        knowsAbout: [
          "Graphic Design",
          "Video Editing",
          "Generative AI",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe Premiere Pro",
          "Adobe After Effects",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Creative training programmes",
          itemListElement: pillars.map((pillar) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: pillar.title,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-IN",
      },
      ...courses,
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}
