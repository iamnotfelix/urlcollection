<?php
    include "connection.php";
    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data['id'];
        $url = $data['url'];
        $description = $data['description'];

        $querry = "update urls set url='$url', description='$description' where id=$id;";
        $result = $connection->query($querry);
    
        if (!$result) {
                echo "Somethig went wrong.";
                header("Location: ../errorPage.php");
        }
        header('Content-Type: application/json');
        echo json_encode(array('status' => 'success'));
    }
?>