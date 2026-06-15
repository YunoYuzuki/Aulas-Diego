const penis = require('readline-sync')

let a = Number(penis.question("Digite um numero: "))
let b = Number(penis.question("Digite outro numero: "))

function calcular(a, b, op){
    return op(a, b);
}

console.log(calcular(a,b, (a,b) => a+b))
console.log(calcular(a,b, (a,b) => a-b))
console.log(calcular(a,b, (a,b) => a/b))
console.log(calcular(a,b, (a,b) => a*b))