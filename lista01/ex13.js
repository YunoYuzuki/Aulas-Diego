const penis = require('readline-sync');

let inicio = Number(penis.question("Digite um numero: "));
let fim = Number(penis.question("Digite outro numero: "));

function range(inicio, fim){
    let lista = [];
    let cont = 0;

    for(let i = inicio; i <= fim; i++){
        lista[cont] = i;
        cont++;
    }
    return lista;
}

function soma(inicio, fim){
    return inicio + fim;
}

console.log(`${range(inicio, fim)}, e a soma deles é ${soma(inicio, fim)}`);