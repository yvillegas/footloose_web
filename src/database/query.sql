CREATE DATABASE Footlose;

USE Prueba01;

CREATE TABLE personas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    age INT
);

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_type` varchar(50) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `users` VALUES (1,'Admin','Maria','123','admin@user.com'),(2,'Cliente','Juana','123','cliente@user.com'),(3,'Vendedor','Betty','123','vendeor@user.com');

CREATE TABLE marca(
    idMarca INT AUTO_INCREMENT PRIMARY KEY,
    nombreMarca VARCHAR(50) NOT NULL
);

CREATE TABLE modelo(
    idModelo INT AUTO_INCREMENT PRIMARY KEY,
    nombreModelo VARCHAR(50) NOT NULL
);

CREATE TABLE color(
    idColor INT AUTO_INCREMENT PRIMARY KEY,
    nombreColor VARCHAR(50) NOT NULL
);

CREATE TABLE talla(
    idTalla INT AUTO_INCREMENT PRIMARY KEY,
    nombreTalla VARCHAR(50) NOT NULL
);


CREATE TABLE producto(
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    nombreProducto VARCHAR(50) NOT NULL,
    idMarca INT NOT NULL,
    idModelo INT NOT NULL,
    idColor INT NOT NULL,
    idTalla INT NOT NULL,
    imagenProducto VARCHAR(50) NOT NULL,
    precioProducto decimal(10,2) NOT NULL,
    CONSTRAINT `fk_1` FOREIGN KEY (`idMarca`) REFERENCES `marca` (`idMarca`),
    CONSTRAINT `fk_2` FOREIGN KEY (`idModelo`) REFERENCES `modelo` (`idModelo`),
    CONSTRAINT `fk_3` FOREIGN KEY (`idColor`) REFERENCES `color` (`idColor`),
    CONSTRAINT `fk_4` FOREIGN KEY (`idTalla`) REFERENCES `talla` (`idTalla`)
);


CREATE TABLE venta(
    idVenta INT AUTO_INCREMENT PRIMARY KEY,
    fechaVenta DATETIME NOT NULL,
    idUsuario INT NOT NULL,
    totalVenta decimal(10,2) NOT NULL,
    CONSTRAINT `fk_5` FOREIGN KEY (`idUsuario`) REFERENCES `users` (`id`)
);

CREATE TABLE detalleventa(
    idDetalle INT AUTO_INCREMENT PRIMARY KEY,
    cantidadDetalle INT NOT NULL,
    precioDetalle decimal(10,2) NOT NULL,
    idVenta INT NOT NULL,
    idProducto INT NOT NULL,
    CONSTRAINT `fk_6` FOREIGN KEY (`idVenta`) REFERENCES `venta` (`idVenta`),
    CONSTRAINT `fk_7` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`)
);

SELECT * FROM personas;