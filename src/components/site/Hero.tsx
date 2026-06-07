import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-wedding.jpg";

const stats = [
  { value: 400, suffix: "+", label: "Weddings Captured" },
  { value: 13, suffix: "+", label: "Years of Experience" },
  { value: 9000, suffix: "+", label: "Happy Followers" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span className="font-display text-4xl md:text-5xl text-gradient-gold">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bride and groom in golden hour light"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          style={{ animation: "kenburns 14s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/30" />
      </div>

      <div className="container-luxe relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="gold-divider mb-6">
            <span className="h-px w-10 bg-gold" />
            Satiz Photography · Chennai
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-charcoal">
            Every Love Story <br />
            Deserves A <em className="italic text-gradient-gold">Timeless</em> Memory
          </h1>
          <p className="mt-7 max-w-xl text-base md:text-lg text-charcoal/75 leading-relaxed">
            13+ years of experience, 400+ weddings captured. Cinematic films & luxury
            wedding photography across Chennai and beyond.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold transition-colors duration-500"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-charcoal/70 text-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-colors duration-500"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="border-t border-gold/40 pt-4">
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-charcoal/70">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-charcoal/60">
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}