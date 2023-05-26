async function fetchCovid() {
  const r = await fetch("https://disease.sh/v3/covid-19/countries/brazil");
  const json = await r.json();
  handleDadoBrazil(json);
}
fetchCovid();

function isDados(dados: unknown): dados is Dados {
  if (
    dados &&
    typeof dados === "object" &&
    "cases" in dados &&
    "todayCases" in dados &&
    "recovered" in dados &&
    "deaths" in dados
  ) {
    return true;
  } else {
    return false;
  }
}

export default function handleDadoBrazil(data: Dados) {
  const brazilData = document.querySelector(".brazilData");

  if (isDados(data) && brazilData) {
    brazilData.innerHTML += `
    <div>
      <h1>Dados da Covid no Brasil:</h1>
      <p>Casos: ${data.cases}</p>
      <p>Mortes: ${data.deaths}</p>
      <p>Casos Recuperados: ${data.recovered}</p>
      <p>Casos no Dia de Hoje: ${data.todayCases}</p>
    </div>
  `;
  }
}
