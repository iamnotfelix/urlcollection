<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
    <title>Url Collection</title>
    <script type="text/javascript" src="./js/requestHandler.js"></script>
</head>
<body onload="getUrls()">
    <div class="container my-5">
        <div class="d-flex justify-content-between m-0 p-0">
            <h2>List of URLs</h2>
            <a class="btn btn-primary " role="button" href="add.php">Add URL</a>
        </div>
        <table class="table">
            <thead>
                <th>Id</th>
                <th>URL</th>
                <th>Description</th>
                <th>Category</th>
                <th>Actions</th>
            </thead>
            <tbody id="urlTable">
            </tbody>
        </table>
    </div>
</body>
</html>