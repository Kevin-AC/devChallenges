const LOCAL_WEATHER_API = 'Api/Apartado.json'
// const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?lat=7.8802&lon=-76.6246&units=metric&appid=0a24c3c97422d75fef0a7cd0b54595d4'
export const getWeather = () => {
  return fetch(LOCAL_WEATHER_API)
    .then(resp => resp.json())
    .then(data => {
      const respose = data
      // console.log(respose)
      return respose
    })
}
