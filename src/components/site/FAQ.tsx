import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "How early should we book?", a: "We accept a limited number of weddings each year. Booking 6–12 months in advance is recommended, especially for peak season." },
  { q: "Do you cover destination weddings?", a: "Absolutely. We've filmed across India and overseas. Travel, accommodation and logistics are quoted transparently per destination." },
  { q: "What is the delivery timeline?", a: "Edited photographs are delivered within 30 days. Cinematic films are delivered within 60–90 days, depending on the package." },
  { q: "Do you offer album design?", a: "Yes — we design and print premium hand-bound albums with archival-grade paper, included in select packages." },
  { q: "Is drone coverage available?", a: "Yes, in venues where it is permitted. We handle the necessary permissions on your behalf." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-36 bg-ivory">
      <div className="container-luxe max-w-4xl">
        <SectionHeading eyebrow="Frequently Asked" title="Everything you need to know" />
        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl text-charcoal">
                    {f.q}
                  </span>
                  <span className="text-gold shrink-0">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-charcoal/70 leading-relaxed animate-fade-in">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}