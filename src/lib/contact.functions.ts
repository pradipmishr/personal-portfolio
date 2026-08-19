import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  message: z.string().trim().min(20, "Please write at least 20 characters").max(4000),
  /** Honeypot: must stay empty. Basic bot protection. */
  company: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) {
      // Silently accept honeypot submissions.
      return { ok: true as const };
    }

    const apiKey = process.env["RESEND_API_KEY"];
    // TODO: set RESEND_API_KEY and CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL to enable delivery.
    const to = process.env["CONTACT_TO_EMAIL"] ?? "mishrapradip003@gmail.com";
    const from = process.env["CONTACT_FROM_EMAIL"] ?? "Portfolio <onboarding@resend.dev>";

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY is not configured; message was not delivered.");
      throw new Error("Email delivery is not configured yet. Please email me directly.");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Portfolio message from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      }),
    });

    if (!response.ok) {
      console.error("[contact] Resend error", response.status, await response.text());
      throw new Error("Could not send your message right now. Please try again.");
    }

    return { ok: true as const };
  });
