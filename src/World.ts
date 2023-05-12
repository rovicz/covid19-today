async function fetchCovid() {
  const r = await fetch("https://disease.sh/v3/covid-19/all");
  const json = await r.json();
  handleDados(json);
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

export default function handleDados(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isDados).forEach((item) => {
      document.body.innerHTML += `
        <div>
          <h1>Dados da Covid no Mundo:</h1>
          <p>Casos: ${item.cases}</p>
          <p>Casos no Dia de Hoje: ${item.todayCases}</p>
          <p>Casos Recuperados: ${item.recovered}</p>
          <p>Mortes: ${item.deaths}</p>
        </div>
      `;
    });
  }
  console.log(data);
}
