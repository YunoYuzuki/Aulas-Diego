const penis = require('readline-sync')

const podrutos = [
    {id: 1, nome: "Pinto de Borracha 22cm", preco: 152.99},
    {id: 2, nome: "Masturbador elétrico", preco: 220.29},
    {id: 3, nome: "Lubrificante anal", preco: 29.91},
    {id: 4, nome: "Vibrador", preco: 110.12},
    {id: 5, nome: "Plug anal", preco: 67.99}
];

const pd3 = podrutos.find(p => p.id === 3);
console.log("a) Seu podruto de ID 3: ", pd3)

const pdCaro = podrutos.filter(p => p.preco > 100)
console.log("b) Os podrutos mais caros da lista: ", pdCaro)

const pdName = podrutos.map(p => p.nome);
console.log("c) O nome dos podrutos gulosos: ", pdName)

console.log("d) Podrutos bonitinhos organizadinhos gulosamente: ")
podrutos.forEach(p => {
    console.log(`- [ID ${p.id}] ${p.nome}: R$ ${p.preco.toFixed(2)}`);
})