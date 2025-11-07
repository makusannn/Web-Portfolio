export const fadeUp = {
  hidden: { opacity: 0, y: 80 }, // 👻 rises more dramatically
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }, // smooth + floaty
  },
};

export const fadeContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 }, // delay between each element
  },
};
