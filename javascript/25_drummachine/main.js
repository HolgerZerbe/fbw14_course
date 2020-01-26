// AUFGABE:

// Vereinfache folgenden Code mit z.b. Arrays

let bpArr = []
for (i = 1; i < 7; i++) {
    bpArr.push(document.getElementById(`bp${i}`));
}


// const bp1Obj = document.getElementById(`bp1`);
// const bp2Obj = document.getElementById(`bp2`);
// const bp3Obj = document.getElementById(`bp3`);
// const bp4Obj = document.getElementById(`bp4`);
// const bp5Obj = document.getElementById(`bp5`);
// const bp6Obj = document.getElementById(`bp6`);

// const sound1ChoiseObj = document.getElementById(`sound1Choise`);
// const sound2ChoiseObj = document.getElementById(`sound1Choise`);
// const sound3ChoiseObj = document.getElementById(`sound1Choise`);
// const sound4ChoiseObj = document.getElementById(`sound1Choise`);
// const sound5ChoiseObj = document.getElementById(`sound1Choise`);
// const sound6ChoiseObj = document.getElementById(`sound1Choise`);


//let sound1 = new Audio(`808_drum_kit/song.mp3`)

let sounds = [];
sounds.push(new Audio(`808_drum_kit/kicks/0015.wav`));
sounds.push(new Audio(`808_drum_kit/kicks/0018.wav`));
sounds.push(new Audio(`808_drum_kit/snares/0027.wav`));
sounds.push(new Audio(`808_drum_kit/snares/0020.wav`));
sounds.push(new Audio(`808_drum_kit/percussion/0013.wav`));
sounds.push(new Audio(`808_drum_kit/percussion/0012.wav`));


// let sound1 = new Audio(`808_drum_kit/kicks/0015.wav`);
// let sound2 = new Audio(`808_drum_kit/kicks/0018.wav`);
// let sound3 = new Audio(`808_drum_kit/snares/0027.wav`);
// let sound4 = new Audio(`808_drum_kit/snares/0020.wav`);
// let sound5 = new Audio(`808_drum_kit/percussion/0013.wav`);
// let sound6 = new Audio(`808_drum_kit/percussion/0012.wav`);


// window.addEventListener("keydown", checkKeyPressed, false);

// function checkKeyPressed(e) {
//     if (e.keyCode == "82") {
//         bp1Obj.onclick();
//     } else
//     if (e.keyCode == "84") {
//         bp2Obj.onclick();}
//     else
//     if (e.keyCode == "90") {
//         bp3Obj.onclick();
//     }else
//     if (e.keyCode == "70") {
//         bp4Obj.onclick();
//     }else
//     if (e.keyCode == "71") {
//         bp5Obj.onclick();
//     }else
//     if (e.keyCode == "72") {
//         bp6Obj.onclick();
//     }
// }


window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "82") {
        bpArr[0].onclick();
    } else
    if (e.keyCode == "84") {
        bpArr[1].onclick();
    } else
    if (e.keyCode == "90") {
        bpArr[2].onclick();
    } else
    if (e.keyCode == "70") {
        bpArr[3].onclick();
    } else
    if (e.keyCode == "71") {
        bpArr[4].onclick();
    } else
    if (e.keyCode == "72") {
        bpArr[5].onclick();
    }
}



for (let i = 0; i < 6; i++) {

    bpArr[i].onclick = function () {

        if (sounds[i].currentTime !== 0) {
            sounds[i].pause();
            sounds[i].currentTime = 0;
        }
        sounds[i].play();
    }
};
// bp2Obj.onclick = function () {

//     if (sound2.currentTime !== 0) {
//         sound2.pause();
//         sound2.currentTime = 0;
//     }
//     sound2.play();
// };
// bp3Obj.onclick = function () {

//     if (sound3.currentTime !== 0) {
//         sound3.pause();
//         sound3.currentTime = 0;
//     }
//     sound3.play();
// };
// bp4Obj.onclick = function () {

//     if (sound4.currentTime !== 0) {
//         sound4.pause();
//         sound4.currentTime = 0;
//     }
//     sound4.play();
// };
// bp5Obj.onclick = function () {

//     if (sound5.currentTime !== 0) {
//         sound6.pause();
//         sound5.currentTime = 0;
//     }
//     sound5.play();
// };
// bp6Obj.onclick = function () {

//     if (sound6.currentTime !== 0) {
//         sound6.pause();
//         sound6.currentTime = 0;
//     }
//     sound6.play();
// };


// 6. JavaScript
// Erstelle 6 Textboxen unterhalb des Bouncepads,
// bei denen Du festlegen kannst, welcher Button
// welche Mp3 abspielt. Benutze dann die Werte
// aus den Input-Boxen um z.B. Den Sound von
// Button 1 von „ kicks/0015.wav“ auf
// „kicks/0012.wav“ zu ändern.