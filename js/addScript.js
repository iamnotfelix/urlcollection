import { getCategories } from './requests.js'

// const populateInputs = (row) => {
//     var url = document.querySelector("#urlInput");
//     var description = document.querySelector("#descriptionInput");
//     var id = document.querySelector("#idInput");

//     url.setAttribute('value', row["url"]);
//     description.setAttribute('value', row["description"]);
//     id.setAttribute('value', row["id"]);
// }

const populateSelect = (rows) => {
    var select = document.querySelector("#categoryInput"); 
    rows.forEach((row) => {
        var option = document.createElement("option");
        option.innerHTML = row["name"];
        option.setAttribute("value", row["id"].toString());
        select.appendChild(option);
    });
}

const populateComponents = () => {
    // var path = new URL(window.location.href);
    // const urlId = path.searchParams.get("id");

    getCategories(populateSelect);
}


document.addEventListener("DOMContentLoaded", populateComponents);