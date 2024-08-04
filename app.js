gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

const cards = document.querySelectorAll('.card');


cards.forEach((card) => {
 
  const tween = gsap.to(card, {
    scale: 1.1,
    duration: 0.3,
    transfrom: rotate3d(1,1,0,20),
    ease: 'power2.inOut',
    paused: true,
  });


  card.addEventListener('mouseenter', () => {
    tween.play(); 
  });

  card.addEventListener('mouseleave', () => {
    tween.reverse(); 
  });
});
gsap.from("#colon-1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon-2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
