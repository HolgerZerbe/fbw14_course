console.log(`11_Execution_Context`);

let name = `steffi`;

function first() {
    let greeting = `hallo `;
    let x = greeting + name;
    second();
    console.log(x);
}
function second() {
    let greeting = `hi `;
    let x = greeting + name;
    third();
    console.log(x);
}
function third() {
    let greeting = `hey `;
    let x = greeting + name;
    console.log(x);
}


first();

// Gibt aus: 

// hey steffi 
// hi steffi 
// hallo steffi 



// let a = 'Hallo!';


// function first() {
// 	console.log('Hallo von Funktion First');
// 	second();
// 		console.log('Nochmal Hallo von Funktion First');
// }

// function second() {
// 	console.log('Hallo von Funktion Second');
// }

// first();

// console.log('Hallo vom Global Execution Context');