import AcaraSection from "@/components/AcaraSection";
import Decoration from "@/components/Decoration";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import { RSVPForm } from "@/components/RSVPForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Decoration />
      <section className="place-timeline-section">
        <AcaraSection />
      </section>
      <RSVPForm />
      <Decoration />
      <Gallery />
      <Decoration />
      <Footer />
    </>
  )
}