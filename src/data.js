// All content comes from Shehzad's CV. Edit here; components stay unchanged.
export const profile = {
  name: 'Shehzad Ali',
  initials: 'SA',
  role: 'MERN Stack Developer',
  location: 'Lahore, Pakistan',
  email: 'shehzadaliarain2126@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shehzad01',
  github: 'https://github.com/Shehzad2126',
}

export const nav = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export const about = [
  'I am a MERN Stack Developer with 2+ years of professional experience building scalable, responsive and user-focused web applications with MongoDB, Express.js, React.js/Next.js and Node.js.',
  'My work covers REST APIs, frontend optimization and backend integration. I have built healthcare systems, third-party integrations (Gmail, Outlook, DPD, Royal Mail), AI-powered features and full-stack products from start to finish, plus Shopify stores for clients.',
]

export const experience = [
  {
    title: 'MERN Stack Developer',
    company: 'Bitz Studio',
    place: 'Lahore, Pakistan',
    dates: 'January 2026 – Present',
    points: [
      'Building a multi-clinic healthcare management system with role-based access (Doctor, Admin, Medical Officer): prescriptions, appointments, invoices, patient records, AI-powered translation/tone/summary tools, speech-to-text (Web Speech API), pharmacy dispensing with DPD/Royal Mail shipping, and a Gmail/Outlook helpdesk.',
      'Designed and optimized REST APIs using Node.js, Express, and MongoDB.',
    ],
  },
  {
    title: 'MERN Stack Developer',
    company: 'IDEVO Solutions',
    place: 'Lahore, Pakistan',
    dates: 'December 2024 – December 2025',
    points: [
      'Developed and maintained full-stack MERN applications, ensuring seamless frontend–backend integration.',
      'Built RESTful APIs with Express.js and Node.js for data handling, authentication, and business logic.',
      'Designed MongoDB schemas for scalable data storage and optimized query performance.',
      'Converted Figma designs into pixel-perfect React.js UIs with responsive layouts.',
    ],
  },
  {
    title: 'Junior Full Stack Developer (Internship)',
    company: 'Xiist',
    place: 'Lahore, Pakistan',
    dates: 'March 2024 – June 2024',
    points: [
      'Collaborated with the development team to implement new features and functionality for client projects.',
      'Ensured cross-browser compatibility by testing websites across platforms and devices.',
      'Optimized the company website for speed and scalability; presented regular project updates to the supervisor.',
    ],
  },
]

export const skills = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Redux', 'Responsive UI'] },
  { group: 'Backend & Databases', items: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs', 'Role-Based Access Control'] },
  { group: 'AI & Voice', items: ['AI text processing', 'Web Speech API', 'RAG-based systems'] },
  { group: 'Integrations', items: ['Gmail API', 'Outlook API', 'DPD', 'Royal Mail', 'Third-party APIs'] },
  { group: 'Tools', items: ['Git/GitHub', 'Axios', 'Postman', 'Figma-to-code', 'Performance Optimization'] },
  { group: 'E-commerce', items: ['Shopify setup', 'Theme customization', 'Products & collections', 'Payments & shipping'] },
]

// images: put files in public/projects/<slug>/1.jpg, 2.jpg, 3.jpg (missing ones show a placeholder).
// live/github: add real URLs only; buttons appear automatically.
export const projects = [
  {
    slug: 'gh-sons-erp',
    name: 'GH & Sons ERP',
    subtitle: 'Yarn & Textile Business Management (Desktop)',
    description: 'MERN-stack ERP packaged as a desktop application with Electron for a yarn/textile business. Covers yarn inventory and lots, sales, purchases and returns, supplier and customer ledgers with running balances, finance and profit tracking, gate passes, and PDF receipts.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Electron'],
  },
  {
    slug: 'barriocheck',
    name: 'BarrioCheck',
    subtitle: 'Property Risk Report Platform (Spain)',
    description: 'Full-stack platform that generates premium PDF property-risk reports for buyers, combining flood, seismic, wildfire, noise, radon, energy-certificate, Catastro and INE census data. Includes admin dashboard, role-based auth, Stripe payments, and scheduled data-refresh jobs.',
    stack: ['React (Vite)', 'Node.js', 'Express', 'MySQL', 'Stripe', 'Puppeteer', 'Claude API'],
  },
  {
    slug: 'centrixhub',
    name: 'CentrixHub',
    subtitle: 'Project & Client Management Platform',
    description: 'Workspace tool covering projects, tasks, milestones, proposals with version comparison, invoices (Stripe), time tracking, and team/client roles. Real-time chat via Socket.io, Firebase push notifications, Google API and AWS S3 integrations.',
    stack: ['React', 'Redux Toolkit', 'React Query', 'Material UI', 'Node.js', 'MongoDB', 'Socket.io'],
  },
  {
    slug: 'kaduuka',
    name: 'Kaduuka',
    subtitle: 'Inventory & Sales Management System',
    description: 'Multi-shop POS and stock system with sales logging, inventory and stock-event audit trail, cash-up, reports and dashboards, user management, and a super-admin portal.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Recharts'],
  },
  {
    slug: 'the-mirror',
    name: 'The Mirror',
    subtitle: 'AI Reflection Web App',
    description: 'AI-powered web app with server-side prompt/key handling, passwordless email sign-in, daily usage caps (per-user and global), pass/subscription checkout via Paddle, and privacy/data-deletion flows.',
    stack: ['React (Vite)', 'Vercel serverless', 'Anthropic API', 'Redis', 'Paddle'],
  },
  {
    slug: 'adams-pills',
    name: "Adam's Pills",
    subtitle: 'Shopify E-commerce Store',
    description: "Built and launched a Shopify store for a US-based men's wellness supplement brand: branded landing page with hero and trust sections, product catalogue, cart and customer accounts, shipping & returns policies, blog, and mobile-responsive layout.",
    stack: ['Shopify', 'Custom storefront design', 'Payments & shipping'],
    live: 'https://adamspills.com',
  },
  {
    slug: 'eros-him',
    name: 'Eros Him',
    subtitle: 'Shopify E-commerce Store',
    description: 'Designed and set up a Shopify store for a premium wellness supplement brand: conversion-focused homepage, product pages, FAQs and blog content, free-shipping promotion for US orders over $100, cart/checkout flow, and live-chat widget for customer support.',
    stack: ['Shopify', 'Custom storefront design', 'Live chat', 'Free-shipping rules'],
    live: 'https://eroshim.com',
  },
]

export const education = [
  { title: 'B.S. Software Engineering', place: 'Superior University, Lahore', date: 'May 2024' },
  { title: 'Certification – Front End Development', place: 'Institute of Emerging Careers, Lahore', date: 'February 2023' },
  { title: 'Certification – Web Design and Development', place: 'Professional Institute of Management & Technology, Lahore', date: 'August 2022' },
]
