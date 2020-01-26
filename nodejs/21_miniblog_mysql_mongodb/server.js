const express = require('express');
const app = express();
const mysql = require('mysql');
const mongoose = require('mongoose');
const Post = require('./Post');


app.use(express.json());
app.use('/', express.static('public'));

require('dotenv').config();

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'holger',
    password: 'password',
    database: 'miniblog'
});




app.get('/blogposts', async (req, res) => {

    const query = `select * from blogpost order by id desc`;

    connection.query(query,
        async (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            return res.json(rows)
        });
})

app.get('/blogpostsMongo', async (req, res) => {


    const posts = await Post.find().sort({
        _id: -1
    });
    return res.json(posts)

})


app.get('/blogposts/:id', async (req, res) => {

    const query = `select * from blogpost where id = ?`;

    connection.query(query, [req.params.id],
        async (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            return res.json(rows)
        });
})

app.get('/blogpostsMongo/:id', async (req, res) => {


    const post = await Post.findById(req.params.id);
    return res.json(post)

})

app.post('/blogposts', async (req, res) => {
    if (!(req.body.title || req.body.content)) {
        return res.send({
            error: 'Title and content required'
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
        async (err, result) => {
            if (err) {

                console.log('Error: ' + err);
                return;
            }

            return res.send(result);
        });

});


app.post('/blogpostsMongo', async (req, res) => {
    if (!(req.body.title || req.body.content)) {
        return res.send({
            error: 'Title and content required'
        });
    }
    const data = {
        titel: req.body.title,
        content: req.body.content
    }

    const createdPosts = await Post.insertMany(data);

    return res.send(createdPosts);
});


app.get('/delete/:id', async (req, res) => {
    const query = `delete from blogpost where id = ?`;

    connection.query(query, [req.params.id],
        async (err, result) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            return res.json(result);
        });
})


app.get('/deleteMongo/:id', async (req, res) => {


    const deleted = await Post.deleteOne({
        "_id": req.params.id
    });
    return res.json(deleted)

})

app.put('/blogposts/:id', async (req, res) => {
    const query = `update blogpost set title = ?, content = ?
    where id = ?`;

    connection.query(
        query, [req.body.title, req.body.content, req.params.id],
        (err, result) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            return res.send({
                error: 0,
                result: result.id
            });
        });

})




app.listen(3000);