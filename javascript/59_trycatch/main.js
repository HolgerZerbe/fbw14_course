console.log(`59_trycatch`);

try {
    // array names fehlt => es wird ein Fehler geworfen
    for (name of names) {
        console.log(name);
    }
} catch (error) {
    // hier wird der Fehler aufgefangen
    console.warn(error); // Console-Ausgabe in gelb mit gelben Warndreieck
    console.error(error); // Console-Ausgabe in rot mit rotem Fehlerpunkt
} finally {
    // wird immer ausgeführt
    console.log(`Egal, ob es läuft oder nicht....`);
}

// Es geht trotzdem weiter
console.log(`... es geht trotzdem weiter`);

///////////////////////////////////////////////////////////////////////////////////////////



// Synchroner Code

let sitsOnTheIronThrone = `Cersei`;

console.log(sitsOnTheIronThrone);

// Funktion um neuen King festzusetzen
let changeRuler = name => {
    sitsOnTheIronThrone = name;
}


// Asynchroner Code

let changeRulerAsync = name => {
    setTimeout(() => {
        sitsOnTheIronThrone = name;
        console.log(sitsOnTheIronThrone);
    }, 5000)
}
// Danny is der neue King
changeRulerAsync(`Danny`);
console.log(sitsOnTheIronThrone);

// Nights finds All
changeRulerAsync(`The nights King`);
console.log(sitsOnTheIronThrone);


// Nested Callback Function

let changeRulerNestedCallback = (name1, name2) => {
    setTimeout(() => {
        sitsOnTheIronThrone = name1;
        console.log(sitsOnTheIronThrone);
        setTimeout(() => {
            sitsOnTheIronThrone = name2;
            console.log(sitsOnTheIronThrone);
        }, 2000);
    }, 5000);
}

changeRulerNestedCallback("Martina", "Itamar")


