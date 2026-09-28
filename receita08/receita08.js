let feriados = []

const carregarDiv = (fs) => {
    const div = document.getElementById("feriadosDiv")

    const itensHtml = fs.map(
        ({ date, name, type, weekday }) =>
            `<tr>
                <td>${date}</td>
                <td>${name}</td>
                <td>${type}</td>
                <td>${weekday}</td>
            </tr>`
    )

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
    `
}

const carregarFeriados = () => {
    fetch("https://brasilapi.com.br/api/feriados/v1/2026")
        .then(res => res.json())
        .then(fs => {
            feriados = fs
            carregarDiv(feriados)
        })
        .catch(err => {
            document.getElementById("feriadosDiv").innerHTML = "Deu erro..."
        })
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarFeriados())

