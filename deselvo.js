/*ex:2
var fibonacci = []
var x = prompt("Digite nome: ")
for(c = 0;c++;){
    fibonacci[c + 2] = fibonacci [c] + fibonacci[c + 1]

}
alert(fibonacci);
ex:1*/
/*var num1 = prompt("Digite um número  \n", "Digite aqui: ")

if(num1 % 2 == 0){
    alert(`O número:${num1} é par`)
}
else{
    alert(`O número:${num1} é impar`)
}
var cont = 0
for(c = 1; c <= num1;c++){
    if(num1 % c == 0){
        cont++
    }
}
if(cont == 2){
    alert(`O número: ${num1} é primo`)
}
else{
    alert(`O número ${num1} não é primo`)
}*/
ex:3
/*var lista = []
var xc = prompt("Digite a quantidade de números na lista")
for(c = 0;c <= xc;c++){
    bc = prompt("Digite um número:")
    lista[c]
}*/



/*
var nn = 0;
var mm = 0;
function nome (num1,num2,num3){
    if(num1 > num2 && num1 > num3 ){
        nn = num1
    }
    else if(num2 > num1 && num2 > num3){
        nn = num2
    }
    else if(num3 > num1 && num3 > num2){
        nn = num3
    }
}
function nomen (num1,num2,num3){
    if(num1 < num2 && num1 < num3){
        mm = num1
    }
    else if(num2 < num1 && num2 < num3){
        mm = num2
    }
    else if(num3 < num1 && num3 < num2){        
        mm = num3
    }
}

var nu1 = prompt("Digite o primeiro numero: ");
var nu2 = prompt("Digite o segundo número:");
var nu3 = prompt("Digite o terceiro número: ");
nome(nu1,nu2,nu3);
alert(`O número maior é ${nn}`);
nomen(nu1,nu2,nu3);
alert(`O número menor é ${mm}`);*/
/*var lista = []
function aritmetica (){
    soma = 0
    for(var i = 0;i < lista.length; i++){
        soma = soma + lista[i]
    }
return soma / lista.length
}*/
var mlk = 0
var sald = 0
var nome = prompt("Digite seu nome para continuar sua conta bancaria: ");
alert(`${nome} seu atual saldo agr é $${sald} reais`);
sald = parseFloat(prompt("Digite o valor para ser depositado: "));
function depositar (){
    if( sald <= 1000){
        alert("Seu saldo foi depositado com sucesso!!!");
    } 
    else{
        alert("não podeh meu!!!");
    }
}

alert(`O saldo ${sald} foi depositado`);









