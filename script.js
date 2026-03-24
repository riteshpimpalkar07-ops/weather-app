async function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "fa8e2124b9aa11412a66642c53bd7554";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weather").innerText = "City not found!";
            return;
        }

        document.getElementById("weather").innerHTML = `
            <p><b>${data.name}</b></p>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>🌥 Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("weather").innerText = "Error fetching data!";
    }
}
