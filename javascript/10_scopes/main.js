console.log(`10_Scopes`);

let g = 5;

function accessToChild() {
    console.log(`x ist ` + x); // x ist undefined
}



function parent() {

    let x = 1;

    function child1() {
        let z = 1 + x + g;
        console.log(`z ist = ` + z);

        // child1() kann sich selber aufrufen,
        // würde aber in einer unendlich-Schleife niemals terminieren
    }

    function child2() {
        // x ist im Eltern Scope von child1 und child 2,
        // also kann ich darauf zugreifen
        // g ist im Global Scope (im Eltern Scope von Eltern Scope)
        let z = 2 + x + g;
        console.log(`z ist = ` + z);

        function child2b() {
            let f = 1;
            // Aufgabe:
            // Auf welche Variablen hat Child2b Zugriff?

            // f, z , x , g  jedoch NICHT auf j

            function child2c() {
                let j = 5;

            }


        }
    }

    child1();
    child2();

}

parent();

// Scoping nennt man die Zugriffsmöglichkeit auf Variablen von außerhalb


// Vergleiche die Funktionen firstA und firstB miteinander!
// Was fällt die auf im Bezug auf Ihre Scopes?


// Code snippet 1

let a = `a`; // definiert im global scope
first1();

function first1() { // definiert im global scope
    let b = `b`;   // definiert im scope von first

    second1();

    function second1() { // definiert im scope von first
        let c = `c`;    // definiert im scope von second
        console.log(a, b, c);
    }
}


// Code snippet 2

// let a = `a`;   // definiert im global scope
first2();

function first2() {  // definiert im global scope
    let b = `b`;    // definiert im scope von first

    second2();

    function second2() {  // definiert im scope von first
        let c = `c`;     // definiert im scope von second
        third2();
    }
}
 
function third2() {  // definiert im global scope
    //console.log(c);  // geht das? NEIN!!!
                       // kann nur auf Global-Scope Werte zugreifen und auf Werte
                       // innerhalb von third()
}



// Aufgabe:

// Definiere 3 Funktionen foo1, foo2 und foo3.
// Alle drei Funktionen sind im global scope.
// foo1 hat 2 Unterfunktionen foo1a und foo1b
// Im Scope vpn foo3 gibt es zwei Variablen x und y.
// Im Scope von foo2 existiert eine for Schleife mit
// einer Variablen i, die von 0 bis 10 den jeweiligen
// Wert von i ausgibt, i soll im gesamten Scope von
// foo2 sichtbar sein



function foo1() {
    function foo1a() {
    }
    function foo1b() {
    }
}

function foo2() {
    let i;
    for (i = 0; i<=10; i++) { // anonymer Block
        // wenn let i=0 in der for-Schleife steht,
        // dann ist i nur im anonymen for-Block sichtbar
        console.log(i);  
    }
    console.log(i);
}

function foo3() {
    let x, y;  
}

foo2();



var vonAusserhalb = 4;

function zeigVonAußerhalb() {
    console.log(vonAusserhalb);

}
zeigVonAußerhalb();


function zeigVonInnerhalb() {
    var vonInnerhalb = `ist außerhalb der Funktion nicht sichtbar!`;
}

zeigVonInnerhalb();

// console.log(vonInnerhalb);  


var anfang = 10;

function eltern() {
    var elternAnfang = 100;

    function kindTochter() {
        var kindTochterAnfang = 1111;

        function enkelkind() {
            var enkelkindAnfang = 5000;
        }
    } 

    function kindSohn() {
        var kindSohnAnfang = 2222;
    }
}