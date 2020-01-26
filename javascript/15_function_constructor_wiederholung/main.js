function cl(p) {
    console.log(p);
}

cl(`15_Function_Constructor_Wiederholung`);

function Person(name, age, city) {
    cl(this);
}

// normaler Funktikonsaufruf:
Person(`Holger`, 50, `Berlin`);


// javascript syntax: new

let holger = new Person(`Holger`, 50, `Berlin`);

// new: weise der variablen holger alle 
// Methoden und Variablen des this-keywords
// des funktionskontruktors zu


function Auto(baujahr, marke, ps) {
    this.baujahr = baujahr;
    this.marke = marke;
    this.ps = ps;
}

let bmw = new Auto(1999, `bmw`, 250);
let audi = new Auto(2005, `audi`, 230);
let mercedes = new Auto(2018, `mercedes`, 220);



// wir brauchen Funktionskonstruktoren, um
// Objekte schablonenartig zu bauen.


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

let user_1 = new User(`max mustermann`, `mustermann@musterwelt.de`, `123456`);
let user_2 = new User(`maximiliane musterfrau`, `musterfrau@musterwelt.de`, `Schatzilein`);
let user_3 = new User(`Boris Beispiel`, `boris.beispiel@beispielseite.de`, `Hallo`);

cl(user_1);
cl(user_2);
cl(user_3);

// Objekt ohne Funktionskonstruktor
let max = {
    username: "Max",
    email: "max@max.de",
    password: 1234
}

cl(max);


// Methode: Funktion im Objekt

function Baum(hoehe, farbe, anzahlAeste) {
    this.hoehe = hoehe;
    this.farbe = farbe;
    this.anzahlAeste = anzahlAeste;

    // Methode: existiert in allen
    //          instantiierten Objekten

    this.wachsen = function () {
        this.hoehe++;
    }
    // wenn diese Funtkion ohne das new_keyword aufgerufen wird,
    // dann returend sie einfach undefined
    // = return undefined;


}

// Instanz: ein Exemplar aus einer Menge gleichartiger Dinge

let eiche1 = new Baum(10, `weiss`, 5);
let eiche2 = new Baum(10, `weiss`, 5);
let eiche3 = new Baum(10, `weiss`, 5);
let birke1 = new Baum(15, `braun`, 20);
let birke2 = new Baum(15, `braun`, 20);


// 5 Bauminstanzen = die funktion wachsen existiert 5mal im Hauptspeicher


cl(eiche1);
cl(birke1);


birke1.wachsen();

cl(birke1);

let birke3 = Baum(15, `braun`, 20); // Worauf würde this zeigen???

cl(birke3); // undefinded
cl(typeof birke3); // undefined
cl(typeof birke2); // object


Baum.neuerAst = function () {
    this.anzahlAeste++;
}

// birke2.neuerAst(); // FEHLER, gibt es nicht.


Baum.prototype.neuerAst = function () {
    this.anzahlAeste++;
}

cl(birke2.anzahlAeste);
birke2.neuerAst();
cl(birke2.anzahlAeste);


Baum.prototype.anzahlBlaetter = 10;

cl(birke1.anzahlBlaetter);


// Aufgabe:

// Erstelle einen Funktionskonstruktor Haus und überlege dir 4 Variablen
// für ein Haus.
// Dazu überlege dir 2 Methoden, die jedes Haus haben könnte.

// Erstelle 3 Häuser


function Haus(zimmeranzahl, wohnflaeche, fenster, gartenQM) {
    this.zimmeranzahl = zimmeranzahl;
    this.wohnflaeche = wohnflaeche;
    this.fenster = fenster;
    this.gartenQM = gartenQM
}

haus_1 = new Haus(3, 80, 5, 140);
haus_2 = new Haus(6, 198, 8, 250);
haus_3 = new Haus(12, 420, 18, 1200);

Haus.prototype.anbau = function () {
    this.zimmeranzahl++;
    this.wohnflaeche += 20;
    this.fenster++;
    this.gartenQM += 20;
}

Haus.prototype.abriss = function () {
    this.gartenQM = this.gartenQM + this.wohnflaeche;
    this.wohnflaeche = 0;
    this.zimmeranzahl = 0;
    this.fenster = 0;
}

cl(haus_1);
haus_1.anbau();
cl(haus_1);

cl(haus_2);
haus_2.abriss();
cl(haus_2);