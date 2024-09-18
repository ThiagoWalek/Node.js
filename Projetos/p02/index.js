const express = require('express');
const app = express();
app.use(express.json())
const path = require('path')
const router = express.Router();

const users = []



router.get("/usuarios", function(req, res){

})

router.post("/usuarios", function(req, res){
    console.log(req.body)
    res.send("Post Funcionando!")
})

router.put("/usuarios", function(req, res){

})

router.delete("/usuarios", function(req, res){

})

app.use('/', router);

app.listen(process.env.port || 3000, () => {
    console.log("Rodando Servidor!")
}) 
