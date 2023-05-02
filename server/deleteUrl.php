<?php
    include "connection.php";
    
    $id = $_GET['id'];

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $querry = "delete from urls where id=$id;";
        $result = $connection->query($querry);

        if (!$result) {
            echo "Somethig went wrong.";
            header("Location: ../errorPage.php");
        }
        header("Location: ../main.php");
    }
?>