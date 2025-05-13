import { motion } from "framer-motion";

const slideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer__text" >
        <motion.h3 {...slideUp}>
          Semoga Allah SWT selalu melimpahkan keberkahan untuk kita semua.
          <br/>Terima kasih atas doa dan dukungannya.
        </motion.h3>
        <motion.div className="footer__gambar" {...fadeInScale}>
          <img src="/img/logo/daun.svg" alt="daun" />
        </motion.div>
        <motion.p {...slideUp}>Sampai jumpa di hari spesial kami!</motion.p>
      </div>
    </footer>
  );
}
