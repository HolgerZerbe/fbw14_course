console.log(`12_this_keyword`);


// this-keyword innerhalb einer Funktion

function calculateAge(year) {
    console.log(2019 - year);

    // this - verweist bei normalen Aufruf 
    // einer Funktion 
    // immer auf den globalen Execution Context
    // bzw. das Window-Object
    console.log(this);
}

calculateAge(1985);


// this keyword innerhalb einer Methode


let john = {
    name: `John`,
    yearOfBirth: 1990,
    calculateAge: function () {
        // innerhalb einer Methode verweist das
        // this-keyword auf das Objekt
        console.log(this);

        // kann übrigens nicht von außen
        // aufgerufen werden
        innerFunction();

        function innerFunction() {
            console.log(`innerFunction this`);
            // innerhalb einer Funktion, auch wenn sie Unterfunktion 
            // einer Methode ist, verweist das this-Keyword nach wie
            // vor auf den globalen Context
            console.log(this);
        }
    }
}

john.calculateAge();
console.log(this);

let mike = {
    name: `Mike`,
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;

mike.calculateAge();


// Aufgabe:

// Erstelle ein Objekt zu einem Feuerwehrauto.
// Denke dir 4 passende Variablen aus und 
// eine zusätzliche Variable namens farbe
// Erstelle eine Methode namens getFarbe
// die die aktuelle Farbe ausgibt.

// erstelle ein zweites Objekt zu einem Sportwagen.
// Überlege dir eine Farbe und kopiere die 
// Methode getFarbe des Feuerwehrautos zum 
// Sportwagen und führe sie aus.


let feuerwehrauto = {

    laenge: 5,
    leiter: true,
    fahrbereit: true,
    sirene: true,
    getFarbe: function (farbe) {
        this.aktuelleFarbe = farbe;

    }
}

feuerwehrauto.getFarbe("grün");

console.log(feuerwehrauto.aktuelleFarbe);

let sportwagen = {
    laenge: 3,
    geschwindigkeit: 320
}

sportwagen.getFarbe = feuerwehrauto.getFarbe;

sportwagen.getFarbe("gelb");

console.log(sportwagen.aktuelleFarbe);


let blumenstrauss = {
    anzahlBlumen: 12,
    alleSorten: [`Rosen`, `Gerbera`, `Lilien`],
    dazustellen: function (anzahl, sorte) {
        this.anzahlBlumen = this.anzahlBlumen + anzahl;
        this.alleSorten.push(sorte);
    }
}

blumenstrauss.dazustellen(3, `Sonnenblume`);

console.log(blumenstrauss);


function multilizieren(a, b) {
    let c = a * b;
    console.log(c);
    console.log(this);
    console.log(this.c);
}

multilizieren(4, 5)