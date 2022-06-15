// const axios = require('axios');

// *

/*function getPadrão() {
    axios.get('http://localhost:3000/usuarios')
        .then(res => console.log(res))

}
getPadrão() */
// function fazPost(url, body) {
//     let request = new XMLHttpRequest()
//     request.open("POST", url, true)
//     request.setRequestHeader("Content-type", "application/json")
//     console.log(JSON.stringify(body))
//     request.send(JSON.stringify(body))

// }

// function cadastrar() {

//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
//         const formData = new FormData(form);
//         const payload = new URLSearchParams(formData);
//         fetch("http://localhost:3000/registro", {
//                 method: 'POST',
//                 body: payload,
//             })
//             .then(res => res.json())
//             .then(data => console.log(data))
//     })
// }