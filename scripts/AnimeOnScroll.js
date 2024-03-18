export default class AnimeOnScroll {
  constructor() {
    this.init();
  }

  init() {
    const elementosParaAnimar = document.querySelectorAll(
      "#inicio .container, #principais .container, #projetos .container, #outros .container, #contato .container, #sobre .container",
    );

    const observador = new IntersectionObserver(
      this.animarElementos.bind(this),
      { threshold: 0.2 },
    );

    elementosParaAnimar.forEach((elemento) => {
      elemento.style.opacity = "0";
      observador.observe(elemento);
    });
  }

  animarElementos(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.classList.add("animado");
        observer.unobserve(entry.target);
      }
    });
  }
}
