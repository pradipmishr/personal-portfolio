import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { EDUCATION, SITE } from "@/data/site";
import { Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";

const FACTS = [
  { icon: Briefcase, label: "Currently", value: "Java Developer Intern at Qpixel" },
  {
    icon: GraduationCap,
    label: "Education",
    value: `${EDUCATION.degree}, ${EDUCATION.school} — ${EDUCATION.graduation}`,
  },
  { icon: MapPin, label: "Based in", value: SITE.location },
];

export function About() {
  return (
    <Section id="about" tone="raised">
      <SectionHeading eyebrow="01 / About" title="Backend engineering, taken seriously." />

      <div className="mt-12 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        <Reveal>
          {/* Replace the image inside this frame with a real photo — layout stays identical. */}
          <div className="relative aspect-4/5 w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-surface-2">
            <img
              src="/profile.jpeg"
              alt="Pradip Mishra"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a backend-focused developer working mainly with Java and Spring Boot. What draws
                me to backend work is the part of software nobody sees: how a request is validated,
                how state is protected when two operations collide, and how a system behaves when
                something goes wrong.
              </p>
              <p>
                Most of my learning happens by building. Designing a wallet transaction flow forced
                me to think about locking, idempotency and audit trails — not as textbook terms, but
                as decisions with consequences. I try to keep code readable, layers honest, and
                security handled at the right boundary rather than patched in later.
              </p>
              <p>
                I'm early in my career and still learning fast. What I bring today is curiosity, an
                appetite for hard problems, and a habit of asking why a system is built the way it
                is before changing it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-1">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex gap-3 bg-surface px-4 py-4">
                  <fact.icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <div>
                    <dt className="font-mono text-[0.65rem] tracking-widest text-subtle">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
