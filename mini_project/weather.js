import readline from "readline/promises";
// import https from "https";

const API_KEY = "7c953f977608c762fcad346d65d0f99f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found. Please check the city name.");
    }
    const weatherData = await response.json();
    // console.log(weatherData)
    console.log("\nWeather Information:");
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed}m/s\n`);
  } catch (error) {
    console.log("Error", error);
  }
};

const city = await rl.question("Enter a city name to get it's weather:");
await getWeather(city);
rl.close();
