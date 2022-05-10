console.log("Testando Js")

var Super=[
    ["Batman","filme1.jpeg", "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população."],
    ["Doutor Estranho", "filme2.jpeg" , "Em Doutor Estranho no Multiverso da Loucura, após derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict Wong), continuam suas pesquisas sobre a Joia do Tempo. Mas um velho amigo que virou inimigo coloca um ponto final nos seus planos e faz com que Strange desencadeie um mal indescritível, o obrigando a enfrentar uma nova e poderosa ameaça. O longa se conecta com a série do Disney+ WandaVision e tem relação também com Loki. O longa pertence a fase 4 do MCU onde a realidade do universo pode entrar em colapso por causa do mesmo feitiço que trouxe os vilões do Teioso para o mundo dos Vingadores e o Mago Supremo precisará contar com a ajuda de Wanda (Elizabeth Olsen), que vive isolada desde os eventos de WandaVision."], 
    ["Matrix","filme3.jpeg" , "Se passando 20 anos após os acontecimentos de de Matrix Revolutions, Neo vive uma vida aparentemente comum sob sua identidade original como Thomas A. Anderson em São Francisco, Califórnia, com um terapeuta que lhe prescreve pílulas azuis para neutralizar as coisas estranhas e não naturais que ele ocasionalmente vislumbra em sua mente. Ele também conhece uma mulher que parece ser Trinity (Carrie Anne-Moss), mas nenhum deles se reconhece. No entanto, quando uma nova versão de Morpheus oferece a ele a pílula vermelha e reabre sua mente para o mundo da Matrix, que se tornou mais seguro e perigoso nos anos desde a infecção de Smith, Neo volta a se juntar a um grupo de rebeldes para lutar contra um novo e maois perigoso inimigo e livrar todos da Matrix novamente."], 
    ["Morbius","filme4.jpeg" , "Baseado no personagem de mesmo nome da Marvel Comics, Michael Morbius (Jared Letto) sempre sofreu com uma condição rara em seu sangue que o faz andar de bengala e desde criança ser excluído por outros, mas sua vida solitária foi preenchida por livros. Após se formar na faculdade, Doutor Morbius é renomado na área de biomedicina e tenta achar uma cura para sua rara condição, afim de não apenas se ajudar, mas ajudar outras pessoas que também sofrem como ele. Experimentando com o DNA de morcegos, Morbius espera achar a cura e se usa como teste para o soro. Usando o DNA que isolou e uma mistura de eletrochoque, a cura foi um sucesso temporário, mas os efeitos colaterais acabaram transformando-o em um pseudo-vampiro e que agora precisa sobreviver como um. Apesar de ganhar capacidades iguais a de um morcego, Morbius precisa de sangue humano para sobreviver, os efeitos colaterais também o fez mudar fisicamente, ganhando presas e uma pele pálida. Além disso, a cada pessoa que ele morde, ela também vira um ser igual a ele."]
]

console.log(Super)

var filmes = document.querySelector("#filmes")

for(var i=0;i<Super.length;i++){
    var img = new Image()
    img.src = "imgs/" + Super[i][1]
    img.width = 150
    filmes.innerHTML += "<p>" + Super[i][0] + "</p>" + "<p>" + Super[i][2] + "</p>"
    filmes.appendChild(img)
}