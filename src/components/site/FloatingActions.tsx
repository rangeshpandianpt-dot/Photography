import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/910000000000"
        aria-label="WhatsApp"
        className="h-12 w-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+910000000000"
        aria-label="Call"
        className="h-12 w-12 rounded-full bg-gold text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="h-12 w-12 rounded-full bg-charcoal text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-fade-in"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}