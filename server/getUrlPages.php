<?php
    include "connection.php";
    
    if (isset ($_GET['category']) ) {  
        $category = $_GET['category'];
        $sql = "select * from urls where category=$category;";
    } else {
        $sql = "select * from urls;";
    }

    $result = $connection->query($sql);

    $pageSize = 4;
    $number = mysqli_num_rows($result);
    $pages = ceil ($number / $pageSize);

    echo $pages;
?>