import { useLastDayWeather } from './useLastdayWeather'

export function useMapedWeather () {
  const { days } = useLastDayWeather()
  // console.log(days)
  const mappedWeather = []
  const indice = [0, 6, 14, 22, 30]

  for (const index of indice) {
    const date = days?.list[index].dt_txt.slice(0, 10)
    const tempMax = days?.list[index].main.temp_max.toFixed()
    const tempMin = days?.list[index].main.temp_min.toFixed()
    mappedWeather.push({
      date, tempMax, tempMin
    })
  }

  return { daysList: mappedWeather }
}
