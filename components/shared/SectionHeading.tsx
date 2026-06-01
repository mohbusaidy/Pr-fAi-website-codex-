type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ align = "left", description, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl space-y-3 text-center" : "max-w-2xl space-y-3"}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase text-[var(--color-primary)]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-normal sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-[var(--color-text-muted)] sm:text-lg">{description}</p> : null}
    </div>
  );
}
