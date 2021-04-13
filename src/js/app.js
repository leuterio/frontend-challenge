const userPage = '/pages/lista-usuarios.html';
const loginApi = 'https://reqres.in/api/login';

let storedToken = sessionStorage.getItem('token');
storedToken !== undefined && storedToken !== null
  ? (window.location.href = userPage)
  : '';

function handleLogin(e) {
  e.preventDefault();
  const { email, senha } = getLoginData();

  if (isAValidLogin(email, senha)) {
    setSpinner();
    login(email, senha);
  } else {
    setErrorMessage('Usuário e senha são obrigatórios');
  }
}

function login(email, password) {
  fetch(loginApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      let token = data.token;
      if (token !== undefined && token !== null) {
        sessionStorage.setItem('token', token);
        window.location.href = userPage;
      } else {
        removeSpinner();
        setErrorMessage('Usuário ou senha incorretos');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function getLoginData() {
  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;

  return {
    email,
    senha,
  };
}

function isAValidLogin(email, senha) {
  return email.trim() && senha.trim();
}

function setErrorMessage(message) {
  document.querySelectorAll('.login-error')[0].textContent = message;
  document.querySelectorAll('.login-error')[0].style.opacity = '1';

  setTimeout(() => {
    document.querySelectorAll('.login-error')[0].textContent = ' ';
  }, 2000);
}
function removeSpinner() {
  document.querySelectorAll('.entrar')[0].style.display = 'block';
  document.querySelectorAll('.smooth-spinner')[0].style.display = 'none';
}

function setSpinner() {
  document.querySelectorAll('.entrar')[0].style.display = 'none';
  document.querySelectorAll('.smooth-spinner')[0].style.display = 'block';
}
