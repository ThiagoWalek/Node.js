const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();



router.get("/", function(req, res){

    res.sendFile(path.join(__dirname+'/index.html'));

})

router.get("/rota1", function(req, res){

    res.sendFile(path.join(__dirname+'/rota1.html'));

})

app.use('/', router);

app.listen(process.env.port || 3000, () => {
    console.log("Rodando Servidor!")
}) 










// const http = require('http');

// const hostname = "127.0.0.1";

// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end("Servidor em funcionamento")
// })

// server.listen(port, hostname, () => {
//     console.log("Servidor Rodando!")
// })