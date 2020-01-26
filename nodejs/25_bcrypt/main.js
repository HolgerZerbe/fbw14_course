const bcrypt = require(`bcrypt`);

let myPassword = "blablaPassword_";
// let myPassword = "1234";

bcrypt.hash(myPassword, 10, (err, result) => {
    let hash = result;
    console.log(`${myPassword} = ${hash}`);
    // hash wurde generiert, jetzt wollen wir testen

    let passwordLogin = "blablaPassword_";
    bcrypt.compare(passwordLogin, hash, (err, resultCompare) => {
        if (resultCompare) {
            console.log(`passwords match!`);
        }else {
            console.log(`NO MATCH!`)
        }
    })

})