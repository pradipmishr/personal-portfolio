import { createFileRoute } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { getProject } from "@/data/site";
import { SiteNav } from "@/components/portfolio/site-nav";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { ArchitectureDiagram } from "@/components/portfolio/architecture-diagram";
import {
  BackToProjects,
  CaseStudyHeader,
  CaseStudySection,
  HighlightGrid,
  StackList,
} from "@/components/portfolio/case-study";

const TITLE = "Assignment Management System — Spring Boot Backend | Pradip Mishra";
const DESCRIPTION =
  "Backend case study: a JWT-secured Spring Boot 3.5.4 REST API on Java 21, with a layered controller, service, repository architecture and PostgreSQL persistence.";

export const Route = createFileRoute("/projects/assignment-management")({
  component: AssignmentManagementPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/assignment-management" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/assignment-management" }],
  }),
});

const HIGHLIGHTS = [
  {
    meta: "AUTH",
    title: "Authentication & security",
    body: "Spring Security is configured for stateless authentication with JWT: credentials are exchanged for a signed token, and a filter validates that token on subsequent requests before the endpoint is reached.",
  },
  {
    meta: "API",
    title: "REST API design",
    body: "Endpoints are grouped by resource and expressed with standard HTTP semantics. Controllers exchange DTOs rather than entities, keeping the persistence model separate from the public contract.",
  },
  {
    meta: "DATA",
    title: "Data persistence",
    body: "Spring Data JPA with Hibernate maps entities onto PostgreSQL. Repository interfaces keep query logic declarative and out of the service layer.",
  },
  {
    meta: "STRUCTURE",
    title: "Project structure",
    body: "The codebase is organised into controllers, DTOs, security/JWT, models, repositories and services — each package with one clear responsibility, so a new contributor can find the right file quickly.",
  },
];

const LAYERS = [
  { label: "Client", meta: "HTTP" },
  { label: "REST API", meta: "JSON" },
  { label: "JWT Filter", meta: "Spring Security" },
  { label: "Controller", meta: "DTOs" },
  { label: "Service", meta: "business rules" },
  { label: "Repository", meta: "Spring Data JPA" },
  { label: "PostgreSQL", meta: "persistence" },
];

const SIDE = [
  { label: "Java 21", meta: "language runtime" },
  { label: "Spring Boot 3.5.4", meta: "application framework" },
  { label: "Hibernate", meta: "ORM" },
];

function AssignmentManagementPage() {
  const project = getProject("assignment-management");

  return (
    <>
      <SiteNav />
      <main>
        <CaseStudyHeader project={project}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Github className="size-4" aria-hidden />
            GitHub
          </a>
        </CaseStudyHeader>

        <div className="mx-auto w-full max-w-4xl px-5 pb-24 sm:px-8">
          <CaseStudySection title="Overview">
            <p>
              The Assignment Management System is an application for managing assignments through a
              REST API. My contribution to this project is the backend: the Spring Boot service, its
              security layer, its API surface and its data model. The React frontend in the
              repository is not my work, and this case study covers only the backend.
            </p>
            <p>
              The backend runs on Java 21 with Spring Boot 3.5.4 and exposes JSON endpoints secured
              with JWT, backed by PostgreSQL through Spring Data JPA.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Backend architecture">
            <ArchitectureDiagram
              layers={LAYERS}
              side={SIDE}
              caption="Requests pass through a JWT authentication filter before reaching controllers. Controllers translate DTOs and delegate to services, which hold the business rules; repositories handle persistence against PostgreSQL."
            />
          </CaseStudySection>

          <CaseStudySection title="Technical highlights">
            <HighlightGrid items={HIGHLIGHTS} />
          </CaseStudySection>

          <CaseStudySection title="Technology stack">
            <StackList stack={project.stack} />
          </CaseStudySection>

          <CaseStudySection title="Project links">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              <Github className="size-4" aria-hidden />
              github.com/pradipmishr/Assignment-management
            </a>
          </CaseStudySection>

          <BackToProjects />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
