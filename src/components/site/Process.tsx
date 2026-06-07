import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", t: "Inquiry", d: "Tell us about your day." },
  { n: "02", t: "Consultation", d: "We listen to your vision." },
  { n: "03", t: "Booking", d: "Confirm your date with us." },
  { n: "04", t: "Shoot Planning", d: "Locations, timelines, looks." },
  { n: "05", t: "Wedding Coverage", d: "We document every moment." },
  { n: "06", t: "Delivery", d: "Films, prints, and your album." },
];

export function Process() {
  return (
    <section className="py-28 md:py-36 bg-ivory">
      <div className="container-luxe">
        <SectionHeading eyebrow="How We Work" title="A six-step journey to your forever film" />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((s) => (
              <li key={s.n} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-background border border-gold/40 flex items-center justify-center font-display text-xl text-gradient-gold">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-xl text-charcoal">{s.t}</h3>
                <p className="mt-2 text-sm text-charcoal/65">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}