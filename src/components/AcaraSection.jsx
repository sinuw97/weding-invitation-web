import Link from "next/link";
import Countdown from "./Countdown";
import { IoLocationOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";
import {
  fadeInScale,
  fadeInSlide,
  fadeInText,
  slideUp,
} from "@/utils/animations";

export default function AcaraSection({
  countdownDate,
  showCards,
  weddingDay,
  weddingCeremony,
  weddingPlace,
  weddingAddress,
  weddingGmaps,
  weddingReception,
  gmapFrame,
}) {
  return (
    <div className="acara-section">
      <div className="wedding-day">
        <motion.h3 {...fadeInScale}>{weddingDay}</motion.h3>
      </div>

      <motion.div className="bar-divider" {...fadeInSlide}>
        <span className="line"></span>
        <motion.h2 {...fadeInText}>THE WEDDING DAY</motion.h2>
        <span className="line"></span>
      </motion.div>

      {/* Countdown */}
      <Countdown targetData={countdownDate} />

      {/* Acara */}
      <div className="ceremony-reception-section">
        {showCards === 2 && (
          <>
            {/* Akad Card */}
            <motion.div className="ceremony__card" {...slideUp}>
              <div className="ceremony-date">
                <h3>{weddingCeremony}</h3>
                <h1>Akad Nikah</h1>
              </div>
              <div className="ceremony-place">
                <p>
                  <span className="gedung">{weddingPlace}</span>
                  <span className="alamat">{weddingAddress}</span>
                </p>
              </div>
              <button type="button" className="view-location">
                <div className="icon__text">
                  <IoLocationOutline />
                  <Link href={weddingGmaps}>Lihat Lokasi</Link>
                </div>
              </button>
            </motion.div>
            {/* Reception Card */}
            <motion.div className="reception__card" {...slideUp}>
              <div className="reception-date">
                <h3>{weddingReception}</h3>
                <h1>Resepsi</h1>
              </div>
              <div className="reception-place">
                <p>
                  <span className="gedung">{weddingPlace}</span>
                  <span className="alamat">{weddingAddress}</span>
                </p>
              </div>
              <button
                type="button"
                className="view-location"
                href={weddingGmaps}
              >
                <div className="icon__text">
                  <IoLocationOutline />
                  <Link href={weddingGmaps}>Lihat Lokasi</Link>
                </div>
              </button>
            </motion.div>
          </>
        )}
        {showCards === 1 && (
          <motion.div className="reception__card" {...slideUp}>
            <div className="reception-date">
              <h3>{weddingReception}</h3>
              <h1>Ngunduh Mantu</h1>
            </div>
            <div className="reception-place">
              <p>
                <span className="gedung">{weddingPlace}</span>
                <span className="alamat">{weddingAddress}</span>
              </p>
            </div>
            <button type="button" className="view-location" href={weddingGmaps}>
              <div className="icon__text">
                <IoLocationOutline />
                <Link href={weddingGmaps}>Lihat Lokasi</Link>
              </div>
            </button>
          </motion.div>
        )}
      </div>

      <motion.div className="bar-divider" {...fadeInSlide}>
        <span className="line"></span>
        <motion.h2 {...fadeInText}>LOCATION</motion.h2>
        <span className="line"></span>
      </motion.div>

      {/* Maps */}
      <div className="gmaps-section">
        <div className="gmaps__container">
          <iframe
            src={gmapFrame}
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
        <motion.div className="gmaps__info" {...fadeInScale}>
          <h1>{weddingPlace}</h1>
          <p>{weddingAddress}</p>
          <button type="button" className="view-location">
            <div className="icon__text">
              <SiGooglemaps />
              <Link href={weddingGmaps}>Buka Maps</Link>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
