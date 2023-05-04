<?php
    include "connection.php";

    $id = $_GET["id"];

    $sql = $connection->prepare("select * from urls where id=?");
    $sql->bind_param("i", $id);
    $sql->execute();
    $result = $sql->get_result();
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        $jsonResult[] = $row;
    }

    echo json_encode($jsonResult);
?>