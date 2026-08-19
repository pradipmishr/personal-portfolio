import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          to="/"
          hash="home"
          className="group flex items-center gap-2 rounded-md text-sm font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md border border-border bg-surface-2 font-mono text-[0.7rem] text-primary">
            PM
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="hidden size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground sm:grid"
          >
            <Github className="size-4" aria-hidden />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="hidden size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground sm:grid"
          >
            <Linkedin className="size-4" aria-hidden />
          </a>
          <a
            href={SITE.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-md border border-border-strong bg-surface-2/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary md:inline-flex"
          >
            <Download className="size-4" aria-hidden />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background/95 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-2 border-t border-border pt-4">
              <a
                href={SITE.resumeUrl}
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
              >
                <Download className="size-4" aria-hidden />
                Resume
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="grid size-11 place-items-center rounded-md border border-border text-foreground"
              >
                <Github className="size-4" aria-hidden />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="grid size-11 place-items-center rounded-md border border-border text-foreground"
              >
                <Linkedin className="size-4" aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
