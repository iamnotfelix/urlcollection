<?php
    include "connection.php";

    $id = $_GET["id"];

    $sql = "select * from urls where id=$id";
    $result = $connection->query($sql);
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        $jsonResult[] = $row;
    }

    echo json_encode($jsonResult);
?>