console.log(`23_DOM`);

const greetingObj = document.getElementById(`greeting`);

const saymynameObj = document.getElementById(`saymyname`);

saymynameObj.onclick = function () {

    // greetingObj.value gibt den value(Wert) der textbox aus
    alert(`Hallo
    ${greetingObj.value}`);
}

// Aufgabe:

// 1. Erstelle zwei Textboxen und einen Button mit dem Label "Addieren"
// 2. Wenn der Nutzer auf Addieren klickt, dann soll die Summe ausgebeben
//    werden.
// 3. Prüfe hierzu, ob in beiden Textboxen wirklich Zahlen drin stehen.
//    Google effizient....


const summand1Obj = document.getElementById(`summand1`);
const summand2Obj = document.getElementById(`summand2`);

const additionObj = document.getElementById(`addition`);

additionObj.onclick = function () {

    if (summand1Obj.value == parseFloat(summand1Obj.value) && summand2Obj.value == parseFloat(summand2Obj.value)) {
        
        alert((Math.round((parseFloat(summand1Obj.value) + parseFloat(summand2Obj.value))*100)/100).toFixed(2));

    } else {
        alert(`Falsche Eingabe, bitte nur Zahlen eingeben!`);
    }
}
