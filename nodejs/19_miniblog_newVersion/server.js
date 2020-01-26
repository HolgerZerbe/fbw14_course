const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());
app.use('/', express.static('public'));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'holger',
    password: 'password',
    database: 'miniblog'
});



app.get('/blogposts', (req, res) => {
    const query = `select * from blogpost order by id desc`;

    connection.query(query,
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            return res.send(rows);
        });
})


app.get('/singleposts/:id', (req, res) => {
    const query = `select * from blogpost where id = ?`;
    
    connection.query(query, [req.params.id],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            return res.send(rows);
        });
})

app.get('/delete/:id', (req, res) => {
    const query = `delete from blogpost where id = ?`;
    
    connection.query(query, [req.params.id],
        (err, result) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            return res.send(result);
        });
})

app.post('/blogposts', (req, res) => {
    if (!(req.body.title && req.body.content)) {
        return res.send({
            error: 'Titel and content required'
        });
    }

    const query = `insert into blogpost (
                created, title, content
                )
            values (
                now(),?,?
                )`;

    connection.query(
        query, [req.body.title, req.body.content],
        (err, result) => {
            if (err) {
                // falls ein Fehler definiert wurde, dann schauen wir mal
                // was schiefgelaufen ist evtl. falsche mysql syntax
                console.log('Error: ' + err);
                return;
            }
            return res.send({
                error: 0,
                result: result.id
            });
        });

});

app.post('/update', (req, res) => {
    if (!(req.body.title && req.body.content)) {
        return res.send({
            error: 'Titel and content required'
        });
    }

    const query = `update blogpost set title = ?, content = ?
                    where id = ?`
            ;

    connection.query(
        query, [req.body.title, req.body.content, req.body.id],
        (err, result) => {
            if (err) {
                // falls ein Fehler definiert wurde, dann schauen wir mal
                // was schiefgelaufen ist evtl. falsche mysql syntax
                console.log('Error: ' + err);
                return;
            }
            return res.send({
                error: 0,
                result: result.id
            });
        });

});



app.listen(3000);