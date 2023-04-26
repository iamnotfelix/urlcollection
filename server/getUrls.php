<?php
    include "connection.php";

    $sql = "select * from urls";
    $result = $connection->query($sql);
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        // echo json_encode($row), '<br/>';
        $jsonResult[] = $row;
    }

    echo json_encode($jsonResult);
?>