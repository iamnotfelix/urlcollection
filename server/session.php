<?php
    session_start();

    if (isset($_SESSION["userId"])) {
        $userId = $_SESSION["userId"];
    } else {
        echo json_encode("error");
        exit;
    }
?>