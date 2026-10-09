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
  role: "Backend Software Engineer | Distributed Systems & Applied AI",
  tagline:
    "Architecting resilient backend systems, distributed task queues, and applied AI workflows. Turning complex enterprise operations into observable cloud services.",
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
    title: "GridLock CTF // Terminal Engine",
    description:
      "Interactive security terminal challenge with command parser, virtual Unix filesystem, and crypto decoders.",
    longDescription:
      "Designed and implemented GridLock CTF, an interactive security challenge environment featuring an in-browser command interpreter (nmap, cat, decrypt, clear), virtual directory hierarchy, multi-stage Caesar and XOR cipher cracking, and synthesized CRT phosphor audio feedback via the Web Audio API.",
    tech: ["TypeScript", "React 19", "Web Audio API", "Vite"],
    github: "https://github.com/Akay24/07-cyberpunk",
    live: "https://07-cyberpunk.vercel.app",
    highlights: [
      "Full command parser with AST routing & flag verification",
      "Real-time Web Audio synthesizer simulating CRT monitor buzz",
      "100% strictly typed TypeScript implementation",
    ],
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-cyan-500/20",
    icon: "⚡",
  },
  {
    title: "Solarium FM // Space Weather Synthesizer",
    description:
      "Astrophysical telemetry sonification station modulating a 4-voice ambient drone synthesizer via NOAA space data.",
    longDescription:
      "Engineered Solarium FM, bridging astrophysics and digital signal processing. Telemetry inputs representing solar wind velocity and geomagnetic Kp index dynamically drive a 4-voice Web Audio graph (sub-harmonic drone, filtered sawtooth pad, pink noise, and bell chimes) while a 60 FPS HTML5 Canvas renders mathematical aurora wave harmonics.",
    tech: ["Web Audio DSP", "HTML5 Canvas", "React 19", "TypeScript"],
    github: "https://github.com/Akay24/18-aurora",
    live: "https://18-aurora.vercel.app",
    highlights: [
      "4-voice Web Audio synthesizer graph with custom filters & gain ramping",
      "Real-time sine-harmonic canvas ribbon renderer driven by telemetry",
      "Zero external audio samples; pure mathematical synthesis",
    ],
    gradient: "from-cyan-500/20 via-emerald-500/10 to-teal-500/20",
    icon: "📡",
  },
  {
    title: "PixelQuest: Starbyte // 16-Bit Engine",
    description:
      "Playable 2D canvas game loop with collision detection, retro chiptune audio, and an in-browser sprite editor.",
    longDescription:
      "Developed a full 2D retro action RPG engine in pure TypeScript and HTML5 Canvas. Features a 60 FPS requestAnimationFrame game loop, axis-aligned bounding box (AABB) collision physics, tile map atlas slicing, synthesized 8-bit sound effects, and an interactive 16x16 pixel art sprite forge with PNG export.",
    tech: ["Canvas 2D", "Game Loop Engine", "React 19", "TypeScript"],
    github: "https://github.com/Akay24/11-pixel-art",
    live: "https://11-pixel-art.vercel.app",
    highlights: [
      "60 FPS Canvas game loop with delta-time velocity physics",
      "Integrated in-browser pixel editor with palette selection",
      "Zero external game engines; built entirely from first principles",
    ],
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    icon: "🎮",
  },
  {
    title: "Backend Microservices Platform",
    description:
      "Scalable enterprise backend microservices architecture using Python, Node.js, and optimized MongoDB queries.",
    longDescription:
      "Architected and deployed scalable backend microservices at Spotline, Inc. using Python and Node.js (Express). Focused on indexing and query optimization in MongoDB to reduce API latency by 23% under peak concurrency. Integrated into AWS cloud infrastructure with Docker and automated Jenkins CI/CD deployment pipelines.",
    tech: ["Python", "Node.js", "Express.js", "MongoDB", "AWS", "Docker"],
    github: "https://github.com/Akay24",
    live: "https://github.com/Akay24",
    highlights: [
      "Reduced API latency and enhanced system performance by 23%",
      "Modular microservices architecture for high maintainability",
      "Deployed cloud-native solutions on AWS with Jenkins CI/CD",
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
    icon: "🌐",
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
  repoUrl: string;
  tags: string[];
  category: "Minimal & Grid" | "Vibrant & Expressive" | "Retro & Heritage" | "Atmospheric & 3D";
}

export const designExplorations: DesignExploration[] = [
  {
    id: "01-minimalism",
    number: "01",
    name: "ArchVault // Monograph Studio",
    style: "Minimalism",
    description: "Architectural blueprint CAD viewer and spec sheet vault exploring stark monochrome balance and precise grid geometry.",
    url: "https://01-minimalism.vercel.app",
    repoUrl: "https://github.com/Akay24/01-minimalism",
    tags: ["CAD Blueprints", "Spec Drawer", "Monochrome"],
    category: "Minimal & Grid"
  },
  {
    id: "02-maximalism",
    number: "02",
    name: "FanzineOS // Maximalist Press",
    style: "Maximalism",
    description: "High-density digital culture underground zine featuring overlapping kinetic typography, sticker-bombing, and audio loops.",
    url: "https://02-maximalism.vercel.app",
    repoUrl: "https://github.com/Akay24/02-maximalism",
    tags: ["Kinetic Type", "Sticker Bomb", "High Density"],
    category: "Vibrant & Expressive"
  },
  {
    id: "03-futuristic",
    number: "03",
    name: "OrbitalOps // Flight Dynamics Console",
    style: "Futuristic / Sci-Fi",
    description: "Suborbital avionics flight dynamics console with real-time Keplerian orbital trajectory paths and HUD telemetry instrumentation.",
    url: "https://03-futuristic.vercel.app",
    repoUrl: "https://github.com/Akay24/03-futuristic",
    tags: ["Keplerian Orbit", "HUD Telemetry", "Avionics"],
    category: "Atmospheric & 3D"
  },
  {
    id: "04-vector-art",
    number: "04",
    name: "AvatarCraft // Vector Mascot Engine",
    style: "Vector Art",
    description: "Procedural SVG mascot customization studio built with modular vector primitives, layer sequencing, and high-res PNG export.",
    url: "https://04-vector-art.vercel.app",
    repoUrl: "https://github.com/Akay24/04-vector-art",
    tags: ["SVG Primitives", "Mascot Engine", "Vector Export"],
    category: "Minimal & Grid"
  },
  {
    id: "05-collage-art",
    number: "05",
    name: "FestCrafter // Lineup Matrix & Pass",
    style: "Collage Art",
    description: "Dadaist festival lineup matrix and torn-paper pass generator featuring analog tape overlays, halftone textures, and grain filters.",
    url: "https://05-collage-art.vercel.app",
    repoUrl: "https://github.com/Akay24/05-collage-art",
    tags: ["Torn Paper", "Halftone Grit", "Pass Studio"],
    category: "Vibrant & Expressive"
  },
  {
    id: "06-retro",
    number: "06",
    name: "GrooveTable // Hi-Fi Vinyl Lounge",
    style: "Retro 70s / 80s",
    description: "Analog turntable lounge with realistic RPM pitch control, tonearm needle drops, and Web Audio dust crackle synthesis.",
    url: "https://06-retro.vercel.app",
    repoUrl: "https://github.com/Akay24/06-retro",
    tags: ["Vinyl Turntable", "Web Audio DSP", "70s Hi-Fi"],
    category: "Retro & Heritage"
  },
  {
    id: "07-cyberpunk",
    number: "07",
    name: "GridLock CTF // Terminal Challenge",
    style: "Cyberpunk",
    description: "Dystopian cybersecurity terminal challenge featuring real UNIX command interpreter, Caesar/XOR crypto decoders, and CRT phosphor audio.",
    url: "https://07-cyberpunk.vercel.app",
    repoUrl: "https://github.com/Akay24/07-cyberpunk",
    tags: ["CLI Terminal", "CTF Hacking", "Crypto Ciphers"],
    category: "Atmospheric & 3D"
  },
  {
    id: "08-pop-art",
    number: "08",
    name: "DropComic // Halftone Webcomic Reader",
    style: "Pop Art",
    description: "Comic book reading engine inspired by Roy Lichtenstein, featuring procedural Ben-Day dot screens, action bubbles, and sound effect canvas.",
    url: "https://08-pop-art.vercel.app",
    repoUrl: "https://github.com/Akay24/08-pop-art",
    tags: ["Ben-Day Dots", "Sound FX Canvas", "Comic Reader"],
    category: "Vibrant & Expressive"
  },
  {
    id: "09-glassmorphism",
    number: "09",
    name: "PrismPulse // Latency Prober & Monitor",
    style: "Glassmorphism",
    description: "Synthetic network latency prober and cloud health monitor built with frosted glass panels, HTTP fetch timings, and incident cards.",
    url: "https://09-glassmorphism.vercel.app",
    repoUrl: "https://github.com/Akay24/09-glassmorphism",
    tags: ["Latency Prober", "Health Monitor", "Frosted Glass"],
    category: "Atmospheric & 3D"
  },
  {
    id: "10-clay-style",
    number: "10",
    name: "ClayFocus // Tactile Habit Sanctuary",
    style: "Claymorphism",
    description: "Tactile Pomodoro and daily habit sanctuary crafted with pillowy drop shadows, squish animations, and ambient chime feedback.",
    url: "https://10-clay-style.vercel.app",
    repoUrl: "https://github.com/Akay24/10-clay-style",
    tags: ["Tactile 3D", "Pomodoro Timer", "Habit Squish"],
    category: "Atmospheric & 3D"
  },
  {
    id: "11-pixel-art",
    number: "11",
    name: "PixelQuest: Starbyte // 16-Bit Space RPG",
    style: "Pixel Art",
    description: "16-bit retro action RPG featuring playable 60 FPS canvas game loop, collision physics, chiptune audio, and an in-browser sprite editor.",
    url: "https://11-pixel-art.vercel.app",
    repoUrl: "https://github.com/Akay24/11-pixel-art",
    tags: ["2D Game Loop", "Sprite Editor", "16-Bit RPG"],
    category: "Retro & Heritage"
  },
  {
    id: "12-editorial",
    number: "12",
    name: "Monograph // Broadsheet & Margin Notes",
    style: "Editorial",
    description: "Refined architectural publication with high-contrast serif typography, asymmetric broadsheet columns, and margin footnote drawer.",
    url: "https://12-editorial.vercel.app",
    repoUrl: "https://github.com/Akay24/12-editorial",
    tags: ["Broadsheet Type", "Margin Notes", "Refined Serif"],
    category: "Minimal & Grid"
  },
  {
    id: "13-y2k",
    number: "13",
    name: "CyberSwap // Winamp P2P Audio Studio",
    style: "Y2K Aesthetic",
    description: "Early-2000s skeuomorphic MP3 software replicating Winamp and Napster, with active playlist queues, track scrubbing, and simulated P2P downloads.",
    url: "https://13-y2k.vercel.app",
    repoUrl: "https://github.com/Akay24/13-y2k",
    tags: ["Winamp Player", "P2P Transfer", "Y2K Skeuomorph"],
    category: "Vibrant & Expressive"
  },
  {
    id: "14-swiss-design",
    number: "14",
    name: "GridConf // International Typographic",
    style: "Swiss Design",
    description: "International Typographic Style symposium with mathematical modular grids, objective hierarchy, and interactive conference badge studio.",
    url: "https://14-swiss-design.vercel.app",
    repoUrl: "https://github.com/Akay24/14-swiss-design",
    tags: ["Modular Grid", "Badge Studio", "Akzidenz Bold"],
    category: "Minimal & Grid"
  },
  {
    id: "15-bohemian",
    number: "15",
    name: "EarthCraft // Ceramic Pottery Studio",
    style: "Bohemian",
    description: "Artisan ceramics and glaze formulation studio with pyrometric cone firing schedules, thermal curves, and earthy aesthetic.",
    url: "https://15-bohemian.vercel.app",
    repoUrl: "https://github.com/Akay24/15-bohemian",
    tags: ["Pyrometric Cones", "Glaze Chemistry", "Earthy Sage"],
    category: "Retro & Heritage"
  },
  {
    id: "16-victorian-style",
    number: "16",
    name: "Ashbourne & Co. // Botanical Formulary",
    style: "Victorian Heritage",
    description: "19th-century botanical apothecary and compounding formulary with herbarium browser, weight balance scale, and Latin prescription chits.",
    url: "https://16-victorian-style.vercel.app",
    repoUrl: "https://github.com/Akay24/16-victorian-style",
    tags: ["Apothecary Scale", "Botanical Materia", "Latin Rx Chits"],
    category: "Retro & Heritage"
  },
  {
    id: "17-graffiti",
    number: "17",
    name: "RAWBLOCK // Aerosol Studio & Murals",
    style: "Graffiti / Street Art",
    description: "Digital spray paint creation studio with Gaussian particle dispersion, paint drip gravity simulation, aerosol hiss audio, and mural map.",
    url: "https://17-graffiti.vercel.app",
    repoUrl: "https://github.com/Akay24/17-graffiti",
    tags: ["Spray Studio", "Drip Physics", "Aerosol Audio"],
    category: "Vibrant & Expressive"
  },
  {
    id: "18-aurora",
    number: "18",
    name: "Solarium FM // Space Weather Drone Synth",
    style: "Aurora Glow",
    description: "Real-time space weather sonification platform modulating a 4-voice ambient drone synthesizer and sine-harmonic canvas aurora ribbons.",
    url: "https://18-aurora.vercel.app",
    repoUrl: "https://github.com/Akay24/18-aurora",
    tags: ["Web Audio DSP", "NOAA Telemetry", "Aurora Canvas"],
    category: "Atmospheric & 3D"
  },
  {
    id: "19-handwritten",
    number: "19",
    name: "MarginNotes // Tactile Moleskine Notes",
    style: "Handwritten / Sketchbook",
    description: "Tactile notebook workspace with smooth quadratic Bézier curve ink drawing, multiplier highlighters, and leather margin tab pagination.",
    url: "https://19-handwritten.vercel.app",
    repoUrl: "https://github.com/Akay24/19-handwritten",
    tags: ["B\u00e9zier Ink Canvas", "Moleskine Paper", "Marginalia"],
    category: "Retro & Heritage"
  },
  {
    id: "20-surreal-art",
    number: "20",
    name: "The Other Side // Metaphysical Pavilion",
    style: "Surrealism",
    description: "Metaphysical exhibition featuring 3D perspective card flip Tarot oracle, subconscious dream journal, and 6Hz theta-wave binaural audio.",
    url: "https://20-surreal-art.vercel.app",
    repoUrl: "https://github.com/Akay24/20-surreal-art",
    tags: ["3D Tarot Cards", "Dream Journal", "Binaural Audio"],
    category: "Atmospheric & 3D"
  },
];
