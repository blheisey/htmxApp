

const { onRequest } = require("firebase-functions/v2/https");
const pug = require("pug");
const axios = require("axios");
require('dotenv').config();
const weatherApiKey = process.env.WEATHER_API_KEY;


exports.getWeatherHeading = onRequest(async (request, response) => {
  let city = "Missoula";

  try {
    const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`;
    const weatherApiUrl2 = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}&aqi=no`;
    const res = await axios.get(weatherApiUrl);
    const res2 = await axios.get(weatherApiUrl2);

    const data = res.data;
    const data2 = res2.data;
    const template = pug.compileFile("weatherResult.pug");
    const markup = template({
      location: data.location.name,
      temperature: data.current.temp_f,
      high: data2.forecast.forecastday[0].day.maxtemp_f,
      low: data2.forecast.forecastday[0].day.mintemp_f,
      condition: data.current.condition.text,
      feelsLike: data.current.feelslike_f,
      wind: data2.current.wind_mph,
      gust: data2.current.gust_mph,
      windDegree: data2.current.wind_degree,
      windDirection: data2.current.wind_dir,
      chanceOfRain: data2.forecast.forecastday[0].day.daily_chance_of_rain,
      precip: data2.current.precip_in,
      uvIndex: data2.current.uv,
      humidity: data2.current.humidity,
      dewPoint: data2.current.dewpoint_f,
      visibility: data2.current.vis_miles,
      cloudCover: data2.current.cloud,
      sunrise: data2.forecast.forecastday[0].astro.sunrise,
      sunset: data2.forecast.forecastday[0].astro.sunset,
    });

    response.status(200).send(markup);
  } catch (err) {
    const template = pug.compileFile("weatherResult.pug");
    const markup = template({ error: "Could not fetch weather." });
    response.status(500).send(markup);
  }
});




