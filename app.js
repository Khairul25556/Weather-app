const place = document.querySelector('.place');
const search = document.querySelector('.search');
const windDir = document.querySelector('.wind-dir');
const humidity = document.querySelector('.humidity');
const currentTemp = document.querySelector('.current-temp');
const weatherIcon = document.querySelector('.weather-icon');

function getData(location) {
    fetch(
        `https://api.weatherapi.com/v1/current.json?key=5e94353a587b40029ca52931253103&q=${location}&aqi=no`  //fetch() is used to make a GET request to the WeatherAPI
    ).then(res => res.json()) //converts the API response (in raw JSON format) into a JavaScript object.
    .then(data => replaceData(data)); // Passes the data to replaceData function
}
function replaceData(data){
    weatherIcon.src = `https:${data.current.condition.icon}`;
    place.textContent = data.location.country;
    currentTemp.textContent = `${data.current.temp_c}°C`;
    humidity.textContent = `${data.current.humidity}%`;
    windDir.textContent = data.current.wind_dir;
}

    document.addEventListener('keydown', (e) => {
        if (e.key === "Enter"){
            getData(search.value);
            search.value = "";
        }
    })

getData("bangladesh");