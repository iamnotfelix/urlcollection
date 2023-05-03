<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
    <title>Add URL</title>
</head>
<body>
    <form id="addForm" autocomplete="off">
    <!-- method="POST" action="./server/addUrl.php" -->
        <div class="container my-5">
            <h2>Add URL</h2>
            <div class="form-group mb-4">
                <label for="urlInput">URL</label>
                <input type="url" name="url" class="form-control" id="urlInput" placeholder="Enter URL">
            </div>
            <div class="form-group mb-4">
                <label for="descriptionInput">Description</label>
                <input type="text" name="description" class="form-control" id="descriptionInput" placeholder="Write a description">
            </div>
            <div class="form-group mb-4">
                <label for="categoryInput">Category</label>
                <select class="form-control" name="category" id="categoryInput">
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </div>
    </form>
    <script type="module" src="./js/addScript.js"></script>
</body>
</html>