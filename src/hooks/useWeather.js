import { useState, useEffect } from 'react'
import { getWeather } from '../services/Weather'

export function useWeather () {
  const [data, setData] = useState()
  useEffect(() => {
    getWeather().then(setData)
  }, [])
  return { data }
}
