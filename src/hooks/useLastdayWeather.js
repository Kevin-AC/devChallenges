import { useState, useEffect } from 'react'
const LAST_5_DAYS = 'Api/5DaysData.json'
export function useLastDayWeather () {
  const [days, setDays] = useState()
  useEffect(() => {
    fetch(LAST_5_DAYS)
      .then(res => res.json())
      .then(response => {
        setDays(response)
      })
  }, [])
  return { days }
}
