(async () => {
    const express = require('express')
    const app = express()
    const db = require("./db.js")
    const url=require("url")
    const port = 3000
    
    app.set("view engine","ejs")
    
    
    app.use(express.static('projeto-videos'))
    app.use("/imgs",express.static("imgs"))
    app.use("/js",express.static("js"))
    app.use("/css",express.static("css"))
    
    const consulta = await db.selectFilmes()
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
    
     app.get("/login",(req,res)=>{
        res.render(`login`)
     })
    
     app.get("/promocoes",async(req,res)=>{
       const consultaPromo=await db.selectPromo()
        res.render(`promocoes`,{
            filmes:consulta,
        galeria:consultaPromo})

     })
     app.get("/single",async(req,res)=>{
         let infoUrl=req.url
         let urlProp=url.parse(infoUrl,true)
         let q=urlProp.query
         const consultaSingle=await db.selectSingle(q.id)
         const consultaInit=await db.selectSingle(4)
        res.render(`single`,{filmes:consulta,
            galeria:consultaSingle,
        inicio:consultaInit})
     })
    
     app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))
    })()