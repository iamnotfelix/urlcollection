<?php
    include "connection.php";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        $username = $data['username'];
        $password = $data['password'];

        $sql = $connection->prepare("select * from users where username=?");
        $sql->bind_param("s", $username);
        $sql->execute();
        $result = $sql->get_result();
        
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
                session_regenerate_id();
                $_SESSION['userId'] = $data["id"];
            }
        }
        $slq->close();
        header('Content-Type: application/json');
        echo json_encode("$username");
    }
?>