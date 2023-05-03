
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

export const getUrlsByCategory = (categoryId, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response));
        }
    };
    xhr.open("GET", `server/getUrlsByCategory.php?categoryId=${categoryId}`);
    xhr.send();
}

export const getUrlPages = (callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response));
        }
    };
    xhr.open("GET", `server/getUrlPages.php`);
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