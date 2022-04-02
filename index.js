// config inicial
require('dotenv').config()
const express = require('express') // import
const app = express() // inicializa 
const res = require('express/lib/response')
const { default: mongoose } = require('mongoose')


// forma de ler JSON / middlewares/ recursos executados entre as requisições e respostas
// agora ele lê e recebe json
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API / import dp personRoutes

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)//middlewares

// rota inicial / endpoint
// função anonima-callback
app.get('/', (req, res) => {

    //mostrar req
    res.json({ message: 'Oi Express!' })

})


// tratando o erro de autendicação
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD) 

//conect com o DB/ com promiss
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cfyis.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        // entregar uma porta
    app.listen(3000)

    })
    .catch((err) => console.log(err))
    