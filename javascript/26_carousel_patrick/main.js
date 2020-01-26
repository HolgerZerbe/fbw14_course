let bilderObj = document.querySelectorAll('img')

// const silderObj1 = document.getElementById('slider1');
// const silderObj2 = document.getElementById('slider2');

let left = document.querySelector('#slider1');
let right = document.querySelector('#slider2');
let score = 0;


right.addEventListener('click', function () {
    score++;
    if (score === bilderObj.length) {
        score = 0;
    }
    for (let i = 0; i < bilderObj.length; i++) {
        
        bilderObj[i].style.transform = `translate(${score * -640}px, 0)`;
    }
})

left.addEventListener('click', function () {
    score--;
    if (score < 0) {
        score = bilderObj.length - 1;
    }
    for (let i = bilderObj.length-1; i >=0; i--) {
        bilderObj[i].style.transform = `translate(${score * -640}px, 0)`;
    }
})
