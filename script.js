document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    getWeather(searchInput);
  });
  
  async function getWeather(country) {
    const apiKey = 'd93de1abad35647980264a8343089c6f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Image">
    `;
  }