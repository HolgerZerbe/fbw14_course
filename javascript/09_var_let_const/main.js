console.log(`09_var_let_const`);

// "altes" Javascript, vor ECMAScript 2015

var x = 2;
x = 3;
console.log(`x = ` + x);

// var ist ein Syntaxelement zum Deklarieren von Variablen

for (var i = 0; i < 10; i++) { // anonymer Block 
    console.log(`i = ` + i);
}

// i = ?
// 0 ,11, 1, 10, 9 ...???
console.log(`i nach der Schleife = ` + i);


{ // ananymer Block
    { // anonymer Block
        var j = 1005;
        console.log(`j innerhalb = ` + j);
    }
    console.log(`j außerhalb = ` + j);

}
console.log(`j ganz außerhalb = ` + j);


function halloWorld() {
    var str = `hallo World`;
    console.log(`str innerhalb: ` + str);
}

halloWorld();

// gibt einen Fehler aus (str is not defined)
// console.log(`str außerhalb: ` + str);


if (true) {
    var k = 5;
}

console.log(`k ist = ` + k);


// var

// - sichtbar außerhalb von anonymen Blöcken
//   for, while, if, switch
// - wieder zuweisbar / überschreibbar


let v = 10;
v = 15;

console.log(`v = ` + v);

for (let g = 0; g < 10; g++) {
    console.log(`g = ` + g);
}

// let

// nicht sichtbar außerhalb anonymer Blöcke
// console.log(`g = ` + g);


const h = 5;


// gibt Fehler aus, h ist Konstante und nicht überschreibbar:
// h = 8;
{
    const r = 7;
}

// gibt fehler aus, da Konstanten nur lokal definiert sind und
// somit außerhalb anonymer Blöcke nicht sichtbar sind
// 
// console.log(r);