console.log(`57_Restoprator`);

// Rest-Operator: wird vorallem in Funktionen angewandt
// in der Parameterliste.
// Er wird gebraucht, um eine unendliche Anzahl von
// Parametern als Array darzustellen

const words = (...args) => {
    // args ist hier als array zu sehen
    for (let i = 0; i < args.length; i++) {
        console.log(`${i}: ${args[i]}`);
    }
}

words(`hallo`, `world`, `wie`, `geht's`, `?`);

// Aufgabe:

// Erstelle eine Funktion multiSum die zwei Parameter
// a und b entgegennimmt. Wenn es nur zwei Parameter
// a und b gibt ud keine weiteren, dann returned multisum a*b.
// Falls mehr als zwei Parameter existieren, dann returned
// multisum a*b+c0+c1+c2+...+cN
// a und b müssen definert sein, ansonsten returned
// multiSum null

// multisum(2,6) returned 12
// multisum(2,6,3) returned 15
// multisum(2,6,3,1) returned 16


const multisum = (...args) => {
    if (args.length < 2) {
        return null;
    };
    let result = args[0] * args[1];
    if (args.length === 2) {
        return result;
    }
    for (let i = 2; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(multisum(5));
console.log(multisum(2, 6));

console.log(multisum(2, 6, 3));
console.log(multisum(2, 6, 3, 1));



const ifOdd = (...args) => {
    for (let i =0; i<args.length; i++) {
        if (args[i] % 2) {
            console.log(args[i]);
        }
    }
}

ifOdd(1,2,4,5,6,7,9,11);
