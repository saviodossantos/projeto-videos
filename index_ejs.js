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
    const consultaCarrinho = await db.selectCarrinho()
    consultaFilmes = await db.selectFilmes()

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