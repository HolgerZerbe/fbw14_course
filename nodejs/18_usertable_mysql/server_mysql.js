const express = require('express');
const app = express();
const fs = require('fs');
const fileUpload = require('express-fileupload');
const randomstring = require('randomstring');
const mysql = require('mysql');

app.use(express.json());
app.use(fileUpload());
app.use('/', express.static('public'));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'holger',
    password: 'password',
    database: 'users'
});


app.get('/users', (req, res) => {

    let usersSummary = [];

    if (req.query.q) {

        const toSearch = '%' + req.query.q + '%';

        const query = `select * from users_table where name like ?
                        or email like ?
                        or description like ?`;

        connection.query(
            query, [toSearch, toSearch, toSearch],
            (err, rows) => {
                if (err) {

                    console.log('Error: ' + err);
                    return;
                }

                for (user of rows) {
                    usersSummary.push({
                        id: user.id,
                        name: user.name,
                        email: user.email
                    });
                }
                return res.send(usersSummary);
            });


    } else {
        const query = `select * from users_table`;

        connection.query(query,
            (err, rows) => {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                }
                for (user of rows) {
                    usersSummary.push({
                        id: user.id,
                        name: user.name,
                        email: user.email
                    });
                }

                return res.send(usersSummary);
            });
    }
});


app.get('/userdetail/:id', (req, res) => {

    const id = parseInt(req.params.id); // id auslesen aus dem request
    console.log('Ausgelesene ID ist = ' + id);

    const query = `select * from users_table where id = ?`;

    connection.query(
        query, [id],
        (err, rows) => {
            if (err) {

                console.log('Error: ' + err);
                return;
            }
            // console.log(rows);
            // console.log(rows[0]);
            // console.log(rows[0].name);
            // console.log(rows[0].description);
            // console.log(typeof rows);

            return res.send(rows[0]);
        });

});





app.post('/users', (req, res) => {
    if (!(req.body.name && req.body.email && req.body.description && req.files.imageUpload)) {
        return res.send({
            error: 'name, email, description and imageUpload required'
        });
    }

    // alle variablen da, weiter gehts ...
    const newFilename = randomstring.generate(10);

    // sampleFile ist referenz auf datei
    let sampleFile = req.files.imageUpload;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(__dirname + '/public/' + newFilename + '.jpeg', function (err) {
        if (err)
            return res.status(500).send({
                error: err
            });

        const query = `insert into users_table (
                name, email, description, profilePic
                )
            values (
                ?,?,?,?
                )`;

        connection.query(
            query, [req.body.name, req.body.email, req.body.description, newFilename + '.jpeg'],
            (err, result) => {
                if (err) {
                    // falls ein Fehler definiert wurde, dann schauen wir mal
                    // was schiefgelaufen ist evtl. falsche mysql syntax
                    console.log('Error: ' + err);
                    return;
                }
                return res.send({error: 0, newUserId: result.id});
            });

    });

});


console.log('Hallo World from Backend.');
app.listen(3000);