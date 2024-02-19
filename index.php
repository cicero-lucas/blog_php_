<?php

// Define os cabeçalhos da resposta
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Methods: POST ");
header("Access-Control-Allow-Headers: Content-Type ");



if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $img = $_FILES['img'];
    $nome = $_POST['nome'];
    $email = $_POST['email'];
   
    var_dump( $img );
    echo 'Nome: ' . $nome . '<br>';
    echo 'Email: ' . $email . '<br>';
  
}
?>


