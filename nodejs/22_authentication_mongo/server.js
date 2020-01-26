const express = require(`express`);
const session = require(`express-session`);
const mongoose = require('mongoose');

const app = express();
const User = require(`./User`);


app.use(express.json());


require('dotenv').config();

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

app.get('/login', async (req, res) => {

    const user = await User.find({
        "email": req.query.email,
        "password": req.query.password
    });

    if (user.length > 0) {
        req.session.user = user[0].email;
        req.session.pages = user[0].pages;
        return res.send({
            message: `login succesfull`
        })
    } else {
        return res.send({
            message: 'login failed'
        });
    }


});




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
    // callback funktion 1

    if (req.session.pages.includes('content')) {
        return res.send('Secret area!');
    }

    return res.send(' Your are unauthorized');
});



app.get('/privateProfile', auth, (req, res) => {

    // callback function 2
    if (req.session.pages.includes('privateProfile')) {
        return res.send(`Private Profile area`);
    }

    return res.send(' Your are unauthorized')

});



app.listen(3000);