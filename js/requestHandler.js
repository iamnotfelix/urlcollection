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