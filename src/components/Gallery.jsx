import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "./Carousel";

export function Gallery() {
  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.3 },
  };

  return (
    <section className="gallery-foto-section">
      <div className="bar-divider">
        <span className="line"></span>
        <h2>GALLERY</h2>
        <span className="line"></span>
      </div>

      {/* carousel */}
      <Carousel />

      {/* Gallery */}
      <div className="gallery-container">
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.1 }}
        >
          <Image
            className="prewed-img"
            src="/img/prewed/DSC_6323.webp"
            fill
            alt="gambar-prewed"
          />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.2 }}
        >
          <Image
            className="prewed-img"
            fill
            src="/img/prewed/DSC_6302.webp"
            alt="gambar-prewed"
          />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.3 }}
        >
          <Image
            className="prewed-img"
            fill
            src="/img/prewed/DSC_6295.webp"
            alt="gambar-prewed"
          />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.4 }}
        >
          <Image
            className="prewed-img"
            fill
            src="/img/prewed/DSC_6264.webp"
            alt="gambar-prewed"
          />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.5 }}
        >
          <Image
            className="prewed-img"
            fill
            src="/img/prewed/DSC_6283.webp"
            alt="gambar-prewed"
          />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.6 }}
        >
          <Image
            className="prewed-img"
            fill
            src="/img/prewed/DSC_6263.webp"
            alt="gambar-prewed"
          />
        </motion.div>
      </div>
    </section>
  );
}
