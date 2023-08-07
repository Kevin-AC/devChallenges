import { useWeather } from '../hooks/useWeather'
export function useMapedForecast () {
  const { data } = useWeather()
  const mappedForecast = {
    temp: data?.main.temp,
    description: data?.weather[0].description,
    city: data?.name,
    wind: data?.wind.speed,
    pressure: data?.main.pressure,
    humidity: data?.main.humidity,
    visibility: data?.visibility

  }
  return { data: mappedForecast }
}
