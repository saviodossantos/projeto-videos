let relatorioAluguel = [
    '{"cliente":["Luiz","Grazielle","Silvio","Teste"],"descricaoServico":["Premium","alguma coisa 2","alguma coisa 3","teste"],"valor":[10,20,30,40],"filmes":[1,2,3]}'
]
let relatorioAluguelJSON = JSON.parse(relatorioAluguel)

let listaRelatorioAssinantes = document.querySelector("#listaRelatorioAssinantes") //ainda fora de uso
let listaRelatorioAluguel = document.querySelector("#listaRelatorioAluguel")
let nomeClienteAluguel = document.querySelector("#nomeClienteAluguel")
let descricaoServicoAluguel = document.querySelector("#descricaoServicoAluguel")
let valorAluguel = document.querySelector("#valorAluguel")
let totalRelatorio = document.querySelector("#totalRelatorio")

for (var i = 0; i < relatorioAluguelJSON.cliente.length; i++) {
    let tbody = document.querySelector("#listaRelatorioAluguelBody")
    var tr = document.createElement('tr')

    tr.innerHTML += '<td style="vertical-align:unset;">' + relatorioAluguelJSON.cliente[i] + '</td>'
    tr.innerHTML += '<td style="vertical-align:unset;">' + relatorioAluguelJSON.descricaoServico[i] + '</td>'
    tr.innerHTML += '<td style="vertical-align:unset;">R$ ' + relatorioAluguelJSON.valor[i] + '</td>'

    tbody.appendChild(tr)
    listaRelatorioAluguel.appendChild(tbody)
    console.log(relatorioAluguelJSON[i])
    
}

totalRelatorio.innerHTML = parseInt(relatorioAluguelJSON.valor[0]) + parseInt(relatorioAluguelJSON.valor[1]) + parseInt(relatorioAluguelJSON.valor[2]) + parseInt(relatorioAluguelJSON.valor[3])



//visao macro
let totalAssinantes = document.querySelector("#totalAssinantes")
let totalAssinantesValor = document.querySelector("#totalAssinantesValor")
let totalAlugados = document.querySelector("#totalAlugados")
let totalAlugadosValor = document.querySelector("#totalAlugadosValor")
let mediaFilmesAlugados = document.querySelector("#mediaFilmesAlugados")

totalAssinantes.innerHTML += relatorioAluguelJSON.cliente.length

totalAssinantesValor.innerHTML = parseInt(relatorioAluguelJSON.valor[0]) + parseInt(relatorioAluguelJSON.valor[1]) + parseInt(relatorioAluguelJSON.valor[2])

totalAlugados.innerHTML = parseInt(relatorioAluguelJSON.filmes[0]) + parseInt(relatorioAluguelJSON.filmes[1]) + parseInt(relatorioAluguelJSON.filmes[2])

totalAlugadosValor.innerHTML = parseInt(relatorioAluguelJSON.valor[0]) + parseInt(relatorioAluguelJSON.valor[1]) + parseInt(relatorioAluguelJSON.valor[2]) + parseInt(relatorioAluguelJSON.valor[3])

mediaFilmesAlugados.innerHTML = (parseInt(relatorioAluguelJSON.filmes[0]) + parseInt(relatorioAluguelJSON.filmes[1]) + parseInt(relatorioAluguelJSON.filmes[2])) / relatorioAluguelJSON.cliente.length

console.log(relatorioAluguelJSON.filmes.length)
console.log(relatorioAluguelJSON.cliente.length)

