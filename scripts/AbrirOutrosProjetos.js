const outrosProjetosSrc = ["../assets/projetos/outros-projetos-1.jpg",
"../assets/projetos/outros-projetos-2.jpg",
"../assets/projetos/outros-projetos-3.jpg",
"../assets/projetos/outros-projetos-4.jpg",
"../assets/projetos/outros-projetos-5.png",
"../assets/projetos/outros-projetos-6.jpg",
"../assets/projetos/outros-projetos-7.jpg",
"../assets/projetos/outros-projetos-8.jpg",
"../assets/projetos/outros-projetos-9.jpg",
"../assets/projetos/outros-projetos-10.jpg",
"../assets/projetos/outros-projetos-11.jpg",
"../assets/projetos/outros-projetos-12.jpg"]

export default class AbrirOutrosProjetos {
  constructor() {
    this.srcProjetos = outrosProjetosSrc;
    this.modal = document.getElementById("outros-modal")
    this.imgsDiv = (document.getElementById("outros-projetos"))
    this.img = document.getElementById("img-modal");
    this.btnFecharModal = document.getElementById("fechar-modal");
  }

  fecharModal() {
    this.img.classList.remove("ativar");
    this.modal.classList.remove("ativar");
    this.btnFecharModal.classList.remove("ativar");
  }

  abrirModal({target}) {
    const indexImgClicada = Array.from(this.imgsDiv.children).indexOf(target);
    if(indexImgClicada >= 0) {
      this.modal.classList.add("ativar")
      this.img.setAttribute("src", this.srcProjetos[indexImgClicada]);
      this.img.classList.add("ativar");
      this.btnFecharModal.classList.add("ativar");
      this.modal.addEventListener("pointerdown", () => this.fecharModal())
      this.btnFecharModal.addEventListener("pointerdown", () => this.fecharModal())
    }
  }

  init() {
    this.imgsDiv.addEventListener("pointerdown", (e) => this.abrirModal(e));
  }
}