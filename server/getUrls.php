<?php
    include "connection.php";
    include "cors.php";
    
    $userId = 0;
    if (isset($_GET['userId']))
    {
        $userId = $_GET['userId'];
    }

    $pageSize = 4;
    if (isset($_GET['pageSize']))
    {
        $pageSize = $_GET['pageSize'];
    }

    $sql = $connection->prepare("select * from urls where user = ?");
    $sql->bind_param("i", $userId);
    $sql->execute();
    $result = $sql->get_result();

    $number = mysqli_num_rows($result);
    $totalPages = ceil ($number / $pageSize); 
    $sql->close(); 

    $page = 1;
    if (isset ($_GET['page']) ) {  
        $page = $_GET['page'];
    }
    if ($page < 1 || $page > $totalPages) {
        $page = 1;
    }

    $from = ($page-1) * $pageSize;  
    
    $sql = $connection->prepare("select * from urls where user=? limit ?, ?"); 
    $sql->bind_param("iii", $userId, $from, $pageSize);
    $sql->execute();
    $result = $sql->get_result();
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        $jsonResult[] = $row;
    }
    $sql->close(); 
    echo json_encode(array('totalPages' => $totalPages, 'urls' => $jsonResult));
?>