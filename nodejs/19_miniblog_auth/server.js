const express = require('express');
const session = require('express-session');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'holger',
    password: 'password',
    database: 'miniblog'
});

if(!connection) {
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
app.get('/login', (req, res) => {
    const sql = `select * from users where email = ? and password = ?`;
    connection.query(
        sql, [req.query.email, req.query.password],
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            if(rows.length > 0) {
                // session wird erzeugt
                req.session.user = req.query.email;
                return res.send(rows);
            }

            return res.send({ error: 'login not found' });    
        });    
});

app.post('/login', (req, res) => {
    const sql = `select * from users where email = ? and password = ?`;
    connection.query(
        sql, [req.body.email, req.body.password],
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            if(rows.length > 0) {
                // session wird erzeugt
                req.session.user = rows[0].email;
            }

            return res.send(rows);    
        });    
});


// middleware, die vor den requests /content und /privateProfile
// ausgeführt wird
const auth = (req, res, next) => {
    if(!req.session.user) {
        return res.send('Unauthorized');
    }    

    // next leitet den request weiter an die nächste
    // callback-funktion
    next();
}

// GET-Resource '/logout', wird nicht mehr benutzt, 
// ersetzt durch POST-Resource '/logout':

app.get('/logout', auth, (req, res) => {
    console.log(req.session.user);
    delete req.session.user;
    console.log(req.session.user);
    return res.send({loggedOut:true});
});

app.post('/logout', auth, (req,res) => {
    const sql = `select * from users where email = ?`;
    connection.query(
        sql, [req.body.email],
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            if(rows.length > 0) {
                delete req.session.user;
                return res.send({loggedOut:true});    
            }
            else {
                return res.send({loggedOut:false});    
            }
        });     
})



app.get('/blogposts', (req, res) => {
    const sql = `select * from blogpost order by id desc`;
    connection.query(
        sql,
        (err, rows) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            return res.send(rows);
        });      
})

app.post('/blogpost', auth, (req, res) => {
    if(!(req.body.title && req.body.content)) {
        return res.send({ error: 'title and content required' });
    }

    const sql = `insert into blogpost (created, title, content) values(now(), ?, ?)
    `;
    connection.query(
        sql, [req.body.title, req.body.content],
        (err, result) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            return res.send({ newInsertId: result.lastInsertId });
        });       
});

app.delete('/delete/:id', auth, (req, res) => {
    const query = `delete from blogpost where id = ?`;
    console.log(req.params.id)
    connection.query(query, [req.params.id],
        (err, result) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            return res.send(result);
        });
})

app.put('/blogpost', auth, (req, res) => {
    if(!(req.body.title && req.body.content)) {
        return res.send({ error: 'title and content required' });
    }

    const sql = `update blogpost set title = ?, content = ? where id = ?
    `;
    connection.query(
        sql, [req.body.title, req.body.content, req.body.id],
        (err, result) => {
            if(err) {
                console.log('Error: ' + err);
                return res.send({ error: 'db error' + err });
            }

            return res.send({ newInsertId
                : result.lastInsertId });
        });       
});

app.listen(3000);