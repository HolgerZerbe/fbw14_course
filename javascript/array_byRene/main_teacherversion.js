const numbers = [102, , 1.5, 1, 2, 3, 22, 77, 4, 5, 6, 7];

const prices1 = [10, 20, 30, 40, 40, 60];

const prices2 = [70, 80, 90, 100];

const names = ["Rene", "Tom", "Claire", "Ralph", "Ben"];

//.map()
//array.map(function(currentValue, index, arr), thisValue)

let num = numbers.map((data, index) => {
  return data * 2;
});
console.log(num);

//.forEach()
//array.forEach(function(currentValue, index, arr), thisValue)

let newArray = [];
numbers.forEach((data, index) => {
  return (newArray[index] = data * 2);
});
console.log(newArray);

//.reduce()
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let reduceArray = numbers.reduce((data, current) => data + current);
console.log(reduceArray);

//.filter()
//array.filter(function(currentValue, index, arr), thisValue)

const colors = ["Red", "Green", "Blue", "Yellow", "Red", "Green Red"];

const string = "Blau";
console.log(string.indexOf("Blau"));

let newcolor = colors.filter(value => {
  if (value !== "Red") {
    return value;
  }
});
console.log(newcolor);

let newcolor2 = colors.filter(value => {
  console.log(value);
  console.log(value.indexOf("Red"));
  return value.indexOf("Red") < 0;
});
console.log(newcolor2);

//.reverse()
//array.reverse()

let arrayReverse = colors.reverse();
console.log(colors);

//.concat()
//array1.concat(array2, array3, ..., arrayX)

let concat = prices1.concat(prices2, newcolor2);
console.log(concat);

//.join()
//array.join(separator)

let join = concat.join(" and ");
console.log(join);

//.push()
//array.push(item1, item2, ..., itemX)

names.push("Matthias");
console.log(names);

//.pop()
//array.pop()

names.pop();
console.log(names);

//.slice()
//array.slice(start, end)

let slicedNames = names.slice(0, 2);
console.log(slicedNames);

//.splice()
//array.splice(index, howmany, item1, ....., itemX)

let splicedNames = names.splice(2, 1, "ATest", "Btest");
console.log(splicedNames);
console.log(names);

//.sort()
//array.sort(compareFunction)

//Expand Prototype
Array.prototype.sortNumbers = function() {
  let sortByNumber = (zahl1, zahl2) => {
    return zahl1 - zahl2;
  };
  return this.sort(sortByNumber)
};

const zahlen = [1, 2, 3, 4, 5, 102, 6, 7, 8, 9, 10];
zahlen.sortNumbers();

console.log(zahlen);

zahlen.sort(function(a, b) {
    return Math.abs(a % 2) - Math.abs(b % 2) || a - b;
});
console.log(zahlen)

const cars = [
  {
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

let newCars = cars.map((data, index) => {
    return {...data, discountPrice: data.price * 500}
})

cars.forEach((data, index) => {
    cars[index].price = data.price
})
console.log(cars)

let sumPrice = cars.reduce((data, current) => {
    console.log(data.price)
    console.log(current.price)
    return {price: data.price + current.price}
})
console.log(cars)
console.log(sumPrice);