import { Github, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import { Section } from "./section";
import { Reveal } from "./reveal";

export function GithubCta() {
  return (
    <Section>
      <Reveal>
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-surface/50 px-6 py-8 transition-colors hover:border-primary/45 sm:px-10"
        >
          <div className="flex items-center gap-4">
            <Github className="size-6 text-primary" aria-hidden />
            <div>
              <h2 className="text-lg font-semibold text-foreground">More on GitHub</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Experiments, practice repositories and work in progress.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-sm text-primary">
            github.com/pradipmishr
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
