(async () => {
    const url = require("url")
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
    console.log(consulta[1])
    const consultaFilmes = await db.selectFilmes()
    //console.log(consultaFilmes[0])


//index (Quando criar o html diretamente no res.end() insira o writeHead)
app.get("/",(req,res)=>{
   // filmes:consulta,
   //  filmes:consultaPromo
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

 app.get("/promocoes",async(req,res)=>{
    consultaPromo = await  db.selectPromo()
    res.render(`promocoes`,{
      filmes:consulta,
      filmes:consultaPromo
    })
 })
 app.get("/atualiza-promo",async(req,res)=>{
    let qs = url.parse(req.url,true).query
    await db.updatePromo(qs.promo,qs.id)//localhost:3000/atualiza-promo?promo=1&id=1
        res.send("<h2>Lista de promoções atualizada!</h2><a href='./promocoes'>Voltar</a>")
})
  
 app.get("/upd-promo",async(req,res)=>{
    res.render(`adm/atualiza-promocoes`,{
       filmes:consulta,
      filmes:consultaFilmes
    })
})
 app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))
})()

