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