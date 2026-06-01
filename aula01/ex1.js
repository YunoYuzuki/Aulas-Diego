const input = require('readline-sync')

let nome = input.question("Bota teu nome ae: ")
let idade = input.question("C tem q idade?: ")
let cidade = input.question("C mora aonde? : ")

console.log(`Olá, sou ${nome}, tenho ${idade} e moro em ${cidade}`)
