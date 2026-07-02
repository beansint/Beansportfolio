import { Github, Linkedin, User, Code, Terminal, Cpu } from "lucide-react";

export const DATA = {
  profile: {
    name: "Vincent B. Pacaña",
    role: "Full Stack Developer",
    headline: "I build production SaaS with payments, realtime, and AI features",
    subheadline:
      "2 years shipping full-stack systems across Next.js/NestJS - Stripe payments, RAG-powered AI apps, and realtime platforms for real clients.",
    bio: "Full-stack developer in Cebu City building production SaaS and AI-powered systems: microservices, realtime platforms, and performance-focused web. Comfortable across TypeScript and Java backends, React/Next.js and Flutter frontends, and cloud deployment.",
    summary: "Vincent B. Pacaña is a full-stack developer based in Cebu City, Philippines, who builds production SaaS and AI-powered systems - microservices, realtime platforms, and performance-focused web - across TypeScript and Java backends with React/Next.js and Flutter frontends.",
    npm: "https://www.npmjs.com/~beansint",
    location: "Cebu City, Philippines",
    resumeUrl: "/files/Vincent-Pacana-Resume.pdf",
    availability: {
      open: true,
      label: "let's build",
      detail: "freelance & full-time",
      note: "IT graduate · US & international experience · flexible across time zones",
    },
    stats: [
      { label: "Projects shipped", value: "7", isPlus: true },
      { label: "Google-ranked site", value: "Page 1", isPlus: false },
      { label: "Production AI shipped", value: "AI + RAG", isPlus: false },
      { label: "Hackathon 2025", value: "Champion", isPlus: false },
    ],
  },
  education: [
    {
      school: "Cebu Institute of Technology - University",
      degree: "Bachelor of Science in Information Technology",
      year: "2022 - 2026",
    },
    {
      school: "Cebu Doctors University",
      degree: "Senior High School - With Honors",
      year: "2019 - 2021",
    },
    {
      school: "Cebu Normal University",
      degree: "Junior High School - With Honors",
      year: "2015 - 2019",
    },
  ],
  skills: {
    languages: "English and Filipino; comfortable collaborating with distributed teams",
    techStack: [
      "Next.js",
      "NestJS",
      "React",
      "Flutter",
      "Node.js",
      "Spring Boot",
      "Python (FastAPI, Django, Flask)",
      "PostgreSQL",
      "Redis",
      "RAG / LLMs",
      "Stripe",
      "Tailwind",
    ],
    learning: "Deepening cloud and AI/RAG skills through AWS certifications and production work.",
  },
  services: [
    {
      title: "Full-Stack Web Apps",
      description:
        "End-to-end production apps on Next.js/NestJS - from database schema to deployment, like the StudyBoost payments platform.",
    },
    {
      title: "AI / RAG Systems",
      description:
        "Retrieval-augmented Q&A and LLM-backed features with cited, source-grounded answers, like SportRules AI.",
    },
    {
      title: "Realtime Platforms",
      description:
        "Live, WebSocket-driven products - streaming, chat, presence, and polls - like Wildcat Radio v2.",
    },
    {
      title: "Technical SEO Sites",
      description:
        "Fast, structured-data-rich sites built to rank, like Three H Redwood International School's page-1 Google result.",
    },
  ],
  clients: [
    { name: "Three H Redwood International School", url: "https://threehredwood.edu.ph" },
    { name: "StudyBoost", url: "https://preview.studyboost.com/" },
    { name: "CIT-U Wildcat Radio", url: "" },
  ],
  testimonials: [],
  projects: [
    {
      title: "Wildcat Radio v2",
      description:
        "Lead developer on the ground-up rebuild of CIT-U's campus internet radio: a contract-first NestJS backend, live HLS audio streaming, and a realtime layer (chat, song requests, polls, live listener presence) over WebSockets, plus a desktop studio app for broadcasting. Currently in active development.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "HLS"],
      link: "",
      image: "/images/projects/wildcatradio.png",
      problem: "CIT-U's campus radio needs a modern, reliable live-broadcast platform.",
      outcome:
        "Work in progress. The go-live flow, live listener count, chat, song requests, and accounts already work end-to-end in the local build; production audio streaming and public deployment are in progress.",
      featured: true,
      wip: true,
    },
    {
      title: "SportRules AI",
      description:
        "A RAG (retrieval-augmented generation) Q&A app over official sports rulebooks (NBA/NFL/MLB/FIFA) that returns cited, source-grounded answers. Built on a pluggable multi-provider LLM registry with per-query cost tracking.",
      tech: ["Next.js", "TypeScript", "Supabase", "pgvector", "LLMs"],
      link: "https://sports-rulebook-rag-ai.vercel.app/",
      github: "https://github.com/beansint/sports-rulebook-rag-ai",
      image: "/images/projects/sportrules.png",
      problem: "Sports rules are scattered across dense official rulebooks that are slow to search.",
      outcome: "Built a cited, source-grounded RAG Q&A app with per-query cost tracking across a pluggable LLM registry.",
    },
    {
      title: "textpour",
      description:
        "My open-source, render-agnostic text-geometry library (published on npm) that flows text into arbitrary shapes - circles, holes, polygons, glyphs - and reflows live. The interactive demo in this card runs on the library itself; move your cursor over it.",
      tech: ["TypeScript", "Canvas", "npm", "Open Source"],
      link: "https://www.npmjs.com/package/textpour",
      github: "https://github.com/beansint/textpour",
      image: "",
      interactive: true,
      problem: "No lightweight, render-agnostic way to flow text into arbitrary shapes on the web.",
      outcome: "Published an open-source npm package with a live-reflowing text-geometry engine.",
    },
    {
      title: "Three H Redwood International School",
      description:
        "A static school website built end-to-end on Next.js / Vercel with full technical SEO (structured data, dynamic sitemap, analytics). Ranks on the first page of Google and scores a perfect 100 desktop Lighthouse across every page.",
      tech: ["Next.js", "Vercel", "SEO", "Tailwind"],
      link: "https://threehredwood.edu.ph",
      image: "/images/projects/3h.png",
      problem: "The school needed a fast, discoverable web presence to reach prospective families.",
      outcome: "Ranks page 1 on Google and scores a perfect 100 desktop Lighthouse across every page.",
    },
    {
      title: "StudyBoost",
      description:
        "An AI study platform for a US (Florida-based) client where I own the payments and monetization layer end-to-end on a NestJS + Next.js stack: Stripe subscriptions with full lifecycle controls, a document-purchase marketplace with tiered pricing and paywalls, creator payouts and revenue-sharing via Stripe Connect, and resilient webhook processing (async BullMQ queue plus an event ledger) with self-serve refunds.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Stripe Connect", "BullMQ"],
      link: "https://preview.studyboost.com/",
      image: "/images/projects/studyboost.png",
      problem: "A growing US study platform needed a production-grade monetization system - subscriptions, a paid document marketplace, and creator payouts.",
      outcome: "Own the monetization layer end-to-end: Stripe subscriptions, a tiered document-purchase marketplace, creator payouts via Stripe Connect, queue-backed webhook processing, and self-serve refunds.",
    },
    {
      title: "BlockNotes",
      description:
        "Blockchain Django web app on Cardano: immutable payment-linked notes, CIP-30 wallet (Lace/Eternl) via Blaze SDK, client-side signing, REST APIs for async transaction logging with Blockfrost, refactored to move tx logic to frontend for lower server load and better security.",
      tech: ["Django", "Cardano", "CIP-30", "Blaze SDK", "Vite", "Python", "Blockfrost"],
      link: "",
      image: "/images/projects/blocknotes-blockchain-notepad.png",
      problem: "Needed tamper-proof, payment-linked notes without trusting a central server with transaction logic.",
      outcome: "Refactored transaction signing to the client, cutting server load and improving security.",
    },
    {
      title: "Project Chimera (Web Game)",
      description:
        "A 4-hour hackathon-winning web game; co-built mechanics, logic design, and technical foundation.",
      tech: ["HTML", "JavaScript", "CSS"],
      link: "https://project-chimera-hackathon.netlify.app/",
      image: "/images/projects/chimera.mp4",
      poster: "/images/projects/chimera-poster.jpg",
      problem: "4-hour hackathon constraint to design and ship a playable web game from scratch.",
      outcome: "Co-built the winning game's mechanics, logic design, and technical foundation.",
    },
  ],
  experience: [
    {
      role: "Frontend Engineering",
      description:
        "Ships production UIs in React/Next.js - led the frontend on Wildcat Radio v2 and built the technical-SEO-first site for Three H Redwood International School.",
      icon: Code,
    },
    {
      role: "Backend & APIs",
      description:
        "Designs and builds contract-first APIs and services in NestJS, Spring Boot, and Python (FastAPI/Django) - including StudyBoost's payments platform: Stripe subscriptions, a document-purchase marketplace, and creator payouts via Stripe Connect.",
      icon: Terminal,
    },
    {
      role: "Cloud & Deployment",
      description:
        "Deploys and operates production systems on AWS and Vercel - AWS Academy Graduate in Cloud Architecting and Cloud Foundations.",
      icon: Cpu,
    },
    {
      role: "Realtime & AI",
      description:
        "Builds realtime and AI-powered features - WebSocket chat/presence for Wildcat Radio v2, and a cited RAG Q&A system (SportRules AI) over pgvector.",
      icon: User,
    },
  ],
  timeline: [
    {
      year: "Dec 04, 2025",
      title: "AWS Academy Graduate - Cloud Architecting",
      description: "Earned the AWS Academy Graduate - Cloud Architecting training badge.",
      link: "https://www.credly.com/badges/3f69c072-bc65-4a60-b3ce-0ce44f9bf221/public_url",
      image: "/timeline/aws-academy-graduate-cloud-architecting-training-ba.png",
    },
    {
      year: "Nov 30, 2025",
      title: "Capstone Top 11 Finalist - PitchPerfect 2025",
      description: "Qualified for LaunchLab Pre-Acceleration Program in Cebu Institute of Technology - University.",
      link: "https://www.facebook.com/CITUWildcatInnovLabs/posts/pfbid02dL1pNPpmgUkUryFgAmQyM5c6kRYPfDGmNtwbxfP35r9Jo2ev9rMNCzxVAbKvdTZal",
      image: "/timeline/pitchperfect.jpg",
    },
    {
      year: "Sep 25, 2025",
      title: "Champion - Proweaver Promptquest Hackathon 2025",
      description: "Reimagining Play: Powering the Future. Proweaver's PromptQuest showcases Cebuano talent in tech.",
      link: "https://cebudailynews.inquirer.net/659355/reimagining-play-powering-the-future-proweavers-promptquest-showcases-cebuano-talent-in-tech",
      image: "/timeline/hackathon_ccs.jpg",
    },
    {
      year: "Sep 23, 2025",
      title: "AWS Academy Graduate - Cloud Foundations",
      description: "Earned the AWS Academy Graduate - Cloud Foundations training badge.",
      link: "https://www.credly.com/badges/da525296-ca6b-4c1d-8994-467f6499c34b/public_url",
      image: "/timeline/aws-academy-graduate-cloud-foundations-training-bad.png",
    },
    {
      year: "2023",
      title: "Started Bachelor of Science in Information Technology",
      description: "Started my journey in the world of technology at Cebu Institute of Technology - University",
    },
  ],
  contact: {
    email: "vincentpacana0@gmail.com",
    socials: [
      { name: "GitHub", icon: Github, link: "https://github.com/beansint" },
      {
        name: "LinkedIn",
        icon: Linkedin,
        link: "https://linkedin.com/in/vincentpacanab",
      },
    ],
  },
  awards: [
    "Champion - Proweaver PromptQuest Hackathon 2025",
    "Capstone Top 11 Finalist - PitchPerfect 2025, CIT-U LaunchLab Pre-Acceleration Program",
  ],
  credentials: [
    {
      name: "AWS Academy Graduate - Cloud Architecting",
      category: "certificate",
      issuer: "Amazon Web Services Training and Certification",
      url: "https://www.credly.com/badges/3f69c072-bc65-4a60-b3ce-0ce44f9bf221/public_url",
      date: "2025-12-04",
    },
    {
      name: "AWS Academy Graduate - Cloud Foundations",
      category: "certificate",
      issuer: "Amazon Web Services Training and Certification",
      url: "https://www.credly.com/badges/da525296-ca6b-4c1d-8994-467f6499c34b/public_url",
      date: "2025-09-23",
    },
  ],
  faq: [
    {
      question: "Who is Vincent Pacaña?",
      answer:
        "Vincent B. Pacaña is a full-stack developer based in Cebu City, Philippines, who builds production SaaS and AI-powered systems - microservices, realtime platforms, and performance-focused web - across TypeScript and Java backends with React/Next.js and Flutter frontends.",
    },
    {
      question: "What does Vincent Pacaña do?",
      answer:
        "Vincent Pacaña builds practical, production-ready systems that solve real business problems - from user-facing applications to backend APIs and cloud infrastructure. He designs and builds end-to-end applications, from system logic and APIs to deployment and maintenance.",
    },
    {
      question: "What technologies does Vincent Pacaña use?",
      answer:
        "Vincent works across Next.js, React, Node.js, NestJS, Spring Boot, Python (FastAPI, Django, Flask), PostgreSQL, Redis, Stripe, and RAG/LLM systems, with Flutter on mobile and Tailwind CSS for UI.",
    },
    {
      question: "Where is Vincent Pacaña based?",
      answer:
        "Vincent Pacaña is based in Cebu City, Philippines, and is comfortable collaborating with distributed and cross-functional teams in English and Filipino.",
    },
  ],
};

