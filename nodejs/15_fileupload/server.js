const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// alle Dateien, die im Ordner public drin sind,
// können von außen über den Dateinamen geladen werden
// /-> lädt aiutomatisch index.html
// /main.js -lädt die Datei main.js
// /style.css -> lädt die Datei style.css
app.use('/', express.static(`public`));

// Wir benutzen fileUpload-middleware zum parsen
// des Request-bodys
app.use(fileUpload());


app.post('/upload', function(req, res) {
    if (!req.files) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.imageUpload;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(__dirname + '/hallo.jpg', function(err) {
      if (err)
        return res.status(500).send({error: err});
  
      return res.send({error: 0, message: 'File uploaded!'});
    });
  });

console.log(`Hallo World from Backend`);
app.listen(3000);