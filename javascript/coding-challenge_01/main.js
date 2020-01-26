var johnGroesse = 178;
var johnAlter= 18;
var kumpelGroesse = 163;
var kumpelAlter= 33;

if ((johnGroesse + 5 * johnAlter) > (kumpelGroesse + 5 * kumpelAlter)) {
    console.log(`John hat gewonnen`);
}
else if ((johnGroesse + 5 * johnAlter) < (kumpelGroesse + 5 * kumpelAlter)) {
    console.log(`Kumpel hat gewonnen`);
}
else {
    console.log(`Keiner hat gewonnen`);
}


var dritterGroesse = 174;
var dritterAlter = 78;

if ((johnGroesse + 5 * johnAlter) > (kumpelGroesse + 5 * kumpelAlter) && (johnGroesse + 5 * johnAlter) > (dritterGroesse + 5 * dritterAlter)) {
    console.log(`John hat gewonnen`);
}
else if ((kumpelGroesse + 5 * kumpelAlter) > (johnGroesse + 5 * johnAlter) && (kumpelGroesse + 5 * kumpelAlter) > (dritterGroesse + 5 * dritterAlter)) {
    console.log(`Kumpel hat gewonnen`);
}
else if ((dritterGroesse + 5 * dritterAlter) > (johnGroesse + 5 * johnAlter) && (dritterGroesse + 5 * dritterAlter) > (kumpelGroesse + 5 * kumpelAlter)) {
    console.log(`Dritter hat gewonnen`);
}
else {
    console.log(`Keiner hat gewonnen`);
}