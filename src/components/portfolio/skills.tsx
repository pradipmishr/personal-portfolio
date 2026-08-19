import { SKILL_GROUPS } from "@/data/site";
import { Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="02 / Skills"
        title="The stack I work in every day."
        description="Grouped by where each tool sits in the workflow, rather than a wall of badges."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.category} delay={i * 70}>
            <div className="h-full rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-primary/40 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
                <span className="font-mono text-[0.65rem] text-subtle">{group.note}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background/40 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
