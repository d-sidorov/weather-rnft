export function GET_WEATHER(state) {
  return state.weather
}

export function GET_WEATHER_BY_DAY(state) {
  return function (day) {
    return state.weather[day];
  }
}
