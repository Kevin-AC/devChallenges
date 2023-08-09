import { useState, useEffect } from 'react'
// const LAST_5_DAYS_LOCAL = 'Api/5DaysData.json'

export function useLastDayWeather (latitude, longitude) {
  const [days, setDays] = useState()
  const [timeZone, setTimeZone] = useState()
  useEffect(() => {
    if (!latitude && !longitude) return
    const LAST_5_DAYS = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=0a24c3c97422d75fef0a7cd0b54595d4`
    fetch(LAST_5_DAYS)
      .then(res => res.json())
      .then(response => {
        setDays(response)
        setTimeZone(response.city.timezone)
      })
  }, [latitude, longitude])

  return { days, timeZone }
}
