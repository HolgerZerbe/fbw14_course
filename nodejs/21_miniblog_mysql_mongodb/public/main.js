console.log(`19_miniblog`);

const headlineObj = document.getElementById(`headline`);
const navObj = document.getElementsByClassName(`navlinks`);
const contentObj = document.getElementById(`content`);


const read = async () => {

    let allcommments = "";
    navObj[0].classList.add(`active`);
    navObj[1].classList.remove(`active`);

    let url = "";
    const mongoDBObj = document.getElementById(`mongoDB`);
    if (!(mongoDBObj.checked)) {
        url = 'http://localhost:3000/blogposts';
    } else {
        url = 'http://localhost:3000/blogpostsMongo'
    }


    const result = await fetch(url);
    const data = await result.json();

    for (comment of data) {
        let id, title, created, realHour;
        if (mongoDBObj.checked) {
            id = comment._id
            title = comment.titel;
            realHour = parseInt(comment.created.substring(11, 13)) + 2
            created = comment.created.substring(0, 10) + " " + realHour + comment.created.substring(13, 19);

        } else {
            id = comment.id;
            title = comment.title;
            created = comment.created;
        }

        allcommments += `<div class="singlepost">
        <div class="commentHeadline">
        <h4>${id} - ${title}</h4>
        <p>Erstellt: ${created}</p>
        </div>
        <hr></br>
        <p>${comment.content}<p>
        <div><button class= "deleteBtn" onclick = "deletePost('${id}')" >Diesen Beitrag löschen</button><button class= "updateBtn" onclick = "updatePost('${id}')" >Diesen Beitrag ändern</button></div>
        </div>
        `;
    }

    contentObj.innerHTML = allcommments;
}

const deletePost = async (id) => {
    let url = "";
    const mongoDBObj = document.getElementById(`mongoDB`);
    if (!(mongoDBObj.checked)) {
        url = 'http://localhost:3000/delete/' + id;
    } else {
        url = 'http://localhost:3000/deleteMongo/' + id;
    }

    const result = await fetch(url);
    const data = await result.json();
    read();

}

const updatePost = async (id) => {
    alert(id);
    let url = "";
    const mongoDBObj = document.getElementById(`mongoDB`);
    if (!(mongoDBObj.checked)) {
        url = 'http://localhost:3000/blogposts/' + id;
    } else {
        url = 'http://localhost:3000/blogpostsMongo/' + id;
    }
    const result = await fetch(url);
    const data = await result.json();

    console.log(typeof data)

    if (!(mongoDBObj.checked)) {
        const singlePost = data;
    } else {
        const singlePost = data[0];
    }

    post(singelpost);

}

const post = async (singlepost) => {
    console.log(singlepost);

    navObj[0].classList.remove(`active`);
    navObj[1].classList.add(`active`);
    const mongoDBObj = document.getElementById(`mongoDB`);

    let id, titel;


    if (!singlepost) {
        contentObj.innerHTML = ` <input type="text" id="titelEingabe" placeholder="Hier Titel eingeben">;
        <textarea id="textEingabe" cols="30" rows="10" placeholder ="Hier Text eingeben"></textarea>
        <button id="addPost" onclick="updatePost()">Artikel erstellen</button>`;
    } else {

        
        if (mongoDBObj.checked) {
            id = singlepost._id
            title = singlepost.titel;
            content = singlepost.content;


        } else {
            id = singlepost.id;
            title = singlepost.title;
            content = singlepost.content;
        }
        contentObj.innerHTML = ` <input type="text" id="titelEingabe" value="${title}">;
    <textarea id="textEingabe" cols="30" rows="10">${content}</textarea>
    <button id="addPost" onclick="updatePost(id)">Artikel ändern</button>`

    }


    // const addPostObj = document.getElementById('addPost');
    const updatePost = async (id) => {
        console.log(id)
        const titelEingabeObj = document.getElementById('titelEingabe');
        const textEingabeObj = document.getElementById('textEingabe');

        if (!(titelEingabeObj.value.length > 0 && textEingabeObj.value.length > 0)) {
            alert('Alle Felder müssen ausgefüllt sein.');
            return;
        }

        const body = {
            title: titelEingabeObj.value,
            content: textEingabeObj.value
        }

        let url = "";
        const mongoDBObj = document.getElementById(`mongoDB`);
        if (!(mongoDBObj.checked)) {
            url = 'http://localhost:3000/blogposts';
            if (index) {
                url = url + "/" + id;
            }

        } else {
            url = 'http://localhost:3000/blogpostsMongo'
            if (index) {
                url = url + "/" + id;
            }
        }

        console.log(url);
        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });

            if (response.ok) {

                responseJson = await response.json();
                read();

            }
        } catch (e) {
            console.log('Error: ' + e);
        }
    }
}

headlineObj.onclick = () => {
    navObj[0].classList.remove(`active`);
    navObj[1].classList.remove(`active`);
    contentObj.innerHTML = `<div class="welcome">
    <h3>Welcome to my Blog</h3>
</div>
    `
}