console.log(`30_LocalStorage`);

// localStorage

// .getItem(itemName) liest item aus

// .setItem(itemName, itemWert) setzt neues Item

// .removeItem(itemName) löscht item

// .clear() löscht localStorage

const userObj = document.getElementById(`user`);
const setUsernameObj = document.getElementById(`setUsername`);
const deleteUsernameObj = document.getElementById(`deleteUsername`);
const h2Obj = document.getElementsByTagName(`h2`);

function anfang() {

if (localStorage.getItem(`username`) === null) {
    h2Obj[0].innerText = `Hallo unbekannter Nutzer`;
    console.log(localStorage);
} else {
    h2Obj[0].innerText = `Hallo ${localStorage.username}`;
    console.log(localStorage);
}
}

setUsernameObj.onclick = function () {

    if (userObj.value !== ``) {
        localStorage.setItem(`username`, userObj.value);
        h2Obj[0].innerText = `Hallo ${localStorage.username}`;
        userObj.value = ``;
        console.log(localStorage);
    } else {
        alert(`Keine gültige Eingabe!`);
    }
}

deleteUsernameObj.onclick = function () {
    localStorage.clear();
    h2Obj[0].innerText = `Benutzername wurde gelöscht!`
    console.log(localStorage);
}


deleteUsernameObj.style.background = `orange`;
deleteUsernameObj.style.height = `50px`;
deleteUsernameObj.style.display = `inline-block`;
deleteUsernameObj.style.padding = `10px 20px`;
setUsernameObj.style.backgroundColor = `yellowgreen`;
setUsernameObj.style.height = `50px`;
setUsernameObj.style.display = `inline-block`;
setUsernameObj.style.padding = `10px 20px`;
userObj.style.height = `50px`;
userObj.style.boxSizing = `border-box`;
userObj.style.paddingLeft = `10px`;

anfang();