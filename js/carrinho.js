let carrinho = [
    '{"produto":["filme1.jpeg","filme2.jpeg","filme3.jpeg"],"qtd":["1","2","3"],"preco":[20,30,10]}'
]
let carrinhoJSON = JSON.parse(carrinho)

let listCarrinho = document.querySelector("#listaCarrinho")

let valor = document.querySelector("#valorTotal")

for (var i = 0; i < carrinhoJSON.produto.length; i++) {
    var tr = document.createElement('tr')

    tr.innerHTML += '<td style="vertical-align:unset;">' + '<img class="w-25 m-1 imagemCarrinho" src="../imgs/' + carrinhoJSON.produto[i] + '"></td>'
    tr.innerHTML += '<td style="vertical-align:unset;">' + carrinhoJSON.qtd[i] + '</td>'
    tr.innerHTML += '<td style="vertical-align:unset;">' + carrinhoJSON.preco[i] + '</td>'

    listaCarrinho.appendChild(tr)
    
}

var val1 = carrinhoJSON.preco[0];
var val2 = carrinhoJSON.preco[1];
var val3 = carrinhoJSON.preco[2];
var valorTotal = parseInt(val1) + parseInt(val2) + parseInt(val3);
valor.innerHTML = valorTotal

