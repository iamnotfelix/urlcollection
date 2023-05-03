<?php
    include "connection.php";
    
    $sql = "select * from urls";
    $result = $connection->query($sql);

    $pageSize = 4;
    $number = mysqli_num_rows($result);
    $pages = ceil ($number / $pageSize);

    echo $pages;
?>