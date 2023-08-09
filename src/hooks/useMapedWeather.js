import { useLastDayWeather } from './useLastdayWeather'
import { useCoords } from './useCoords'
export function useMapedWeather () {
  const { latitude, longitude } = useCoords()
  const { days, timeZone } = useLastDayWeather(latitude, longitude)
  const actualDay = days?.list[0].dt_txt.slice(0, 10)
  // console.log(actualDay)
  const timezone = timeZone
  const mappedWeather = []
  const indice = [5, 13, 21, 29, 37]

  for (const index of indice) {
    const date = days?.list[index].dt_txt.slice(0, 10)
    const icon = days?.list[index].weather[0].icon
    const tempMax = days?.list[index].main.temp_max.toFixed()
    const tempMin = days?.list[index].main.temp_min.toFixed()
    mappedWeather.push({
      date, tempMax, tempMin, icon
    })
  }

  return { daysList: mappedWeather, timezone, actualDay }
}
