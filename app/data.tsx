import { Github, Linkedin, User, Code, Terminal, Cpu } from "lucide-react";

export const DATA = {
  profile: {
    name: "Vincent B. Pacaña",
    role: "Full Stack Developer",
    bio: "Full-stack developer in Cebu City building production SaaS and AI-powered systems: microservices, realtime platforms, and performance-focused web. Comfortable across TypeScript and Java backends, React/Next.js and Flutter frontends, and cloud deployment.",
    summary: "Vincent B. Pacaña is a full-stack developer based in Cebu City, Philippines, who builds production SaaS and AI-powered systems — microservices, realtime platforms, and performance-focused web — across TypeScript and Java backends with React/Next.js and Flutter frontends.",
    nationality: "Filipino",
    npm: "https://www.npmjs.com/~beansint",
    location: "Cebu City, Philippines",
    resumeUrl: "/files/Vincent-Pacana-Resume.pdf",
    stats: [
      { label: "Age", value: "23" },
      { label: "Years of experience", value: "2" },
      { label: "Projects worked on", value: "7" },
      { label: "Certifications", value: "6" },
    ],
  },
  education: [
    {
      school: "Cebu Institute of Technology - University",
      degree: "Bachelor of Science in Information Technology",
      year: "2022 - Present",
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
    learning: "Currently learning at CIT-U and working on projects",
  },
  projects: [
    {
      title: "Wildcat Radio v2",
      description:
        "Lead developer on a production rebuild of CIT-U's campus internet radio: a contract-first NestJS backend, live HLS audio streaming, and a realtime layer (chat, song requests, polls, live listener presence) over WebSockets, plus a desktop studio app for broadcasting.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "HLS"],
      link: "https://wildcat-radio.live/",
      image: "/images/projects/wildcatradio.png",
    },
    {
      title: "SportRules AI",
      description:
        "A RAG (retrieval-augmented generation) Q&A app over official sports rulebooks (NBA/NFL/MLB/FIFA) that returns cited, source-grounded answers. Built on a pluggable multi-provider LLM registry with per-query cost tracking.",
      tech: ["Next.js", "TypeScript", "Supabase", "pgvector", "LLMs"],
      link: "",
      github: "https://github.com/beansint/sports-rulebook-rag-ai",
      image: "/images/projects/sportrules.png",
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
    },
    {
      title: "Three H Redwood International School",
      description:
        "A static school website built end-to-end on Next.js / Vercel with full technical SEO (structured data, dynamic sitemap, analytics). Ranks on the first page of Google and scores a perfect 100 desktop Lighthouse across every page.",
      tech: ["Next.js", "Vercel", "SEO", "Tailwind"],
      link: "https://threehredwood.edu.ph",
      image: "/images/projects/3h.png",
    },
    {
      title: "Studyboost",
      description:
        "A full-stack e-commerce platform built with a small team (in development): contributed to the backend migration from Spring Boot to NestJS, Stripe payment integration, and an affiliate program.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
      link: "https://studyboost.com/",
      image: "/images/projects/studyboost.png",
    },
    {
      title: "BlockNotes",
      description:
        "Blockchain Django web app on Cardano: immutable payment-linked notes, CIP-30 wallet (Lace/Eternl) via Blaze SDK, client-side signing, REST APIs for async transaction logging with Blockfrost, refactored to move tx logic to frontend for lower server load and better security.",
      tech: ["Django", "Cardano", "CIP-30", "Blaze SDK", "Vite", "Python", "Blockfrost"],
      link: "",
      image: "/images/projects/blocknotes-blockchain-notepad.png",
    },
    {
      title: "Project Chimera (Web Game)",
      description:
        "A 4-hour hackathon-winning web game; co-built mechanics, logic design, and technical foundation.",
      tech: ["HTML", "JavaScript", "CSS"],
      link: "https://project-chimera-hackathon.netlify.app/",
      image: "/images/projects/chimera.mp4",
      poster: "/images/projects/chimera-poster.jpg",
    },
  ],
  experience: [
    {
      role: "Frontend Engineer",
      description: "Led the frontend team, built complex UIs, and optimized performance.",
      icon: Code,
    },
    {
      role: "Backend Engineer",
      description: "Built scalable APIs, microservices, and database schemas.",
      icon: Terminal,
    },
    {
      role: "Teammate",
      description: "Always ready to help, mentor, and collaborate with the team.",
      icon: User,
    },
    {
      role: "Aspiring DevOps",
      description: "Learning CI/CD, Docker, Kubernetes, and cloud infrastructure.",
      icon: Cpu,
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
    "Champion — Proweaver PromptQuest Hackathon 2025",
    "Capstone Top 11 Finalist — PitchPerfect 2025, CIT-U LaunchLab Pre-Acceleration Program",
  ],
  credentials: [
    {
      name: "AWS Academy Graduate — Cloud Architecting",
      category: "certificate",
      issuer: "Amazon Web Services Training and Certification",
      url: "https://www.credly.com/badges/3f69c072-bc65-4a60-b3ce-0ce44f9bf221/public_url",
      date: "2025-12-04",
    },
    {
      name: "AWS Academy Graduate — Cloud Foundations",
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
        "Vincent B. Pacaña is a full-stack developer based in Cebu City, Philippines, who builds production SaaS and AI-powered systems — microservices, realtime platforms, and performance-focused web — across TypeScript and Java backends with React/Next.js and Flutter frontends.",
    },
    {
      question: "What does Vincent Pacaña do?",
      answer:
        "Vincent Pacaña builds practical, production-ready systems that solve real business problems — from user-facing applications to backend APIs and cloud infrastructure. He designs and builds end-to-end applications, from system logic and APIs to deployment and maintenance.",
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

