let carrinho = '{"nome":"Adalberto","idade":34,"livros":["Bill Gates","Terror em Lake City","O Elefante Branco","Capitães de Areia"]}'
let carrinhoJSON = JSON.parse(carrinho) //JSON.parse transforma o array usuario em objeto
console.log(carrinho)
let listaCarrinho = document.querySelector("#listaCarrinho")
listaCarrinho.innerHTML = carrinho.nome + ", " + carriho.idade + " anos"
listaLivros.innerHTML = '<li>' + carrinhoJSON.livros[1] + '</li>'
listaLivros.innerHTML += '<li>' +carrinhoJSON.livros[2] + '</li>'
listaLivros.innerHTML += '<li>' +carrinhoJSON.livros[0] + '</li>'

let livrosFor = document.querySelector("#livrosFor")

for(var i=0; i < usuarioJSON.livros.length; i++){
    livrosFor.innerHTML += (i+1) + ': ' + usuarioJSON.livros[i] + '<br>'
}
