export default class Carrossel {
  constructor(elemento) {
    this.carrossel = document.getElementById("carrossel");
    this.style = window.getComputedStyle(this.carrossel);
    this.gap = this.style.getPropertyValue("gap");
    this.autoScroll;
    this.passarCarrossel = this.passarCarrossel.bind(this);
  }

  passarCarrossel() {
    const marginLeft = parseFloat(this.style.getPropertyValue("margin-left"));
    const saiuTela = this.carrossel.firstElementChild;

    this.carrossel.style.marginLeft = marginLeft - 1 + "px";

    if (saiuTela.getBoundingClientRect().right < 0) {
      saiuTela.remove();
      this.carrossel.appendChild(saiuTela);
      this.carrossel.style.marginLeft = this.gap;
    }
  }

  init() {
    if(window.innerWidth > 570) {
      this.autoScroll = setInterval(this.passarCarrossel, 10);
    } else {
      this.autoScroll = setInterval(this.passarCarrossel, 5);
    }
  }
}
