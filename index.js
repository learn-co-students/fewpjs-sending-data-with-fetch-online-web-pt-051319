let  form = document.getElementById('userForm')
let container = document.getElementById('container')

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let name = e.target.userName.value;
	let email = e.target.userEmail.value;
	let data = {name: name, email: email};
	submitData(data)
});

const submitData = (...data) => {
	let configObj = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({
			name: data[0],
			email: data[1]
		})
	};
	return fetch('http://localhost:3000/users', configObj)
		.then((resp) => resp.json())
		.then(respJSON => updatePage([true, respJSON]))
		.catch((error) => updatePage([false, error.message]));
}

const updatePage = (data) => {
	container.textContent = data[0] ? data[1].id : data[1];
}