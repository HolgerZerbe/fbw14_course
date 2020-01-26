console.log(`29_Shoppinglist`);

const giftObj = document.getElementById(`gift`);
const removelastgiftObj = document.getElementById(`removelastgift`);
const addgiftObj = document.getElementById(`addgift`);
const removefirstgiftObj = document.getElementById(`removefirst`);
const removeallObj = document.getElementById(`removeall`);
const removeObj = document.getElementById(`remove`);
const sumObj = document.getElementById(`sum`);

const shoppinglistObj = document.getElementById(`shoppinglist`);

// addgiftObj.onclick = function () {
//     let listitem = document.createElement(`li`);
//     listitem.innerText = giftObj.value;
//     shoppinglistObj.appendChild(listitem);
//     giftObj.value = "";

// }

const listitemObj = document.getElementsByTagName(`li`);

removelastgiftObj.onclick = function () {
    if (listitemObj.length > 0) {
        listitemObj[listitemObj.length - 1].remove();
       basket.pop() 
    } else {
        alert(`Nothing to remove`);
    }
}

removefirstgiftObj.onclick = function () {
    if (listitemObj.length > 0) {
        listitemObj[0].remove();
        basket.shift()
    } else {
        alert(`Nothing to remove`);
    }
}

removeallObj.onclick = function () {
    for (let i = listitemObj.length - 1; i >= 0; i--) {
        listitemObj[i].remove();
    }
    basket = [];
}


removeObj.onclick = function () {
    for (let i = 0; i < listitemObj.length; i++) {
        if (giftObj.value === listitemObj[i].innerHTML) {
            listitemObj[i].remove();
            basket.splice(i,1);-+
            i--;
        }
    }
}


let exampleArray = [2, 4, 8, 9, 10, 11, 10, 10, 12, 10, 23];


function deleteZahl(array, zahl) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== zahl) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(exampleArray);
console.log(deleteZahl(exampleArray, 10));
console.log(deleteZahl(exampleArray, 8));


const basket = [];

addgiftObj.onclick = function () {
    if (giftObj.value === "") {
        alert(`Keine gültige Eingabe`)
    } else {

        let listitem = document.createElement(`li`);
        listitem.innerText = giftObj.value;

        let item = {
            name: giftObj.value,
            price: (Math.floor(Math.random() * 100)) / 100
        }
        basket.push(item)
        shoppinglistObj.appendChild(listitem);
        giftObj.value = "";

        return basket;
    }
}

sumObj.onclick = function () {
    let totalSum = 0;
    for (let i = 0; i < basket.length; i++) {
        totalSum += basket[i].price;
    }

    alert(`Die gesamte Einkaufssumme beträgt ${(Math.round(totalSum*100))/100}`);
}