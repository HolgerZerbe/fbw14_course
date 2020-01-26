console.log(`31_JSON`);

// Wir möchten das Objekt verschicken an ein anderes System


let obj1 = {
    name: `Klaus`,
    age: 40,
    city: `Berlin`,
    street: `Friedrichstr.`,
    number:`10b`
}


// Wir müssen erst das Objekt in einen String konvertieren
// Das machen wir mit JSON.stringify()

// "stringifizieren"
let obj1JSON = JSON.stringify(obj1);

console.log(obj1JSON + " ist ein " + (typeof obj1JSON));


let obj1Obj = JSON.parse(obj1JSON);

console.log(obj1Obj);


let obj2JSON = `{"name" : "Sarah", "city":"Berlin","age":33}`;
// parse = aus einem String etwas generieren,
// z.B: Javascript oder HTML
let obj2 = JSON.parse(obj2JSON);
console.log(obj2);


let obj3 = [1,2,"3","abc",10,"Hallo World"];
let obj3JSON = JSON.stringify(obj3);

console.log(obj3JSON);

console.log(typeof obj3JSON);


// Aufgabe:

// Gegeben sei folgendes Objekt:

const fruits = [
    {name: `apple`, color: `green`},
    {name: `mango`, color: `yellow`},
    {name: `apple`, color: `red`}
];

// 1. Füge dem Array eine Frucht hinzu und 
//    konvertiere es nach JSON.
// 2. Konvertiere es wieder zurück in ein Objekt.

fruits.push({name: `kiwi`, color: `green`});
console.log(fruits);


let fruitsJSON = JSON.stringify(fruits);
console.log(fruitsJSON);


let fruitsObj = JSON.parse(fruitsJSON);
console.log(fruitsObj);