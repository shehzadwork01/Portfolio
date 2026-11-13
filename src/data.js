// All content comes from Shehzad's CV. Edit here; components stay unchanged.
export const profile = {
  name: "Shehzad Ali",
  initials: "SA",
  role: "Software Engineer",
  location: "Lahore, Pakistan",
  email: "shehzadaliarain2126@gmail.com",
  whatsapp: "923140031914",
  // Leave "" to hide the WhatsApp icon.
  // whatsapp: "",
  linkedin: "https://www.linkedin.com/in/shehzad01",
};

export const nav = [
  { label: "About", id: "about" },
  { label: "What I build", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const about = [
  "I am a Software Engineer with 2+ years of professional experience and a B.S. in Software Engineering, building scalable, reliable and user-focused software. I work across web and desktop applications, mostly with the MERN stack (MongoDB, Express.js, React.js/Next.js and Node.js).",
  "My work covers REST APIs, database design, frontend optimization and backend integration. I have built ERP and inventory software, third-party integrations (Gmail, Outlook, DPD, Royal Mail), AI-powered features and full-stack products from start to finish, plus Shopify stores for clients.",
];

export const skills = [
  {
    group: "Software Engineering",
    items: [
      "REST API design",
      "Database schema design",
      "Role-Based Access Control",
      "Performance optimization",
      "Cross-browser testing",
      "Figma-to-code",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Redux",
      "Responsive UI",
    ],
  },
  {
    group: "Backend & Databases",
    items: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"],
  },
  {
    group: "AI & Voice",
    items: ["AI text processing", "Web Speech API", "RAG-based systems"],
  },
  {
    group: "Integrations",
    items: [
      "Gmail API",
      "Outlook API",
      "DPD",
      "Royal Mail",
      "Third-party APIs",
    ],
  },
  {
    group: "Tools",
    items: ["Git/GitHub", "Axios", "Postman"],
  },
  {
    group: "E-commerce",
    items: [
      "Shopify setup",
      "Theme customization",
      "Products & collections",
      "Payments & shipping",
    ],
  },
];

// images: put files in public/projects/<slug>/1.jpg, 2.jpg, 3.jpg (missing ones show a placeholder).
// category: "Web app" | "Desktop" | "Shopify" (drives the filter tabs).
// freelance: true shows a "Freelance" badge on the project.
// live: add real URLs only; the button appears automatically.
export const projects = [
  {
    slug: "gh-sons-erp",
    category: "Desktop",
    name: "GH & Sons ERP",
    subtitle: "Yarn & Textile Business Management (Desktop)",
    description:
      "MERN-stack ERP packaged as a desktop application with Electron for a yarn and textile business. A login-protected workspace with a control dashboard, categories, yarn products, purchases, sales and returns, supplier and customer ledgers with running balances, finance and profit tracking, gate passes, and printable PDF purchase and sales receipts.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Electron"],
  },
  {
    slug: "barriocheck",
    category: "Web app",
    name: "BarrioCheck",
    subtitle: "Property Risk Report Platform (Spain)",
    description:
      "Full-stack platform that generates premium PDF property-risk reports for buyers in Spain. Users search by address or cadastral reference (or advanced search), see a free preview with a satellite map and property data, then unlock the full report through Stripe. Combines flood, seismic, wildfire, noise, radon, energy-certificate, Catastro and INE census data, with an English/Spanish interface, admin dashboard, role-based auth, and scheduled data-refresh jobs.",
    stack: [
      "React (Vite)",
      "Node.js",
      "Express",
      "MySQL",
      "Stripe",
      "Puppeteer",
      "Claude API",
    ],
    live: "https://bari.ahsanalikhan.top/",
  },
  {
    slug: "centrixhub",
    category: "Web app",
    name: "CentrixHub",
    subtitle: "Project & Client Management Platform",
    description:
      "All-in-one workspace for teams and agencies: dashboards with revenue and project reports, lead management with pipeline analytics, proposals with version comparison and analytics, projects, tasks and milestones, team performance, calendar, invoices (Stripe), time tracking, and a reports dashboard with PDF/CSV export. Includes real-time chat (Socket.io), Firebase push notifications, Google API and AWS S3 integrations, and team/client roles.",
    stack: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Material UI",
      "Node.js",
      "MongoDB",
      "Socket.io",
    ],
  },
  {
    slug: "kaduuka",
    category: "Web app",
    name: "Kaduuka",
    subtitle: "Inventory & Sales Management System",
    description:
      'Multi-shop POS and stock system (iDuuka) for retail shops: a quick "Sell Product" screen, sales log, inventory with stock levels, a stock-events audit trail, end-of-day cash-up with variance, reports by period and by employee, per-seller totals, user management with roles, and a super-admin portal. Dashboards are built with Recharts.',
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "Recharts"],
    live: "https://iduuka.com/login",
  },
  {
    slug: "the-mirror",
    category: "Web app",
    name: "The Mirror",
    subtitle: "AI Reflection Web App",
    description:
      "AI-powered web app where users describe a situation and receive a structured reading on a masculine/feminine polarity framework, shown with a visual polarity diagram, or a plain-answer mode. Features server-side prompt and API key handling, passwordless email sign-in, optional emailed readings, daily usage caps (per-user and global), pass/subscription checkout via Paddle, and privacy and data-deletion flows.",
    stack: [
      "React (Vite)",
      "Vercel serverless",
      "Anthropic API",
      "Redis",
      "Paddle",
    ],
    live: "https://mirror.polaritywork.com/",
  },
  {
    slug: "adams-pills",
    category: "Shopify",
    freelance: true,
    name: "Adam's Pills",
    subtitle: "Shopify E-commerce Store",
    description:
      "Built and launched a Shopify store for a US-based men's wellness supplement brand: branded landing page with hero and trust sections, featured products with top-selling badges, a sortable product catalogue, product pages with image gallery and quantity picker, cart and customer accounts, contact form, shipping & returns policies, blog, discount-code checkout, and a mobile-responsive layout.",
    stack: ["Shopify", "Custom storefront design", "Payments & shipping"],
    live: "https://adamspills.com",
  },
  {
    slug: "eros-him",
    category: "Shopify",
    freelance: true,
    name: "Eros Him",
    subtitle: "Shopify E-commerce Store",
    description:
      "Designed and set up a Shopify store for a premium wellness supplement brand: conversion-focused homepage, testimonials carousel, FAQ accordion, product pages with box-quantity bundles and a subscribe-and-save option, cart with order notes, free-shipping banner for US orders over $100, discount-code checkout, blog content, and a live-chat widget for customer support.",
    stack: [
      "Shopify",
      "Custom storefront design",
      "Live chat",
      "Free-shipping rules",
    ],
    live: "https://eroshim.com",
  },
];

// Small facts shown next to the About text (all from the CV).
export const facts = [
  { big: "Lahore, Pakistan", small: "Based in" },
  { big: "2+ years", small: "Professional experience" },
];

// "What I build" rows. Each line is taken from CV / project content above.
export const services = [
  {
    title: "Business systems",
    text: "ERP, inventory and POS systems for real businesses, with role-based access, ledgers, reporting and printable receipts (GH & Sons ERP, Kaduuka).",
  },
  {
    title: "Web & desktop applications",
    text: "Full-stack web platforms and Electron desktop apps with dashboards, authentication and roles, Stripe payments and real-time features (BarrioCheck, CentrixHub, GH & Sons ERP).",
  },
  {
    title: "APIs & system design",
    text: "RESTful APIs, database schema design and role-based access control for scalable data handling, authentication and business logic.",
  },
  {
    title: "AI-powered features",
    text: "AI translation, tone and summary tools, speech-to-text with the Web Speech API, and apps built on the Anthropic / Claude API (The Mirror, BarrioCheck).",
  },
  {
    title: "Integrations",
    text: "Gmail, Outlook, DPD, Royal Mail, Stripe, Paddle, Google APIs and AWS S3 wired into production workflows.",
  },
  {
    title: "Shopify stores",
    text: "Store setup, theme customization, products and collections, payments and shipping (Adam's Pills, Eros Him).",
  },
];
