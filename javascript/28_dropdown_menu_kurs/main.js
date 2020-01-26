const links = document.querySelectorAll('.links');
const dropDownObjects = document.querySelectorAll('.dropdown');

//console.log(links);
//console.log(dropDownObjects);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        for (let j = 0; j < links.length; j++) {
            if (i === j) {
                links[j].classList.toggle('clicked');
                dropDownObjects[j].classList.toggle('shown');
            } else {
                links[j].classList.remove('clicked');
                dropDownObjects[j].classList.remove('shown');
            }
        }
    });
}