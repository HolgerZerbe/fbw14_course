const express = require('express');
const app = express();
const fs = require('fs');
const randomstring = require('randomstring');
const fileUpload = require('express-fileupload');


// alle Dateien, die im Ordner public drin sind,
// können von außen über den Dateinamen geladen werden
// /-> lädt aiutomatisch index.html
// /main.js -lädt die Datei main.js
// /style.css -> lädt die Datei style.css
app.use('/', express.static(`public`));
app.use(express.json());
app.use(fileUpload());


app.get('/users', (req, res) => {

    if (!req.query.q) {
        fs.readFile('./users.json', 'utf-8',

            // wenn das Laden der Datei fertig ist,
            // wird die folgende Callback-Funktion ausgeführt
            (err, data) => {
                if (err) return res.send({
                    Fehler: err
                })
                //console.log(data);
                return res.send(data);
            });
    } else {
        const lowerQ = new String(req.query.q).toLowerCase();
        //console.log(lowerQ);
        const found = []
        fs.readFile('./users.json', 'utf-8',
            (err, data) => {
                if (err) return res.send({
                    Fehler: err
                })
                // console.log(data);
                for (elem of JSON.parse(data)) {
                    if (elem.name.toLowerCase().search(lowerQ) !== -1 || elem.email.toLowerCase().search(lowerQ) !== -1 || elem.description.toLowerCase().search(lowerQ) !== -1) {
                        found.push({
                            id: elem.id,
                            name: elem.name,
                            email: elem.email
                        })
                    }
                }
                return res.send(found);
            });
    }
});


// demonstration: langes laden synchron 
// effekt: blockiert den server, nutzer 2 
// muss auf nutzer 1 warten
app.get('/longload_synchron', (req, res) => {
    let stop = new Date().getTime();
    while (new Date().getTime() < stop + 10000) {
        ;
    }

    return res.send('daten geladen');
});

// demonstration: langes laden asynchron 
// effekt: blockiert den server NICHT, nutzer 2 
// muss NICHT auf nutzer 1 warten
app.get('/longload_asynchron', (req, res) => {
    setTimeout(
        () => {
            res.send('daten geladen')
        },
        10000
    )
});

app.get('/users_delay', (req, res) => {
    setTimeout(
        () => {
            fs.readFile('./users.json', 'utf-8',
                (error, data) => {
                    if (error) return res.send({
                        error: error
                    });

                    const usersAll = JSON.parse(data);
                    const userSummary = [];

                    for (elem of usersAll) {
                        userSummary.push({
                            id: elem.id,
                            name: elem.name,
                            email: elem.email
                        });
                    }
                    return res.send(userSummary);
                });
        },
        3000
    );
});


app.get('/userdetail/:id', (req, res) => {

    fs.readFile('./users.json', 'utf-8',

        (err, data) => {

            if (err) return res.send({
                Fehler: err
            });

            const usersAll = JSON.parse(data);
            for (elem of usersAll) {

                if (elem.id == req.params.id) {
                    return res.send(elem)
                }
            }
            return res.send({
                error: "User with that id not found"
            })
        });
});


app.post('/users', (req, res) => {
    //console.log(req.body);
    if (!req.body.name || !req.body.description || !req.body.email || !req.body.profilePic)
        return res.status(400).send({
            error: 'name, email, description and profilPic needed'
        });

    fs.readFile('./users.json', 'utf-8', (error, data) => {
        if (error) return res.send({
            Fehler: error
        });

        const allUsers = JSON.parse(data);


        let newUser = req.body;
        newUser.id = randomstring.generate(10);
        allUsers.push(newUser);

        // console.log(allUsers);
        // console.log(newUser);

        let strUsers = null;
        strUsers = JSON.stringify(allUsers);


        fs.writeFile('./users.json', strUsers, (error) => {
            if (error) {
                return res.send({
                    Fehler: error
                })
            };

            return res.send({
                error: 0,
                id: newUser.id
            });
        })
    });
});

app.post('/imageupload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Keine Bilder hochgeladen.');
    }

    // Der ame des Input-Fields wird genutzt um die Datei zu bekommen
    let image = (req.files.sampleImage);
    let lowerCaseImageName = image.name.toLowerCase()
    let uploadPath = __dirname + "/public/uploads/" + lowerCaseImageName;
 
    // alternativ ein unabhängiger von working directory unabhängiger Pfad:
    //let uploadPath = '~/Desktop/fbw14_exercises/nodejs/13_usertable/public/uploads/' + image.name;

    // mv() methode um das File mit dem definierten upload-Pfad auf dem Server zu speichern:
    image.mv(`${uploadPath}`, (err) => {
        if (err)
            return res.status(500).send(err);

        return res.send("Nutzer angelegt");

    });
});



console.log(`Hallo World from Backend`);
app.listen(3000);

// AUFGABE 1:

// Erweitere die users.json und erstelle für jeden User
// zwei weitere Felder "description" und "profilePic"

// 1) Für description erstelle 2 lustige Sätze über den User
// 2) Für profilePic: Lade für jeden User ein Profilbild.
//    Gib profilePic den Namen der Datei


// AUFGABE 2:

// 1) In deinem Backend erstelle eine Ressource /userdetail/:id,
//    die einen Parameter :id erwartet.
// 2) /userdetail soll den Nutzer aus user.json laden, mit
//    der Id = id und alle Informationen zu diesem Nutzer 
//    als JSON zurückgeben. Falls die ID nicht gefunden wurde,
//    dann gib folgendes JSON zurück:
//    {error:" user with that id not found"}