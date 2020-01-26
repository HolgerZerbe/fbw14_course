console.log(`61_fetch-api`);

fetch(`https://pbs.twimg.com/media/DbiFIr_U8AAupIa?format=jpg&name=large`)
//fetch(`https://www.slideshare.net/adonatwork/efficient-contextsensitive-output-escaping-for-javascript-template-engines`)
//fetch(`https://image.slidesharecdn.com/appsecusa15-efficientcontext-sensitiveoutputescapingforjavascripttemplateengines2-150925211204-lva1-app6891/95/efficient-contextsensitive-output-escaping-for-javascript-template-engines-27-638.jpg?cb=1443215673`)
.then(imageResponse => {
    console.table(imageResponse);

    let newImage = document.createElement(`img`);
    newImage.src = imageResponse.url;
    document.body.appendChild(newImage);

})
