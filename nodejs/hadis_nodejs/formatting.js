const messaging = require('./messaging.js');


module.exports = (array) => {

    const newArray = [];
    for (elem of array) {
        if (elem ==="--help") {
            messaging();
            return
        }

        //elem = elem.toLowerCase();
        //elem = elem.charAt(0).toUpperCase() + elem.substring(1, elem.length).toLowerCase();
        elem = elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
        newArray.push(elem);
        }

    let newString = newArray.join(' ');
    console.log(newString);
}