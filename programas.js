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















