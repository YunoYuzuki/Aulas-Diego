const penis = require('readline-sync')

const podrutos = [
    {id: 1, nome: "Desinfetante YPÉ Embalagem econômica (tampa azul)", preco: 31.99},
    {id: 2, nome: "Pão francês", preco: 14.99},
    {id: 3, nome: "Café Pelé", preco: 31.99},
    {id: 4, nome: "Fone de ouvido sem fio", preco: 169.76}
];

for(let i = 0; i <= podrutos; i++){
    let lista = [];
    lista.push(podrutos[i]);
}

podrutos.forEach(p =>
    console.log(`- [ID ${p.id}] ${p.nome}: R$${p.preco}`)
)