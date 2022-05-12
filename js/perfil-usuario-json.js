console.log('Testando JS')

//escopos var let const
let videos='{"Nome":"Karol","idade":"","email":"", "preferencia":"","dataInicio":"","tipoAssinante":"","valor":""}'

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


