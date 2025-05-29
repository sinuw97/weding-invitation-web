import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import PasutriSection from "./PasutriSection";
import Decoration from "./Decoration";
import AcaraSection from "./AcaraSection";
import { RSVPForm } from "./RSVPForm";
import { Gallery } from "./Gallery";
import Footer from "./Footer";

export default function InvitationPage({ variant, data }) {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const { to } = router.query;

  const audioRef = useRef(null);

  const handlerOpenInvitation = () => {
    setIsOpened(true);
    setIsMusicPlaying(true);

    setTimeout(() => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback failed:", error);
          });
        }
      }
    }, 0);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
      } else if (!document.hidden && audioRef.current && isMusicPlaying) {
        audioRef.current.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.addEventListener("visibilitychange", handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isMusicPlaying]);

  return (
    <>
      {!isOpened && (
        <HeroSection
          name={to}
          onOpen={handlerOpenInvitation}
          date={data.date}
          time={data.time}
          pasutriName={data.pasutriName}
        />
      )}

      {isOpened && (
        <>
          <main>
            <PasutriSection
              acara={data.acara}
              variant={variant}
            />
            <audio
              ref={audioRef}
              src={
                variant === "dianita"
                  ? "/audio/Enchanted.mp3"
                  : "/audio/Teman-Hidup.mp3"
              }
              loop
              preload="auto"
              style={{ display: "none" }}
            />
            <Decoration />
            <section className="place-timeline-section">
              <AcaraSection
                countdownDate={data.countdownDate}
                showCards={data.cards}
                weddingDay={data.weddingDay}
                weddingAddress={data.weddingAddress}
                weddingCeremony={data.weddingCeremony}
                weddingReception={data.weddingReception}
                weddingGmaps={data.weddingGmaps}
                gmapFrame={data.gmapFrame}
                weddingPlace={data.weddingPlace}
              />
            </section>
            <RSVPForm
              withButton={data.withButton}
              bankName={data.bankName}
              logoBank={data.logoBank}
              noRek={data.noRek}
              logoGopay={data.logoGopay}
              noHp={data.noHp}
              namaPemilik={data.namaPemilik}
              alamat={data.alamat}
            />
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
