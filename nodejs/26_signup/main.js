// mysql client bibliothek
const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'holger',
    password: 'password',
    database: 'miniblog'
});



const addUser = (email, password) => {
    // query3: daten einfügen
    const query3 = `
        insert into users (
            email, 
            password
        )
        values (?,?);
    `;
    connection.query(
        query3, [
            email,
            password
        ],
        (err, rows) => {
            // falls ein err definiert wurde, dann
            // mal schauen was schiefgelaufen ist evtl. falsche sql syntax
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            console.log(rows);
        });
}


app.get(`/users`, (req, res) => {
    const query = `select * from users`;
    connection.query(
        query,
        (err, rows) => {
            if (err) {
                console.log(`Error: ` + err);
                return
            }
            return res.send(rows);
        });
});

app.post('/signup', (req, res) => {
    console.log(req.body.email)
    const sql = `insert into users (email, password) values (?,?);`;
    connection.query(
        sql, [req.body.email, req.body.password],
        (err, result) => {
            // falls ein err definiert wurde, dann
            // mal schauen was schiefgelaufen ist evtl. falsche sql syntax
            if (err) {
                return res.send(`Datenbankfehler: `+ err);
            }

            return res.send({
                
                    newInsertId: result.lastInsertId
                }
            )

        });
});

//addUser('max@gmail.com','maxpw');

app.listen(3000);
