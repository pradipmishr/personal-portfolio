import { PROJECTS } from "@/data/site";
import { Section, SectionHeading } from "./section";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="04 / Projects"
        title="Backend systems I've designed and built."
        description="Both projects are backend-only. No frontends were built for them, so what follows is the engineering, not screenshots."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
