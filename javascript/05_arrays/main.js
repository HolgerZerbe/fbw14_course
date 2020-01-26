var name0 = `John`;
var name1 = `Mary`;
var name2 = `Bob`;
var name3 = `Peter`;
var name4 = `Julia`;

// index:       0      1     2      3       4 
var namen = [`John`, `Mary`, `Bob`, `Peter`, `Julia`];
console.log(namen);
console.log(namen[0]);
console.log(namen[2]);

var mixed = [`Matthias`, 45, false];

// Aufgabe:

// Erstelle ein Array über dich selber! 5 Informationen.
// Name, Alter, Wohnort, Gewicht, schwanger?
var holger = [`Holger`, 50, `Berlin`, `zu hoch`, false];
console.log(holger);

var fruechte = [];
console.log(fruechte);

fruechte.push(`Apfel`); // .push() fügt ein neues Element am Ende des Arrays ein
console.log(fruechte);

fruechte.push(`Banane`);
console.log(fruechte);

fruechte.push(`Melone`);
fruechte.push(`Kiwi`);
console.log(fruechte);


fruechte.unshift(`Ananas`); // .unshift fügt ein neues Element am Anfang des Arrays ein
console.log(fruechte);

fruechte.pop(); // .pop() entfernt das letzte Element des Arrays
console.log(fruechte);

fruechte.shift(); // .shift() entfernt das erste Element am Anfang des Arrays
console.log(fruechte);

// Aufgabe:

// Erstelle ein Array numbers, dass die Zahlen 5 bis 10 beinhaltet.
// a) ändere den Wert des Elements mit dem index 1 = 7
// b) Füge ein neues Element an das Ende des Arrays mit dem Wert 11
// c) Füge ein neues Element an den Anfang des Arrays mit dem Wert -1



var numbers = [5, 6, 7, 8, 9, 10];
numbers[1] = 7,
numbers.push(11);
numbers.unshift(-1);
console.log(numbers);


// Aufgabe:

// Schreibe eine Funktion ShiftPop() die einen Parameter a entgegennimmt.
// a soll ein Array sein.
// Die Funktion entfernt das erste und das letzte Element von a 
// und gibt das resultierende Array zurück.

function ShiftPop(a) {
    a.shift();
    a.pop();
    return a;
}

var result = ShiftPop([5, 6, 7, 8, 9, 10]);
console.log(result);



function printFirst(a) {
    console.log(a[0]);
}

printFirst([11, 12, 13]);



function printSecond(a) {
    console.log(a[1]);
}

printSecond([11, 12, 13]);


// length - Attribut


var autos = [`audi`, `bmw`, `Peugoet`, `Renault`, `Maserati`];

console.log(`das Array autos hat ${autos.length} Elemente`);

autos.push(`Porsche`);
autos.push(`Mercedes`);
console.log(`das Array autos hat ${autos.length} Elemente`);

autos.shift();
autos.shift();
autos.shift();
console.log(`das Array autos hat ${autos.length} Elemente`);


// splice - Attribut : index-basiertes Herausschneiden

var f = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];
console.log(f);

f.splice(3,2);
console.log(f);

// Aufgabe:

// Gegeben sei folgendes Array n:
// [2,3,5,7,11,13,17,19,23]
// Entferne das erste Element mit splice
// Entferne das letzte Element mit splice
// Entferne nun das 4. und  Element mit splice.


n = [2,3,5,7,11,13,17,19,23];

console.log(n)

n.splice(0,1);
n.splice(n.length-1, 1); // array.length -1 ist immer das letzte Element
n.splice(3,2);


console.log(n);

// Splice zum Adden von Elementen:

var list = [`foo`, `bar`];
list.splice(1,0, `baz`, `qux`); // ab index 1 werden null Elemente gelöscht und die folgenden Elemente zugefügt.
console.log(list);

// split - erzeugt Arrays aus Strings

var gemuese = `Spinat;Gurke;Zucchini;Lauch;Zwiebel`;
var einzelGemuese = gemuese.split(`;`);
console.log(einzelGemuese);


// join - erzeut einen String aus Arrays

var cityArray = [`berlin`, `hamburg`, `münchen`, `frankfurt`, `koeln`];
var cityString = cityArray.join(` `);
console.log(cityString);    

// delete - elemente löschen, ohne splice - löscht Elemente ohne die Index-Nummer zu ändern.

var countryArray = [`Germany`, `Austria`, `Switzerland`, `Lichtenstein`]; 
delete countryArray[1];
console.log(countryArray);


// concat - mergen von Arrays

var array1 = [1,3,5];
var array2 = [2,4,6];

var array3 = array1.concat(array2);
console.log(array3);


// Aufgabe:

// Gegeben seien die beiden folgenden Strings:
// str1 = `abcdefghijklmnopqrstuvwxyz`;
// str2 = `0-9-8-7-6-5-4-3-2-1`

// a) konvertiere str1 und str2 in jeweils einen Array
// b) Erzeuge ein Array numbersLetters das aus den beiden Arrays 
//     aus a) erzeugt wird.
// c) Erzeuge einene String finalString aus dem Array aus b)

var str1 = `abcdefghijklmnopqrstuvwxyz`;
var str2 = `0-9-8-7-6-5-4-3-2-1`;
var str1Array = str1.split(``);
var str2Array = str2.split(`-`);

console.log(str1Array);
console.log(str2Array);

var numbersLetters = str1Array.concat(str2Array);
console.log(numbersLetters);

var finalString = numbersLetters.join(` `);
console.log(finalString);


// Exkurs: Strings nach numbers konvertieren

var numberStr1 = `1`;
var number1 = parseInt(numberStr1);
var number2 = number1 + 17;
console.log(number2);

numbersLetters[27] = parseInt(numbersLetters[27]);

// Exkurs: Numbers nach Strings konvertieren

var numberToConvert = 17452;
var convertedStr = numberToConvert.toString();
console.log(convertedStr);


var k = 5;
k=k+1;
k++;
k +=1;

var j = 10;
j = j*20;
j*=20;

var firstArray = ["mein", "Name", "ist", "John", "Doe", "und", "mein", "Gehirn", "ist", "leer"];
var secondArray = firstArray.slice(3) // erstellt eine Kopie ab Index 3
var thirdArray = firstArray.slice(3,5); // erstellt eine Kopie, Kopie fängt mit Index 3 an und hört vor Index 5 auf!!!

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);
console.log(firstArray);


// nested Arrays

var nestedArray = [1,2,[`a`, `B`, `c`], 3 ,4];

nestedArray[2][1]= `b`;
console.log(nestedArray);

var nestedArray2 = [[1,2,3],[4,5,6],[7,8,9]];

// Aufgabe
// Index von: 6? 8? 1? [7,8,9]?


console.log(nestedArray2[1][2]);
console.log(nestedArray2[0][0]);
console.log(nestedArray2[2]);

var testArray14 = [`Bitte`, `nicht`, `löschen!`];
delete testArray14[1];
console.log(testArray14);
console.log(testArray14[1]);
