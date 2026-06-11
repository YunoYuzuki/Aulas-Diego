const input = require("readline-sync")

let C = Number(input.question("Escreva a temperatura em Celsius: ")); 
let F = C * 1.8 + 32;

console.log(`Os graus em Fahreinheit é de ${F}`);