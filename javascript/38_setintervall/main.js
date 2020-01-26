console.log(`38_SetIntervall`);

const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const timeObj = document.getElementById('time')

let id = null;

btnStart.onclick = function () {
    if (id !== null) {
        alert(`Es gibt schon einen Intervall`)
        return;
    }
    id = setInterval(function () {
            var currentTime = new Date;
            let hours = currentTime.getHours();
            let minutes = currentTime.getMinutes();
            let seconds = currentTime.getSeconds();
            
            if (parseFloat(hours) < 10) {
                hours = "0" + seconds;
            }
            if (parseFloat(minutes) < 10) {
                minutes = "0" + seconds;
            }
            if (parseFloat(seconds) < 10) {
                seconds = "0" + seconds;
            }

            timeObj.innerText = `Uhrzeit: ${hours} : ${minutes} : ${seconds}`






        },
        1000
    );
}

btnStop.onclick = function () {
    clearInterval(id);
    id = null;
}