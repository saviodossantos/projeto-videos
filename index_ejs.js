(async () => {
   
   const { application } = require('express')
   const express = require('express')
   const app = express()
   const db = require("./db.js")
   const bodyParser=require("body-parser")
   const session=require("express-session")
   const mysqlSession = require("express-mysql-session")(session)
   const url = require("url")
   const port = 3000

   app.set("view engine", "ejs")
   app.use(bodyParser.urlencoded({extended:false}))
   app.use(bodyParser.json())
   app.use(express.static('projeto-videos'))
   app.use("/imgs", express.static("imgs"))
   app.use("/js", express.static("js"))
   app.use("/css", express.static("css"))
   app.use("/adm",express.static("adm"))

   const options ={
      expiration: 10800000,
      createDatabaseTable: true,
      schema: {
          tableName: 'session_tbl',
          columnNames: {
              session_id: 'session_id',
              expires: 'expires',
              data: 'data'
          }
      }  
  }


await db.makeSession(app,options,session)

function checkFirst(req, res, next) {
   if (!req.session.userInfo) {
     res.redirect('/promocoes');
   } else {
     next();
   }
 }
 
 function checkAuth(req, res, next) {
   if (!req.session.userInfo) {
     res.send('Você não está autorizado para acessar esta página');
   } else {
     next();
   }
 }
 
 var userInfo=''
 app.locals.info = {
     user:userInfo
 }
 
   const consultaAdm = await db.selectAdm()
   const consulta = await db.selectFilmes()
   const consultaCarrinho = await db.selectCarrinho()
   consultaFilmes = await db.selectFilmes()
   
   app.get("/login",async(req,res) => {
      res.render(`login`)
   })

   
   app.post("/login", async (req,res)=>{
      const {email,senha} = req.body
      const logado = await db.selectUsers(email,senha)
      if(logado != ""){
      req.session.userInfo = email
      userInfo = req.session.userInfo
      req.app.locals.info.user= userInfo
      res.redirect('/')
      } else {res.send("<h2>Login ou senha não conferem</h2>")}
  })
  app.use('/logout', function (req,res) {
   req.app.locals.info = {}
   req.session.destroy()
   res.clearCookie('connect.sid', { path: '/' });
   res.redirect("/login") 

 })

    const express = require('express')
        const app = express()
        const db = require("./db.js")
        const bodyParser = require("body-parser")
        const url=require("url")
        const port = 3000
        const session = require("express-session")
        
        app.set("view engine","ejs")
        
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())

        app.use(express.static('projeto-videos'))
        app.use("/imgs",express.static("imgs"))
        app.use("/js",express.static("js"))
        app.use("/css",express.static("css"))
        
        const consulta = await db.selectFilmes()
        const consultaCarrinho = await db.selectCarrinho()
        const consultaFilmes = await db.selectFilmes()
    
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
        
        app.get("/cadastro",async(req,res)=>{
            let infoUrl=req.url
            let urlProp=url.parse(infoUrl,true)
            let q=urlProp.query
           
            res.render(`cadastro`,{filmes:consulta,
                galeria:consultaFilmes
            })

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

        app.post("/cadastro",async(req,res)=>{
          const info=req.body
         await db.insertUsuarios({
            nome:info.nome,
            email:info.email,
            telefone:info.telefone,
            senha:info.senha,
            conf_senha:info.conf_senha
           })
            res.redirect(`/`)
            })
        app.post("/contato",async(req,res)=>{
        const info=req.body
         await db.insertContato({
           nome:info.nomeContato,
        email:info.cad_emailContato,
        mensagem:info.cad_mensagem})
        res.redirect("/promocoes")
      })
         })
         app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))
        
        })()
