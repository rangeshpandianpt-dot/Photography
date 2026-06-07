import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Films } from "@/components/site/Films";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { Packages } from "@/components/site/Packages";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satiz Photography — Luxury Wedding Photography & Films, Chennai" },
      { name: "description", content: "13+ years, 400+ weddings. Cinematic wedding films & luxury photography across Chennai and beyond. Turning love stories into timeless memories." },
      { property: "og:title", content: "Satiz Photography — Luxury Wedding Photography Chennai" },
      { property: "og:description", content: "Cinematic wedding films & luxury photography. 13+ years, 400+ weddings captured." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Films />
        <WhyChoose />
        <Testimonials />
        <Process />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
