var formL=document.forms.formlogin

document.querySelector("#btLogin").onclick=function(){
    if(formL.email.value ==""){
        alert("Preencha o email!")

    }else if (formL.senha.value ==""){
        alert("preencha a senha!")
    }else{
        formL.submit()
    }
}