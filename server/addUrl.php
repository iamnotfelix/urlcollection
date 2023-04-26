<?php
    include "connection.php";
    
    extract($_POST);
    if (isset($_POST['url']) && isset($_POST['description']) && isset($_POST['category'])) {
        $querry = "insert into urls (url, description, category) values ('$url', '$description', $category);";
        $result = $connection->query($querry);

        if (!$result) {
            echo "Somethig went wrong.";
            header("Location: ../errorPage.php");
        }
        header("Location: ../main.php");
    }
?>