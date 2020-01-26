const years = [1990, 1965, 1982, 1937];

// EcmaScript 5
let ages5 = years.map(function (el) {
  //return `I am replacement of ` + el;
  return 2019 - el;
})

console.log(ages5);


// EcmaScript6 .map() mit Arrow Function
let ages6 = years.map(el => 2019 - el);
console.log(ages6);


// Drei Parameter, imperative, obwohl der Index nicht gebraucht wird
// muss man den angeben, damit man ans Array kommt
let ages6c = years.map((el, index, array) => {
  return `array: ` + array + `, age: ` + (2018 - el);
})
console.log(ages6c);


// EcmaScript6 Normale Arrow Function (runde Klammern um die Argumente)
const myFunction = (x, y) => {
  // Beliebig viel Code
  return x * y;
}

console.log(myFunction(256, 98644));

// Gegeben ist folgendes Array [3, 5, 67, 12, 34, 4, 9, 30]
// Filter die ungeraden Zahlen in ein neues Array und multipliziert nur
// für ungeraden mit 2


const alleZahlen = [3, 5, 67, 12, 34, 4, 9, 30];

// let ungerade = alleZahlen.filter(function (value) {
//     if ((value % 2)) {
//         return value
//     };
// })

let ungerade = alleZahlen.filter((value) => value % 2);
let multipliziert = ungerade.map((value) => value * 2);


console.log(ungerade);
console.log(multipliziert);

// Wenn es keine Argumente gibt, sollten die Klammern leer, aber da sein!!!

let sayHi = () => {
  console.log(`Sag Hallo`)
};
sayHi();


const people = ['Beck, Glenn', 'Becker, Carl', 'Zerbe, Holger,', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
  'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
  'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
  'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
  'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
  'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
  'Blair, Tony', 'Blake, William'
];


let splittedPeople = people.map((value) => value.split(`, `))
splittedPeople = splittedPeople.map((value) => value.push(value[0]))
//   let lastname = splittedPeople.map((value) => value[0]);


console.log(splittedPeople);
//   console.log(lastname);
//   console.log(umgekehrterName);

const dreieckstest = (alpha, beta, gamma) => {
  if (alpha + beta + gamma === 180) {
    return `Das ist ein Dreieck`;
  } else {
    return `Sorry, kein Dreieck`;
  }
}

console.log(dreieckstest(90, 30, 60));

const hallosagen = () => {
  console.log(`ich sage hallo`);
}

hallosagen();

let pins = ["0687", 7645, "3g99", 465, 7523];

const pintest = pins.map((einzelnePIN, index, array) => {
  if (einzelnePIN != parseInt(einzelnePIN) || JSON.stringify(einzelnePIN).length !== 4) {
    return `PIN nicht gültig!`
  } else
    return `Diese Pin ist gültig!`
})

console.log(pintest);


let lichtAn = [`yes`, `Licht ist an`, `switched on`, `ja`, true, `on`];

const lichtTrue = lichtAn.map(wert => true);

console.log(lichtTrue);