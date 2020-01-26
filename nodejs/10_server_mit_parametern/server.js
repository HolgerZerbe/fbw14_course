const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
    return res.send('Hallo von 10_server_mit_parametern')
})

// nach /hallo bis zum nächsten Slash ist alles in
// reg.params.name gespeichert
app.get(`/hallo/:name`, (req, res) => {
    return res.send(`
    Hi ${req.params.name}`)
})


const products = [{
        id: 1001,
        name: 'Geforce GTX 1050 TI',
        price: 150
    },
    {
        id: 1002,
        name: 'Geforce GTX 1080 TI',
        price: 190
    },
    {
        id: 1003,
        name: 'Geforce GT 730',
        price: 30
    },
    {
        id: 1004,
        name: 'Vodoo 1',
        price: 1
    },
    {
        id: 1005,
        name: 'HP NVIDIA Quadro GV100',
        price: 17000
    }
];

// TASK

// 1) Erstelle eine neue Route /poductdetail die ein Parameter id
//    erwartet. Auf Basis der id wird dem Besucher der Webseite 
//    alles zum Produkt augegeben als String.
// 2) Erstelle eine neue Route /products, die alle Produkte als 
//    HTML-Tabelle ausgibt.

app.get(`/productdetails/:id`, (req, res) => {
    for (elem of products) {
        if (elem.id == req.params.id) {
            return res.send(`id = ${elem.id} <br/> name = ${elem.name} </br> price = ${elem.price}`);
        }
    }
    return res.send (`Product ID not found!`);
});

app.get(`/products`, (req,res) => {
    let table = `<html><head></head><body><table><tr><th>id</th><th>name</th><th>price</th></tr>`

    for (elem of products) {
        const tableRow = `<tr><td>${elem.id}</td><td>${elem.name}</td><td>${elem.price}</td></td>`;
        table += tableRow;
    }

    let tableEnd = `</table></body></html>`
    table +=tableEnd;

    return res.send(table);

})


app.listen(3000);