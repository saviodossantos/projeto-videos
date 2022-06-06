const express = require('express')
const app = express()
const port = 3000

app.use(express.static('index'))
app.use("/imgs",express.static("imgs"))
app.use("/js",express.static("js"))
app.use("/css",express.static("css"))

//index (Quando criar o html diretamente no res.end() insira o writeHead)
app.get("/",(req,res)=>{
    //res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    //res.end('<h1>Página Home</h1>')
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/produtos",(req,res)=>{
    res.sendFile(`${__dirname}/docs/produtos.html`)
})

app.get("/contato",(req,res)=>{
   res.sendFile(`${__dirname}/docs/contato.html`)
})

app.get("/cadastro",(req,res)=>{
    res.sendFile(`${__dirname}/docs/cadastro.html`)
 })

app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))

