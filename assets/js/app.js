let loginButton = document.getElementById("login-button");
let storedToken = sessionStorage.getItem("token");
( storedToken !== undefined && storedToken !== null) ? window.location.href = "/pages/lista-usuarios.html" : '';

loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll('.entrar')[0].style.display = 'none';
    document.querySelectorAll('.smooth-spinner')[0].style.display = 'block';
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    sessionStorage.getItem("token");
    login(email, senha);
}, false);

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
            let token = data.token;
            if (token !== undefined && token !== null) {
                sessionStorage.setItem('token', token);
                window.location.href = "/pages/lista-usuarios.html";
            } else {
                document.querySelectorAll('.entrar')[0].style.display = 'block';
                document.querySelectorAll('.smooth-spinner')[0].style.display = 'none';
                document.querySelectorAll('.login-error')[0].style.opacity = "1";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



