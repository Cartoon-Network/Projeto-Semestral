<?php
$host = "localhost"; // Host do banco de dados
$username = "seu_usuario"; // Nome de usuário do banco de dados
$password = "sua_senha"; // Senha do banco de dados
$dbname = "seu_banco_de_dados"; // Nome do banco de dados

// Conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $dbname);

// Verifica se a conexão foi estabelecida
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}
?>

