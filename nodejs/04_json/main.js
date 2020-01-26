// Möglichkeiten JSON zu laden
// 1. Möglichkeit -> fs.readfile

const fs = require("fs");

const data = fs.readFileSync(`./users.json`);

const dataObj = JSON.parse(data);

console.log(dataObj[1].name);



// 2. Möglichkeit -> require

const users = require(`./users.json`);

for (user of users) {
    console.log(user.name);
}


let data2 = fs.readFileSync(`./users.csv`, `utf-8`);
console.log(data2);

data2 = data2.replace(new RegExp('"', 'g'), '');
data2 = data2.replace(new RegExp(' ', 'g'), '');

const lines = data2.split(`\n`);

lines.shift();

console.log(lines);
const users2 = [];
for (line of lines) {
    let values = line.split(',');

    const id = parseInt(values[0]);
    const name = values[1];
    const email = values[2];

    users2.push({
        id: id,
        name: name,
        email: email
    });

}

console.log(users2);


// Schreibe eine Funktion csv2json, welche alle
// csv-daten (mit beliebiger anzahl von Spalten)
// in JSON konvertiert
// PS: Key Interpolation

const csv2json = str => {
    
str = str.replace(new RegExp('"', 'g'), '');
str = str.replace(new RegExp(' ', 'g'), '');

    const csvLines = str.split('\n');
    const keys = csvLines[0].split(',');
    let obj = {};
    for (let key of keys) {
        obj[key] = "";
    }
    // console.log(obj);
    
    csvLines.shift();
    
    const cellphones = [];
    
    for (let line of csvLines) {
        let i = 0;
        const cellphone = {};
        const column = line.split(',');
        for (key in obj) {
            cellphone[key] = column[i];
            i++
        }
        cellphones.push(cellphone);
        
    }
    
    console.log(cellphones)
}

const fileData = fs.readFileSync('./cellphones.csv', 'utf-8');
csv2json(fileData);
