var loginButton = document.getElementById("login-button");

//document.querySelectorAll('.entrar')[0].style.display = 'none';
//document.querySelectorAll('.smooth-spinner')[0].style.display = 'block';

function login(email, password) {
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": email, "password": password }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = "/pages/lista-usuarios.html";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

loginButton.addEventListener("click", function (e) {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    login(email, senha);
}, false);