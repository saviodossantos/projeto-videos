let relatorioChamadas = [
    '{"nomeCliente":["Luiz","Grazielle","Silvio"],"assuntoCliente":["Conta bloqueada","Troca de senha","MEU PC ESTÁ COM VÍRUS"],"emailCliente":["teste@email.com","teste1@email.com","teste2@email.com"],"telefoneCliente":["2199999-9999","2198888-8888","5397777-7777"]}'
]




let relatorioChamadasJSON = JSON.parse(relatorioChamadas)

let listaRelatorioChamadas = document.querySelector("#listaRelatorioChamadas")
let assuntoCliente = document.querySelector("#assuntoCliente")
let nomeCliente = document.querySelector("#nomeCliente")
let emailCliente = document.querySelector("#emailCliente")
let telefoneCliente = document.querySelector("#telefoneCliente")


// for (var i = 0; i < relatorioChamadasJSON.nomeCliente.length; i++) {
//     let tbody = document.querySelector("#relatorioChamadasBody")
//     var tr = document.createElement('tr')

//     tr.innerHTML += '<td style="vertical-align:unset;">' + relatorioChamadasJSON.nomeCliente[i] + '</td>'
//     tr.innerHTML += '<td style="vertical-align:unset;">' + relatorioChamadasJSON.assuntoCliente[i] + '</td>'
//     tr.innerHTML += '<td style="vertical-align:unset;">' + relatorioChamadasJSON.emailCliente[i] + '</td>'
//     tr.innerHTML += '<td style="vertical-align:unset;">' + relatorioChamadasJSON.telefoneCliente[i] + '</td>'

//     tbody.appendChild(tr)
//     listaRelatorioChamadas.appendChild(tbody)
    
// }

let chamadasAtendidas = document.querySelector("#chamadasAtendidas")
let totalChamadasAtendidas = document.querySelector("#totalChamadasAtendidas")

let chamadasPendentes = document.querySelector("#chamadasPendentes")
let totalChamadasPendentes = document.querySelector("#totalChamadasPendentes")

chamadasAtendidas.innerHTML = parseInt(relatorioChamadasJSON.nomeCliente.length)
totalChamadasAtendidas.innerHTML = parseInt(relatorioChamadasJSON.nomeCliente.length)

chamadasPendentes.innerHTML = parseInt(relatorioChamadasJSON.nomeCliente.length)
totalChamadasPendentes.innerHTML = parseInt(relatorioChamadasJSON.nomeCliente.length)


//proximo atendimento
let proximoCliente = document.querySelector("#proximoCliente")
let confirmarAtendimento = document.querySelector("#confirmarAtendimento")
let darBaixa = document.querySelector("#darBaixa")



