console.log(`33_bindonclick`);

const createBtnObj = document.getElementById(`createBtn`);

function sayWhat(what) {
    alert(what);
}

function generateRandomString(zahl){
    let randomString = "";
    let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i<zahl; i++) {
        randomString += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return randomString;
}


createBtnObj.onclick = function () {

    const newBtn = document.createElement(`button`);
    newBtn.innerHTML= `Neuer Button`;
    newBtn.style.display=`block`;


    // Ich übergebe den Namen der Funktion,
    // die aufgerufen werden soll


    newBtn.onclick= sayWhat.bind(this, generateRandomString(10));
    document.body.appendChild(newBtn);

}

// Aufgabe:

// Modifiziere den Code createBtn.onclick so,
// dass jedesmal ein zufälliger String von 10 
// alerted wird.