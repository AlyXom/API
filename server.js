const express = require('express')
const app = express()

app.use(express.json())

const dados = []


app.get('/', (req, res) => {
    res.json(dados)
})

app.post('/', (req, res) => {
    const data = req.body
    dados.push(data)
    console.log(data)
    res.json(data)
})

app.listen(3000, () => console.log('Rodando servidor: http://localhost:3000'))