console.log(`Aufgabe Vererbung`);

var alfred = {
    name: 'Alfred',
    count: 0,
    sayYourName: function () {
        if (this.count === undefined)
            this.count = 0;
        console.log('My name is ' + this.myName);
        this.count++;
    },
    setLastName: function (lastname) {
        this.lastname = lastname;

    }
}
var gonzo = {
    myName: 'Gonzo'
}
alfred.sayYourName.call(gonzo);

alfred.setLastName.call(gonzo, `Gonzales`);

console.log(gonzo.lastname);




var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay +
                ' Ladies and Gentlemen I am ' +
                this.name + ', I am a ' +
                this.job + ' and I am ' +
                this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey whatsup.' +
                'I am ' +
                this.name + ', I am a ' +
                this.job + ' and I am ' +
                this.age + ' years old.' +
                'Have a nice ' + timeOfDay);
        }
    }
};
john.presentation('formal', 'morning');


var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, `friendly`, `evening`);
john.presentation.apply(emily, [`friendly`, `evening`]);


// 1. Führe den Code aus und analysiere ihn. Beachte, dass call()
//    benutzt wird, um den Funktions-Konstruktor eines anderen
//    Objekts zu benutzen und dass Object.create() benutzt wird, um
//    zwei Prototyp-Ketten miteinander zu verbinden.
// 2. Erstelle ein Movie-Objekt „Casino“ von „Martin Scorsese“ und ein
//    Buch „ES“ von „Stephen King“.
// 3. Verkaufe sie beide.
// 4. Erstelle einen neuen Funktions-Konstruktor ComicBook, der Book
//    vererbt and erstelle eine neue Variable minAge die auf 6 gesetzt
//    wird, falls der Parameter minAge undefined oder kleiner als 6 ist.
// 5. Erstelle das Comic-Buch „Jessica Jones“ von „Marvel“ mit minAge
//    gleich 12.
//    Verkaufe es.

function Item(name, price) {
    this.name = name;
    this.price = price;
    this.sold = false;
}
Item.prototype.sell = function () {
    this.sold = true;
}


function Book(name, price, author) {
    Item.call(this, name, price);
    this.author = author;
    this.category = 'book';
}
Book.prototype = Object.create(Item.prototype);

function Movie(name, price, director) {
    Item.call(this, name, price);
    this.director = director;
    this.category = 'movie';
}
Movie.prototype = Object.create(Item.prototype);

let casino = new Movie(`Casino`, 19.99, `Martin Scorsese`);
let es = new Book(`Es`, 19.99, `Stephen King`);

console.log(casino, es);

casino.sell();
es.sell();

console.log(casino, es);

function ComicBook(name, price, verlag, minAge) {
    Book.call(this, name, price);
    this.verlag = verlag;
    if (minAge === undefined || minAge < 6) {
        this.minAge = 6;
    } else {
        this.minAge = minAge;
    }
}
ComicBook.prototype = Object.create(Book.prototype);

let jessicajones = new ComicBook(`Jessica Jones`, 5.99, `Marvel`, 12);

console.log(jessicajones);

jessicajones.sell();

console.log(jessicajones);

// 1. Mit Deinem Wissen aus der Aufgabe 2: Erstelle Funktions-Konstruktoren
// zu dem Animal-Diagramm und beachte dabei folgende Regeln:

//   1. Jedes Animal hat einen name wenn es erstellt wird.
//   2. Jedes Animal hat die Methoden sleep, eat und die (benutze dafür
//      Funktionen, z.B. sleep())
//   3. Mammals (Säugetiere) und birds haben die Methode breathe.
//   4. Fishes haben die Methode swim.
//   5. Birds haben die Methode fly.
//   6. Tigers und Sharks haben die Methode kill, wobei kill() einen Parameter
//      otherAnimal erwartet. kill() ruft die die() Funktion von otherAnimal auf.
// 2. Erstelle einen Tiger mit name „Vitaly“, einen Shark mit name „Nemo“
//    und ein Horse mit name „Fury“.
// 3. Nemo ist hungrig und tötet Fury und Vitaly. Dann isst Nemo.
// 4. Nemo stirbt.

function Animal(name) {
    this.name = name;

}
Animal.prototype.sleep = function () {
    console.log(this.name + ` schläft`);
};
Animal.prototype.eat = function () {
    console.log(this.name + ` isst`);
};
Animal.prototype.die = function () {
    console.log(this.name + ` ist tot!`);
}

function Mammal(name) {
    Animal.call(this, name);
}
Mammal.prototype = Object.create(Animal.prototype);

function Bird(name) {
    Animal.call(this, name);
}
Bird.prototype = Object.create(Animal.prototype);

function Fish(name) {
    Animal.call(this, name);
}
Fish.prototype = Object.create(Animal.prototype);

Mammal.prototype.breath = function () {
    console.log(this.name + ` atmet`);
}
Bird.prototype.breath = function () {
    console.log(this.name + ` atmet`);
}
Fish.prototype.swim = function () {
    console.log(this.name + ` schwimmt`);
}

function Tiger(name) {
    Mammal.call(this, name);
}
Tiger.prototype = Object.create(Mammal.prototype);

function Horse(name) {
    Mammal.call(this, name);
}
Horse.prototype = Object.create(Mammal.prototype);


function Tuna(name) {
    Fish.call(this, name);
}
Tiger.prototype = Object.create(Fish.prototype);

function Shark(name) {
    Mammal.call(this, name);
}
Shark.prototype = Object.create(Fish.prototype);


function Woodpecker(name) {
    Bird.call(this, name);
}
Woodpecker.prototype = Object.create(Bird.prototype);

function Hummingbird(name) {
    Mammal.call(this, name);
}
Hummingbird.prototype = Object.create(Bird.prototype)

Shark.prototype.kill = function (otherAnimal) {
    otherAnimal.die();
}

Tiger.prototype.kill = function (otherAnimal) {
    otherAnimal.die();
}
// 2. Erstelle einen Tiger mit name „Vitaly“, einen Shark mit name „Nemo“
//    und ein Horse mit name „Fury“.
// 3. Nemo ist hungrig und tötet Fury und Vitaly. Dann isst Nemo.
// 4. Nemo stirbt.
let vitaly = new Tiger(`Vitaly`);
let nemo = new Shark(`Nemo`);
let fury = new Horse(`Fury`);

nemo.kill(fury);
nemo.kill(vitaly);
nemo.eat();
nemo.die();

// vitaly.kill(nemo, `vitaly`);



class Animal_ES6 {
    constructor(name) {
        this.name = name;
    }
    sleep_ES6() {
        console.log(this.name + ` schläft`);
    }
    eat_ES6() {
        console.log(this.name + ` isst`);
    }
    die_ES6() {
        console.log(this.name + ` ist tot!`)
    }
}

class Mammal_ES6 extends Animal_ES6 {
    constructor(name) {
        super(name);
    }
    breath_ES6() {
        console.log(this.name + ` atmet.`)
    }
}
class Bird_ES6 extends Animal_ES6 {
    constructor(name) {
        super(name);
    }
    breath_ES6() {
        console.log(this.name + ` atmet.`)
    }
}
class Fish_ES6 extends Animal_ES6 {
    constructor(name) {
        super(name);
    }
    swim_ES6() {
        console.log(this.name + ` schwimmt.`)
    }
}

class Tiger_ES6 extends Mammal_ES6 {
    constructor(name) {
        super(name);
    }
    kill_ES6(otherAnimal) {
        otherAnimal.die_ES6()
    }
}

class Horse_ES6 extends Mammal_ES6 {
    constructor(name) {
        super(name);
    }
}

class Woodpecker_ES6 extends Bird_ES6 {
    constructor(name) {
        super(name);
    }
}

class Hummingbrid_ES6 extends Bird_ES6 {
    constructor(name) {
        super(name);
    }
}

class Shark_ES6 extends Fish_ES6 {
    constructor(name) {
        super(name);
    }
    kill_ES6(otherAnimal) {
        otherAnimal.die_ES6()
    }
}

class Tuna_ES6 extends Fish_ES6 {
    constructor(name) {
        super(name);
    }
}

// 2. Erstelle einen Tiger mit name „Vitaly“, einen Shark mit name „Nemo“
//    und ein Horse mit name „Fury“.
// 3. Nemo ist hungrig und tötet Fury und Vitaly. Dann isst Nemo.
// 4. Nemo stirbt.

let vitaly_ES6 = new Tiger_ES6(`Vitaly`);
let nemo_ES6 = new Shark_ES6(`Nemo`);
let fury_ES6 = new Horse_ES6(`Fury`);

nemo_ES6.kill_ES6(fury_ES6);
nemo_ES6.kill_ES6(vitaly_ES6);
nemo_ES6.eat_ES6();
nemo_ES6.die_ES6();
// nemo_ES6.swim_ES6()