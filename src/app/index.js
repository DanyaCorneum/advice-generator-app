import { AdviceBlock } from "./classes";

const win = new AdviceBlock(".advice");
const button = document.querySelector(".next-advice");

button.addEventListener("click", changeAdvice);

function changeAdvice() {
  win.setData("https://api.adviceslip.com/advice");
}
