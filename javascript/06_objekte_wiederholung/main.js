console.log(`06 Objekte Wiederholung`);

var person = {
    name: `Peter`,
    alter: 23,
    beruf: `Hartzer`,
    aendereBeruf: function (neuerBeruf) {
        this.beruf = neuerBeruf;
    },
    toString: function () {
        console.log(`${this.name}
${this.alter}
${this.beruf}`)
    }
}


console.log(person.beruf);
person.aendereBeruf(`Web Developer`);
console.log(person.beruf);
console.log(person["beruf"]);

person.toString();


var firstObject = {
    firstname: `Onur`,
    lastname: `Özadali`,
    age: 41,
    yearsOfResidence: 38,
    nationality: "turkish",
    currentProfession: "worker",
    currentSalary: 1800,
    changeNationality: function () {
        if (this.yearsOfResidence >= 7) {
            this.nationality = "german";
        }
    }
}

firstObject.changeNationality();

console.log(firstObject.nationality);

var secondObject = {
    firstname: `Onur`,
    lastname: `Özadali`,
    age: 41,
    yearsOfResidence: 30,
    nationality: "turkish",
    currentProfession: "worker",
    currentSalary: 1800,
    changeNationality: function (newNationality) {
        if (this.yearsOfResidence >= 7) {
            this.nationality = newNationality;
        }
    }
}

secondObject.changeNationality("German");

console.log(secondObject.nationality);


var personObj1 = {
    firstname: "Aristotelis",
    lastname: "Onassis",
    nationality: "Greece",
    bankaccount$: 2580473265,
    otherCurrency: function () {
        if (this.nationality === "Greece") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 0.9) / 100).toFixed(2) + " €"
        } else if (this.nationality === "Switzerland") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 1.01) / 100).toFixed(2) + " SF"
        } else if (this.nationality === "Australia") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 1.45) / 100).toFixed(2) + " Au$"
        }
    }
}


personObj1.otherCurrency();
console.log(personObj1.firstname + " " + personObj1.lastname + " kommt aus " + personObj1.nationality + " und der Kontostand in Landeswährung ist: " + personObj1.newBankaccount);



var personObj2 = {
    firstname: "Boris",
    lastname: "Becker",
    nationality: "Switzerland",
    bankaccount$: -856324,
    otherCurrency: function () {
        if (this.nationality === "Greece") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 0.9) / 100).toFixed(2) + " €"
        } else if (this.nationality === "Switzerland") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 1.01) / 100).toFixed(2) + " SF"
        } else if (this.nationality === "Australia") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 1.45) / 100).toFixed(2) + " Au$"
        }
    }
}


personObj2.otherCurrency();
console.log(personObj2.firstname + " " + personObj2.lastname + " kommt aus " + personObj2.nationality + " und der Kontostand in Landeswährung ist: " + personObj2.newBankaccount);



var personObj3 = {
    firstname: "Kylie",
    lastname: "Minogue",
    nationality: "Australia",
    bankaccount$: 45233,
    otherCurrency: function () {
        if (this.nationality === "Greece") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 0.9) / 100).toFixed(2) + " €"
        } else if (this.nationality === "Switzerland") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 1.01) / 100).toFixed(2) + " SF"
        } else if (this.nationality === "Australia") {
            this.newBankaccount = (Math.round(100 * this.bankaccount$ * 1.45) / 100).toFixed(2) + " Au$"
        }
    }
}


personObj3.otherCurrency();
console.log(personObj3.firstname + " " + personObj3.lastname + " kommt aus " + personObj3.nationality + " und der Kontostand in Landeswährung ist: " + personObj3.newBankaccount);


var Constructor = function (parameter_1, parameter_2, parameter_3) {
    this.key_1 = parameter_1;
    this.key_2 = parameter_2;
    this.key_3 = parameter_3;
}

var objektVomConstructor = new Constructor(`Wert_1`, `Wert_2`, `Wert_3`);

console.log(objektVomConstructor);



var Person = function (myFirstname, myLastname, myNationality, myBankaccount$, myChange) {
    this.firstname = myFirstname;
    this.lastname = myLastname;
    this.nationality = myNationality;
    this.bankaccount$ = myBankaccount$;
    this.change = myChange;
    this.otherCurrency = function () {
        this.newBankaccount = (Math.round(100 * this.bankaccount$ * this.change) / 100) //.toFixed(2)
        console.log(this.newBankaccount);
        console.log(this.firstname + " " + this.lastname + " kommt aus " + this.nationality + " und der Kontostand in Landeswährung ist: " + this.newBankaccount);

    }
}

var schweitzer = new Person(`Hans`, `Zimmer`, `Switzerland`, 1450, 1.01);
var grieche = new Person(`Kosta`, `Androplous`, `Greece`, 1532.89, 0.9);
var australier = new Person(`John`, `Doe`, `Australia`, 425.31, 1.45);


schweitzer.otherCurrency();

grieche.otherCurrency();

australier.otherCurrency();

for (prop in australier) { /// prop ist beliebige Bezeichnung für key-word
    console.log(prop, australier[prop]);
}



var SkillsCreator = function (firstName, lastName, htmlSkills, cssSkills, jsSkills) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = {
        html: htmlSkills,
        css: cssSkills,
        js: jsSkills
    },
    this.average = function () {
        // nachfolgend Durchschnitt ausgerechnet mit direkten Ansprechen
        // wenn wir wissen wie vom Objekt skills die keys heißen und
        // wieviel Key-Value-Pairs wir haben

        this.averageSkills_1 = (Math.round(100 * (this.skills.html + this.skills.css + this.skills.js) / 3) / 100).toFixed(2);
        console.log(`Der Durchschnitt der Skills von ${this.firstName} ${this.lastName} ausgerechnet mit Ansprechen der Key-Namen ist ${this.averageSkills_1}`);


        // nachfolgend Durchschnitt ausgerechnet mit For-Key-Schleife, 
        // wir weder die Key-Namen noch die Anzahl der Key-Value-Pairs 
        // kennen

        var helper_1 = 0;
        var helper_2 = 0;
        for (key in this.skills) {
            helper_1 = helper_1 + this.skills[key];
            helper_2++;
        }
        this.averageSkills_2 = (Math.round(100 * helper_1 / helper_2) / 100).toFixed(2);
        console.log(`Der Durchschnitt der Skills von ${this.firstName} ${this.lastName} ausgerechnet mit der For-Key-Schleife ist ${this.averageSkills_2}`);
    }
}

var johnDoe = new SkillsCreator(`John`, `Doe`, 2, 2, 4);
var janeDoe = new SkillsCreator(`Jane`, `Doe`, 1, 2, 5);
var jamesDoe = new SkillsCreator(`James`, `Doe`, 2, 2, 4);
var jenniferDoe = new SkillsCreator(`Jennifer`, `Doe`, 3, 2, 1);
var jasminDoe = new SkillsCreator(`Jasmin`, `Doe`, 2, 1, 1);


johnDoe.average();
janeDoe.average();
jamesDoe.average();
jenniferDoe.average();
jasminDoe.average();