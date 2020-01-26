const fs = require('fs');

// Datei lesen
const buffer = fs.readFileSync('./blabla.txt', 'utf-8');

console.log(buffer);


// Datei schreiben


const newText = "Sehr geehrte Damen und Herren";

fs.writeFileSync('./new_blabla.txt', newText)

// Aufgabe:

// 1.) Gehe auf http://bytesizematters.com/
// 2.) erstelle einen String von 1024 Bytes
// 3.) 1024 Bytes ist ein KB
// 4.) Erstelle einen Algortithmus, der eine Datei von 512 MB
//     erzeugt und erzeuge damit eine Datei dummy.txt 


const str = "sdkkasdhakshdkascbjasbcjasbwufgduwcgbrnoimsxjodawnhcesvgtkbuesi uuvfchxdikmcnfgvbujsgvgnxdsyiynhxdazcsfgubucdxnshymndxicgazufvbchxiejosyowmshndxcuagbefzseuxdhyixnfcbuwnrhrviu3wg iw33cingiuow nr i3wzgr3 oqr4gto83o t4roqw84nzr87cnvq3orz qo2o9rtq2o8 roq2 gto3i8sdkkasdhakshdkascbjasbcjasbwufgduwcgbrnoimsxjodawnhcesvgtkbuesi uuvfchxdikmcnfgvbujsgvgnxdsyiynhxdazcsfgubucdxnshymndxicgazufvbchxiejosyowmshndxcuagbefzseuxdhyixnfcbuwnrhrviu3wg iw33cingiuow nr i3wzgr3 oqr4gto83o t4roqw84nzr87cnvq3orz qo2o9rtq2o8 roq2 gto3i8sdkkasdhakshdkascbjasbcjasbwufgduwcgbrnoimsxjodawnhcesvgtkbuesi uuvfchxdikmcnfgvbujsgvgnxdsyiynhxdazcsfgubucdxnshymndxicgazufvbchxiejosyowmshndxcuagbefzseuxdhyixnfcbuwnrhrviu3wg iw33cingiuow nr i3wzgr3 oqr4gto83o t4roqw84nzr87cnvq3orz qo2o9rtq2o8 roq2 gto3i8sdkkasdhakshdkascbjasbcjasbwufgduwcgbrnoimsxjodawnhcesvgtkbuesi uuvfchxdikmcnfgvbujsgvgnxdsyiynhxdazcsfgubucdxnshymndxicgazufvbchxiejosyowmshndxcuagbefzseuxdhyixnfcbuwnrhrviu3wg iw33cingiuow nr i3wzgr3 oqr4gto83o t4roqw84nzr87cnvq3orz qo2o9rtq2o8 roq"

let newStr = ""
for (let i = 0; i < 512000; i++) {
    newStr += str;
}

fs.writeFileSync('./dummy.txt', newStr);



// Strings anhängen
const newStr2 = `\n\nPS: Bitte die Rechnung überweisen.`;

fs.appendFileSync('./blabla.txt', newStr2);

// Dateien löschen

try {
    fs.unlinkSync('./DELETEME')
} catch (e) {
    console.log(`Datei nicht gefunden.`)
}

// Aufgabe: 

// Gegeben sei folgendes Javascript-Objekt

const users = [{
        id: 1,
        name: `John`,
        email: `john@gmx.net`
    },
    {
        id: 2,
        name: `Bob`,
        email: `bob@gmail.com`
    },
    {
        id: 3,
        name: `Sarah`,
        email: `sarah@gmx.net`
    },
]

// 1. Finde einen Weg, dieses Array in einer Datei zu speichern.
//    Nenne die Datei user.json
// 2. Speichere die Datei auch als csv ab -> users.csv


fs.writeFileSync('./users.json', JSON.stringify(users));


fs.writeFileSync('./users.csv', 'id, name, email' );
for (elem of users) {

        fs.appendFileSync('./users.csv', `\n${elem.id},${elem.name},${elem.email}`);
   
}