async function fetchCovid() {
    const r = await fetch("https://disease.sh/v3/covid-19/all");
    const json = await r.json();
    handleDados(json);
}
fetchCovid();
function isDados(dados) {
    if (dados &&
        typeof dados === "object" &&
        "cases" in dados &&
        "todayCases" in dados &&
        "recovered" in dados &&
        "deaths" in dados) {
        return true;
    }
    else {
        return false;
    }
}
export default function handleDados(data) {
    const worldData = document.querySelector(".worldData");
    if (isDados(data) && worldData) {
        worldData.innerHTML += `
    <div>
      <h1>Dados da Covid no Mundo:</h1>
      <p><span>Casos:</span> ${data.cases}</p>
      <p><span>Mortes:</span> ${data.deaths}</p>
      <p><span>Casos Recuperados:</span> ${data.recovered}</p>
      <p><span>Casos no dia de Hoje:</span> ${data.todayCases}</p>
    </div>
  `;
    }
}
//# sourceMappingURL=World.js.map