console.log(`39_Wecker`);

const song = new Audio('Wham! - Wake Me Up Before You Go-Go.mp3');

let weckerEingeschaltet = false;

const weckerStellenObj = document.getElementById(`weckerStellen`);
const weckerAktivieren = document.getElementById(`weckerAktivieren`);

const weckerStellenSpanObj = document.getElementById(`weckerStellenSpan`);
const weckerAnzeigenSpanObj = document.getElementById(`weckerAnzeigenSpan`);

const zuruckUhrObj = document.getElementById(`zuruckUhr`);
const alarmSpeichernobj = document.getElementById(`alarmSpeichern`);

const headlineObj = document.getElementById(`headline`);

const weckStundenObj = document.getElementById(`weckStunden`);
const weckMinutenObj = document.getElementById(`weckMinuten`);
const weckSekundenObj = document.getElementById(`weckSekunden`);

const weckerObj = document.getElementById(`wecker`)

const alarmObj = document.getElementById(`alarm`);
const alarmStoppenObj = document.getElementById(`alarmStoppen`);
const weckerAusschaltenSpan = document.getElementById(`weckerAusschaltenSpan`);
const mainObj = document.getElementsByClassName(`main`)[0];
const weckerIconObj = document.getElementsByClassName(`weckerIconClass`)[0];

let id = null;
let weckZeit = null;
let blinklicht = false;
let starter = 0;
weckerStellenObj.onclick = function () {

    weckerStellenSpanObj.style.display = `block`;
    weckerAnzeigenSpanObj.style.display = `none`;
    weckerAusschaltenSpan.style.display = `none`;

    headlineObj.innerText = `Wecker stellen`;

    if (weckerEingeschaltet === true) {
        weckerIconObj.style.display = `block`;
    } else {
        weckerIconObj.style.display = `none`;
    }
}

alarmSpeichernobj.onclick = function () {


    if (weckStundenObj.value === `` || weckMinutenObj.value === `` || weckSekundenObj.value === ``) {
        alert(`Ungültige Eingabe`);
    } else {
        headlineObj.innerText = `Wecker`;
        let helperStunde, helperMinute, helperSekunde;

        if (parseInt(weckStundenObj.value) >= 0 && parseInt(weckStundenObj.value) < 10) {
            helperStunde = "0" + weckStundenObj.value;
        } else {
            helperStunde = weckStundenObj.value
        }
        if (parseInt(weckMinutenObj.value) >= 0 && parseInt(weckMinutenObj.value) < 10) {
            helperMinute = "0" + weckMinutenObj.value;
        } else {
            helperMinute = weckMinutenObj.value
        }
        if (parseInt(weckSekundenObj.value) >= 0 && parseInt(weckSekundenObj.value) < 10) {
            helperSekunde = "0" + weckSekundenObj.value;
        } else {
            helperSekunde = weckSekundenObj.value
        }
        weckZeit = `${helperStunde} : ${helperMinute} : ${helperSekunde}`;
        weckerAnzeigenSpanObj.style.display = `block`;
        weckerStellenSpanObj.style.display = `none`;
        if (weckerEingeschaltet === true) {
            weckerIconObj.style.display = `block`;
        } else {
            weckerIconObj.style.display = `none`;
        }
    }

}

weckerAktivieren.onclick = function () {

    if (weckerEingeschaltet === false) {
        weckerAktivieren.innerText = `Wecker deaktivieren`;
        weckerAktivieren.classList.add(`cl_onlyRed`);
        weckerIconObj.style.display = `block`;
        weckerEingeschaltet = true;


    } else {
        weckerAktivieren.innerText = `Wecker aktivieren`;
        weckerAktivieren.classList.remove(`cl_onlyRed`);
        weckerIconObj.style.display = `none`;
        weckerEingeschaltet = false;
    }
}

zuruckUhrObj.onclick = function () {

    weckerStellenSpanObj.style.display = `none`;
    weckerAnzeigenSpanObj.style.display = `block`;
    weckerAusschaltenSpan.style.display = `none`;
    headlineObj.innerText = `Wecker`;
    if (weckerEingeschaltet === true) {
        weckerIconObj.style.display = `block`;
    } else {
        weckerIconObj.style.display = `none`;
    }
}

alarmStoppenObj.onclick = function () {
    weckerAusschalten();
}

function weckerAusschalten() {
    weckerAusschaltenSpan.style.display = `none`;
    weckerStellenSpanObj.style.display = `none`;
    weckerAnzeigenSpanObj.style.display = `block`;
    headlineObj.innerText = `Wecker`;
    if (weckerEingeschaltet === true) {
        weckerIconObj.style.display = `block`;
    } else {
        weckerIconObj.style.display = `none`;
    }
    song.pause();
    blinklicht = false;
    mainObj.classList.remove(`cl_yellow`);
    mainObj.classList.remove(`cl_red`);
    song.currentTime = 36.75;
    starter = 0;
}

function wecker() {

    if (id !== null) {
        alert(`Es gibt schon einen Intervall`)
        return;
    }
    id = setInterval(function () {
            var currentTime = new Date;
            let hours = currentTime.getHours();
            let minutes = currentTime.getMinutes();
            let seconds = currentTime.getSeconds();

            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            let aktuelleZeit = `${hours} : ${minutes} : ${seconds}`

            weckerObj.innerText = aktuelleZeit;
            alarmObj.innerHTML = `<p>Es ist jetzt</p>${aktuelleZeit}`;

            if (blinklicht) {   // Kurzschreibweise für (blinklicht === true)
                mainObj.classList.toggle("cl_yellow");
            }

            if (starter === 0 && weckZeit === aktuelleZeit && weckerEingeschaltet === true) {
                weckerAusschaltenSpan.style.display = `block`;
                weckerStellenSpanObj.style.display = `none`;
                weckerAnzeigenSpanObj.style.display = `none`;
                headlineObj.innerText = `Wecker ausschalten`;
                mainObj.classList.add(`cl_red`);
                blinklicht = true;
                song.currentTime = 36.75;
                song.play();
                starter++;
            }
            if (starter>0) {
                starter++
            }
            if (starter>3001) {
                weckerAusschalten();
            }     
        },
        100
    );
}

wecker();
