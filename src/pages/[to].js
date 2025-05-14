import { useRouter } from "next/router";
import HeroSection from "../components/HeroSection";
import AcaraSection from "@/components/AcaraSection";
import Decoration from "@/components/Decoration";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { RSVPForm } from "@/components/RSVPForm";

export default function To() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <HeroSection name={name}/>
      <main>
        <Decoration />
        <section className="place-timeline-section">
          <AcaraSection />
        </section>
        <RSVPForm />
        <Decoration />
        <Gallery />
        <Decoration />
      </main>
      <Footer />
    </>
  );
}
