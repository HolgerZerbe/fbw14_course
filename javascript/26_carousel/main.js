const leftsidebarObj = document.getElementById(`leftsidebar`);
const rightsidebarObj = document.getElementById(`rightsidebar`);

const fotoObj = document.querySelectorAll(".foto");

console.log(fotoObj);

var bildIndex;

leftsidebarObj.onclick = function () {
    if (bildIndex === undefined) {
        bildIndex = 1
    }
    for (let i = 0; i < fotoObj.length; i++) {

        if (i === bildIndex) {
            fotoObj[i].style.height = "100%";

        } else {
            fotoObj[i].style.height = '0%';
        }
    }
    bildIndex++;

    if (bildIndex === fotoObj.length) {
        bildIndex = 0;
    }

}



rightsidebarObj.onclick = function () {
    if (bildIndex === undefined) {
        bildIndex = 1;
    }
    for (let i = 0; i < fotoObj.length; i++) {

        if (i === bildIndex) {
            fotoObj[i].style.height = "100%";

        } else {
            fotoObj[i].style.height = '0%';
        }
    }
    bildIndex--;

    if (bildIndex < 0) {
        bildIndex = fotoObj.length - 1;
    }

}