// Schreibe eine Funktion gehtInRente die als Parameter einen Namen
// und ein Geburtstdatum hat. Die Funktion soll auf die Konsole das
// aktuelle Alter ausgeben. Gegeben sei, dass in D alle mit 67 in Rente 
// gehen. Die Funktion soll zurückgeben, in wievielen Jahren die Person
// in Rente geht.

function gehtInRente(name, geburtsjahr) {
    var alter = 2019 - geburtsjahr;
    var restArbeitszeit = 67 - alter;
    
    if (restArbeitszeit < 0) {
        return `${name} ist bereits in Rente.`;
    }
    else if (restArbeitszeit === 0) {
        return `${name} geht dieses Jahr in Rente.`
    }
    else {
        return `${name} geht in ${restArbeitszeit} Jahren in Rente`
    }
}


var rente = gehtInRente(`Kurt`, 1952);
console.log(rente);
