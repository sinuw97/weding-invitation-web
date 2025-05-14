import Link from "next/link";
import Countdown from "./Countdown";
import { FaLocationDot } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

const slideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

  const fadeInSlide = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.3 },
  };

const fadeInText = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export default function AcaraSection() {
  const weddingDay = new Date("2025-06-15T09:00:00+07:00");

  return (
    <div className="acara-section">
      <div className="wedding-day">
        <motion.h3 {...fadeInScale}>Sunday, 15 June 2025</motion.h3>
      </div>

      <motion.div className="bar-divider" {...fadeInSlide}>
        <span className="line"></span>
        <motion.h2 {...fadeInText}>THE WEDDING DAY</motion.h2>
        <span className="line"></span>
      </motion.div>
      {/* Countdown */}
      <Countdown targetData={weddingDay} />
      <div className="ceremony-reception-section">
        <motion.div className="ceremony__card" {...slideUp}>
          <div className="ceremony-date">
            <h3>15 June 2025 | 09:00 WIB</h3>
            <h1>Akad Nikah</h1>
          </div>
          <div className="ceremony-place">
            <p>
              <span className="gedung">Gedung Al Irsyad</span>
              <span className="alamat">
                Jl. Kapten Mulyadi No. 117, Surakarta
              </span>
            </p>
          </div>
          <button type="button" className="view-location">
            <div className="icon__text">
              <FaLocationDot /> Lihat Lokasi
            </div>
          </button>
        </motion.div>
        {/* Reception Card */}
        <motion.div className="reception__card" {...slideUp}>
          <div className="reception-date">
            <h3>15 June 2025 | 10:00 WIB</h3>
            <h1>Resepsi</h1>
          </div>
          <div className="reception-place">
            <p>
              <span className="gedung">Gedung Al Irsyad</span>
              <span className="alamat">
                Jl. Kapten Mulyadi No. 117, Surakarta
              </span>
            </p>
          </div>
          <button type="button" className="view-location">
            <div className="icon__text">
              <FaLocationDot /> Lihat Lokasi
            </div>
          </button>
        </motion.div>
      </div>
      <motion.div className="bar-divider" {...fadeInSlide}>
        <span className="line"></span>
        <motion.h2 {...fadeInText}>LOCATION</motion.h2>
        <span className="line"></span>
      </motion.div>
      <div className="gmaps-section">
        <div className="gmaps__container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0026089686176!2d110.8302118741861!3d-7.574692774821506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1794ef66a5ff%3A0xe17e9199a4a07f4d!2sGedung%20Al%20Irsyad%20Surakarta!5e0!3m2!1sen!2sid!4v1746791646446!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
        <motion.div className="gmaps__info" {...fadeInScale}>
          <h1>Gedung Al Irsyad</h1>
          <p>Jl. Kapten Mulyadi No.117, Kedung Lumbu, Surakarta</p>
          <button type="button" className="view-location">
            <div className="icon__text">
              <SiGooglemaps />
              <Link href="https://maps.app.goo.gl/qyjue2BJ8X5SNWqb9">
                Buka Maps
              </Link>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
