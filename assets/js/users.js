let logoutButton = document.getElementById("logout-button");
(sessionStorage.getItem("token")) ? '' : window.location.href = '/';

fetch('https://reqres.in/api/users?page=1')
    .then(res => res.json())
    .then((data) => {
        let users = data.data;
        let showing = data.per_page;
        let total = data.total;
        let displayInfoString = 'Mostrando ' + showing + ' de ' + total + '';
        let userCard = ''

        for (let i = 0; i < users.length; i++) {
            userCard +=
                '<div class="user-item">' +
                '<img class="user-img" src=' + users[i].avatar + '>' +
                '<p class="user-name">' + users[i].first_name + ' ' + users[i].last_name + '</p>' +
                '<p class="user-email">' + users[i].email + '</p>' +
                '<img class="edit-icon" src="../assets/img/icon-edit.svg">' +
                '</div>'
        }
        const container = document.querySelector('#user-list-container')
        container.insertAdjacentHTML('beforeend', userCard)
        const displayInfo = document.querySelector('#display-info')
        displayInfo.insertAdjacentHTML('beforeend', displayInfoString)
    }).catch(err => console.error(err));


    logoutButton.addEventListener("click", function (e) {
        e.preventDefault();
        sessionStorage.removeItem("token");
        window.location.href = '/';
    });


