import { Github, Linkedin, Mail, Twitter, User, Code, Terminal, Cpu, Globe } from "lucide-react";

export const DATA = {
  profile: {
    name: "Vincent B. Pacaña",
    role: "Full Stack Developer",
    bio: "Full-stack developer in Cebu City building e-commerce platforms, Stripe payments, and cloud-hosted apps end to end.",
    location: "Cebu City, Philippines",
    stats: [
      { label: "Age", value: "23" },
      { label: "Years of experience", value: "2" },
      { label: "Projects worked on", value: "6" },
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
      degree: "Senior High School",
      year: "2019 - 2021",
    },
    {
      school: "Cebu Normal University",
      degree: "Junior High School",
      year: "2015 - 2019",
    },
  ],
  skills: {
    languages: "English and Filipino; comfortable collaborating with distributed teams",
    techStack: [
      "NEXT.Js",
      "Node.js",
      "React",
      "Spring Boot",
      "Python (FastAPI, Django, Flask)",
      "PostgreSQL",
      "Stripe",
    ],
    learning: "Currently learning at CIT-U and working on projects",
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
      title: "Completed AWS Academy Cloud Foundations and Cloud Architecting",
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

