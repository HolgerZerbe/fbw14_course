console.log(`20_Classes`);

// Personen - Constructor ECMA 5:

function Person_ES5(name, age) {
    this.name = name;
    this.age = age;
}

Person_ES5.prototype.aging = function () {
    this.age++;
}

let max = new Person_ES5(`Max`, 30);



// Vererbung ECMA-Script 5:

function Athlet_ES5(name, age, sport) {
    Person_ES5.call(this, name, age);
    this.sport = sport;
}

Athlet_ES5.prototype.run = function () {

}

let boris = new Athlet_ES5(`Boris`, 50, `Tennis`);




// Person ECMA - Script 6:

class Person_ES6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    aging() {
        this.age++;
    }
}

let sarah = new Person_ES6(`Sarah`, 32);


// Vererbung ECMA-Script 6:

class Athlet_ES6 extends Person_ES6 {
    constructor(name, age, sport) {
        super(name, age); // ruft parent contructor auf
        this.sport = sport;
    }

    run() {}
}

let jordan = new Athlet_ES6(`Jordan`, 50, `Basketball`);

class User {
    constructor(name, username, loggedIn) {
        this.name = name;
        this.username = username;
        this.loggedIn = loggedIn;
    }
    loggedOut() {
        if (this.loggedIn === true) {
            this.loggedIn = false;
        }
    }
}

let unserBobbele = new User(`Boris Beispiel`, `BobeleBeispiel`, true);
console.log(unserBobbele);

unserBobbele.loggedOut();
console.log(unserBobbele);


class Insolvent extends User {
    constructor(name, username, schulden) {
        super(name, username)
        this.schulden = schulden;
    }
}

let pleiteBobbele = new Insolvent(`Boris`, `Boris-ohne-Lilly`, 61000000);

console.log(pleiteBobbele); 