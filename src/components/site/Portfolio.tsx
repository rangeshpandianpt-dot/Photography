import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { img: p1, couple: "Aishwarya & Karthik", loc: "Chennai", cat: "Weddings", span: "row-span-2" },
  { img: p2, couple: "Meera & Arjun", loc: "Pondicherry", cat: "Pre-Wedding", span: "" },
  { img: p3, couple: "The Iyer Wedding", loc: "Madurai", cat: "Weddings", span: "" },
  { img: p4, couple: "Divya & Rohan", loc: "Bangalore", cat: "Engagement", span: "row-span-2" },
  { img: p5, couple: "Priya & Vivek", loc: "Chennai", cat: "Couple Portraits", span: "" },
  { img: p6, couple: "Shreya & Aditya", loc: "Goa", cat: "Destination Weddings", span: "" },
];

const categories = ["All", "Weddings", "Pre-Wedding", "Engagement", "Destination Weddings", "Couple Portraits"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-ivory">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Signature Wedding Stories"
          title="A portfolio of love, light, and unrepeatable moments"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] border transition-all ${
                active === c
                  ? "border-gold bg-gold text-white"
                  : "border-border text-charcoal/70 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[22rem] gap-5">
          {filtered.map((it, i) => (
            <motion.figure
              key={it.couple}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden ${it.span}`}
            >
              <img
                src={it.img}
                alt={`${it.couple} — ${it.cat}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 text-white">
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                  {it.cat}
                </span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">{it.couple}</h3>
                <p className="mt-1 text-xs text-white/70 tracking-wider">{it.loc}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}