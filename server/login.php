<?php
    include "cors.php";
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
            http_response_code(400);
            die('User or password is invalid.');
            exit;
        } else {
            $data = $result->fetch_assoc();
            if ($data["password"] != $password) {
                http_response_code(400);
                die('User or password is invalid.');
                exit;
            } 
            echo json_encode($data);
        }
        $sql->close();
    }
?>