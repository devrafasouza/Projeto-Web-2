const { response } = require("express")



function fazPost(url, body) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

}

function cadastrar() {

    event.defaultPrevented()
    const url = "http://localhost:3030"
    let nome = document.getElementById("name").value
    let senha = document.getElementById("password").value
    let email = document.getElementById("email").value
    body = {
        "name": nome,
        "password": senha,
        "email": email

    }
    fazPost(url, body)
}