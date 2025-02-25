/*ex:2
var fibonacci = [0,1]
var x = 10
var auxi
for(var c = 0;c < x -2; c++){
    auxi = fibonacci [c] + fibonacci[c + 1]
    fibonacci[c + 2] = auxi

}
alert(fibonacci);*/
//ex:1
var num1 = prompt("Digite um número  \n", "Digite aqui: ")

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
}






























