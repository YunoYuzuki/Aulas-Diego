const penis = require('readline-sync')

let idade = Number(penis.question("Digite sua idade: "))

function podeVotar(idade){
    if(idade >= 16){
        console.log("Pode votar!")
    }
    else{
        console.log("Não pode votar!")
    }
    return idade;
}

console.log(`${podeVotar(idade)} anos`)