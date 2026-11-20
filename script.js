const weather_form = document.querySelector("#weather-form");
const city_input = document.querySelector("#city-input");
const status_msg = document.querySelector("#status-msg");
const city_display = document.querySelector("#city-display");
const weather_card = document.querySelector("#weather-card");
const temp_display = document.querySelector("#temp-display");
const humidity_display= document.querySelector("#humidity-display");
const wind_display = document.querySelector("#wind-display")



weather_form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = city_input.value.trim();
    city_input.value="";
    status_msg.textContent=`Searching for weather of ${city}`;
    getCoordinates(city);

    const location = await getCoordinates(city);
    city_display.innerHTML=`
            <h4>Latitude: ${location.latitude}</h4>
            <h4>Longitutde: ${location.longitude}</h4>
            <h4>Name: ${location.name}</h4>
            <h4>Country: ${location.country}</h4>
        `

    const weather = await getWeather(location.latitude, location.longitude);
    
    temp_display.textContent = `Temperature is: ${weather.temperature_2m}`;
    humidity_display.textContent = `Humidity is: ${weather.relative_humidity_2m}`;
    wind_display.textContent = `Wind is:${weather.wind_speed_10m}`;

    });

async function getCoordinates(city){
    try{
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
        const data = await response.json();
        
        if (!data.results || data.results.length === 0){
            status_msg.textContent="City not found. Cheak the spelling!."
            return null;
        }
        return data.results[0];
        
        
    }catch{

        status_msg.textContent="cheak your internet connection";
        return null;

    }
}

async function getWeather(lat,lon){
    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        const data = await response.json();

        return data.current;
    }catch{
        status_msg.textContent="ERROR";
    }
}
