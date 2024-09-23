import express from "express"
import path from "path";
import { PrismaClient } from '@prisma/client'
import pkg from "statuses";
const { message } = pkg;

const prisma = new PrismaClient()
const app = express();
const __dirname = path.resolve(path.dirname('')); 
const users = []

app.use('/', express.static(path.join(__dirname, '')))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/relatorio', (req, res) => {
    res.sendFile(path.join(__dirname+'/relatorio.html'));
});

app.post("/usuarios", async (req, res) => {
    //mande o que está mapeado na pasta prisma dentro do aquivo schema.prisma
    await prisma.user.create({
        data: {
            //pegue do corpo da requisição e pegue o email
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    users.push(req.body)
    console.log(req.body)
    res.status(201)
    res.send("Post funcionando!")
})

app.get("/usuarios", async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(201).json(users)
    console.log(req.body.users)
})
//:id cria uma variavel dentro de um dicionario chamada -> id: jdksdjskj
// essa variavel vai ser amamarzenada no params da req - requisição
// params: {id: saljslkajslk} nesse formato
app.put("/usuarios/:id", async (req, res) => {
    //mande o que está mapeado na pasta prisma dentro do aquivo schema.prisma
    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data: {
            //pegue do corpo da requisição e pegue o email
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    users.push(req.body)
    console.log(req.body)
    res.status(201)
    res.send("Put funcionando!")
})

app.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete ({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Usuario excluído com sucesso!"})
})

app.listen(process.env.port || 3000, () => {
    console.log("Rodando Servidor!")
}) 


// Mongodb usuario Thiago
//    senha thi08ago
//npx prisma studio para rodar
// node --watch {nome do arquivo}