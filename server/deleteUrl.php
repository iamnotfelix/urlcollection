<?php
    include "connection.php";
    
    $id = $_GET['id'];

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $sql = $connection->prepare("delete from urls where id=?");
        $sql->bind_param("i", $id);
        $sql->execute();
    }
?>