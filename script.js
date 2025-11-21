const apiKey = "aff3832e0abdfe16397faad2dba78b97"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data);

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = data.main.temp
    document.querySelector('.humidity').innerHTML = data.main.humidity
    document.querySelector('.wind').innerHTML = data.wind.speed
    
    
}

checkWeather()