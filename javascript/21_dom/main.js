// let pets = [`Mooxie`, `Pickle`, `Hootchie`];

// pets.forEach(function(element) {
//     console.log(element)
// })


// let myObject = {
//     name : `Martina`,
//     age: 35,
//     city: `Berlin`
// }

// for (key in myObject) { 
//     console.log(key);
// }

// for (value in myObject) {
//     console.log(myObject[value]);
// }

let buttonObj = document.getElementById("btn");
let ulObj = document.getElementById("unLi");

console.log(buttonObj);
console.log(ulObj);


buttonObj.addEventListener(`click`, function (event) {

    console.log(buttonObj.style.background)

    if (buttonObj.style.background !== `aquamarine`) {
        buttonObj.style.background = `aquamarine`;
        buttonObj.innerText = `Get them out of here`;
        buttonObj.style.color = `darkslategrey`;
        ulObj.style.display = `block`;
    } else {
        buttonObj.style.background = `red`;
        buttonObj.innerText = `Button zum Toggeln`;
        buttonObj.style.color = `antiquewhite`;
        ulObj.style.display = `none`;
    }
})



let passwordObj = document.getElementById(`passwordInput`);
let checkObj = document.getElementById(`checkInput`);
let spanObj = document.getElementById(`spanInput`);

// function check() {
//     document.getElementById(`checkInput`).checked = true;
// }

// function uncheck() {
//     document.getElementById(`checkInput`).checked = false;
// }

checkObj.addEventListener(`click`, function () {

    if (this.checked === false) {
        passwordObj.setAttribute(`type`, `password`);
        spanObj.innerText=(` set checkmark to show password`).toUpperCase();
    } else {
        passwordObj.setAttribute(`type`, `text`);
        spanObj.innerText=(` remove checkmark to hide password`).toUpperCase();
    }
});