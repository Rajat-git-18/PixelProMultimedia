"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "./actions";
import { pillars } from "@/lib/site";

const initial: EnquiryState = { ok: false, message: "" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  return (
    <form className="contact-form" action={action}>
      <label className="hp">
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Full name
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        Phone
        <input name="phone" required placeholder="10-digit mobile number" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@email.com" />
      </label>
      <label>
        Course interest
        <select name="course" defaultValue="">
          <option value="">Select a course</option>
          {pillars.map((pillar) => (
            <option key={pillar.slug} value={pillar.title}>
              {pillar.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          placeholder="Batch timings, walk-in questions, or anything else."
        />
      </label>
      <button className="btn-primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </button>
      {state.message ? (
        <p className={`form-status ${state.ok ? "ok" : "err"}`}>{state.message}</p>
      ) : null}
    </form>
  );
}
