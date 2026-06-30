let alunos = [
    {id: 1, nome: "Penis de Jacinto", nota: 6.66},
    {id: 2, nome: "Maria Escura", nota: 6.7},
    {id: 3, nome: "Jalan Bipal", nota: 7},
    {id: 4, nome: "Kurapika", nota: 2.4},
    {id: 5, nome: "Doo ku", nota: 7.77}
]

let RepAp = alunos.map(aluno => {
    if (aluno.nota >= 7) {
        return {id: aluno.id, nome: aluno.nome, nota: aluno.nota, status: "Aprovado"}
    } else {
        return {id: aluno.id, nome: aluno.nome, nota: aluno.nota, status: "Reprovado"}
    }
})

for(let i = 0; i < RepAp.length; i++) {
    console.log(`${RepAp[i].nome}, Status: ${RepAp[i].status}`)
}