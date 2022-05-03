
anime({
  targets: '.circle',
  translateX: 250,
  delay: anime.stagger(200, {start: 1000}),
  direction: "reverse",
  loop: true
});

// anime({
//   targets: '.circle',
//   keyframes: [
//     {translateY: -40},
//     {translateX: 250},
//     {translateY: 40},
//     {translateX: 0},
//     {translateY: 0}
//   ],
//   duration: 4000,
//   easing: 'easeOutElastic(1, .8)',
//   loop: true
// });
