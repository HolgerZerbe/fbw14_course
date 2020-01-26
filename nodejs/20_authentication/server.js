const express = require(`express`);
const session = require(`express-session`);
const app = express();


// gibt jedem HTTP-Paket eine Cookie-ID in den header rein
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

app.get('/login', (req, res) => {
    
    if (req.query.username === 'holger' && req.query.password === 'felix') {
        
        req.session.user = "holger"; // Falls es einen Nutzer gibt, dann ist er auch eingeloggt

        return res.send({
            message : `login succesfull`
        })
    } else return res.send ({
        error: `login failed`
    })
    
});
// middlware, die
const auth = (req, res, next) => {
    if(!req.session.user) {
        return res.send(`Unauthorized`)
    }

    // next leitet den request weiter an die nächste
    // callback-funktion
    next()
}

app.get('/logout', auth, (req, res) => {
    
       delete req.session.user;
        return res.send({
            message : `logout succesfull`
        })
   
    
});


app.get('/content', auth, (req, res) => {
    // callback function 1
    return res.send(`Secret area`);
});


app.get('/privateProfile', auth, (req, res) => {
    // callback function 2
    return res.send(`Private Profile area`);
});



app.listen(3000);