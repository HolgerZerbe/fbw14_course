var alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var alphabetLaenge = alphabet.length;
console.log(alphabetLaenge);

var str = `Please locate where "locate" occurs`;
var pos = str.indexOf(`locate`); // zeigt die erste Index-Nummer an 
console.log(pos);

var lastpos = str.lastIndexOf(`locate`); // zeigt die letze Index-Nummer an 
console.log(lastpos);

var exactPos = str.indexOf(`locate`, 15);
console.log(exactPos);

var michasPos = str.indexOf(`locate`, pos + 1);
console.log(michasPos);

var search = str.search(`locate`); // .search = .indexOf  === zeigt Index-Nummer an
console.log(search);

var str = `Apple, Banana, Kiwi`;
var res = str.slice(7, 13); // Index-basiertes Kopieren
console.log(res);
console.log(str);

var negativeRes = str.slice(-12, -6); // Index-basiertes Kopieren von hinten gezählt 
console.log(negativeRes);

var nurEineZahl = str.slice(7);
console.log(nurEineZahl); // Banana, Kiwi

var negativeRes = str.slice(-1); // Index-basiertes Kopieren von hinten gezählt 
// i

var substring = str.substr(7, 6); // Schneidet heraus ab Index Nummer und zwar die Länge von
console.log(substring);

var negativeRes2 = str.substr(-7, 6); // Position darf negativ sein aber logischer weise nicht die Länge
console.log(negativeRes2);

// Gemeinsam von slice und substr:
// Keine ändert den String an sich.

// Unterschied zwischen slice und substr?
// 2. Parameter bei substr ist die Länge  des Strings
// 2. Parameter bee slice ist 2. Position

var neu = `Please visit W3Schools`;
console.log(neu);
var n = neu.replace(`W3Schools`, `Mozilla`);
console.log(n);

var text1 = `hello World`;
var text2 = text1.toUpperCase();
var text3 = text2.toLowerCase();

console.log(text1);
console.log(text2);
console.log(text3);


var hello = `hello`;
var world = `world`;

var textA = `hello` + ` ` + `world`;
console.log(textA);

var textB = `hello`.concat(` `, `world`);
console.log(textB);

var textC = hello + ` ` + world;
console.log(textC);

var textD = hello.concat(` `, world);
console.log(textD);

var char = hello.charAt(0);
console.log(char);

text1 = text1.replace(text1.charAt(0), text1.charAt(0).toUpperCase());

console.log(text1);


var kleineBuchstaben = `a,b,c,d,e`;
console.log(kleineBuchstaben);

var ausgabe = kleineBuchstaben.split(`,`);
console.log(ausgabe);

var ausgabe2 = kleineBuchstaben.split(`,`, 3);
console.log(ausgabe2);

var txt = 'hello';
var last = txt.split(``);
console.log(last);



var emailString = "Max.Mustermann@Musterwelt.de";
var stringLaenge = emailString.length;

console.log(stringLaenge);

var emailString = "Max.Mustermann@Musterwelt.de";
var strFirstIndex = emailString.indexOf("Muster");
console.log(strFirstIndex);

var emailString = "Max.Mustermann@Musterwelt.de";
var strAbIndex = emailString.indexOf("Muster", 10);
console.log(strAbIndex);


var emailString = "Max.Mustermann@Musterwelt.de";
var strLastIndex = emailString.lastIndexOf("Muster");
console.log(strLastIndex);


var emailString = "Max.Mustermann@Musterwelt.de";
var strSearch = emailString.search("Muster");
console.log(strSearch);

var caseSensitiveString = "Pfarrer BrAuN hat eine braune Aktentasche";
var strSearchCaseSensitive = caseSensitiveString.search(/braun/i);
console.log(strSearchCaseSensitive)

var emailString = "Max.Mustermann@Musterwelt.de";
var zeichenAtVierzehn = emailString.charAt(14);
console.log(zeichenAtVierzehn);

var emailString = "Max.Mustermann@Musterwelt.de";
var sliceStringEINParaNEG = emailString.slice(-3);
console.log(sliceStringEINParaNEG);

var emailString = "Max.Mustermann@Musterwelt.de";
var sliceStringZWEIParaNEG = emailString.slice(-13, -3);
console.log(sliceStringZWEIParaNEG);


var emailString = "Max.Mustermann@Musterwelt.de";
var substringStringEINPara = emailString.substr(4);
console.log(substringStringEINPara);

var emailString = "Max.Mustermann@Musterwelt.de";
var substringStringZWEIPara = emailString.substr(4, 10);
console.log(substringStringZWEIPara);


var wrongText = "Meine Lieglingsfarbe ist braun, deshalb sind alle meine Kleider braun";
var totallyReplacedText = wrongText.replace(/braun/g, "gelb");
console.log(totallyReplacedText);

var kleineZeichen = "abcde";
var inGrossUmgewandelt = kleineZeichen.toUpperCase();

console.log(inGrossUmgewandelt);

var grosseZeichen = "VWXYZ";
var inKleinUmgewandelt = grosseZeichen.toLowerCase();

console.log(inKleinUmgewandelt);

var stringEins = "Guten";
var stringZwei = "Morgen";
var concatedString = stringEins.concat(stringZwei);

console.log(concatedString);

var stringEins = "Guten";
var stringZwei = "Morgen";
var concatedStringVieleParam = stringEins.concat(" ", stringZwei, " meine Herrschaften.");

console.log(concatedStringVieleParam);


var string_1Var = "Dass Jens "
var numberVar = 8;
var string_2Var = " Paar Schuhe hat, ist ";
var booleanVar = true;
var neuerString = string_1Var + numberVar + string_2Var + booleanVar;

console.log(neuerString);

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetAlsArray = alphabet.split("");

console.log(alphabetAlsArray);



var aBisKMitKomma = "a,b,c,d,e,f,g,h,i,j,k";
var aBisKAlsArray = aBisKMitKomma.split(",");

console.log(aBisKAlsArray);


var aBisKMitKomma = "a,b,c,d,e,f,g,h,i,j,k";
var aBisKAlsArrayGekürzt = aBisKMitKomma.split(",", 5);

console.log(aBisKAlsArrayGekürzt);

