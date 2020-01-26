console.log(`13_function_constructor`);

// let john = {
//     name : `John`,
//     yearOfBirth : 1990,
//     job: `teacher`
// };


let Person = function (name, yearOfBirth, job) {
    // this referenziert aufs leere Objekt!!
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.foo = null;
    // this.calculateAge = function () {
    //     console.log(2019 - this.yearOfBirth);
    // }
}

// Prototyping
Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = `Smith`;



// NEW legt eine neue Instanz von Person an

let john = new Person(`John`, 1990, `teacher`);
john.calculateAge();

let jane = new Person(`Jane`, 1917, `Tarzan's wife`);
jane.calculateAge();

let mark = new Person(`Mark`, 2002, `driving teacher`);
mark.calculateAge();




console.log(john);

// old school 
// console.log(john.__proto__ === Person.prototype);

console.log(Object.getPrototypeOf(john) === Person.prototype);

console.log(john.hasOwnProperty(`job`));
console.log(john.hasOwnProperty(`lastName`));

console.log(john instanceof Person);

console.log(john.lastName);


let x = [2, 4, 6];
console.log(x.length);
console.log(Object.getPrototypeOf(x));

console.log(x.pop);
console.log(x.push);


let personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
}

let john2 = Object.create(personProto);
john2.yearOfBirth = 1990;
john2.job = "teacher";

console.log(john2);


// primitive Daten:

let a = `Kaulquappe`; // String
let b = true; // Boolean
let c = 250; // Numbers
let d = null // Null = wird mit Absicht verwendet, damit eine Variable keinen Wert hat
let e = a * 5; // NaN = Not a number 
let f; // undefined
console.log(e);

let z = c; // Kopie (Call by Value)
c = 25;

q(c);
q(z);


function q(p) {
    console.log(p);
}

// Komplexe Daten:

let object1 = {
    name: `John`,
    age: 26
};

let object2 = object1; // Keine Kopie sondern eine Referenz (Call by Reference)
// Wir haben kein neues Objekt kreiert, sondern eine Referenz
// die auf das alte Objekt zeigt wie Links im Internet
object1.age = 30;

q(object1.age);
q(object2.age);

object2.age = 35;

q(object1.age);
q(object2.age);

let age = 32;
let obj = {
    name: `Holger`,
    city: `Berlin`
};

function change(a, b) {
    a = 30;
    b.city = `New York`;
    return a;
}


age = change(age, obj);

q(obj);
q(age);


let years = [1998, 1965, 1937, 2005, 1998, 1985, 1991];

function arrayCalc(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // newArr.push(calculateAge(1998) {
        // return 2019-1998 = 21;
        // }) 

        newArr.push(fn(arr[i])); // einzelne Jahre
        // newArr.push(21);
    }
    return newArr;
}

// Übergabefunktion
function calculateAge(year) {
    return 2019 - year;
}

// Funktion wie ein einfacher Datenträger übergeben
let ages = arrayCalc(years, calculateAge);
q(ages);


function vollj(einzelneItemsDesArrays) {

    return (2019 - einzelneItemsDesArrays >= 18);

    //  if (2019 - einzelneItemsDesArrays >= 18) {
    //      return true;
    //  }
    //  else {
    //      return false;
    //  }
}

let ueberprueft = arrayCalc(years, vollj);
q(ueberprueft);

function maxHeartRate(age) {
    if (age >= 18 && age < 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

// Benutze diese Funktion mit arrayCalc, und schau was rauskommt!
// Erkläre die Ausgabe

let pulse = arrayCalc(ages, maxHeartRate);
q(pulse);



// Funktionen die Funktionen zurückgeben

function interviewQuestion(job) {
    if (job.toLowerCase() === `designer`) {

        return function (name) {
            q(name + ` can you please explain what UX design is?`);
        }
    } else if (job.toLowerCase() === `teacher`) {
        return function (name) {
            q(`What subject do you tech, ` + name + `?`);
        }
    } else {
        return function (name) {
            q(`Hello ` + name + `, what do you do?`)
        }
    }
}

let frage = interviewQuestion(`Teacher`);
frage(`Alvaro`);

let frage2 = interviewQuestion(`DESIGNER`);
frage2(`Michelle`);


// Andere Möglichkeit:

interviewQuestion(`Tennis-Trainer`)(`Boris`);

// IIFE = 
// Immediately Invoked Function Expression
// Sofort ausgeführter Funktionsausdruck

function game() {
    let score = Math.random() * 10;
    q(score >= 5);

}

game(); // benannte Funktion aufrufen

(function () {
    let score = Math.random() * 10;
    q(score > 5);
})(); // anonyme Funktion aufrufen


(function (goodLuck) {
    let score = Math.random() * 10;
    q(score >= 5 - goodLuck);
})(5);

// Closures = Kapselung von Funktionen / Funktionsabschluss

function retirement(retirementAge) {
    let k = ` Jahre bis zur Rente`;
    return function (year) {
        let alter = 2019 - year;
        q((retirementAge - alter) + k);
    }
}

let retirementUS = retirement(66);
retirementUS(1990);

let retirementGermany = retirement(67);
retirementGermany(1990);

let retirementIceland = retirement(68)
retirementIceland(1990);


let Kerze = function (farbe, laenge, durchmesser) {
    this.farbe = farbe;
    this.laenge = laenge;
    this.durchmesser = durchmesser;
    this.brenndauerFunktion = function () {
        var minProCm = 20;
        if (this.durchmesser === 3) {
            minProCm = 37;
        } else if (this.durchmesser === 4) {
            minProCm = 68;
        } else if (this.durchmesser === 5) {
            minProCm = 100;
        } else if (this.durchmesser === 6) {
            minProCm = 135;
        } else if (this.durchmesser === 7) {
            minProCm = 175;
        } else if (this.durchmesser === 8) {
            minProCm = 215;
        } else if (this.durchmesser === 9) {
            minProCm = 260;
        } else {
            minProCm = 305;
        }
        this.brenndauer = this.laenge * minProCm;
    }
}

let kerze1 = new Kerze(`rot`, 8, 5);

kerze1.brenndauerFunktion();
console.log(kerze1);


let Kerze2 = function (farbe, laenge, durchmesser) {
    this.farbe = farbe;
    this.laenge = laenge;
    this.durchmesser = durchmesser;
}

Kerze2.prototype.brenndauerFunktion2 = function () {
    var minProCm = 20;
    if (this.durchmesser === 3) {
        minProCm = 37;
    } else if (this.durchmesser === 4) {
        minProCm = 68;
    } else if (this.durchmesser === 5) {
        minProCm = 100;
    } else if (this.durchmesser === 6) {
        minProCm = 135;
    } else if (this.durchmesser === 7) {
        minProCm = 175;
    } else if (this.durchmesser === 8) {
        minProCm = 215;
    } else if (this.durchmesser === 9) {
        minProCm = 260;
    } else {
        minProCm = 305;
    }
    this.brenndauer = this.laenge * minProCm;
}

Kerze2.prototype.handelsmarke = true;

let modell1 = new Kerze2(`weiß`, 10, 5);

modell1.brenndauerFunktion2();
console.log(modell1);


// old school 

//console.log(modell1.__proto__ === Kerze2.prototype);

console.log(Object.getPrototypeOf(modell1)); // zegt an auf welche Prototypen ein Objekt zurückgreift
console.log(Kerze2.prototype); // zeigt an welche Prototypen ein Constructor einem Objekt zuweist
console.log(Object.getPrototypeOf(modell1) === Kerze2.prototype);


console.log(modell1.hasOwnProperty(`farbe`));
console.log(modell1.hasOwnProperty(`lastName`));

console.log(modell1 instanceof Kerze2);


let studentProto = {
    studentAtDCI: true,
    stayAndStudy: function () {
        if (this.hoursPerDay > 5) {
            this.studyingHard = true;
        } else {
            this.studyingHard = false;
        }
    }
}

let everybodyAtFbw14 = Object.create(studentProto);
everybodyAtFbw14.hoursPerDay = 7;
everybodyAtFbw14.stayAndStudy();

console.log(everybodyAtFbw14);


let numberVar = 44;
let stringVar = `ich bin ein String`;
let booleanVar = true;
let nullVar = null;
let undefindedVar;
let objectVar = {
    vorname: `Ich`,
    alter: 111
}

console.log(typeof numberVar);
console.log(typeof stringVar);
console.log(typeof booleanVar);
console.log(typeof nullVar);
console.log(typeof undefinedVar);
console.log(typeof objectVar);

let zahl = 100;
let kopieVonZahl = zahl;

console.log(zahl);
console.log(kopieVonZahl);

zahl = 999;

console.log(zahl);
console.log(kopieVonZahl);


let zahlObject1 = {
    a: 1,
    b: 2,
    c: 3
}

let zahlObject2 = zahlObject1

console.log(zahlObject1.c);
console.log(zahlObject2.c);

zahlObject1.c = 555;

console.log(zahlObject1.c);
console.log(zahlObject2.c);

function arrayCalc(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // newArr.push(calculateAge(1998) {
        // return 2019-1998 = 21;
        // }) 

        newArr.push(fn(arr[i])); // einzelne Jahre
        // newArr.push(21);
    }
    return newArr;
}

// Übergabefunktion
function calculateAge(year) {
    return 2019 - year;
}


let personArray = [{
        name: `John`,
        groesse: 1.78,
        gewicht: 73
    },
    {
        name: `Claudia`,
        groesse: 1.64,
        gewicht: 96
    },
    {
        name: `David`,
        groesse: 1.89,
        gewicht: 108
    },
    {
        name: `Sandra`,
        groesse: 1.74,
        gewicht: 59
    },
    {
        name: `John`,
        groesse: 1.91,
        gewicht: 151
    }   
]

function adipositas(person, fn) {
    let diaet = [`Diese Personen mit folgendem BMI sollten Diät halten, da sie Adipositas haben: \n\n`];
    let normalgewicht = [`\nDiese Personen mit folgendem BMI brauchen nichts tun: \n\n`];

    for (let i = 0; i < person.length; i++) {

        if (fn(person[i].groesse, person[i].gewicht) >= 30) {

            diaet.push(person[i].name);
            diaet.push(` `);
            diaet.push(fn(person[i].groesse, person[i].gewicht));
            diaet.push(`\n`);
        } else {
            normalgewicht.push(person[i].name);
            normalgewicht.push(` `);
            normalgewicht.push(fn(person[i].groesse, person[i].gewicht));
            normalgewicht.push(`\n`);
        }


    }
    ergebnis = diaet.concat(normalgewicht);
    ergebnisStr = ergebnis.join("");

    return ergebnisStr;
}

function bmiRechner(groesseInMeter, gewichtInKilo) {
    return gewichtInKilo / (groesseInMeter * groesseInMeter);
}

let liste = adipositas(personArray, bmiRechner);

console.log(liste); 