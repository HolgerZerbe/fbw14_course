// Aufgabe:

// Wenn der Nutzer auf Count to 5 - Callbacks klickt,
// sollen die Zahlen 1 bis 5 mit 1-sekundigem Abstand
// als H1 Element dem numbers-Div hinzugefügt werden 

const numbersObj = document.getElementById('numbers');
let counter = 1;
let myfunction;

const countdownCallbacks = () => {
    myfunction = setInterval(counting, 1000);
}

const counting = () => {
    if (counter >= 5) {
        stop();
    }
    const newh1 = document.createElement('h1');
    newh1.innerHTML = counter;
    numbersObj.appendChild(newh1);
    counter++;
}

const stop = () => {
    clearInterval(myfunction);
}

// promise

const countdownPromise = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(
            () => {

                numbersObj.innerHTML+=`<h1>${counter}</h1>`
                counter++;
                // hier ist das Promise resolved
                resolve();
            },
            1000
        )
    });
}

const countdownPromises = () => {
    countdownPromise()
    .then(countdownPromise)
    .then(countdownPromise)
    .then(countdownPromise)
    .then(countdownPromise)
}


const countdownAsyncAwait = async () => {
    await countdownPromise();
    await countdownPromise();
    await countdownPromise();
    await countdownPromise();
    await countdownPromise();
}

