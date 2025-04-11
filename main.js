//validação de preenchimento de login
function acessar(){
    let loginEmail = document.getElementById("loginEmail").Value;
    let loginSenha = document.getElementById("loginSenha").value;
    
    //verificação se os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert("Favor, preencha todos os campos de acesso");
    }
}