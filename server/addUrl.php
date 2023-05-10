<?php
    include "cors.php";
    include "connection.php";
    
    $userId = 0;
    if (isset($_GET['userId']))
    {
        $userId = $_GET['userId'];
    }
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        $url = $data['url'];
        $description = $data['description'];
        $category = $data['category'];

        // $pattern = '/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/';
        // if (!preg_match($pattern, $url)) {
        //     echo json_encode(array('status' => 'error pattern'));
        //     exit;
        // }

        // if (strlen($url) == 0 || strlen($description) == 0)
        // {
        //     echo json_encode(array('status' => 'error length'));
        //     exit;
        // }

        $sql = $connection->prepare("insert into urls (url, description, category, user) values (?, ?, ?, ?)");
        $sql->bind_param("ssii", $url, $description, $category, $userId);
        $sql->execute();
        
        
        echo json_encode(array('status' => 'success'));
    }
?>