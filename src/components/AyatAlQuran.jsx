import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: false, amount: 0.3 },
};

export function AyatQuran() {
  const [ayat, setAyat] = useState(null);

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat/30")
      .then((response) => response.json())
      .then((result) => {
        setAyat(result.data.ayat[20]);
      })
      .catch((error) => {
        console.error("Gagal ambil data:", error);
      });
  }, []);

  return (
    <section className="ayat-section">
      <div className="ayat-container">
        {ayat ? (
          <>
            <div className="arab-latin">
              <motion.p {...fadeUp} className="arab">
                {ayat.teksArab}
              </motion.p>
              <motion.p {...fadeUp} className="latin">
                {ayat.teksLatin}
              </motion.p>
            </div>
            <motion.p {...fadeUp} className="terjemahan">
              "{ayat.teksIndonesia}"
            </motion.p>
          </>
        ) : (
          <p>Memuat ayat...</p>
        )}
        <motion.p {...fadeUp} className="ayat-info">
          Ar Rum 30:21
        </motion.p>
      </div>
    </section>
  );
}
