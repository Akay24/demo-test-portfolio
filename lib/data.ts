import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  TestTube,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

// ─── Site Configuration ────────────────────────────────────────────
export const siteConfig = {
  name: "Abhijeet Mishra",
  role: "Software Developer | Backend | Python | Node.js",
  tagline:
    "I architect scalable automation solutions and API ecosystems, turning complex workflows into elegant, cloud-native applications.",
  email: "abhijeetmishragcek@gmail.com",
  location: "Bhubaneswar, Odisha, India",
  bio: "Software Developer with ~1.5 years of experience architecting scalable automation solutions and API ecosystems. Expert in Python and Node.js/Express.js, with specialized proficiency in Robot Framework and Veeva Vault for streamlining complex workflows. Adept at optimizing CI/CD pipelines using Jenkins and deploying cloud-native applications on AWS. A proactive technical contributor who combines engineering rigor with leadership initiative, successfully mentoring teams to drive project delivery and code quality.",
  resumeUrl: "#",
  stats: [
    { label: "Years Experience", value: "1.5+" },
    { label: "Projects Shipped", value: "10+" },
    { label: "API Latency Reduced", value: "23%" },
  ],
};

// ─── Social Links ──────────────────────────────────────────────────
export interface Social {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/mishraabhijeet", icon: GithubIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mishraabhijeet2410", icon: LinkedinIcon },
  { name: "Email", href: "mailto:abhijeetmishragcek@gmail.com", icon: Mail },
];

// ─── Navigation ────────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ─── Skills ────────────────────────────────────────────────────────
export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    icon: Server,
    items: [
      "Python",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MVC Architecture",
      "Microservices",
    ],
  },
  {
    category: "Frontend",
    icon: Code2,
    items: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "MERN Stack",
      "Responsive Design",
      "API Integration",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      "MongoDB",
      "SQL",
      "PostgreSQL",
      "Query Optimization",
      "Data Modeling",
      "Redis",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS",
      "Jenkins",
      "CI/CD Pipelines",
      "Docker",
      "Cloud-Native Apps",
      "Deployment",
    ],
  },
  {
    category: "Testing & QA",
    icon: TestTube,
    items: [
      "Robot Framework",
      "Test Automation",
      "Regression Testing",
      "Code Reviews",
      "Veeva Vault",
      "Debugging",
    ],
  },
  {
    category: "Data Science",
    icon: Wrench,
    items: [
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Jupyter",
      "NLP",
      "Predictive Modeling",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  highlights: string[];
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Backend Microservices Platform",
    description:
      "Scalable backend microservices architecture using Python and Node.js with optimized MongoDB queries.",
    longDescription:
      "Designed and implemented a scalable backend microservices platform at Spotline, Inc. using Python and Node.js (Express). Focused on optimizing MongoDB queries to significantly reduce API latency and enhance overall system performance. The architecture follows best practices for modular design, ensuring high maintainability and ease of deployment on AWS.",
    tech: ["Python", "Node.js", "Express.js", "MongoDB", "AWS"],
    github: "https://github.com/mishraabhijeet",
    live: "#",
    highlights: [
      "Reduced API latency and enhanced system performance by 23%",
      "Modular microservices architecture for high maintainability",
      "Deployed cloud-native solutions on AWS",
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    icon: "⚡",
  },
  {
    title: "Test Automation Pipeline",
    description:
      "End-to-end test automation with Robot Framework integrated into Jenkins CI/CD pipelines.",
    longDescription:
      "Led test automation initiatives using Robot Framework, seamlessly integrating automated scripts into Jenkins CI/CD pipelines. This reduced manual regression testing efforts by 65%, significantly improving release velocity and code confidence. Enforced best practices including legacy code standards and modular test architecture.",
    tech: ["Robot Framework", "Jenkins", "CI/CD", "Python", "Veeva Vault"],
    github: "https://github.com/mishraabhijeet",
    live: "#",
    highlights: [
      "Reduced manual regression testing by 65%",
      "Seamless integration with Jenkins CI/CD pipelines",
      "Enforced modular test architecture standards",
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    icon: "🧪",
  },
  {
    title: "MERN Stack Application",
    description:
      "Dynamic full-stack web application built with MongoDB, Express.js, React, and Node.js.",
    longDescription:
      "Engineered dynamic full-stack applications using the MERN Stack (MongoDB, Express.js, React, Node.js), delivering robust end-to-end solutions. Architected scalable RESTful APIs utilizing MVC design patterns to ensure code modularity and efficient data flow between client and server. Optimized frontend-backend integration and resolved complex debugging challenges.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/mishraabhijeet",
    live: "#",
    highlights: [
      "End-to-end MERN stack development",
      "Scalable RESTful APIs with MVC architecture",
      "Optimized API response times through debugging",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    icon: "🌐",
  },
  {
    title: "Predictive ML Models",
    description:
      "Data science pipeline with predictive models using Scikit-learn, Pandas, and Jupyter Notebooks.",
    longDescription:
      "Built end-to-end data science pipelines including data cleaning, transformation, and feature preparation using Python-based libraries. Implemented predictive models with Scikit-learn, focusing on improving model performance through iterative tuning. Analyzed outcomes using RMSE and MSE metrics, and documented experiments through interactive Jupyter Notebook workflows and visualizations.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
    github: "https://github.com/mishraabhijeet",
    live: "#",
    highlights: [
      "End-to-end data cleaning and feature engineering",
      "Iterative model tuning with Scikit-learn",
      "Interactive Jupyter Notebook visualizations",
    ],
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    icon: "📊",
  },
];

// ─── Experience ────────────────────────────────────────────────────
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Spotline, Inc.",
    role: "Software Developer",
    period: "Oct 2024 — Present",
    location: "Bhubaneswar",
    description:
      "Designing scalable backend microservices and leading test automation initiatives for enterprise-grade products.",
    highlights: [
      "Designed and implemented scalable backend microservices using Python and Node.js (Express), optimizing MongoDB queries to reduce API latency by 23%",
      "Led test automation with Robot Framework, integrating into Jenkins CI/CD pipelines, reducing manual regression testing by 65%",
      "Provided technical leadership through code reviews and enforcing modular architecture best practices",
      "Collaborated with cross-platform stakeholders to deploy cloud-native solutions on AWS",
      "Bridged technical communication for global clients, ensuring 100% alignment on deliverable goals",
    ],
  },
  {
    company: "QSpiders",
    role: "Full-Stack Developer",
    period: "Jan 2024 — Oct 2024",
    location: "Bhubaneswar",
    description:
      "Engineered dynamic full-stack applications using the MERN Stack, delivering robust end-to-end solutions.",
    highlights: [
      "Built full-stack applications with MongoDB, Express.js, React, and Node.js",
      "Architected scalable RESTful APIs using MVC design patterns",
      "Optimized frontend-backend integration, resolving complex debugging challenges",
      "Applied advanced Data Structures and SQL strategies to streamline system workflows",
    ],
  },
  {
    company: "Oasis Infobyte",
    role: "Data Science Intern",
    period: "Jul 2023 — Aug 2023",
    location: "Delhi, India",
    description:
      "Performed data analysis, built predictive models, and documented insights through Jupyter Notebook workflows.",
    highlights: [
      "Performed end-to-end data cleaning, transformation, and feature preparation using Python",
      "Implemented predictive models with Scikit-learn, improving performance through iterative tuning",
      "Analyzed model outcomes using RMSE and MSE regression metrics",
    ],
  },
  {
    company: "Bharat Intern",
    role: "Data Science Intern",
    period: "Jun 2023 — Jul 2023",
    location: "Bhopal",
    description:
      "Conducted data analysis and developed machine learning models for prediction and exploratory analysis.",
    highlights: [
      "Conducted data analysis and preprocessing using Python, Pandas, and NumPy",
      "Developed ML models using Scikit-learn for prediction and exploratory analysis",
      "Utilized Jupyter Notebook for data visualization and result validation",
    ],
  },
  {
    company: "AICTE NEAT",
    role: "Summer Intern",
    period: "May 2023 — Jul 2023",
    location: "United States",
    description:
      "Gained hands-on exposure to AI/ML concepts and AWS services for experimentation and model deployment.",
    highlights: [
      "Hands-on exposure to AI/ML concepts including NLP, computer vision, and predictive modeling",
      "Worked with AWS services for experimentation and model deployment basics",
      "Collaborated with mentors and peers in a structured internship environment",
    ],
  },
];

// ─── Education ─────────────────────────────────────────────────────
export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
  {
    institution: "Government College of Engineering, Kalahandi",
    degree: "B.Tech, Computer Science",
    period: "2020 — 2024",
  },
  {
    institution: "Council of Higher Secondary Education",
    degree: "Intermediate, Science",
    period: "2017 — 2019",
  },
];

// ─── Certifications ────────────────────────────────────────────────
export const certifications = [
  "Basics of JavaScript Programming Bootcamp",
  "AWS Academy Graduate — Data Analytics",
  "Data Science Certification",
  "HackerRank — SQL Basics",
  "AWS Academy Graduate — Machine Learning Foundations",
];
