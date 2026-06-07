import { motion } from "framer-motion";
import founder from "@/assets/founder.jpg";

const highlights = [
  "13+ Years Experience",
  "400+ Weddings Completed",
  "Destination Wedding Expertise",
  "Professional Editing Team",
  "Cinematic Film Production",
];

export function About() {
  return (
    <section id="about" className="bg-ivory py-28 md:py-36">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={founder}
              alt="Founder of Satiz Photography"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-background border border-gold/40 px-8 py-6 shadow-[0_30px_60px_-30px_rgba(212,175,55,0.4)]">
            <p className="font-display text-5xl text-gradient-gold leading-none">13+</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-charcoal/70">
              Years of Craft
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <span className="gold-divider mb-5">
            <span className="h-px w-8 bg-gold" />
            About the Studio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
            A passion for <em className="italic text-gradient-gold">storytelling</em>,
            crafted into film.
          </h2>
          <div className="mt-6 space-y-5 text-charcoal/75 leading-relaxed">
            <p>
              Satiz Photography was born from a quiet obsession — the kind of love
              that lives in a glance, the tremble of a hand, the silence before the
              vows. For over a decade, we've travelled across India and beyond to
              capture weddings as they truly feel, not just how they look.
            </p>
            <p>
              Every frame is composed with intention. Every film is edited like a
              feature. Our work is for couples who want their story remembered the
              way it was lived — unhurried, honest, and beautifully cinematic.
            </p>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-3 text-sm text-charcoal/80"
              >
                <span className="h-px w-6 bg-gold" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-6">
            <p className="font-display italic text-2xl text-gold">— Satiz</p>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">
              Founder & Lead Cinematographer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}