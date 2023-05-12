async function fetchCovid() {
    const r = await fetch("https://disease.sh/v3/covid-19/countries/brazil");
    const json = await r.json();
    handleDadoBrazil(json);
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
export default function handleDadoBrazil(data) {
    if (isDados(data)) {
        document.body.innerHTML += `
    <div>
      <h1>Dados da Covid no Brasil:</h1>
      <p>Casos: ${data.cases}</p>
      <p>Casos no Dia de Hoje: ${data.todayCases}</p>
      <p>Casos Recuperados: ${data.recovered}</p>
      <p>Mortes: ${data.deaths}</p>
    </div>
  `;
    }
}
//# sourceMappingURL=Brazil.js.map