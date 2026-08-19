import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Loader2, Check, AlertCircle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { SITE } from "@/data/site";
import { sendContactMessage } from "@/lib/contact.functions";
import { Section, SectionHeading } from "./section";
import { Reveal } from "./reveal";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const CHANNELS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "pradip-mishra", href: SITE.linkedin },
  { icon: Github, label: "GitHub", value: "pradipmishr", href: SITE.github },
  { icon: MapPin, label: "Location", value: SITE.location },
];

export function Contact() {
  const send = useServerFn(sendContactMessage);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      company: String(formData.get("company") ?? ""),
    };

    const nextErrors: Errors = {};
    if (values.name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      nextErrors.email = "Please enter a valid email address.";
    if (values.message.length < 20)
      nextErrors.message = "Please write at least 20 characters so I can reply usefully.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setServerError("");
    try {
      await send({ data: values });
      setStatus("success");
      form.reset();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-lg border border-input bg-surface/70 px-4 py-3 text-sm text-foreground placeholder:text-subtle transition-colors focus:border-primary focus:outline-none";

  return (
    <Section id="contact" tone="raised">
      <SectionHeading
        eyebrow="06 / Contact"
        title="Let's build something worth maintaining."
        description="I'm open to Java / Spring Boot roles, interesting backend engineering work, and collaborations. The fastest way to reach me is the form or a direct email."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {CHANNELS.map((channel) => (
              <li key={channel.label} className="bg-surface">
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-surface-2/60"
                  >
                    <channel.icon className="size-4 shrink-0 text-primary" aria-hidden />
                    <span className="min-w-0">
                      <span className="block font-mono text-[0.65rem] tracking-widest text-subtle">
                        {channel.label}
                      </span>
                      <span className="block truncate text-sm text-foreground">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 px-5 py-4">
                    <channel.icon className="size-4 shrink-0 text-primary" aria-hidden />
                    <span>
                      <span className="block font-mono text-[0.65rem] tracking-widest text-subtle">
                        {channel.label}
                      </span>
                      <span className="block text-sm text-foreground">{channel.value}</span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={90}>
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass}
                  placeholder="Your name"
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass}
                  placeholder="you@company.com"
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${fieldClass} resize-y`}
                placeholder="Tell me about the role, the team, or the problem you're solving."
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {/* Honeypot — hidden from users, catches simple bots. */}
            <div className="hidden" aria-hidden>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
              >
                {status === "loading" ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                ) : null}
                {status === "loading" ? "Sending…" : "Send message"}
              </button>

              <p aria-live="polite" className="text-sm">
                {status === "success" ? (
                  <span className="inline-flex items-center gap-2 text-success">
                    <Check className="size-4" aria-hidden />
                    Thanks — your message is on its way.
                  </span>
                ) : null}
                {status === "error" ? (
                  <span className="inline-flex items-center gap-2 text-destructive">
                    <AlertCircle className="size-4" aria-hidden />
                    {serverError}
                  </span>
                ) : null}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
