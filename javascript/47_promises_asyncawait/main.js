console.log(`47_promises_asyncawait`);

const addNumberBtnObj = document.getElementById(`addNumberBtn`);
const addSomeNumbersDelayedCallbackBtnObj = document.getElementById(`addSomeNumbersDelayedCallbackBtn`);
const addSomeNumbersDelayedPromiseBtnObj = document.getElementById(`addSomeNumbersDelayedPromiseBtn`);
const addSomeNumbersDelayedAsyncAwaitBtnObj = document.getElementById(`addSomeNumbersDelayedAsyncAwaitBtn`);


let count = 1;


const addNumber = () => {
    const h3Obj = document.createElement('h3');
    h3Obj.innerHTML = count;

    const numberObj = document.getElementById(`numbers`);
    numberObj.appendChild(h3Obj);

    count++;
}



//  Callback of Hell!

const addSomeNumbersDelayedCallback = () => {
    setTimeout(
        () => { // Rufe diese Funktion auf nach einer Sekunde
            addNumber();
            setTimeout(
                () => { // Rufe diese Funktion auf nach einer Sekunde
                    addNumber();
                    setTimeout(
                        () => { // Rufe diese Funktion auf nach einer Sekunde
                            addNumber();
                            setTimeout(
                                () => { // Rufe diese Funktion auf nach einer Sekunde
                                    addNumber();
                                    setTimeout(
                                        () => { // Rufe diese Funktion auf nach einer Sekunde
                                            addNumber();
                                        },
                                        1000
                                    );
                                },
                                1000
                            );
                        },
                        1000
                    );
                },
                1000
            );
        },
        1000
    );
}


addNumberBtnObj.onclick = () => {
    addNumber();
}

addSomeNumbersDelayedCallbackBtnObj.onclick = () => {
    addSomeNumbersDelayedCallback();
}

addSomeNumbersDelayedPromiseBtnObj.onclick = () => {
    addSomeNumbersDelayedPromise();
}

addSomeNumbersDelayedAsyncAwaitBtnObj.onclick = () => {
    addSomeNumbersDelayedAsyncAwait();
}

// Promise ist ein Container für eine asynchrone Funktion
addNumberDelayedPromise = () => {
    // Promise-Container
    return new Promise((resolve, reject) => {
        // die Asynchrone-Funktion
        setTimeout(
            () => {
                addNumber();
                // resolve();
                
                if(Math.random() > 0.9) {
                    reject();
                }
                else {
                    resolve();
                }
            },
            1000
        );
    });
}

const addSomeNumbersDelayedPromise = () => {
    // addNumberDelayedPromise() // returned einen Promise
    // .then(() => { alert('Ok, hat geklappt') }) // then returned nochmal das Promise-Object
    // .catch((err) => {
    //     alert('es gab einen fehler: ' + err);
    // })

    addNumberDelayedPromise() // returned einen Promise
    .then(addNumberDelayedPromise)
    .then(addNumberDelayedPromise) // then returned nochmal das Promise-Object
    .then(addNumberDelayedPromise) 
    .then(addNumberDelayedPromise) 
    .catch((err) => {
        alert('Error beim Promise');
    })
}

const addSomeNumbersDelayedAsyncAwait = async () => {

    // syntactic sugar for .then
    try {
        await addNumberDelayedPromise();
        await addNumberDelayedPromise();
        await addNumberDelayedPromise();
        await addNumberDelayedPromise();
    }
    // syntactic sugar for .catch
    catch(e) {
        alert(`Fehler, Promise rejected: ` +e);

    }
}