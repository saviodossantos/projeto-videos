console.log('Testando JS')

//escopos var let const
let videos = '{"Nome":"Silvio","idade":"50","email":"silvio22@gmail.com","preferencia": "Açao ,Terror, Suspense","dataInicio":"13/05/2022","tipoAssinante":"Ouro","valor":"R$:39,50"}'

console.log(videos)
let videosJSON= JSON.parse(videos)

console.log(videosJSON)

let conteudo=document.querySelector("#conteudo")
let h3=document.querySelector("#conteudo h3")
let p1=document.querySelector("#p1")
let p2=document.querySelector("#p2")
let p3=document.querySelector("#p3")
let p4=document.querySelector("#p4")
let p5=document.querySelector("#p5")
let p6=document.querySelector("#p6")



h3.innerHTML=videosJSON.Nome
p1.innerHTML="Idade: "+videosJSON.idade
p2.innerHTML="E-mail: "+videosJSON.email
p3.innerHTML="Preferência:" +videosJSON.preferencia
p4.innerHTML="Data Inicio:" +videosJSON.dataInicio
p5.innerHTML="Tipo Assinante:" +videosJSON.tipoAssinante
p6.innerHTML="Valor:" +videosJSON.valor



let user = localStorage.emailUser
let bemVindo = document.querySelector("#bemVindo")
let entrar = document.querySelector("#entrar")
let sair = document.querySelector("#sair")


//console.log(user.indexOf('@'))
//console.log(user.substring(0,user.indexOf('@')))



function msgUser() {
    let nomeUser = user.substring(0, user.indexOf('@'))
    bemVindo.innerHTML = 'Olá <b>' + nomeUser + '</b>'
    entrar.style.display = "none"


}
function resetUser() {
    sair.style.display = "none"
}

sair.onclick=function(){
    localStorage.removeItem('emailUser')
    location.href='../index.html'
}

localStorage.emailUser ? msgUser() : resetUser()

localStorage.setItem("nome","Silvio")
localStorage.setItem("email","silvio22@gmail.com")
localStorage.setItem("telefone","2230-0000")