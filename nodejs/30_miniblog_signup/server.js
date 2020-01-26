const express = require('express');
const session = require('express-session');
const app = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');
const sendMail = require('./mailer');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'holger',
    password: 'password',
    database: 'miniblog'
});

if (!connection) {
    console.log('Verbindung zur DB konnte nicht hergestellt werden - Exit.');
    process.exit(0);
}

app.use('/', express.static('public'));



app.use(express.json());


// gibt jedem HTTP-packet eine cookie-id in den header
// rein
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

// Aufgabe: schreibe eine Logout-Funktion!
app.post('/login', (req, res) => {
    const queryUserExists = `select * from users where email = ? and activated != ?`;
    connection.query(
        queryUserExists, [req.body.email, ''],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            if (rows.length === 0) {
                return res.send({
                    error: 1001,
                    message: 'user not found'
                });
            }

            const hashedPassword = rows[0].password; // slkdjfljf4jf
            bcrypt.compare(req.body.password, rows[0].password, (err, result) => {
                if (err) return res.send({
                    error: 1003,
                    message: 'error comparing passwords'
                });

                if (result) {
                    return res.send({
                        error: 0,
                        message: 'login successful'
                    });
                } else {
                    return res.send({
                        error: 1004,
                        message: 'login failed'
                    });
                }
            });
        });

});

// middleware, die vor den requests /content und /privateProfile
// ausgeführt wird
const auth = (req, res, next) => {
    if (!req.session.user) {
        return res.send('Unauthorized');
    }

    // next leitet den request weiter an die nächste
    // callback-funktion
    next();
}

app.post('/logout', (req, res) => {
    delete req.session.user;
    return res.send({
        error: 0,
        message: 'logout successfull'
    });
});

app.get('/blogposts', (req, res) => {
    const sql = `select * from blogpost`;
    connection.query(
        sql,
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return res.send({
                    error: 'db error' + err
                });
            }

            return res.send(rows);
        });
})

app.post('/blogpost', auth, (req, res) => {
    if (!(req.body.title && req.body.content)) {
        return res.send({
            error: 'title and content required'
        });
    }

    const sql = `insert into blogpost (created, title, content) values(now(), ?, ?)
    `;
    connection.query(
        sql, [req.body.title, req.body.content],
        (err, result) => {
            if (err) {
                console.log('Error: ' + err);
                return res.send({
                    error: 'db error' + err
                });
            }

            return res.send({
                newInsertId: result.lastInsertId
            });
        });
});


app.post('/signup', (req, res) => {
    console.log(`incoming request, attempt to create user with email: ${req.body.email} and 
    password: ${req.body.password}`);

    if (!(req.body.email && req.body.password)) {
        return res.send({
            error: 1002,
            message: 'email and password required'
        });
    }

    const queryUserExists = `select * from users where email = ?`;
    connection.query(
        queryUserExists, [req.body.email],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            if (rows.length > 0) {
                return res.send({
                    error: 1001,
                    message: 'user already exists'
                });
            }

            // zeit, dass password zu hashen 
            bcrypt.hash(req.body.password, 10,
                (err, result) => {
                    let hashedPassword = result;

                    // user existiert noch nicht!                    
                    const queryAddUser = `
                        insert into users (email, password, activationcode) values (?, ?, ?)
                    `;
                    const activationCode = randomstring.generate(20);

                    connection.query(
                        queryAddUser, [req.body.email, hashedPassword, activationCode],
                        (err, rows) => {
                            if (err) {
                                console.log('Error: ' + err);
                                return;
                            }
                            sendMail(req.body.email, `Ihre Registrierung`, `
                            Danke für Ihre Registrierung bei Miniblog!
                            Bitte klicken sie auf folgenden Link:
                            <a href="http://localhost:3000/activate/${activationCode}">Hier bitte klicken!</a>`);

                            return res.send({
                                error: 0,
                                message: 'user successfully created'
                            });
                        });
                });
        });
})

app.get('/activate/:activationcode', (req, res) => {
    // console.log(`incoming activation attempt: ${req.params.activationcode}`);

    const query = `
    update users set activated = now() where activationcode = ?
`;
    connection.query(
        query, [req.params.activationcode],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            if (rows.affectedRows === 0) {

                return res.send({
                    error: 1005,
                    message: `invalid activationscode`
                })
            }
          

            // req.session.user = req.query.email;

            return res.send(

                `
                <html>
                <head>
                <script> 

                localStorage.setItem("loggedIn", "1")

                </script>
                <title>Mini-Blog</title>
                <meta http-equiv="refresh" content="5; URL=http://localhost:3000/">
                </head>

                <body>
                    <div style="height: 120px; padding: 6px;font-family: Arial, Helvetica, sans-serif;background-image:linear-gradient(to bottom right, rgb(15, 8, 75), rgb(39, 17, 204));color:white;">
                        <h1>Miniblog</h1>
                    </div>
                    <div style="height: calc(100vh - 120px); font-family: Arial, Helvetica, sans-serif; color: yellowgreen; background-color: rgb(37, 37, 37);text-align:center; font-size: 25px; padding-top: 50px">
                        Ihre Registrierung ist nun abgeschlossen!

                        <p style="margin-top: 50px">Sie werden in 5 Sekunden auf die Startseite geführt.</p>
                    </div>
                </body>
                </html>
                `)
        });

})

app.listen(3000);