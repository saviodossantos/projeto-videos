console.log(document.forms.formContato)
var formC = document.forms.formContato

document.querySelector("#btContato").onclick=function(){
    function mascaraDeTelefone(  ){
        const textoAtual = telefone.value;
    }
    
if(formC.nomeContato.value == ""){
    alert("Preencha o seu nome!")
}else if (formC.emailContato.value == ""){
    alert("Preencha o seu e-mail!")
}else if (formC.telefoneContato.value == "( )"){
    alert("Preencha o seu telefone!")
}else if (formC.senhaContato.value == ""){
    alert("Preencha a sua senha!")
}else if (formC.confsenhaContato.value == ""){
    alert("Confirme a sua senha!")       
        }else if(formC.confsenhaContato.value !== formC.senhaContato.value){
            alert("A senha não confere!")
}else{
    formC.submit()
    localStorage.Nome=formC.nomeContato.value
    localStorage.Email=formC.emailContato.value
    localStorage.Telefone=formC.telefoneContato.value
    localStorage.name=formC.name.value
    localStorage.removeItem("senhaContato")
    localStorage.removeItem("confsenhaContato")

}
}