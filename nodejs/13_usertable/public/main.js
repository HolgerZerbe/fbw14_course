console.log(`Hallo World from Frontend`);
const linkObj = document.getElementsByTagName(`a`);
const contentObj = document.getElementById(`content`);

const loadUsers = async (search) => {

    linkObj[0].classList.add(`active`);
    linkObj[1].classList.remove(`active`);
    linkObj[2].classList.remove(`active`);

    showWheel();

    let result;

    if (search === undefined) {
        result = await fetch(`http://localhost:3000/users`);
    } else {
        result = await fetch(`http://localhost:3000/users?q=${search}`);
    }
    const data = await result.json();

    // console.log(data);
    const contentObj = document.getElementById(`content`);
    contentObj.innerHTML = "";
    const tableObj = document.createElement('table');
    contentObj.append(tableObj);
    const tableheadObj = document.createElement(`tr`);
    tableheadObj.innerHTML = `<th>id</th><th>Name</th><th>E-Mail</th>`;
    tableObj.append(tableheadObj);

    for (elem of data) {
        const tablerowObj = document.createElement(`tr`);
        tablerowObj.innerHTML = `<td>${elem.id}</td><td>${elem.name}</td><td>${elem.email}</td>`;
        tablerowObj.onclick = showUser.bind(this, elem.id);
        tablerowObj.classList.add(`hover`);
        tableObj.append(tablerowObj);
    }
}


const showWheel = () => {
    contentObj.innerHTML = "<img src='./giphy.gif' alt=''>";

}

const showUser = async (id) => {

    linkObj[0].classList.remove(`active`);
    linkObj[1].classList.remove(`active`);
    linkObj[2].classList.remove(`active`);

    const result = await fetch(`http://localhost:3000/userdetail/${id}`);
    const data = await result.json();

    contentObj.innerHTML = `<div class="profile">
    <div class="profile-pic">
        <img src="./uploads/${data.profilePic}" alt="">
    </div>
    <div class="profile-description">
    <h3>${data.name}</h3>
    <table>

            <tr>
                <td>Id: </td>
                <td>${data.id}</td>
            </tr>
            <tr>
                <td>E-Mail: </td>
                <td><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
                <td>Beschreibung: </td>
                <td>${data.description}</td>
            </tr>
        </table>
    </div>
</div>`


}

const searchUser = () => {

    linkObj[1].classList.add(`active`);
    linkObj[0].classList.remove(`active`);
    linkObj[2].classList.remove(`active`);

    contentObj.innerHTML = `
    <input type="text" id="searchfield" placeholder="Suchbegriff eingeben..."></input>
    <button id="suchBtn">Suchen</button>
    `
    const suchBtnObj = document.getElementById('suchBtn');

    suchBtnObj.onclick = () => {
        const searchObj = document.getElementById('searchfield');

        // console.log(searchObj.value);
        loadUsers(searchObj.value);

    }
}

const uploadUser = () => {

    linkObj[2].classList.add(`active`);
    linkObj[0].classList.remove(`active`);
    linkObj[1].classList.remove(`active`);

    // InnerHTML beim Anlegen eines Users mit manueller Eingabe des Dateinamens für das Foto:


    //     contentObj.innerHTML = `            <div class="addUser">
    //     <div class="addUserLeft">
    //         <input type="text" id="nameInput" placeholder="Name">     
    //         <input type="email" id="emailInput" placeholder="Email">     
    //         <textarea id="descriptionInput" cols="30" rows="5" placeholder= "Description"></textarea> 

    //     </div>
    //     <div class="addUserRight">
    //         <input type="text" id="picture" placeholder="Dateiname Foto"/>

    //         <form ref='uploadForm' 
    //         id='uploadForm' 
    //         action='/imageupload' 
    //         method='post' 
    //         encType="multipart/form-data">
    //             <input type="file" id="pictureUpload"name="sampleImage" />
    //     </form>		
    //         </div>
    // </div>
    // <button id ="addUser">Erstellen</button>



    // </div>
    //     `


    // InnerHTML beim Anlegen eines Users wenn der Dateiname des Fotos aus dem Upload des Fotos bestimmt wird:

    contentObj.innerHTML = `            <div class="addUser">
    <div class="addUserLeft">
        <input type="text" id="nameInput" placeholder="Name">     
        <input type="email" id="emailInput" placeholder="E-Mail">     
        <textarea id="descriptionInput" cols="30" rows="5" placeholder= "Beschreibung"></textarea> 
    
    </div>
    <div class="addUserRight">
        <div class="profilePicHeadline">Profilfoto hochladen:</div>
        <form ref='uploadForm' 
        id='uploadForm' 
        action='/imageupload' 
        method='post' 
        encType="multipart/form-data">
            <input type="file" id="pictureUpload"name="sampleImage" />
            <p id="fileType">Es sind nur Dateien des Typs .jpg und .jpeg erlaubt.</p>
    </form>		
    <button id ="addUser">Nutzer erstellen</button>
    </div>
    
    </div>


</div>
    `

    const addUserBtnObj = document.getElementById('addUser');

    addUserBtnObj.onclick = async () => {

        const nameInputObj = document.getElementById('nameInput');
        const emailInputObj = document.getElementById('emailInput');
        const descriptionInputObj = document.getElementById('descriptionInput');
        
        // Nötig beim Anlegen eines Users mit manueller Eingabe des Dateinamens des Fotos:
        // const pictureObj = document.getElementById('picture');
        
        const pictureUploadObj = document.getElementById(`pictureUpload`);
        const uploadFormObj = document.getElementById(`uploadForm`);
        const filetypeObj = document.getElementById(`fileType`);
        let responseJson;

        // Bei manueller Einagbe des Dateinamens des Fotos Überorüfund ob das Eingabefed ausgefüllt ist:

        // if (nameInputObj.value === "" || emailInputObj.value === "" || descriptionInputObj.value === "" || pictureObj.value === "") {
        //     alert(`Eingaben in allen Feldern erforderlich`);
        //     return
        // }


        if (nameInputObj.value === "" || emailInputObj.value === "" || descriptionInputObj.value === "") {
            alert(`Eingaben in allen Feldern erforderlich`);
            return
        }

        const emailValidation = emailInputObj.value.split("@");

        if (emailValidation.length !== 2) {
            alert(`Email-Adresse ungültig`)
            return
        }

        const emailValidationRight = emailValidation[1].split(".");
        if (emailValidationRight.length < 2) {
            alert(`Email-Adresse ungültig`)
            return
        }
        

        // Nötig bei manueller Eingabe des Fotonamens:
        // const lowerCaseProfilPic = (pictureObj.value).toLowerCase()
    

        // Nötig beim Auslesen des Fotonamens aus dem Upload:

        const pictureUploadObjArray = pictureUploadObj.value.split("\\");
        const lowerCaseProfilPic = pictureUploadObjArray[pictureUploadObjArray.length - 1].toLowerCase();

        const profilePicValidation = lowerCaseProfilPic.split(".");
        if (profilePicValidation.length !== 2) {
            alert(`Datei ungültig`)
            return
        }
        if (profilePicValidation[1] !== "jpeg" && profilePicValidation[1] !== "jpg") {
            filetypeObj.style.color="red";
            return
        }


        const body = {
            name: nameInputObj.value,
            email: emailInputObj.value.toLowerCase(),
            description: descriptionInputObj.value,
            profilePic: lowerCaseProfilPic


        }

        try {
            const response = await fetch('http://localhost:3000/users', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });

            if (response.ok) {

                responseJson = await response.json();

            }
        } catch (e) {
            console.log('Error: ' + e);
        }
        try {
            var form = uploadFormObj;
            var formData = new FormData(form);

            const responseUpload = await fetch('http://localhost:3000/imageupload', {
                headers: {
                    encType: "multipart/form-data",
                },
                method: 'POST',
                body: formData


            });

            if (responseUpload.ok) {
                //if (status === 200) {

                    //const responseUploadJson = await responseUpload.json();

                    // wenn die Tabelle angezeigt werden soll:
                    //loadUsers();

                    // wenn der neu angelegte User angezeigt werden soll:
                    showUser(responseJson.id)
                //}
            }
        } catch (e) {
            console.log('Error: ' + e);
        }
    }
}

loadUsers();