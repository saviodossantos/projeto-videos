document.querySelector("#btContato").onclick=function(){
    //alert('Aprende a escrever direito')
    if(formC.emailUsuario.value == ""){
        alert("Preencha o email!")
    }else if (senhaUsuario.value == ""){
        alert("Preencha a senha!")
    }else{
        formC.submit()
    }