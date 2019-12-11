
function submitData(name, email) {
    let formData = { name: name, email: email };

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data);
            document.querySelector('body').innerHTML = data.id
        })
        .catch(function (error) {
            document.querySelector('body').innerHTML = error.message
        }
        );
}