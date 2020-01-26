console.log(`51_arrowfunctions_Wiederholung`);

// statement: produziert eine Aktion oder eine Deklaration

halloWorldES5();

function halloWorldES5() {
    console.log(`Hallo World ES5`);
}


// ES5-Funktionen können auch als Expression geschrieben werden, dann werden sie im Hoisting nicht berücksichtigt

let halloWorldES5Expression = function () {
    console.log(`Hallo World from ES5 Expression`)
}

halloWorldES5Expression();

// expression: produziert immer einen Wert

//halloWorldES6(); // wenn der Compiler hier ankommt, dann wurde im hoisting-Prozess die Deklaration von halloWorldES6 NICHT gefunden

// ergibt: Uncaught ReferenceError: Cannot access 'halloWorldES6' before initialization


let halloWorldES6 = () => {
    console.log(`Hallo World from ES6`);
}

halloWorldES6();

let obj1 = {
    name: "Anton",
    getName: function () {
        return this.name // This-Keyword referenziert auf obj1
    }
}

console.log(obj1.getName());


let obj2 = {
    name: "Sarah",
    getName: () => {
        return this.name; // this-keyword referenziert auf die auf die Umgebung, in der getName später aufgerufen wird
    }
}

console.log(obj2.getName());


let obj3 = {
    getThis: () => {
        return this;
    }
}

console.log(obj3.getThis());


// Wenn wir in der Klasse eine Arrow-Funktion benutzen, können wir später bei dem insanziiertem Objekt mit dem this keyword auf die Klasse zugreifen

class Obj4 {
    constructor() {}
    getThis = () => {
        return this;
    }
}

const obj4neu = new Obj4();
console.log(obj4neu.getThis());


function returnHalloWorldES5() {
    return `Hallo Welt`
}
console.log(returnHalloWorldES5());

const returnHalloWorldES6_1 = () => {
    return `Hallo World ES6_1`
}

console.log(returnHalloWorldES6_1());


const returnHalloWorldES6_2 = () => `Hallo World ES6_2`;

console.log(returnHalloWorldES6_2());


const returnHalloWorldES6_3 = _ => `Hallo World ES6_3`;

console.log(returnHalloWorldES6_3());

const sum = (a, b) => a + b;
const foo = a => 2 * a;

// Konvertiere dieses ES5-Syntax in eine ES6-Syntax

// function A(x) {
//     return x * B(x) + C(x, 2*x);
// }

const A = x => x * B(x) + C(x, 2 * x);

// function B(x) {
//     return x * 2 * C(x, 2*x);
// }

const B = x => x * 2 * C(x, 2 * x);

// function C(x,y) {
//     const obj = {
//         z:5,
//         getZ: function () {
//             return this.z * 4
//         }
//     }
//     return 4 * x + y +obj.getZ();
// }


const C = (x, y) => {

    class Obj {
        constructor() {}
        z = 5;
        getZ = () => this.z * 4
    }
    const zobj = new Obj(x);
    return 4 * x + y + zobj.getZ();
}

console.log(A(5));

console.log(C(5, 2))


function Nameconstructor(vorname, nachname) {
    this.vorname = vorname;
    this.nachname = nachname;
    this.namensZusammenSetzer = function () {
        this.kompletterName = this.vorname + " " + this.nachname
    }
}

let bundeskanzlerin = new Nameconstructor("Angela", "Merkel");
bundeskanzlerin.namensZusammenSetzer();

console.log(bundeskanzlerin);


const Nameconstructor2 = (vorname, nachname) => {

    class NeuerName {
        vorname =  "Dies ist der Vorname";
        nachname = "und das ist der Nachname";
        constructor() {}
        namenszusammensetzer2 = () => {
            this.kompletterNameMitThis = this.vorname + " " + this.nachname;
            this.kompletterNameOhneThis = vorname + " " + nachname;
        };

    }
    const namensObjekt = new NeuerName(vorname, nachname);
    return namensObjekt;
}

let aussenminister = Nameconstructor2("Heiko", "Maas");
aussenminister.namenszusammensetzer2();
console.log(aussenminister);