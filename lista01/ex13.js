const penis = require('readline-sync');

let inicio = Number(penis.question("Digite um numero: "));
let fim = Number(penis.question("Digite outro numero: "));

function range(inicio, fim){
    let lista = [];
    for(let i = inicio; i <= fim; i++){
        lista.push(i);
    }
    return lista;
}

function soma(lista){
    let so_ma = 0;
    for(let i = 0; i < lista.length; i++){
        so_ma += lista[i];
    }
    return so_ma;
}

console.log(`${range(inicio, fim)}`)
console.log(soma(range(inicio, fim)))