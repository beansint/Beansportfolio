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
      title: "Wildcat Radio",
      description:
        "Web-based radio broadcasting for CIT-U Wildcat Radio; co-led architecture, cloud VMs, and main broadcasting features.",
      tech: ["Spring Boot", "Flask", "Icecast", "React", "PostgreSQL"],
      link: "#",
      image: "",
    },
    {
      title: "Studyboost.com",
      description:
        "Full-stack e-commerce for a client; payment processing (Stripe), affiliates, tech plans, cloud storage, and bulk data import.",
      tech: ["Spring Boot", "React", "PostgreSQL", "Stripe"],
      link: "#",
      image: "",
    },
    {
      title: "Project Chimera (Web Game)",
      description:
        "4-hour hackathon-winning web game; co-built mechanics, logic design, and technical foundation.",
      tech: ["HTML", "JavaScript", "CSS"],
      link: "#",
      image: "",
    },
    {
      title: "Qualitidex (AI QA System)",
      description:
        "AI-powered QA for BPOs: ingests call recordings, transcribes (Deepgram), LLM evaluation (Gemini/Claude), and scoring.",
      tech: ["FastAPI", "React.js", "PostgreSQL", "Deepgram", "Gemini"],
      link: "#",
      image: "",
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

