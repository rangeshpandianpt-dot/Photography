export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-5 ${a}`}>
      <span className="gold-divider">
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        <span className="h-px w-8 bg-gold" />
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal max-w-3xl leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-charcoal/70 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}