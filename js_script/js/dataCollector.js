// Data Collector as external include

let ip, country_code, city, latitude, longitude, postal;

const collectData = () => {
    fetch('https://ipwho.is')
        .then((response) => response.json())
        .then((data) =>{
            ip = data.ip;
            country_code = data.country_code;
            city = data.city;
            latitude = data.latitude;
            longitude = data.longitude;
            postal = data.postal;
        })
        .then(

        );
}

const sendData = () =>{
    fetch('')
}


// Logging in console all fields
const logToConsole = () => {
    console.log(geolocation);
}

// Collect all information after page load
window.onload = () => {
    collectData();

    // Execute log
    // logToConsole();
}



