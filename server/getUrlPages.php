<?php
    include "connection.php";
    include "session.php";
    
    if (isset ($_GET['category']) ) {  
        $category = $_GET['category'];
        $sql = "select * from urls where category=$category and user=$userId;";
    } else {
        $sql = "select * from urls where user=$userId;";
    }

    $result = $connection->query($sql);

    $pageSize = 4;
    $number = mysqli_num_rows($result);
    $pages = ceil ($number / $pageSize);

    echo $pages;
?>