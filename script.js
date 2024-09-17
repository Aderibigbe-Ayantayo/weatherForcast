document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const city = document.getElementById('cityInput').value;
    const apiKey = 'da2903db4a0d7ce6ac38c84ae79cd4d9'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.querySelector('.weather-info').innerHTML = weatherInfo;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.weather-info').innerHTML = `<p>${error.message}</p>`;
    }
});

