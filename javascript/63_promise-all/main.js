console.log(`63_promise-all`);

const imageNames = ["01d", "04n", "09d", "50n"];
const container = document.getElementById(`container`)

let makeFetch = collection => {
    let imagePromises = [];
    for (imageName of collection) {
        let promiseImage = new Promise(( resolve, reject) => {
            resolve(fetch(`http://openweathermap.org/img/w/${imageName}.png`, {
                mode : 'no-cors'
            }));
            console.log(promiseImage);
        })
        imagePromises.push(promiseImage);
    }
    return Promise.all(imagePromises);
}

let fetchImages = async(collection) => {
    let allImages = await makeFetch(collection);
    console.log(allImages)
    for (image of allImages) {
        let newImage = document.createElement(`img`);
        newImage.src = image.url;
        console.log(image)
        container.appendChild(newImage);

    }
}

fetchImages(imageNames);


// const container = document.getElementById('container');
// let makeFetch = collection => {
//     let imagePromises = [];
//     for (imageName of collection) {
//         let promiseImage = new Promise((resolve, reject) => {
//             resolve(fetch(`http://openweathermap.org/img/w/${imageName}.png`, {
//                 mode: 'no-cors'}
//             ));
//         });
//         imagePromises.push(promiseImage);
//     }
//     return Promise.all(imagePromises);
// }
// let fetchImages = async (ev, collection) => {
//     let allImages = await makeFetch(imageNames);
//     for (image of allImages) {
//         let newImage = document.createElement('IMG');
//         newImage.src = image.url;
//         container.appendChild(newImage);
//     }
// }
// fetchImages();