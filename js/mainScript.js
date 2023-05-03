import { getUrls, getCategories, getUrlsByCategory } from './requests.js';

const populateTable = (rows) => {
    var table = document.querySelector("#urlTable");
    table.innerHTML = '';

    rows.forEach((row) => {
        var tr = document.createElement("tr");

        for (let key in row) {
            var td = document.createElement("td");
            td.innerText = row[key].toString();
            tr.appendChild(td);
        }

        var updateBtn = document.createElement("a");
        updateBtn.setAttribute("href", `/urlcollection/update.php?id=${row['id']}`);
        updateBtn.classList.add("btn", "btn-primary", "btn-sm", "me-1");
        updateBtn.innerText = "Update";
        
        var deleteBtn = document.createElement("a");
        deleteBtn.setAttribute("href", `/urlcollection/delete.php?id=${row['id']}`);
        deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "me-1");
        deleteBtn.innerText = "Delete";

        var buttonCell = document.createElement("td");
        buttonCell.appendChild(updateBtn);
        buttonCell.appendChild(deleteBtn);

        tr.appendChild(buttonCell);

        table.appendChild(tr);
    });
}

const populateSelect = (rows) => {
    var select = document.querySelector("#categoryFilter"); 
    rows.forEach((row) => {
        var option = document.createElement("option");
        option.innerHTML = row["name"];
        option.setAttribute("value", row["id"].toString());
        select.appendChild(option);
    });
}


const populateComponents = () => {
    getUrls(populateTable);
    getCategories(populateSelect);
}

const changeView = (event) => {
    const categoryId = event.target.value;
    if (categoryId == 0) {
        getUrls(populateTable);
    } else {
        getUrlsByCategory(categoryId, populateTable);
    }
}

document.addEventListener("DOMContentLoaded", populateComponents);
document.querySelector("#categoryFilter").addEventListener("change", changeView);