console.log(`hello from main3.js`);

//Finde die gemeinsamen Elemente von arrayA und arrayB
const arrayA = ["a", "b", "c", "d", "e"];
const arrayB = ["f", "g", "c", "i", "e"];
let comparedItems = [];

const arrayCompare = (ersterArray, zweiterArray) => {

    for (let elem1 of ersterArray) {
        for (let elem2 of zweiterArray) {
            if (elem1 === elem2) {
                comparedItems.push(elem1)
            }
        }
    }
}

arrayCompare(arrayA, arrayB);
console.log(comparedItems)

//Wie alt ist jede einzelne Person?
//Sortiert das Array nach Alter
//Bonus: Wer hat als nächstes Geburtstag

// console.log(new Date().getTime())

const people = [{
        name: "Rene",
        dateOfBirth: "02/13/1986"
    },
    {
        name: "Hans-Heinrich",
        dateOfBirth: "07/26/1974"
    },
    {
        name: "Holger",
        dateOfBirth: "02/24/1969"
    },
    {
        name: "Patrick",
        dateOfBirth: "02/25/1980"
    },
    {
        name: "Zohir",
        dateOfBirth: "01/01/1989"
    },
    {
        name: "Almas",
        dateOfBirth: "07/17/1954"
    },
    {
        name: "Björn",
        dateOfBirth: "07/03/1982"
    } //,
    // {
    //     name: "Sylvester",
    //     dateOfBirth: "12/31/1982"
    // }
]
stillHaveBirthDayArray = [];
const comparingAge = (array) => {
    for (elem of array) {
        let birthdayYear = elem.dateOfBirth.substring(6, 10);
        let birthdayMonth = elem.dateOfBirth.substring(0, 2);
        let birthdayDay = elem.dateOfBirth.substring(3, 5);
        elem.birthdayMonthDay = birthdayMonth + birthdayDay;

        let otherBirthdayFormat = birthdayYear + birthdayMonth + birthdayDay;
        // console.log(otherBirthdayFormat);
        elem.otherBirthdayFormat = parseInt(otherBirthdayFormat);
        let currentDate = new Date;
        let currentYear = (currentDate.getFullYear());
        let currentMonth = (currentDate.getMonth()) + 1;
        let currentDay = (currentDate.getDay());
        // console.log (currentYear, currentMonth, currentDay)

        let currentAge = currentYear - parseFloat(birthdayYear);
        if (parseFloat(birthdayMonth) >= currentMonth && parseFloat(birthdayDay) > currentDay) {
            currentAge--;
            stillHaveBirthDayArray.push(elem)
        }
        elem.currentAge = currentAge;
    }
    if (stillHaveBirthDayArray.length === 0) {
        // stillHaveBirthDayArray=people.map(value =>value);
        stillHaveBirthDayArray = people;
    }
}

const sortAge = (age1, age2) => {
    return (age1.otherBirthdayFormat) - (age2.otherBirthdayFormat);
}

const sortBirthdaysToCome = (birthday1, birthday2) => {
    return (birthday1.birthdayMonthDay - birthday2.birthdayMonthDay)
}

comparingAge(people);
people.sort(sortAge);
stillHaveBirthDayArray.sort(sortBirthdaysToCome);

console.table(people);
console.log(stillHaveBirthDayArray);
console.log(`Als nächster hat Geburtstag: ` + stillHaveBirthDayArray[0].name);



const cylinders = [{
        id: 9,
        height: 50,
        radius: 10
    },
    {
        id: 2,
        height: 50,
        radius: 20
    },
    {
        id: 3,
        height: 55,
        radius: 35
    },
    {
        id: 4,
        height: 25,
        radius: 35
    },
    {
        id: 5,
        height: 23,
        radius: 25
    }
];
//Write a function that:
//1. Calculates the cylinder volume
//2. Removes all cylinders who are above 50.000 cm3 in volume
//3. Sort all cylinders by volume





// const calculateVolume = (array) => {
//     for (elem of array) {
//         elem.volume = (elem.height * elem.radius * elem.radius * Math.PI);
//     }
// }

// (calculateVolume(cylinders));

cylinders.forEach((value)=>{
    value.volume=Math.PI*value.height*Math.pow(value.radius,2);
})

let newCylinders = cylinders.filter(value => value.volume <=50000);

const sortSize = (size1, size2) => {
    return size1.volume - size2.volume;
}

cylinders.sort();

console.table(cylinders);
console.table(newCylinders.sort(sortSize));