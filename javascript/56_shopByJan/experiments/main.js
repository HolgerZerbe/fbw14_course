console.log(`56_ShopByJan/experiments`);

const buttonObj = document.getElementsByTagName(`button`);


buttonObj[0].onclick = async () => {
    // 1. fetch-Aufruf abfeuern:
    const response = await fetch('http://localhost:3000/product');
    // 2. das Objekt als json interpretieren -> wir bekommen ein Objekt:
    const responseJson = await response.json();
    // 3. als String darstellen:

    const responseStr = JSON.stringify(responseJson);

    console.log(responseStr);
}
 
buttonObj[1].onclick = async () => {
    // 1. fetch-Aufruf abfeuern:
    const response = await fetch('http://localhost:3000/product?category=Movies');
    // 2. das Objekt als json interpretieren -> wir bekommen ein Objekt:
    const responseJson = await response.json();
    // 3. als String darstellen:
    const responseStr = JSON.stringify(responseJson);

    console.log(responseStr);
}
 
buttonObj[2].onclick = async () => {

    let body = {
        productids: [1,2,3]
    };

    try {
        const response = await fetch('http://localhost:3000/order', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        });

        if (response.ok) {

            // falls die http-Antwort 200 oder 304 war
            alert('Bestellung übertragen.');

            // nachfolgender Code nur zum Darstellen des Response auf der Console.
            const responseJson = await response.json();
            const responseStr = JSON.stringify(responseJson);
            console.log(responseStr);
            
        }

    } catch (e) {
        console.log('Error: ' + e);
    }

}