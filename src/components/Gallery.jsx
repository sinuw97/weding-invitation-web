import { motion } from "framer-motion";

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
      <div className="gallery-container">
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.1 }}
        >
          <img src="/img/prewed/DSC_6323.jpg" alt="test" />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.2 }}
        >
          <img src="/img/prewed/DSC_6302.jpg" alt="test" />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.3 }}
        >
          <img src="/img/prewed/DSC_6295.jpg" alt="test" />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.4 }}
        >
          <img src="/img/prewed/DSC_6264.jpg" alt="test" />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.5 }}
        >
          <img src="/img/prewed/DSC_6283.jpg" alt="test" />
        </motion.div>
        <motion.div
          className="prewed"
          {...fadeInScale}
          transition={{ delay: 0.6 }}
        >
          <img src="/img/prewed/DSC_6263.jpg" alt="test" />
        </motion.div>
      </div>
    </section>
  );
}
