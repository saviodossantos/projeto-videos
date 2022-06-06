const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")

app.use(express.static('projeto-videos'))
app.use("/imgs",express.static("imgs"))
app.use("/js",express.static("js"))
app.use("/css",express.static("css"))

//index (Quando criar o html diretamente no res.end() insira o writeHead)
app.get("/",(req,res)=>{
    res.render(`index`)
})

app.get("/produtos",(req,res)=>{
    res.render(`/docs/produtos.html`)
})

app.get("/contato",(req,res)=>{
   res.render(`/docs/contato.html`)
})

app.get("/cadastro",(req,res)=>{
    res.render(`/docs/cadastro.html`)
 })

app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))

