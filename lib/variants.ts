type Direction = "left" | "right" | "up" | "down";

export const fadeIn = (direction: Direction = "left", delay = 0) => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -80;
      break;
    case "right":
      x = 80;
      break;
    case "up":
      y = -80;
      break;
    case "down":
      y = 80;
      break;
  }

  return {
    hidden: {
      x,
      y,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerVariants = (
  staggerDelay: number = 0.25,
  childrenDelay: number = 0.1
) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childrenDelay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
      duration: 0.4,
    },
  };
};
