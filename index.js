// Add your code here
function submitData(username, useremail) {
  let formData = {
    name: username,
    email: useremail
  };

  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
      debugger;
    })
    .then(function (object) {
      console.log(object);
      document.body.innerHTML = object.id
      // appendInfo(id);
    })
    .catch(function (error) {
      alert(error.message);
      document.body.innerHTML = error.message
    });
}

function appendInfo(id) {
  let paragraph = document.createElement("p");
  paragraph.innerText = id;
  document.body.appendChild(paragraph);
}

