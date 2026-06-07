import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const packages = [
  {
    name: "Silver",
    tag: "Wedding Photography",
    features: ["Full-day photography coverage", "2 professional photographers", "300+ edited high-res images", "Online private gallery", "Delivery within 30 days"],
  },
  {
    name: "Gold",
    tag: "Photography + Cinematic Video",
    featured: true,
    features: ["Everything in Silver", "Cinematic wedding film (4–6 min)", "Highlight reel + full ceremony video", "Drone coverage (where permitted)", "Premium colour grading"],
  },
  {
    name: "Platinum",
    tag: "Full Luxury Coverage",
    features: ["Everything in Gold", "Multi-day event coverage", "Feature-length wedding film", "Premium hand-bound album", "Pre-wedding shoot included"],
  },
];

export function Packages() {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Investment"
          title="Packages designed for every kind of love story"
          subtitle="Tailored collections, never one-size-fits-all. Custom quotes available on request."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative p-10 border transition-all duration-500 ${
                p.featured
                  ? "border-gold bg-ivory shadow-[0_30px_60px_-30px_rgba(212,175,55,0.45)] md:-translate-y-4"
                  : "border-border bg-background hover:border-gold/60"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] uppercase tracking-[0.3em] px-4 py-1.5">
                  Most Loved
                </span>
              )}
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{p.tag}</p>
              <h3 className="mt-3 font-display text-5xl text-charcoal">{p.name}</h3>
              <div className="mt-6 h-px bg-gradient-to-r from-gold/60 via-border to-transparent" />
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex w-full justify-center px-6 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                  p.featured
                    ? "bg-charcoal text-white hover:bg-gold"
                    : "border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-white"
                }`}
              >
                Inquire About {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}