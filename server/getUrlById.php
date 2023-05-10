<?php
    include "cors.php";
    include "connection.php";

    $id = $_GET["id"];

    $sql = $connection->prepare("select * from urls where id=?");
    $sql->bind_param("i", $id);
    $sql->execute();
    $result = $sql->get_result();

    echo json_encode($result->fetch_assoc());
?>