var formC=document.forms.formContato
var formL=document.forms.formLogin
 document.querySelector("#btContato").onclick=function(){
    if(formC.nomeUsuario.value == ""){
        alert("Preencha o nome!")
     }else if (formC.emailContato.value == ""){
       alert("Preencha o email!")
     }else if (formC.comentario.value == ""){
            alert("Preencha o comentario!")
     }else{
       formC.submit()}
     }
clea