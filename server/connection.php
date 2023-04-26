<?php    
    $server = "localhost";
    $username = "root";
    $password = "rootroot";
    $database = "urlcollection";
    $port=3306;

    // Connect
    $connection = new mysqli($server, $username, $password, $database, $port);

    // Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }
?>