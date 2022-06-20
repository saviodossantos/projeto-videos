-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: projeto_videos
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrinho`
--

DROP TABLE IF EXISTS `carrinho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinho` (
  `carrinho_id` int NOT NULL AUTO_INCREMENT,
  `servico` varchar(100) NOT NULL,
  `produto` varchar(100) NOT NULL,
  `qtdTelas` int DEFAULT NULL,
  `usuarios` varchar(100) NOT NULL,
  PRIMARY KEY (`carrinho_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho`
--

LOCK TABLES `carrinho` WRITE;
/*!40000 ALTER TABLE `carrinho` DISABLE KEYS */;
INSERT INTO `carrinho` VALUES (1,'1','5',NULL,'1'),(2,'2','10',NULL,'2'),(3,'3','18',NULL,'3');
/*!40000 ALTER TABLE `carrinho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contato`
--

DROP TABLE IF EXISTS `contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contato` (
  `contato_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sobrenome` longtext NOT NULL,
  `email` longtext NOT NULL,
  `mensagem` longtext,
  PRIMARY KEY (`contato_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contato`
--

LOCK TABLES `contato` WRITE;
/*!40000 ALTER TABLE `contato` DISABLE KEYS */;
INSERT INTO `contato` VALUES (1,'Silvio','conta bloqueada','silvio@gmail.com','999997070'),(2,'Luiz','troca de senha','luiz@gmail.com','985857070'),(3,'Grazi','meu pc esta com virus','grazi@gmail.com','989897070');
/*!40000 ALTER TABLE `contato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupom`
--

DROP TABLE IF EXISTS `cupom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupom` (
  `cupom_id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) NOT NULL,
  `desconto` varchar(40) NOT NULL,
  `codigo` int NOT NULL,
  PRIMARY KEY (`cupom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupom`
--

LOCK TABLES `cupom` WRITE;
/*!40000 ALTER TABLE `cupom` DISABLE KEYS */;
INSERT INTO `cupom` VALUES (1,'Boas vindas','10%',123),(2,'Indicação','20%',456),(3,'desconto adm','20%',789);
/*!40000 ALTER TABLE `cupom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diretor`
--

DROP TABLE IF EXISTS `diretor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diretor` (
  `diretor_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  `portfolio` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`diretor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diretor`
--

LOCK TABLES `diretor` WRITE;
/*!40000 ALTER TABLE `diretor` DISABLE KEYS */;
/*!40000 ALTER TABLE `diretor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filmes`
--

DROP TABLE IF EXISTS `filmes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filmes` (
  `filmes_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `Ano` int DEFAULT NULL,
  `sinopse` longtext NOT NULL,
  `imagem` varchar(100) NOT NULL,
  `promo` int DEFAULT '0',
  `valor` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`filmes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filmes`
--

LOCK TABLES `filmes` WRITE;
/*!40000 ALTER TABLE `filmes` DISABLE KEYS */;
INSERT INTO `filmes` VALUES (1,'Animais Fantasticos','Aventura',2022,'O professor Alvo Dumbledore (Jude Law) sabe que o poderoso mago das trevas Gellert Grindelwald (Mads Mikkelsen) está se movimentando para assumir o controle do mundo mágico. Incapaz de detê-lo sozinho, ele pede ao magizoologista Newt Scamander (Eddie Redmayne) para liderar uma intrépida equipe de bruxos, bruxas e um corajoso padeiro trouxa em uma missão perigosa, em que eles encontram velhos e novos animais fantásticos e entram em conflito com a crescente legião de seguidores de Grindelwald. Mas com tantas ameaças, quanto tempo poderá Dumbledore permanecer à margem do embate?','filme1.jpeg',1,'19,90'),(2,'Aquaman','Fantasia',2018,'Aquaman se centrará em Aquaman como um governante relutante do reino subaquático da Atlântida, preso entre os habitantes da terra que sempre poluem o globo e seu próprio povo que está pronto para invadir a superfície. Uma segunda variante pode ser encontrada na parte inferior da página: Aquaman é o rei dos sete mares','filme2.jpeg',1,'19,90'),(3,'Simplesmente Acontece','Romance',2014,'Alex e Rosie são amigos inseparáveis que cresceram juntos em Londres, compartilhando entre si suas melhores experiências. Tudo muda quando Alex ganha uma bolsa de estudos e passa a morar nos EUA. Separados, seus caminhos agora são outros. Mas nos tempos de hoje é impossível não se conectar. E, em se tratando de amor, o difícil é fazer as escolhas certas','filme3.jpeg',0,'9,90'),(4,'A Menina que Roubava Livros','Aventura',2014,'Durante a Segunda Guerra Mundial, uma jovem garota chamada Liesel Meminger sobrevive fora de Munique lendo os livros que ela rouba. Ajudada por seu pai adotivo, ela aprende a ler e partilhar livros com seus amigos, incluindo um judeu que vive na clandestinidade em sua casa. Enquanto não está lendo ou estudando, ela faz algumas tarefas para a mãe e brinca com o amigo Rudy.','filme4.jpeg',0,'9,90'),(5,'Mulan','Animação',2020,'Para salvar seu pai doente de servir no Exército Imperial, uma jovem destemida se disfarça de homem para lutar contra os invasores do norte da China','filme5.jpeg',1,'19,90'),(6,'Os Mercenários','Aventura',2014,'Barney e sua trupe de mercenários resgatam Doc, um dos integrantes do grupo, que estava preso há oito anos. Participando de uma missão, os mercenários são surpreendidos quando reencontram Conrad, um comerciante de armas impiedoso, que Barney acreditava ter matado. Novos membros, mais jovens e mais rápidos, entram para equipe e um novo duelo começa','filme6.jpeg',1,'19,90'),(7,'Deadpool 2','Ação',2018,'O mercenário mutante de boca suja Wade Wilson (também conhecido como Deadpool) reúne uma equipe de companheiros mutantes desonestos para proteger um jovem com habilidades sobrenaturais do brutal e viajante do tempo do cabo ciborgue.','filme7.jpeg',1,'19,90'),(8,'Como Eu Era Antes de Você','Romance',2016,'De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.','filme8.jpeg',1,'19,90'),(9,'Tõ Rica!2','Ação',2022,'Uma estranha de mesmo nome de Selminha se diz herdeira legítima de sua fortuna. Com isso, os bens dela são congelados e sua única fonte de renda passa a ser 30 reais por dia. Agora, ela precisa voltar às origens e sobreviver em sua nova rotina.','filme9.jpeg',1,'9,90'),(10,'Sonic','fantasia',2022,'O Dr. Robotnik retorna à procura de uma esmeralda mística que tem o poder de destruir civilizações. Para detê-lo, Sonic se une a seu antigo parceiro, Tails, e parte em uma jornada para encontrar a joia antes que ela caia em mãos erradas','filme10.jpeg',1,'19,90'),(11,'Velozes e Furiosos 9','Ação',2021,'Quando se tornou pai, Dominic Toretto (Vin Diesel) tentou deixar o eletrizante mundo de corridas de lado, tentando proteger seu filho de todos os perigos do passado. No entanto, não importa o quanto ele tente, as questões pendentes sempre voltam à tona. \nAgora Dom pretende reunir novamente seu grupo para venceu o mal que se aproxima. Enquanto isso, Cipher (Charlize Theron) pede ajuda a Jakob Toretto (John Cena) para acabar com Dominic de uma vez por todas.','filme11.jpeg',1,'19,90'),(12,'Pixels','Comédia',2015,'Uma raça alienígena cria monstros inspirados em videogames da década de 1980 para conquistar a Terra, e cinco especialistas em jogos da época são convocados para combater o plano dos extraterrestres e salvar o planeta.','filme12.jpeg',1,'19,90'),(13,'Homem-Aranha: Sem Volta Para Casa','Ação',2021,'Pela primeira vez na história cinematográfica do Homem-Aranha, nosso herói amigo da vizinhança é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.','filme13.jpeg',1,'19,90'),(14,'Jungle Cruise','Aventura',2021,'A Dra. Lily Houghton pede a ajuda do sagaz capitão Frank Wolff para levá-la à Amazônia em seu barco em ruínas. Juntos, eles procuram por uma árvore ancestral que detém o poder de curar - uma descoberta que deve mudar o futuro da medicina.','filme14.jpeg',1,'19,90'),(15,'The Kings Man','Comédia',2022,'Os criminosos mais cruéis da história se reúnem para organizar uma guerra terrível para roubar milhões. No entanto, muito desastre pode acontecer se o plano for concretizado. Por isso, um corajoso homem precisa correr contra o tempo para detê-los.\nAo se unir com um jovem, ele inicia uma parceria para acabar com as ameaças que assombram o mundo e o futuro da humanidade. Esta é a história da primeira agência de inteligência independente','filme15.jpeg',1,'19,90'),(16,'Viuva Negra','Ação/Fantasia',2021,'Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.','filme16.jpeg',1,'9,90'),(17,'Dr Estranho','Aventura',2022,'Em Doutor Estranho no Multiverso da Loucura, após\nderrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago\nSupremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict\nWong), continuam suas pesquisas sobre a Joia do Tempo. Mas um velho amigo que virou\ninimigo coloca um ponto final nos seus planos e faz com que Strange desencadeie um\nmal indescritível, o obrigando a enfrentar uma nova e poderosa ameaça. O longa se\nconecta com a série do Disney+ WandaVision e tem relação também com Loki. O longa\npertence a fase 4 do MCU onde a realidade do universo pode entrar em colapso por\ncausa do mesmo feitiço que trouxe os vilões do Teioso para o mundo dos Vingadores e\no Mago Supremo precisará contar com a ajuda de Wanda (Elizabeth Olsen), que vive\nisolada desde os eventos de WandaVision','filme17.jpeg',1,'19,90'),(18,'Batman','Ação',2022,'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população','filme18.jpeg',1,'19,90'),(19,'Matrix','Ação ',2022,'Se passando 20 anos após os acontecimentos de de Matrix Revolutions, Neo vive uma vida aparentemente comum sob sua identidade original como Thomas A. Anderson em São Francisco, Califórnia, com um terapeuta que lhe prescreve pílulas azuis para neutralizar as coisas estranhas e não naturais que ele ocasionalmente vislumbra em sua mente. Ele também conhece uma mulher que parece ser Trinity (Carrie Anne-Moss), mas nenhum deles se reconhece. No entanto, quando uma nova versão de Morpheus oferece a ele a pílula vermelha e reabre sua mente para o mundo da Matrix, que se tornou mais seguro e perigoso nos anos desde a infecção de Smith, Neo volta a se juntar a um grupo de rebeldes para lutar contra um novo e maois perigoso inimigo e livrar todos da Matrix novamente.','filme19.jpeg',1,'19,90'),(20,'Morbius','Aventura',2022,'Baseado no personagem de mesmo nome da Marvel Comics,Michael Morbius (Jared Letto) sempre sofreu com uma condição rara em seu sangue que o faz andar de bengala e desde criança ser excluído por outros, mas sua vida solitária foi preenchida por livros. Após se formar na faculdade, Doutor Morbius é renomado na área de biomedicina e tenta achar uma cura para sua rara condição, afimde não apenas se ajudar, mas ajudar outras pessoas que também sofrem como ele. Experimentando com o DNA de morcegos, Morbius espera achar a cura e se usa como teste para o soro. Usando o DNA que isolou e uma mistura de eletrochoque, a cura foi um sucesso temporário, mas os efeitos colaterais acabaram transformando-o em um pseudo-vampiro e que agora precisa sobreviver como um. Apesar de ganhar capacidades iguais a de um morcego, Morbius precisa de sangue humano para sobreviver, os efeitos colaterais também o fez mudar fisicamente, ganhando presas e uma pele pálida. Além disso, a cada pessoa que ele morde, ela também vira um ser igual a ele..','filme20.jpeg',1,'19,90');
/*!40000 ALTER TABLE `filmes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servico`
--

DROP TABLE IF EXISTS `servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servico` (
  `servico_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `tipo` varchar(100) DEFAULT NULL,
  `valor` int DEFAULT NULL,
  `descrição` longtext NOT NULL,
  PRIMARY KEY (`servico_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servico`
--

LOCK TABLES `servico` WRITE;
/*!40000 ALTER TABLE `servico` DISABLE KEYS */;
INSERT INTO `servico` VALUES (1,'Assinatura','mensal',30,'Assinatura mensal multi-telas.'),(2,'Assinatura','anual',330,'Assinatura anual de multi-telas com desconto de 7% referente ao valor mensal.'),(3,'Aluguel','diário',15,'Aluguel de filmes lançamentos por 24 horas.');
/*!40000 ALTER TABLE `servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `usuarios_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone` varchar(12) DEFAULT NULL,
  `senha` varchar(45) NOT NULL,
  `conf_senha` varchar(45) NOT NULL,
  PRIMARY KEY (`usuarios_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Silvio','silvio@gmail.com','999997070','Silvio99',''),(2,'Luiz','luiz@gmail.com','985997070','2089455aa7ca15e173a3117107cb5835',''),(3,'Grazi','grazi@gmail.com','98392222','grazi123',''),(4,'xxxxx','albert@gmail.com','0','123','123');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendas`
--

DROP TABLE IF EXISTS `vendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendas` (
  `idvendas` int NOT NULL AUTO_INCREMENT,
  `clientes` int NOT NULL,
  `servicos` int NOT NULL,
  `valor` int NOT NULL,
  `filme` int NOT NULL,
  `qtdTelas` int NOT NULL,
  `descricao` longtext NOT NULL,
  PRIMARY KEY (`idvendas`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendas`
--

LOCK TABLES `vendas` WRITE;
/*!40000 ALTER TABLE `vendas` DISABLE KEYS */;
INSERT INTO `vendas` VALUES (1,1,1,30,5,1,'Assinatura mensal multi-telas'),(2,2,2,330,10,2,'Assinatura Anual de multi-telas com desconto com 7% referente ao valor mensal'),(3,3,3,15,18,1,'Aluguel de filmes');
/*!40000 ALTER TABLE `vendas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-17 14:57:33
