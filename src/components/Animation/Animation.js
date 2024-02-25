export default function skillAnimation(width, color) {
  return {
    hidden: {
      width: "0%",
    },
    show: {
      width,
      backgroundColor: color,
      transition: {
        durtation: 2.5,
        ease: "easeOut",
        delay: 2,
      },
    },
  };
}

export const PageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.5,
    },
  },
};
export const LayerAnimation = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  exit: {
    y: "0%",
    opacity: 0,
    transition: { duration: 1, ease: "easeIn", delay: 0.5 }, // Add a delay of 0.5 seconds
  },
};
export const TitleAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const Fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
export const LineAnimation = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  show: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 0.75,
    },
  },
};

export const photoAnimation = {
  hidden: {
    scale: 1.5,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
};
