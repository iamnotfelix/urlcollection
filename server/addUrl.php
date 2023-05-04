<?php
    include "connection.php";
    include "session.php";
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        $url = $data['url'];
        $description = $data['description'];
        $category = $data['category'];
        
        $querry = "insert into urls (url, description, category, user) values ('$url', '$description', $category, $userId);";
        $result = $connection->query($querry);
        
        if (!$result) {
            echo "Somethig went wrong.";
            header("Location: ../errorPage.php");
        }
        header('Content-Type: application/json');
        echo json_encode(array('status' => 'success'));
    }
?>