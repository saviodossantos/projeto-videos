console.log('teste')
var trailerArr0 = [
   'https://www.youtube.com/embed/sNKVwV_IAYA',
   'https://www.youtube.com/embed/yJnzCBt5j1M',
   'https://www.youtube.com/embed/NKYYcobaj9w',
   'https://www.youtube.com/embed/J24AlOYHpVU',
   'https://www.youtube.com/embed/AD5cvVk-4Ps',
   'https://www.youtube.com/embed/Vbop2W9hjJM',
   'https://www.youtube.com/embed/PnqUs3xiAVI'

]

var trailerArr1 = [
   'https://www.youtube.com/embed/LwCBvhyjegk',
   'https://www.youtube.com/embed/A2SjVRziC7M',
   'https://www.youtube.com/embed/NnDGWyfP7q4',
   'https://www.youtube.com/embed/XAHprLW48no',
   'https://www.youtube.com/embed/ae6w0-kZ3-M',
   'https://www.youtube.com/embed/81iqHKqQ1ss',
   'https://www.youtube.com/embed/uNAxHLp7wv8'
]

var trailerArr2 = [
   'https://www.youtube.com/embed/idU-bx2x1a8',
   'https://www.youtube.com/embed/HJv4LQxbVEA',
   'https://www.youtube.com/embed/aHmDi6CUQ3M',
   'https://www.youtube.com/embed/vUaWPxTuVoA',
   'https://www.youtube.com/embed/XlTxiH7dy0M',
   'https://www.youtube.com/embed/S55qvOKW5T0'
]


function carregarImagem() {
   let randfilmes0 = trailerArr0[Math.floor(Math.random() * trailerArr0.length)];
   var imagem = document.getElementById("tra0")
   imagem.src = randfilmes0
}
function carregarImagem1() {
   let randfilmes1 = trailerArr1[Math.floor(Math.random() * trailerArr1.length)];
   var imagem = document.getElementById("tra1")
   imagem.src = randfilmes1
}
function carregarImagem2() {
   let randfilmes2 = trailerArr2[Math.floor(Math.random() * trailerArr2.length)];
   var imagem = document.getElementById("tra2")
   imagem.src = randfilmes2
}

carregarImagem()
carregarImagem1()
carregarImagem2()
