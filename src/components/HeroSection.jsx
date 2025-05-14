import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { AyatQuran } from "./AyatAlQuran";
import Decoration from "./Decoration";
import { useRouter } from "next/router";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: false, amount: 0.3 },
};

const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: false, amount: 0.3 },
};

const fadeRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export default function HeroSection({ name }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <header>
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-section__wrapper">
          <div className="hero-section__text-box">
            <p>{name}</p>
            <motion.h3 {...fadeUp}>You're Invited to Our Wedding</motion.h3>
            <div className="hero-section__name-box">
              <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }}>
                Dianita & Wahyu
              </motion.h1>
            </div>

            <div className="date-time">
              <p
                id="date_time"
              >
                Date & Time
              </p>
              <span
                id="date"
              >
                15 June 2025 <br /> 10:00 WIB
              </span>
            </div>

            <div
              className="hero-section__button"
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button aria-label="Save the Date">Save the date</button>
            </div>
          </div>
          {/* Button with icon */}
          <div className="music-section">
            <button onClick={toggleMusic}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <audio
              ref={audioRef}
              src="/audio/Enchanted.mp3"
              type="audio/mpeg"
              preload="auto"
              loop
              controlsList="nodownload"
              style={{ display: "hidden" }}
            />

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0.5"
              onChange={(e) => {
                const vol = parseFloat(e.target.value);
                if (audioRef.current) audioRef.current.volume = vol;
              }}
              className="slider-volume"
            />
          </div>
        </div>
      </section>

      {/* Section nama pengantin dan foto */}
      <section className="pasutri-section">
        {/* Foto dan Nama Bride */}
        <motion.div className="foto bride-photo" {...fadeLeft} />
        <motion.div
          className="text bride-text"
          {...fadeLeft}
          transition={{ delay: 0.2 }}
        >
          <h3>Dianita Agna P. A.Md.Keb</h3>
          <p>The Bride</p>
        </motion.div>

        {/* Teks dan Foto Groom */}
        <motion.div className="text groom-text" {...fadeRight}>
          <h3>Wahyu Utomo S.E</h3>
          <p id="groom">The Groom</p>
        </motion.div>
        <motion.div
          className="foto groom-photo"
          {...fadeRight}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        />
      </section>
      <Decoration />
      <AyatQuran />
    </header>
  );
}
