
/*
function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

function verificarCookie(){
    var username=lerCookie("nomeUsuario");
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Digite seu nome:");
        if (username != "" && username != null){
            criarCookie("nomeUsuario", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
}

verificarCookie();
*/
//Faça uma aplicação com login e senha onde o usuário pode se manter logado usando cookies.
//O usuário deve poder cadastrar novo usuário e senha e também alterar a senha do seu usuário.
//A aplicação deve também ter uma opção sair, que obriga o usuário a logar novamente na pró-
//xima vez que utilizar a aplicação.


function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=nome; expires= Tue, 01 Jan 2115 12:00:00 UTC 
}

function lerCookie(nome){
    var vnome = nome + "=";
    //vnome -> nomeUsuario=
    var ca = document.cookie.split(';');
    //ca -> nomeUsuario=nome
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(vnome) == 0)

            return c.substring(vnome.length,c.length);
    }
    return "";
}
function verificarCookie(){
    var username=lerCookie("Login: ");
    if(username != ""){
        alert("Bem vindo novamente " + username);
    }else{
        username =  prompt("Login:");
        if (username != "" && username != null){
            criarCookie(username, username, " Tue, 01 Jan 2115 12:00:00 UTC ");
        }
    }
}

var senha = 0
function cadastroUsuario(){
    username = prompt("Digite um nome de usuário");
    senha = prompt("Crie uma senha: ");
    if(username != "" && senha != ""){
        criarCookie(username,username," Tue, 01 Jan 2115 12:00:00 UTC ");
    }
    if(username == "" && senha == ""){
        user = prompt("Digite um nome de usuário válido: ");
        senha = prompt("Digite uma senha válida: ");
        criarCookie(username,username," Tue, 01 Jan 2115 12:00:00 UTC ");
    }
}
function alterarUsuario(){
    username = prompt("Digite qual o usuário você deseja mudar: ");
    criarCookie(username,username," Tue, 01 Jan 1999 12:00:00 UTC ");
    username = prompt("Qual novo nome de usuário: ");
    criarCookie(username,username," Tue, 01 Jan 2115 12:00:00 UTC ");
    senha = prompt("Digite sua senha antiga: ");
    senha = prompt("Digite sua nova senha: ");
}
function sairUsuario(){
    username = prompt("Digite o nome do usuário q deseja apagar: ");
    criarCookie(username,username," Tue, 01 Jan 1999 12:00:00 UTC ");
}
function entraUsuario(){
    var tans = prompt("Digite qual usuário você quer entrar: ");
    alert(`Bem vindo ${tans}!!!`);
}

var menu = 0
while(menu != 5){
    menu = parseInt(prompt("1 Entrar\n 2 Cadastrar Usuário\n 3 Alterar login/senha\n 4 Apagar Usuário\n 5 Atualizar"));
    if(menu == 1){
        entraUsuario();
    }
    if(menu == 2){
        cadastroUsuario();
    }
    if(menu == 3){
        alterarUsuario();
    }
    if(menu == 4){
        sairUsuario();
    }

}

 











