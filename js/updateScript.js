import { getUrlById, updateUrl } from './requests.js'

const validate = (url, description) => {
    if (url.length == 0) {
        return false;
    }
    
    if (description.length == 0) {
        return false;
    }

    return true;
}

const populateInputs = (row) => {
    var url = document.querySelector("#urlInput");
    var description = document.querySelector("#descriptionInput");
    var id = document.querySelector("#idInput");

    url.setAttribute('value', row["url"]);
    description.setAttribute('value', row["description"]);
    id.setAttribute('value', row["id"]);
}

const redirectToMain = (response) => {
    window.location.href = "./main.php";
}


const populateComponents = () => {
    var path = new URL(window.location.href);
    const urlId = path.searchParams.get("id");

    getUrlById(urlId, populateInputs);
}

const submitForm = (event) => {
    event.preventDefault();

    const id = event.target.elements["id"].value;
    const url = event.target.elements["url"].value;
    const description = event.target.elements["description"].value;

    if (validate(url, description)) {
        const content = {
            id: id,
            url: url,
            description: description
        }
        updateUrl(content, redirectToMain);
    } else {
        event.target.reset();
        populateComponents();
    }
}

document.addEventListener("DOMContentLoaded", populateComponents);
document.querySelector("#updateForm").addEventListener("submit", submitForm);