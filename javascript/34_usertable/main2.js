const nameInputObj = document.getElementById(`nameInput`);
const emailInputObj = document.getElementById(`emailInput`);
const addNutzerObj = document.getElementById(`addNutzer`);
const tableObj = document.getElementById(`usertable`);

let User = function (name, email) {
    this.id = generateID(12);
    this.name = name;
    this.email = email.toLowerCase();
}


addNutzerObj.onclick = function (event) {
    event.preventDefault();

    if (nameInputObj.value === `` || emailInputObj.value === ``) {
        alert(`Bitte die Eingabefelder ausfüllen`);
        return
    } else {
        createTable();
    }
}

function createNewUSer() {

    let allUsers = [];
    let userObj = new User(nameInputObj.value, emailInputObj.value);

    if (localStorage.getItem(`userlist`) === null) {

        allUsers.push(userObj);
        localStorage.setItem(`userlist`, JSON.stringify(allUsers));

    } else {

        allUsers = JSON.parse(localStorage.getItem(`userlist`));
        allUsers.push(userObj);
        localStorage.setItem(`userlist`, JSON.stringify(allUsers));

    }
    return allUsers
}

function generateID(zahl) {
    let randomID = "";
    let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < zahl; i++) {
        randomID += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return randomID;
}

function createTableRow(userArr) {

    let newRowObj = [];

    for (let i = 0; i < userArr.length; i++) {

        const newRow = document.createElement(`tr`);
        newRow.innerHTML = `<td class="tabledata">${userArr[i].name}</td><td class="tabledata"><a href="mailto:${userArr[i].email}">${userArr[i].email}</a></td><td class="tabledata">${userArr[i].id}</td><td class="tabledata"><button class="remove">X</button></td>`;
        newRow.classList.add("tablerow");
        newRow.setAttribute(`data_id`, userArr[i].id);
        nameInputObj.value = ``;
        emailInputObj.value = ``;
        newRowObj.push(newRow);
    }
    return newRowObj;
}

function createTable() {

    let returnedAllUsers = createNewUSer();

    let returnedNewRowObj = createTableRow(returnedAllUsers);
    tableObj.innerHTML = ``;
    let newTableHead = document.createElement(`tr`);
    newTableHead.innerHTML = `<th class="tabledata">Name</th><th class="tabledata">Email</th><th class="tabledata">ID</th><th class="tabledata"></th>`;
    newTableHead.classList.add(`tableheadrow`);
    tableObj.appendChild(newTableHead);
    for (let i = 0; i < returnedNewRowObj.length; i++) {
        if (returnedAllUsers[i].name !== ``) {
            tableObj.append(returnedNewRowObj[i]);
            const deleteObj = document.getElementsByClassName(`remove`);
            for (let i = 0; i < deleteObj.length; i++) {
                deleteObj[i].onclick = function () {
                    let data = this.parentElement.parentElement.getAttribute(`data_id`);
                    let helperArr = JSON.parse(localStorage.getItem(`userlist`));
                    allUsers = [];
                    for (let i = 0; i < helperArr.length; i++) {
                        if (data !== helperArr[i].id) {
                            allUsers.push(helperArr[i]);
                        }
                    }
                    this.parentElement.parentElement.remove();
                    if (helperArr.length > 1) {
                        localStorage.setItem(`userlist`, JSON.stringify(allUsers));
                    } else {
                        localStorage.clear();
                    }
                }
            }
        }
    }

}

createTable();