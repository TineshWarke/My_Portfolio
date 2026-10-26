export const fadeInUP = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

export const revealOnce = { once: true, amount: 0.1 } as const;
