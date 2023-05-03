import { deleteUrl } from './requests.js';

const redirectToMain = () => {
    window.location.href = "./main.php";
}

const removeUrl = () => {
    var path = new URL(window.location.href);
    const urlId = path.searchParams.get("id");

    deleteUrl(urlId, redirectToMain);
}

document.querySelector("#deleteButton").addEventListener("click", removeUrl);