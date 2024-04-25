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
