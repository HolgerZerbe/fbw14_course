console.log(`Nested Loops Wiederholung`);


// nested = verschachtelt
// loops in loops

for (var i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
    for (var j = 0; j <= 3; j++) {
        console.log(`   j = ${j}`);
    }
}

// Aufgabe:

// Schreibe verschachtelte For-Schleifen, die
// folgenden Output generiert:

// *
// **
// ***
// ****
// *****
// ******
// *******


for (var i = 0; i < 7; i++) {
    var stars = "";
    for (var j = 0; j <= i; j++) {
        stars = stars + "*";

    }
    console.log(stars);
}


var someNumbers = [
    [17, 20, 12, 6],
    [13, -12, 0],
    [25, 7, 3, 10, 12],
    [31, 15]
];

for (var i = 0; i < someNumbers.length; i++) {
    for (var j = 0; j < someNumbers[i].length; j++) {
        console.log(someNumbers[i][j]);
    }
}

// Aufgabe:
// ~~~~~~~~

// Erstelle eine Funktion numberTable(), die zwei Parameter entgegennimmt:
// rows und columns. (Also Anzahl Zeilen und Spalten)

// 1. numberTable(rows, columns) soll ein Array mit der Länge von rows zurück-
//    geben. Jedes Element dieses Arrays soll wieder ein eigenes Array mit der Länge
//    columns sein. Jedes Element dieses Arrays soll eine 0 sein.

// Beispiel:
// numberTable(3,4) soll folgendes verschachteltes Array zurückgeben:

// [ [0,0,0,0], [0,0,0,0], [0,0,0,0] ]

// 2. Erweitere die Funktion numberTable so, dass anstatt Nullen in jedem 
//    Unter-Array aufsteigende Zahlen sind von 1 bis columns.

// Beispiel:
// numberTable(3,4) soll folgendes verschachteltes Array zurückgeben:

// [ [1,2,3,4], [1,2,3,4], [1,2,3,4] ]

// 3. Erweitere die Funktion numberTable nun so, dass es folgendes 
//    verschachteltes Array zurückgibt:

// [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ]


function numberTable(rows, columns) {
    var ergebnis = [];
    for (var i = 0; i < rows; i++) {
        var helper = [];
        for (var j = 0; j < columns; j++) {
            helper.push(0);
        }
        ergebnis.push(helper);
    }
    return ergebnis;
}

console.log(numberTable(3, 4));



function numberTable2(rows, columns) {
    var ergebnis2 = [];
    for (var i = 0; i < rows; i++) {
        var helper = [];
        for (var j = 1; j <= columns; j++) {
            helper.push(j);
        }
        ergebnis2.push(helper);
    }
    return ergebnis2
}

console.log(numberTable2(3, 4));




function numberTable3(rows, columns) {

    let aussenArray = [];
    let zaehler = 1;

    for (let i = 0; i < rows; i++) {

        let innenArray = [];
        for (let j = 1; j <= columns; j++) {
            //zaehler++;
            innenArray.push(zaehler++);
        }
        aussenArray.push(innenArray);
    }
    return aussenArray;
}

console.log(numberTable3(3, 4));