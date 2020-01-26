const express = require('express');
const app = express();

app.use(express.json());

let allComments = [{ name: "John", text:"Hi whatsup"}, { name: "Bob", text:"How are you?" }, { name :"Mary", text: "Good weather today!"}]


app.get ('/comments', (req, res) => {
    return res.send(allComments);
});

app.post ('/comments', (req, res) => {

    allComments.push(req.body)
    return res.send(allComments);
});

app.delete('/comments/:id', (req, res) => {

    const newComments = allComments.filter((element, index) => index !== parseInt(req.params.id)) 
    allComments = [...newComments]
    return res.send(allComments);
});


console.log ('Server gestartet')


app.listen(3001);