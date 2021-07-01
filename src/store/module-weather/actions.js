import axios from 'axios'

export async function GET_WEATHER_API({state, commit}) {
  let config = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    params: {
      q: 'tyumen, ru',
      cnt: '16',
      units: 'metric'
    },
    headers: {
      'x-rapidapi-key': 'Oq0axI3oedmshMIg3Rt5L3RmeRR4p1cZBgljsnUMZtJUgyz0x0',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
  };

  let response = await axios.request(config);
  let weather = response.data.list;
  commit('SET_WEATHER', weather);
}