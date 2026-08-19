import { ArrowRight, FileText, Github, MapPin } from "lucide-react";
import { SITE } from "@/data/site";
import { BackendFlowVisual } from "./backend-flow-visual";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-28 pb-16 sm:px-8 md:pt-36 md:pb-24"
    >
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          {/* <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-[0.7rem] text-muted-foreground">
              <span className="node-pulse size-1.5 rounded-full bg-success" aria-hidden />
              {SITE.availability}
            </p>
          </Reveal> */}

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Pradip Mishra</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-3 font-mono text-sm text-primary sm:text-base">
              Java / Spring Boot Developer
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-xl leading-snug font-medium text-foreground text-balance sm:text-2xl">
              Backend systems that hold up when the requests get messy.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              I build secure, reliable backends with Java and Spring Boot — well-shaped REST APIs,
              careful data modelling, and code written to stay maintainable long after the first
              release.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface-2/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
              >
                <Github className="size-4" aria-hidden />
                GitHub
              </a>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface-2/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
              >
                <FileText className="size-4" aria-hidden />
                Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-subtle">
              <MapPin className="size-3.5" aria-hidden />
              {SITE.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <BackendFlowVisual />
        </Reveal>
      </div>
    </section>
  );
}
