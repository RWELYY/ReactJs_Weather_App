import axios from "axios";

const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=24.7&lon=46.5&appid=b8efc4933a3f228f4c388b6f06771639";

export function getWeather(cancelToken) {
  return axios
    .get(API_URL, { cancelToken })  
    .then((response) => {
      const data = response.data;

      return {
        number: Math.round(data.main.temp - 272.15),
        min: Math.round(data.main.temp_min - 272.15),
        max: Math.round(data.main.temp_max - 272.15),
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };
    });
}
