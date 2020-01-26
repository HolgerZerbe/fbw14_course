const express = require('express');
const app = express();

app.use(express.json());

app.get ('/hallo', (req, res) => {
    return res.send({message: "Hallo from Backend"});
});

app.get ('/users', (req, res) => {
    return res.send({message: "Hallo from Backend"});
});

app.post ('/users', (req, res) => {
    return res.send({...req.body, id:42});
});

app.delete ('/users/:id', (req, res) => {
    return res.send({message: `user ${req.params.id} deleted`});
});

console.log ('Server gestartet')


app.get ('/users', (req, res) => {
    return res.send({message: "Hallo from Backend"});
});
app.listen(3001);