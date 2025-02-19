import anime from "animejs/lib/anime.es.js";

import { AdviceBlock } from "./classes";

const win = new AdviceBlock(".advice");
const button = document.querySelector(".next-advice");

button.addEventListener("click", changeAdvice);

function changeAdvice() {
  win.setData("https://api.adviceslip.com/advice");
  anime({
    targets: button.querySelector("img"),
    disabled: true,
    rotateZ: 360,
    duration: 550,
    direction: "alternate",
    easing: "easeInQuad",
  });
  this.disabled = false;
}
