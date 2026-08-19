import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/data/site";

const SOCIALS = [
  { icon: Github, href: SITE.github, label: "GitHub" },
  { icon: Linkedin, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/30 px-5 pt-10 pb-6 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Name + tagline */}
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-md border border-border bg-surface-2 font-mono text-[0.7rem] text-primary">
            PM
          </span>
          <span className="text-sm font-semibold text-foreground">{SITE.name}</span>
        </div>
        <p className="mt-2 font-mono text-xs text-subtle">{SITE.title}</p>

        {/* Social row */}
        <div className="mt-4 flex items-center gap-1.5">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              aria-label={s.label}
              className="group grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground hover:shadow-[var(--glow-primary)]"
            >
              <s.icon className="size-4 transition-transform group-hover:scale-110" aria-hidden />
            </a>
          ))}
        </div>

        {/* Nav links — horizontal, compact */}
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mt-8 h-px w-full max-w-md bg-gradient-to-r from-transparent via-border-strong to-transparent" />

        {/* Bottom row */}
        <p className="mt-4 font-mono text-[0.65rem] text-subtle">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
