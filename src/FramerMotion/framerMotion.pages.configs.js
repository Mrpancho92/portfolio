export const defaultSlide = {
  hidden: { opacity: 0, x: '10vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'Tween',
      duration: 0.5,
    },
  },

  exit: {
    opacity: 0,
    x: '-10vw',
    transition: {
      type: 'Tween',
      duration: 0.5,
    },
  },
};
