<?php
    include "connection.php";
    include "session.php";
    
    if (isset ($_GET['category']) ) {  
        $category = $_GET['category'];
        $sql = $connection->prepare("select * from urls where category=? and user=?");
        $sql->bind_param("ii", $category, $userId);
    } else {
        $sql = "select * from urls where user=$userId;";
        $sql = $connection->prepare("select * from urls where user=?");
        $sql->bind_param("i", $userId);
    }
    $sql->execute();
    $result = $sql->get_result();

    $pageSize = 4;
    $number = mysqli_num_rows($result);
    $pages = ceil ($number / $pageSize);

    echo $pages;
?>