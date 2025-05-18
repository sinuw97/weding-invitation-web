import { useRouter } from "next/router";
import { useState } from "react";
import HeroSection from "./HeroSection";
import PasutriSection from "./PasutriSection";
import Decoration from "./Decoration";
import AcaraSection from "./AcaraSection";
import { RSVPForm } from "./RSVPForm";
import { Gallery } from "./Gallery";
import Footer from "./Footer";

export default function InvitationPage({ variant }) {
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
