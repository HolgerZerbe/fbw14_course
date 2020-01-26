const btnShowUsersObj = document.getElementById('btnShowUsers');
const btnAddUserObj = document.getElementById('btnAddUser');
const btnNewCommentObj = document.getElementById('btnNewComment');
const btnShowCommentsObj = document.getElementById('btnShowComments');
const btnAddCommentObj = document.getElementById('btnAddComment');
const containerObj = document.getElementById('container');
const btnNewUserObj = document.getElementById('btnNewUser');
const adduserObj = document.getElementById('adduser');
const addcommentObj = document.getElementById('addcomment');


const createTable = (field1, field2, field3, field4, data) => {

    const tableObj = document.createElement('table');
    const trObj = document.createElement('tr');
    const th1Obj = document.createElement('th');
    const th2Obj = document.createElement('th');
    const th3Obj = document.createElement('th');
    const th4Obj = document.createElement('th');

    th1Obj.innerText = field1;
    th2Obj.innerText = field2;
    th3Obj.innerText = field3;
    th4Obj.innerText = field4;

    trObj.appendChild(th1Obj);
    trObj.appendChild(th2Obj);
    trObj.appendChild(th3Obj);
    trObj.appendChild(th4Obj);

    tableObj.appendChild(trObj);

    containerObj.innerText = '';

    const responseObj = JSON.parse(data);

    for (let e of responseObj) {
        const trNewObj = document.createElement('tr');

        const td1Obj = document.createElement('td');
        const td2Obj = document.createElement('td');
        const td3Obj = document.createElement('td');
        const td4Obj = document.createElement('td');

        td1Obj.innerText = e[field1];
        td2Obj.innerText = e[field2];
        td3Obj.innerText = e[field3];
        td4Obj.innerText = e[field4];

        trNewObj.appendChild(td1Obj);
        trNewObj.appendChild(td2Obj);
        trNewObj.appendChild(td3Obj);
        trNewObj.appendChild(td4Obj);

        tableObj.appendChild(trNewObj);
    }

    containerObj.appendChild(tableObj);
}

btnShowUsersObj.onclick = async () => {

    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';

    const response = await fetch('http://cileria.com:3050/users');
    const responseJson = await response.json();
    const responseText = JSON.stringify(responseJson);
    // console.log(responseText);

    createTable('_id', 'name', 'username', 'email', responseText);

}


btnShowCommentsObj.onclick = async () => {

    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';

    const response = await fetch('http://cileria.com:3050/comments');
    const responseJson = await response.json();
    const responseText = JSON.stringify(responseJson);
    // console.log(responseText);

    createTable('_id', 'name', 'email', 'body', responseText);

}

btnAddUserObj.onclick = () => {
    containerObj.innerText = '';
    adduserObj.style.display = 'flex';
    addcommentObj.style.display = 'none';
}

btnAddCommentObj.onclick = () => {
    containerObj.innerText = '';
    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'flex';
}

btnNewUserObj.onclick = async () => {

    const nameObj = document.getElementById('name');
    const newName = nameObj.value;

    const usernameObj = document.getElementById('username');
    const newUsername = usernameObj.value;

    const emailObj = document.getElementById('email');
    const newEmail = emailObj.value;

    if (newName.length === 0) {
        alert('Name darf nicht leer sein!');
        return;
    }

    if (newUsername.length === 0) {
        alert('Username darf nicht leer sein!');
        return;
    }

    if (newEmail.length === 0) {
        alert('Email darf nicht leer sein!');
        return;
    }

    let body = {
        name: newName,
        username: newUsername,
        email: newEmail
    };

    try {
        const postmethod = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
        const response = await fetch('http://cileria.com:3050/users', postmethod)

        if (response.ok) {
            alert(`User ist angelegt`);

        }
    } catch (error) {
        console.log(`Fehler: ` + error);
    }
}

btnNewComment.onclick = async () => {

    const nameObj = document.getElementById('commentname');
    const newName = nameObj.value;

    const emailObj = document.getElementById('commentemail');
    const newEmail = emailObj.value;

    const commentObj = document.getElementById('commenttext');
    const newComment = commentObj.value;

    if (newName.length === 0) {
        alert('Name darf nicht leer sein!');
        return;
    }

    if (newEmail.length === 0) {
        alert('Email darf nicht leer sein!');
        return;
    }

    let body = {
        name: newName,
        email: newEmail,
        body: newComment
    };

    try {
        // const postmethod = {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(body)
        // }
        // const response = await fetch('http://cileria.com:3050/comments', postmethod)

        // Alternativ kann das Objekt auch direkt übergeben werden:


        const response = await fetch('http://cileria.com:3050/comments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        if (response.ok) {
            alert(`User ist angelegt`);
        }
    } catch (error) {
        console.log(`Fehler: ` + error);

    }

}


// Baue alle XMLHttpRequest-Aufrufe in fetch-Aufrufe um.
// verwende dabei die neue AsyncAwait-Syntax