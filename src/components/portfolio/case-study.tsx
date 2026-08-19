import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/site";
import { Reveal } from "./reveal";

export function CaseStudyHeader({ project, children }: { project: Project; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden px-5 pt-28 pb-14 sm:px-8 md:pt-36">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto w-full max-w-4xl">
        <nav aria-label="Breadcrumb">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Projects
          </Link>
        </nav>

        <p className="mt-8 font-mono text-[0.7rem] tracking-widest text-primary">
          {project.category}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  );
}

export function CaseStudySection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="mt-16 first:mt-0">
      <div id={id}>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
        <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  );
}

export function HighlightGrid({
  items,
}: {
  items: { title: string; body: string; meta: string }[];
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="bg-surface p-6 transition-colors hover:bg-surface-2/60">
          <p className="font-mono text-[0.6rem] tracking-widest text-primary">{item.meta}</p>
          <h3 className="mt-2 text-base font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function StackList({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-border bg-surface/60 px-2.5 py-1.5 font-mono text-xs text-muted-foreground"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export function BackToProjects() {
  return (
    <Reveal className="mt-20">
      <Link
        to="/"
        hash="projects"
        className="group inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
      >
        Back to Projects
        <ArrowLeft
          className="size-4 transition-transform group-hover:-translate-x-0.5"
          aria-hidden
        />
      </Link>
    </Reveal>
  );
}
