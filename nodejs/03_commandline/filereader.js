#!/home/dci/.nvm/versions/node/v11.12.0/bin/node


// Aufgabe:

// Schreibe ein NodeJS-Programm FileReader.js, welches alle Dateinamen,
// die als Argument übergeben wurden, öffnet und den Inhalt ausgibt. 
// Öffne die Dateien snchron nacheinander und gib den Inhalt mit 
// console.log aus.

const fs = require(`fs`);

console.log(process.argv)
const filenames=process.argv.splice(2, process.argv.length);

for (argument of filenames) {
    const data = fs.readFileSync(argument, 'utf-8');
    console.log(data);
}

