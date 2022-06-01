let carrinho = [ //alteracao no nome do produto
    '{"produto":["filme1","filme2","filme3"],"nome":["The Batman","Doutor Estranho: Multiverso da Loucura","Matrix 4"],"qtd":["1","1","1"],"preco":[20,30,10]}'
]
let carrinhoJSON = JSON.parse(carrinho)
let listaCarrinho = document.querySelector("#listaCarrinho")
let totalProdutos = document.querySelector("#totalProdutos")
let valor = document.querySelector("#valorTotal")
let conteudoCarrinho = document.querySelector("#conteudoCarrinho")

for (i = 0; i < carrinhoJSON.produto.length; i++) {
    var tr = document.createElement('tr')
    tr.id = "produto" + i //cada linha do carrinho pega um id produto + numero correspondente

    tr.innerHTML += '<td style="vertical-align:unset;"><img class="w-50 m-1 imagemCarrinho" src="../imgs/' + carrinhoJSON.produto[i] + '.jpeg"><p class="font-italic">' + carrinhoJSON.nome[i] + '</p></td>'
    tr.innerHTML += '<td style="vertical-align:unset;"><input class="form-control" id="qtdTelas' + carrinhoJSON.produto[i] + '" type="number" min="1" max="5" value="1"></td>' //id qtdTelas pegando o nome do produto
    tr.innerHTML += '<td style="vertical-align:unset;">' + carrinhoJSON.qtd[i] + '</td>'
    tr.innerHTML += '<td style="vertical-align:unset;">R$ ' + carrinhoJSON.preco[i] + '</td>'
    tr.innerHTML += '<td style="vertical-align:unset;"><button class="btn btn-sm btn-outline-danger" id="excluirProduto' + carrinhoJSON.produto[i] + '">Excluir</button></td>'

    conteudoCarrinho.appendChild(tr)
    totalProdutos.innerHTML = carrinhoJSON.produto.length

}

var val1 = carrinhoJSON.preco[0];
var val2 = carrinhoJSON.preco[1];
var val3 = carrinhoJSON.preco[2];
var valorTotal = parseInt(val1) + parseInt(val2) + parseInt(val3);
valor.innerHTML = valorTotal


let totalCarrinho = document.querySelector("#totalCarrinho")
var p = document.createElement("p")

totalCarrinho.className = "pt-3 pb-3 pl-4 pr-4 justify-content-between d-flex flex-row-reverse"
totalCarrinho.style.border = "1px solid white"
p.innerHTML = 'Total dos itens: R$ ' + valorTotal

totalCarrinho.appendChild(p)

let limparCarrinho = document.querySelector("#limparCarrinho")
let carrinhoVazio = document.querySelector("#carrinhoVazio")
carrinhoVazio.style.display = "none"
totalCarrinho.style.display = ""

limparCarrinho.onclick = function () {

    if (carrinhoJSON.produto.length > 0 && carrinhoVazio.style.display == "none") {

        for (var i = 0; i < carrinhoJSON.produto.length; i++) {
            document.querySelector("#conteudoCarrinho").innerHTML = ""

            carrinhoJSON.produto.shift()
            valor.innerHTML = "0"
            totalProdutos.innerHTML = "0"
        }

    }

    limparCarrinho.style.display = "none"
    carrinhoVazio.innerHTML = "O carrinho está vazio."
    carrinhoVazio.style.display = ""
    p.style.display = "none"

}

//cupom de desconto
var Cupom20 = "123"
var Cupom10 = "456"

var DESCONTO1 = ("20")
var DESCONTO2 = ("10")

let cupom = document.querySelector("#cupom")

let totalDesconto = document.querySelector("#totalDesconto")
totalDesconto.style.display = "none"
let totalDesconto2 = document.querySelector("#totalDesconto2")
totalDesconto2.style.display = "none"

let valor1 = document.querySelector("#TOTAL") // Cupom20
let valor2 = document.querySelector("#TOTAL2") // Cupom10

var PORCENTAGEM = parseInt((valorTotal * DESCONTO1) / 100);
var TOTAL = parseInt((valorTotal - PORCENTAGEM))
valor1.innerHTML = TOTAL

var PORCENTAGEM2 = parseInt((valorTotal * DESCONTO2) / 100);
var TOTAL2 = parseInt((valorTotal - PORCENTAGEM2))
valor2.innerHTML = TOTAL2

//botao calcular cupom
document.querySelector("#calcularCupom").onclick = function () {
    if (totalDesconto.style.display == "none" && totalDesconto2.style.display == "none") { //se o display do totalDesconto e totalDesconto2 for igual a none

        if (cupom.value == Cupom20) {
            alert("Você ganhou 20% de desconto.")
            totalDesconto.style.display = ""
        } else if (cupom.value == Cupom10) {
            alert("Você ganhou 10% de desconto.")
            totalDesconto2.style.display = ""
        } else {
            alert("Código incorreto ou expirado.")
        }

    } else {
        alert("Você já tem um desconto aplicado.")
    }

}


// excluir produto
for (i = 0; i < carrinhoJSON.produto.length; i++) {
    let excluirProduto = document.querySelector("#excluirProduto" + carrinhoJSON.produto[i])
    let tr = document.querySelector("#produto" + i)

    excluirProduto.onclick = function () {
        if (confirm("Deseja deletar esse produto?")) {
            if (excluirProduto[i] == tr[i]) {
                tr.innerHTML = ""
                totalProdutos.innerHTML = totalProdutos.innerHTML - 1
                console.log(carrinhoJSON.preco[0])
                
                valor.innerHTML = parseInt(valorTotal) - parseInt(carrinhoJSON.preco[i])
                
            }
            
        }
    }
    
    
    console.log(carrinhoJSON.preco[i])


}


//calcular porcentagem
function calcularPorcentagem() {
    for (i = 0; i < carrinhoJSON.produto.length; i++) {
        let qtdTelas = document.querySelector("#qtdTelas" + carrinhoJSON.produto[i])
        // let qtdTelasValue = document.querySelector(qtdTelas.value)

        let percent = 0.07

        let pct = (qtdTelas.value + carrinhoJSON.preco[0] * percent)
        let pct1 = (qtdTelas2.value * carrinhoJSON.preco[1] * 0.07)
        let pct2 = (qtdTelas3.value * carrinhoJSON.preco[2] * 0.07)
        let pctTotal = (qtdTelas.value * carrinhoJSON.preco[0] * 0.07) + (qtdTelas2.value * carrinhoJSON.preco[1] * 0.07) + (qtdTelas3.value * carrinhoJSON.preco[2] * 0.07)


        valor.innerHTML = pct + valorTotal
        console.log(qtdTelas)
        console.log(qtdTelas.value)
        qtdTelas.addEventListener('change', calcularPorcentagem)
    }
}


// lógica para cada value do id do input de qtdTelas ser impresso
for (i = 0; i < carrinhoJSON.produto.length; i++) {
    let qtdTelas = document.querySelector("#qtdTelas" + carrinhoJSON.produto[i])
    qtdTelas.addEventListener('change', calcularPorcentagem)
}


