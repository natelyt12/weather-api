const API_KEY = '91b98387f712edae071c27bab33f5dac';
const searchInput = document.getElementById("searchbar");
const cityName = document.querySelector(".city");
const desc = document.querySelector(".desc");
const icon = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windspeed");

function search() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${API_KEY}&units=metric&lang=vi`)

        .then(response => response.json())

        .then(data => {
            console.log(data)
            cityName.innerHTML = data.name
            desc.innerHTML = data.weather[0].description
            temp.innerHTML = `${Math.floor(data.main.temp)}&degC`
            humidity.innerHTML = `${data.main.humidity} %`
            windSpeed.innerHTML = `${Math.floor(data.wind.speed)} km/h`
            icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

            // Unix format
            let unix_sunrise = data.sys.sunrise;
            var sunrise_date = new Date(unix_sunrise * 1000);
            var sunrise_hours = sunrise_date.getHours();
            var sunrise_minutes = "0" + sunrise_date.getMinutes();
            var formatted_sunrise = sunrise_hours + ':' + sunrise_minutes.substr(-2);

            sunrise.innerHTML = formatted_sunrise + " sáng";

            let unix_sunset = data.sys.sunset;
            var sunset_date = new Date(unix_sunset * 1000);
            var sunset_hours = sunset_date.getHours();
            var sunset_minutes = "0" + sunset_date.getMinutes();
            var formatted_sunset = sunset_hours + ':' + sunset_minutes.substr(-2);

            sunset.innerHTML = formatted_sunset + " chiều";

        })
}
