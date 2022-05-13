let carrinho = [
    '{"produto":["filme1.jpeg","filme2.jpeg","filme3.jpg"],"qtd":"100","preco":["R$10,90","R$29,90","R$7,33"]}'
]
let carrinhoJSON = JSON.parse(carrinho) //JSON.parse transforma o array usuario em objeto
let listaCarrinho = document.querySelector("#listaCarrinho")
let td
console.log(carrinho)
console.log(carrinhoJSON)

for (var i = 0; i < carrinhoJSON.produto.length; i++) {
    
    let produtoCarrinho = document.querySelector("#produtoCarrinho")
    produtoCarrinho.innerHTML += '<img src="../imgs/' + carrinhoJSON.produto[i] + '">'
    // produtoCarrinho.classList.add('w-50')

}

// for (var i = 0; i < carrinhoJSON.qtd.length; i++) {
    
//     let qtdCarrinho = document.querySelector("#qtdCarrinho")
//     qtdCarrinho.innerHTML += '<td>' + carrinhoJSON.qtd[i] + '</td>'

// }

// for (var i = 0; i < carrinhoJSON.preco.length; i++) {
    
//     let precoCarrinho = document.querySelector("#preco")
//     precoCarrinho.innerHTML += '<td>' + carrinhoJSON.preco[i] + '</td>'

// }

listaCarrinho.appendChild("#produtoCarrinho")



// let livrosFor = document.querySelector("#livrosFor")

// for(var i=0; i < usuarioJSON.livros.length; i++){
//     livrosFor.innerHTML += (i+1) + ': ' + usuarioJSON.livros[i] + '<br>'
// }
