let bodyObj = document.body;
let newsletterObj = document.getElementById(`newsletter`);
let buttonObj = document.getElementById("btn");


// function mouseoutBodyObj() {

//     bodyObj.style.background = "grey";                             
//     newsletterObj.style.display = `block`;
//     event.target.removeEventListener(`mouseout`, mouseoutBodyObj);
// }

// // function removeMouseoutBodyObj(){
// //     bodyObj.removeEventListener(`mouseout`, mouseoutBodyObj, false);

// // }



// bodyObj.addEventListener(`mouseout`, mouseoutBodyObj)
// //bodyObj.removeEventListener(`mouseout`, mouseoutBodyObj);

// buttonObj.addEventListener(`click`, function () {
//     bodyObj.style.background = "white";
//     newsletterObj.style.display = `none`;
//     //this.removeMouseoutBodyObj();

})

document.body.addEventListener('mouseout', function mouseoutBodyObj(event) {
    if (event.clientY < 10) {
        bodyObj.style.background = 'gray';
        newsletterObj.style.display = 'block';
        event.currentTarget.removeEventListener('mouseout', mouseoutBodyObj);
    }
});