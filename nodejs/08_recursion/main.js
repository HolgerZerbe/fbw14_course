console.log(`08_recursion`);

const sumWithoutRecursion = number => {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum
}

console.log(sumWithoutRecursion(5))


const sumWithRecursion = number => {

    if (number > 0) {
        return number + sumWithRecursion(number - 1)
    } else return 0
}

console.log(sumWithRecursion(5));

// 2a. Write a function listFiles(path) which list all files and folders of a given path


const listFiles = path => {

    const fs = require('fs');
    const items = fs.readdirSync(path);

    for (item of items) {
        const info = fs.lstatSync(`${path}/${item}`);
        if (info.isFile()) {
            console.log(item + " ist eine Datei");
        } else if (info.isDirectory()) {
            console.log(item + " ist ein Verzeichnis");
        } else if (info.isSymbolicLink()) {
            console.log(item + " ist ein Link");
        }
    }
}
listFiles('/home/dci/Desktop/fbw14_exercises/nodejs/08_recursion')

;
// 2b. Extend listFiles(path) by also showing the subfolders implement that using recursion.


const listFilesWithSubfolders = path => {

    let pathItem = path.split("/");
    // console.log(pathItem);
    let newPath = "";
    const fs = require('fs');


    for (let i = 1; i < pathItem.length; i++) {

        newPath = newPath + "/" + pathItem[i];
        const items = fs.readdirSync(newPath);
        let itemInPath = " ";
        for (item of items) {

            const info = fs.lstatSync(`${newPath}/${item}`);
            if (info.isFile()) {
                itemInPath = itemInPath + item + "(=Datei) ";
            } else if (info.isDirectory()) {
                itemInPath = itemInPath + item + "(=Ordner) ";
            } else if (info.isSymbolicLink()) {
                itemInPath = itemInPath + item + "(=Link) ";
            }
        }

        console.log("Im Ordner " + newPath + " sind folgende Dateien/Ordner/Links:");
        console.log(itemInPath);
        console.log(" ");
    }
}

listFilesWithSubfolders('/home/dci/Desktop/fbw14_exercises/nodejs/08_recursion');

// const sumWithRecursion = number => {

//     if (number > 0) {
//         return number + sumWithRecursion(number - 1)
//     } else return 0
// }


const listFilesRecursive = path => {

    const fs = require('fs');
    const files = fs.readdirSync(path);

    for (file of files) {
        const info = fs.lstatSync(`${path}/${file}`);

        if (info.isFile()) {
            // Rekursionsende 1
            console.log(file + " ist eine Datei");
        } else if (info.isDirectory()) {
            console.log(file + " ist ein Verzeichnis");
            listFilesRecursive(`${path}/${file}`)
        } else if (info.isSymbolicLink()) {
            // Rekursionsende 2
            console.log(file + " ist ein Link");
        }
    }
}
listFilesRecursive('/home/dci/Desktop/fbw14_exercises/nodejs/08_recursion')


// Erstelle eine Funtkion findFile die zwei Parameter
// path und filename erwartet. Path soll ein Verzeichnis-Pfad
// sein.
// Falls path kein Verzeichnis ist, dann soll findFile null zurückgeben.

// Ansonsten soll findFile alle Pfade zurückgeben, in denen die Datei
// filename zu finden ist
// filename kann auch ähnlich der zu suchenden Datei sein.
// d.h. falls filename z.b. "all" ist, dann soll die Datei "hallo.text"
// auch aufgelistet werden


// const findFile = (path, filename) => {
//     const fs = require('fs');
//     const givenPath = path;
//     console.log(givenPath)
//     const info = fs.lstatSync(givenPath);

//     if (!(info.isDirectory())) {
//         return null;
//     } else {
//         const splittedPath = path.split("/");
//         console.log(splittedPath);
//         for (let i = 0; i< splittedPath.length; i++) {
//             const info = fs.lstatSync(`${splittedPath[i]}`);

//             if (info.isFile()) {
//                 Rekursionsende 1
//                 if (info.search(filename) > -1) {
//                     console.log(info);
//                 }
//             } else if (info.isDirectory()) {
//                 console.log(file + " ist ein Verzeichnis");
//                 listFilesRecursive(`${splittedPath[i]}`)
//             }
//         }
//     }
// }



const findFile = (path, name) => {

    const fs = require('fs')
    const info = fs.lstatSync(path);
    if (!info.isDirectory) return null;

    let files = fs.readdirSync(path);
    for (file of files) {
        if (fs.lstatSync(`${path}/${file}`).isFile()) {
            if (file.search(name) !== -1) {
                console.log(`match: ${path}/${file}`);
            }
        } else if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
            findFile(`${path}/${file}`, name);
        }
    }
}

console.log(findFile('/home/dci/Desktop/fbw14_exercises/nodejs/08_recursion', "ai"))


// Aufgabe:
//
// 1) Erstelle eine Funktion findInFiles mit zwei Parametern
//    path und strSearch. Diese Funktion durchsucht rekursiv
//    das Verzeichnis und alle Unterverzeichnisse nach Dateien
//    und schaut sich jede Datei genau an. Dabei wird untersucht
//    ob in der Datei strSearch zu finden ist. Falls ja,
//    wird der Pfad der Datei ausgegeben.
// 2) Erstelle eine Funktion (basierend auf findInFiles) namens
//    replaceInFiles mit drei Parametern path, strSearch und strReplace.    
//    Die Funktionalität von 1) soll erweitert werden dadurch, dass
//    in der Datei mit dem gefundenen String der String mit strReplace
//    erstetzt wird und danach die Datei abgespeichert wird. 
//    Optional: speichere eine Kopie der Datei ${filename}.bak, hallo.txt -> hallo.txt.bak
// 3) Erstelle aus 1 und 2 jeweils ein ausführbares Skript namens
//    1) findInFiles.js
//    2) replaceInFiles.js
// 4) Verlinke 3.1) in /usr/local/bin/findInFiles bzw. /usr/local/bin/replaceInFiles+

const findInFile = (path, strSearch) => {
    const fs = require('fs')
    const info = fs.lstatSync(path);
    //console.log(info);
    if (info.isFile()) {
        let string = JSON.stringify(fs.readFileSync(path, `utf-8`));
        if (string.search(strSearch) !== -1) {
            console.log(`"${strSearch}" gefunden in File: ${path}`);
        }
    } else {

        let files = fs.readdirSync(path);
        for (file of files) {
            //console.log(file)
            if (fs.lstatSync(`${path}/${file}`).isFile()) {
                let string = JSON.stringify(fs.readFileSync(`${path}/${file}`, `utf-8`));

                if (string.search(strSearch) !== -1) {
                    console.log(`"${strSearch}" gefunden in File: ${path}/${file}`);
                }
            } else if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
                findInFile(`${path}/${file}`, strSearch);
            }
        }

    }
}

findInFile('/home/dci/Desktop/fbw14_exercises/nodejs', "onso");




const replaceInFile = (path, strSearch, strReplace) => {
    const fs = require('fs')
    const info = fs.lstatSync(path);
    if (info.isFile()) {
        let string = JSON.stringify(fs.readFileSync(path, `utf-8`));
        if (string.search(strSearch) !== -1) {
            let stringToFind = new RegExp(strSearch, 'g');
            let newString = string.replace(stringToFind, strReplace);
            //console.log(newString)
            let newPath = path + ".bak";
            fs.writeFileSync(newPath, JSON.stringify(newString));
            console.log(`"${strSearch}" gefunden und ersetzt durch "${strReplace}" und als File gespeichert: ${newPath}`);
        }
    } else {

        let files = fs.readdirSync(path);
        for (file of files) {
            //console.log(file)
            if (fs.lstatSync(`${path}/${file}`).isFile()) {
                let string = JSON.stringify(fs.readFileSync(`${path}/${file}`, `utf-8`));

                if (string.search(strSearch) !== -1) {
                    let stringToFind = new RegExp(strSearch, 'g');
                    let newString = string.replace(stringToFind, strReplace);
                    //console.log(newstring)
                    let newPath = `${path}/${file}` + ".bak";
                    fs.writeFileSync(newPath, JSON.stringify(newString));
                    console.log(`"${strSearch}" gefunden und ersetzt durch "${strReplace}" und als File gespeichert: ${newPath}`);
                }

            } else if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
                replaceInFile(`${path}/${file}`, strSearch, strReplace);
            }
        }

    }
}

replaceInFile('/home/dci/Desktop/fbw14_exercises/nodejs', 'console', 'hallo');