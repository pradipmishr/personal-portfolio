/**
 * Centralized site configuration.
 * Replace placeholder URLs here — nowhere else in the codebase.
 */

export const SITE = {
  name: "Pradip Mishra",
  title: "Java / Spring Boot Developer",
  location: "Kathmandu, Nepal",
  email: "mishrapradip003@gmail.com",
  github: "https://github.com/pradipmishr",
  linkedin: "https://np.linkedin.com/in/pradip-mishra-810081239",
  /** TODO: drop resume PDF at public/pradip-mishra-resume.pdf */
  resumeUrl: "/pradip-mishra-resume.pdf",
  availability: "Open to Java / Spring Boot opportunities",
} as const;

/** TODO: replace once the Digital Wallet repository becomes public. */
export const DIGITAL_WALLET_GITHUB_URL = "#digital-wallet-repo-placeholder";
/** TODO: replace with the real deployment when one exists. */
export const DIGITAL_WALLET_DEMO_URL = "#digital-wallet-demo-placeholder";
export const ASSIGNMENT_MANAGEMENT_GITHUB_URL =
  "https://github.com/pradipmishr/Assignment-management";

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export type SkillGroup = { category: string; note: string; items: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Backend",
    note: "Core stack",
    items: ["Java", "Spring Boot", "Spring Security", "Hibernate / JPA", "REST APIs"],
  },
  {
    category: "Database & Data",
    note: "Persistence & caching",
    items: ["PostgreSQL", "Supabase", "Redis"],
  },
  {
    category: "Development & Testing",
    note: "Daily tooling",
    items: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "IntelliJ IDEA",
      "JUnit",
      "Mockito",
      "Swagger / OpenAPI",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    note: "Build & ship",
    items: ["Docker", "GitHub Actions / CI/CD"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Qpixel",
    role: "Java Developer Intern",
    period: "Present",
    description: "Contributing to backend development using Java and Spring Boot.",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Information Management",
  school: "Shanker Dev Campus",
  graduation: "2026",
} as const;

export type Certification = {
  title: string;
  issuer: string;
  /** TODO: add credential URLs when available. */
  credentialUrl?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    credentialUrl: "/certificates/career-essentials-generative-ai.html",
  },
  {
    title: "Java Spring Framework 6 with Spring Boot 3",
    issuer: "TELUSKO",
    credentialUrl: "/certificates/java-spring-framework-telusko.html",
  },
];

export type Project = {
  slug: "digital-wallet" | "assignment-management";
  route: "/projects/digital-wallet" | "/projects/assignment-management";
  title: string;
  category: string;
  tagline: string;
  summary: string;
  stack: string[];
  githubUrl: string;
  githubAvailable: boolean;
  demoUrl?: string;
  demoAvailable: boolean;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "digital-wallet",
    route: "/projects/digital-wallet",
    title: "Digital Wallet Backend",
    category: "Backend Engineering Project",
    tagline: "Secure transaction workflows, built for correctness under concurrency.",
    summary:
      "A backend system for wallet and money-transfer workflows: registration with OTP verification, deposits, transfers and scheduled transfers, protected by pessimistic locking, idempotent request handling, role-based access control, audit logging and WebSocket notifications.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate / JPA",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "Redis",
      "Docker",
      "Git",
      "Maven",
      "JUnit / Mockito",
      "Swagger / OpenAPI",
    ],
    githubUrl: DIGITAL_WALLET_GITHUB_URL,
    githubAvailable: false,
    demoUrl: DIGITAL_WALLET_DEMO_URL,
    demoAvailable: false,
    featured: true,
  },
  {
    slug: "assignment-management",
    route: "/projects/assignment-management",
    title: "Assignment Management System",
    category: "Backend Engineering Project",
    tagline: "JWT-secured REST backend with a layered Spring Boot architecture.",
    summary:
      "The backend for an assignment management application, built with Spring Boot 3.5.4 on Java 21. Stateless JWT authentication through Spring Security, REST endpoints organised across controllers, DTOs, services and repositories, with data persisted in PostgreSQL via Spring Data JPA.",
    stack: [
      "Java 21",
      "Spring Boot 3.5.4",
      "Spring Security",
      "JWT",
      "Spring Data JPA / Hibernate",
      "PostgreSQL",
      "REST APIs",
    ],
    githubUrl: ASSIGNMENT_MANAGEMENT_GITHUB_URL,
    githubAvailable: true,
    demoAvailable: false,
    featured: true,
  },
];

export const getProject = (slug: Project["slug"]) =>
  PROJECTS.find((p) => p.slug === slug) as Project;
