import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-luxe py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-white">
            Satiz<span className="text-gradient-gold"> Photography</span>
          </p>
          <p className="mt-4 italic text-white/60 max-w-sm">
            "Turning Love Stories Into Timeless Films."
          </p>
          <p className="mt-8 text-sm max-w-sm text-white/60">
            Luxury wedding photography and cinematic wedding films, based in
            Chennai — created for couples who want their story remembered the way it
            was lived.
          </p>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {["About", "Portfolio", "Wedding Films", "Services", "Reviews", "Contact"].map(
              (l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "")}`}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Newsletter</p>
          <p className="mt-5 text-sm text-white/60">
            New stories, films, and seasonal offers — straight to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex border-b border-white/30 focus-within:border-gold"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none"
            />
            <button className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/50 tracking-wider">
          <p>© 2026 Satiz Photography. All Rights Reserved.</p>
          <p>Crafted with love, in Chennai.</p>
        </div>
      </div>
    </footer>
  );
}