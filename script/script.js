/*-- ---------- Scroll Event -------------------- --*/
let minuteur;
let body = document.querySelector("body");

window.addEventListener("scroll", () => {
  clearTimeout(minuteur);
  body.classList.add("is-scrolling");

  minuteur = setTimeout(() => {
    body.classList.remove("is-scrolling");
  }, 100);
});

/*-- ---------- Animation du bouton defiler -------------------- --*/
gsap.set("#defiler", { opacity: 1 });
gsap.to("#defiler", { opacity: 0, repeat: -1, duration: 2 });

gsap.set("#defiler", { y: 0 });
gsap.to("#defiler", { y: "30px", repeat: -1, duration: 2 });

/*-- ---------- GSAP -------------------- --*/
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    ScrollTrigger,
    MotionPathPlugin,
    DrawSVGPlugin,
    MorphSVGPlugin
  );

  /*-- ---------- CHAP1 Animation de la spirale -------------------- --*/
  gsap
    .timeline({
      scrollTrigger: {
        pin: true,
        scrub: true,
        markers: false,
        trigger: `#chap1`,
      },
    })
    .fromTo(
      `#spritesheet_spirale`,
      { scale: 1, duration: 1 },
      { scale: 3, duration: 2 }
    )
    .to(`#chap1 .texte`, { opacity: 0, duration: 3 }, "<")
    .fromTo(`#ciel`, { opacity: 0, duration: 2 }, { opacity: 1, duration: 2 });

  /*-- ---------- CHAP2 Animation du paysage -------------------- --*/
   gsap
    .timeline({
      scrollTrigger: {
        pin: true,
        scrub: true,
        markers: false,
        trigger: `#chap2`,
      },
    })
    .fromTo(`#montagne`, { y: `-250%`, duration: 1 }, { y: 0, duration: 1 })
    .fromTo(`#nuage`, { x: `200%`, duration: 1 }, { x: 0, duration: 1 }, "<")
    .fromTo(`#chaise`, { y: `-250%`, duration: 1 }, { y: 0, duration: 1 })
    .fromTo(`#h-assit`, { y: `-250%`, duration: 1 }, { y: 0, duration: 1 })
    .fromTo(
      "#chap2 .texte",
      { opacity: 0, duration: 2 },
      { opacity: 1, duration: 2 },
      `<`
    );

  /* Effet Parallax */
  gsap.to("#chap2", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: "#chap2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });

  gsap.to("#paysage", {
    y: 0.8 * 100,
    ease: "none",
    scrollTrigger: {
      trigger: "#chap2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });

  gsap.to("#nuage", {
    y: 0.25 * 100,
    ease: "none",
    scrollTrigger: {
      trigger: "#chap2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });

  gsap.to("#chap2 .texte", {
    y: 0.25 * 100,
    ease: "none",
    scrollTrigger: {
      trigger: "#chap2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });

  /*-- ---------- CHAP3 Animation du texte et oeils -------------------- --*/
  gsap
    .timeline({
      scrollTrigger: {
        pin: true,
        scrub: true,
        markers: false,
        trigger: `#chap3`,
      },
    })
    .fromTo(
      `#chap3 .texte p:nth-child(1)`,
      { opacity: 0 },
      { opacity: 1, duration: 4 }
    )
    .fromTo(
      `#chap3 .texte p:nth-child(2)`,
      { opacity: 0 },
      { opacity: 1, duration: 4 }
    )
    .fromTo(
      `#chap3 .texte p:nth-child(3)`,
      { opacity: 0 },
      { opacity: 1, duration: 4 }
    )
    .to("#oeil", {
      morphSVG: "#larme",
      duration: 30,
    })
    .to("#morph", {
      y: "200%",
      duration: 20,
    })
    .to(
      ".oeil_container",
      {
        opacity: 0,
        duration: 10,
      },
      "<"
    )
    .to(
      "#chap3 .texte",
      {
        opacity: 0,
        duration: 10,
      },
      "<"
    );

  /*-- ---------- CHAP4 Animation des visages -------------------- --*/
  gsap
    .timeline({
      scrollTrigger: {
        pin: true,
        scrub: true,
        markers: false,
        trigger: `#chap4`,
      },
    })
    .from("#visage", { drawSVG: 0, duration: 20, ease: "none" })
    .from(`#visage2`, { opacity: 0, duration: 1 })
    .from(`#visage3`, { opacity: 0, duration: 1 })
    .from(`#visage4`, { opacity: 0, duration: 1 })
    .from(`#visage5`, { opacity: 0, duration: 1 })
    .from(`#visage6`, { opacity: 0, duration: 1 })
    .from(`#visage7`, { opacity: 0, duration: 1 })
    .from(`#visage8`, { opacity: 0, duration: 1 })
    .from(`#visage9`, { opacity: 0, duration: 1 })
    .from(`#visage10`, { opacity: 0, duration: 1 })
    .from(`#visage11`, { opacity: 0, duration: 1 })
    .from(`#visage12`, { opacity: 0, duration: 1 })
    .from(`#visage13`, { opacity: 0, duration: 1 })
    .from(`#visage14`, { opacity: 0, duration: 1 })
    .from(`#visage15`, { opacity: 0, duration: 1 })
    .from(`#visage16`, { opacity: 0, duration: 1 })
    .from(`#visage17`, { opacity: 0, duration: 1 })
    .from(`#visage18`, { opacity: 0, duration: 1 })
    .from(`#visage19`, { opacity: 0, duration: 1 })
    .from(`#visage20`, { opacity: 0, duration: 1 })
    .from(`#chap4 .texte`, { opacity: 0, duration: 3 });

  /*-- ---------- CHAP5 Animation de l'homme qui tombe -------------------- --*/
  gsap
    .timeline({
      scrollTrigger: {
        pin: true,
        scrub: true,
        markers: false,
        trigger: `#chap5`,
      },
    })
    .to(`#h-tombe`, { motionPath: "#descente", duration: 10 })
    .from(`#chap5 .texte`, { opacity: 0, duration: 3 }, "<");

  /*-- ---------- CHAP6 Animation du titre -------------------- --*/
  gsap.from("#chap6 .texte", {
    opacity: 0,
    scrollTrigger: {
      pin: true,
      markers: false,
      toggleActions: "restart complete reverse reset",
      trigger: "#chap6",
    },
  });

  gsap.from(".planete", {
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    x: 3.5,
    y: 2,
  });
});
