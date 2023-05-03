<?php
    include "connection.php";
    
    $categoryId = $_GET["categoryId"];

    $sql = "select * from urls where category=$categoryId";
    $result = $connection->query($sql);
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        $jsonResult[] = $row;
    }

    echo json_encode($jsonResult);
?>