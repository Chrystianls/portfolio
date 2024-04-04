import AbrirProjetos from "./scripts/AbrirProjetos.js";
import ScrollSuave from "./scripts/ScrollSuave.js";
import AnimeOnScroll from "./scripts/AnimeOnScroll.js";
import AbrirOutrosProjetos from "./scripts/AbrirOutrosProjetos.js";

const animeOnScroll = new AnimeOnScroll();
animeOnScroll.init(); 

const scrollSuave = new ScrollSuave();
scrollSuave.init();

function initSlider(e) {
  const btnProjetos = document.querySelectorAll("#carrossel div button");
  const carrossel = document.getElementById("carrossel")
  if(e.pointerType === "touch") {
    btnProjetos.forEach(btn => {
      btn.style.display = "block";
      carrossel.style.overflowX = "auto";
  });
  }
  removeEventListener("pointerdown", initSlider);
}
addEventListener("pointerdown", initSlider);

const abrirProjetos = new AbrirProjetos();
abrirProjetos.init();

const abrirOutrosProjetos = new AbrirOutrosProjetos();
abrirOutrosProjetos.init();
