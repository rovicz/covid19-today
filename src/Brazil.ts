async function fetchCovid() {
  const r = await fetch("https://disease.sh/v3/covid-19/countries/brazil");
  const json = await r.json();
  handleDadoBrazil(json);
}
fetchCovid();

interface Dados {
  cases: number;
  todayCases: number;
  deaths: number;
  recovered: number;
}

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
