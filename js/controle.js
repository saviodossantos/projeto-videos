var formC=document.forms.formContato
document.querySelector("#btContato").onclick=function(){
    //alert('Aprende a escrever direito')
    if(formC.nomeUsuario.value == ""){
        alert("Preencha o nome!")
     }else if (formC.emailUsuario.value == ""){
        alert("Preencha o email!")
    }else if (senhaUsuario.value == ""){
        alert("Preencha a senha!")
    }else if (comentario.value == ""){
            alert("Preencha o comentario!")
    }else{
        formC.submit()}
    }