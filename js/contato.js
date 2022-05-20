console.log(document.forms.formContato)
var formC = document.forms.formContato

document.querySelector("#btContato").onclick=function(){
    
if(formC.nomeContato.value == ""){
    alert("Preencha o seu nome!")
}else if (formC.emailContato.value == ""){
    alert("Preencha o seu e-mail!")
}else if (formC.telefoneContato.value == ""){
    alert("Preencha o telefone!")
}else if (formC.assuntoContato.value == ""){
    alert("Preencha o assunto!")
}else if (formC.comentContato.value == ""){
    alert("Preencha o comentário!")
}else{
    formC.submit()

    let idChamada=parseInt(Math.random()*900) + 100
    localStorage.setItem('chamada-'+11 +idChamada,formC.nomeContato.value + ',' + formC.emailContato.value + ',' + formC.telefoneContato.value + ',' + formC.assuntoContato.value + ',' + formC.comentContato.value)
}
}