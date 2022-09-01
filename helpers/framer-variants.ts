export const navVariant = {
  hidden: { y: -4, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
  exit: { y: -4, opacity: 0, transition: { duration: 0.2 } },
};

export const hamburgerMenuVariant = {
  top: {
    opened: {
      rotate: 45,
      translateY: 6,
    },
    closed: {
      rotate: 0,
      translateY: 0,
    },
  },
  middle: {
    opened: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  },
  bottom: {
    opened: {
      rotate: -45,
      translateY: -6,
    },
    closed: {
      rotate: 0,
      translateY: 0,
    },
  },
};

export const serviceCardVariant = {
  hidden: { y: 5, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { y: 5, opacity: 0, transition: { duration: 0.2 } },
};
