(async () => {

   const { application } = require('express')
   const express = require('express')
   const app = express()
   const db = require("./db.js")
   const bodyParser = require("body-parser")
   const session = require("express-session")
   const mysqlSession = require("express-mysql-session")(session)
   const url = require("url")
   const port = 3000

   app.set("view engine", "ejs")
   app.use(bodyParser.urlencoded({ extended: false }))
   app.use(bodyParser.json())
   app.use(express.static('projeto-videos'))
   app.use("/imgs", express.static("imgs"))
   app.use("/js", express.static("js"))
   app.use("/css", express.static("css"))
   app.use("/adm", express.static("adm"))

   const options = {
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


   await db.makeSession(app, options, session)

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

   var userInfo = ''
   app.locals.info = {
      user: userInfo
   }
   
   const consulta = await db.selectFilmes()
   const deleteItemCarrinho = await db.deleteItemCarrinho()
   consultaFilmes = await db.selectFilmes()
   consultaContato = await db.selectContato()
   consultaUsuarios = await db.selectUsuarios()
   consultaProdutos = await db.selectProdutos()
   app.get("/login",async(req,res) => {
      res.render(`login`)
   })

   
   app.post("/login", async (req,res)=>{
      const {email,senha} = req.body
      const logado = await db.selectUsers(email,senha)
      if(logado != ""){
      req.session.userInfo = [email]
      userInfo = req.session.userInfo
      req.app.locals.info.user= userInfo
      res.redirect('/')
      } else {
         res.render(`erro`)
      }
   })
   
  app.use('/logout', function (req, res) {
   req.app.locals.info = {}
   req.session.destroy()
   res.clearCookie('connect.sid', { path:'/' })
 res.redirect("/login")

})


   app.get("/", async (req, res) => {
      res.render(`index`, {
         titulo: " Conheça os nossos Filmes",
         promo: " Todos os Filmes com 10% de desconto !",
         filmes: consulta,
         galeria: consultaFilmes
      })
   })

   app.get("/produtos", (req, res) => {
      res.render(`produtos`, {
         galeria: consultaFilmes
      })
   })

   app.get("/contato", async (req, res) => {
      let infoUrl = req.url
      let urlProp = url.parse(infoUrl, true)
      let q = urlProp.query
      res.render(`contato`, {
         filmes: consulta,
         galeria: consultaFilmes
      })
   })
   app.post("/contato", async (req, res) => {
      const info = req.body
      await db.insertContato({
         nome: info.cad_nome,
         sobrenome: info.cad_sobrenome,
         email: info.cad_email,
         mensagem: info.cad_mensagem
      })
      res.redirect("/promocoes")
   })

   app.get("/cadastro", async (req, res) => {
      let infoUrl = req.url
      let urlProp = url.parse(infoUrl, true)
      let q = urlProp.query
      const consultaSingle = await db.selectSingle(q.id)
      const consultaInit = await db.selectSingle(4)
      res.render(`cadastro`, {
         filme: consulta,
         galeria: consultaInit
      })
   })

   app.get("/carrinho", async(req, res) => {
      const consultaCarrinho = await db.selectCarrinho()
      res.render(`carrinho`, {
         filme: consulta,
         carrinho: consultaCarrinho
      })
   })
   
   app.post("/delete-all-carrinho", async (req, res) => {
      const info = req.body
      await db.deleteAllCarrinho(info.carrinho_id)
      res.send(info)
   })

   app.post("/delete-carrinho", async (req, res) => {
      const info = req.body
      await db.deleteItemCarrinho(info.carrinho_id)

      res.send(info)
   })

   app.post("/add-carrinho", async (req, res) => {
      const info = req.body
      await db.insertCarrinho(info.servico,info.produto,info.usuarios)
      res.send(info)
   })

   app.get("/promocoes", async (req, res) => {
      const consultaPromo = await db.selectPromo()
      res.render(`promocoes`, {
         filmes: consulta,
         galeria: consultaPromo
      })
   })

   app.get("/single", async (req, res) => {
      let infoUrl = req.url
      let urlProp = url.parse(infoUrl, true)
      let q = urlProp.query
      const consultaSingle = await db.selectSingle(q.id)
      const consultaInit = await db.selectSingle(4)
      res.render(`single`, {
         filmes: consulta,
         galeria: consultaSingle,
         inicio: consultaInit
      })
   })

   app.get("/atualiza-promo", async (req, res) => {
      let qs = url.parse(req.url, true).query
      await db.updatePromo(qs.promo, qs.id)//localhost:3000/atualiza-promo?promo=1&id=1
      res.send("<h2>Lista de promoções atualizada!</h2><a href='./promocoes'>Voltar</a>")
   })

   app.get("/upd-promo", async (req, res) => {
      res.render(`adm/atualiza-promocoes`, {
         filmes: consulta,
         filmes: consultaFilmes
      })
   })
   app.get("/produtos",async(req,res)=>{
      const consultaProduto= await db.selectFilmes()
     res.render(`produtos`,{
         galeria:consultaProduto
     })
 })
 app.get("/adm", async (req, res) => {
   res.render(`adm/index-admin`, {
      titulo: "login do Adm",      
      filmes: consulta,
      galeria: consultaFilmes
   })
})
app.get("/adm/cadastroAdm",async(req,res)=>{
   let infoUrl=req.url
   let urlProp= url.parse(infoUrl,true)
   let q =urlProp.query   
   res.render(`adm/cadastroAdm`,{
 
 })
 })
 app.post("/adm/cadastroAdm",async(req,res)=>{
   const info=req.body
   await db.insertAdm({
   nome:info.nome,
   email:info.email,
   telefone:info.telefone,
   senha:info.senha,
   confsenha:info.confsenha,
   adm:info.adm})
   res.redirect(`/adm`)
 })
 app.get("/adm/login-admin",async(req,res) => {
   res.render(`adm/login-admin`)
})


app.post("/adm/login-admin", async (req,res)=>{
   const {email,senha} = req.body
   const logado = await db.selectAdm(email,senha)
   if(logado != ""){
   req.session.userInfo = email
   userInfo = req.session.userInfo
   req.app.locals.info.user= userInfo
   res.redirect('/adm')
   } else {res.render(`adm/erroadm`)}
 })
app.use('/adm/logout-admin', function (req, res) {
req.app.locals.info = {}
req.session.destroy()
res.clearCookie('connect.sid', { path:'/' })
res.redirect(`/adm`)

})
 app.get("/adm/relatorio-chamadas",async(req,res) => {
   res.render(`adm/relatorio-chamadas`,{
      contato: consultaContato
})
})
app.get("/adm/relatorio-produtos",async(req,res) => {
   res.render(`adm/relatorio-produtos`,{
      filmes:consultaProdutos
})
})
app.get("/adm/relatorio-usuarios",async(req,res) => {
   res.render(`adm/relatorio-usuarios`,{
      usuarios:consultaUsuarios
})
})
app.get("/adm/cadastroProduto",async(req,res)=>{
   let infoUrl=req.url
   let urlProp= url.parse(infoUrl,true)
   let q =urlProp.query
   res.render(`adm/cadastroProduto`,{
   
 })
 }) 
 app.post("/cadastro",async(req,res)=>{
   const info=req.body
    await db.insertUsuarios({
   nome:info.nome,
   email:info.email,
   telefone:info.telefone,
   senha:info.senha,
   conf_senha:info.conf_senha})
   res.redirect("/login")
 })
 app.post("/adm/cadastroProduto",async(req,res)=>{
   const info=req.body
   await db.insertFilmes({
   titulo:info.titulo,
   genero:info.genero,
   Ano:info.Ano,
   sinopse:info.sinopse,
   imagem:info.imagem,
   promo:info.promo,
   valor:info.valor})

   res.redirect(`/adm`)
 })
   app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

})()
