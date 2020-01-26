console.log(`62_openweatherdata`);
const townObj = document.getElementById(`town`);
const townBoxWrapperObj = document.getElementsByClassName(`townBoxWrapper`)[0];
const buttonObj = document.getElementById(`button`);

let authToken = "16d4785f9c10724266053adb3c29dcfd";

weatherReport = async (cityToSearch) => {
    try {
        townObj.value = "";
        let urlServiceAddress = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=${authToken}&&&lang=DE&units=metric`;

        let result = await fetch(urlServiceAddress);

        console.log(result);
        let weatherData = await result.json();
        // return JSON.parse(weatherResponse); funktioniert nicht auf das response, deswegen .json()
        console.log(weatherData)
        createTownBox(cityToSearch, weatherData)

    } catch (e) {
        console.log(e);
    }
}

buttonObj.onclick = () => {
    weatherReport(townObj.value);
}

createTownBox = (cityNameGerman, weather) => {
    console.log(weather);
    newDiv = document.createElement(`div`);
    newDiv.classList.add(`townBox`);
    //let bgColor = changeBackground(Math.round(10 * (weather.main.temp - 273.15)) / 10);
    let bgColor = changeBackground(Math.round(10 * weather.main.temp) / 10);
    newDiv.style.backgroundImage = bgColor;
    newDiv.innerHTML = `<h2>${cityNameGerman} ${weather.sys.country}</h2>
    <p><span class="degree">${Math.round(10* weather.main.temp) /10}</span> °C</p>
    <p class="description">${weather.weather[0].description}</p><div style="background-image: url('http://openweathermap.org/img/w/${weather.weather[0].icon}.png')" class="foto"></div>`;
    townBoxWrapperObj.appendChild(newDiv);
}

changeBackground = (citytemp) => {
    let color;
    if (citytemp < 0) {
        color = "radial-gradient(white, lightgrey)";
    } else if (citytemp <= 10) {
        color = "radial-gradient(grey, lightgrey)";
    } else if (citytemp <= 20) {
        color = "radial-gradient(purple, lightgrey)";
    } else if (citytemp <= 30) {
        color = "radial-gradient(deepskyblue, lightgrey)";
    } else if (citytemp <= 35) {
        color = "radial-gradient(yellow, lightgrey)";
    } else if (citytemp <= 40) {
        color = "radial-gradient(orange, lightgrey)";
    } else {
        color = "radial-gradient(red, lightgrey)";
    }
    return color;
}