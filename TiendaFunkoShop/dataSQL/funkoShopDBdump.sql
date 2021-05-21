-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: funkoshop
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name_product` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `product_description` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `price` int NOT NULL,
  `image_product` varchar(1000) COLLATE utf8_spanish_ci NOT NULL,
  `category` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE KEY `nombre_UNIQUE` (`name_product`),
  UNIQUE KEY `image_UNIQUE` (`image_product`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'The Joker','Muñeco tipo Funko de aproximadamente 15cm para coleccionar',1000,'joker1.png','movie'),(2,'Harry Potter','Muñeco tipo Funko de aproximadamente 15cm para coleccionar',6000,'HarryPotter1.png','movie'),(3,'Spider-man!','Muñeco tipo Funko de aproximadamente 15cm para coleccionar',3500,'SpidermanFunko.png','heroe'),(4,'Baby Yoda','Muñeco tipo Funko de aproximadamente 15cm para coleccionar',4200,'yoda2.png','movie'),(5,'Dwigth: The Office','Muñeco tipo Funko de aproximadamente 15cm para coleccionar',2800,'dwigth1.png','serie'),(6,'Soldado Falcon','Muñeco tipo Funko de la saga de los 4 fantasticos',6000,'FalconSoldier.png','heroe'),(7,'La Roca','Muñeco tipo Funko de la saga los 4 fantasticos.',2800,'Laroca.png','heroe'),(8,'DeadPool Nerd','Muñeco tipo Funko para coleccionar',7000,'deadpoolnerd.png','movie'),(9,'Black Panther','Muñeco tipo Funko para coleccionar',4500,'BlackPanther.png','heroe'),(11,'Patrick Homes: Chiefs','Muñeco tipo Funko del jugador de Chiefs',2800,'PatrickHomes.png','original'),(12,'JJ Watt','Muñeco tipo Funko de ljuagdor de los Texans',3200,'JJWatt.png','original'),(13,'Joey Bosa: NFL','Muñeco tipo Funko del jugador de la NFL',2300,'JoeyBosa.png','original'),(14,'Walter Payton: Bears','Muñeco tipo Funko del jugador de los Bears',5000,'WalterPayton.png','original'),(15,'Naruto','Muñeco tipo Funko del personaje Naruto',5000,'naruto.png','serie'),(16,'Vegetta: Dragon Ball','Muñeco tipo Funko de la serie Dragon ball:Z',2700,'vegetta.png','serie'),(17,'Goku: SS','Muñeco tipo Funko de Goku Super Saiyan',3000,'gokuss.png','serie'),(18,'Pikachu','Muñeco tipo Funko de Pikachu en modo ataque',7000,'pikachu.png','serie');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_images`
--

DROP TABLE IF EXISTS `profile_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_profile` int NOT NULL,
  `img` varchar(1000) COLLATE utf8_spanish_ci DEFAULT NULL,
  `data` varchar(1000) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `profile_imagescol` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_img_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_images`
--

LOCK TABLES `profile_images` WRITE;
/*!40000 ALTER TABLE `profile_images` DISABLE KEYS */;
INSERT INTO `profile_images` VALUES (1,1,'1','1',NULL);
/*!40000 ALTER TABLE `profile_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `user_email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `profile_img` varchar(1000) COLLATE utf8_spanish_ci DEFAULT NULL,
  `admin_user` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `id_user_UNIQUE` (`id_user`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `profile_img_UNIQUE` (`profile_img`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'prueba1','prueba1@gmail.com','$2a$10$v5PqdOcXmA/8s87s9jKs..nSNObv6ppwSZMT7jhQ3jMBXe8MIm7Vi',NULL,'si'),(7,'prueba2','prueba2@gmail.com','$2a$10$w8plmAlJAoQk9j0JVlpCO.gaPHbl3VJubqsAg7p4LNb0vxO0Tvwme',NULL,NULL),(8,'prueba3','prueba3@gmail.com','$2a$10$bDsvHKVIjgcFAAWowsIg.OjI8.D4N3vACyvGDziJLG.qNrlwj0.Pe',NULL,NULL),(9,'prueba4','prueba4@gmail.com','$2a$10$ZuO9yNlMl.Se/waFipk4GuaLExuvSDint3.svNiE2iw/s7FNnWkTm','[object Object]',NULL),(10,'prueba5','prueba5@gmail.com','$2a$10$NDYVG5NwP2jcBOyMGlXyG.5ON.BhKEjuDJuqyT6WWlV0I5F9E2a4W','1621315803973.jpg',NULL),(11,'prueba7','prueba7@gmail.com','$2a$10$xP.KRtz1wJt8M32DtgPNrOSr4lI9zmTQMyXKIRJzkpWbbZV4qatkC','1621316084366.jpg','si'),(12,'pruebamul','pruebamul@gmail.com','$2a$10$PZHJ70V8CtHOcwEpMa8djOuxMldAlFrBye8jbOplyn5QruWigP1Xm','.png1621380546238',NULL),(13,'pruebamul2','pruebamul2@gmail.com','$2a$10$YgijEVrP0xl2NbR56UJmZeYztW/Q9Hbpxcermyvcm6c.9dk.aPiYu','1621380635517toro.png.png',NULL),(14,'vevevevevev','evee@gmail.com','$2a$10$aduPhzexEaTgtebx9PGeBOkK/d4YyeGjTLaygHHDrWd98r0HuNFFi','1621380824912.png',NULL),(15,'Everaldo Guevara','dsd@gmail.com','$2a$10$3y5fSIUn5NjUl73ZY0VPVON6oene9gFBj/rAJJIvEyJfa5YQw6Fm6','1621389231886.png',NULL),(16,'Everaldo Guevara','everaldoguevara@gmail.com','$2a$10$Vgyuthf2.JbOaR4TUZroPeKrSO1YEznkhz6PaR2e5x/yt7Pgof42.','1621389558001.png','si');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-20 20:17:46
