"use server";

import { Resend } from "resend";
import { DATA } from "../data";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NAME_MAX = 100;
const SUBJECT_MAX = 150;
const MESSAGE_MAX = 5000;

function sanitize(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Escape user input before embedding it in the HTML email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Branded HTML email for an incoming contact-form message. */
function contactEmailHtml(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const name = escapeHtml(fields.name);
  const email = escapeHtml(fields.email);
  const subject = escapeHtml(fields.subject || "(no subject)");
  const message = escapeHtml(fields.message);
  const row = (label: string, value: string) => `
      <tr>
        <td style="padding:6px 0;color:#6b7280;width:80px;vertical-align:top;font-size:13px;">${label}</td>
        <td style="padding:6px 0;font-size:14px;color:#111827;">${value}</td>
      </tr>`;
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111827;line-height:1.6;">
    <div style="border-bottom:3px solid #10b981;padding-bottom:12px;margin-bottom:20px;">
      <h1 style="margin:0;font-size:18px;color:#0a0a0a;">New message from your portfolio</h1>
      <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">via vincentpacana.com contact form</p>
    </div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
      ${row("From", `<strong>${name}</strong>`)}
      ${row("Email", `<a href="mailto:${email}" style="color:#0d9488;text-decoration:none;">${email}</a>`)}
      ${row("Subject", subject)}
    </table>
    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;font-size:14px;white-space:pre-wrap;color:#111827;">${message}</div>
    <p style="margin-top:24px;font-size:12px;color:#9ca3af;">Reply directly to this email to respond to ${name}.</p>
  </div>`;
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users never fill this hidden field. If it's filled,
  // pretend success so bots don't learn anything, but do not send an email.
  const honeypot = sanitize(formData.get("company"));
  if (honeypot) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const name = sanitize(formData.get("name"));
  const email = sanitize(formData.get("email"));
  const subject = sanitize(formData.get("subject"));
  const message = sanitize(formData.get("message"));

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and message.",
    };
  }

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (name.length > NAME_MAX) {
    return { status: "error", message: "Name is too long." };
  }
  if (subject.length > SUBJECT_MAX) {
    return { status: "error", message: "Subject is too long." };
  }
  if (message.length > MESSAGE_MAX) {
    return { status: "error", message: "Message is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || DATA.contact.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error(
      "[contact] Missing RESEND_API_KEY or CONTACT_FROM_EMAIL env var; cannot send email."
    );
    return {
      status: "error",
      message: "Sorry, the contact form is temporarily unavailable. Please email directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: contactEmailHtml({ name, email, subject, message }),
      text: `New message via vincentpacana.com contact form\n\nFrom: ${name} <${email}>\nSubject: ${subject || "(no subject)"}\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    return { status: "success", message: "Thanks! Your message has been sent." };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
