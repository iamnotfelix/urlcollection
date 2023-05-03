import { getUrls, getCategories, getUrlsByCategory, getUrlPages} from './requests.js';

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

const populateNavigator = (number) => {
    var navigator = document.querySelector("#navigator");
    navigator.innerHTML = '';

    for (let i = 1; i <= number; ++i) {
        var li = document.createElement('li');
        li.classList.add("page-item");

        var anchor = document.createElement("a");
        anchor.classList.add("page-link", "btn", "pages");
        anchor.text = i.toString();

        li.appendChild(anchor);
        navigator.appendChild(li);
    }
}

const populateComponents = () => {
    getUrls(1, populateTable);
    getCategories(populateSelect);
    getUrlPages(-1, populateNavigator);
}

const changeView = (event) => {
    const categoryId = event.target.value;
    if (categoryId == 0) {
        getUrls(1, populateTable);
        getUrlPages(-1, populateNavigator);
    } else {
        getUrlsByCategory(categoryId, 1, populateTable);
        getUrlPages(categoryId, populateNavigator);
    }
}

const changePage = (event) => {
    var value = document.querySelector("#categoryFilter").value;
    if (event.target.tagName == "A") {
        const page = event.target.innerHTML;
        if (value == 0) {
            getUrls(page, populateTable);
        } else {
            getUrlsByCategory(value, page, populateTable);
        } 
    }
}

document.addEventListener("DOMContentLoaded", populateComponents);
document.querySelector("#categoryFilter").addEventListener("change", changeView);
document.querySelector("#navigator").addEventListener("click", changePage);