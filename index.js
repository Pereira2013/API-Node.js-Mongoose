// config inicial
const express = require('express') // import
const res = require('express/lib/response')
const app = express() // inicializa 

// forma de ler JSON / middlewares/ recursos executados entre as requisições e respostas
// agora ele lê e recebe json
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


// rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req
    res.json({ message: 'Oi Express!' })

})

// entregar uma porta
app.listen(3000)