// jquery para excluir um item e limpar o carrinho inteiro 
$().ready(function () {
    $('.bt-limparCarrinho').click(function () {
        let dataid = $(this).attr('data-id')
        $.post("/delete-all-carrinho", {
            carrinho_id: dataid
        },
            function (data, status) {
                alert("Carrinho limpo com sucesso.")
                location.href = '/carrinho'
            }, 'json')
    })

    $('.btn-excluir').click(function () {
        let dataid = $(this).attr('data-id')

        $.post("/delete-carrinho", {
            carrinho_id: dataid
        },
            function (data, status) {
                alert("Filme removido do carrinho.")
                location.href = '/carrinho'
            }, 'json')
    })
})

// ======================================== fim do jquery ========================================

let carrinho = [
    '{"produto":["filme1","filme2","filme3"],"nome":["The Batman","Doutor Estranho: Multiverso da Loucura","Matrix 4"],"qtd":["1","1","1"],"preco":[20,30,10]}'
]
let carrinhoJSON = JSON.parse(carrinho)
let listaCarrinho = document.querySelector("#listaCarrinho")
let totalProdutos = document.querySelector("#totalProdutos")
let valor = document.querySelector("#valorTotal")
let conteudoCarrinho = document.querySelector("#conteudoCarrinho")



// var val1 = carrinhoJSON.preco[0];
// var val2 = carrinhoJSON.preco[1];
// var val3 = carrinhoJSON.preco[2];
// var valorTotal = parseInt(val1) + parseInt(val2) + parseInt(val3);
// valor.innerHTML = valorTotal


let totalCarrinho = document.querySelector("#totalCarrinho")
let totalItens = document.querySelector("#totalItens")
let totalItensResult = document.querySelector("#totalItensResult")
var p = document.createElement("p")

totalCarrinho.className = "pt-3 pb-3 pl-4 pr-4 justify-content-between d-flex "
totalCarrinho.style.border = "1px solid white"
// totalItensResult.innerHTML =  valorTotal

totalCarrinho.appendChild(p)

// limpar carrinho ======================================================
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
    totalItens.style.display = "none"
    totalItensResult.style.display = "none"

}

//cupom de desconto ======================================================
var Cupom20 = 123
var Cupom10 = "456"
var DESCONTO1 = ("20")
var DESCONTO2 = ("10")

let cupom = document.querySelector("#cupom")

let totalDesconto = document.querySelector("#totalDesconto")
totalDesconto.style.display = "none"
// let totalDesconto2 = document.querySelector("#totalDesconto2")
// totalDesconto2.style.display = "none"

let valor1 = document.querySelector("#TOTAL") // Cupom20
// let valor2 = document.querySelector("#TOTAL2") // Cupom10

var PORCENTAGEM = parseInt((valorTotal * DESCONTO1) / 100);
var TOTAL = parseInt((valorTotal - PORCENTAGEM))
valor1.innerHTML = TOTAL

var PORCENTAGEM2 = parseInt((valorTotal * DESCONTO2) / 100);
var TOTAL2 = parseInt((valorTotal - PORCENTAGEM2))
// valor2.innerHTML = TOTAL2

// calcular cupom ======================================================
console.log("onclick")
document.querySelector("#calcularCupom").onclick = function () {
    if (totalDesconto.style.display == "none") {

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


// excluir produto ======================================================
// for (i = 0; i < carrinhoJSON.produto.length; i++) {
//     let excluirProduto = document.querySelector("#excluirProduto" + [i])
//     let tr = document.querySelector("#produto" + i)

//     console.log(i)
//     console.log(excluirProduto)
//     excluirProduto.onclick = function () {
//         if (confirm("Deseja deletar esse produto?")) {
//             if (excluirProduto[i] == tr[i]) {
//                 tr.innerHTML = ""
//                 totalProdutos.innerHTML = totalProdutos.innerHTML - 1
//                 valor.innerHTML = valorTotal - carrinhoJSON.preco[0]
//                 // totalItensResult.innerHTML = valorTotal - carrinhoJSON.preco[0]

//             }
//         }

//         i--
//         console.log(i)

//     }

// }


//calcular porcentagem ======================================================
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
// for (i = 0; i < carrinhoJSON.produto.length; i++) {
//     let qtdTelas = document.querySelector("#qtdTelas" + carrinhoJSON.produto[i])
//     qtdTelas.addEventListener('change', calcularPorcentagem)
// }





function q(el) {
    return document.querySelector(el)
}


function calcularCarrinho() {
    valorTotal = parseFloat(q("#preco" + carrinhoJSON.produto[0]).innerHTML) + parseFloat(q("#preco" + carrinhoJSON.produto[1]).innerHTML) + parseFloat(q("#preco" + carrinhoJSON.produto[2]).innerHTML)

    valor.innerHTML = valorTotal
}

function alteraCarrinho() {
    q("#preco" + carrinhoJSON.produto[0]).innerHTML = (parseFloat(q("#preco" + carrinhoJSON.produto[0]).innerHTML) * q("#qtdTelas" + carrinhoJSON.produto[0]).value)

    calcularCarrinho();
}

calcularCarrinho()

document.querySelector("#qtdTelas" + carrinhoJSON.produto[0]).addEventListener("change", alteraCarrinho)
