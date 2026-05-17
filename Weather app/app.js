async function checkWeather() {

    const input = document.querySelector(".search input").value;

    const apiKey = "4d8143d0e49eab89e2add4feb0826513";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&units=metric`

    if (input == "") {
        document.querySelector('.error').style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
        document.querySelector('.error').innerHTML = 'enter city name';
        return
    }

    const response = await fetch(apiUrl);
    
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
        return
    }

    const data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.tem').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if (data.weather[0].main == 'clouds') {
        document.querySelector('.weather-icon').src = './images/clouds.png'
    } else if (data.weather[0].main == 'rain') {
        document.querySelector('.weather-icon').src = './images/rain.png'
    } else if (data.weather[0].main == 'snow') {
        document.querySelector('.weather-icon').src = './images/snow.png'
    } else if (data.weather[0].main == 'drizzle') {
        document.querySelector('.weather-icon').src = './images/drizzle.png'
    } else if (data.weather[0].main == 'clear') {
        document.querySelector('.weather-icon').src = './images/clear.png'
    } else if (data.weather[0].main == 'mist') {
        document.querySelector('.weather-icon').src = './images/mist.png'
    }

    document.querySelector(".weather").style.display = 'block';
    document.querySelector('.error').style.display = 'none';

}




