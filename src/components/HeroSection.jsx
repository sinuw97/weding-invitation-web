import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

export default function HeroSection({ name, onOpen, date, time }) {
  return (
    <header>
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-section__wrapper">
          <div className="hero-section__text-box">
            <p className="guest-name">{name || "Anda"}</p>
            <motion.h3 {...fadeUp}>You're Invited to Our Wedding</motion.h3>
            <div className="hero-section__name-box">
              <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }}>
                Dianita & Wahyu
              </motion.h1>
            </div>

            <div className="date-time">
              <p id="date_time">Date & Time</p>
              <span id="date">
                {date} <br /> {time} WIB
              </span>
            </div>

            {/* Btn music dan pindah halaman */}
            <motion.div
              className="hero-section__button"
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="btn-next-page ">
                <button onClick={onOpen}>Buka Undangan</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </header>
  );
}
