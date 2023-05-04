<?php
    include "connection.php";
    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data['id'];
        $url = $data['url'];
        $description = $data['description'];
        
        $sql = $connection->prepare("update urls set url=?, description=? where id=?");
        $sql->bind_param("ssi", $url, $description, $id);
        $sql->execute();

        // if($sql->affected_rows === 0) exit('No rows updated');

        $sql->close();

        header('Content-Type: application/json');
        echo json_encode(array('status' => 'success'));
    }
?>