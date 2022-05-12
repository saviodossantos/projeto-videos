console.log(document.forms.formContato)
var formC = document.forms.formContato

document.querySelector("#btContato").onclick=function(){
    
if(formC.nomeContato.value == ""){
    alert("Preencha o seu nome!")
}else if (formC.emailContato.value == ""){
    alert("Preencha o seu e-mail!")
}else if (formC.telefoneContato.value == ""){
    alert("Preencha o seu telefone!")
}else if (formC.senhaContato.value == ""){
    alert("Preencha a sua senha!")
}else if (formC.confsenhaContato.value == ""){
    alert("Confirme a sua senha!")
}else{
    formC.submit()
    localStorage.nomeContato=formC.nomeContato.value
    localStorage.emailContato=formC.emailContato.value
    localStorage.telefoneContato=formC.telefoneContato.value
    localStorage.senhaContato=formC.senhaContato.value
    localStorage.confsenhaContato=formC.confsenhaContato.value      
}
}