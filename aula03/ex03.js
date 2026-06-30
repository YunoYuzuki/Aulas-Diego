const podrutos = [
    {id: 1, nome: "Robô aspirador chamado wilson", preço: 978},
    {id: 2, nome: "Banana kg", preço: 17},
    {id: 3, nome: "PC Positivo", preço: 9},
    {id: 4, nome: "Matheus Radin", preço: 676767},
    {id: 5, nome: "Uma boneca sexual de tamanho real, possuindo um tamanho de 1.67cm", preço: 350}
    ]

    let Item3 = podrutos.find(item => item.id === 3)
    let ItemCaro = podrutos.filter(item => item.preço > 50)

    console.log(`Nome: ${Item3.nome}\n`)

    console.log("Podrutos acima de R$50,00:\n")

    for (let i = 0; i < ItemCaro.length; i++) {
        console.log(`ID: ${ItemCaro[i].id}, Nome: ${ItemCaro[i].nome}, Preço: ${ItemCaro[i].preço}`)
        }