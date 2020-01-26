const express = require('express');
const app = express();

// alle Dateien, die im Ordner public drin sind,
// können von außen über den Dateinamen geladen werden
// /-> lädt aiutomatisch index.html
// /main.js -lädt die Datei main.js
// /style.css -> lädt die Datei style.css
app.use('/', express.static(`public`));
app.use(express.json());

const users = [
    {id: 1, name:'Jan'},
    {id: 2, name:'Mohammed'},
    {id: 3, name:'Almas'},
    {id: 4, name:'Jerome'},
    {id: 5, name:'Hans'},
    {id: 6, name:'Björn'}
   
]

app.get('/', (req,res) => {
    return res.send("Hallo World")
});

app.get('/users', (red,res) => {
    return res.send(users);
})




// AUFGABE:
// Erstelle Rsourcen, über die neue Nutzer
// angelegt werden können


// 1. Möglichkeit mit GET Daten an den Server
// zu schicken _> URL Parameter

app.get('/newuser/:username', (req, res) => {
    // den neuen Nutzernamen rauslesen
    const newUsername = req.params.username;
    // hier erstellen wir einen neuen Nutzer
    const newUser = {
        id: users.length+1,
        name: newUsername
    }
    // wir pushen den neuen Nutzer in das Array
    users.push(newUser);
    return res.send(newUser);
})


// 2. Möglichkeit mit GET Daten an den Server
// zu schicken _> Query-Strings

app.get('/newuser', (req, res) => {
    // neuer Username soll über req.query.q 
    // ausgegeben werden:
    const newUsername = req.query.q;
    const newUser = {
        id: users.length+1,
        name: newUsername
    }
    // wir pushen den neuen Nutzer in das Array
    users.push(newUser);
    return res.send(newUser);
})


// POST-Methode ist die richtige Art, Daten 
// an den Server zu schicken

app.post('/newuser', (req, res) => {

    const newUsername = {
        id: users.length+1,
        name:req.body.username
    };

    users.push(newUsername);

    return res.send(newUsername);
})  


console.log(`Hallo World from Backend`);
console.log(users);

app.listen(3000);