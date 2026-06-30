const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

    res.json({mensagem: "penis"});
    }
);

app.get('/sobre', (req, res) => {
    const sim = [
        {nome: "Tadeeeu", disciplina: "Back-End", idade: "16"},
    ];
    res.json(sim);
});

app.get('/produtos', (req, res) => {
    const produtos = [
        {id: 1, nome: "Desinfetante YPÉ Embalagem econômica (tampa azul)", preco: 31.99},
        {id: 2, nome: "Pão francês", preco: 14.99},
        {id: 3, nome: "Café Pelé", preco: 31.99},
        {id: 4, nome: "Fone de ouvido sem fio", preco: 169.76}
    ];
    res.json(produtos);
});

app.get('/produtos/caros', (req, res) => {
    const produtos = [
        {id: 1, nome: "Desinfetante YPÉ Embalagem econômica (tampa azul)", preco: 31.99},
        {id: 2, nome: "Pão francês", preco: 14.99},
        {id: 3, nome: "Café Pelé", preco: 31.99},
        {id: 4, nome: "Fone de ouvido sem fio", preco: 169.76}
    ];

    const produtosCaros = produtos.filter((produto) => produto.preço > 100);

    res.json(produtosCaros);
});

app.get('/status', (req, res) => {
    res.status(200).json({ online: true, Mensagem: "Ta funcionando esse bgl do balacobaco!" });
});

app.get('/alunos', (req, res) => {
    const alunos = [
        { "nome": "João", "idade": 69 },
        { "nome": "Maria", "idade": 67 },]
});

app.listen(3000, () => {
console.log(" Servidor rodando em http :// localhost :3000 ");
});