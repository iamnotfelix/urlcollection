<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
    <script type="text/javascript" src="./js/requestHandler.js"></script>
    <title>Delete URL</title>
</head>
<body onload="getCategories()">
<form method="POST" action="./server/addUrl.php" autocomplete="off">
    <div class="container my-5">
        <h2>Delete URL</h2>
        <p>Are you sure you want to delete this URL?</p>
        <a class="btn btn-danger " role="button" onclick="deleteUrl()">Delete</a>
        <a class="btn btn-primary " role="button" href="main.php">Cancel</a>
    </div>
</form>
</body>
</html>