import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  {
    name: "Aishwarya & Karthik",
    text: "Satiz and his team didn't just photograph our wedding — they made us feel like the only people in the room. The film made my mother cry, in the best way.",
    location: "Chennai Wedding",
  },
  {
    name: "Meera & Arjun",
    text: "We've watched our wedding film over a hundred times. Every frame feels like a memory we forgot we had. Worth every rupee, and then some.",
    location: "Pondicherry Pre-Wedding",
  },
  {
    name: "Shreya & Aditya",
    text: "From the drone coverage to the candid portraits — flawless. Our destination wedding in Goa was captured with the soul of cinema.",
    location: "Goa Destination Wedding",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section id="reviews" className="py-28 md:py-36 bg-background">
      <div className="container-luxe">
        <SectionHeading eyebrow="Kind Words" title="Loved by couples, families, and forever-hearts" />

        <div className="mt-16 mx-auto max-w-3xl text-center relative">
          <div className="flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4" fill="currentColor" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-2xl md:text-3xl text-charcoal italic leading-snug">
            "{r.text}"
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-gold">{r.name}</p>
          <p className="mt-2 text-xs text-charcoal/60 tracking-widest">{r.location}</p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              aria-label="Previous review"
              onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
              className="h-11 w-11 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs tracking-[0.3em] text-charcoal/60">
              {String(i + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
            </span>
            <button
              aria-label="Next review"
              onClick={() => setI((i + 1) % reviews.length)}
              className="h-11 w-11 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}