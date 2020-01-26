// 6. JavaScript
// Erstelle 6 Textboxen unterhalb des Bouncepads,
// bei denen Du festlegen kannst, welcher Button
// welche Mp3 abspielt. Benutze dann die Werte
// aus den Input-Boxen um z.B. Den Sound von
// Button 1 von „ kicks/0015.wav“ auf
// „kicks/0012.wav“ zu ändern.

let classic = [];
for (let i = 1; i <= 20; i++) {
    if (i < 10) {
        classic.push(`808_drum_kit/classic_808/000${i}.wav`);
    } else {
        classic.push(`808_drum_kit/classic_808/00${i}.wav`);
    }
}

let hihats = [];
for (let i = 1; i <= 44; i++) {
    if (i < 10) {
        hihats.push(`808_drum_kit/hihats/000${i}.wav`);
    } else {
        hihats.push(`808_drum_kit/hihats/00${i}.wav`);
    }
}

let kicks = [];
for (let i = 1; i <= 40; i++) {
    if (i < 10) {
        kicks.push(`808_drum_kit/kicks/000${i}.wav`);
    } else {
        kicks.push(`808_drum_kit/kicks/00${i}.wav`);
    }
}

let percussion = [];
for (let i = 1; i <= 24; i++) {
    if (i < 10) {
        percussion.push(`808_drum_kit/percussion/000${i}.wav`);
    } else {
        percussion.push(`808_drum_kit/percussion/00${i}.wav`);
    }
}

let snares = [];
for (let i = 1; i <= 61; i++) {
    if (i < 10) {
        snares.push(`808_drum_kit/snares/000${i}.wav`);
    } else {
        snares.push(`808_drum_kit/snares/00${i}.wav`);
    }
}


let allSounds = classic.concat(hihats, kicks, percussion, snares);
console.log(allSounds);

let sounds = [];

sounds.push(new Audio(`${allSounds[0]}`));
sounds.push(new Audio(`808_drum_kit/kicks/0018.wav`));
sounds.push(new Audio(`808_drum_kit/snares/0027.wav`));
sounds.push(new Audio(`808_drum_kit/snares/0020.wav`));
sounds.push(new Audio(`808_drum_kit/percussion/0013.wav`));
sounds.push(new Audio(`808_drum_kit/percussion/0012.wav`));


console.log(sounds[0]);



const soundChoiceObj = document.getElementsByTagName(`select`);

//console.log(soundChoiceObj);

for (let i = 0; i < soundChoiceObj.length; i++) {
    createOptions(i);
}


function createOptions(selectNumber) {

    for (let i = 0; i < allSounds.length; i++) {
        let newOption = document.createElement(`option`);
        //console.log(newOption);
        newOption.innerText = allSounds[i];
        soundChoiceObj[selectNumber].appendChild(newOption);
    }
}


let bpArr = []
for (i = 1; i < 7; i++) {
    bpArr.push(document.getElementById(`bp${i}`));
}

const btnObj = document.getElementById(`btn`);


btnObj.onclick = setSounds();




function newSounds(){
    console.log(soundChoiceObj[0].value);
    console.log(soundChoiceObj[1].value);
    console.log(soundChoiceObj[2].value);
    console.log(soundChoiceObj[3].value);
    console.log(soundChoiceObj[4].value);
    console.log(soundChoiceObj[5].value);


    let newSounds = [];
    newSounds[0] = new Audio(`${soundChoiceObj[0].value}`);
    newSounds[1] = new Audio(`${soundChoiceObj[1].value}`);
    newSounds[2] = new Audio(`${soundChoiceObj[2].value}`);
    newSounds[3] = new Audio(`${soundChoiceObj[3].value}`);
    newSounds[4] = new Audio(`${soundChoiceObj[4].value}`);
    newSounds[5] = new Audio(`${soundChoiceObj[5].value}`);

    return newSounds;
};

function setSounds() {
    newSounds()};


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