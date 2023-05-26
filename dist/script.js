import handleDadoBrazil from "./Brazil.js";
import handleDados from "./World.js";
handleDados;
handleDadoBrazil;
const brazilButton = document.querySelector("#brazil");
const worldButton = document.querySelector("#world");
const brazilData = document.querySelector(".brazilData");
const worldData = document.querySelector(".worldData");
function toogleDataBR(event) {
    event.preventDefault();
    if (brazilData.classList.contains("ativo")) {
        brazilData.classList.remove("ativo");
    }
    else if (!brazilData.classList.contains("ativo")) {
        brazilData.classList.add("ativo");
    }
}
function toogleDataWRLD(event) {
    event.preventDefault();
    if (worldData.classList.contains("ativo")) {
        worldData.classList.remove("ativo");
    }
    else {
        worldData.classList.add("ativo");
    }
}
brazilButton?.addEventListener("click", toogleDataBR);
worldButton?.addEventListener("click", toogleDataWRLD);
//# sourceMappingURL=script.js.map