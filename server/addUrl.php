<?php
    include "connection.php";
    include "session.php";
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        $url = $data['url'];
        $description = $data['description'];
        $category = $data['category'];

        $sql = $connection->prepare("insert into urls (url, description, category, user) values (?, ?, ?, ?)");
        $sql->bind_param("ssii", $url, $description, $category, $userId);
        $sql->execute();
        
        header('Content-Type: application/json');
        echo json_encode(array('status' => 'success'));
    }
?>