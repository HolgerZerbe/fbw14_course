console.log(`60_callback-hell`);

let sitsOnTheIronThrone = `Cersei`;


// Callback-Hell!!!

const changeRulerCallbackHell = () => {
    console.log(sitsOnTheIronThrone);
    setTimeout(() => {
        sitsOnTheIronThrone = "Danny";
        console.log(sitsOnTheIronThrone);
        setTimeout(() => {
            sitsOnTheIronThrone = "Jon Snow";
            console.log(sitsOnTheIronThrone);
            setTimeout(() => {
                sitsOnTheIronThrone = "Euron Greyjoy";
                console.log(sitsOnTheIronThrone);
                setTimeout(() => {
                    sitsOnTheIronThrone = "Jamie Lennister";
                    console.log(sitsOnTheIronThrone);
                    setTimeout(() => {
                        sitsOnTheIronThrone = "Nightking";
                        console.log(sitsOnTheIronThrone);
                    }, 1000)
                }, 2000);
            }, 2000);
        }, 3000);
    }, 5000);
}

//changeRulerCallbackHell();


let currentRuler = "Cersei Lannister";
console.log(currentRuler);

let changeRuler = (ruler, time) => {
    let newRuler = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ruler ==="Jon Snow") {
                reject(`Uneheliche Kinder dürfen nicht den Thron besteigen`); // reject(ruler)  // Misserfolgsfall
            }
            // currentRuler = ruler;
            // console.log(currentRuler);
            resolve(ruler); //Erfolgsfall
            
        }, time)
    })
    console.log(newRuler);
    return newRuler;

}
// changeRuler(`Danny`, 3000).then(
//     function() {
//         console.log(currentRuler);
//     }
// )

changeRuler(`Danny`, 5000)
    .then(data => {
        console.log(data);
        return changeRuler(`Jon Snow`, 3000);
    })
    .then(data => {
        console.log(data);
        return changeRuler(`Euron Greyjoy`, 2000);
    })
    .then(data => {
        console.log(data);
        return changeRuler(`Jamie Lennister`, 2000);
    })
    .then(data => {
        console.log(data);
        return changeRuler(`Nightking`, 1000);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.warn(error);
    })


    const allRulers = ['Cersei Lannister 2', 'Danny 2', 'Jon Snow 2', 'Euron Greyjoy 2', 'Jaimie Lannister 2', 'nightsKing 2'];
    const times = [0, 5000, 3000, 2000, 2000, 1000];
    let index = 0;
    let currentRuler2;
    const changeRuler2 = (rulersName, time) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(rulersName);
        }, time)
      })
    }
    const wrapperRuler = (rulersName, time) => {
      changeRuler2(rulersName, time)
          .then(name => {
            currentRuler2 = name;
            console.log(currentRuler2);
            index++;
            if (index === allRulers.length) {
              return false;
            }
            return wrapperRuler(allRulers[index], times[index]);
          })
    }
    wrapperRuler(allRulers[index], times[index]);