const input = require('readline-sync');

let num1 = input.questionInt("Qual o primeiro número? ");
let num2 = input.questionInt("Qual o segundo número? ");

console.log("soma = " + (num1 + num2));
console.log("subtração = " + (num1 - num2));
console.log("multiplicação = " + (num1 * num2));

if(num2 === 0){
    console.log("divisão = Valor inválido");
}
else{
    console.log("divisão = " + (num1 / num2));
}
