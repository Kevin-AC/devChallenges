import { useState, useEffect } from 'react'
import { getWeather } from '../services/Weather'
import { useCoords } from './useCoords'
export function useWeather () {
  const { latitude, longitude } = useCoords()
  const [data, setData] = useState()
  useEffect(() => {
    getWeather(latitude, longitude).then(setData)
  }, [latitude, longitude])
  return { data }
}
