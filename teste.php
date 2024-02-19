<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se o campo "nome" foi enviado
    if (isset($_POST['nome'])) {
        // Obtém o nome enviado
        $nome = $_POST['nome'];
        
        // Exibe o nome na resposta
        echo "Nome recebido: $nome";
    } else {
        // Se o campo "nome" não foi enviado, exibe uma mensagem de erro
        echo "Campo 'nome' não enviado.";
    }
} else {
    // Se a requisição não for do tipo POST, exibe uma mensagem de erro
    echo "Requisição inválida.";
}
?>
