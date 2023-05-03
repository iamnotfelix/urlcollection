
// Urls

export const getUrls = (page, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response));
        }
    };
    xhr.open("GET", `server/getUrls.php?page=${page}`);
    xhr.send();
}

export const getUrlById = (urlId, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response)[0]);
        }
    };
    xhr.open("GET", `server/getUrlById.php?id=${urlId}`);
    xhr.send();
}

export const getUrlsByCategory = (categoryId, page, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response));
        }
    };
    xhr.open("GET", `server/getUrlsByCategory.php?categoryId=${categoryId}&page=${page}`);
    xhr.send();
}

export const getUrlPages = (category, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response));
        }
    };

    var path;
    if (category >= 0) {
        path = `server/getUrlPages.php?category=${category}`;
    } else {
        path = `server/getUrlPages.php`;
    }

    xhr.open("GET", path);
    xhr.send();
}

export const deleteUrl = (urlId, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback();
        }
    };
    xhr.open("DELETE", `server/deleteUrl.php?id=${urlId}`);
    xhr.send();
}

// Categories

export const getCategories = (callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response));
        }
    };
    xhr.open("GET", "server/getCategories.php");
    xhr.send();
}