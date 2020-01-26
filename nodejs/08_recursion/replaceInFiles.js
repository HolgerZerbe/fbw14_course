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