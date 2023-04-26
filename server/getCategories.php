<?php
    include "connection.php";

    $sql = "select * from categories";
    $result = $connection->query($sql);
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        $jsonResult[] = $row;
    }

    echo json_encode($jsonResult);
?>