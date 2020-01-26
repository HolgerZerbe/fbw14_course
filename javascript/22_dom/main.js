console.log(`22_dom`)

const halloWorldObj = document.getElementById(`halloworld`);
// halloworld1Obj connected JS mit dem HTML Button

// const halloWorld2Obj = document.getElementById(`halloworld2`) 

const allesRotObj = document.getElementById(`allesrot`);

// onclick Methode überschreiben
halloWorldObj.onclick = function () {
    alert(`Hallo World`);
}

// // Anderer Syntax:
// halloWorld2Obj.addEventListener(`click`, function() {
//     alert(`Hallo World 2`);
// })

allesRotObj.onclick = function () {
    const contentObj = document.getElementById(`content`);
    contentObj.style.background = `rgb(255, 0, 0)`;

}

// Aufgabe:

// 1. Ändere den Titel des Buttons wo draufsteht "Alles Blau" 
//    zu "Alle Paragraphen blau" -> im HTML
// 2. Füge ein neues Click-Event zu diesem Button hinzu.
//    Dafür hole dir vorher den Button in den JS Code.
// 3. Wenn der Nutzer auf den Button klickt, sollen alle
//    Paragraphen blau werden. Nutze dafür die Methode 
//    getElementsByClassName. nutze auch Google, um Dir 
//    die Funktionsweise dieser Methode gefügig zu machen

// Verbindung zum html (dom) wird hergestellt
const allesBlauObj = document.getElementById(`allesblau`);

allesBlauObj.onclick = function () {
    // alle paragraphen mit class blogeintrag werden 
    const alleBlogeintragArray = document.getElementsByClassName(`blogeintrag`);

    for (let i = 0; i < alleBlogeintragArray.length; i++) {
        alleBlogeintragArray[i].style.background = `blue`;
    }
}

const neuerBlogeintragObj = document.getElementById(`neuerblogeintrag`);

neuerBlogeintragObj.onclick = function () {

    const newParagraph = document.createElement(`p`);
    newParagraph.className = "blogeintrag";
    newParagraph.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, optio voluptatibus? Illo, minima. Repudiandae, dolores.`;
    const contentObj = document.getElementById(`content`);
    contentObj.appendChild(newParagraph);
}

// Aufgabe:

// 1.  Erstelle einen neuen Button "Neuer Zufallsparagraph".
// 2.  Wenn der Nutzer auf den Button klickt, soll ein neuer Paragraph erstellt werden.
// 2a. der Inhalt des Paragraphen soll aus 20 zufällig ausgewählten Wörten bestehen.
//     Lege dafür ein Array an, das aus 20 Wörtern besteht - Wörter deiner Wahl.
// 2b. Die Hintergrundfarbe des Paragraphen soll ebenfalls zufällig ausgewählt werden
// 3.  Erstelle einen neuen Button "Paragraph entfernen", der den letzten Paragraphen
//     entfernt. Benutze dafür Google.
//     Wenn kein Paragraph mehr zum Entfernen da ist, soll ein Alert ausgegeben
//     werden "alle Paragraphen wurden entfernt"

const zufallObj = document.getElementById(`zufall`);

zufallObj.onclick = function () {

    const newZufallParagraph = document.createElement(`p`);
    newZufallParagraph.className = "blogeintrag";
    // newZufallParagraph.innerText = ``;

    let words = [`Lorem`, `ipsum`, `dolor`, `sit`, `amet`, `consectetur`, `adipisicing`, `elit`, `Doloremque`, `accusamus`, `magni`, `quidem`, `id`, `eius`, `quibusdam`, `ullam`, `nam`, `ea`, `voluptatum`, `nesciunt`];

    for (let i = 0; i < 20; i++) {

        let zufallszahl = Math.floor(Math.random() * 20);

        newZufallParagraph.innerText += words[zufallszahl];
        newZufallParagraph.innerText += ` `;
    }

    let rgb1 = Math.round(Math.random() * 255);
    let rgb2 = Math.round(Math.random() * 255);
    let rgb3 = Math.round(Math.random() * 255);

    newZufallParagraph.style.background = `rgb(${rgb1}, ${rgb2}, ${rgb3})`

    const contentObj = document.getElementById(`content`);
    contentObj.appendChild(newZufallParagraph);

}

const letzterObj = document.getElementById(`letzter`);

letzterObj.onclick = function () {

    var paragraphen = document.querySelectorAll('.blogeintrag');
    if (paragraphen.length >0 ) {
        paragraphen[paragraphen.length - 1].remove()

    } else {
        alert(`Nichts zu entfernen`);
    }
}