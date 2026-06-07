import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, Camera, Clapperboard, Heart, Gem, Sparkles, Plane, Mountain, Users, ArrowUpRight, Play, Award, Wand2, Truck, BookOpen, Star, ChevronLeft, ChevronRight, Check, Minus, Plus, MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#films", label: "Wedding Films" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-luxe flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex flex-col leading-none", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-display text-2xl tracking-wide text-charcoal", children: [
              "Satiz",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: " Photography" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "mt-0.5 text-[10px] uppercase tracking-[0.35em] text-muted-foreground", children: "Chennai · Est. 2012" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-9", children: links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "text-[13px] uppercase tracking-[0.18em] text-charcoal/80 hover:text-gold transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "hidden lg:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] text-charcoal hover:bg-gold hover:text-white transition-all duration-300",
              children: "Book Your Date"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              onClick: () => setOpen((o) => !o),
              className: "lg:hidden text-charcoal",
              children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden absolute top-full inset-x-0 bg-background border-b border-border animate-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe py-6 flex flex-col gap-5", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "text-sm uppercase tracking-[0.2em] text-charcoal",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex justify-center border border-gold px-5 py-3 text-xs uppercase tracking-[0.3em] text-gold",
              children: "Book Your Date"
            }
          )
        ] }) })
      ]
    }
  );
}
const heroImg = "/assets/hero-wedding-CFGiIN5x.jpg";
const stats = [
  { value: 400, suffix: "+", label: "Weddings Captured" },
  { value: 13, suffix: "+", label: "Years of Experience" },
  { value: 9e3, suffix: "+", label: "Happy Followers" },
  { value: 100, suffix: "%", label: "Client Satisfaction" }
];
function Counter({ to, suffix }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return /* @__PURE__ */ jsxs("span", { className: "font-display text-4xl md:text-5xl text-gradient-gold", children: [
    n.toLocaleString(),
    suffix
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: "Bride and groom in golden hour light",
          width: 1920,
          height: 1080,
          className: "h-full w-full object-cover",
          style: { animation: "kenburns 14s ease-in-out infinite alternate" }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/85" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/30" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container-luxe relative z-10 pt-32 pb-20", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: "easeOut" },
          className: "max-w-3xl",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "gold-divider mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-gold" }),
              "Satiz Photography · Chennai"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-charcoal", children: [
              "Every Love Story ",
              /* @__PURE__ */ jsx("br", {}),
              "Deserves A ",
              /* @__PURE__ */ jsx("em", { className: "italic text-gradient-gold", children: "Timeless" }),
              " Memory"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-xl text-base md:text-lg text-charcoal/75 leading-relaxed", children: "13+ years of experience, 400+ weddings captured. Cinematic films & luxury wedding photography across Chennai and beyond." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#portfolio",
                  className: "inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold transition-colors duration-500",
                  children: "View Portfolio"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#contact",
                  className: "inline-flex items-center gap-3 border border-charcoal/70 text-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-colors duration-500",
                  children: "Book Consultation"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.4 },
          className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl",
          children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "border-t border-gold/40 pt-4", children: [
            /* @__PURE__ */ jsx(Counter, { to: s.value, suffix: s.suffix }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.2em] text-charcoal/70", children: s.label })
          ] }, s.label))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-charcoal/60", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.35em]", children: "Scroll" }),
      /* @__PURE__ */ jsx("span", { className: "h-10 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" })
    ] })
  ] });
}
const founder = "/assets/founder-CRtQvzCa.jpg";
const highlights = [
  "13+ Years Experience",
  "400+ Weddings Completed",
  "Destination Wedding Expertise",
  "Professional Editing Team",
  "Cinematic Film Production"
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "bg-ivory py-28 md:py-36", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.9 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: founder,
              alt: "Founder of Satiz Photography",
              width: 1024,
              height: 1280,
              loading: "lazy",
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-8 -right-4 md:-right-10 bg-background border border-gold/40 px-8 py-6 shadow-[0_30px_60px_-30px_rgba(212,175,55,0.4)]", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-5xl text-gradient-gold leading-none", children: "13+" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-[11px] uppercase tracking-[0.3em] text-charcoal/70", children: "Years of Craft" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.9 },
        children: [
          /* @__PURE__ */ jsxs("span", { className: "gold-divider mb-5", children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" }),
            "About the Studio"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]", children: [
            "A passion for ",
            /* @__PURE__ */ jsx("em", { className: "italic text-gradient-gold", children: "storytelling" }),
            ", crafted into film."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-charcoal/75 leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Satiz Photography was born from a quiet obsession — the kind of love that lives in a glance, the tremble of a hand, the silence before the vows. For over a decade, we've travelled across India and beyond to capture weddings as they truly feel, not just how they look." }),
            /* @__PURE__ */ jsx("p", { children: "Every frame is composed with intention. Every film is edited like a feature. Our work is for couples who want their story remembered the way it was lived — unhurried, honest, and beautifully cinematic." })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3", children: highlights.map((h) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "flex items-center gap-3 text-sm text-charcoal/80",
              children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-6 bg-gold" }),
                h
              ]
            },
            h
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display italic text-2xl text-gold", children: "— Satiz" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-charcoal/60", children: "Founder & Lead Cinematographer" })
          ] })
        ]
      }
    )
  ] }) });
}
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center"
}) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-5 ${a}`, children: [
    /* @__PURE__ */ jsxs("span", { className: "gold-divider", children: [
      /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" }),
      eyebrow,
      /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-charcoal max-w-3xl leading-[1.05]", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-charcoal/70 leading-relaxed", children: subtitle })
  ] });
}
const services = [
  { icon: Camera, title: "Wedding Photography", desc: "Traditional and candid photography that tells the full story of your day." },
  { icon: Clapperboard, title: "Cinematic Wedding Films", desc: "Movie-style wedding storytelling — colour-graded, scored, and edited like cinema." },
  { icon: Heart, title: "Pre-Wedding Shoots", desc: "Creative romantic sessions in handpicked locations across South India." },
  { icon: Gem, title: "Engagement Photography", desc: "Elegant coverage of the moment two families become one." },
  { icon: Sparkles, title: "Reception Coverage", desc: "Premium event photography with editorial-grade lighting." },
  { icon: Plane, title: "Destination Weddings", desc: "Travel and destination coverage anywhere your story takes us." },
  { icon: Mountain, title: "Drone Photography", desc: "Aerial cinematic footage that gives your wedding film scale and grandeur." },
  { icon: Users, title: "Couple Portrait Sessions", desc: "Artistic portrait photography designed for heirloom albums." }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "py-28 md:py-36 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "What We Offer",
        title: "Crafted services for once-in-a-lifetime days",
        subtitle: "From the first look to the last dance — and every quiet moment in between."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border", children: services.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i % 4 * 0.08 },
        className: "group bg-background p-8 lg:p-10 transition-all duration-500 hover:bg-ivory cursor-pointer",
        children: [
          /* @__PURE__ */ jsx(s.icon, { className: "h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110", strokeWidth: 1.25 }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-2xl text-charcoal", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-charcoal/65 leading-relaxed min-h-[4.5rem]", children: s.desc }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-charcoal/60 group-hover:text-gold transition-colors", children: [
            "Learn More",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
          ] })
        ]
      },
      s.title
    )) })
  ] }) });
}
const p1 = "/assets/portfolio-1-CBHZdFtW.jpg";
const p2 = "/assets/portfolio-2-Dpuf5W9D.jpg";
const p3 = "/assets/portfolio-3-B4zdat6J.jpg";
const p4 = "/assets/portfolio-4-C9Y2IGIt.jpg";
const p5 = "/assets/portfolio-5-BvjZz6Md.jpg";
const p6 = "/assets/portfolio-6-wjjnszYm.jpg";
const items = [
  { img: p1, couple: "Aishwarya & Karthik", loc: "Chennai", cat: "Weddings", span: "row-span-2" },
  { img: p2, couple: "Meera & Arjun", loc: "Pondicherry", cat: "Pre-Wedding", span: "" },
  { img: p3, couple: "The Iyer Wedding", loc: "Madurai", cat: "Weddings", span: "" },
  { img: p4, couple: "Divya & Rohan", loc: "Bangalore", cat: "Engagement", span: "row-span-2" },
  { img: p5, couple: "Priya & Vivek", loc: "Chennai", cat: "Couple Portraits", span: "" },
  { img: p6, couple: "Shreya & Aditya", loc: "Goa", cat: "Destination Weddings", span: "" }
];
const categories = ["All", "Weddings", "Pre-Wedding", "Engagement", "Destination Weddings", "Couple Portraits"];
function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return /* @__PURE__ */ jsx("section", { id: "portfolio", className: "py-28 md:py-36 bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Signature Wedding Stories",
        title: "A portfolio of love, light, and unrepeatable moments"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-2 md:gap-3", children: categories.map((c) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setActive(c),
        className: `px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] border transition-all ${active === c ? "border-gold bg-gold text-white" : "border-border text-charcoal/70 hover:border-gold hover:text-gold"}`,
        children: c
      },
      c
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[22rem] gap-5", children: filtered.map((it, i) => /* @__PURE__ */ jsxs(
      motion.figure,
      {
        layout: true,
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i * 0.05 },
        className: `group relative overflow-hidden ${it.span}`,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: it.img,
              alt: `${it.couple} — ${it.cat}`,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-90" }),
          /* @__PURE__ */ jsxs("figcaption", { className: "absolute inset-x-0 bottom-0 p-7 text-white", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.35em] text-gold", children: it.cat }),
            /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl md:text-3xl", children: it.couple }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-white/70 tracking-wider", children: it.loc })
          ] })
        ]
      },
      it.couple
    )) })
  ] }) });
}
const films = [
  { img: p6, title: "Shreya × Aditya", type: "Cinematic Trailer", duration: "3:12" },
  { img: p3, title: "The Iyer Wedding Film", type: "Highlight Reel", duration: "5:48" },
  { img: p1, title: "Aishwarya × Karthik", type: "Feature Film", duration: "12:24" }
];
function Films() {
  return /* @__PURE__ */ jsx("section", { id: "films", className: "py-28 md:py-36 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Wedding Films",
        title: "Cinema, scored for your love story",
        subtitle: "Featured trailers, highlight reels and full wedding films."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-6", children: films.map((f, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `group relative overflow-hidden cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/10]" : "aspect-[4/5]"}`,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: f.img,
              alt: f.title,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-charcoal/35 group-hover:bg-charcoal/55 transition-colors duration-500" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "h-20 w-20 rounded-full border border-white/70 bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:scale-110", children: /* @__PURE__ */ jsx(Play, { className: "h-7 w-7 text-white", fill: "currentColor" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 p-6 text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.35em] text-gold", children: f.type }),
              /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl md:text-3xl", children: f.title })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs tracking-widest text-white/80", children: f.duration })
          ] }) })
        ]
      },
      f.title
    )) })
  ] }) });
}
const features = [
  { icon: Award, title: "13+ Years Experience" },
  { icon: Camera, title: "400+ Weddings Covered" },
  { icon: Clapperboard, title: "Cinematic Storytelling" },
  { icon: Wand2, title: "Creative Editing" },
  { icon: Plane, title: "Drone Coverage" },
  { icon: Users, title: "Professional Team" },
  { icon: Truck, title: "Fast Delivery" },
  { icon: BookOpen, title: "Premium Albums" }
];
function WhyChoose() {
  return /* @__PURE__ */ jsx("section", { className: "py-28 md:py-36 bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Why Couples Choose Satiz",
        title: "The details that make a wedding a film"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border", children: features.map((f) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-ivory hover:bg-background transition-all duration-500 p-8 md:p-10 flex flex-col items-center text-center group",
        children: [
          /* @__PURE__ */ jsx("span", { className: "h-14 w-14 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500", children: /* @__PURE__ */ jsx(f.icon, { className: "h-6 w-6", strokeWidth: 1.25 }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 font-display text-lg text-charcoal", children: f.title })
        ]
      },
      f.title
    )) })
  ] }) });
}
const reviews = [
  {
    name: "Aishwarya & Karthik",
    text: "Satiz and his team didn't just photograph our wedding — they made us feel like the only people in the room. The film made my mother cry, in the best way.",
    location: "Chennai Wedding"
  },
  {
    name: "Meera & Arjun",
    text: "We've watched our wedding film over a hundred times. Every frame feels like a memory we forgot we had. Worth every rupee, and then some.",
    location: "Pondicherry Pre-Wedding"
  },
  {
    name: "Shreya & Aditya",
    text: "From the drone coverage to the candid portraits — flawless. Our destination wedding in Goa was captured with the soul of cinema.",
    location: "Goa Destination Wedding"
  }
];
function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return /* @__PURE__ */ jsx("section", { id: "reviews", className: "py-28 md:py-36 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Kind Words", title: "Loved by couples, families, and forever-hearts" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 mx-auto max-w-3xl text-center relative", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1 text-gold", children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4", fill: "currentColor" }, k)) }),
      /* @__PURE__ */ jsxs("blockquote", { className: "mt-6 font-display text-2xl md:text-3xl text-charcoal italic leading-snug", children: [
        '"',
        r.text,
        '"'
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm uppercase tracking-[0.3em] text-gold", children: r.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-charcoal/60 tracking-widest", children: r.location }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Previous review",
            onClick: () => setI((i - 1 + reviews.length) % reviews.length),
            className: "h-11 w-11 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-xs tracking-[0.3em] text-charcoal/60", children: [
          String(i + 1).padStart(2, "0"),
          " / ",
          String(reviews.length).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Next review",
            onClick: () => setI((i + 1) % reviews.length),
            className: "h-11 w-11 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] }) });
}
const steps = [
  { n: "01", t: "Inquiry", d: "Tell us about your day." },
  { n: "02", t: "Consultation", d: "We listen to your vision." },
  { n: "03", t: "Booking", d: "Confirm your date with us." },
  { n: "04", t: "Shoot Planning", d: "Locations, timelines, looks." },
  { n: "05", t: "Wedding Coverage", d: "We document every moment." },
  { n: "06", t: "Delivery", d: "Films, prints, and your album." }
];
function Process() {
  return /* @__PURE__ */ jsx("section", { className: "py-28 md:py-36 bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "How We Work", title: "A six-step journey to your forever film" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
      /* @__PURE__ */ jsx("ol", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8", children: steps.map((s) => /* @__PURE__ */ jsxs("li", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto h-16 w-16 rounded-full bg-background border border-gold/40 flex items-center justify-center font-display text-xl text-gradient-gold", children: s.n }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl text-charcoal", children: s.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-charcoal/65", children: s.d })
      ] }, s.n)) })
    ] })
  ] }) });
}
const packages = [
  {
    name: "Silver",
    tag: "Wedding Photography",
    features: ["Full-day photography coverage", "2 professional photographers", "300+ edited high-res images", "Online private gallery", "Delivery within 30 days"]
  },
  {
    name: "Gold",
    tag: "Photography + Cinematic Video",
    featured: true,
    features: ["Everything in Silver", "Cinematic wedding film (4–6 min)", "Highlight reel + full ceremony video", "Drone coverage (where permitted)", "Premium colour grading"]
  },
  {
    name: "Platinum",
    tag: "Full Luxury Coverage",
    features: ["Everything in Gold", "Multi-day event coverage", "Feature-length wedding film", "Premium hand-bound album", "Pre-wedding shoot included"]
  }
];
function Packages() {
  return /* @__PURE__ */ jsx("section", { className: "py-28 md:py-36 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Investment",
        title: "Packages designed for every kind of love story",
        subtitle: "Tailored collections, never one-size-fits-all. Custom quotes available on request."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-6", children: packages.map((p) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `relative p-10 border transition-all duration-500 ${p.featured ? "border-gold bg-ivory shadow-[0_30px_60px_-30px_rgba(212,175,55,0.45)] md:-translate-y-4" : "border-border bg-background hover:border-gold/60"}`,
        children: [
          p.featured && /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] uppercase tracking-[0.3em] px-4 py-1.5", children: "Most Loved" }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.3em] text-gold", children: p.tag }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-5xl text-charcoal", children: p.name }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 h-px bg-gradient-to-r from-gold/60 via-border to-transparent" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-charcoal/80", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-gold mt-0.5 shrink-0", strokeWidth: 2 }),
            f
          ] }, f)) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#contact",
              className: `mt-10 inline-flex w-full justify-center px-6 py-4 text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 ${p.featured ? "bg-charcoal text-white hover:bg-gold" : "border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-white"}`,
              children: [
                "Inquire About ",
                p.name
              ]
            }
          )
        ]
      },
      p.name
    )) })
  ] }) });
}
const faqs = [
  { q: "How early should we book?", a: "We accept a limited number of weddings each year. Booking 6–12 months in advance is recommended, especially for peak season." },
  { q: "Do you cover destination weddings?", a: "Absolutely. We've filmed across India and overseas. Travel, accommodation and logistics are quoted transparently per destination." },
  { q: "What is the delivery timeline?", a: "Edited photographs are delivered within 30 days. Cinematic films are delivered within 60–90 days, depending on the package." },
  { q: "Do you offer album design?", a: "Yes — we design and print premium hand-bound albums with archival-grade paper, included in select packages." },
  { q: "Is drone coverage available?", a: "Yes, in venues where it is permitted. We handle the necessary permissions on your behalf." }
];
function FAQ() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "py-28 md:py-36 bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe max-w-4xl", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Frequently Asked", title: "Everything you need to know" }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 divide-y divide-border border-y border-border", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpen(isOpen ? null : i),
            className: "w-full flex items-center justify-between gap-6 py-6 text-left",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-lg md:text-xl text-charcoal", children: f.q }),
              /* @__PURE__ */ jsx("span", { className: "text-gold shrink-0", children: isOpen ? /* @__PURE__ */ jsx(Minus, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" }) })
            ]
          }
        ),
        isOpen && /* @__PURE__ */ jsx("p", { className: "pb-6 text-charcoal/70 leading-relaxed animate-fade-in", children: f.a })
      ] }, f.q);
    }) })
  ] }) });
}
function Contact() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-28 md:py-36 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Begin Your Story",
        title: "Let's design your forever film",
        subtitle: "Share a few details about your day — we'll respond within 24 hours."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.3em] text-gold", children: "Studio" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-2xl text-charcoal", children: "Satiz Photography" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-charcoal/70 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-1 text-gold" }),
            "Chennai, Tamil Nadu, India"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-charcoal/80", children: [
          /* @__PURE__ */ jsxs("a", { href: "tel:+910000000000", className: "flex items-center gap-3 hover:text-gold", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-gold" }),
            " +91 00000 00000"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:hello@satizphotography.com", className: "flex items-center gap-3 hover:text-gold", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-gold" }),
            " hello@satizphotography.com"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "https://wa.me/910000000000", className: "flex items-center gap-3 hover:text-gold", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4 text-gold" }),
            " WhatsApp Us"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden border border-border", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            title: "Satiz Photography location",
            src: "https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed",
            className: "h-full w-full grayscale-[40%]",
            loading: "lazy"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
          },
          className: "lg:col-span-3 bg-ivory p-8 md:p-12 grid sm:grid-cols-2 gap-5",
          children: [
            /* @__PURE__ */ jsx(Field, { label: "Name", name: "name" }),
            /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
            /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email" }),
            /* @__PURE__ */ jsx(Field, { label: "Event Type", name: "event", placeholder: "Wedding, Pre-Wedding…" }),
            /* @__PURE__ */ jsx(Field, { label: "Wedding Date", name: "date", type: "date" }),
            /* @__PURE__ */ jsx(Field, { label: "Location", name: "location" }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-[0.3em] text-charcoal/60", children: "Tell us about your day" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  rows: 4,
                  className: "mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-charcoal resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 flex flex-wrap gap-4 mt-4", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "bg-charcoal text-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold transition-colors duration-500",
                  children: sent ? "Thank You — We'll Be In Touch" : "Book Consultation"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://wa.me/910000000000",
                  className: "border border-charcoal/70 text-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-colors duration-500",
                  children: "WhatsApp Us"
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "text-[11px] uppercase tracking-[0.3em] text-charcoal/60", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: name,
        name,
        type,
        placeholder,
        className: "mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-charcoal placeholder:text-charcoal/35"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-charcoal text-white/80", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-luxe py-20 grid md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-display text-3xl text-white", children: [
          "Satiz",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: " Photography" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 italic text-white/60 max-w-sm", children: '"Turning Love Stories Into Timeless Films."' }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm max-w-sm text-white/60", children: "Luxury wedding photography and cinematic wedding films, based in Chennai — created for couples who want their story remembered the way it was lived." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex gap-3", children: [Instagram, Facebook, Youtube].map((Icon, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors",
            children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.3em] text-gold", children: "Explore" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3 text-sm", children: ["About", "Portfolio", "Wedding Films", "Services", "Reviews", "Contact"].map(
          (l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: `#${l.toLowerCase().replace(" ", "")}`,
              className: "text-white/70 hover:text-gold transition-colors",
              children: l
            }
          ) }, l)
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.3em] text-gold", children: "Newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-white/60", children: "New stories, films, and seasonal offers — straight to your inbox." }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: (e) => e.preventDefault(),
            className: "mt-5 flex border-b border-white/30 focus-within:border-gold",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  placeholder: "your@email.com",
                  className: "flex-1 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none"
                }
              ),
              /* @__PURE__ */ jsx("button", { className: "text-[11px] uppercase tracking-[0.3em] text-gold", children: "Join" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "container-luxe py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/50 tracking-wider", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2026 Satiz Photography. All Rights Reserved." }),
      /* @__PURE__ */ jsx("p", { children: "Crafted with love, in Chennai." })
    ] }) })
  ] });
}
function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "fixed right-5 bottom-5 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/910000000000",
        "aria-label": "WhatsApp",
        className: "h-12 w-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "tel:+910000000000",
        "aria-label": "Call",
        className: "h-12 w-12 rounded-full bg-gold text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" })
      }
    ),
    show && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "Scroll to top",
        className: "h-12 w-12 rounded-full bg-charcoal text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-fade-in",
        children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5" })
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background text-charcoal", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Portfolio, {}),
      /* @__PURE__ */ jsx(Films, {}),
      /* @__PURE__ */ jsx(WhyChoose, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(Packages, {}),
      /* @__PURE__ */ jsx(FAQ, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingActions, {})
  ] });
}
export {
  Index as component
};
