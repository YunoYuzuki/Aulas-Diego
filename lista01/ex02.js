const input = require("readline-sync")

let b = Number(input.question("Qual o tamanho da base? "))
let a = Number(input.question("Qual o tamanho da altura? "))

function perimetro(a, b){
    return (a*2) + (b*2);
}

console.log(perimetro(a, b));