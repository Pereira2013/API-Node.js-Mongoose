const router = require('express').Router()
const Person = require('../models/Person') // permite fazer as interações com o DB

// rotas da API / Padrão de rota / recebe dados transforma em algo e envia uma resposta final 
//CREATE
router.post('/', async (req, res) => {

    // tratar os dados que vem do body = req.body/ desestruct
    const {name, salary, approved} = req.body;
    //VALIDAÇÃO
    if (!name){
        res.status(422).json({error: 'O nome é obrigatório'})
        
    }
    // objeto para inserir no banco /com os dados extraidos da requisição
    const person = {
        name,
        salary,
        approved
    } 
    try {
        // criando dados 
        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})// não é o jeito mais certo de fazer / melhor seria criar um arq de log
    }
})

//READ - leitura de dados

router.get('/', async (req, res) => {
    try{
        
        const people = await Person.find()
        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({error: error})
        }

} )

module.exports = router;