export const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: false, amount: 0.3 },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: false, amount: 0.3 },
};

export const fadeRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export const slideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export const fadeInSlide = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export const fadeInText = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};
