import { Github, Linkedin, Mail, Twitter, User, Code, Terminal, Cpu, Globe } from "lucide-react";

export const DATA = {
  profile: {
    name: "Radnaabazar Bulgan",
    role: "Software Engineer",
    bio: "Developer who has built clean, reliable systems for e-commerce, real-time auctions, and stock exchanges.",
    location: "Ulaanbaatar, Mongolia", // Inferred from image
    stats: [
      { label: "Age", value: "21" },
      { label: "Years of experience", value: "2" },
      { label: "Projects Handled", value: "20" },
      { label: "Clients", value: "8" },
    ],
  },
  education: [
    {
      school: "High School Certificate",
      degree: "High School",
      year: "2018 - 2021",
    },
    {
      school: "Bachelor in Software Engineering",
      degree: "University",
      year: "2021 - Present",
    },
  ],
  skills: {
    languages: "Fluent in Japanese, English, and Mongolian",
    techStack: ["NEXT.JS", "React", "TypeScript", "Node.js", "Python", "Go"],
    learning: "Currently learning at university while working",
  },
  projects: [
    {
      title: "Mongolian Bond Market",
      description: "A real-time platform for bond trading and analysis.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
      image: "/placeholder-project-1.jpg",
    },
    {
      title: "Mining Auction System",
      description: "A real-time auction of products such as coal, iron, and gold.",
      tech: ["React", "Node.js", "Socket.io"],
      link: "#",
      image: "/placeholder-project-2.jpg",
    },
    {
      title: "Gobi Deluxe Hotel & Resort",
      description: "A SaaS platform for room management, booking, and services.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      link: "#",
      image: "/placeholder-project-3.jpg",
    },
    {
      title: "Stock Companion",
      description: "Official Mongolian Stock Exchange analytics dashboard.",
      tech: ["Next.js", "Recharts", "Python"],
      link: "#",
      image: "/placeholder-project-4.jpg",
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
      year: "2025",
      title: "Future Goals",
      description: "Aiming to become a Full Stack Architect and contribute to open source.",
    },
    {
      year: "2024",
      title: "Senior Developer",
      description: "Promoted to Senior Developer, led 3 major projects.",
    },
    {
      year: "Early 2024",
      title: "Mid-level Engineer",
      description: "Worked on high-traffic e-commerce platforms.",
    },
    {
      year: "2023",
      title: "Junior Developer",
      description: "Started career as a Junior Developer at a local tech firm.",
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
      { name: "Twitter", icon: Twitter, link: "https://twitter.com" },
    ],
  },
};

