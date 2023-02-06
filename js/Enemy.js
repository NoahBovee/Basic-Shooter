class Enemy {
  constructor() {
    this.ref = this.init(); // ref om te stylen? this.ref = enemy
    this.styling();
    this.events();
    this.value = Math.floor(Math.random() * 11); // genereerd getal van 0-10 (denk ik)
    this.killEvent = new CustomEvent("kill", {
      detail: this.value, // geeft value mee aan enemy wanneer hij gedood word, denk aan coins dat hij loslaat
    }); // zeer cool
  }
  init() {
    document.body.insertAdjacentHTML("afterbegin", `<div class="enemy"></div>`);
    return document.querySelector(".enemy");
  }
  styling() {
    this.ref.style.left =
      Math.floor(Math.random() * (window.innerWidth - 100 + 1)) + "px"; //window.innerwith om breedte van scherm op te vragen, +1 om tot en met 500 te gaan
    this.ref.style.top =
      Math.floor(Math.random() * (window.innerHeight - 100 + 1)) + "px";
  }
  events() {
    this.ref.onclick = (e) => {
      // bij events altijd arrow function, anders spreekt het iets anders aan
      console.log(e.target);
      this.ref.style.display = "none";
      window.dispatchEvent(this.killEvent);
    };
  }
}

export default Enemy;
