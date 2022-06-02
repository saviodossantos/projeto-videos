console.log('testando')
let listaUsers = [
    '{"nomeCliente":["Luiz ","Grazielle ","Silvio "],"assuntoCliente":[" Conta bloqueada"," Troca de senha"," MEU PC ESTÁ COM VÍRUS"],"emailCliente":[" teste@email.com"," teste1@email.com"," teste2@email.com"],"telefoneCliente":[" 2199999-9999"," 2198888-8888"," 5397777-7777"]}'
]
let listaUsersJSON=JSON.parse(listaUsers)
listaResult=[]
function users(){
   document.querySelector("#users").innerHTML=""
for(var i=0;i<listaUsersJSON.nomeCliente.length;i++){
    document.querySelector("#users").innerHTML+="<li>" + listaUsersJSON.nomeCliente[i]+ listaUsersJSON.assuntoCliente[0] + listaUsersJSON.emailCliente[0] + listaUsersJSON.telefoneCliente[0] + '</li>'

  }
 listaUsersJSON.nomeCliente.length>0 ? document.querySelector("#next").innerHTML=listaUsersJSON.nomeCliente[0]+listaUsersJSON.assuntoCliente[0] + listaUsersJSON.emailCliente[0] + listaUsersJSON.telefoneCliente[0]:null
}
users()
document.querySelector('#btAtende').onclick=function(){ darBaixa()}

function darBaixa(){
   if(listaUsersJSON.nomeCliente.length>0){
   listaResult.push(listaUsersJSON.nomeCliente[0]+listaUsersJSON.assuntoCliente[0] + listaUsersJSON.emailCliente[0] + listaUsersJSON.telefoneCliente[0])
   document.querySelector("#result").innerHTML=""
   for(var i=0;i<listaResult.length;i++){
    document.querySelector("#result").innerHTML+="<li>" + listaResult[i]+"</li>"
}
   listaUsersJSON.nomeCliente.shift()
   users()
} else{
   document.querySelector("#next").innerHTML="<b> Todos os Cilentes foram Atendidos</b>"
}
}
let intervaloBaixa
document.querySelector("#darBaixa").onclick=function(){ 
intervaloBaixa=setInterval(function(){
   darBaixa()},2000)
}



/////////////////////////////////////////
