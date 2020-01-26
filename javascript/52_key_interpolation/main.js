console.log(`52_key_interpolation`);

let obj = {
    x: 1,
    name: `Jan`,
    123: 456
}

obj.x = 5;
obj.name = 10;
// key interpolation
// obj.123 = 458; // Syntax Error
obj[123] = 458; // geht wenn key eine Zahl
obj['123'] = 458;


// object iterator

for (key in obj) {
    console.log(
        `key = ${key}, value = ${obj[key]}`
    );
}


let obj2 = {
    key1: 1,
    key2: 5,
    key3: -15,
    key4: `Banane`
}

for (k in obj2) {
    console.log(obj2[k]);
}

// Aufgabe:

// Erstelle eine Funktion addKeyValue, die 3 Parameter entgegen nimmt:
// o, newKey und value. addKeyValue soll ein neues Key-Value_paar zu o
// hinzufügen mit dem Key "newkey" und dem Value "value".
// Falls das Key-Value-Pair schon existiert , dann soll addKeyValue das Original o
// zurückgeben. Falls nicht, dann wird das neue Key-Value-Pair hinzugefügt.


const addKeyValue = (o, newKey, value) => {
    for (key in o) {
        if (key === newKey) {
            return o;
        }
    }
    o[newKey] = value;
    return o;
}


console.log(addKeyValue(obj, `name`, `Peter`));
console.log(addKeyValue(obj, `name2`, `Peter`));

let array = [2,3,5,7,11,13]

for (elem in array) {
    console.log(elem)
}

for (elem of array) {
    console.log(elem)
}

for (key in obj2) {
    console.log(key)
}

// NICHT MÖGLICH, OBJEKTE NICHT ITERABLE:
// for (key of obj2) {
//     console.log(key)
// }