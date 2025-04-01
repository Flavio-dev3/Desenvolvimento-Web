//Desenvolvimento de uma tabuada.
/*
var opcao = parseInt(prompt("Digite qual tabuada você quer ver:" ))
// Criei uma função para fazer uma tabuada.
function tabuada(){
// Fiz uma estrutura de repetição para fazer uma tabuada do número 1 ao número 10.
    for(var i = 1;i <= 10; i++){
        console.log(`${opcao} x ${i} = ${opcao * i}\n `);
    }
}
// Preciso chamar a função fora dela para ela ser executada.
tabuada();
*/

/*
//Desenvolvimento de uma função chamada média e calcule o valor da média aritmética.
var input = prompt("Digite os números separada por virgulas");
var lista = input.split(",");
var soma = 0;

function media(){
    for(let i = 0;i < lista.length; i++){
        soma += parseFloat(lista[i]);
    }
    console.log("A média dos número é: "+ soma / lista.length);

    
}
// Preciso chamar a função fora dela para ela ser executada.
media();
*/
function criarCookie(nome, valor, expira){
    var dtExpira = "expires="+expira;
    document.cookie = nome + "=" + valor + "; " + dtExpira;
    //cookie final = nomeUsuario=flavio; expires= Tue, 01 Jan 2115 12:00:00 UTC 
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
    username=lerCookie("Tabuada");
    if(username != ""){
        tabuada();
    }else{
        username =  username =  prompt("Digite um número para ver a sua tabuada de 1 a 10:");
        if (username != "" && username != null){
            tabuada();
        }
    }
}
function tabuada(){
    for(var i=1;i<=10;i++){
        var nm = username * i;
        var result = alert(`${username} X ${i} = ${nm}`);
        criarCookie("Tabuada", username, " Tue, 01 Jan 2115 12:00:00 UTC ");
    }
}
verificarCookie();












