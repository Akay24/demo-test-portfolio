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
  bio: "Software Developer with 2+ years of experience architecting scalable automation solutions, distributed backend microservices, and applied AI workflows. Expert in Python (FastAPI), Node.js/Express, LangGraph state machines, and Playwright automation, with specialized proficiency in Robot Framework and Veeva Vault. Adept at building sandboxed execution engines, SSRF perimeter firewalls, and production CI/CD pipelines.",
  resumeUrl: "https://www.linkedin.com/in/mishraabhijeet2410",
  stats: [
    { label: "Flagships Shipped", value: "4" },
    { label: "Automated Tests", value: "66" },
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
    category: "Backend & Systems",
    icon: Server,
    items: [
      "Python 3.11+",
      "FastAPI & Pydantic",
      "Node.js & Express",
      "LangGraph State Machines",
      "Celery & Redis Queues",
      "REST & Event Systems",
    ],
  },
  {
    category: "Frontend & UI",
    icon: Code2,
    items: [
      "React 18 & 19",
      "TypeScript",
      "Next.js App Router",
      "Tailwind CSS",
      "Vite & Modern Tooling",
      "Web Audio DSP",
    ],
  },
  {
    category: "Databases & Caching",
    icon: Database,
    items: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "SQLite (Dual-Mode)",
      "Query Optimization",
      "Data Modeling",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "Docker & Sandboxing",
      "AWS Cloud-Native",
      "CI/CD & GitHub Actions",
      "Jenkins Automation",
      "SSRF Perimeter Firewalls",
      "Nginx & Containers",
    ],
  },
  {
    category: "Testing & Quality Assurance",
    icon: TestTube,
    items: [
      "Playwright Headless Browser",
      "Robot Framework",
      "Pytest & TestClient",
      "Heuristic Failure Triage",
      "Veeva Vault Enterprise",
      "Regression Automation",
    ],
  },
  {
    category: "Data Science & Tooling",
    icon: Wrench,
    items: [
      "Scikit-Learn",
      "NumPy & Pandas",
      "Jupyter Notebooks",
      "AST Syntax Indexing",
      "NLP Fundamentals",
      "Predictive Modeling",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────────
export interface ProjectPreviewLine {
  text: string;
  tone?: "default" | "success" | "warn" | "error" | "info" | "accent";
}

export interface ProjectPreviewSnippet {
  title: string;
  type: "terminal" | "diff" | "waterfall" | "cache" | "waveform" | "metrics";
  lines: ProjectPreviewLine[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  category: "Backend & Applied AI" | "Interactive & Creative" | "Enterprise Systems";
  badge: string;
  metrics: ProjectMetric[];
  architectureFlow: string[];
  previewSnippet: ProjectPreviewSnippet;
  tech: string[];
  github: string;
  live: string;
  highlights: string[];
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Agentic QA Automation Platform",
    description:
      "Autonomous browser test orchestrator with dual-mode async execution, Playwright runner, and RFC 1918 SSRF guard.",
    longDescription:
      "Architected an enterprise-grade agentic QA testing platform featuring dual-mode execution (Celery/Redis worker queues + inline async fallbacks), Playwright browser driver, heuristic failure triage (DOM_TIMEOUT, NETWORK_ERROR, ASSERTION_FAILURE, SECURITY_VIOLATION), and SSRF socket perimeter protection blocking private subnets and cloud metadata endpoints. Includes a high-density React 18 / Tailwind maintainer console.",
    category: "Backend & Applied AI",
    badge: "Dual Worker & SSRF Shield",
    metrics: [
      { label: "Test Suite", value: "25/25 Passing" },
      { label: "Egress Policy", value: "RFC 1918 Blocked" },
      { label: "Queue Dispatch", value: "Celery / Inline Dual" },
    ],
    architectureFlow: [
      "Test Client / Webhook",
      "FastAPI Gateway",
      "RFC 1918 SSRF Guard",
      "Celery / Redis Worker",
      "Playwright Sandbox",
      "Triage Classifier",
    ],
    previewSnippet: {
      title: "SSRF Perimeter & Async Worker Stream",
      type: "terminal",
      lines: [
        { text: "[SECURITY] Probing target: https://staging.internal.corp", tone: "info" },
        { text: "[SOCKET-GUARD] Blocked RFC 1918 IP: 10.0.4.12:8000 -> HTTP 403 Forbidden", tone: "warn" },
        { text: "[CELERY-POOL] Worker 0x7fa2 dispatched test_checkout_flow.py", tone: "default" },
        { text: "[PLAYWRIGHT] Headless chromium executed 14 assertions in 840ms", tone: "default" },
        { text: "[RESULT] Status: PASSED (25/25 checks) | Duration: 1.84s", tone: "success" },
      ],
    },
    tech: ["FastAPI", "Playwright", "Celery", "Redis", "PostgreSQL", "React 18"],
    github: "https://github.com/Akay24/agentic-qa-platform",
    live: "https://agentic-qa-platform-rust.vercel.app",
    highlights: [
      "Dual-mode async orchestration (Celery/Redis queue or inline asyncio worker)",
      "Strict socket-level SSRF perimeter firewall protecting RFC 1918 and cloud metadata",
      "Automated heuristic triage classifier for flaky test failures",
      "Comprehensive test suite passing 25/25 integration and unit tests",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    icon: "🤖",
  },
  {
    title: "CodeSentinel // Autonomous Issue Resolver",
    description:
      "LangGraph agentic state machine for automated bug triage, AST index search, and ephemeral sandbox validation.",
    longDescription:
      "Designed and built CodeSentinel, an autonomous code repair orchestrator powered by LangGraph state machines, AST code search with credential shielding, git unified-diff generation, and ephemeral Docker sandbox runners with network-isolated process containment (--network none). Implemented a mandatory Human-in-the-Loop review gate ensuring safety against unverified auto-merges.",
    category: "Backend & Applied AI",
    badge: "LangGraph State Machine",
    metrics: [
      { label: "State Graph", value: "Cyclic Self-Healing" },
      { label: "Sandbox Security", value: "--network none" },
      { label: "Test Coverage", value: "15/15 Tests Passing" },
    ],
    architectureFlow: [
      "GitHub Webhook",
      "LangGraph State Engine",
      "AST Index & Shield",
      "Isolated Docker (--network none)",
      "HITL Review Gate",
    ],
    previewSnippet: {
      title: "Agentic State Machine & Unified Diff",
      type: "diff",
      lines: [
        { text: "[GRAPH] State: triage -> ast_search -> plan -> sandbox_exec", tone: "info" },
        { text: "[SANDBOX] Container c7b2 spawned with flags: --network none", tone: "warn" },
        { text: "- if user_id is None: return False", tone: "error" },
        { text: "+ if not user_id or not token: raise AuthError(401)", tone: "success" },
        { text: "[HITL] Review gate approved by maintainer -> Branch clean", tone: "success" },
      ],
    },
    tech: ["LangGraph", "Python 3.11", "Docker Sandbox", "AST Indexer", "React 18", "Vite"],
    github: "https://github.com/Akay24/codesentinel",
    live: "https://codesentinel-sandy.vercel.app",
    highlights: [
      "LangGraph state machine with cyclic self-healing reflection loops",
      "AST symbol & cross-reference indexer with automated secret shielding",
      "Ephemeral network-isolated Docker sandbox test verification",
      "Human-in-the-Loop approval gate with interactive unified diff inspector",
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    icon: "🛡️",
  },
  {
    title: "ReportKit // Enterprise Document Service",
    description:
      "Asynchronous document generation microservice with Jinja2 template versioning, idempotency keys, and HMAC signed downloads.",
    longDescription:
      "Engineered a high-throughput enterprise document generation microservice wrapping the open-source reportkit-py library. Implemented strict X-Idempotency-Key request deduplication returning cached jobs with X-Cache: HIT-IDEMPOTENT headers, versioned Jinja2 HTML/PDF templates, and time-expiring HMAC-SHA256 download links. Features an interactive Template Studio with live preview.",
    category: "Backend & Applied AI",
    badge: "X-Idempotency-Key & HMAC",
    metrics: [
      { label: "Idempotency", value: "X-Cache: HIT-IDEMPOTENT" },
      { label: "Signature Security", value: "HMAC-SHA256 Token" },
      { label: "Render Engine", value: "reportkit-py / Jinja2" },
    ],
    architectureFlow: [
      "API Client",
      "FastAPI Middleware",
      "Idempotency Memory Store",
      "Jinja2 Renderer",
      "HMAC-SHA256 Signer",
    ],
    previewSnippet: {
      title: "Idempotent Pipeline & Token Signature",
      type: "cache",
      lines: [
        { text: "[CACHE] Key: \"inv-2026-0492\" -> HIT-IDEMPOTENT (Zero redundant compute)", tone: "accent" },
        { text: "[JINJA] Rendered template invoice_v2.html in 14.2ms", tone: "default" },
        { text: "[SECURITY] Generated HMAC-SHA256 token (expires in 900s)", tone: "info" },
        { text: "[STATUS] 200 OK | Content-Type: application/pdf | Size: 184 KB", tone: "success" },
      ],
    },
    tech: ["FastAPI", "Jinja2", "HMAC-SHA256", "reportkit-py", "React 18", "Vite"],
    github: "https://github.com/Akay24/reportkit-service",
    live: "https://reportkit-service.vercel.app",
    highlights: [
      "Strict idempotency key deduplication with memory-efficient payload caching",
      "Cryptographically signed expiration download URLs with HMAC-SHA256",
      "Modular Jinja2 template engine with real-time parameter validation",
      "Interactive Template Studio console with instant iframe document preview",
    ],
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    icon: "📑",
  },
  {
    title: "Synthetic API Monitor & Incident Engine",
    description:
      "High-frequency distributed API prober with SSRF perimeter guard, microsecond socket timing breakdown, and incident state machine.",
    longDescription:
      "Built a distributed synthetic availability prober and SLA incident engine using FastAPI, asyncio, and HTTPX. Features microsecond socket timing breakdowns (DNS lookup, TCP handshake, TLS negotiation, TTFB, and transfer), rolling p50/p95/p99 latency calculations, an SSRF perimeter firewall protecting private subnets, and an automated incident state machine with flap suppression and streak escalation.",
    category: "Backend & Applied AI",
    badge: "Microsecond Socket Timing",
    metrics: [
      { label: "P99 SLA", value: "59.1ms rolling" },
      { label: "Incident Flap", value: "Streak Escalation" },
      { label: "Perimeter", value: "Zero Metadata Egress" },
    ],
    architectureFlow: [
      "Monitor Target",
      "SSRF Perimeter Guard",
      "HTTPX Socket Prober",
      "Rolling Percentile Engine",
      "Incident Flap Suppressor",
    ],
    previewSnippet: {
      title: "Socket Waterfall & SLA Health",
      type: "waterfall",
      lines: [
        { text: "DNS Lookup       ■■■ 1.4ms", tone: "info" },
        { text: "TCP Handshake    ■■■■■ 3.8ms", tone: "info" },
        { text: "TLS Handshake    ■■■■■■■■■ 11.2ms", tone: "accent" },
        { text: "TTFB (Server)    ■■■■■■■■■■■■■■■■ 38.6ms", tone: "default" },
        { text: "Data Transfer    ■■■■ 4.1ms", tone: "default" },
        { text: "[SLA] p99: 59.1ms | Availability: 99.98% | Flap Suppression: Active", tone: "success" },
      ],
    },
    tech: ["FastAPI", "asyncio", "HTTPX", "SSRF Firewall", "React 18", "Tailwind"],
    github: "https://github.com/Akay24/synthetic-api-monitor",
    live: "https://synthetic-api-monitor.vercel.app",
    highlights: [
      "Microsecond socket timing waterfall (DNS, TCP, TLS, TTFB, Content Transfer)",
      "SSRF perimeter firewall blocking RFC 1918 subnets and cloud metadata",
      "Incident state machine with configurable failure streak thresholds",
      "Rolling percentile engine computing real-time p50/p95/p99 and uptime SLAs",
    ],
    gradient: "from-sky-500/20 via-cyan-500/10 to-blue-500/20",
    icon: "📊",
  },
  {
    title: "GridLock CTF // Terminal Engine",
    description:
      "Interactive security terminal challenge with command parser, virtual Unix filesystem, and crypto decoders.",
    longDescription:
      "Designed and implemented GridLock CTF, an interactive security challenge environment featuring an in-browser command interpreter (nmap, cat, decrypt, clear), virtual directory hierarchy, multi-stage Caesar and XOR cipher cracking, and synthesized CRT phosphor audio feedback via the Web Audio API.",
    category: "Interactive & Creative",
    badge: "Virtual Unix & CRT DSP",
    metrics: [
      { label: "Audio Engine", value: "Web Audio DSP" },
      { label: "Typing System", value: "100% Strict TypeScript" },
      { label: "Terminal UI", value: "Retro CRT Phosphor" },
    ],
    architectureFlow: [
      "User Input Stream",
      "AST Command Lexer",
      "Virtual In-Memory VFS",
      "Caesar & XOR Cracker",
      "CRT Phosphor Web Audio",
    ],
    previewSnippet: {
      title: "Interactive Unix Terminal Shell",
      type: "terminal",
      lines: [
        { text: "guest@gridlock:~$ nmap -sV 192.168.1.104", tone: "default" },
        { text: "PORT   STATE SERVICE VERSION", tone: "info" },
        { text: "22/tcp open  ssh     OpenSSH 8.9p1", tone: "info" },
        { text: "guest@gridlock:~$ decrypt --cipher xor --key 0x7f payload.bin", tone: "default" },
        { text: "[DECRYPTED] FLAG{k3rn3l_p4n1c_0v3rfl0w_2026}", tone: "success" },
      ],
    },
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
    category: "Interactive & Creative",
    badge: "NOAA Telemetry Sonification",
    metrics: [
      { label: "Synthesis", value: "4-Voice Pure DSP" },
      { label: "Canvas Frame", value: "60 FPS RAF" },
      { label: "Audio Assets", value: "Zero Samples (Pure Math)" },
    ],
    architectureFlow: [
      "NOAA Telemetry Feed",
      "DSP Parameter Mapper",
      "4-Voice Web Audio Graph",
      "Biquad Filter Modulation",
      "60 FPS Canvas Ribbon",
    ],
    previewSnippet: {
      title: "Web Audio DSP & Aurora Waveform",
      type: "waveform",
      lines: [
        { text: "[TELEMETRY] Solar Wind: 442 km/s | Geomagnetic Kp: 3.2", tone: "info" },
        { text: "[VOICE 1] Sub-harmonic drone: 55.00 Hz (Sine) -> Lowpass 220 Hz", tone: "default" },
        { text: "[VOICE 2] Pad: 110.00 Hz (Sawtooth) -> Resonance Q=4.8", tone: "accent" },
        { text: "[VOICE 3] Pink noise wind generator -> Gain ramp 0.12", tone: "default" },
        { text: "[CANVAS] 60 FPS aurora ribbon rendered via sine-wave harmonics", tone: "success" },
      ],
    },
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
    category: "Interactive & Creative",
    badge: "Canvas Game Loop & AABB",
    metrics: [
      { label: "Frame Rate", value: "60 FPS requestAnimationFrame" },
      { label: "Physics", value: "AABB Bounding Box" },
      { label: "Dependencies", value: "Zero External Engines" },
    ],
    architectureFlow: [
      "60 FPS RAF Loop",
      "Delta Time Accumulator",
      "AABB Collision Physics",
      "Tile Map Atlas Slicer",
      "16x16 Sprite Forge",
    ],
    previewSnippet: {
      title: "Canvas 2D Engine & Physics Loop",
      type: "terminal",
      lines: [
        { text: "[ENGINE] Initializing 60 FPS requestAnimationFrame loop...", tone: "info" },
        { text: "[PHYSICS] Delta time: 16.6ms | AABB collision checks: 142/frame", tone: "default" },
        { text: "[SPRITE] Tile map atlas loaded: 256x256 spritesheet", tone: "default" },
        { text: "[SYNTH] Chiptune audio: 8-bit square wave channel initialized", tone: "accent" },
        { text: "[STATUS] Player at (128, 96) | Zero frame drops detected", tone: "success" },
      ],
    },
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
    title: "Enterprise Microservices Platform",
    description:
      "Scalable enterprise backend microservices architecture using Python, Node.js, and optimized MongoDB queries.",
    longDescription:
      "Architected and deployed scalable backend microservices at Spotline, Inc. using Python and Node.js (Express). Focused on indexing and query optimization in MongoDB to reduce API latency by 23% under peak concurrency. Integrated into AWS cloud infrastructure with Docker and automated Jenkins CI/CD deployment pipelines.",
    category: "Enterprise Systems",
    badge: "High-Concurrency Architecture",
    metrics: [
      { label: "Latency", value: "-23% P95 Query Latency" },
      { label: "Cloud Infra", value: "AWS + Docker" },
      { label: "Deployment", value: "Automated Jenkins CI/CD" },
    ],
    architectureFlow: [
      "Client / Mobile Gateway",
      "Node.js & Python Services",
      "MongoDB Compound Indexing",
      "Docker Containers",
      "AWS ECS & Jenkins CI/CD",
    ],
    previewSnippet: {
      title: "Query Profiler & Benchmark Execution",
      type: "metrics",
      lines: [
        { text: "[BENCHMARK] MongoDB Compound Indexing: executionStats", tone: "info" },
        { text: "[METRIC] totalDocsExamined: reduced from 14,820 to 18", tone: "accent" },
        { text: "[METRIC] Execution Time: reduced from 340ms to 24ms (-92.9%)", tone: "success" },
        { text: "[CONTAINER] Docker service healthy on AWS cluster", tone: "default" },
        { text: "[CI/CD] Jenkins build #418 passed all regression checks", tone: "success" },
      ],
    },
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
