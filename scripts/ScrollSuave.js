export default class ScrollSuave {
  constructor() {
    this.nav = document.querySelectorAll("#navegacao a");
    this.adicionarEventos = this.adicionarEventos.bind(this);
  }

  scrollSuave(id) {
    const itemScroll = document.querySelector(id);
    itemScroll.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  adicionarEventos() {
    this.nav.forEach((i) =>
      i.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        this.scrollSuave(e.target.hash);
      }),
    );
  }

  init() {
    this.adicionarEventos();
  }
}
