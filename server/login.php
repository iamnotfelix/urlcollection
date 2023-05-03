<?php
    include "connection.php";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        $username = $data['username'];
        $password = $data['password'];
        
        $querry = "select * from users where username='$username';";
        $result = $connection->query($querry);
        
        if (mysqli_num_rows($result) == 0) {
            header('Content-Type: application/json');
            echo "error";
            exit;
        } else {
            $data = $result->fetch_assoc();
            if ($data["password"] != $password) {
                header('Content-Type: application/json');
                echo "error";
                exit;
            } else {
                session_start();
                $_SESSION['userId'] = $data["id"];
            }
        }
        header('Content-Type: application/json');
        echo json_encode("$username");
    }
?>