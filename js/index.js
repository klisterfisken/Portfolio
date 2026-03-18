const frames = document.querySelectorAll('.anim-frame');
const scrollSpeed = 52;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    let index = Math.floor(scrollY / scrollSpeed);

    if (index > frames.length - 1) index = frames.length - 1;

    frames.forEach((frame, i) => {
        if (i === index) {
            frame.classList.add('active');
        } else {
            frame.classList.remove('active');
        }
    });
});




const apiKey = "d43f2a110ed12f1279ce9d2dc56a6bd9";
const city = "Uppsala";

document.addEventListener("DOMContentLoaded", async event => {
    const weatherData = await getWeatherData(city);
    displayWeaterInfo(weatherData);
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Kunde inte hämta väder-data");
    }

    return await response.json();
}

function displayWeaterInfo(data) {

    console.log(data);

    const { main: { temp },
        weather: [{ id }] } = data;

    const currentTemp = `${(temp - 273.15).toFixed(0)}`;
    const weatherID = id;

    const weatherString = document.createElement("p");
    weatherString.innerHTML = `Idag får jag rasta pudeln Saskia i ${currentTemp}°C och ${getWeaterTranslation(weatherID)}.`;

    weatherString.classList.add("weather");
    document.getElementById("footer").appendChild(weatherString);
}

function getWeaterTranslation(weatherID) {
    switch (true) {
        case (weatherID >= 200 && weatherID < 300):
            return "åska";
        case (weatherID >= 300 && weatherID < 400):
            return "duggregn";
        case (weatherID >= 500 && weatherID < 600):
            return "regn";
        case (weatherID >= 600 && weatherID < 700):
            return "snö";
        case (weatherID >= 700 && weatherID < 800):
            return "dålig sikt";
        case (weatherID === 800):
            return "sol";
        case (weatherID >= 801 && weatherID < 810):
            return "mulet väder";
        default:
            return "oklart väder";
    }
}