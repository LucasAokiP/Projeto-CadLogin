//validação de preenchimento de login
function acessar(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
    
    //verificação se os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert("Favor, preencha todos os campos de acesso");
    }else{
        window.location.href = 'cadastro.html';
    }
}

//declara array para o projeto
var dadosLista = [];

//função de armazenamentos de nomes no array
function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista)
    }
}