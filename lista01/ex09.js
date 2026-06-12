const ler = require('readline-sync')

let a = Number(ler.question("Escreva um numero: "));
let b = Number(ler.question("Escreva outro numero: "));

function min(a, b){
    let menor = 0;

    if(menor < b){
        console.log(`${a} eh menor`)
    }
    else{
        console.log(`${b} eh menor`)
    }
}

console.log(min(a, b))