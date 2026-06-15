const input = require('readline-sync')

let texto = input.question("Digite uma palavra: ");
let letra = input.question("Digite uma letra: ");


function contarLetra(texto, letra){
    let cont = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === letra){
            cont++;
        }
    }
    return cont;
}
console.log(contarLetra(texto, letra))