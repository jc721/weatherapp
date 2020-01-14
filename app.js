// api key : 82005d27a116c2880c8f0fcb866998a0
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

