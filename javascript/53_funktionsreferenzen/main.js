console.log(`53_Funktionsreferenzen`);

const sayHalloWorld = () => {
    console.log(`Hallo World`);
}

sayHalloWorld();


// f soll eine Funktionsreferenz sein
const callSomeFunc = (f) => {
    f();
}

callSomeFunc(sayHalloWorld);

// Aufgabe:

// Rufe die Funktion sayHalloWorld nach 5 Sekunden auf. 
// Benutze dafür setTimeout


// setTimeout(() => {
//     sayHalloWorld()
// }, 5000);

setTimeout(
    sayHalloWorld,
    5000
);

// Erstelle eine Funktion arrayCall die 3 Parameter entgegennimmt f1, f2 und f3.
// f1, f2 und f3 sollen Referenzen auf Funktionen sein.
// arrayCall erstellt ein Array und pusht die f1, f2 und f3 hinein.
// Danach ruft arrayCall alle Funktionen nacheinander auf.


const arrayCall = (f1, f2, f3) => {
    let functionArray = [];
    // functionArray.push(f1);
    // functionArray.push(f2);
    // functionArray.push(f3);
    functionArray = [...functionArray, f1, f2, f3];
    for (elem of functionArray) {
        elem();
    }
    // console.log(functionArray)
}

const function1 = () => {
    console.log(`Hallo from function1`);
}
const function2 = () => {
    console.log(`Hallo from function2`);
}
const function3 = () => {
    console.log(`Hallo from function3`);
}


arrayCall(function1, function2, function3);



const mathematischeMethode = (a, b, callback) => {
    return callback(a, b)
}

const addition = (x, y) => {
    return x + y;
}
const subtraktion = (a, b) => {
    return a - b;
}
const multiplikation = (a, b) => {
    return a * b;
}
const division = (a, b) => {
    return a / b;
}
const potenz = (a, b) => {
    return Math.pow(a, b);
}
const wurzel = (a, b) => {  
    return Math.pow(a, 1 / b);
}

console.log(mathematischeMethode(16, 4, addition));
console.log(mathematischeMethode(16, 4, subtraktion));
console.log(mathematischeMethode(16, 4, multiplikation));
console.log(mathematischeMethode(16, 4, division));
console.log(mathematischeMethode(16, 4, potenz));
console.log(mathematischeMethode(16, 4, wurzel));