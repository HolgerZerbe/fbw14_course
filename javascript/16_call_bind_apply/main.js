function cl(p) {
    console.log(p);
}

cl(`16_Call_Bind_Apply`);

// mormale Funktion

function halloWelt() {
    cl(`Hallo Welt`);
}

// Wir können es auch so ausführen....
// Funktionen sind auch Objekte.

halloWelt.call(); // macht das gleiche wie direkter Funktionsaufruf halloWelt();



let emily = {
    name: `Emily`,
    age: 35,
    job: `designer`,
    hallo: function () {
        cl(`
        Hallo, ich bin ${this.name}. Ich bin ${this.age} Jahre alt.
        Ich arbeite als ${this.job}.
        `);
    }
};

emily.hallo();
// bei normalen Funtkionenaufruf verweist das
// this-keyword auf das Objekt der Methode

emily.hallo.call();
// das this-keyword verweist auf den ersten 
// Parameter von call() = UNDEFINED

emily.hallo.call(emily);
// erster Parameter von call: this = emily



let steffen = {
    name: `Steffen`,
    age: 35,
    job: `Unternehmer` //,
    // hallo: function() {
    //     cl(`
    //     Hallo, ich bin ${this.name}. Ich bin ${this.age} Jahre alt.
    //     Ich arbeite als ${this.job}.
    //     `);
    // }
};


emily.hallo.call(steffen);

function whatIsThis() {
    console.log(this);
    // this verweist bei normalen Aufruf / Ausführung auf
    // globalen Context bzw. Window Object

}

whatIsThis();

whatIsThis.call(steffen); // ändert Ausführungscontext auf steffen
// this = steffen


function sayMyNameAndMyHobby(hobby) {
    cl(`
    Mein Name ist ${this.name} und mein Hobby ist 
    ${hobby}.
    `);
}

sayMyNameAndMyHobby(`Segeln`);

// call kann Context wechseln und Paramter entgegennehmen
sayMyNameAndMyHobby.call(steffen, `Segeln`);
sayMyNameAndMyHobby.apply(steffen, [`Segeln`]); // apply = call
// Array als Parameter


// Aufgabe:;

// Erstelle ein Objekt boot mit zwei Variablen deiner Wahl und einer
// zusätzlichen Variable benzinStand.
// boot soll eine Methode "tanken" haben, die den benzinstand um 1 erhöht.
// Anfangs ist benzinstand gleich 0

// Definiere ein zweites Objekt Auto mit ebenfalls zwei Variablen
// diener Wahl und einer Variablen benzinStand. auto soll sich die 
// Methode von boot ausborgen


let boot = {
    laenge: 5,
    fischkutter: true,
    benzinStand: 0,
    tanken: function () {
        this.benzinStand++;
    }
}

let auto = {
    anzahlRaeder: 4,
    fahrbereit: true,
    benzinStand: 0
}

boot.tanken.call(auto);

cl(auto.benzinStand);


// bind

// bind erstellt eine neue Funktion auf Basis einer anderen Funktion


function halloSonne(temperatur) {
    cl(
        `Hallo, ganz schön warm heute! Es sind ${temperatur} Grad heute!`
    )
}

halloSonne(32) // normaler Funktionsaufruf

// eine neue Funktion namens halloSonne35 wird erstellt,
// mit der ich halloSonne(35) aufrufe

let halloSonne35 = halloSonne.bind(null, 35) // null oder this, beides möglich

halloSonne35();


// Aufgabe:

// Analysiere das object john
// Erstelle ein neues object das auch einen name, age, und job hat.

// Erstelle eine Funktion sarahStelltSichKumpelhaftVor, die auf Basis 
// der Mehode intro von john erstellt wird . 
// Benutze dafür bind


let john = {
    name: `John`,
    age: 30,
    job: `mechanic`,
    intro: function (style) {
        if (style === `formal`) {

            cl(`
        Sehr geehrte Damen und Herren,
        ich heiße ${this.name} und verweile schon
        ${this.age} Jahre auf der Erde. Ich arbeite als
        ${this.job}. Viele Grüße, Ihr ${this.name}
        `);
        } else if (style = `kumpelhaft`) {
            cl(`
        Na, alles klar? 
        ich bins, der ${this.name} und mittlerweile
        habe ich schon ${this.age} auf dem Buckel. Momentan
        schlage ich mich als ${this.job} durch.
        Bis bald, dein ${this.name}
        `);
        }
    }
}

let sarah = {
    name: `Sarah`,
    age: 21,
    job: `actress`
};



// sarahStelltSichKumpelhaftVor = ist eine Funktion gespeichert in einer Variablen

sarah.sarahStelltSichKumpelhaftVor = john.intro.bind(sarah, `kumpelhaft`)

sarah.sarahStelltSichKumpelhaftVor();
cl(sarah)


// Zusammenfassung:

// - Funktionen sind auch Objects (mit Methoden und Variablen)

// - call:  Methode einer Funktion, die die Funktion aufrufen
//          mit einem anderen kontext (ändert das this-keyword
//          innerhalb der Funktion)

// - apply: das Gleiche wie call, nur mit Arrays

// - bind:  erstellt eine Funktion, die eine vorhandene Funktion als
//          Vorbild hat mit vordefinierten Parametern.



let cheeseburger = {
    typ: `cheeseburger`,
    anzahl: 1,
    gekocht: function () {
        this.anzahl++;
        console.log(`Es sind jetzt ${this.anzahl} ${this.typ} vorhanden.`)
    },
    verspeist: function () {
        if (this.anzahl > 0) {
            this.anzahl--
            console.log(`Es wurde ein ${this.typ} verspeist, es sind jetzt ${this.anzahl} Stück vorhanden.`)
        } else {
            console.log(`Sorry, nichts mehr zum Essen da!`)
        }
    }
};

let pommes = {
    typ: `Pommes Frites`,
    anzahl: 0
};


cheeseburger.verspeist.call(cheeseburger);
cheeseburger.verspeist.call(cheeseburger);

cheeseburger.gekocht.call(cheeseburger);
cheeseburger.verspeist.call(cheeseburger);
cheeseburger.gekocht.call(pommes);



function addition(summand, zahlDerAdditionen) {
    let summe = 0;
    for (let i=0; i<zahlDerAdditionen; i++ ) {
        summe += summand;
    }
    return summe;
}

let ergebis = addition(23,4);
console.log(ergebis);

addiere25 = addition.bind(this, 25, 5);

console.log(addiere25());