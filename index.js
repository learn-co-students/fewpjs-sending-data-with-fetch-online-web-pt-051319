// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name, 
            email: email 
        })
    })
    .then(
        res => res.json()
    )
    .then(
        data => appendToDom(data.id)
    )
    .catch( error => appendToDom(error.message))
}

function appendToDom(content) {
    const body = document.querySelector("body")
    const p = document.createElement("p")
    p.innerHTML = content
    body.appendChild(p)
}