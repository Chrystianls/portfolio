export default class SliderProjetos {
  constructor() {
    this.container = document.getElementById("carrossel");
    this.imgs = document.querySelectorAll("#carrossel div");
    this.isDragging = false;
    this.xInitial = 0;
    this.xPrevious = 0;
    this.xMovement = 0;
    this.outsideLeft = false;
    this.outsideRight = false;
  }

  moveImgs = (e) => {
    if(!this.isDragging) return;
    const xCurrent = e.clientX;
    this.xMovement = xCurrent - this.xInitial;
    this.outsideLeft = false;
    this.outsideRight = false;
    const containerWidth = this.container.offsetWidth;
    const containerScrollWidth = this.container.scrollWidth;
    const containerScrollLeft = this.container.scrollLeft;

    if(this.container.offsetLeft > 0) {
      this.outsideLeft = true;
      return;
    } else if(containerWidth + containerScrollLeft >= containerScrollWidth) {
      this.outsideRight = true;
      return;
    }
    this.container.style.marginLeft = `${this.xPrevious + this.xMovement}px`;
  };

  init() {
    this.container.addEventListener("dragstart", (e) => e.preventDefault())
    this.container.addEventListener("mousedown", (e) => {
      this.xInitial = e.clientX;
      this.isDragging = true;
      this.container.addEventListener("mousemove", this.moveImgs);
    });
    
    this.container.addEventListener("mouseup", (e) => {
      this.isDragging = false;
      this.container.removeEventListener("mousemove", this.moveImgs);
      if(this.outsideLeft) {
        this.container.style.marginLeft = "0px"
        this.xPrevious = 0;
      } else if(this.outsideRight) {
        this.container.style.marginLeft = `${window.innerWidth - this.container.offsetWidth + 1}px`
        this.xPrevious = window.innerWidth - this.container.offsetWidth + 1;
      } else {
        this.xPrevious += this.xMovement;
      }
    });
    
    this.container.addEventListener("mouseleave", (e) => {
      this.isDragging = false;
      this.container.removeEventListener("mousemove", this.moveImgs);
      if(!this.outsideLeft) {
        this.container.style.marginLeft = "0px"
        this.xPrevious = 0;
      } else {
        this.xPrevious += this.xMovement;
      }
    });
  }
}


