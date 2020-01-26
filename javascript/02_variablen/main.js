console.log('Hallo Welt');

var hw ='Hallo Welt aus einer Variablen';
console.log(hw);

var myName = 'Holger';

console.log(myName);

var zwei = 2;

console.log(zwei);

var zweiAlsString = "2";

console.log(zweiAlsString);

var vier= 2+2;

console.log(vier);
console.log("Var vier ist: "+vier);

vier = zwei + 2;

console.log(vier);

var name= "Jan";
var job = "lehrer";
var alter = "33";


// bei backticks mit ${VariablenName}
console.log(`Ich bin ${name}. ich arbeite als ${job} und bin ${alter} jahre alt.`);


// bei Gänsefüßchen mit String-Konkatenierung
console.log('Ich bin ' + name + '. Ich arbeite als ' + job + ' und bin ' + alter + ' Jahre alt');

var jetzt = 2019;

var geburtsJahr = jetzt - 50;

console.log ('Mein Geburtsjahr ist: ' + geburtsJahr);

var alterMax = 30; 
var alterSteffi = alterMax;

var neuesAlterMax = alterMax - 5;

// Aufgabe:
//
// Gib das Alter - 5 Jahre von Steffi und Max auf der Console aus. In einem Text wie folgt aus:

console.log('Max ist '+ neuesAlterMax + ' Jahre alt \nSteffi ist '+ (alterSteffi -5) + ' Jahre alt.');

var doppeltesAlterMax = alterMax * 2;
console.log(`Doppeltes Alter von Max ist ${doppeltesAlterMax}`);

console.log(`10 - 490 = ${10-490}`);

console.log(`2,5 * 7 = ${2.5 * 7}`);

console.log(`(2+7) * 10 = ${(2+7) *10}`);

var heuteRegnetEs = false;
var heuteSchneitEs = false;
var heuteScheintDieSonne = true;

console.log(`Heute regnet es: ${heuteRegnetEs}. 
Heute schneit es: ${heuteSchneitEs}. 
Heute scheint die Sonne: ${heuteScheintDieSonne}.`);


// camelcase vs lowdash:

var windowSizeWidth = 450; // camel case
var window_size_width = 450; // lowdash

// Aufgabe 2:

// Stelle dir einen Baum vor. Überlege Dir 5 Variablen zu dem Baum. Verwende diese 5 Variablen in einem Text den du über den Baum schreibst.

var baumStamm = 1;
var baumKrone = baumStamm;
var baumAeste ='Dutzende';
var baumBlaetter = 1000;
var baumWurzeln = "alle";
var baumTod = true;

var baumText = `Ein Baum hat ${baumStamm} Stamm und ${baumKrone} Krone.
Er hat ${baumAeste} Äste und mindestens ${baumBlaetter} Blätter.
Wenn ${baumWurzeln} Wurzeln gekappt werden, dann stirbt der Baum.
Dies ist ${baumTod}.`

console.log(baumText);

var variableName1 = 173;
var variableName2 = "Berlin"
;
console.log(`Der Wert von variableName1 ist = ${variableName1}`);

console.log("Der Wert von variableName2 ist = " + variableName2);


 


