function submitData(name, email) {
    let formData = {
        name,
        email
    };
    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", obj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        const div = document.createElement("div")
        document.body.appendChild(div)
        div.textContent = object["id"]
        //userID.document.appendChild(object.id);

    })
    .catch(function(error) {
        alert("bad things man");
        document.body.textContent = error["message"];
    })
}