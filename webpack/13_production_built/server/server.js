const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

//
// zum definieren von umgebungsvariablen
//
// $ export MODE = PRODUCTION




// ist umgebungsvariable MODE = PRODUCTION
// ist umgebungsvariable MODE = DEVELOPEMENT



if (process.env.MODE === 'PRODUCTION') {
    console.log(`Server wird im Produktionsmodus gestartet`)
    app.use('/', express.static(__dirname + '/../dist'));
} else {
    console.log(`Server wird im Development-Modus gestartet`)

}

// die api-endpoints sollen im Produktionsserver drin bleiben
// d.h. der produktionsserver hostel html/cssjs und api-endpoints
app.get('/halloworld', (req, res) => {
    return res.send({
        error: 0,
        message: 'hallo world'
    });
});

app.listen(3000);