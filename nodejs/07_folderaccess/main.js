const fs = require('fs');

const items = fs.readdirSync('/home/dci/Desktop/test');

for (item of items) {
    console.log(item)
}

console.log(`Der Ordner hat ${items.length} direkte Files`);

let path1 = '/home/dci/Desktop/test/a' // Datei
let path2 = '/home/dci/Desktop/test/hallo' // Verzeichnis


const infoPath1 = fs.lstatSync(path1);
const infoPath2 = fs.lstatSync(path2);

if (infoPath1.isFile()) {
    console.log("Path1 ist ein File");
} else {
    console.log("Path1 ist ein Ordner/Directory")
}
if (infoPath2.isFile()) {
    console.log("Path2 ist ein File");
} else {
    console.log("Path2 ist ein Ordner/Directory")
}