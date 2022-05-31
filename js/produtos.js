console.log('teste')
var trailerArr0=[
'https://www.youtube.com/embed/HJv4LQxbVEA',
'https://www.youtube.com/embed/47r8FXYZWNU',
'https://www.youtube.com/embed/hFS8di2LWwo',
'https://www.youtube.com/embed/TVxfkdI2xzc']

var trailerArr1=[
'https://www.youtube.com/embed/1c_W_4cNLn0',
'https://www.youtube.com/embed/uNAxHLp7wv8',
'https://www.youtube.com/embed/zwhzHG2RTc8']

var trailerArr2=[
'https://www.youtube.com/embed/ae6w0-kZ3-M',
'https://www.youtube.com/embed/XAHprLW48no',
'https://www.youtube.com/embed/AD5cvVk-4Ps']

   
function carregarImagem(){
   let randfilmes0=trailerArr0[Math.floor(Math.random() * trailerArr0.length)];
   console.log(randfilmes0)
   var imagem = document.getElementById("tra0")
   imagem.src = randfilmes0                       
}
function carregarImagem1(){
   let randfilmes1=trailerArr1[Math.floor(Math.random() * trailerArr1.length)];
   console.log(randfilmes1)
   var imagem = document.getElementById("tra1")
   imagem.src = randfilmes1                     
}
function carregarImagem2() {
   let randfilmes2=trailerArr2[Math.floor(Math.random() * trailerArr2.length)];
   console.log(randfilmes2)
   var imagem = document.getElementById("tra2")
   imagem.src = randfilmes2                       
}2
carregarImagem()
carregarImagem1()
carregarImagem2()