import { login } from './requests.js'

const redirectToMain = (response) => {
    // console.log(response);
    if (response != "error") {
        window.location.href = "./main.php";
    }
}

const subimtForm = (event) => {
    event.preventDefault();

    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;

    const content = {
        username: username,
        password: password
    }
    login(content, redirectToMain);
}

document.querySelector("#loginForm").addEventListener("submit", subimtForm);