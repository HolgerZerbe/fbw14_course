console.log(`58_map_filter`);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let doubleArray2 = array.map(value => value * 2);

console.log(array);
console.log(doubleArray2);

let evenArray = [];

for (elem of array) {
    if (!(elem % 2)) {
        evenArray.push(elem);
    }
}

let evenArray2 = array.filter(value => !(value % 2));


console.log(evenArray)
//console.log(evenArray2);


const users = [{
        money: 150,
        name: `paul`,
        country: `germany`,
        born: 1995
    },
    {
        money: -50,
        name: `sarah`,
        country: `uk`,
        born: 1990
    },
    {
        money: 200,
        name: `bob`,
        country: `spain`,
        born: 1988
    },
    {
        money: 550,
        name: `hans`,
        country: `germany`,
        born: 1982
    },
    {
        money: 5,
        name: `julia`,
        country: `germany`,
        born: 1972
    },
    {
        money: 1040,
        name: `carl`,
        country: `denmark`,
        born: 1999
    },
    {
        money: -500,
        name: `peter`,
        country: `germany`,
        born: 1991
    },
    {
        money: 0,
        name: `julia`,
        country: `ireland`,
        born: 1980
    }
]

let uppercaseUsers = users.map(value => {
    return {
        money: value.money,
        name: value.name.toUpperCase(),
        country: value.country.toUpperCase(),
        born: value.born
    }
});
console.log(users);
console.log(uppercaseUsers);

let germans = users.filter(value => (value.country.toUpperCase() === "GERMANY" && value.money > 10));
console.log(germans);


const uppercaseUsers2 = [...users];

uppercaseUsers2.map((n) => {
    console.log(n);
    n.name = n.name.toUpperCase();
    n.country = n.country.toUpperCase();
    return n;
});


const uppercaseUsers3 = user.map((n) => {
    console.log(n);
    return {
        ...n,
        name = n.name.toUpperCase(),
        country = n.country.toUpperCase()
    }
});