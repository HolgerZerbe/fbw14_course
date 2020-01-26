const nameInputObj = document.getElementById(`nameInput`);
const emailInputObj = document.getElementById(`emailInput`);
const addNutzerObj = document.getElementById(`addNutzer`);
const tableObj = document.getElementById(`usertable`);
const allRowObj = document.getElementsByTagName(`tr`);

addNutzerObj.onclick = function (event) {
    event.preventDefault();

    if (nameInputObj.value === `` || emailInputObj.value === ``) {
        alert(`Bitte die Eingabefelder ausfüllen`);
        return
    } else {
        tableObj.append(createNewUSer());
        const deleteObj = document.getElementsByClassName(`remove`);
        for (let i = 0; i< deleteObj.length; i++) {
            deleteObj[i].onclick = function() {
                this.parentElement.parentElement.remove();
            }
        }
    }
}

function createNewUSer() {

    let userID = generateID(12);
    const newRowObj = document.createElement(`tr`);

    newRowObj.innerHTML = `<td class="tabledata">${nameInputObj.value}</td><td class="tabledata"><a href="mailto:${emailInputObj.value}">${emailInputObj.value}</a></td><td class="tabledata">${userID}</td><td class="tabledata"><button class="remove">X</button></td>`;
    newRowObj.classList.add("tablerow");
    newRowObj.setAttribute(`data_id`,userID);
    nameInputObj.value =``;
    emailInputObj.value =``;

    return newRowObj;
}

function generateID(zahl){
    let randomID = "";
    let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i<zahl; i++) {
        randomID += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return randomID;
}
