console.log(`52_array_byRene`);

const numbers = [1, 2, 22, 3, 4, 5, 1.5, 77, 6, 7];

const prices1 = [10, 20, 30, 40, 40, 60];

const prices2 = [70, 80, 90, 100];

const colors = ["Red", "Green", "Blue", "Yellow"];

const names = ["Rene", "Tom", "Claire", "Ralph", "Ben"];

//.map()
//array.map(function(currentValue, index, arr), thisValue)

let num = numbers.map((value, index) => {
    return (2 * value)
});

console.log(num);

//.forEach()
//array.forEach(function(currentValue, index, arr), thisValue)

let newArray = [];

numbers.forEach((data, index) => {
    return newArray[index] = data * 2
})

console.log(newArray);

//.reduce()
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let reduceArray = numbers.reduce((data, current) => data + current);

console.log(reduceArray);
//.filter()
//array.filter(function(currentValue, index, arr), thisValue)

const string = "Blau";
console.log(string.indexOf("Blau"));

newcolor = []
newcolor = colors.filter(value => {
    if (value !== "Red") {
        return value
    }
});

console.log(newcolor);

newcolor2 = [];
newcolor2 = colors.filter(value => {
    return value.indexOf("Red") >= 0
});

console.log(newcolor2);

//.reverse()
//array.reverse()

let arrayReverse = colors.reverse();
console.log(arrayReverse);


//.concat()
//array1.concat(array2, array3, ..., arrayX)


let prices = prices1.concat(prices2);

console.log(prices);

//.join()
//array.join(separator)

let join = prices.join(" ");

console.log(join);

//.push()
//array.push(item1, item2, ..., itemX)

let push = names.push(`Frietjof`);
console.log(names);

//.pop()
//array.pop()

let pop = names.pop();
console.log(names);

//.slice()
//array.slice(start, end)

let sliced = names.slice(2, 3);
console.log(sliced);

console.log(names.sort());

console.log(numbers.reverse().sort());

numbers.sort((a, b) => {
    return a - b
});
console.log(numbers);


let vierzahlen = [10, 5, 7, 63];
let sortNumbers = (zahl1, zahl2) => {
    console.log(zahl1);
    console.log(zahl2);
    console.log(zahl1 - zahl2);
    return zahl1 - zahl2
}

vierzahlen.sort(sortNumbers);
console.log(vierzahlen);


let evenArray = numbers.filter(value => value % 2).sort(sortNumbers);
let oddArray = numbers.filter(value => !(value % 2)).sort(sortNumbers);
console.log(evenArray)
console.log(oddArray)

let totalArray = evenArray.concat(oddArray);
console.log(totalArray)

let totalArray2 = (numbers.filter(value => value % 2).sort(sortNumbers)).concat(numbers.filter(value => !(value % 2)).sort(sortNumbers));
console.log(totalArray2)


numbers.sort(function (a, b) {
    return Math.abs(a % 2) - Math.abs(b % 2) || a - b;
});

console.log(numbers)

let numbers2 = [1, 2, 22, 77, 3, 4, 5, 6, 7, 5.5];
let sortNumbers2 = (a, b) => {
    console.log((0 - a % 2 / 2) - (0 - b % 2 / 2));

    return Math.floor(0 - a % 2 / 2) - Math.floor(0 - b % 2 / 2);
}
numbers2.sort(sortNumbers).sort(sortNumbers2)
console.log(numbers2);


const cars = [{
        name: "Mercedes",
        color: "Grey",
        age: 2,
        price: 90000
    },
    {
        name: "Opel",
        color: "Green",
        age: 1,
        price: 40000
    },
    {
        name: "VW",
        color: "Yellow",
        age: 15,
        price: 30000
    },
    {
        name: "Audi",
        color: "Blue",
        age: 3,
        price: 60000
    },
    {
        name: "Citroen",
        color: "Pink",
        age: 11,
        price: 40000
    },
    {
        name: "Jaguar",
        color: "Orange",
        age: 5,
        price: 80000
    },
    {
        name: "Ferrari",
        color: "Red",
        age: 6,
        price: 500000
    }
];
//1. 20% Rabatt auf Fahrzeuge älter als 10 Jahre
//2. Sortieren nach Preis
//3. Pinke Fahrzeuge in Rot umlackieren
//4. Gesamtwert des Fuhrparks ermitteln


cars.map((value, index) => {
    if (value.age >= 10) {
        cars[index].price = cars[index].price * 0.8
    }
    return value
})
console.log(cars);

let sortPrice = (zahl1, zahl2) => {
    return (zahl1.price) - (zahl2.price);
}

cars.sort(sortPrice);

console.log(cars);

cars.map((value, index) => {
    if (value.color === "Pink") {
        cars[index].color = "Rot"
    }
    return value
})

console.log(cars);


let carsPrices = cars.map(value => value.price);
let totalPrice = carsPrices.reduce((data, current) => data + current);

console.log(totalPrice);