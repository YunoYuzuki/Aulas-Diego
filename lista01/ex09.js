const pinto = require('readline-sync')

let a = Number(ler.question("Escreva um numero: "));
let b = Number(ler.question("Escreva outro numero: "));

function min(a, b){
    if(a > b){
        return b;
    }
    else{
        return a;
    }
}

const miin = (a, b) => a < b ? a : b;

console.log(`${min(a, b)}`);    