import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28 md:py-36 bg-background">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Begin Your Story"
          title="Let's design your forever film"
          subtitle="Share a few details about your day — we'll respond within 24 hours."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Studio</p>
              <p className="mt-3 font-display text-2xl text-charcoal">
                Satiz Photography
              </p>
              <p className="mt-2 text-charcoal/70 flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-gold" />
                Chennai, Tamil Nadu, India
              </p>
            </div>
            <div className="space-y-3 text-charcoal/80">
              <a href="tel:+910000000000" className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> +91 00000 00000
              </a>
              <a href="mailto:hello@satizphotography.com" className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> hello@satizphotography.com
              </a>
              <a href="https://wa.me/910000000000" className="flex items-center gap-3 hover:text-gold">
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp Us
              </a>
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="Satiz Photography location"
                src="https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed"
                className="h-full w-full grayscale-[40%]"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-3 bg-ivory p-8 md:p-12 grid sm:grid-cols-2 gap-5"
          >
            <Field label="Name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Email" name="email" type="email" />
            <Field label="Event Type" name="event" placeholder="Wedding, Pre-Wedding…" />
            <Field label="Wedding Date" name="date" type="date" />
            <Field label="Location" name="location" />
            <div className="sm:col-span-2">
              <label className="text-[11px] uppercase tracking-[0.3em] text-charcoal/60">
                Tell us about your day
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-charcoal resize-none"
              />
            </div>
            <div className="sm:col-span-2 flex flex-wrap gap-4 mt-4">
              <button
                type="submit"
                className="bg-charcoal text-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold transition-colors duration-500"
              >
                {sent ? "Thank You — We'll Be In Touch" : "Book Consultation"}
              </button>
              <a
                href="https://wa.me/910000000000"
                className="border border-charcoal/70 text-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-colors duration-500"
              >
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.3em] text-charcoal/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-charcoal placeholder:text-charcoal/35"
      />
    </div>
  );
}