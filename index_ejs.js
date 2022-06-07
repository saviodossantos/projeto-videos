const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")

app.use(express.static('index'))
app.use("/imgs",express.static("imgs"))
app.use("/js",express.static("js"))
app.use("/css",express.static("css"))

app.get("/",(req,res)=>{    
    res.render(`index`,{titulo:"Conheça nossos livros",promo:"Todos os livros com 25% de desconto!"})
})

app.get("/cadastro",(req,res)=>{    
    res.render(`cadastro`)
})

app.get("/contato",(req,res)=>{    
    res.render(`contato`)
})

app.get("/produtos",(req,res)=>{    
    res.render(`produtos`)
})

app.listen(port,() => console.log("Servidor rodando com nodemon!"))