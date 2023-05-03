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
        // anchor.setAttribute("href", `main.php?page=${i}`);
        anchor.text = i.toString();

        li.appendChild(anchor);
        navigator.appendChild(li);
    }
}

const populateComponents = () => {
    getUrls(1, populateTable);
    getCategories(populateSelect);
    getUrlPages(populateNavigator);
}

const changeView = (event) => {
    const categoryId = event.target.value;
    if (categoryId == 0) {
        getUrls(populateTable);
    } else {
        getUrlsByCategory(categoryId, populateTable);
    }
}

const changePage = (event) => {
    if (event.target.tagName == "A") {
        const page = event.target.innerHTML;
        console.log(page);
        getUrls(page, populateTable);
    }
}

document.addEventListener("DOMContentLoaded", populateComponents);
document.querySelector("#categoryFilter").addEventListener("change", changeView);
document.querySelector("#navigator").addEventListener("click", changePage);