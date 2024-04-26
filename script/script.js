/*-- ---------- Scroll Event -------------------- --*/
let minuteur;
let body = document.querySelector("body");

window.addEventListener('scroll', () => {
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

gsap.registerPlugin(ScrollTrigger);

/*-- ---------- CHAP1 Animation de la spirale -------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chap1`
    }
  })
  .fromTo(`#spirale_container #spritesheet_spirale`, { scale: 1, duration: 1 }, { scale: 5, duration: 2 })
  .to(`#chap1 .texte`, { opacity: 0, duration: 5}, '<')

/*-- ---------- CHAP2 Animation du paysage -------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chap2`
    }
  })
  .fromTo(`#montagne`, { y: `-200%`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(`#chaise`, { y: `-200%`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(`#h-assit`, { y: `-200%`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo('#chap2 .texte', { opacity: 0, duration: 2}, { opacity: 1, duration: 2})

/*-- ---------- CHAP3 Animation du texte -------------------- --*/
gsap
.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    trigger: `#chap3`
  }
})
.fromTo(`#chap3 .texte p:nth-child(1)`, { opacity: 0, duration: 2 }, { opacity: 1, duration: 2 })
.fromTo(`.oeil_container.un`, { opacity: 1, duration: 1 }, { opacity: 0, duration: 1 }, '<')
.fromTo(`#chap3 .texte p:nth-child(2)`, { opacity: 0, duration: 2 }, { opacity: 1, duration: 2 })
.fromTo(`.oeil_container.deux`, { opacity: 1, duration: 1 }, { opacity: 0, duration: 1 }, '<')
.fromTo(`#chap3 .texte p:nth-child(3)`, { opacity: 0, duration: 2 }, { opacity: 1, duration: 2 })
.fromTo(`.oeil_container.trois`, { opacity: 1, duration: 1 }, { opacity: 0, duration: 1 }, '<')
.to(`#chap3 .texte`, { opacity: 0, duration: 2 }, '+=2')

/*-- ---------- CHAP4 Animation des visages -------------------- --*/
gsap
.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    trigger: `#chap4`
  }
})
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
.from(`#chap4 .texte`, { opacity: 0, duration: 3 })

/*-- ---------- CHAP5 Animation de l'homme qui tombe -------------------- --*/
gsap
.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    trigger: `#chap5`
  }
})
.fromTo(`#h-tombe`, { y: `-200%`, duration: 1 }, { y: '150%', duration: 2 })
.from(`#chap5 .texte`, { opacity: 0, duration: 3 }, '<')
