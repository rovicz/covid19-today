import handleDadoBrazil from "./Brazil.js";
import handleDados from "./World.js";

handleDados;
handleDadoBrazil;

const brazilButton = <HTMLElement>document.querySelector("#brazil");
const worldButton = <HTMLElement>document.querySelector("#world");
const brazilData = <HTMLElement>document.querySelector(".brazilData");
const worldData = <HTMLElement>document.querySelector(".worldData");

function toogleData(event: Event) {
  event.preventDefault();

  if (brazilData.classList.contains("ativo")) {
    brazilData.classList.remove("ativo");
  } else if (!brazilData.classList.contains("ativo")) {
    brazilData.classList.add("ativo");
  }

  if (worldData.classList.contains("ativo")) {
    worldData.classList.remove("ativo");
  } else if (!worldData.classList.contains("ativo")) {
    worldData.classList.add("ativo");
  }
}

brazilButton?.addEventListener("click", toogleData);
worldButton?.addEventListener("click", toogleData);
