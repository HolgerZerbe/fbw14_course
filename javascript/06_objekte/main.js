var info = [];
info[0] = `Jan`;
info[1] = `Schulz`;
info[2] = `Berlin`;
info[3] = 33;
console.log(info);

var objInfo = {
    // key   : value
    firstname: `Jan`,
    lastname: `Schulz`,
    city: `Berlin`,
    age: 33
};

console.log(objInfo);


// Aufgabe

// Stelle Dir einen Baum vor . Finde 5 Key-Value Paare 
// über deinen ausgedachten Baum.


var baum = {
    baumArt: `Laubbaum`,
    baumGattung: `Eiche`,
    baumHoehe: `23 m`,
    baumAnzahlBlaetter: 0,
    baumAmLeben: false
}

var baum2 = {
    baumArt: `Laubbaum`,

    baumHoehe: `23 m`,
    baumAnzahlBlaetter: 0,
    baumAmLeben: false
}

console.log(baum);
console.log(baum2);

console.log(objInfo.city); // Variante 1
console.log(objInfo[`city`]); // Variante 2


// Aufgabe 

// Schreibe eine Funktion meinBaum die als Parameter objBaum ein Objekt
// erwartet. Die Funktion soll einen Text ausgeben der einen 
// Baum beschreibt.


function meinBaum(objBaum) {
    console.log(`Mein Baum ist eine ${objBaum.baumGattung}, dabei handelt es sich um einen ${objBaum.baumArt}.
Der Baum ist ${objBaum.baumHoehe} hoch und hat ${objBaum.baumAnzahlBlaetter} Blätter.
Dass der Baum am Leben ist, ist ${objBaum.baumAmLeben}.`);
}

meinBaum(baum);
meinBaum(baum2);

function intro(objPerson) {
    console.log(`Mein Name ist ${objPerson.firstname} ${objPerson.lastname}. Ich wohne in ${objPerson.city} und bin ${objPerson.age} Jahre alt.`);

}

intro(objInfo);

function printXundY(obj) {
    console.log(`
${obj.x} und ${obj.y}`);
}

var o1 = {
    x: 3,
    y: 6
};

printXundY(o1); // Objekt wurde vorher definiert
printXundY({
    x: 1,
    y: 2
}); // Objekt wird dírekt in der Parameterliste definiert


// Aufgabe:

// Schreibe eine Funktion incXundY die ein Parameter obj erwartet.
// In der Funktion wird obj.x um 1 erhöht und obj.y wird mit 5 multipliziert.
// Danach wird obj ausgegeben (nicht returned).
// Rufe die Funktion incXundY mit einem Beispiel-Objekt o2 = {x:5, y:5} auf,
// einmal indirekt per Variable und einmal direkt in der Parameterliste 


function incXundY(obj) {
    obj.x++;
    obj.y *= 5;
    console.log(obj);

}


var o2 = {
    x: 8,
    y: 5
};

incXundY(o2);
incXundY({
    x: 8,
    y: 5
});

function lichtSchalter(objHaus) {
    if (objHaus.licht === true) {
        objHaus.licht = false;

    } else {
        objHaus.licht = true;
    }
}

var meinHaus = {
    zimmer: 3,
    flaeche: 90,
    licht: false
}

lichtSchalter(meinHaus);

// arrays von Objekten

var apfel = {
    farbe: `rot`,
    gewicht: 50,
    geschmack: `suess`
}

var kiwi = {
    farbe: `grün`,
    gewicht: 100,
    geschmack: `suess`
}

var zitrone = {
    farbe: `gelb`,
    gewicht: 70,
    geschmack: `sauer`
}


// "normales" array
var arrayNumbers = [1, 2, 3, 4, 5];


// Array aus Objekten
var autos = [

    {
        typ: `Audi`,
        baujahr: 1998
    },
    {
        typ: `BMW`,
        baujahr: 2002
    },
    {
        typ: `Skoda`,
        baujahr: 2001
    },
    {
        typ: `Peugoet`,
        baujahr: 1997
    }
];

console.log(autos[1].baujahr);


var cocktail = {
    alkoholGehalt: 0.2,
    name: `Long Island`,
    zutaten: [`Limette`, `Tee`, `Eiswürfel`, `Minze`, `Rum`]
}


console.log(cocktail.zutaten[1]);
console.log(cocktail.zutaten[cocktail.zutaten.length - 1]);

// letzte Zutat entfernen

cocktail.zutaten.pop();

console.log(cocktail.zutaten[cocktail.zutaten.length - 1]);


console.log(cocktail.zutaten);
var letzteElement = cocktail.zutaten.pop();

console.log(letzteElement);
console.log(cocktail.zutaten);


// Aufgabe:

// Erstelle ein Array fruechte aus den folgenden Objekten.
// Versuche zwei verschiedene Lösungswege zu finden

var apfel = {
    farbe: `rot`,
    gewicht: 50,
    geschmack: `suess`
}

var kiwi = {
    farbe: `grün`,
    gewicht: 100,
    geschmack: `suess`
}

var zitrone = {
    farbe: `gelb`,
    gewicht: 70,
    geschmack: `sauer`
}

var fruechte1 = [apfel, kiwi, zitrone];

var fruechte2 = [];

fruechte2[0] = apfel;
fruechte2[1] = kiwi;
fruechte2[2] = zitrone;

var fruechte3 = [];

fruechte3.push(apfel);
fruechte3.push(kiwi);
fruechte3.push(zitrone);

console.log(fruechte1);
console.log(fruechte2);
console.log(fruechte3);

// Methoden - Funktionen in einem Objekt

var meinRechteck = {
    breite: 200,
    hoehe: 500
}

// flaeche ist eine externe Funktion
function flaeche(obj) {
    console.log(`Die Fläche ist ` + (obj.breite * obj.hoehe) + ` Quadratmeter.`);
}


// ein Schritt in OOP -> Objektorientiertes Programmieren
var meinZweitesRechteck = {
    breite: 200,
    hoehe: 500,
    //key  : value ist eine Funktion
    //flaeche ist ein Mitglied des Objekts meinZweitesRechteck
    flaeche: function () {
        var a = this.breite * this.hoehe;
        console.log(`Die Fläche ist ${a} Quadratmeter (zweites Rechteck).`);
    }
}

flaeche(meinRechteck);

meinZweitesRechteck.flaeche();

// Aufgabe

// Erstelle ein neues Objekt namens objIch.
// objIch soll einen firstname, lastname und eine city haben
// Außerdem soll es eine Methode haben namens umzug, die einen 
// Parameter erwartet namens newCity. umzug soll bei Aufruf die city
// von objIch mit newCity überschreiben und die newCity ausgeben.

var objIch = {
    firstname: `Holger`,
    lastname: `Zerbe`,
    city: `Berlin`,
    umzug: function (newCity) {
        console.log(objIch.city);
        this.city = newCity;
        console.log(objIch.city);
    }
}

objIch.umzug(`New York`);

// Anwendung des Objekt-Wissens auf Bibliotheks-Objekte

// console.log = Funktionen im Objekt sind Methoden des Objekts


function q(p) {
    console.log(p)
}

q(`Hallo World`);

// Math-object

// Math.floor

var f = 2.34343;
var floorF = Math.floor(f);
q(`floor von ${f} ist ${floorF}`);


// Math.ceil

var ceilingF = Math.ceil(f);
q(`ceil von ${f} ist ${ceilingF}`);


// Math.random

var rand = Math.random();
q(`rand ist zwischen 0 und 1 ${rand}`);


// Aufgabe 

// Erstelle eine Funtkion zufallszahl die zwei Parameter entgegennimmt: min und max
// Min und Max sollen zwei Ganzzahlen sein.
// Wobei min < max und beide größer als 0.
// zufallszahl soll eine zufällige Ganzzahl zwischen min und max zurückgeben.
// Ansonsten soll zufallszahl eine zufällige Ganzzahl zwischen min und max zurückgeben


/*function zufallszahl(min, max) {
    if (Math.floor(min) !== min || Math.floor(max) !== max || min > max || min < 0 || max < 0) {
        return false;
    } else {
        var zahl = Math.floor(max * Math.random());
        if (zahl <= min) {
            return `leider ist das Ergebnis kleiner oder gleich min`
        } else {
            return zahl;
        }
    }
}

var ergebnis = zufallszahl(12, 88);
console.log(ergebnis);*/



function zufallszahl_2(min, max) {
    if (Math.floor(min) !== min || Math.floor(max) !== max || min >= max || min < 0 || max < 0) {
        return false;
    } else {
        var zahl = min + (Math.round(Math.random() * (max - min)));
        return zahl;
    }
}

var ergebnis = zufallszahl_2(12, 88);
console.log(ergebnis);


var person = {
    name: "Graf Koks von der Gasanstalt",
    kreuz_gemacht: true,
    demokratisch_proEuropa: true
}

console.log(person.name);

console.log(person.kreuz_gemacht);

console.log(person.demokratisch_proEuropa);




function wahl(waehler) {

    if (waehler.kreuz_gemacht === true) {
        console.log(`${waehler.name} hat seine Bürgerpflicht erfüllt.`);
    } else {
        console.log(`${waehler.name} ist Nichtwähler`);
        return;
    }
    if (waehler.demokratisch_proEuropa === true) {
        console.log(`${waehler.name} ist pro EU eingestellt`);
    }
}
wahl(person);

var hand = {
    breite: `10 cm`,
    laenge: `20 cm`,
    finger: [`Daumen`, `Zeigefinger`, `Mittelfinger`, `Ringfinger`, `kleiner Finger`]
}

console.log(hand.laenge);
console.log(hand.finger[2]);

var testPerson = {
    name: `Testperson`,
    gewichtZumBerechnen: 10000,
    groesseZumBerechnen: 300,
    bodyMaxIndex: function (vorname, gewicht, groesse) {
        this.name = vorname;
        this.gewichtZumBerechnen = gewicht;
        this.groesseZumBerechnen = groesse;
        var BMI = this.gewichtZumBerechnen / (Math.pow(this.groesseZumBerechnen, 2));
        console.log(`${this.name} hat einen BMI von ${BMI}`);
       
    }
}
testPerson.bodyMaxIndex(`Bud Spencer +`, 125, 1.93);