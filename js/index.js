import Crosshair from "./Crosshair";
import Enemy from "./Enemy";
new Crosshair();

setInterval(function () {
  new Enemy();
}, 500);

window.addEventListener("kill", function () {
  document.body.style.backgroundColor = "red"; // als enemy word gekilled, zet achterground rood
  setTimeout(function () {
    document.body.style.backgroundColor = "black"; // na 50ms terug naar zwart
  }, 50);
});
