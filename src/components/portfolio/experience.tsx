import { EXPERIENCE } from "@/data/site";
import { Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <Section id="experience" tone="raised">
      <SectionHeading eyebrow="03 / Experience" title="Where I'm working now." />

      <ol className="mt-12 space-y-6 list-none">
        {EXPERIENCE.map((role, i) => (
          <Reveal as="li" key={role.company} delay={i * 80}>
            <article className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{role.company}</h3>
                  <p className="mt-1 text-sm text-primary">{role.role}</p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.65rem] text-muted-foreground">
                  {role.period}
                </span>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                {role.description}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
