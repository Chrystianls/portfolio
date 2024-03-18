import AbrirProjetos from "./scripts/AbrirProjetos.js";
import Carrossel from "./scripts/Carrossel.js";
import ScrollSuave from "./scripts/ScrollSuave.js";
import AnimeOnScroll from "./scripts/animeOnScroll.js";
import AbrirOutrosProjetos from "./scripts/AbrirOutrosProjetos.js";

const animeOnScroll = new AnimeOnScroll();
animeOnScroll.init();

const scrollSuave = new ScrollSuave();
scrollSuave.init();

const carrossel = new Carrossel();
carrossel.init(); 

const abrirProjetos = new AbrirProjetos();
abrirProjetos.init();

const abrirOutrosProjetos = new AbrirOutrosProjetos();
abrirOutrosProjetos.init();
