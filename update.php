<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
    <title>Update URL</title>
</head>
<body>
    <form method="POST" action="./server/updateUrl.php" autocomplete="off">
        <div class="container my-5">
            <h2>Update URL</h2>
            <div class="form-group mb-4">
                <label for="urlInput">URL</label>
                <input type="url" name="url" class="form-control" id="urlInput" placeholder="Enter URL">
            </div>
            <div class="form-group mb-4">
                <label for="descriptionInput">Description</label>
                <input type="text" name="description" class="form-control" id="descriptionInput" placeholder="Write a description">
            </div>
            <div class="form-group mb-4 d-none">
                <label for="idInput">Id</label>
                <input type="text" name="id" class="form-control" id="idInput">
            </div>
            <button class="btn btn-primary">Update</button>
        </div>
    </form>
    <script type="module" src="./js/updateScript.js"></script>
</body>
</html>