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

// export const defaultSlide = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       type: 'Tween',
//       duration: 0.3,
//     },
//   },

//   exit: {
//     opacity: 0,
//     transition: {
//       type: 'Tween',
//       duration: 0.3,
//     },
//   },
// };
