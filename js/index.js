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

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

    return await response.json();
}

function displayWeaterInfo(data) {

}

function getWeaterEmoji(weatherId) {

}

// function displayError(message){

// }