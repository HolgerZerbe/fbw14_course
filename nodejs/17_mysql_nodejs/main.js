// mysql client bibliothek
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'holger',
    password: 'password',
    database: 'online_shop'
});


const executeQuery1 = () => {
    // query1: Daten lesen:
    const query1 = `select * from customers`;

    connection.query(
        query1,
        (err, rows) => {
            if (err) {
                // falls ein Fehler definiert wurde, dann schauen wir mal
                // was schiefgelaufen ist evtl. falsche mysql syntax
                console.log('Error: ' + err);
                return;
            }
            console.log(rows);
        });
}

executeQuery1();


const executeQuery2 = () => {
    // query2: Daten updaten:
    const query2 = `update customers set firstname = ?, lastname = ? where firstname = 'Max'`;

    connection.query(
        query2, ['Bernd', 'Hopfchen'],
        (err, rows) => {
            if (err) {
                // falls ein Fehler definiert wurde, dann schauen wir mal
                // was schiefgelaufen ist evtl. falsche mysql syntax
                console.log('Error: ' + err);
                return;
            }
            console.log(rows);
        });
}

executeQuery2();

const executeQuery3 = () => {
    // query3: Daten einfügen:
    const query3 = `insert into customers (
        id, firstname, lastname, registered, birthdate, phone, city, street, postal, email
        )
    values (
        ?,?,?,now(),?,?,?,?,?,?
        )`;

    connection.query(
        query3, [10002, // falls AI (autoimcrement) bei Datenbank enabled ist, dann brauchen wir keine ID
             'Harvey', 'Hase', '2012-10-29','49306543210', 'Berlin','Rufacher Weg 13','12349', null],
        (err, rows) => {
            if (err) {
                // falls ein Fehler definiert wurde, dann schauen wir mal
                // was schiefgelaufen ist evtl. falsche mysql syntax
                console.log('Error: ' + err);
                return;
            }
            console.log(rows);
        });
}

executeQuery3();

const executeQuery4 = () => {
    // query4: Daten löschen:
    const query4 = `delete from customers where city = 'Dortmund'`;

    connection.query(
        query4,
        (err, rows) => {
            if (err) {
                // falls ein Fehler definiert wurde, dann schauen wir mal
                // was schiefgelaufen ist evtl. falsche mysql syntax
                console.log('Error: ' + err);
                return;
            }
            console.log(rows);
        });
}

executeQuery4();