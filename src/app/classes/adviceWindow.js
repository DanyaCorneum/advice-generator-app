export class AdviceBlock {
  constructor(selector) {
    this.block = document.querySelector(selector);
  }

  async getData(link) {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);
    return data;
  }

  drawData(dataAdvice) {
    const title = this.block.querySelector(".title");
    const text = this.block.querySelector(".text");
    text.innerText = dataAdvice.advice;
    title.innerHTML = `<h3> advice #${dataAdvice.id} </h3>`;
  }

  setData(link) {
    this.getData(link).then((resp) => this.drawData(resp.slip));
  }
}
