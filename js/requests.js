
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

export const addUrl = (content, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response));
        }
    };
    xhr.open("POST", `server/addUrl.php`);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(content));
}

export const updateUrl = (content, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(JSON.parse(xhr.response));
        }
    };
    xhr.open("PUT", `server/updateUrl.php`);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(content));
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

// Users

export const login = (content, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            callback(xhr.response);
        }
    };
    xhr.open("POST", "server/login.php");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(content));
}
