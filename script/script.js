/*----Scroll Event----*/
let minuteur;
let body = document.querySelector("body");

window.addEventListener('scroll', () => {
  clearTimeout(minuteur);
  body.classList.add("is-scrolling");

  minuteur = setTimeout(() => {
    body.classList.remove("is-scrolling");
  }, 100);
});

/*----Animation du bouton defiler----*/
gsap.set("#defiler", { opacity: 1 });
gsap.to("#defiler", { opacity: 0, repeat: -1, duration: 2 });

gsap.set("#defiler", { y: 0 });
gsap.to("#defiler", { y: "30px", repeat: -1, duration: 2 });
