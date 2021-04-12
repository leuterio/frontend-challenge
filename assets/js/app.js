var loginButton = document.getElementById("login-button");

loginButton.addEventListener("click",function(e){
    console.log('clock');
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    login(email, senha);
},false);

function login(email, password) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/login", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        email: email,
        password: password
    }));
    xhr.onload = function () {
        document.querySelectorAll('.entrar')[0].style.display = 'none';
        document.querySelectorAll('.smooth-spinner')[0].style.display = 'block';

        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            window.location.href = "/pages/lista-usuarios.html";
        }

        console.log(this.responseText);
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
}
