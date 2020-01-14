const apiKey = '416e0f0dd8c8e9042517b54f30bf565c';
let latitude;
let longitude;
const notification = document.getElementsByClassName('notification')[0];

getLocation();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
}

function onSuccess(position) {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    const weather = fetch('https://api.openweathermap.org/data/2.5/weather?' 
                            + 'lat=' + latitude 
                            + '&lon=' + longitude 
                            + '&appid=' + apiKey);

    
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

