<?php 
define ('DB_SERVER','localhost');
define ('DB_USERNAME','root');
define ('DB_PASSWORD','');
define ('DB_NAME','login');


$conn =mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME);

if ($conn == false){ die('Erreur de connexion erreurs :' .mysqli_connect_error());}
?>
<!-- sql for table : 
    CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL; -->