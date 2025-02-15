
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');


const forecastToday = document.querySelector('#forecast-today');
const forecastTomorrow = document.querySelector('#forecast-tomorrow');
const forecastDayAfter = document.querySelector('#forecast-dayafter');


const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-22.9704&lon=-46.9958&appid=6b5a2a5e3fe1147d5dca471780699db7&units=metric';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-22.9704&lon=-46.9958&appid=6b5a2a5e3fe1147d5dca471780699db7&units=metric';

const localImagePath = 'images/weather_icon.png';

async function apiFetch() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    weatherIcon.setAttribute('src', localImagePath);
    weatherIcon.setAttribute('alt', 'Local weather icon');

    currentTemp.innerHTML = `<strong>${Math.round(data.main.temp)}</strong> &deg;C`;

    weatherDesc.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

    humidity.textContent = `Humidity : ${data.main.humidity}%`;

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString(`en-US`, {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString(`en-US`, {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    sunrise.textContent = `Sunrise — ${sunriseTime}`
    sunset.textContent = `Sunset — ${sunsetTime}`
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayForecast(data) {
    const forecastList = data.list;
    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);

    const todayDate = today.toISOString().split('T')[0];
    const tomorrowDate = tomorrow.toISOString().split('T')[0];
    const dayAfterDate = dayAfter.toISOString().split('T')[0];
    console.log(todayDate, tomorrowDate, dayAfterDate);

    const todayForecast = forecastList.find(item => item.dt_txt.includes(todayDate) && item.dt_txt.includes('00:00'));
    const tomorrowForecast = forecastList.find(item => item.dt_txt.includes(tomorrowDate) && item.dt_txt.includes('00:00'));
    const dayAfterForecast = forecastList.find(item => item.dt_txt.includes(dayAfterDate) && item.dt_txt.includes('00:00'));

    if (todayForecast) {
        forecastToday.innerHTML = `Today: ${Math.round(todayForecast.main.temp)} &deg;C`;
    }
    if (tomorrowForecast) {
        forecastTomorrow.innerHTML = `${tomorrow.toLocaleDateString('en-US', { weekday: 'long' })}: ${Math.round(tomorrowForecast.main.temp)} &deg;C`;
    }
    if (dayAfterForecast) {
        forecastDayAfter.innerHTML = `${dayAfter.toLocaleDateString('en-US', { weekday: 'long' })}: ${Math.round(dayAfterForecast.main.temp)} &deg;C`;
    }
}

apiFetch();
getForecast();