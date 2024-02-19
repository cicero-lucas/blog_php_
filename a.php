<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os dados enviados no corpo da requisição
    $data = json_decode(file_get_contents('php://input'), true);
    var_dump($data);
    
    // Verifica se o campo "nome" foi enviado
    if (isset($data['nome'])) {
        // Obtém o nome enviado
        $nome = $data['nome'];
        $idade=$data['idade'];
        
        // Exibe o nome na resposta
        echo "Nome recebido aaa : $nome";
    } else {
        // Se o campo "nome" não foi enviado, exibe uma mensagem de erro
        echo "Campo 'nome' não enviado.";
    }
} 
?>
