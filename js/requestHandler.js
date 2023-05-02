
// Urls

const getUrls = () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            var table = document.querySelector("#urlTable");
            var rows = JSON.parse(xhr.response);
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
                deleteBtn.classList.add("btn", "btn-primary", "btn-sm", "me-1");
                deleteBtn.innerText = "Delete";

                var buttonCell = document.createElement("td");
                buttonCell.appendChild(updateBtn);
                buttonCell.appendChild(deleteBtn);

                tr.appendChild(buttonCell);

                table.appendChild(tr);
            });
        }
    };
    xhr.open("GET", "server/getUrls.php");
    xhr.send();
}

const getUrlById = () => {
    var path = new URL(this.location.href);
    const id = path.searchParams.get("id");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            var row = JSON.parse(xhr.response)[0];
            
            var url = document.querySelector("#urlInput");
            var description = document.querySelector("#descriptionInput");
            var id = document.querySelector("#idInput");

            url.setAttribute('value', row["url"]);
            description.setAttribute('value', row["description"]);
            id.setAttribute('value', row["id"]);
        }
    };
    xhr.open("GET", `server/getUrlById.php?id=${id}`);
    xhr.send();
}

// Categories

const getCategories = () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            var select = document.querySelector("#categoryInput");
            var rows = JSON.parse(xhr.response);
            rows.forEach((row) => {
                var option = document.createElement("option");
                option.innerHTML = row["name"];
                option.setAttribute("value", row["id"].toString());
                select.appendChild(option);
            });
        }
    };
    xhr.open("GET", "server/getCategories.php");
    xhr.send();
}