const apiKey = '416e0f0dd8c8e9042517b54f30bf565c';
let latitude;
let longitude;
const notification = document.getElementsByClassName('notification')[0];
let weather;

getLocation();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
}

function kelvinToCelsius(temp) {
    return temp - 273.15;
}

function onSuccess(position) {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    const weatherCall = fetch('https://api.openweathermap.org/data/2.5/weather?'
                            + 'lat=' + latitude
                            + '&lon=' + longitude
                            + '&appid=' + apiKey);

    weatherCall.then(response => response.json())
            .then(weatherInfo => {
                console.log(weatherInfo)
                console.log(weatherInfo.weather[0].icon);
                console.log(kelvinToCelsius(weatherInfo.main.temp).toFixed(1));
                console.log(weatherInfo.weather[0].main);
                console.log(weatherInfo.name);
            });
}

function onError(error) {
    console.error('No no no ', error);
    // 1. take message and put it in a p
    const p = document.createElement('p');
    p.innerHTML = error.message;
    // 2. display: block (notification div)
    notification.style.display = 'block';
    // 3. append p inside notification
    notification.appendChild(p);
}

