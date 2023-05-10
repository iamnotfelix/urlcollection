<?php
    include "cors.php";
    include "connection.php";
    $userId = 1;

    $categoryId = $_GET["categoryId"];

    $pageSize = 4;

    $sql = $connection->prepare("select * from urls where category=? and user=?");
    $sql->bind_param("ii", $categoryId, $userId);
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
    
    $sql = "select * from urls where category=$categoryId and user=$userId limit $from, $pageSize";
    $result = $connection->query($sql);

    $sql = $connection->prepare("select * from urls where category=? and user=? limit ?, ?");
    $sql->bind_param("iiii", $categoryId, $userId, $from, $pageSize);
    $sql->execute();
    $result = $sql->get_result();
    
    $jsonResult = array();
    while ($row = $result->fetch_assoc()) {
        $jsonResult[] = $row;
    }
    $sql->close();

    echo json_encode(array('totalPages' => $totalPages, 'urls' => $jsonResult));
?>