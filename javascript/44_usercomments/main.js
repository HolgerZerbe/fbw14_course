console.log(`44_usercomments`);

const navlinkObj = document.getElementsByClassName(`navlink`);
const containerObj = document.getElementsByClassName(`container`)[0];


navlinkObj[0].onclick = function () {


    let url = "http://cileria.com:3050/users"

    const xhr = new XMLHttpRequest();

    xhr.open(`GET`, url);

    xhr.onload = function () {
        if (xhr.status === 200) {

            let response = xhr.responseText;

            createTable("_id", "name", "username", "email", response);
        }
    }
    xhr.send();
}


navlinkObj[1].onclick = function () {
    containerObj.innerHTML = ``;

    const addUserName = document.createElement(`input`);
    addUserName.setAttribute(`type`, `text`);
    addUserName.setAttribute(`placeholder`, `your name`);
    containerObj.appendChild(addUserName);
    const addUserUsername = document.createElement(`input`);
    addUserUsername.setAttribute(`type`, `text`);
    addUserUsername.setAttribute(`placeholder`, `your username`);
    containerObj.appendChild(addUserUsername);
    const addUserEmail = document.createElement(`input`);
    addUserEmail.setAttribute(`type`, `email`);
    addUserEmail.setAttribute(`placeholder`, `your email`);
    containerObj.appendChild(addUserEmail);
    const addUserBtn = document.createElement(`button`);
    addUserBtn.classList.add(`btn`)
    addUserBtn.innerText = "Add User";
    containerObj.appendChild(addUserBtn);

    addUserBtn.onclick = function () {
        const newUserName = addUserName.value;
        const newUserUsername = addUserUsername.value;
        const newUserEmail = addUserEmail.value;
        let body = null;

        let url = "http://cileria.com:3050/users"

        const xhr = new XMLHttpRequest();

        xhr.open(`POST`, url);
        xhr.setRequestHeader(`Content-Type`, `application/json`);
        xhr.onload = function () {
            if (xhr.status === 200) {
                ;

            } else {
                alert(`Fehler beim User anlegen.`)
            }

        }
        body = {
            name: newUserName,
            username: newUserUsername,
            email: newUserEmail

        }

        containerObj.innerHTML = `<p>Danke, der User wurde zugefügt</p>`
        console.log(body);
        xhr.send(JSON.stringify(body));
    }

}
navlinkObj[2].onclick = function () {

    let url = "http://cileria.com:3050/comments"

    const xhr = new XMLHttpRequest();

    xhr.open(`GET`, url);

    xhr.onload = function () {
        if (xhr.status === 200) {

            let response = xhr.responseText;

            createTable("_id", "name", "email", "body", response)
        }
    }
    xhr.send();
}


navlinkObj[3].onclick = function () {

    containerObj.innerHTML = ``;

    const addCommentName = document.createElement(`input`);
    addCommentName.setAttribute(`type`, `text`);
    addCommentName.setAttribute(`placeholder`, `your name`);
    containerObj.appendChild(addCommentName);
    const addCommentEmail = document.createElement(`input`);
    addCommentEmail.setAttribute(`type`, `email`);
    addCommentEmail.setAttribute(`placeholder`, `your email`);
    containerObj.appendChild(addCommentEmail);
    const addCommentText = document.createElement(`input`);
    addCommentText.setAttribute(`type`, `text`);
    addCommentText.setAttribute(`placeholder`, `your comment`);
    containerObj.appendChild(addCommentText);
    const addCommentBtn = document.createElement(`button`);
    addCommentBtn.classList.add(`btn`)
    addCommentBtn.innerText = "Add Comment";
    containerObj.appendChild(addCommentBtn);

    addCommentBtn.onclick = function () {
        const newCommentName = addCommentName.value;
        const newCommentEmail = addCommentEmail.value;
        const newCommentComment = addCommentText.value;
        let body = null;

        let url = "http://cileria.com:3050/comments"

        const xhr = new XMLHttpRequest();

        xhr.open(`POST`, url);
        xhr.setRequestHeader(`Content-Type`, `application/json`);
        xhr.onload = function () {
            if (xhr.status === 200) {
                ;

            } else {
                alert(`Fehler beim Comment anlegen.`)
            }

        }
        body = {
            name: newCommentName,
            email: newCommentEmail,
            body: newCommentComment
        }

        containerObj.innerHTML = `<p>Danke, der Comment wurde zugefügt</p>`
        console.log(body);
        xhr.send(JSON.stringify(body));
    }
}






function createTable(field1, field2, field3, field4, data) {
    containerObj.innerHTML = ``;

    let tableObj = document.createElement(`table`);
    containerObj.append(tableObj);

    let thObj = document.createElement(`tr`);
    thObj.innerHTML = `<th>${field1}</th><th>${field2}</th><th>${field3}</th><th>${field4}</th>`;
    tableObj.appendChild(thObj);


    // for(let e of responseObj)

    for (let elem of JSON.parse(data)) {

        let newtrObj = document.createElement(`tr`);
        newtrObj.innerHTML = `<td>${elem[field1]}</td><td>${elem[field2]}</td><td>${elem[field3]}</td><td>${elem[field4]}</td>`;
        tableObj.appendChild(newtrObj);

    }
}