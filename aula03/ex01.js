const penis = require('readline-sync')

let nome = penis.question("Bota teu nome ae: ")
let idade = penis.question("C tem q idade?: ")
let cidade = penis.question("C mora aonde? : ")

console.log(`Olá, sou ${nome}, tenho ${idade} e moro em ${cidade}`)

let cidade2 = penis.question("Modifique a cidade agora man: ")

console.log(`Olá, sou ${nome}, tenho ${idade} anos e moro em ${cidade2}`)