import { getUrlById } from './requests.js'

const populateInputs = (row) => {
    var url = document.querySelector("#urlInput");
    var description = document.querySelector("#descriptionInput");
    var id = document.querySelector("#idInput");

    url.setAttribute('value', row["url"]);
    description.setAttribute('value', row["description"]);
    id.setAttribute('value', row["id"]);
}


const populateComponents = () => {
    var path = new URL(window.location.href);
    const urlId = path.searchParams.get("id");

    getUrlById(urlId, populateInputs);
}


document.addEventListener("DOMContentLoaded", populateComponents);