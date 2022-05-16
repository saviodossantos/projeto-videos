//Evento de clique no botão confirmar
var formL = document.forms.formLogin
//acesso ao formcontato para variavel formC
document.querySelector("#btLogin").onclick = function () {
    //alert('TENTE NOVAMENTE')
    if (formL.email.value == "") {
        alert("Preencha o email!")
    } else if (formL.senha.value == "") {
        alert("Preencha a senha!")
    } else {
        formL.submit()
        localStorage.emailUser=formL.email.value
    }
}