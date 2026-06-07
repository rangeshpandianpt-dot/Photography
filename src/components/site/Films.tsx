import { Play } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import p3 from "@/assets/portfolio-3.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p1 from "@/assets/portfolio-1.jpg";

const films = [
  { img: p6, title: "Shreya × Aditya", type: "Cinematic Trailer", duration: "3:12" },
  { img: p3, title: "The Iyer Wedding Film", type: "Highlight Reel", duration: "5:48" },
  { img: p1, title: "Aishwarya × Karthik", type: "Feature Film", duration: "12:24" },
];

export function Films() {
  return (
    <section id="films" className="py-28 md:py-36 bg-background">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Wedding Films"
          title="Cinema, scored for your love story"
          subtitle="Featured trailers, highlight reels and full wedding films."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {films.map((f, i) => (
            <div
              key={f.title}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/35 group-hover:bg-charcoal/55 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="h-20 w-20 rounded-full border border-white/70 bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:scale-110">
                  <Play className="h-7 w-7 text-white" fill="currentColor" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                      {f.type}
                    </span>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl">{f.title}</h3>
                  </div>
                  <span className="text-xs tracking-widest text-white/80">{f.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}