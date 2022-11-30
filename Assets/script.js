let searchInp = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let humidity = document.querySelector('.weather_indicator--humidity>.value');
let wind = document.querySelector('.weather_indicator--wind>.value');
let pressure = document.querySelector('.weather_indicator--pressure>.value');
let image = document.querySelector('.weather_image');
let temperature = document.querySelector('.weather_temperature>.value');   

let weatherAPIKey = '5f5c9247dbc5988c4d02504500ba6963';
let weatherBaseEndpoint = 'https://api.openweathermap.org/data/2.5/weather?appid=' + weatherAPIKey;

let getWeatherByCityName = async (city) => {
    let endpoint = weatherBaseEndpoint + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}

searchInp.addEventListener('keydown', async (e) => {
    if(e.keyCode === 13) {
        let weather = await getWeatherByCityName(searchInp.value);
        console.log(weather);
        //updateCurrentWeather(weather);
    }
})

let updateCurrentWeather = (data) => {
    console.log(data); 
    city.textContent = data.name + ', ' + data.sys.country;
    day.textContent = dayOfWeek();
    //humidity.textContent = 
}

//let dayOfWeek = () => {
  //  return new Date().toLocaleDateString('en-EN', {'weekday': 'long'});
//}