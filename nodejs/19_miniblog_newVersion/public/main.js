console.log(`19_miniblog`);

const headlineObj = document.getElementById(`headline`);
const navObj = document.getElementsByClassName(`navlinks`);
let contentObj = document.getElementById(`content`);
const containerObj = document.getElementById(`container`);
const rightHeaderObj = document.getElementsByClassName('rightHeader');

let boldFontBoolean = false;
let italicFontBoolean = false;
let underlineBoolean = false;
let linebreakBoolean = false;

let vorschauText = "Inhalt";


// Aus dem Internet kopierte Funktion zum Auslesen der 
// Cursorposition in einem DOM-Element

const getCaretPos = (domElem) => {
    var pos;

    if (document.selection) {
        domElem.focus();
        var sel = document.selection.createRange();
        sel.moveStart('character', -domElem.value.length);
        pos = sel.text.length;
    } else if (domElem.selectionStart || domElem.selectionStart == '0') {
        pos = domElem.selectionStart;
    }
    return pos;
}

// Zum Setzen des Cursors an einer bestimmten Position
// in einem DOM-Element 

const setCaretPos = (domElem, pos) => {
    if (domElem.setSelectionRange) {
        domElem.focus();
        domElem.setSelectionRange(pos, pos);
    } else if (domElem.createTextRange) {
        var range = domElem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

const colorFont = () => {
    const textEingabeObj = document.getElementById('textEingabe');
    const colorFontObj = document.getElementById("colorFont");
    const cursorAtPos = getCaretPos(textEingabeObj);
    const color= `<span style="color : ${colorFontObj.value}">`;
    textEingabeObj.value = textEingabeObj.value.substring(0, cursorAtPos) + color + textEingabeObj.value.substring(cursorAtPos);
    posToReturn = cursorAtPos + color.length;
    setCaretPos(textEingabeObj, posToReturn);    
}

const bold = () => {
    const textEingabeObj = document.getElementById('textEingabe');
    const cursorAtPos = getCaretPos(textEingabeObj);
    let posToReturn;
    const boldFontObj = document.getElementById('boldFont');
    boldFontObj.classList.toggle(`activeBtn`);

    if (!boldFontBoolean) {
        textEingabeObj.value = textEingabeObj.value.substring(0, cursorAtPos) + "<b>" + textEingabeObj.value.substring(cursorAtPos);
        boldFontBoolean = true;
        posToReturn = cursorAtPos + 3;
    } else {
        textEingabeObj.value = textEingabeObj.value.substring(0, cursorAtPos) + "</b>" + textEingabeObj.value.substring(cursorAtPos);
        boldFontBoolean = false;
        posToReturn = cursorAtPos + 4;
    }
    setCaretPos(textEingabeObj, posToReturn);
}

const italic = () => {

    const textEingabeObj = document.getElementById('textEingabe');
    const cursorAtPos = getCaretPos(textEingabeObj);
    let posToReturn;
    const italicFontObj = document.getElementById('italicFont');
    italicFontObj.classList.toggle(`activeBtn`);

    if (!italicFontBoolean) {
        textEingabeObj.value = textEingabeObj.value.substring(0, cursorAtPos) + "<i>" + textEingabeObj.value.substring(cursorAtPos);
        italicFontBoolean = true;
        posToReturn = cursorAtPos + 3;

    } else {
        textEingabeObj.value = textEingabeObj.value.substring(0, cursorAtPos) + "</i>" + textEingabeObj.value.substring(cursorAtPos);
        italicFontBoolean = false;
        posToReturn = cursorAtPos + 4;
    }
    setCaretPos(textEingabeObj, posToReturn);
}

const underline = () => {
    const textEingabeObj = document.getElementById('textEingabe');
    const cursorAtPos = getCaretPos(textEingabeObj);
    let posToReturn;
    const underlineObj = document.getElementById('underline');
    underlineObj.classList.toggle(`activeBtn`);

    if (!underlineBoolean) {
        textEingabeObj.value = textEingabeObj.value.substring(0, cursorAtPos) + "<u>" + textEingabeObj.value.substring(cursorAtPos);
        underlineBoolean = true;
        posToReturn = cursorAtPos + 3;

    } else {
        textEingabeObj.value = textEingabeObj.value.substring(0, cursorAtPos) + "</u>" + textEingabeObj.value.substring(cursorAtPos);
        underlineBoolean = false;
        posToReturn = cursorAtPos + 4;

    }
    setCaretPos(textEingabeObj, posToReturn);
}

const linebreak = () => {
    const textEingabeObj = document.getElementById('textEingabe');
    const cursorAtPos = getCaretPos(textEingabeObj);
    let posToReturn = cursorAtPos + 5;
    textEingabeObj.value = textEingabeObj.value.substring(0, cursorAtPos) + "</br>" + textEingabeObj.value.substring(cursorAtPos);
    setCaretPos(textEingabeObj, posToReturn);
}

const read = async () => {
    let allcommments = "";
    navObj[0].classList.add(`active`);
    navObj[1].classList.remove(`active`);
    rightHeaderObj[0].style.display = "block";

    containerObj.classList.add('backgroundImage');
    containerObj.innerHTML = `<div class="content" id="content"></div>`;
    contentObj = document.getElementById(`content`);

    const result = await fetch('http://localhost:3000/blogposts');
    // console.log(result);
    const data = await result.json();
    // console.log(data);


    for (comment of data) {
        let cutPosition = null;
        let shortCommentContent = null;

        if (comment.content.length > 50) {
            cutPosition = comment.content.indexOf(` `, 40);
            shortCommentContent = comment.content.substring(0, cutPosition) + "...";
        } else {
            shortCommentContent = comment.content;

        }

        allcommments += `<div class="singlepost">
        <div class="commentHeadline">
        <h4>${comment.id} - ${comment.title}</h4>
        <p>Erstellt: ${comment.created}</p>
        </div>
        <hr></br>
        <span class="shortCommentWithBtn" onclick="readSingleComment(${comment.id})">
        <p>${shortCommentContent}<p>
        <p class="readMoreBtn" >Mehr lesen</p>
        </span>
        </div>
        `;
    }

    contentObj.innerHTML = allcommments;
}

const readSingleComment = async (id) => {
    navObj[0].classList.add(`active`);
    navObj[0].classList.remove(`active`);
    rightHeaderObj[0].style.display = "block";

    containerObj.classList.add('background');
    containerObj.innerHTML = `<div class="content" id="content"></div>`;
    contentObj = document.getElementById(`content`);

    const result = await fetch(`http://localhost:3000/singleposts/${id}`);
    const data = await result.json();

    contentObj.innerHTML = `<div class="singlepost" style="width:90%; box-sizing: border-box; margin: 10px auto 0 auto">
    <div class="commentHeadline">
    <h4>${data[0].id} - ${data[0].title}</h4>
    <p>Erstellt: ${data[0].created}</p>
    </div>
    <hr></br>
    <p>${data[0].content}<p>
    <hr>
    <span class=" btnField">
    <button class="updateBtn" onclick="updateSingleComment(${data[0].id})">Post ändern</button>
    <button class="deleteBtn" onclick="deleteSingleComment(${data[0].id})">Post löschen</button>
    <button class="backBtn" onclick="read()">zurück zu allen Posts</button>
    </span>
    </div>
    `;
}

const deleteSingleComment = async (id) => {
    alert("Sind sie sicher, dass dieser Post gelöscht werden soll?")
    const result = await fetch(`http://localhost:3000/delete/${id}`);
    const data = await result.json();
    read();
}

const updateSingleComment = async (id) => {
    const result = await fetch(`http://localhost:3000/singleposts/${id}`);
    const data = await result.json();

    const updateBtnObj = document.getElementsByClassName(`updateBtn`);
    updateBtnObj[0].style.display = "none";

    const updateDivObj = document.createElement('div');

    updateDivObj.innerHTML = ` <input type="text" id="titelUpdate" value="${data[0].title}">;
    <textarea id="textUpdate" cols="30" rows="10">${data[0].content}</textarea>
    <button id="updatePost">Diesen Post ändern</button>`;
    updateDivObj.style.width = "90%";
    updateDivObj.style.margin = "20px auto";
    contentObj.append(updateDivObj);

    const updatePostObj = document.getElementById('updatePost');

    updatePostObj.onclick = async () => {

        const titelUpdateObj = document.getElementById('titelUpdate');
        const textUpdateObj = document.getElementById('textUpdate');

        if (!(titelUpdateObj.value.length > 0 && textUpdateObj.value.length > 0)) {
            alert('Alle Felder müssen ausgefüllt sein.');
            return;
        }

        const body = {
            id: id,
            title: titelUpdateObj.value,
            content: textUpdateObj.value
        }

        try {
            const response = await fetch('http://localhost:3000/update', {
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



const post = () => {
    navObj[0].classList.remove(`active`);
    navObj[1].classList.add(`active`);
    rightHeaderObj[0].style.display = "block";
    containerObj.classList.add('backgroundImage');
    containerObj.innerHTML = `<div class="content" id="content"></div>`;
    contentObj = document.getElementById(`content`);
    contentObj.innerHTML = `<div class ="singlepost" style="width:100%; box-sizing: border-box">
    <div class="commentHeadline">
    <h4 id="vorschauTitel">Headline / Vorschau</h4>
    <p>Erstellt: wird automatisch ausgefüllt</p>
    </div>
    <hr></br>
    <p id = "vorschauText">Dein Post<p>
    </div>
    <input type="text" id="titelEingabe" placeholder="Hier Titel eingeben">
    <input type="color" id="colorFont">

        <button onclick="colorFont()">Farbe wechseln</button>
        <button id="boldFont" class="boldFont" onclick="bold()"><b>Fettschrift</b></button>
        <button id="italicFont" class="italicFont" onclick="italic()"><i>kursiv</i></button>
        <button id="underline" class="underline" onclick="underline()"><u>unterstreichen</u></button>
        <button id="linebreak" class="linebreak" onclick="linebreak()">Zeilenumbruch</button>
    </div>
    <textarea id="textEingabe" cols="30" rows="3" placeholder ="Hier Text eingeben"></textarea>
    <button id="addPost">Artikel erstellen</button>`;




    const titelEingabeObj = document.getElementById('titelEingabe');
    const textEingabeObj = document.getElementById('textEingabe');

    titelEingabeObj.oninput = () => {
        const vorschauTitelObj = document.getElementById(`vorschauTitel`);
        vorschauTitelObj.innerHTML = titelEingabeObj.value;
    }

    textEingabeObj.oninput = () => {
        const vorschauTextObj = document.getElementById(`vorschauText`);
        vorschauTextObj.innerHTML = textEingabeObj.value;
    }

    const addPostObj = document.getElementById('addPost');
    addPostObj.onclick = async () => {


        if (!(titelEingabeObj.value.length > 0 && textEingabeObj.value.length > 0)) {
            alert('Alle Felder müssen ausgefüllt sein.');
            return;
        }

        const body = {
            title: titelEingabeObj.value,
            content: textEingabeObj.value
        }

        try {
            const response = await fetch('http://localhost:3000/blogposts', {
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
    rightHeaderObj[0].style.display = "none";
    containerObj.innerHTML = `<video autoplay muted loop class="video" width="1200px">
    <source src="/festival-of-lights.mp4" type="video/mp4">
</video>
<div id="content" class="content">
</div>`
}