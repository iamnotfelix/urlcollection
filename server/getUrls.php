<?php
    include "connection.php";

    $pageSize = 4;

    $sql = "select * from urls";
    $result = $connection->query($sql);

    $number = mysqli_num_rows($result);
    $pages = ceil ($number / $pageSize);  

    $page = 1;
    if (isset ($_GET['page']) ) {  
        $page = $_GET['page'];
    }
    if ($page < 1 || $page > $pages) {
        $page = 1;
    }

    $from = ($page-1) * $pageSize;  
    
    $sql = "select * from urls LIMIT $from, $pageSize"; 
    $result = $connection->query($sql);
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        // echo json_encode($row), '<br/>';
        $jsonResult[] = $row;
    }

    echo json_encode($jsonResult);
?>