const adduserObj = document.getElementById('adduser');
const nameObj = document.getElementById('name');
const emailObj = document.getElementById('email');
const usertableObj = document.getElementById('usertable');

// emailObj wird immer
// document.getElementById bleiben
//
// passiert NIEMALS:
// emailObj = null; // NICHT OKAYzuweisung
// emailObj = 3;
//
// emailObj.x = 3 // OK, mutation

function randomString(length) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const alphaArray = alpha.split('');
    let str = '';
    for (let i = 0; i < length; i++) {
        str += alphaArray[Math.floor(Math.random() * alpha.length)];
    }

    return str;
}

adduserObj.onclick = function () {
    name = nameObj.value;
    email = emailObj.value;
    id = randomString(12)
    createTable(name, email, id);
}

function createTable(name, email, id) {
    if (name !== "") {

        const newTr = document.createElement('tr');
        const newTdName = document.createElement('td');
        const newTdEmail = document.createElement('td');
        const newTdId = document.createElement('td');

        newTdName.innerText = name;
        newTdEmail.innerText = email;
        const newId = id;
        newTdId.innerText = id;

        newTr.appendChild(newTdName);
        newTr.appendChild(newTdEmail);
        newTr.appendChild(newTdId);
        newTr.setAttribute('data-id', newId);


        // X button erstellen
        const newXBtn = document.createElement('button');
        newXBtn.innerText = 'X';
        newXBtn.onclick = function () {
            const trToDelete = document.querySelector(`[data-id="${newId}"]`);

            let userStorage = JSON.parse(localStorage.getItem(`user`));

            let newUserStorage = [];
            for (let i = 0; i < userStorage.length; i++) {
                if (newId !== userStorage[i].id) {
                    newUserStorage.push(userStorage[i]);
                }
            }
            localStorage.setItem('user', JSON.stringify(newUserStorage));
            trToDelete.remove();
        }
        newTdBtn = document.createElement('td');
        newTdBtn.appendChild(newXBtn);
        newTr.appendChild(newTdBtn);

        usertableObj.appendChild(newTr);

        if (JSON.parse(localStorage.getItem(`user`)) !== null) {
            var userStorage = JSON.parse(localStorage.getItem(`user`));
        } else {
            userStorage = [];
        }
        userStorage.push({
            id: id,
            name: nameObj.value,
            email: emailObj.value
        });
        localStorage.setItem(`user`, JSON.stringify(userStorage));
    }

}



let userStorageAtBegin = JSON.parse(localStorage.getItem(`user`));

if (userStorageAtBegin !== null) {
    for (let i = 0; i < userStorageAtBegin.length; i++) {
        createTable(userStorageAtBegin[i].name, userStorageAtBegin[i].email, userStorageAtBegin[i].id);
    }
}