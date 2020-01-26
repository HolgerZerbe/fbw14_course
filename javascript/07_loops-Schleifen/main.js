for (var i = 0; i < 10; i++) {
    console.log(`Das ist der ${i+1}. Ausdruck bei Index i = ${i}`);
}

var names = [`Patrick`, `Micha`, `Almas`, `Holger`];


for (var i = 0; i < names.length; i++) {
    console.log(i + `: ` + names[i]);
}

var apple1 = {
    color: `red`,
    size: `big`
}
var apple2 = {
    color: `green`,
    size: `small`
}
var apple3 = {
    color: `yellow`,
    size: `medium`
}

var apple = [apple1, apple2, apple3];

for (var i = 0; i < apple.length; i++) {
    console.log(`Die Größe des ${i+1}. Apfel ist ${apple[i].size}.`);
}

// Aufgabe

// Schreibe eine Funktion numArray 
// bekommt zwei Parameter
// 1) a und b sind Nummern wie z.B. 1 und 10 oder 5 und 20
// Die Funktion soll false zurückgeben wenn a > b oder a < 0 oder b < 0.
// Andernfalls soll ein Array zurückgeliefert werden, das alle Zahlen von 
// a bis b enthält einschl. a und b  


function numArray(a, b) {
    if (a > b || a < 0 || b < 0) {
        return false;
    } else {
        var numArrayErgebnis = [];
        for (i = a; i <= b; i++) {
            numArrayErgebnis.push(i);
        }
        return numArrayErgebnis
    }
}

console.log(numArray(2, 8));
console.log(numArray(9, 1));
console.log(numArray(0, 8));
console.log(numArray(-1, 45));
console.log(numArray(-80, -8));
console.log(numArray(2, 0));
console.log(numArray("3", 8));
console.log(numArray(2));


var sternchen = [];
for (var i = 0; i < 7; i++) {
    sternchen.push(`*`);
    console.log(sternchen.join(``));

}
for (var i = 0; i <= 6; i++) {
    var stars = ``;
    for (var j = 0; j <= i; j++) {
        stars += `*`;
    }
    console.log(stars);
}

var numbers = [3, 6, 10, 3, 6, 10];
console.log(`numbers hat die Länge von ${numbers.length}`);

numbers.push(130);
numbers.push(-1);
console.log(`numbers hat die Länge von ${numbers.length}`);


for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log(`---------------------------------`)


for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// WHILE Schleifen

var i = 0;

while (i < 20) {
    if (i !== 12) {
        console.log(`i ist kleiner als 20 weil i ist ` + i);
    }
    i++;
}


// DO WHILE SCHLEIFEN


var i = 0;

do {
    if (i !== 12) {
        console.log(`i ist kleiner als 20 weil i ist ` + i);
    }
    i++;
} while (i < 20);


var numbers = [3, 6, 9, 12, 15, -1]

var i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

var z2 = 0;

do {
    console.log(numbers[z2]);
    z2++;
} while (z2 < numbers.length);


do {
    var caseFound = false;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1]) {
            caseFound = true;
            var smallerNumber = numbers[i + 1];
            numbers[i + 1] = numbers[i];
            numbers[i] = smallerNumber;
        }
        console.log(numbers)
    }
} while (caseFound)







function tannenbaum(lines) {

    for (var i = 0; i < lines; i++) {
        var starOutput = "";
        for (var j = lines; j > i; j--) {
            starOutput += " ";
        };
        for (var k = 0; k <= i; k++) {
            starOutput += " *";
        };
        console.log(starOutput);
    };
}

tannenbaum(10);



for (var i = 0; i < 10; i++) {
    console.log(`Der Schleifenzähler hat den Wert = ` + i);
    if (i === 3) {
        break;
    };
}

for (j = 0; j < 4; j++) {
    if (j === 2) {
        continue;
    }
    console.log('Der Schleifenzähler j hat den Wert = ' + j);
}






var j = 0;

while (j < 3) {
    console.log(`Das ist der ${j+1}. Ausdruck bei Index j = ${j}`);
    j++;
}


var k = 0;

do {
    console.log(`Das ist der ${k+1}. Ausdruck bei Index k = ${k}`);
    k++;
} while (k > 100)