let person1 = {
    name: `John Doe`,
    hobbies: [`Golf`, `Tennis`, `Coding`]
};

let person2 = {
    name: `Jake Dack`,
    hobbies: [`Motorsport`, `Coding`, `Kochen`, `Sex`]
};

function hobbyvergleich(teilnehmer1, teilnehmer2) {

    if (teilnehmer1.hobbies.length > teilnehmer2.hobbies.length) {
        console.log(`${teilnehmer1.name} ist interessanter als ${teilnehmer2.name}`)
    } else {
        console.log(`${teilnehmer2.name} ist interessanter als ${teilnehmer1.name}`)
    }
}

hobbyvergleich(person1, person2);


let lehrer = {
    mathematik: "Hans von Ostheim",
    wissenschaft: "Otto Otto",
    geschichte: "Horst Marx",
    geographie: "Irene Scott",
    kandidatenauswahl: function (kandidat1, kandidat2) {
        if (kandidat1.length > kandidat2.length) {
            this.programmierung = kandidat1[0] + " " + kandidat1[1];
        } else {
            this.programmierung = kandidat2[0] + " " + kandidat2[1];

        }
    }
}

const joe = [`John`, `Doe`, `PHP`, `Ruby`];
const jane = [`Jane`, `Doe`, `Python`, `Java`, `C`];

console.log(lehrer);
lehrer.kandidatenauswahl(joe, jane);

console.log(lehrer);


const alleResultate = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];


function howManyPercentHaveFailed(inputArray, punktezahl) {
    let studentsWhoFailed = 0;

    for (let elem in inputArray) {
        if (inputArray[elem] < punktezahl) {
            studentsWhoFailed++;
        }
    }


    let failedQuote = studentsWhoFailed / inputArray.length * 100;
    console.log(`Es sind ${failedQuote} % durchgefallen, ${100-failedQuote} % haben bestanden`);
}

howManyPercentHaveFailed(alleResultate, 45);


let myArray = [1, 2, 3];
console.log(myArray);
myArray.forEach(function (value, index, array) {
    array[index] = value * 2;
})
console.log(myArray);


let myFood = [`cow`, `potatoe`, `chicken`, `hund`, `corn`];
let cookedFood = [];
myFood.map(function (value, index, array) { // Index und Array werden hier nicht benötigt
    switch (value) {
        case `cow`:
            cookedFood.push(`Hamburger`);
            break;
        case `potatoe`:
            cookedFood.push(`Pommes`);
            break;
        case `chicken`:
            cookedFood.push(`Chicken Wings`);
            break;
        case `corn`:
            cookedFood.push(`Popcorn`);
            break;
        default:
            cookedFood.push(`Ist nicht kochbar`);
    }
});

console.log(myFood, cookedFood);

let vegetarianFood = cookedFood.filter(function (value) {
    switch (value) {
        case `Pommes`:
            return value;
        case `Popcorn`:
            return value;
        default:
            break;
    }
});

console.log(vegetarianFood);


let afterEating = cookedFood.reduce(function () {
    return `shit`;
})

console.log(afterEating);





const clients = [{
        fullName: 'Student1Firstname Student1Lastname',
        courseHasTaken: 'PHP course',
        levelOfSatisfaction: 78
    },
    {
        fullName: 'Student2Firstname Student2Lastname',
        courseHasTaken: 'JS course',
        levelOfSatisfaction: 45
    },
    {
        fullName: 'Student3Firstname Student3Lastname',
        courseHasTaken: 'PHP course',
        levelOfSatisfaction: 53
    },
    {
        fullName: 'Student4Firstname Student4Lastname',
        courseHasTaken: 'Ruby course',
        levelOfSatisfaction: 99
    },
    {
        fullName: 'Student5Firstname Student5Lastname',
        courseHasTaken: 'JS course',
        levelOfSatisfaction: 11
    },
    {
        fullName: 'Student6Firstname Student6Lastname',
        courseHasTaken: 'PHP course',
        levelOfSatisfaction: 1
    },
    {
        fullName: 'Student7Firstname Student7Lastname',
        courseHasTaken: 'Ruby course',
        levelOfSatisfaction: 23
    },
    {
        fullName: 'Student8Firstname Student8Lastname',
        courseHasTaken: 'Ruby course',
        levelOfSatisfaction: 59
    },
    {
        fullName: 'Student9Firstname Student9Lastname',
        courseHasTaken: 'JS course',
        levelOfSatisfaction: 88
    },
    {
        fullName: 'Student10Firstname Student10Lastname',
        courseHasTaken: 'PHP course',
        levelOfSatisfaction: 44
    }
];



function happiness(list) {
    let phpCounter = 0;
    let phpPoints = 0;
    let jsCounter = 0;
    let jsPoints = 0;
    let rubyCounter = 0;
    let rubyPoints = 0;
    let resultsArray = [];

    for (let elem in list) {
        if (list[elem].levelOfSatisfaction > 80) {
            list[elem].stateOfHappy = `Found the course perfect`;
        } else if (list[elem].levelOfSatisfaction <= 80 && list[elem].levelOfSatisfaction > 50) {
            list[elem].stateOfHappy = `Content overall`;
        } else {
            list[elem].stateOfHappy = `Customer is complaining, potential refund is going to be asked`;
        }
        if (list[elem].courseHasTaken === 'PHP course') {
            phpPoints = phpPoints + list[elem].levelOfSatisfaction;
            phpCounter++;
        } else if (list[elem].courseHasTaken === 'JS course') {
            jsPoints = jsPoints + list[elem].levelOfSatisfaction;
            jsCounter++;

        } else {
            rubyPoints = rubyPoints + list[elem].levelOfSatisfaction;
            rubyCounter++;
        }
    }

    resultsArray.push({
        name: "PHP-Course",
        average: phpPoints / phpCounter
    });
    resultsArray.push({
        name: "JS-Course",
        average: jsPoints / jsCounter
    });
    resultsArray.push({
        name: "Ruby-Course",
        average: rubyPoints / rubyCounter
    });

    if (resultsArray[0].average > resultsArray[1].average && resultsArray[0].average > resultsArray[0].average) {
        return `${resultsArray[0].name} has the biggest average of the three courses`;
    } else if (resultsArray[2].average > resultsArray[0].average && resultsArray[2].average > resultsArray[1].average) {
        return `${resultsArray[2].name} has the biggest average of the three courses`;
    } else
        return `${resultsArray[1].name} has the biggest average of the three courses`;
}


console.log(clients);
console.log(happiness(clients));


let string = "In diesem string soll jedesmal nach einem leerzeichen ein großbuchstabe kommen!";
let newString = "";
for (let character in string) {
    if (string[character - 1] === " ") {
        newString = newString + string[character].toUpperCase();
    } else {
        newString = newString + string[character];
    }
}
console.log(newString);


let array2 = [4768, 8542, 7341, 9742, 1284, 598]
let newArray = [];
array2.forEach(element => newArray.push(element - 1000));

console.log(newArray);

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array3.forEach(function (value, index, array) {
    array[index] = value * 10;
})
console.log(array3);

let siebnerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

siebnerArray = siebnerArray.map(value => value * 7);

console.log(siebnerArray);

let statusActive = [false, true, true, false, false, true, false];

statusActive.map(function (value, index, array) {
    if (!value) {
        array[index] = true;
    }
});

console.log(statusActive);


let zahlenreihe = [7, 13, 14, 66, 21, 231, 77, 89, 2, 5];

let teilbarDurch7 = zahlenreihe.filter(value => !(value % 7));

console.log(teilbarDurch7);


let tiere = [`Katze`, `Eichhörnchen`, `Hund`, `Goldfish`, `Amsel`, `Kuh`, `Vogelspinne`];

let haustiere = tiere.filter(function (value) {
    switch (value) {
        case `Katze`:
            return value;
        case `Hund`:
            return value;
        case `Goldfish`:
            return value;
        case `Vogelspinne`:
            return value;
        default:
            break;
    }
})

console.log(haustiere);


let werte = [4, true, "Alpha", undefined];
let stimmtNicht = [];
stimmtNicht = werte.reduce(function () {
    return false
});

console.log(stimmtNicht);
console.log(typeof stimmtNicht);



let zahlenZumAddieren = [5, 9, 12, 7];
let summe = zahlenZumAddieren.reduce(function (vorherigerWert, aktuellerWert, index, array) {
        return vorherigerWert + aktuellerWert;
    });

console.log(summe);




let alleNoten = [2, 2, 1, 5, 3, 4, 2, 3, 3, 1, 3, 2];

let durchschnitt = (alleNoten.reduce(function (vor, akt) {
    return (vor + akt);
})) / alleNoten.length;

console.log(durchschnitt);