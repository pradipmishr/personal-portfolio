import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Wrench,
  Server,
  Container,
} from "lucide-react";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, SITE, SKILL_GROUPS } from "@/data/site";
import { SiteNav } from "@/components/portfolio/site-nav";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { Reveal } from "@/components/portfolio/reveal";

const TITLE = "Resume — Pradip Mishra";
const DESCRIPTION = "Professional resume of Pradip Mishra, Java and Spring Boot developer.";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/resume" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
});

const SECTION_ICONS = [Server, Code, Wrench, GraduationCap, Award] as const;

function ResumePage() {
  return (
    <>
      <SiteNav />
      <main className="px-5 pt-28 pb-24 sm:px-8 md:pt-36">
        <div className="mx-auto w-full max-w-4xl">
          {/* Back link — mobile only */}
          <Reveal>
            <Link
              to="/"
              hash="home"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary md:hidden"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              Home
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal delay={60}>
            <div className="mt-10 flex items-start gap-5">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 font-mono text-sm text-primary">
                PM
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {SITE.name}
                </h1>
                <p className="mt-1 font-mono text-sm text-primary">{SITE.title}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-subtle">
                  <span>{SITE.location}</span>
                  <span>{SITE.email}</span>
                  <span>{SITE.github.replace("https://", "")}</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Flow line */}
          <Reveal delay={120}>
            <div className="my-8 flex justify-center">
              <svg aria-hidden viewBox="0 0 2 40" className="h-10 w-1">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="40"
                  className="flow-line stroke-primary"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal delay={140}>
            <SectionBlock icon={Briefcase} label="Experience" eyebrow="WORK">
              {EXPERIENCE.map((role) => (
                <div key={role.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold text-foreground">{role.company}</h3>
                    <span className="font-mono text-xs text-subtle">{role.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{role.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              ))}
            </SectionBlock>
          </Reveal>

          <FlowConnector />

          {/* Skills */}
          <Reveal delay={160}>
            <SectionBlock icon={Code} label="Technical Skills" eyebrow="STACK">
              <div className="grid gap-4 sm:grid-cols-2">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.category}>
                    <p className="font-mono text-[0.65rem] tracking-widest text-subtle">
                      {group.category}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </Reveal>

          <FlowConnector />

          {/* Education */}
          <Reveal delay={180}>
            <SectionBlock icon={GraduationCap} label="Education" eyebrow="ACADEMIC">
              <div>
                <h3 className="font-semibold text-foreground">{EDUCATION.degree}</h3>
                <p className="mt-1 text-sm text-primary">{EDUCATION.school}</p>
                <p className="mt-1 font-mono text-xs text-subtle">
                  Expected graduation: {EDUCATION.graduation}
                </p>
              </div>
            </SectionBlock>
          </Reveal>

          <FlowConnector />

          {/* Certifications */}
          <Reveal delay={200}>
            <SectionBlock icon={Award} label="Certifications" eyebrow="CREDENTIALS">
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title}>
                    <h3 className="font-semibold text-foreground">{cert.title}</h3>
                    <p className="mt-1 font-mono text-xs text-subtle">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </Reveal>

          <FlowConnector />

          {/* Key projects */}
          <Reveal delay={220}>
            <SectionBlock icon={Server} label="Key Projects" eyebrow="BUILD">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Digital Wallet Backend</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Spring Boot service for wallet-based money movement with OTP verification,
                    pessimistic locking, idempotent transfers, audit logging, WebSocket
                    notifications and role-based access control.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Assignment Management System</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    JWT-secured REST backend with a layered Spring Boot architecture on Java 21,
                    with Spring Data JPA persistence against PostgreSQL.
                  </p>
                </div>
              </div>
            </SectionBlock>
          </Reveal>

          {/* Back to Home */}
          <Reveal className="mt-20">
            <Link
              to="/"
              hash="home"
              className="group inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Back to Home
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function SectionBlock({
  icon: Icon,
  label,
  eyebrow,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="grid size-9 place-items-center rounded-lg border border-border bg-surface-2">
          <Icon className="size-4 text-primary" aria-hidden />
        </div>
        <div>
          <p className="font-mono text-[0.6rem] tracking-widest text-subtle">{eyebrow}</p>
          <h2 className="text-lg font-semibold text-foreground">{label}</h2>
        </div>
      </div>
      <div className="mt-5 border-t border-border pt-5">{children}</div>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="flex justify-center py-1">
      <svg aria-hidden viewBox="0 0 2 24" className="h-6 w-1">
        <line x1="1" y1="0" x2="1" y2="24" className="flow-line stroke-primary" strokeWidth="2" />
      </svg>
    </div>
  );
}
