console.log(`55_SpreadOperator`);

// Der Spread-Operator kann 1) Arrays in Argumentlisten konvertieren

// Funktionen mit unendlicher Anzahl an Parametern, z.B. console.log

console.log(`Hallo`, `World`, `wie`, `gehts`);

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers[0], numbers[1], numbers[2]);


// Array wird mit dem Spread-Operator ... in eine Argumentliste konvertiert
console.log(...numbers);

const sum = (x, y, z) => {
    return x + y + z;
}

console.log(sum(...numbers));

// Objekt-Referenzen

let array1 = [4, 2, 6, 9];

console.log(array1);

let array2 = array1;

console.log(array1);

array2[0] = 7;

console.log(array1);

// Der Spread-Operator kann 2) Neue Arrays aus bestehenden Arrays erstellen

let cloneOfArray1 = [...array1];

console.log(cloneOfArray1);

let array3 = [10, 12, 14, 16];

let concat1and3 = [...array1, ...array3];

console.log(concat1and3);

let additional = [...concat1and3, ...[20, 30, 40], ...[-5]];

console.log(additional);

// Aufgabe:

// Erstelle eine Funktion cube mit einem Parameter length.
// cube returned ein 3-dimensionales Array der Länge n und soll von der 
// Struktur her an einen Würfel erinnern. jedes Element des Cubes soll
// abwechselnd eine 0 und eine 1 sein, z.B.

// cube(3):

// [
//    [ [0, 1, 0], [1, 0, 1], [0, 1, 0] ],
//    [ [1, 0, 1], [0, 1, 0], [1, 0, 1] ],
//    [ [0, 1, 0], [1, 0, 1], [0, 1, 0] ]
// ]

// Restriktion: verwende dafür den Spread-operator


// Variante 1 - Lösung mit Spread-Operator und 1 Schleife:


const cube1 = (length) => {
    let outerArray = [];
    let middleArray = [];
    let innerArray = [];
    for (let i = 1; i <= Math.pow(length, 3); i++) {
        if (i % 2) {
            innerArray = [...innerArray, 0];
        } else {
            innerArray = [...innerArray, 1];
        }
        if (!(i % length)) {
            middleArray = [...middleArray, innerArray];
            innerArray = [];
        }
        if ((!(i % Math.pow(length, 2))) && (!(i % length))) {
            outerArray = [...outerArray, middleArray];
            middleArray = [];
        }
    }
    return outerArray;
}
console.log(`Lösung (${94-74} Zeilen Code) mit Spread-Operator und 1 Schleife:`);
console.log(cube1(3));



// Variante 2 - Lösung mit Spread-Operator und 3 geschachtelten Schleifen:


const cube2 = (length) => {
    let outerArr = [];
    counter = 0;
    for (let i = 0; i < length; i++) {
        let middleArr = [];
        for (let j = 0; j < length; j++) {
            let innerArr = [];
            for (let k = 0; k < length; k++) {
                counter++;
                if (counter % 2) {
                    innerArr = [...innerArr, 0];
                } else {
                    innerArr = [...innerArr, 1];
                }
            }
            middleArr = [...middleArr, innerArr];
        }
        outerArr = [...outerArr, middleArr];
    }
    return outerArr;
}
console.log(`Lösung (${123-103} Zeilen Code) mit Spread-Operator und 3 geschachtelten Schleifen:`);
console.log(cube2(3));



// Variante Korrigierte Lösung von Zohir mit Wertzuweisung über Index und 3 geschachtelten Schleifen:


const cubeZohir1 = (l) => {
    let arr = [
        [
            [],
            [],
            []
        ],
        [
            [],
            [],
            []
        ],
        [
            [],
            [],
            []
        ]
    ];
    counter = 0;
    if (l === 3) {
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < l; j++) {
                for (let k = 0; k < l; k++) {
                    counter++
                    if (counter % 2) {
                        arr[i][j][k] = 0;
                    } else {
                        arr[i][j][k] = 1;
                    }
                }
            }
        }
    }
    return arr;
}

console.log(`Korrigierte Lösung von Zohir mit Wertzuweisung über Index und 3 geschachtelten Schleifen:`);
console.log(cubeZohir1(3));



// Variante Optimierte Lösung von Zohir mit Wertzuweisung über Index und 3 geschachtelten Schleifen:


const cubeZohir2 = (l) => {
    let arr = []
    counter = 0;

    for (let i = 0; i < l; i++) {
        arr[i] = [];
        for (let j = 0; j < l; j++) {
            arr[i][j] = [];
            for (let k = 0; k < l; k++) {
                counter++
                if (counter % 2) {
                    arr[i][j][k] = 0;
                } else {
                    arr[i][j][k] = 1;
                }
            }
        }
    }
    return arr;
}

console.log(`Optimierte Lösung von Zohir mit Wertzuweisung über Index und 3 geschachtelten Schleifen:`);
console.log(cubeZohir2(3));


let beispielArray = [
    [],
    [],
    []
];
beispielArray[2] = 23;
//beispielArray[2][1] = 23;

// beispielArray[2][1] = 23; funktioniert nicht, da nicht definiert ist, dass 
// das Item mit dem Index 2 des beispielArray selbst ein Array ist!!!!
console.log(beispielArray);



// Erstelle eine Funktion increasingNumbers mit einem Paramter n
// increasingNumbers erzeugt einen Array mit n Elementen, Zahlen von 0 bis n.

// Restriktion: Verwende dafür nur den Spread-Operator.
// Kein Push und keine Indexierung.
// Schleifen sind erlaubt.

const increasingNumbers = (n) => {
    let arrayOfNumbers = [];
    for (let i = 0; i < n; i++) {
        arrayOfNumbers = [...arrayOfNumbers, i];
        // arrayOfNumbers.push(i);

    }
    console.log(arrayOfNumbers);
}

increasingNumbers(5);

// Spread Operator mit Objekten

let obj1 = {
    x: 1,
    y: 5
}
console.log(obj1);

// obj1 wird direkt verändert
obj1.x = 10;
console.log(obj1);



// obj1 indirekt über die Referenz von obj2 verändert
obj2 = obj1;
obj2.x = 12;
console.log(obj1);


// obj3 ist ein Klon von obj1
let obj3 = {
    ...obj1
};

obj3.x = 50000;
console.log(obj3);

console.log(obj1);


// obj4 ist ein Klon von obj1, mit Überschreibung des key.value paares y:15
let obj4 = {
    ...obj1,
    y: 15
};

console.log(obj4);

let woerter = ["Ich", "Du", "Er-Sie-Es", "Wir", "Ihr", "Sie", "sind alles Personalpronomen"];

console.log(...woerter);

const wirZwei = (a, b) => a + " und " + b;

console.log(wirZwei(...woerter));

neueWoerter = woerter.map(value => value);
console.log(neueWoerter);

let nochmalWoerter = [...woerter];
console.log(nochmalWoerter);

let nochMehrWoerter = [...woerter, "im Deutschen auch persönliche Fürwörter genannt "];

console.log(nochMehrWoerter);

let satzzeichen = [".", "!", "?"];

let woerterMitSatzzeichen = [...nochMehrWoerter, ...satzzeichen];
console.log(woerterMitSatzzeichen);


let auto = {
    fabrikat : "Renault",
    farbe: "grün",
    alter: 12
}

let neuesAuto = {...auto, alter:0, elektroauto: true};

console.log(neuesAuto);

