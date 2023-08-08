const LOCAL_WEATHER_API = 'Api/Apartado.json'

export const getWeather = (latitude, longitude) => {
  if (latitude && longitude) {
    //  console.log(latitude, longitude)
    // const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=0a24c3c97422d75fef0a7cd0b54595d4`
    return fetch(LOCAL_WEATHER_API)
      .then(resp => resp.json())
      .then(data => {
        const respose = data
        return respose
      })
      .catch(error => {
        console.error('Error fetching weather data:', error)
        throw new Error('Hubo un error al obtener los datos del clima')
      })
  } else {
    // Si no tenemos ambas coordenadas, devolver una promesa rechazada con un mensaje
    return Promise.reject(new Error('No se proporcionaron coordenadas válidas para hacer el fetch'))
  }
}
