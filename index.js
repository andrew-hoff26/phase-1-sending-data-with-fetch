// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
}

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
            "Accept": "application/json",
    },
    body: JSON.stringify(formData),
}
fetch("http://localhost:3000/dogs", configurationObject)
.then(function (response) {
    return response.json();
})
.then(function (object) {
    console.log(object);
});

function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  
    const body = JSON.stringify({
      name: name,
      email: email
    });
  
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        document.body.innerHTML += `<p>New user ID: ${id}</p>`;
      })
      .catch(error => {
        // Append the error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }