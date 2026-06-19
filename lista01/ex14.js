const penis = require('readline-sync')

let pinto = penis.question("Digite um número ou palavra: ")

function reverse(pinto){
    const novo = []
    for(let i = pinto.length -1; i >= 0; i--){
        novo.push(pinto[i]);
    }
    return novo;
}

console.log(`${reverse(pinto)}`);