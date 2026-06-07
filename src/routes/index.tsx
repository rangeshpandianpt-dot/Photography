import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Dumbbell, Flame, Heart, Users, Activity, Apple, Sparkles, Trophy,
  Phone, MapPin, Mail, MessageCircle, ArrowUp, Menu, X, Check,
  ShieldCheck, Award, Clock, TrendingUp, Star, ChevronRight, Instagram, Facebook, Youtube,
  Calculator, Zap
} from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jazz Fitness Chinnamanur — Premium Gym & Personal Training" },
      { name: "description", content: "Transform your body at Jazz Fitness Chinnamanur. Strength training, weight loss, muscle building, physiotherapy, personal training & nutrition coaching in Chinnamanur, Tamil Nadu." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Jazz%20Fitness%2C%20I%27d%20like%20to%20know%20more";
const PHONE = "tel:+919999999999";

function useCounter(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setSeen(true);
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <WhyChoose />
      <Trainers />
      <Transformations />
      <Gallery />
      <Pricing />
      <Testimonials />
      <BMI />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    ["Home", "#home"], ["About", "#about"], ["Programs", "#programs"],
    ["Trainers", "#trainers"], ["Gallery", "#gallery"],
    ["Membership", "#pricing"], ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-brand grid place-items-center glow-blue">
            <Dumbbell className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base">JAZZ FITNESS</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground">CHINNAMANUR</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-blue hover:scale-105 transition-transform">
            Join Now <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md border border-border">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="text-sm font-medium py-2">{l}</a>
            ))}
            <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground text-center">Join Now</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Jazz Fitness gym interior" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-1.5 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-muted-foreground">Where Fitness Goals Become Reality</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05]">
            Transform Your Body.<br />
            <span className="gradient-text">Transform Your Life.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Expert trainers, personalized diet plans, strength training, physiotherapy & complete fitness solutions — all under one roof in Chinnamanur.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground glow-blue hover:scale-105 transition-transform">
              Join Now <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-surface/50 backdrop-blur px-7 py-3.5 font-semibold hover:border-primary transition-colors">
              <Zap className="w-4 h-4 text-accent" /> Free Trial Session
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative animate-float">
          <div className="absolute -inset-10" style={{ background: "var(--gradient-glow)" }} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const { ref, seen } = useInView<HTMLDivElement>();
  const items = [
    { v: 500, suffix: "+", label: "Happy Members" },
    { v: 10, suffix: "+", label: "Years Experience" },
    { v: 15, suffix: "+", label: "Certified Trainers" },
    { v: 24, suffix: "/7", label: "Support" },
  ];
  return (
    <section ref={ref} className="relative py-16 border-y border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it, i) => <StatItem key={i} {...it} start={seen} />)}
      </div>
    </section>
  );
}
function StatItem({ v, suffix, label, start }: { v: number; suffix: string; label: string; start: boolean }) {
  const n = useCounter(v, 1800, start);
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-display font-black gradient-text">{n}{suffix}</div>
      <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ---------------- About ---------------- */
function About() {
  const features = [
    "Expert Trainers", "Injury-Free Training", "Modern Equipment",
    "Personalized Coaching", "Nutrition Guidance", "Physiotherapy Support",
  ];
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={gymInterior} alt="Jazz Fitness gym interior" loading="lazy" width={1280} height={960}
               className="rounded-2xl border border-border glow-blue" />
          <div className="absolute -bottom-6 -right-6 hidden sm:flex card-premium px-6 py-4 items-center gap-3">
            <Trophy className="w-8 h-8 text-accent" />
            <div>
              <div className="font-bold">#1 Gym</div>
              <div className="text-xs text-muted-foreground">in Chinnamanur</div>
            </div>
          </div>
        </div>
        <div>
          <SectionEyebrow>About Us</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black leading-tight">
            Built for Champions.<br /><span className="gradient-text">Designed for You.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Jazz Fitness Chinnamanur is more than a gym — it's a complete fitness ecosystem. From world-class equipment to certified coaches, every detail is crafted to push you toward your strongest self.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 card-premium px-4 py-3">
                <div className="w-7 h-7 rounded-full bg-gradient-brand grid place-items-center shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Programs ---------------- */
function Programs() {
  const programs = [
    { icon: Flame, title: "Weight Loss", desc: "Fat-burning workouts & personalized nutrition plans." },
    { icon: Dumbbell, title: "Muscle Building", desc: "Hypertrophy training for serious mass and strength." },
    { icon: Users, title: "Personal Training", desc: "One-on-one coaching tailored to your goals." },
    { icon: Activity, title: "Functional Training", desc: "Mobility, agility and real-world performance." },
    { icon: Heart, title: "Women's Fitness", desc: "Customized programs in a friendly environment." },
    { icon: ShieldCheck, title: "Physiotherapy", desc: "Recovery, rehab and injury prevention." },
    { icon: Apple, title: "Nutrition Coaching", desc: "Diet plans that fit your body & lifestyle." },
    { icon: TrendingUp, title: "Body Transformation", desc: "Complete 12-week transformation programs." },
  ];
  return (
    <section id="programs" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Programs</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">Train Smart. <span className="gradient-text">Train Hard.</span></h2>
          <p className="mt-4 text-muted-foreground">Choose a program crafted by experts to match your fitness journey.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p) => (
            <div key={p.title} className="card-premium card-premium-hover p-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand grid place-items-center mb-5 group-hover:scale-110 transition-transform glow-blue">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose ---------------- */
function WhyChoose() {
  const items = [
    { icon: Award, title: "Certified Trainers", desc: "Backed by international certifications." },
    { icon: Activity, title: "Personalized Plans", desc: "Workouts engineered for your body type." },
    { icon: Apple, title: "Custom Diet Plans", desc: "Nutrition that fits your goals & taste." },
    { icon: Dumbbell, title: "Advanced Equipment", desc: "Imported, commercial-grade machines." },
    { icon: Users, title: "Friendly Environment", desc: "A community that lifts you up." },
    { icon: ShieldCheck, title: "Injury Prevention", desc: "Safe form, smart progression." },
    { icon: TrendingUp, title: "Progress Tracking", desc: "Measure every win, every week." },
    { icon: Trophy, title: "Transformation Support", desc: "Mentorship from day 1 to goal." },
  ];
  return (
    <section className="py-24 sm:py-32 bg-surface/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Why Jazz Fitness</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">The <span className="gradient-text">Elite Edge</span></h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="card-premium card-premium-hover p-6">
              <it.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trainers ---------------- */
function Trainers() {
  const trainers = [
    { img: trainer1, name: "Arjun Kumar", role: "Head Strength Coach", cert: "NSCA-CSCS · 8+ yrs" },
    { img: trainer2, name: "Priya Sharma", role: "Women's Fitness Lead", cert: "ACSM · 6+ yrs" },
    { img: trainer3, name: "Karthik R.", role: "Personal Trainer & Physio", cert: "ACE · MPT · 10+ yrs" },
  ];
  return (
    <section id="trainers" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Meet the Team</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">Our <span className="gradient-text">Expert Trainers</span></h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {trainers.map((t) => (
            <div key={t.name} className="card-premium card-premium-hover overflow-hidden group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" width={800} height={1000}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="text-sm gradient-text font-semibold">{t.role}</p>
                <p className="mt-2 text-xs text-muted-foreground">{t.cert}</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:border-transparent transition-colors"><Instagram className="w-4 h-4" /></a>
                  <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:border-transparent transition-colors"><Facebook className="w-4 h-4" /></a>
                  <a href="#" aria-label="Youtube" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:border-transparent transition-colors"><Youtube className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Transformations ---------------- */
function Transformations() {
  const { ref, seen } = useInView<HTMLDivElement>();
  const stories = [
    { name: "Ravi M.", change: "-22 kg", time: "6 months", quote: "Jazz Fitness gave me my confidence back." },
    { name: "Anitha P.", change: "+8 kg muscle", time: "9 months", quote: "Strongest I've ever felt in my life." },
    { name: "Suresh K.", change: "-18 kg", time: "5 months", quote: "Coaches that genuinely care." },
  ];
  const counters = [
    { v: 1200, suffix: "+", label: "Kg Lost" },
    { v: 350, suffix: "+", label: "Transformations" },
    { v: 98, suffix: "%", label: "Success Rate" },
  ];
  return (
    <section ref={ref} className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Success Stories</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">Real People. <span className="gradient-text">Real Results.</span></h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-6 mb-12">
          {counters.map((c, i) => <StatItem key={i} v={c.v} suffix={c.suffix} label={c.label} start={seen} />)}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="card-premium card-premium-hover p-6">
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-display font-black gradient-text">{s.change}</div>
                <div className="text-xs text-muted-foreground">{s.time}</div>
              </div>
              <p className="mt-4 italic text-muted-foreground">"{s.quote}"</p>
              <div className="mt-4 font-semibold">— {s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const imgs = [g1, g2, g3, g4, g5, g6];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-surface/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Gallery</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">Inside <span className="gradient-text">Jazz Fitness</span></h2>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {imgs.map((src, i) => (
            <button key={i} onClick={() => setOpen(src)}
                    className={`group relative overflow-hidden rounded-xl border border-border ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={src} alt={`Gym photo ${i + 1}`} loading="lazy" width={900} height={900}
                   className="w-full h-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-md grid place-items-center p-4 animate-fade-up">
          <img src={open} alt="Enlarged" className="max-h-[90vh] max-w-full rounded-xl border border-border glow-purple" />
        </div>
      )}
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const [period, setPeriod] = useState<"monthly" | "quarterly" | "annual">("monthly");
  const mult = { monthly: 1, quarterly: 2.7, annual: 9.5 }[period];
  const sufx = { monthly: "/mo", quarterly: "/quarter", annual: "/year" }[period];
  const plans = [
    { name: "Basic", price: 1499, features: ["Full Gym Access", "Locker Access", "Group Classes", "Open 6 AM–10 PM"], popular: false },
    { name: "Standard", price: 2499, features: ["Everything in Basic", "Custom Diet Plan", "Monthly Progress Review", "Body Composition Analysis"], popular: true },
    { name: "Premium", price: 3999, features: ["Everything in Standard", "1-on-1 Personal Training", "Physiotherapy Support", "Priority 24/7 Support"], popular: false },
  ];
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Membership</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">Plans Built to <span className="gradient-text">Fit You</span></h2>
          <div className="mt-8 inline-flex p-1 rounded-full border border-border bg-surface">
            {(["monthly", "quarterly", "annual"] as const).map((p) => (
              <button key={p} onClick={() => setPeriod(p)}
                      className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${period === p ? "bg-gradient-brand text-primary-foreground glow-blue" : "text-muted-foreground"}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((pl) => (
            <div key={pl.name}
                 className={`card-premium card-premium-hover p-8 relative ${pl.popular ? "border-primary/60 glow-blue" : ""}`}>
              {pl.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-display font-bold">{pl.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-black gradient-text">₹{Math.round(pl.price * mult).toLocaleString("en-IN")}</span>
                <span className="text-muted-foreground">{sufx}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {pl.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noreferrer"
                 className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all ${pl.popular ? "bg-gradient-brand text-primary-foreground glow-purple hover:scale-105" : "border-2 border-border hover:border-primary"}`}>
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    { name: "Mohan S.", text: "Best gym in Chinnamanur. Trainers are top-class and the equipment is brand new.", rating: 5 },
    { name: "Lakshmi K.", text: "I lost 12 kg in 4 months. The diet plan was practical and the coaches kept me motivated.", rating: 5 },
    { name: "Vignesh R.", text: "Premium facility at a fair price. Highly recommend the personal training package.", rating: 5 },
    { name: "Divya M.", text: "Loved the women-only sessions. Felt safe, supported and pushed every single day.", rating: 5 },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <section className="py-24 sm:py-32 bg-surface/40 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <h2 className="mt-3 text-4xl sm:text-5xl font-black">What Our <span className="gradient-text">Members Say</span></h2>
        <div className="mt-12 card-premium p-8 sm:p-12 min-h-[260px] relative overflow-hidden">
          {items.map((it, i) => (
            <div key={i} className={`transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0 absolute inset-0 p-8 sm:p-12"}`}>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: it.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg sm:text-xl italic text-foreground/90">"{it.text}"</p>
              <div className="mt-6 font-semibold">— {it.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-brand" : "w-2 bg-border"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BMI ---------------- */
function BMI() {
  const [h, setH] = useState("170");
  const [w, setW] = useState("70");
  const hm = parseFloat(h) / 100;
  const bmi = hm > 0 ? parseFloat(w) / (hm * hm) : 0;
  const cat = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : bmi > 0 ? "Obese" : "—";
  const rec = bmi < 18.5 ? "Try our Muscle Building program." :
              bmi < 25 ? "Maintain with Functional Training." :
              bmi < 30 ? "Start with our Weight Loss program." :
              bmi > 0 ? "Personal Training + Diet Plan recommended." : "Enter your details.";
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="card-premium p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionEyebrow><Calculator className="w-3.5 h-3.5 inline mr-1" /> BMI Calculator</SectionEyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black">Know Your <span className="gradient-text">Number</span></h2>
            <div className="mt-6 space-y-4">
              <Field label="Height (cm)" value={h} onChange={setH} />
              <Field label="Weight (kg)" value={w} onChange={setW} />
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Your BMI</div>
            <div className="mt-2 text-7xl font-display font-black gradient-text">{bmi > 0 ? bmi.toFixed(1) : "—"}</div>
            <div className="mt-2 text-xl font-semibold">{cat}</div>
            <p className="mt-3 text-muted-foreground">{rec}</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground glow-blue">
              Get Personalized Plan <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-sm text-muted-foreground">{label}</span>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)}
             className="mt-1 w-full rounded-lg border border-border bg-input/50 px-4 py-3 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />
    </label>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "What are the membership fees?", a: "Plans start at ₹1,499/month. See our Membership section for full pricing." },
    { q: "Do you offer personal training?", a: "Yes — included in our Premium plan or available as an add-on for any member." },
    { q: "Are diet plans personalized?", a: "Absolutely. Our nutrition coaches build plans around your goals, body type, and food preferences." },
    { q: "What are the gym timings?", a: "We're open 6:00 AM – 10:00 PM, with 24/7 access for Premium members." },
    { q: "Can I try the gym before joining?", a: "Yes! Book a free trial session through our Contact form or WhatsApp." },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32 bg-surface/40 border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">Questions? <span className="gradient-text">Answered.</span></h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card-premium overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold">{f.q}</span>
                <ChevronRight className={`w-5 h-5 transition-transform ${openIdx === i ? "rotate-90 text-accent" : ""}`} />
              </button>
              {openIdx === i && <div className="px-5 pb-5 text-muted-foreground text-sm">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">Visit Us. <span className="gradient-text">Start Today.</span></h2>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="card-premium p-8">
            <h3 className="text-2xl font-bold">Contact Details</h3>
            <div className="mt-6 space-y-5">
              <InfoRow icon={MapPin} title="Address">
                177/4, Cumbum Main Road,<br />Chinnamanur, Tamil Nadu 625515
              </InfoRow>
              <InfoRow icon={Phone} title="Call">
                <a href={PHONE} className="hover:text-accent">+91 99999 99999</a>
              </InfoRow>
              <InfoRow icon={Mail} title="Email">
                <a href="mailto:hello@jazzfitness.in" className="hover:text-accent">hello@jazzfitness.in</a>
              </InfoRow>
              <InfoRow icon={Clock} title="Hours">
                Mon–Sun: 6:00 AM – 10:00 PM
              </InfoRow>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-blue">
                <Phone className="w-4 h-4" /> Call
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 text-sm font-semibold hover:border-primary">
                <MessageCircle className="w-4 h-4 text-accent" /> WhatsApp
              </a>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-border">
              <iframe
                title="Jazz Fitness Location"
                src="https://maps.google.com/maps?q=Chinnamanur,Tamil+Nadu&output=embed"
                width="100%" height="220" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="card-premium p-8 space-y-4">
            <h3 className="text-2xl font-bold">Send an Enquiry</h3>
            <Input name="name" label="Full Name" required />
            <Input name="mobile" label="Mobile Number" type="tel" required />
            <Input name="email" label="Email" type="email" />
            <Select name="goal" label="Fitness Goal" options={["Weight Loss", "Muscle Building", "Personal Training", "Physiotherapy", "Nutrition Coaching", "Other"]} />
            <label className="block">
              <span className="text-sm text-muted-foreground">Message</span>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-border bg-input/50 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />
            </label>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground glow-purple hover:scale-[1.02] transition-transform">
              {submitted ? "Thank you! We'll be in touch." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
function InfoRow({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 rounded-xl bg-gradient-brand grid place-items-center shrink-0 glow-blue">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-muted-foreground text-sm mt-0.5">{children}</div>
      </div>
    </div>
  );
}
function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm text-muted-foreground">{label}{required && " *"}</span>
      <input name={name} type={type} required={required}
             className="mt-1 w-full rounded-lg border border-border bg-input/50 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />
    </label>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-sm text-muted-foreground">{label}</span>
      <select name={name} className="mt-1 w-full rounded-lg border border-border bg-input/50 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center"><Dumbbell className="w-4 h-4 text-primary-foreground" /></div>
            <div className="font-display font-bold">JAZZ FITNESS</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Where fitness goals become reality. Premium gym & coaching in Chinnamanur, Tamil Nadu.</p>
          <div className="mt-4 flex gap-2">
            <SocialBtn icon={Instagram} /><SocialBtn icon={Facebook} /><SocialBtn icon={Youtube} />
          </div>
        </div>
        <FooterCol title="Quick Links" links={[["About", "#about"], ["Programs", "#programs"], ["Trainers", "#trainers"], ["Gallery", "#gallery"]]} />
        <FooterCol title="Membership" links={[["Basic", "#pricing"], ["Standard", "#pricing"], ["Premium", "#pricing"], ["Free Trial", "#contact"]]} />
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get fitness tips & offers in your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input type="email" placeholder="Email" className="flex-1 min-w-0 rounded-full border border-border bg-input/50 px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
            <button className="rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 Jazz Fitness Chinnamanur. All Rights Reserved.
      </div>
    </footer>
  );
}
function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map(([l, h]) => <li key={l}><a href={h} className="text-muted-foreground hover:text-accent">{l}</a></li>)}
      </ul>
    </div>
  );
}
function SocialBtn({ icon: Icon }: { icon: any }) {
  return <a href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:border-transparent transition-colors"><Icon className="w-4 h-4" /></a>;
}

/* ---------------- Floating Actions ---------------- */
function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                className="w-12 h-12 rounded-full bg-surface border border-border grid place-items-center hover:bg-gradient-brand transition-colors">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <a href={PHONE} aria-label="Call"
         className="w-12 h-12 rounded-full bg-gradient-brand grid place-items-center glow-blue animate-pulse-glow">
        <Phone className="w-5 h-5 text-primary-foreground" />
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"
         className="w-12 h-12 rounded-full grid place-items-center glow-purple animate-pulse-glow"
         style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
        <MessageCircle className="w-5 h-5 text-white" />
      </a>
    </div>
  );
}

/* ---------------- Bits ---------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-accent">
      <span className="w-8 h-px bg-accent" />{children}
    </span>
  );
}
