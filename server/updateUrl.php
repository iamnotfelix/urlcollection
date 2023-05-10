<?php
    include "cors.php";
    include "connection.php";

    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data['id'];
        $url = $data['url'];
        $description = $data['description'];

        $pattern = '/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/';
        if (!preg_match($pattern, $url)) {
            http_response_code(400);
            echo json_encode('URL is invalid.');
            exit;
        }

        if (strlen($url) == 0 || strlen($description) == 0)
        {
            http_response_code(400);
            echo json_encode("All fields are required.");
            exit;
        }
        
        $sql = $connection->prepare("update urls set url=?, description=? where id=?");
        $sql->bind_param("ssi", $url, $description, $id);
        $sql->execute();

        $sql->close();

        echo json_encode(array('status' => 'success'));
    }
?>