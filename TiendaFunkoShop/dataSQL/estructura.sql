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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

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
  UNIQUE KEY `profile_img_UNIQUE` (`profile_img`)CREATE TABLE `products` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name_product` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `product_description` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `price` int NOT NULL,
  `image_product` varchar(1000) COLLATE utf8_spanish_ci NOT NULL,
  `category` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE KEY `nombre_UNIQUE` (`name_product`),
  UNIQUE KEY `image_UNIQUE` (`image_product`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

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