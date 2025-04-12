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
        //console.log(dadosLista);
        criaLista();
        document.getElementById("nomeUser").value = ""; //limpa o label com o nome digitado
    }
    else{
        alert("Usuario não preenchido!!");
    }
}

//funçao para criar a lista de nomes
function criaLista(){
    let tabela = "<tr><th>Nome</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length - 1); i++){
        tabela += "<tr><td>"+dadosLista[i]+"</td><td></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}