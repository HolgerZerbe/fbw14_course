console.log(`54_destructuring`);

// Destructuring: Wir extrahieren Values aus Arrays oder Pbjekten

let array = [1, 2, 3];

// let a = array[0];
// let b = array[1];
// console.log(a, b);


let [a, , b] = array;
console.log(a, b);


let obj = {
    p: 10,
    q: 20
}

// Die Variablen-Namen müssen gleich den keys sein
let {
    p,
    q
} = obj;
console.log(p, q);


// Aufgabe: 

// gegeben sei das folgende Objekt:

let user = {
    email: `gonzo@gmail.com`,
    id: 102,
    adresses: [{
            street: `Mainstreet 1`,
            postal: 12345,
            city: `Berlin`
        },
        {
            street: `Heavenway 5`,
            postal: 23456,
            city: `Hamburg`
        }
    ],
    phone: `49-12345678`
};

// Analysiere das Objekt
// Speichere die Straße der ersten Adresse in einer Variablen namens "street".
// Versuche, dabei NUR Destructuring zu verwenden

// let {street} = user.adresses[0];

// let street = user.adresses[0].street;

let [{
    street
}] = user.adresses;

console.log(street);

let arrayMitWoertern = [`Ich`, `will`, `auf`, `keinen`, `Fall`, `Javascript`, `lernen`];

let [, , , , , progammiersprache] = arrayMitWoertern;
console.log(progammiersprache);


let [wort1, wort2, , , , wort6, wort7] = arrayMitWoertern;
console.log(wort1, wort2, wort6, wort7);


let objektMitWorten = {
    satzSubjekt: "Ich",
    satzPraedikat: "lernte",
    satzObjekt: " HTML und CSS"
}

let {
    satzObjekt
} = objektMitWorten;
console.log(satzObjekt);



let string1 = "Hallo, ich bin Hans";

const blabla1 = (parameter) => {

    string1 += parameter;
    console.log(string1);
}

blabla1(` und wohne in Neukölln`);

let string2 = "Hallo, ich bin Holger";

const blabla2 = (parameter) => {

    if (parameter !== undefined) {
        string2 += parameter;
    }
    console.log(string2);
}
blabla2();

blabla2(` und wohne auch in Neukölln`);