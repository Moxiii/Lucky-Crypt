<?php
$currentDirectory = getcwd();
$uploadDirectory = "/files/";

$erreurs =[];

$filename = $_FILES['the_file']['name'];
$fileSize = $_FILES['the_file']['size'];
$fileTmpName  = $_FILES['the_file']['tmp_name.enc'];
$fileType = $_FILES['the_file']['type'];
$fileExtension = strtolower(end(explode('.',$fileName)));

$uploadPath = $currentDirectory . $uploadDirectory .basename($fileName);
if (isset($_POST['submit'])){
  if(empty($erreurs)){
    $didUpload = move_uploaded_file($fileTmpName , $uploadPath);
    if($didUpload){
      echo "The file " . basename($fileName) . " has been uploaded";
    } else {
      echo "An error occurred. Please contact the administrator.";
    }
  } else {
    foreach ($errors as $error) {
      echo $error . "These are the errors" . "\n";
    }
    }
  }
?>