import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/data/site";
import { Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";

export function Certifications() {
  return (
    <Section id="certifications" tone="raised">
      <SectionHeading eyebrow="05 / Certifications" title="Structured learning along the way." />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 80}>
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-full items-start gap-4 rounded-xl border border-border bg-surface/70 p-5 transition-colors hover:border-primary/40"
              >
                <Award className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="font-medium text-foreground">{cert.title}</h3>
                  <p className="mt-1 font-mono text-xs text-subtle">{cert.issuer}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                    View certificate
                    <ExternalLink className="size-3.5" aria-hidden />
                  </span>
                </div>
              </a>
            ) : (
              <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-surface/70 p-5">
                <Award className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="font-medium text-foreground">{cert.title}</h3>
                  <p className="mt-1 font-mono text-xs text-subtle">{cert.issuer}</p>
                </div>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
