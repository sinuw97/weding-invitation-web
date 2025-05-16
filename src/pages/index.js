import AcaraSection from "@/components/AcaraSection";
import Decoration from "@/components/Decoration";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import PasutriSection from "@/components/PasutriSection";
import { RSVPForm } from "@/components/RSVPForm";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const { to } = router.query;

  const handlerOpenInvitation = () => {
    setIsOpened(true);
    setIsMusicPlaying(true);
  };

  return (
    <>
      {!isOpened && <HeroSection name={to} onOpen={handlerOpenInvitation} />}

      {isOpened && (
        <>
          <main>
            <PasutriSection />
            <audio
              src="/audio/Enchanted.mp3"
              autoPlay
              loop
              style={{ display: "none" }}
            />
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
      )}
    </>
  );
}
