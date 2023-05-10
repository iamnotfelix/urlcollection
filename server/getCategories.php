<?php
    include "cors.php";
    include "connection.php";

    $sql = "select * from categories";
    $result = $connection->query($sql);

    $sql = $connection->prepare("select * from categories");
    $sql->execute();
    $result = $sql->get_result();
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        $jsonResult[] = $row;
    }

    echo json_encode($jsonResult);
?>