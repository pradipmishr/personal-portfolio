import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[var(--glow-primary)] sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative flex flex-1 flex-col">
        <p className="font-mono text-[0.65rem] tracking-widest text-primary">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 8).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[0.65rem] text-subtle"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
          <Link
            to={project.route}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View Details
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>

          {project.githubAvailable ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              <Github className="size-4" aria-hidden />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2.5 text-sm text-subtle">
              <Lock className="size-4" aria-hidden />
              Repository private
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
