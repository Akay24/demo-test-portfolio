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
  role: "Software Engineer | Backend Architecture | Python & FastAPI",
  tagline:
    "I architect scalable automation solutions and API ecosystems, turning complex workflows into elegant, cloud-native applications.",
  email: "abhijeetmishra2410@gmail.com",
  location: "Bhubaneswar, Odisha, India",
  bio: "Software Developer with 2+ years of experience architecting scalable automation solutions and API ecosystems. Expert in Python and Node.js/Express.js, with specialized proficiency in Robot Framework and Veeva Vault for streamlining complex workflows. Adept at optimizing CI/CD pipelines using Jenkins and deploying cloud-native applications on AWS. A proactive technical contributor who combines engineering rigor with leadership initiative, successfully mentoring teams to drive project delivery and code quality.",
  resumeUrl: "#",
  stats: [
    { label: "Years Experience", value: "2+" },
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
  { name: "GitHub", href: "https://github.com/Akay24", icon: GithubIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mishraabhijeet2410", icon: LinkedinIcon },
  { name: "Email", href: "mailto:abhijeetmishra2410@gmail.com", icon: Mail },
];

// ─── Navigation ────────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Designs", href: "#designs" },
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
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
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
    category: "Testing & Automation",
    icon: TestTube,
    items: [
      "Robot Framework",
      "Test Automation",
      "AI & Workflow Automation",
      "CI/CD Integration",
      "Veeva Vault",
      "Regression Testing",
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
    github: "https://github.com/Akay24",
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
    github: "https://github.com/Akay24",
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
    github: "https://github.com/Akay24",
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
    github: "https://github.com/Akay24",
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

// ─── Design Explorations (20 Standalone Websites) ───────────────────
export interface DesignExploration {
  id: string;
  number: string;
  name: string;
  style: string;
  description: string;
  url: string;
  tags: string[];
  category: "Minimal & Grid" | "Vibrant & Expressive" | "Retro & Heritage" | "Atmospheric & 3D";
}

export const designExplorations: DesignExploration[] = [
  {
    id: "01-minimalism",
    number: "01",
    name: "FORM Studio",
    style: "Minimalism",
    description: "Architectural monograph studio exploring high negative space, stark monochromatic balance, and precise grid geometry.",
    url: "https://01-minimalism.vercel.app",
    tags: ["Monochrome", "Negative Space", "Architectural"],
    category: "Minimal & Grid"
  },
  {
    id: "02-maximalism",
    number: "02",
    name: "LOUD Magazine",
    style: "Maximalism",
    description: "High-density digital culture zine featuring overlapping kinetic typography, clashing textures, and hyper-saturated aesthetics.",
    url: "https://02-maximalism.vercel.app",
    tags: ["High Density", "Expressive Type", "Vibrant Clash"],
    category: "Vibrant & Expressive"
  },
  {
    id: "03-futuristic",
    number: "03",
    name: "NEXORA Mobility",
    style: "Futuristic / Sci-Fi",
    description: "Suborbital avionics console with real-time HUD telemetry, glowing cyan optics, and interactive mission trajectory controls.",
    url: "https://03-futuristic.vercel.app",
    tags: ["HUD Telemetry", "Sci-Fi Avionics", "Cyan Glow"],
    category: "Atmospheric & 3D"
  },
  {
    id: "04-vector-art",
    number: "04",
    name: "Forma Creative",
    style: "Vector Art",
    description: "Digital branding and illustration studio built with crisp mathematical SVG primitives, isometric grids, and flat color planes.",
    url: "https://04-vector-art.vercel.app",
    tags: ["Crisp SVG", "Isometric Grid", "Flat Art"],
    category: "Minimal & Grid"
  },
  {
    id: "05-collage-art",
    number: "05",
    name: "AFTERIMAGE Festival",
    style: "Collage Art",
    description: "Avant-garde festival showcase featuring torn-paper cutouts, halftone textures, analog tape overlays, and dadaist typography.",
    url: "https://05-collage-art.vercel.app",
    tags: ["Paper Cutouts", "Halftone Rhythms", "Mixed Media"],
    category: "Vibrant & Expressive"
  },
  {
    id: "06-retro",
    number: "06",
    name: "The Jukebox Diner",
    style: "Retro 70s / 80s",
    description: "Analog Hi-Fi lounge with warm amber luminescence, interactive vacuum tube VU meters, and rich woodgrain textures.",
    url: "https://06-retro.vercel.app",
    tags: ["Warm Amber", "Analog Hi-Fi", "Woodgrain"],
    category: "Retro & Heritage"
  },
  {
    id: "07-cyberpunk",
    number: "07",
    name: "NEON DISTRICT",
    style: "Cyberpunk",
    description: "Dystopian underworld tech marketplace terminal featuring CRT scanlines, glitch chromatic aberration, and neon pink/cyan glows.",
    url: "https://07-cyberpunk.vercel.app",
    tags: ["Glitch FX", "CRT Scanline", "Neon Terminal"],
    category: "Atmospheric & 3D"
  },
  {
    id: "08-pop-art",
    number: "08",
    name: "POPKICK Sneakers",
    style: "Pop Art",
    description: "Comic book streetwear drop inspired by Roy Lichtenstein and Andy Warhol, featuring Ben-Day dots, primary colors, and action bubbles.",
    url: "https://08-pop-art.vercel.app",
    tags: ["Ben-Day Dots", "Primary Palette", "Comic Ink"],
    category: "Vibrant & Expressive"
  },
  {
    id: "09-glassmorphism",
    number: "09",
    name: "Prism Analytics",
    style: "Glassmorphism",
    description: "Telemetry cloud dashboard built with multi-layered frosted glass panels, backdrop blurring, and chromatic light refractions.",
    url: "https://09-glassmorphism.vercel.app",
    tags: ["Frosted Glass", "Backdrop Blur", "Specular Light"],
    category: "Atmospheric & 3D"
  },
  {
    id: "10-clay-style",
    number: "10",
    name: "Pebble Tracker",
    style: "Claymorphism",
    description: "Tactile habit tracking experience crafted with soft inner/outer pillowy shadows, rounded 3D clay cards, and friendly pastel palettes.",
    url: "https://10-clay-style.vercel.app",
    tags: ["Soft 3D", "Tactile Clay", "Pastel Shades"],
    category: "Atmospheric & 3D"
  },
  {
    id: "11-pixel-art",
    number: "11",
    name: "STARBYTE Chronicles",
    style: "Pixel Art",
    description: "16-bit retro RPG showcase with authentic bitmap typography, sprite animation canvases, and arcade CRT scanlines.",
    url: "https://11-pixel-art.vercel.app",
    tags: ["16-Bit Bitmap", "Sprite Art", "Arcade CRT"],
    category: "Retro & Heritage"
  },
  {
    id: "12-editorial",
    number: "12",
    name: "FRAME Journal",
    style: "Editorial",
    description: "Refined architectural publication with high-contrast serif typography, asymmetric broadsheet columns, and elegant pull-quotes.",
    url: "https://12-editorial.vercel.app",
    tags: ["Editorial Serif", "Broadsheet Grid", "Refined Leading"],
    category: "Minimal & Grid"
  },
  {
    id: "13-y2k",
    number: "13",
    name: "FUTURE.exe",
    style: "Y2K Aesthetic",
    description: "Early-2000s cyber-rave digital portal featuring liquid chrome gradients, metallic bubble typography, starbursts, and retro web widgets.",
    url: "https://13-y2k.vercel.app",
    tags: ["Liquid Chrome", "Retro Web 1.0", "Starburst FX"],
    category: "Vibrant & Expressive"
  },
  {
    id: "14-swiss-design",
    number: "14",
    name: "GRID/26 International",
    style: "Swiss Design",
    description: "International Typographic Style symposium with mathematical modular grids, objective hierarchy, and bold Akzidenz-Grotesk type.",
    url: "https://14-swiss-design.vercel.app",
    tags: ["Modular Grid", "Objective Layout", "Akzidenz Bold"],
    category: "Minimal & Grid"
  },
  {
    id: "15-bohemian",
    number: "15",
    name: "Wildwoven Studio",
    style: "Bohemian",
    description: "Artisan craft collective featuring earthy terracotta, botanical sage hues, wabi-sabi organic curves, and craft textures.",
    url: "https://15-bohemian.vercel.app",
    tags: ["Earthy Terracotta", "Botanical Sage", "Organic Forms"],
    category: "Retro & Heritage"
  },
  {
    id: "16-victorian-style",
    number: "16",
    name: "Ashbourne & Co.",
    style: "Victorian Heritage",
    description: "Heritage tea apothecary with intricate engraved filigree borders, gilded gold foil accents, and antique emerald typography.",
    url: "https://16-victorian-style.vercel.app",
    tags: ["Engraved Filigree", "Gilded Gold", "Heritage Antique"],
    category: "Retro & Heritage"
  },
  {
    id: "17-graffiti",
    number: "17",
    name: "RAWBLOCK Underground",
    style: "Graffiti / Street Art",
    description: "Subterranean streetwear portal with spray-paint textures, dripping stencils, concrete grunge surfaces, and rebellious typography.",
    url: "https://17-graffiti.vercel.app",
    tags: ["Spray Stencils", "Concrete Grunge", "Urban Streetwear"],
    category: "Vibrant & Expressive"
  },
  {
    id: "18-aurora",
    number: "18",
    name: "AURORA FM",
    style: "Aurora Glow",
    description: "Sub-arctic ambient soundscape player powered by animated luminescent color mesh gradients and ethereal chromatic glows.",
    url: "https://18-aurora.vercel.app",
    tags: ["Color Mesh", "Ethereal Glow", "Ambient Waves"],
    category: "Atmospheric & 3D"
  },
  {
    id: "19-handwritten",
    number: "19",
    name: "Notes by Abhi",
    style: "Handwritten / Sketchbook",
    description: "Creator sketchbook with natural cursive script typography, margin doodles, paper texture backgrounds, and washi tape tabs.",
    url: "https://19-handwritten.vercel.app",
    tags: ["Natural Cursive", "Paper Texture", "Washi Tape"],
    category: "Retro & Heritage"
  },
  {
    id: "20-surreal-art",
    number: "20",
    name: "The Other Side",
    style: "Surrealism",
    description: "Metaphysical exhibition exploring dream logic, paradoxical vanishing grids, floating classical monoliths, and twilight velvet skies.",
    url: "https://20-surreal-art.vercel.app",
    tags: ["Dream Logic", "Metaphysical Grid", "Floating Obelisks"],
    category: "Atmospheric & 3D"
  }
];
