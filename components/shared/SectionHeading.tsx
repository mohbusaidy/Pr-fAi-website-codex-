type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
};

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-sm font-medium uppercase tracking-wide text-gray-500">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}
