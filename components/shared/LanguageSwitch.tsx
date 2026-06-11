"use client";

import { useI18n } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const languages: Language[] = ["en", "de"];

export function LanguageSwitch({ className }: { className?: string }) {
  const { language, setLanguage, t } = useI18n();

  return (
    <div
      aria-label={t.language.label}
      className={cn(
        "inline-flex h-9 items-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-1 text-xs font-bold",
        className,
      )}
      role="group"
    >
      {languages.map((item) => (
        <button
          aria-pressed={language === item}
          className={cn(
            "h-7 rounded-[var(--radius-sm)] px-2.5 transition-colors",
            language === item ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]",
          )}
          key={item}
          onClick={() => setLanguage(item)}
          type="button"
        >
          {item === "en" ? t.language.en : t.language.de}
        </button>
      ))}
    </div>
  );
}
