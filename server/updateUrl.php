<?php
    include "connection.php";
    
    extract($_POST);
    if (isset($_POST['id']) && isset($_POST['url']) && isset($_POST['description'])) {
        $querry = "update urls set url='$url', description='$description' where id=$id;";
        $result = $connection->query($querry);
    
        if (!$result) {
                echo "Somethig went wrong.";
                header("Location: ../errorPage.php");
            }
        header("Location: ../main.php");
    }
?>