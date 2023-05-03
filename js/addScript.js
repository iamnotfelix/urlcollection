import { getCategories, addUrl } from './requests.js'

const validate = (url, description) => {
    if (url.length == 0) {
        return false;
    }
    
    if (description.length == 0) {
        return false;
    }

    return true;
}

const populateSelect = (rows) => {
    var select = document.querySelector("#categoryInput"); 
    rows.forEach((row) => {
        var option = document.createElement("option");
        option.innerHTML = row["name"];
        option.setAttribute("value", row["id"].toString());
        select.appendChild(option);
    });
}

const redirectToMain = (response) => {
    window.location.href = "./main.php";
}

const populateComponents = () => {
    getCategories(populateSelect);
}


const submitForm = (event) => {
    event.preventDefault();

    const url = event.target.elements["url"].value;
    const description = event.target.elements["description"].value;
    const category = event.target.elements["category"].value;

    if (validate(url, description)) {
        const content = {
            url: url,
            description: description,
            category: category
        }
        addUrl(content, redirectToMain);
    } else {
        console.log("asdf")
        event.target.reset();
    }
}

document.addEventListener("DOMContentLoaded", populateComponents);
document.querySelector("#addForm").addEventListener("submit", submitForm);