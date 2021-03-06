import axios from 'axios'
import config from '../../config';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${config.API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function getWeatherFunc(city) {
  const url = `${ROOT_URL}&q=${city}.us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
