function cl(p) {
    console.log(p);
}

cl(`18_Closures_Wiederholung`)

// Funktion, die Hallo ausgibt

function sayHallo() {
    cl(`Hallo`);
}

// Funktion, die Hallo returned

function retHallo() {
    return `Hallo`;
}

// Funktion, die eine Funktion zurückgibt,
// die Hallo ausgibt

function retSayHallo() {
    return function () { // anonyme Funktion
        cl(`Hallo, aus einer Funktion returned`);
    }
}


// Aufgabe:

// Führe die Funktion aus, die von retSayHallo returned wird

let ergebnis = retSayHallo();
ergebnis();

// kürzere Schreibweise
retSayHallo()();



// Closures

function doesNotDie() {
    let a = `Hallo Sonne`;

    return function () {
        // auf a im parent Scope wird zugegriffen
        // = closure
        console.log(`Hallo was? ${a}`)
    }
}


let anonymHallo = doesNotDie();
// doesNotDie ist hier gelöscht vom Speicher 
anonymHallo(); // anonymHallo kann trotzdem auf a zugreifen


// Aufgabe: 

// Erstelle ein Funktion counter, die eine Variable 
// n hat. n ist Anfangs 0. counter returned eine
// anonmye Funktion, die n um 1 erhöht und n ausgibt.


function counter() {
    let n = 0;

    return function () {
        n++;
        console.log(n);
    }
}

counterErgebnis = counter(); // 1x counter wird ausgeführt
counterErgebnis();
counterErgebnis();
counterErgebnis();
counterErgebnis();
counterErgebnis();
// 5 mal wird die anonyme Funktion ausgeführt,
// die auf den closure von counter zugreift


counter()();
counter()();
counter()();
counter()();
counter()();
// 5 mal wird die Funktion counter() ausgeführt,
// wobei jedesmal die anonyme Funktion auf
// 5 unterschiedliche Closures zugreift.



function essen(gericht) {
    let x = 0;
    return function () {
        x++;
        console.log(`ich esse ${x} Portionen ${gericht}.`);
    }
}

let essenAusgabe = essen(`Currywurst mit Pommes`);

essenAusgabe();
essenAusgabe();
essenAusgabe();
essenAusgabe();
essenAusgabe();

essen(`Pommes mit Majo`)();
essen(`Pommes mit Majo`)();
essen(`Pommes mit Majo`)();
essen(`Pommes mit Majo`)();
essen(`Pommes mit Majo`)();
