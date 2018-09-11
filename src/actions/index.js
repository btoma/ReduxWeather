import axios from 'axios';

const API_KEY = '242a31beb4615140fd945c4fa8188a4a';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export  function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // behave like jquery ajax request reach out to url in form of get and return promise.
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}