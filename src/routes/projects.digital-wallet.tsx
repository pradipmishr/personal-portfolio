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

const TITLE = "Digital Wallet Backend — Java & Spring Boot Case Study | Pradip Mishra";
const DESCRIPTION =
  "A Spring Boot wallet backend with OTP verification, pessimistic locking, idempotent transfers, WebSocket notifications, audit logs and role-based access control.";

export const Route = createFileRoute("/projects/digital-wallet")({
  component: DigitalWalletPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects/digital-wallet" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/digital-wallet" }],
  }),
});

const FEATURES = [
  "User registration with OTP verification",
  "Deposits",
  "Money transfers between wallets",
  "Scheduled transfers",
  "Pessimistic locking for concurrent transactions",
  "Idempotent transaction requests",
  "WebSocket-based real-time notifications",
  "Audit logs",
  "Role-based access control for users and administrators",
  "KYC verification with OCR-based national ID scanning",
];

const HIGHLIGHTS = [
  {
    meta: "CONCURRENCY",
    title: "Concurrency control",
    body: "Balance changes are the one place where a lost update is unacceptable. Wallet rows are read with a pessimistic write lock inside the transaction that mutates them, so two concurrent transfers touching the same wallet serialise at the database instead of racing on stale balances.",
  },
  {
    meta: "IDEMPOTENCY",
    title: "Idempotency",
    body: "Clients retry — after a timeout, a dropped connection, or a double tap. Transaction endpoints accept an idempotency key so a repeated request resolves to the original transaction result rather than creating a second transfer.",
  },
  {
    meta: "SECURITY",
    title: "Security",
    body: "Registration is verified through OTP before an account becomes usable. Spring Security handles authentication and guards endpoints.",
  },
  {
    meta: "ACCESS CONTROL",
    title: "Role-based access control",
    body: "Two roles — user and admin — govern what each account can do. Users can create wallets, transfer funds, and report suspicious transactions. Admins oversee the platform and can reverse transactions that have been reported, ensuring disputes are resolved without direct database access.",
  },
  {
    meta: "REAL-TIME",
    title: "Real-time communication",
    body: "Once a transaction commits, the affected user is notified over a WebSocket connection instead of relying on the client to poll — useful for transfers that arrive while a session is open.",
  },
  {
    meta: "AUDITABILITY",
    title: "Auditability",
    body: "Transaction-relevant actions are written to audit logs, so the sequence of events behind a balance can be reconstructed after the fact rather than inferred from the current state.",
  },
  {
    meta: "SCHEDULING",
    title: "Scheduled transfers",
    body: "Transfers can be scheduled for later execution and are picked up by a scheduled job, which reuses the same locking and idempotency guarantees as an immediate transfer.",
  },
  {
    meta: "KYC",
    title: "KYC verification with OCR",
    body: "Users can submit a national ID for identity verification. The backend uses OCR to extract key details — name, date of birth, document number — from the uploaded image, auto-populates the user's profile fields, and records the verification status so KYC-gated operations can be enforced downstream.",
  },
];

const LAYERS = [
  { label: "Client", meta: "HTTP" },
  { label: "REST API", meta: "JSON" },
  { label: "Spring Security", meta: "authn / RBAC" },
  { label: "Controller", meta: "DTO mapping" },
  { label: "Service Layer", meta: "transactions" },
  { label: "Repository", meta: "Spring Data JPA" },
  { label: "PostgreSQL", meta: "source of truth" },
];

const SIDE = [
  { label: "Redis", meta: "supporting cache" },
  { label: "WebSockets", meta: "notifications" },
  { label: "Scheduler", meta: "scheduled transfers" },
  { label: "OCR Service", meta: "KYC / ID scanning" },
];

function DigitalWalletPage() {
  const project = getProject("digital-wallet");

  return (
    <>
      <SiteNav />
      <main>
        <CaseStudyHeader project={project}>
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2.5 text-sm text-subtle"
          >
            <Github className="size-4" aria-hidden />
            View on GitHub
          </a>
        </CaseStudyHeader>

        <div className="mx-auto w-full max-w-4xl px-5 pb-24 sm:px-8">
          <CaseStudySection title="Overview">
            <p>
              The Digital Wallet Backend is a Java and Spring Boot service for wallet-based money
              movement. Users register and verify their account with an OTP, get a wallet, deposit
              funds, and transfer money to other users either immediately or on a schedule. Identity
              verification is handled through KYC — users submit a national ID, the backend runs OCR
              to extract their details, and verified users unlock the full feature set.
            </p>
            <p>
              The interesting part is not the CRUD around it — it's what has to be true for a
              balance to be trustworthy: transactions that don't interleave badly, retries that
              don't duplicate money, actions that can be audited, and permissions that hold at the
              endpoint boundary. This is a learning-driven project built to work through those
              concerns properly rather than a deployed financial product.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Key features">
            <ul className="grid gap-2 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-foreground"
                >
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Engineering highlights">
            <HighlightGrid items={HIGHLIGHTS} />
          </CaseStudySection>

          <CaseStudySection title="Architecture">
            <ArchitectureDiagram
              layers={LAYERS}
              side={SIDE}
              caption="A request travels from the client through the REST API, is authenticated and authorised by Spring Security, mapped in a controller, executed inside a transactional service, and persisted through repositories into PostgreSQL. Redis, the WebSocket channel and the scheduler sit alongside that path as supporting infrastructure."
            />
          </CaseStudySection>

          <CaseStudySection title="Engineering decisions">
            <p>
              <strong className="text-foreground">Pessimistic over optimistic locking.</strong>{" "}
              Wallet contention is expected rather than rare, so retrying failed optimistic writes
              would add complexity for no benefit. Locking the row for the duration of the
              transaction keeps the critical section short and the outcome predictable.
            </p>
            <p>
              <strong className="text-foreground">Idempotency at the API boundary.</strong>{" "}
              Deduplicating at the entry point means retry safety doesn't have to be re-implemented
              inside every downstream operation.
            </p>
            <p>
              <strong className="text-foreground">Layered structure.</strong> Controllers stay thin
              and speak DTOs, services own transactional business rules, repositories own
              persistence. Testing with JUnit and Mockito is straightforward as a result.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Technology stack">
            <StackList stack={project.stack} />
          </CaseStudySection>

          <CaseStudySection title="Project links">
            <div className="flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2.5 text-sm text-subtle"
              >
                <Github className="size-4" aria-hidden />
                GitHub Repository
              </a>
            </div>
          </CaseStudySection>

          <BackToProjects />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
