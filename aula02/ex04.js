const input = require('readline-sync');

let a = Number(input.question("digite um numero: "));
let b = Number(input.question("digite outro numero: "));

function executarOperacao(a, b, operacao){
    const resultado = operacao(a,b);
    console.log(`Resultado: ${resultado}`);
}

executarOperacao(a, b, (a,b) => a+b);
executarOperacao(a, b, (a,b) => a*b);
executarOperacao(a, b, (a,b) => a/b);
executarOperacao(a, b, (a,b) => a-b);
