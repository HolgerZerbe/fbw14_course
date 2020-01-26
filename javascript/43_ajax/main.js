console.log(`43_ajax`);

const getDataObj = document.getElementById(`getData`);


getDataObj.onclick = function() {
    //   https://jsonplaceholder.typicode.com/users
    
    const xhr = new XMLHttpRequest(); 

    // http-Methode festlegen, in diesem Fall 
    // GET und Zieladresse festlegen

    xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users`);

    // die Funktion, die aufgerufen wird, wenn der
    // http-client chrome eine Antwort bekommt
    xhr.onload = function() {
        if (xhr.status === 200) {

            // wir empfangen Daten als String
            let response = xhr.responseText;

            // wir konvertieren den String in ein JS Objekt
            let responseObj = JSON.parse(response);

            console.log(responseObj);

            // Baue eine Tabelle mit 3 Spalten: id, username und email,
            // Die Anzahl der Zeilen soll die Anzahl aller Objekte im Array sein.
            
            let tableObj = document.createElement(`table`);
            document.body.append(tableObj);

            let thObj = document.createElement(`tr`);
            thObj.innerHTML = `<th>id</th><th>username</th><th>email</th>`;
            tableObj.appendChild(thObj);

            for (let i = 0; i <responseObj.length; i++) {
                let newtrObj = document.createElement(`tr`);
                newtrObj.innerHTML= `<td>${responseObj[i].id}</td><td>${responseObj[i].username}</td><td>${responseObj[i].email}</td>`;
                tableObj.appendChild(newtrObj);

            }                                       


        } 
        else {
            alert(`Error ` + xhr.status);
        }
    }
    xhr.send();
}

