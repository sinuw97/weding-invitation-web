import { motion } from "framer-motion";

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export default function Decoration() {
  return (
    <div className="decoration border-none shadow-none ring-0">
      <motion.img
        src="/img/logo/rose-divider-2.svg"
        {...fadeInScale}
        alt="Divider"
      />
    </div>
  );
}

