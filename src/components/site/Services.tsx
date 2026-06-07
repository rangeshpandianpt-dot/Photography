import { motion } from "framer-motion";
import {
  Camera,
  Clapperboard,
  Heart,
  Gem,
  Sparkles,
  Plane,
  Mountain,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Camera, title: "Wedding Photography", desc: "Traditional and candid photography that tells the full story of your day." },
  { icon: Clapperboard, title: "Cinematic Wedding Films", desc: "Movie-style wedding storytelling — colour-graded, scored, and edited like cinema." },
  { icon: Heart, title: "Pre-Wedding Shoots", desc: "Creative romantic sessions in handpicked locations across South India." },
  { icon: Gem, title: "Engagement Photography", desc: "Elegant coverage of the moment two families become one." },
  { icon: Sparkles, title: "Reception Coverage", desc: "Premium event photography with editorial-grade lighting." },
  { icon: Plane, title: "Destination Weddings", desc: "Travel and destination coverage anywhere your story takes us." },
  { icon: Mountain, title: "Drone Photography", desc: "Aerial cinematic footage that gives your wedding film scale and grandeur." },
  { icon: Users, title: "Couple Portrait Sessions", desc: "Artistic portrait photography designed for heirloom albums." },
];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-background">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What We Offer"
          title="Crafted services for once-in-a-lifetime days"
          subtitle="From the first look to the last dance — and every quiet moment in between."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group bg-background p-8 lg:p-10 transition-all duration-500 hover:bg-ivory cursor-pointer"
            >
              <s.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.25} />
              <h3 className="mt-6 font-display text-2xl text-charcoal">{s.title}</h3>
              <p className="mt-3 text-sm text-charcoal/65 leading-relaxed min-h-[4.5rem]">
                {s.desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-charcoal/60 group-hover:text-gold transition-colors">
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}