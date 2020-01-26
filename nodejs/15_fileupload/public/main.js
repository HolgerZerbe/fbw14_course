console.log(`Hallo World from Frontend`);

const btnSendFileObj = document.getElementById(`btnSendFile`);

btnSendFileObj.onclick = async () => {
    const sampleFileObj = document.getElementById(`sampleFile`);
    console.log(sampleFileObj);

    try {
        const data = new FormData;
        data.append('x', '5')
        data.append('hallo', 'world')
        data.append('imageUpload', sampleFileObj.files[0])

        const response = await fetch('http://localhost:3000/upload', {
          
            method: 'POST',
            body: data


        });

        if (response.ok) {
            
            const responseJson = await response.json();

            const responseStr = JSON.stringify(responseJson);
        }
    } catch (e) {
        console.log('Error: ' + e);
    }
}