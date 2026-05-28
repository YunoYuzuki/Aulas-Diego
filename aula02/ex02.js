const input = require('readline-sync');

let num = input.question("Digite uma senha ");

function validarSenha(senha){
    return senha.length >= 8;
}

if(validarSenha(num)){
    console.log("Senha validada");
}
else{
    console.log("Senha incorreta");
}

