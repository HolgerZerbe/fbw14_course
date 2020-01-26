function cl(p) {
    console.log(p);
}

cl(`17_Vererbung`);

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

let karsten = new Person(`Karsten`, 30, `Taxifahrer`);
let kira = new Person(`Kira`, 28, `Studentin`);


// Sportart ist Tennis oder Fussball
function Sportler(name, age, sportart) {
    Person.call(this, name, age, `Sportprofi`); // name, age, job
    this.sportart = sportart;
}

let boris = new Sportler(`Boris`, 55, `Tennis`);
let angelique = new Sportler(`Angelique`, 28, `Tennis`);


cl(karsten);
cl(kira);
cl(boris);
cl(angelique);


function Konto(inhaber, anfangssaldo) {
    this.inhaber = inhaber;
    this.anfangssaldo = anfangssaldo;
    this.saldo = anfangssaldo;
}

Konto.prototype.abheben = function (betrag) {
    this.saldo -= betrag;

}

Konto.prototype.einzahlen = function (betrag) {
    this.saldo += betrag;
}

function Girokonto(inhaber, anfangssaldo, dispo) {
    Konto.call(this, inhaber, anfangssaldo);
    this.dispo = dispo;
}


// Wir verbinden die Prototyp-Kette von Girokonto
// mit der Prototyp-Kette von Konto:

Girokonto.prototype = Object.create(Konto.prototype)

function Sparkonto(inhaber, anfangssaldo, maxAbhebungenProJahr) {
    Konto.call(this, inhaber, anfangssaldo);
    this.maxAbhebungenProJahr = maxAbhebungenProJahr;
}


// Wir verbinden die Prototyp-Kette von Sparkonto
// mit der Prototyp-Kette von Konto:

Sparkonto.prototype = Object.create(Konto.prototype)

let meinGirokonto = new Girokonto(`Holger Zerbe`, 1000, 500);
let meinSparkonto = new Sparkonto(`Holger Zerbe`, 5000, 12);

cl(meinGirokonto);
cl(meinSparkonto);


meinGirokonto.einzahlen(1000);
meinSparkonto.einzahlen(777);

cl(meinGirokonto);
cl(meinSparkonto);


function PersonConstructor(vorname, nachname, alter, job) {
    this.vorname = vorname;
    this.nachname = nachname;
    this.alter = alter;
    this.job = job;
    this.saldo = 0;
}

let holger = new PersonConstructor(`Holger`, `Zerbe`, 50, `arbeitssuchend`);

console.log(holger);

function StudentConstructor(vorname, nachname, alter, fach) {
    PersonConstructor.call(this, vorname, nachname, alter, `Student`);
    this.fach = fach;
}

let patrick = new StudentConstructor(`Patrick`, `Schwarz`, 49, `Javascript`);

console.log(patrick);


function Mieter(vorname, nachname, alter, solvent) {
    this.vorname = vorname;
    this.nachname = nachname;
    this.alter = alter;
    this.saldo = 0;
}

Mieter.prototype.zahlungsgeingang = function (mietzahlung) {
    this.saldo += mietzahlung;
}

Mieter.prototype.kontobelastung = function (faellligeMiete) {
    this.saldo -= faellligeMiete;
}

function WohnungsMieter(vorname, nachname, alter, wohnungsNummer) {
    Mieter.call(this, vorname, nachname, alter);
    this.wohnungsNummer = wohnungsNummer;
}

function ParkplatzMieter(vorname, nachname,alter, parkplatzNummer) {
    Mieter.call(this, vorname,nachname, alter);
    this.parkplatzNummer = parkplatzNummer;
    this.schrankenSchluesselErhalten = true;
}


let mieterNr001 = new Mieter(`Max`, `Mustermann`, 35);
console.log(Mieter.prototype);
console.log(Object.getPrototypeOf(mieterNr001));

// let mieterNr002 = new WohnungsMieter(`Marianne`, `Musterfrau`, 33, `P 1 - 33`); 

// mieterNr002.kontobelastung(33); funktioniert nicht, da noch keine
// keine Verküpfung der Prototype-Ketten erfolgt ist


WohnungsMieter.prototype = Object.create(Mieter.prototype);
ParkplatzMieter.prototype = Object.create(Mieter.prototype);


let mieterNr002 = new ParkplatzMieter(`Marianne`, `Musterfrau`, 28, `P 1 - 33`); 

mieterNr002.kontobelastung(33);

console.log(mieterNr002.saldo);
console.log(mieterNr002);