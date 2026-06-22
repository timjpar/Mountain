"use client";

import { useState } from "react";
import { site } from "../site";

const moveTypes = [
  "Used single-wide",
  "Used double-wide",
  "New home delivery",
  "Grading / site prep only",
  "Not sure yet",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string)?.trim() || "—";

    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Type of move: ${get("moveType")}`,
      `Moving from: ${get("from")}`,
      `Moving to: ${get("to")}`,
      "",
      "Details:",
      get("message"),
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Quote request from ${get("name")}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-forest-100 bg-forest-50 p-8 text-center">
        <h3 className="text-xl font-bold text-forest-800">
          Thanks — your email is ready to send.
        </h3>
        <p className="mt-2 text-stone-600">
          Your email app should have opened with your details filled in. If it
          didn&apos;t, call us directly at{" "}
          <a href={`tel:+1${site.phones[0].number.replace(/-/g, "")}`} className="font-semibold text-forest-700 underline">
            {site.phones[0].number}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-forest-700 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Your name" name="name" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-stone-700">
        Type of move
        <select
          name="moveType"
          className="rounded-md border border-stone-300 bg-white px-3 py-2.5 font-normal text-stone-900 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20"
          defaultValue={moveTypes[0]}
        >
          {moveTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <Field label="Moving from (address / county)" name="from" />
      <Field label="Moving to (address / county)" name="to" />
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-stone-700 sm:col-span-2">
        Tell us about the home and sites
        <textarea
          name="message"
          rows={4}
          placeholder="Single or double wide, year, road/site conditions, hills, trees, anything that might affect the move…"
          className="rounded-md border border-stone-300 bg-white px-3 py-2.5 font-normal text-stone-900 placeholder:text-stone-400 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-action px-6 py-3.5 text-base font-bold text-stone-900 shadow-md transition-colors hover:bg-action-dark sm:col-span-2"
      >
        Request My Quote
      </button>
      <p className="text-xs text-stone-500 sm:col-span-2">
        Submitting opens your email app with the details filled in, addressed to{" "}
        {site.email}. Prefer to talk? Call {site.phones[0].number}.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-semibold text-stone-700">
      {label}
      {required && <span className="sr-only">(required)</span>}
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-md border border-stone-300 bg-white px-3 py-2.5 font-normal text-stone-900 placeholder:text-stone-400 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20"
      />
    </label>
  );
}
