"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

type FormField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const fieldClassName =
  "mt-2 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_18%,transparent)]";

function getValue(form: HTMLFormElement, name: string) {
  const field = form.elements.namedItem(name) as FormField | null;
  return field?.value.trim() ?? "";
}

export function ContactPageContent() {
  const { t } = useI18n();
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = {
      fullName: getValue(form, "fullName"),
      institution: getValue(form, "institution"),
      role: getValue(form, "role"),
      email: getValue(form, "email"),
      phone: getValue(form, "phone"),
      orgType: getValue(form, "orgType"),
      need: getValue(form, "need"),
      message: getValue(form, "message"),
    };

    const body = [
      "PrüfAI demo request",
      "",
      `Full name: ${values.fullName}`,
      `Institution / Organization: ${values.institution}`,
      `Role: ${values.role}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Type of organization: ${values.orgType}`,
      `Need: ${values.need}`,
      "",
      "Message:",
      values.message,
    ].join("\n");

    // Backend integration point: replace this mailto fallback with a POST request
    // to a private-server endpoint when lead capture/email delivery is available.
    window.location.href = `mailto:?subject=${encodeURIComponent("PrüfAI demo request")}&body=${encodeURIComponent(body)}`;
    setStatus(t.contact.success);
  };

  return (
    <section className="section-spacing bg-[var(--color-background-soft)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge variant="primary">{t.contact.badge}</Badge>
            <SectionHeading title={t.contact.title} description={t.contact.subtitle} />
            <Card className="mt-8" variant="highlight">
              <h2 className="text-xl font-bold">{t.contact.helpfulTitle}</h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--color-text-muted)] sm:text-base">
                {t.contact.checklist.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div id="demo-form">
            <Card variant="default">
            <h2 className="text-2xl font-bold">{t.contact.formTitle}</h2>
            <p className="mt-3 text-sm text-[var(--color-text-muted)] sm:text-base">{t.contact.formIntro}</p>
            <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">{t.contact.fields.fullName}<input className={fieldClassName} name="fullName" required type="text" /></label>
                <label className="text-sm font-semibold">{t.contact.fields.institution}<input className={fieldClassName} name="institution" required type="text" /></label>
                <label className="text-sm font-semibold">{t.contact.fields.role}<input className={fieldClassName} name="role" required type="text" /></label>
                <label className="text-sm font-semibold">{t.contact.fields.email}<input className={fieldClassName} name="email" required type="email" /></label>
                <label className="text-sm font-semibold">{t.contact.fields.phone}<input className={fieldClassName} name="phone" type="tel" /></label>
                <label className="text-sm font-semibold">
                  {t.contact.fields.orgType}
                  <select className={fieldClassName} name="orgType" required>
                    <option value="" />
                    {t.contact.orgOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                  </select>
                </label>
              </div>
              <label className="text-sm font-semibold">
                {t.contact.fields.need}
                <select className={fieldClassName} name="need" required>
                  <option value="" />
                  {t.contact.needOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
              </label>
              <label className="text-sm font-semibold">{t.contact.fields.message}<textarea className={fieldClassName} name="message" required rows={5} /></label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[var(--color-text-muted)]">{t.contact.mailNote}</p>
                <button className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-primary-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]" type="submit">{t.contact.submit}</button>
              </div>
              {status ? <p className="rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-secondary)_14%,white)] p-3 text-sm font-semibold text-[var(--color-text)]">{status}</p> : null}
            </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
