<!-- tutoriel :
PHP/SQL https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql/4237646-decouvrez-le-fonctionnement-dun-site-ecrit-en-php -->
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

  <?php 
if (isset($_POST['user']) &&  isset($_POST['password'])) {
  foreach ($users as $user) {
      if (
          $user['user'] === $_POST['user'] &&
          $user['password'] === $_POST['password']
      ) {
          $loggedUser=['${user}'];
      } else {
          $errorMessage = sprintf('Les informations envoyées ne permettent pas de vous identifier : (%s/%s)',
              $_POST['user'],
              $_POST['password']
          );
      }
  }
}
?>