import { Award, Camera, Clapperboard, Wand2, Plane, Users, Truck, BookOpen } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: Award, title: "13+ Years Experience" },
  { icon: Camera, title: "400+ Weddings Covered" },
  { icon: Clapperboard, title: "Cinematic Storytelling" },
  { icon: Wand2, title: "Creative Editing" },
  { icon: Plane, title: "Drone Coverage" },
  { icon: Users, title: "Professional Team" },
  { icon: Truck, title: "Fast Delivery" },
  { icon: BookOpen, title: "Premium Albums" },
];

export function WhyChoose() {
  return (
    <section className="py-28 md:py-36 bg-ivory">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why Couples Choose Satiz"
          title="The details that make a wedding a film"
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-ivory hover:bg-background transition-all duration-500 p-8 md:p-10 flex flex-col items-center text-center group"
            >
              <span className="h-14 w-14 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                <f.icon className="h-6 w-6" strokeWidth={1.25} />
              </span>
              <p className="mt-5 font-display text-lg text-charcoal">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}