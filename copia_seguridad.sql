-- MariaDB dump 10.19-11.3.2-MariaDB, for osx10.18 (arm64)
--
-- Host: localhost    Database: Footlose
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `color` (
  `idColor` int NOT NULL AUTO_INCREMENT,
  `nombreColor` varchar(50) NOT NULL,
  PRIMARY KEY (`idColor`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES
(1,'Azul'),
(2,'Blanco'),
(3,'Morado'),
(4,'Rosado'),
(6,'Bebe'),
(7,'Negro');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalleventa`
--

DROP TABLE IF EXISTS `detalleventa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `detalleventa` (
  `idDetalle` int NOT NULL AUTO_INCREMENT,
  `cantidadDetalle` int NOT NULL,
  `precioDetalle` decimal(10,2) NOT NULL,
  `idVenta` int NOT NULL,
  `idProducto` int NOT NULL,
  PRIMARY KEY (`idDetalle`),
  KEY `fk_6` (`idVenta`),
  KEY `fk_7` (`idProducto`),
  CONSTRAINT `fk_6` FOREIGN KEY (`idVenta`) REFERENCES `venta` (`idVenta`),
  CONSTRAINT `fk_7` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalleventa`
--

LOCK TABLES `detalleventa` WRITE;
/*!40000 ALTER TABLE `detalleventa` DISABLE KEYS */;
INSERT INTO `detalleventa` VALUES
(8,2,345.00,5,10),
(9,3,365.00,5,11),
(10,1,124.00,6,16),
(11,1,159.00,7,8),
(12,3,199.00,7,19),
(13,2,120.00,8,20),
(14,3,199.00,9,19),
(15,1,159.00,10,17),
(16,1,123.00,11,22),
(18,1,159.00,13,18),
(19,1,234.00,14,21),
(20,1,124.00,15,16),
(22,2,345.00,17,10),
(23,3,234.00,18,21),
(28,4,23.00,23,14),
(29,1,45.00,23,15),
(30,1,23.00,24,14),
(31,1,45.00,24,15),
(32,1,23.00,25,14),
(33,1,45.00,25,15),
(34,1,23.00,26,14),
(35,1,45.00,26,15),
(36,3,230.00,27,16),
(37,1,422.00,27,15),
(50,3,230.00,32,16),
(51,1,422.70,32,15),
(54,3,230.00,34,16),
(55,1,422.70,34,15),
(56,3,230.00,35,16),
(57,1,422.70,35,15),
(58,3,230.00,36,16),
(59,1,422.70,36,15),
(60,3,230.00,37,16),
(61,1,422.70,37,15),
(62,3,230.00,38,16),
(63,1,422.70,38,15),
(64,3,230.00,39,16),
(65,1,422.70,39,15),
(66,3,230.00,40,16),
(67,1,422.70,40,15),
(68,3,230.00,41,16),
(69,1,422.70,41,15),
(72,3,230.00,43,16),
(73,1,422.70,43,15),
(74,3,230.00,44,16),
(75,1,422.70,44,15),
(76,3,230.00,45,16),
(77,1,422.70,45,15),
(80,1,123.00,47,14),
(81,3,199.00,47,19),
(82,1,159.00,47,8),
(83,2,120.00,48,20),
(84,1,120.00,49,20),
(85,2,199.00,49,19),
(86,1,120.00,50,20),
(88,1,199.00,51,19),
(89,1,120.00,52,20),
(90,1,199.00,52,19),
(91,1,159.00,52,18),
(92,2,159.00,53,8),
(93,1,159.00,54,8),
(94,1,159.00,55,8);
/*!40000 ALTER TABLE `detalleventa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca` (
  `idMarca` int NOT NULL AUTO_INCREMENT,
  `nombreMarca` varchar(50) NOT NULL,
  PRIMARY KEY (`idMarca`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES
(4,'Adidas'),
(5,'Nike'),
(6,'Zahara'),
(7,'Desigual');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelo`
--

DROP TABLE IF EXISTS `modelo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modelo` (
  `idModelo` int NOT NULL AUTO_INCREMENT,
  `nombreModelo` varchar(50) NOT NULL,
  PRIMARY KEY (`idModelo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelo`
--

LOCK TABLES `modelo` WRITE;
/*!40000 ALTER TABLE `modelo` DISABLE KEYS */;
INSERT INTO `modelo` VALUES
(1,'Botin'),
(3,'Zapatilla'),
(4,'Bota Larga'),
(5,'Sandalia'),
(7,'Zanco');
/*!40000 ALTER TABLE `modelo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personas`
--

DROP TABLE IF EXISTS `personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personas`
--

LOCK TABLES `personas` WRITE;
/*!40000 ALTER TABLE `personas` DISABLE KEYS */;
INSERT INTO `personas` VALUES
(1,'a','a',1);
/*!40000 ALTER TABLE `personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `nombreProducto` varchar(50) NOT NULL,
  `idMarca` int NOT NULL,
  `idModelo` int NOT NULL,
  `idColor` int NOT NULL,
  `idTalla` int NOT NULL,
  `imagenProducto` varchar(50) NOT NULL,
  `precioProducto` decimal(10,2) NOT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `fk_1` (`idMarca`),
  KEY `fk_2` (`idModelo`),
  KEY `fk_3` (`idColor`),
  KEY `fk_4` (`idTalla`),
  CONSTRAINT `fk_1` FOREIGN KEY (`idMarca`) REFERENCES `marca` (`idMarca`),
  CONSTRAINT `fk_2` FOREIGN KEY (`idModelo`) REFERENCES `modelo` (`idModelo`),
  CONSTRAINT `fk_3` FOREIGN KEY (`idColor`) REFERENCES `color` (`idColor`),
  CONSTRAINT `fk_4` FOREIGN KEY (`idTalla`) REFERENCES `talla` (`idTalla`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES
(8,'Zapatillas Urbano Adidas Hombres',4,3,2,1,'1c13efe349f8a59185a1c7691ba15734',159.00),
(9,'ZAPATILLAS PARK STREET',4,3,1,3,'537cb00fa5f512f8bca12d489286c91c',145.00),
(10,'ZAPATILLAS ADVANTAGE',4,3,2,4,'133a8fa456fa090867bcf31abfa3ee9b',345.00),
(11,'ZAPATILLAS COURTBLOCK',4,3,7,1,'8f75e0f09d2b89f8846e2ca70ef3b6b6',365.00),
(14,'BOTIN AMALIA',6,1,7,4,'7b0f8c6f64dae3ec56aeac9ea19c9d88',126.00),
(15,'BOTIN JULIETA',6,1,7,1,'e987ffebb1cb4b212971e6715fc4bbe9',125.00),
(16,'BOTIN JESUITA',6,4,7,1,'21438d65af28d9bcb3931ba7f81ae56d',124.00),
(17,'BOTIN ROMEO',6,1,2,1,'4587ad1162ab852dc904390ef01e9c8c',159.00),
(18,'BOTIN ADELIA',7,4,6,4,'329d47d145e08a1619e92b2b82193341',159.00),
(19,'BOTIN IRAFLORE',7,1,3,5,'12da4ff6bd64ee46b8378a39864b985a',199.00),
(20,'SANDALIA DELIA',6,5,2,1,'1615e62f69a6078eeddf66fe63e2a6dd',120.00),
(21,'SANDALIA KILE',6,5,6,4,'a547c170a753469ace9300a448cea883',234.00),
(22,'SANDALIA FRESA',6,5,3,4,'3f3bdadfcf6712eb9b68527ff815dbf6',123.00);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talla`
--

DROP TABLE IF EXISTS `talla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `talla` (
  `idTalla` int NOT NULL AUTO_INCREMENT,
  `nombreTalla` varchar(50) NOT NULL,
  PRIMARY KEY (`idTalla`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talla`
--

LOCK TABLES `talla` WRITE;
/*!40000 ALTER TABLE `talla` DISABLE KEYS */;
INSERT INTO `talla` VALUES
(1,'30'),
(3,'37'),
(4,'38'),
(5,'40'),
(6,'36'),
(8,'12');
/*!40000 ALTER TABLE `talla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Admin','Maria','$2a$10$SC5neFqOJHfrKpnCXZtpguJ/v8Pg.aW7Z8bqLdYc2qHCWU23qfu/y','admin@user.com'),
(2,'Cliente','Yanina Villegas','$2a$10$fxKJIviw2iGB9qJ/JQqhaOms3HAoCmivlq4M6HC5iaEfNAqQYDHWy','villegasyanina.c@gmail.com'),
(3,'Vendedor','Betty','$2a$10$0KhffQ6yiqXKvrcZzAdRX.O2V3nvRejMerN.HLN53ifdocZ2bexJm','vendeor@user.com'),
(4,'Cliente','Yuliana Torres','123','cliente2@user.com'),
(5,'Cliente','Juan Perez','123','cliente3@user.com'),
(6,'Cliente','Miguel Retamozo','123','cliente4@user.com'),
(7,'Cliente','Ana de Arco','123','cliente5@user.com'),
(8,'Cliente','Jimena Garcia','123','cliente8@user.com'),
(9,'Cliente','Juanita Ville','123','cliente9@user.com'),
(10,'Cliente','Jenni Flores','123','cliente11@user.com'),
(11,'Cliente','Stephany Pilar','123','cliente10@user.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venta` (
  `idVenta` int NOT NULL AUTO_INCREMENT,
  `fechaVenta` datetime NOT NULL,
  `idUsuario` int NOT NULL,
  `totalVenta` decimal(10,2) NOT NULL,
  PRIMARY KEY (`idVenta`),
  KEY `fk_5` (`idUsuario`),
  CONSTRAINT `fk_5` FOREIGN KEY (`idUsuario`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES
(5,'2024-03-01 00:00:00',4,1785.00),
(6,'2024-03-07 00:00:00',5,124.00),
(7,'2024-03-10 00:00:00',6,756.00),
(8,'2024-02-26 00:00:00',7,240.00),
(9,'2024-02-16 00:00:00',8,597.00),
(10,'2024-01-12 00:00:00',9,159.00),
(11,'2024-02-22 00:00:00',10,123.00),
(12,'2024-03-01 00:00:00',11,0.00),
(13,'2024-01-19 00:00:00',2,159.00),
(14,'2024-01-30 00:00:00',6,234.00),
(15,'2024-01-29 00:00:00',10,124.00),
(16,'2024-01-07 00:00:00',11,0.00),
(17,'2024-03-01 00:00:00',7,690.00),
(18,'2024-02-26 00:00:00',10,702.00),
(23,'2024-03-13 00:00:00',3,137.00),
(24,'2024-03-13 00:00:00',3,68.00),
(25,'2024-03-13 00:00:00',3,68.00),
(26,'2024-03-13 00:00:00',3,68.00),
(27,'2024-03-13 00:00:00',3,1112.00),
(32,'2024-03-17 00:00:00',2,1112.70),
(34,'2024-03-17 00:00:00',2,1112.70),
(35,'2024-03-17 00:00:00',2,1112.70),
(36,'2024-03-17 00:00:00',2,1112.70),
(37,'2024-03-17 00:00:00',2,1112.70),
(38,'2024-03-17 00:00:00',2,1112.70),
(39,'2024-03-17 00:00:00',2,1112.70),
(40,'2024-03-17 00:00:00',2,1112.70),
(41,'2024-03-17 00:00:00',2,1112.70),
(43,'2024-03-17 00:00:00',2,1112.70),
(44,'2024-03-17 00:00:00',2,1112.70),
(45,'2024-03-17 00:00:00',2,1112.70),
(47,'2024-03-17 00:00:00',3,879.00),
(48,'2024-03-17 00:00:00',2,240.00),
(49,'2024-03-17 00:00:00',2,518.00),
(50,'2024-03-17 00:00:00',2,120.00),
(51,'2024-03-17 00:00:00',2,199.00),
(52,'2024-03-17 00:00:00',2,478.00),
(53,'2024-03-17 00:00:00',2,318.00),
(54,'2024-03-17 00:00:00',2,159.00),
(55,'2024-03-17 00:00:00',2,159.00);
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-19 17:04:49
