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
      text: `From: ${name} <${email}>\n\n${message}`,
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
