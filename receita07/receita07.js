let feriados = []
const carregarDiv = (fs) => {
    const div = document.getElementById("feriadosDiv");

    const itensHtml = fs.map(
        ({ date, name, type, weekday }) =>
            `<tr>
        <td>${date}</td>
        <td>${name}</td>
        <td>${type}</td>
        <td>${weekday}</td>
      </tr>`
    );

    div.innerHTML = `
    <table>
      <tr>
        <th>Data</th>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Dia da semana</th>
      </tr>
      ${itensHtml.join("\n")}
    </table>
  `;
};
async function carregarFeriados() {
    try {
        let res = await fetch("https://brasilapi.com.br/api/feriados/v1/2026")
        feriados = await res.json()
        carregarDiv(feriados)
    } catch (err) {
        document.getElementById("feriadosDiv").innerHTML = "Fudeu..."
    }

}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarFeriados())

