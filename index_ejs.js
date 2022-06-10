(async () => {
const express = require('express')
const app = express()
const db = require("./db.js")
const port = 3000

app.set("view engine","ejs")


app.use(express.static('projeto-videos'))
app.use("/imgs",express.static("imgs"))
app.use("/js",express.static("js"))
app.use("/css",express.static("css"))

const consulta = await db.selectFilmes()
const consultaCarrinho = await db.selectCarrinho()
    console.log(consulta[0])


//index (Quando criar o html diretamente no res.end() insira o writeHead)
app.get("/",(req,res)=>{
    res.render(`index`,{promo:"Todos os filmes com 10% de desconto!"})
})

app.get("/produtos",(req,res)=>{
    res.render(`produtos`)
})

app.get("/contato",(req,res)=>{
   res.render(`contato`)
})

app.get("/cadastro",(req,res)=>{
    res.render(`cadastro`)
 })

 app.get("/single",(req,res)=>{
    res.render(`single`)
 })

 app.get("/login",(req,res)=>{
    res.render(`login`)
 })

 app.get("/carrinho", (req, res) => {
    res.render(`carrinho`, {
        carrinho: consultaCarrinho
    })

 app.get("/promocoes",(req,res)=>{
    res.render(`promocoes`,{filmes:consulta})
 })

 app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))
})()

