const express = require(`express`);
const session = require(`express-session`);
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'holger',
    password: 'password',
    database: 'authdb'
});


if (!connection) {
    console.log(`Connection nicht hergestellt`);
    process.exit(0);
} else {
    console.log(`Connection hergestellt`)
}

// gibt jedem HTTP-Paket eine Cookie-ID in den header rein
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

app.get('/login', (req, res) => {

        const query = `select * from users where email = ? and password = ?`;

        connection.query(query, [req.query.email, req.query.password],
            (err, rows) => {
                if (err) {
                    console.log('Error: ' + err);
                    return res.send({error: `databank error`}) ;
                }
                if(rows.length  > 0) {
                    req.session.user = req.query.email;
                    req.session.pages = rows[0].pages;

                    return res.send({message: `login succesfull`})
                }
                return res.send({error: `login not found`})
            });


    }

);


// middlware, die
const auth = (req, res, next) => {
    if (!req.session.user) {
        return res.send(`Unauthorized`)
    }

    // next leitet den request weiter an die nächste
    // callback-funktion
    next()
}

app.get('/logout', auth, (req, res) => {

    delete req.session.user;

    return res.send({
        message: `logout succesfull`
    })


});

app.get('/content', auth, (req, res) => {
    // callback funktion 1!
    if(req.session.pages.split(',').includes('/content')) {
        return res.send('Secret area!');
    }

    return res.send(' Your are unauthorized');
});



app.get('/privateProfile', auth, (req, res) => {
    // callback function 2
    return res.send(`Private Profile area`);
});



app.listen(3000);

