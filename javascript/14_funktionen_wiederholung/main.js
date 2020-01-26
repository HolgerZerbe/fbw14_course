function cl(p) {
    console.log(p);
}


// Benannte (benamte) Funktion:
function dummy() {
    let a = 10;
    let b = 20;
    cl(a + b);
}

dummy(); // Spätere Ausführung nur mit Namen!


// Anonyme Funktion mit sofortiger Ausführung:
(function () {
    let a = 10;
    let b = 20;
    cl(a + b);
})();


// Bitte die benamte Funktion umbauen mir Return
// Output soll gespeichert und ausgeben werden

function dummyMitReturn() {
    let a = 10;
    let b = 20;
    return (a + b);
}

let ErgebisVondummyMitReturn = dummyMitReturn();
cl(`Ergebnis von Dummy mit Return ist = ` + ErgebisVondummyMitReturn);


// Bitte die benamte Funktion umbauen mit Input-Attributen(Parametern):

function dummyMitReturnUndInput(a, b) {
    return (a + b);
}

let ErgebisVondummyMitReturnUndInput = dummyMitReturnUndInput(10, 20);
cl(`Ergebnis von Dummy mit Return und Input ist = ` + ErgebisVondummyMitReturnUndInput);


// Return Type Function:

// Schreibe eine Funktion, die ein einzelnes Argument erwartet und seinen Typ zurückgibt.
// Input: Alles
// Output: Datentyp von diesem Parameter
// Speichere das Ergebnis in einer Variablen und schreibe es auf die Console


function typeOfArgument(argument) {
    return (typeof argument);
}

let ErgebisVonTypeOfArgument1 = typeOfArgument(8);
let ErgebisVonTypeOfArgument2 = typeOfArgument(`Ich bin ein String`);
let ErgebisVonTypeOfArgument3 = typeOfArgument(true);
let ErgebisVonTypeOfArgument4 = typeOfArgument(undefined);
let ErgebisVonTypeOfArgument5 = typeOfArgument(null);
let ErgebisVonTypeOfArgument6 = typeOfArgument([1, 2, 3, 4]);
let ErgebisVonTypeOfArgument7 = typeOfArgument({
    first: 1,
    second: 2,
    third: `3`
});
let ErgebisVonTypeOfArgument8 = typeOfArgument(function () {
    let a = 4;
});
let ErgebisVonTypeOfArgument9 = typeOfArgument(cl);


cl(ErgebisVonTypeOfArgument1);
cl(ErgebisVonTypeOfArgument2);
cl(ErgebisVonTypeOfArgument3);
cl(ErgebisVonTypeOfArgument4);
cl(ErgebisVonTypeOfArgument5);
cl(ErgebisVonTypeOfArgument6);
cl(ErgebisVonTypeOfArgument7);
cl(ErgebisVonTypeOfArgument8);
cl(ErgebisVonTypeOfArgument9);

// bitte schreibt eine Funktion die einen Test auswertet
// Assign Grade
// diese akzeptiert Zahlen von 1 bis 100!



function assignGrade(points) {

    if (points < 1 || points > 100 || typeof points !== `number`) {
        return `falsche Eingabe, der Wert muss zwischen 1 und 100 liegen`
    } else if (points < 50) {
        return `Nicht bestanden! Bitte noch einmal`;
    } else if (points <= 60) {
        return `Note 4`;
    } else if (points <= 80) {
        return `Note 3`;
    } else if (points <= 90) {
        return `Note 2`;
    } else if (points <= 98) {
        return `Note 1`;
    } else if (points === 99) {
        return `Fast perfekt`;
    } else {
        return `Du hast morgen frei!!!`;
    }
}

let test1 = assignGrade(23);
let test2 = assignGrade(50);
let test3 = assignGrade(73);
let test4 = assignGrade(55);
let test5 = assignGrade(83);
let test6 = assignGrade(98);
let test7 = assignGrade(99);
let test8 = assignGrade(100);
let test9 = assignGrade(-1);

cl(test1);
cl(test2);
cl(test3);
cl(test4);
cl(test5);
cl(test6);
cl(test7);
cl(test8);
cl(test9);

// Schreibe eine Funktion, die das Geld berechnet bis zu deiner Pension
// Inputs:
// Alter der Person
// das Rentenalter
// das monatliche Einkommen
// die Prozentzahl, wieviel er monatlich spart.

function makeMoney(alter, rentenalter, einkommen, prozentuelleSparrate) {

    if (rentenalter <= alter) {
        return `Erinnere dich mal an früher`;
    } else {
        return `Es verbleiben ${rentenalter-alter} Arbeitsjahre und bei einer monatlichen Sparrate von  € ${prozentuelleSparrate/100*einkommen} sind am Ende € ${(rentenalter-alter)*12*prozentuelleSparrate/100*einkommen} auf der hohen Kante.`
    }

}

let money1 = makeMoney(40, 65, 2000, 5);
cl(money1);

let money2 = makeMoney(68, 65, 10000, 10);
cl(money2);




// Schreibe eine Funktion, die einen Parameter akzeptiert, diesen überprüft ob es eine
// Number ist und davon die Quadratzahl returned.


function square(a) {
    if (typeof a !== `number`){
        return `Eingabe ist keine Nummer`
    }
    else {
        return Math.pow(a, 2);
    }
}

let squareResult1 = square(3);
let squareResult2 = square(`Feierabend`);
let squareResult3 = square(-20);
let squareResult4 = square(1945415645845641518915618941891569518916518949651295654685164651655465196849684698456416857468745647684684564684654698464418951894984196418645964178964564564857);
let squareResult5 = square(true);

cl(squareResult1);
cl(squareResult2);
cl(squareResult3);
cl(squareResult4);
cl(squareResult5);



function factorial(a) {
    if (typeof a !== `number` || Math.floor(a) !== a) {
        return `Ungültige Eingabe`;
    }
    else { 
        let factor = 1;
        for (let i = 1 ; i <= a; i++){
        factor = factor * i;}
        return factor;
    }
}

let factorResult1 = factorial(4);
cl(factorResult1);
let factorResult2 = factorial(-5);
cl(factorResult2);
let factorResult3 = factorial(19);
cl(factorResult3);
let factorResult4 = factorial(3.14);
cl(factorResult4);

