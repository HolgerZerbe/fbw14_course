console.log(`48_Task_Promises_asyncawait`);

// fetch(`https://jsonplaceholder.typicode.com/todos/1`)
// // asynchrone Funktion kovertiert object nach json -> noch ein promise
// .then((response)=> {return response.json() // Konvertierungs-Promise
// })// was response.json() resolved, wird dann zu dem Parameter json, weil response.jason() ist ein Promise
// .then((json) => {
//     console.log(json);
// })


// Aufgabe:

// Konvertiere diese Promise-Syntax in die neue ES6-Syntaxconst 



(async () => {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);

        if(result.status === 404){
            throw `adresse ungültig`;
        }

        // hier hat result definitiv einen Wert
        // console.log(result.json()); // wieder ein Promise, hat keine Daten für uns

        const str = await result.json();
        console.log(str);
    }
    catch(e) {
     console.log(`Error ` + e)
    }
})();